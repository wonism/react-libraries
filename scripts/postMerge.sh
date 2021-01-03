#! /bin/bash

function postMerge() {
  local files=($(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD))

  local isPnpChanged=false

  for file in ${files[@]}; do
    if [[ $file == '.pnp.js' ]]; then
      isPnpChanged=true
    fi
  done

  if [[ "$isPnpChanged" = true ]]; then
    yarn
  fi
}

postMerge
