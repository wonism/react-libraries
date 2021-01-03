#! /bin/bash

function setConfig() {
  local target=""
  local module=""
  local outDir=""

  if [ "$1" == "esm" ]; then
    local target="esnext"
    local module="esnext"
    local outDir="lib\/esm"
  else
    local target="es5"
    local module="commonjs"
    local outDir="lib\/cjs"
  fi

  perl -pi -e "s/\"target\": \".+\"/\"target\": \"$target\"/g;s/\"module\": \".+\"/\"module\": \"$module\"/g;" ./tsconfig.json
  perl -pi -e "s/\"outDir\": \".+\"/\"outDir\": \"$outDir\"/g" ./packages/**/tsconfig.json
}

function build() {
  setConfig $1
  yarn tsc --build tsconfig.project.json
}

build $1
