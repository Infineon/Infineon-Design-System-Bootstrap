/*! For license information please see hero-banner-HeroBanner-stories.cb19f6e7.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./node_modules/@fortawesome/react-fontawesome/index.es.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return FontAwesomeIcon}));var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.es.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function camelize(string){return function _isNumerical(obj){return(obj-=0)==obj}(string)?string:(string=string.replace(/[\-_\s]+(.)?/g,(function(match,chr){return chr?chr.toUpperCase():""}))).substr(0,1).toLowerCase()+string.substr(1)}var _excluded$1=["style"];function styleToObject(style){return style.split(";").map((function(s){return s.trim()})).filter((function(s){return s})).reduce((function(acc,pair){var i=pair.indexOf(":"),prop=camelize(pair.slice(0,i)),value=pair.slice(i+1).trim();return prop.startsWith("webkit")?acc[function capitalize(val){return val.charAt(0).toUpperCase()+val.slice(1)}(prop)]=value:acc[prop]=value,acc}),{})}var PRODUCTION=!1;try{PRODUCTION=!0}catch(e){}function normalizeIconArgs(icon){return icon&&"object"===_typeof(icon)&&icon.prefix&&icon.iconName&&icon.icon?icon:_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.c.icon?_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.c.icon(icon):null===icon?null:icon&&"object"===_typeof(icon)&&icon.prefix&&icon.iconName?icon:Array.isArray(icon)&&2===icon.length?{prefix:icon[0],iconName:icon[1]}:"string"==typeof icon?{prefix:"fas",iconName:icon}:void 0}function objectWithKey(key,value){return Array.isArray(value)&&value.length>0||!Array.isArray(value)&&value?_defineProperty({},key,value):{}}var _excluded=["forwardedRef"];function FontAwesomeIcon(_ref){var forwardedRef=_ref.forwardedRef,props=_objectWithoutProperties(_ref,_excluded),iconArgs=props.icon,maskArgs=props.mask,symbol=props.symbol,className=props.className,title=props.title,titleId=props.titleId,maskId=props.maskId,iconLookup=normalizeIconArgs(iconArgs),classes=objectWithKey("classes",[].concat(_toConsumableArray(function classList(props){var _classes,beat=props.beat,fade=props.fade,beatFade=props.beatFade,bounce=props.bounce,shake=props.shake,flash=props.flash,spin=props.spin,spinPulse=props.spinPulse,spinReverse=props.spinReverse,pulse=props.pulse,fixedWidth=props.fixedWidth,inverse=props.inverse,border=props.border,listItem=props.listItem,flip=props.flip,size=props.size,rotation=props.rotation,pull=props.pull,classes=(_defineProperty(_classes={"fa-beat":beat,"fa-fade":fade,"fa-beat-fade":beatFade,"fa-bounce":bounce,"fa-shake":shake,"fa-flash":flash,"fa-spin":spin,"fa-spin-reverse":spinReverse,"fa-spin-pulse":spinPulse,"fa-pulse":pulse,"fa-fw":fixedWidth,"fa-inverse":inverse,"fa-border":border,"fa-li":listItem,"fa-flip-horizontal":"horizontal"===flip||"both"===flip,"fa-flip-vertical":"vertical"===flip||"both"===flip},"fa-".concat(size),null!=size),_defineProperty(_classes,"fa-rotate-".concat(rotation),null!=rotation&&0!==rotation),_defineProperty(_classes,"fa-pull-".concat(pull),null!=pull),_defineProperty(_classes,"fa-swap-opacity",props.swapOpacity),_classes);return Object.keys(classes).map((function(key){return classes[key]?key:null})).filter((function(key){return key}))}(props)),_toConsumableArray(className.split(" ")))),transform=objectWithKey("transform","string"==typeof props.transform?_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.c.transform(props.transform):props.transform),mask=objectWithKey("mask",normalizeIconArgs(maskArgs)),renderedIcon=Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.a)(iconLookup,_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},classes),transform),mask),{},{symbol:symbol,title:title,titleId:titleId,maskId:maskId}));if(!renderedIcon)return function log(){var _console;!PRODUCTION&&console&&"function"==typeof console.error&&(_console=console).error.apply(_console,arguments)}("Could not find icon",iconLookup),null;var abstract=renderedIcon.abstract,extraProps={ref:forwardedRef};return Object.keys(props).forEach((function(key){FontAwesomeIcon.defaultProps.hasOwnProperty(key)||(extraProps[key]=props[key])})),convertCurry(abstract[0],extraProps)}FontAwesomeIcon.displayName="FontAwesomeIcon",FontAwesomeIcon.propTypes={beat:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,border:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,bounce:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,fade:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,flash:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,mask:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),maskId:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,fixedWidth:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,inverse:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,flip:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["horizontal","vertical","both"]),icon:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),listItem:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,pull:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["right","left"]),pulse:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,rotation:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([0,90,180,270]),shake:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,size:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,spinPulse:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,spinReverse:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,symbol:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,titleId:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,transform:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),swapOpacity:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool},FontAwesomeIcon.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var convertCurry=function convert(createElement,element){var extraProps=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof element)return element;var children=(element.children||[]).map((function(child){return convert(createElement,child)})),mixins=Object.keys(element.attributes||{}).reduce((function(acc,key){var val=element.attributes[key];switch(key){case"class":acc.attrs.className=val,delete element.attributes.class;break;case"style":acc.attrs.style=styleToObject(val);break;default:0===key.indexOf("aria-")||0===key.indexOf("data-")?acc.attrs[key.toLowerCase()]=val:acc.attrs[camelize(key)]=val}return acc}),{attrs:{}}),_extraProps$style=extraProps.style,existingStyle=void 0===_extraProps$style?{}:_extraProps$style,remaining=_objectWithoutProperties(extraProps,_excluded$1);return mixins.attrs.style=_objectSpread2(_objectSpread2({},mixins.attrs.style),existingStyle),createElement.apply(void 0,[element.tag,_objectSpread2(_objectSpread2({},mixins.attrs),remaining)].concat(_toConsumableArray(children)))}.bind(null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement)},"./node_modules/@restart/ui/esm/Button.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return useButtonProps}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["as","disabled"];function useButtonProps({tagName:tagName,disabled:disabled,href:href,target:target,rel:rel,onClick:onClick,tabIndex:tabIndex=0,type:type}){tagName||(tagName=null!=href||null!=target||null!=rel?"a":"button");const meta={tagName:tagName};if("button"===tagName)return[{type:type||"button",disabled:disabled},meta];const handleClick=event=>{(disabled||"a"===tagName&&function isTrivialHref(href){return!href||"#"===href.trim()}(href))&&event.preventDefault(),disabled?event.stopPropagation():null==onClick||onClick(event)};return"a"===tagName&&(href||(href="#"),disabled&&(href=void 0)),[{role:"button",disabled:void 0,tabIndex:disabled?void 0:tabIndex,href:href,target:"a"===tagName?target:void 0,"aria-disabled":disabled||void 0,rel:"a"===tagName?rel:void 0,onClick:handleClick,onKeyDown:event=>{" "===event.key&&(event.preventDefault(),handleClick(event))}},meta]}const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{as:asProp,disabled:disabled}=_ref,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);const[buttonProps,{tagName:Component}]=useButtonProps(Object.assign({tagName:asProp,disabled:disabled},props));return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,Object.assign({},props,buttonProps,{ref:ref}))}));Button.displayName="Button",__webpack_exports__.a=Button},"./node_modules/classnames/index.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType)if(arg.toString===Object.prototype.toString)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key);else classes.push(arg.toString())}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/core-js/modules/es.array.index-of.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),$IndexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),un$IndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!un$IndexOf&&1/un$IndexOf([1],1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("indexOf");$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!STRICT_METHOD},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?un$IndexOf(this,searchElement,fromIndex)||0:$IndexOf(this,searchElement,fromIndex)}})},"./node_modules/react-bootstrap/esm/Button.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_restart_ui_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@restart/ui/esm/Button.js"),_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-bootstrap/esm/ThemeProvider.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({as:as,bsPrefix:bsPrefix,variant:variant,size:size,active:active,className:className,...props},ref)=>{const prefix=Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.b)(bsPrefix,"btn"),[buttonProps,{tagName:tagName}]=Object(_restart_ui_Button__WEBPACK_IMPORTED_MODULE_2__.b)({tagName:as,...props}),Component=tagName;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component,{...buttonProps,...props,ref:ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,prefix,active&&"active",variant&&`${prefix}-${variant}`,size&&`${prefix}-${size}`,props.href&&props.disabled&&"disabled")})}));Button.displayName="Button",Button.defaultProps={variant:"primary",active:!1,disabled:!1},__webpack_exports__.a=Button},"./node_modules/react-bootstrap/esm/ThemeProvider.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return useBootstrapPrefix})),__webpack_require__.d(__webpack_exports__,"a",(function(){return useBootstrapBreakpoints})),__webpack_require__.d(__webpack_exports__,"c",(function(){return useIsRTL}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_BREAKPOINTS=["xxl","xl","lg","md","sm","xs"],ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({prefixes:{},breakpoints:DEFAULT_BREAKPOINTS}),{Consumer:Consumer,Provider:Provider}=ThemeContext;function useBootstrapPrefix(prefix,defaultPrefix){const{prefixes:prefixes}=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);return prefix||prefixes[defaultPrefix]||defaultPrefix}function useBootstrapBreakpoints(){const{breakpoints:breakpoints}=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);return breakpoints}function useIsRTL(){const{dir:dir}=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);return"rtl"===dir}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./public-storybook/1920x1080_ratio-16-9.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/1920x1080_ratio-16-9.3b6eaa3c.png"},"./src/button/Button.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","variant","color","size","disabled","icon","iconPosition","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,variant:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["solid","outline"]),color:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["default","highlight","success","danger","warning"]),size:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["s","m","l"]),active:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,href:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,icon:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,iconPosition:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["left","right"])},Button=function Button(_ref){var label=_ref.label,variant=_ref.variant,color=_ref.color,size=_ref.size,disabled=_ref.disabled,icon=_ref.icon,iconPosition=_ref.iconPosition,children=_ref.children,props=_objectWithoutProperties(_ref,_excluded),bsColor="default"===color?"primary":"highlight"===color?"secondary":color,bsVariant="outline"===variant?"outline-"+bsColor:bsColor,bsSize="s"===size?"sm":"l"===size?"lg":void 0,iconPositionClass="left"===iconPosition?"ifx__btn-icon--before":"right"===iconPosition?"ifx__btn-icon--after":void 0,Icon=function Icon(){return icon?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.a,{icon:["fal","check"],className:iconPositionClass}):null};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({variant:bsVariant,size:bsSize,disabled:disabled,children:children||label},props,{children:"left"===iconPosition?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Icon,{}),children]}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[children,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Icon,{})]})}))};Button.displayName="Button",Button.propTypes=propTypes,Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{description:"Set the button text",type:{name:"string"},required:!1},variant:{description:"Set button variant",type:{name:"enum",value:[{value:'"solid"',computed:!1},{value:'"outline"',computed:!1}]},required:!1},color:{description:"Set button color",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"highlight"',computed:!1},{value:'"success"',computed:!1},{value:'"danger"',computed:!1},{value:'"warning"',computed:!1}]},required:!1},size:{description:"Specifies a large or small button",type:{name:"enum",value:[{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1}]},required:!1},active:{description:"Manually set the visual state of the button to `:active`",type:{name:"bool"},required:!1},disabled:{description:"Disables the Button, preventing mouse events",type:{name:"bool"},required:!1},href:{description:"Providing a `href` will render an `<a>` element, styled as a button.",type:{name:"string"},required:!1},icon:{description:"Set icon",type:{name:"bool"},required:!1},iconPosition:{description:"Specifies the icon position",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/Button.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/button/Button.jsx"})},"./src/hero-banner/HeroBanner.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Mainpage",(function(){return Mainpage})),__webpack_require__.d(__webpack_exports__,"Subpage",(function(){return Subpage}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),HeroBanner_HeroBanner=function HeroBanner(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children})};HeroBanner_HeroBanner.__docgenInfo={description:"",methods:[],displayName:"HeroBanner"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hero-banner/HeroBanner.jsx"]={name:"HeroBanner",docgenInfo:HeroBanner_HeroBanner.__docgenInfo,path:"src/hero-banner/HeroBanner.jsx"});var Button=__webpack_require__("./src/button/Button.jsx"),Slant=__webpack_require__("./src/slant/Slant.jsx"),_1920x1080_ratio_16_9=__webpack_require__("./public-storybook/1920x1080_ratio-16-9.png"),_1920x1080_ratio_16_9_default=__webpack_require__.n(_1920x1080_ratio_16_9),HeroBanner_stories_image=(__webpack_exports__.default={title:"Components/Hero Banner",component:HeroBanner_HeroBanner},{src:_1920x1080_ratio_16_9_default.a,alt:"16-9-s"}),HeroBanner_stories_MainpageTemplate=function MainpageTemplate(args){return Object(jsx_runtime.jsx)(HeroBanner_HeroBanner,Object.assign({},args,{children:Object(jsx_runtime.jsxs)("div",{className:"ifx__hero-banner",children:[Object(jsx_runtime.jsxs)(Slant.a,{slant:"bottom-right_to_left ifx__hero-banner-image",children:[Object(jsx_runtime.jsx)("img",{src:HeroBanner_stories_image.src,alt:HeroBanner_stories_image.alt,class:"img-fluid"}),Object(jsx_runtime.jsx)("div",{className:"ifx__hero-banner-overlay"})]}),Object(jsx_runtime.jsx)("div",{className:"ifx__hero-banner-body container",children:Object(jsx_runtime.jsxs)("div",{className:"col-lg-8",children:[Object(jsx_runtime.jsx)("div",{className:"ifx__hero-banner-sub-headline",children:Object(jsx_runtime.jsx)("span",{class:"ifx__hero-banner-padded-text",children:"Skyline"})}),Object(jsx_runtime.jsx)("h1",{className:"ifx__hero-banner-headline",children:Object(jsx_runtime.jsx)("span",{class:"ifx__hero-banner-padded-text",children:"Headline for the hero image with two rows!"})}),Object(jsx_runtime.jsx)(Button.a,{size:"s",href:"javascript:void(0)",children:"Primary"})]})})]})}))};HeroBanner_stories_MainpageTemplate.displayName="MainpageTemplate";var HeroBanner_stories_SubpageTemplate=function SubpageTemplate(args){return Object(jsx_runtime.jsx)(HeroBanner_HeroBanner,Object.assign({},args,{children:Object(jsx_runtime.jsx)(Slant.a,{slant:"bottom-right_to_left ifx__hero-banner-subpage",children:Object(jsx_runtime.jsx)("div",{className:"ifx__hero-banner-subpage-body container",children:Object(jsx_runtime.jsxs)("div",{className:"col-9 col-lg-8",children:[Object(jsx_runtime.jsx)("h1",{children:"Headline"}),Object(jsx_runtime.jsx)("p",{children:"Are you looking for reference designs, recommended boards or products that best fit your application? Infineon Technologies offers a wide range of ready to go semiconductor design solutions and reference schematics used in automotive, industrial power control, power management, sensing solutions and security in IoT applications."})]})})})}))};HeroBanner_stories_SubpageTemplate.displayName="SubpageTemplate";var Mainpage=HeroBanner_stories_MainpageTemplate.bind({});Mainpage.parameters={controls:{hideNoControlsWarning:!0}};var Subpage=HeroBanner_stories_SubpageTemplate.bind({});Subpage.parameters={controls:{hideNoControlsWarning:!0}},Mainpage.parameters=Object.assign({storySource:{source:'(args) => (\n  <HeroBanner {...args}>\n    <div className="ifx__hero-banner">\n      <Slant slant="bottom-right_to_left ifx__hero-banner-image">\n        <img src={image.src} alt={image.alt} class="img-fluid" />\n        <div className="ifx__hero-banner-overlay"></div>\n      </Slant>\n\n      <div className="ifx__hero-banner-body container">\n        <div className="col-lg-8">\n          <div className="ifx__hero-banner-sub-headline">\n            <span class="ifx__hero-banner-padded-text">\n              Skyline\n            </span>\n          </div>\n          <h1 className="ifx__hero-banner-headline">\n            <span class="ifx__hero-banner-padded-text">\n              Headline for the hero image with two rows!\n            </span>\n          </h1>\n          <Button size="s" href="javascript:void(0)">Primary</Button>\n        </div>\n      </div>\n    </div>\n  </HeroBanner>\n)'}},Mainpage.parameters),Subpage.parameters=Object.assign({storySource:{source:'(args) => (\n  <HeroBanner {...args}>\n    <Slant slant="bottom-right_to_left ifx__hero-banner-subpage"> \n      <div className="ifx__hero-banner-subpage-body container">\n        <div className="col-9 col-lg-8">\n          <h1>Headline</h1>\n          <p>Are you looking for reference designs, recommended boards or products that best fit your application? Infineon Technologies offers a wide range of ready to go semiconductor design solutions and reference schematics used in automotive, industrial power control, power management, sensing solutions and security in IoT applications.</p>\n        </div>\n      </div>\n    </Slant>\n  </HeroBanner>\n)'}},Subpage.parameters)},"./src/slant/Slant.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Slant}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["slant","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["none","top-right_to_left","top-left_to_right","right","bottom-right_to_left","bottom-left_to_right","left"]);var Slant=function Slant(_ref){var slant=_ref.slant,children=_ref.children;_objectWithoutProperties(_ref,_excluded);return slant&&"none"!==slant?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"ifx__slant--"+slant,children:children}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:children})};Slant.__docgenInfo={description:"",methods:[],displayName:"Slant"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/slant/Slant.jsx"]={name:"Slant",docgenInfo:Slant.__docgenInfo,path:"src/slant/Slant.jsx"})}}]);
//# sourceMappingURL=hero-banner-HeroBanner-stories.cb19f6e7.iframe.bundle.js.map