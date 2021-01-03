(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1078:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(46),__webpack_require__(39),__webpack_require__(30),__webpack_require__(35),__webpack_require__(1079),__webpack_require__(1080),__webpack_require__(6),__webpack_require__(40);var _clientApi=__webpack_require__(45),_clientLogger=__webpack_require__(33),_configFilename=__webpack_require__(1081);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1081:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1082:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(360).configure)([__webpack_require__(1083)],module,!1)}).call(this,__webpack_require__(102)(module))},1083:function(module,exports,__webpack_require__){var map={"./use-boolean-state/src/index.stories.tsx":1084};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1083},1084:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(13);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(83),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(479)),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(480);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var App=function App(){var _useBooleanState2=_slicedToArray(Object(___WEBPACK_IMPORTED_MODULE_4__.a)(!1),4),bool=_useBooleanState2[0],setTrue=_useBooleanState2[1],setFalse=_useBooleanState2[2],toggle=_useBooleanState2[3];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:"state: "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:String(bool)}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:setTrue,type:"button",children:"set to true"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:setFalse,type:"button",children:"set to false"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:toggle,type:"button",children:"toggle"})]})};App.displayName="App",Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("useBooleanState",module).addParameters({storySource:{source:"import * as React from 'react';\nimport { storiesOf } from '@storybook/react';\n\nimport useBooleanState from '.';\n\nconst App = () => {\n  const [bool, setTrue, setFalse, toggle] = useBooleanState(false);\n\n  return (\n    <div>\n      <span>\n        {'state: '}\n      </span>\n      <b>\n        {String(bool)}\n      </b>\n      <br />\n      <button onClick={setTrue} type=\"button\">\n        set to true\n      </button>\n      <button onClick={setFalse} type=\"button\">\n        set to false\n      </button>\n      <button onClick={toggle} type=\"button\">\n        toggle\n      </button>\n    </div>\n  );\n};\n\nstoriesOf('useBooleanState', module).add('example', () => <App />);\n",locationsMap:{example:{startLoc:{col:41,line:31},endLoc:{col:65,line:31},startBody:{col:52,line:31},endBody:{col:65,line:31}}}}}).add("example",(function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(App,{})}))}.call(this,__webpack_require__(196)(module))},480:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(13);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.a=function useBooleanState(){var initialBool=arguments.length>0&&void 0!==arguments[0]&&arguments[0],_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialBool),_useState2=_slicedToArray(_useState,2),bool=_useState2[0],setBool=_useState2[1],setTrue=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){setBool(!0)}),[]),setFalse=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){setBool(!1)}),[]),toggle=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){setBool((function(b){return!b}))}),[]);return[bool,setTrue,setFalse,toggle]}},483:function(module,exports,__webpack_require__){__webpack_require__(484),__webpack_require__(646),__webpack_require__(647),__webpack_require__(801),__webpack_require__(1020),__webpack_require__(1052),__webpack_require__(1057),__webpack_require__(1069),__webpack_require__(1071),__webpack_require__(1076),__webpack_require__(1078),module.exports=__webpack_require__(1082)},555:function(module,exports){},647:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(360)}},[[483,1,2]]]);
//# sourceMappingURL=main.ff1e0e924ec86856f1fa.bundle.js.map