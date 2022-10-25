(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/dropdowns/Dropdown.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Icon",(function(){return Icon})),__webpack_require__.d(__webpack_exports__,"Search",(function(){return Search})),__webpack_require__.d(__webpack_exports__,"Filter",(function(){return Filter}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),esm_Dropdown=__webpack_require__("./node_modules/react-bootstrap/esm/Dropdown.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","label","children","autoClose"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes={size:prop_types_default.a.oneOf(["s","m","l"]),active:prop_types_default.a.bool,label:prop_types_default.a.string,autoClose:prop_types_default.a.oneOf(["default","outside"])},Dropdown_Dropdown=function Dropdown(_ref){var size=_ref.size,label=_ref.label,children=_ref.children,_ref$autoClose=_ref.autoClose,autoClose=void 0===_ref$autoClose?"default":_ref$autoClose,props=_objectWithoutProperties(_ref,_excluded),bsSize="s"===size?"sm":"l"===size?"lg":void 0,bsAutoClose="default"===autoClose||autoClose;return Object(jsx_runtime.jsxs)(esm_Dropdown.a,{autoClose:bsAutoClose,children:[Object(jsx_runtime.jsx)(esm_Dropdown.a.Toggle,Object.assign({size:bsSize,"data-bs-toggle":"dropdown",variant:"primary"},props,{children:label})),Object(jsx_runtime.jsx)(esm_Dropdown.a.Menu,{renderOnMount:!0,children:children})]})};Dropdown_Dropdown.displayName="Dropdown",Dropdown_Dropdown.propTypes=propTypes,Dropdown_Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{autoClose:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"outside"',computed:!1}]},required:!1},size:{description:"Specifies a large or small Dropdown",type:{name:"enum",value:[{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1}]},required:!1},active:{description:"Manually set the visual state of the Dropdown to `:active`",type:{name:"bool"},required:!1},label:{description:"Set the Dropdown text",type:{name:"string"},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdowns/Dropdown.jsx"]={name:"Dropdown",docgenInfo:Dropdown_Dropdown.__docgenInfo,path:"src/dropdowns/Dropdown.jsx"});var SearchBar=__webpack_require__("./src/form-elements/SearchBar.jsx"),Checkbox=__webpack_require__("./src/form-elements/Checkbox.jsx"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),Form=__webpack_require__("./node_modules/react-bootstrap/esm/Form.js"),Dropdown_stories_DefaultTemplate=(__webpack_exports__.default={title:"Components/Dropdown",component:Dropdown_Dropdown,args:{label:"Secondary",size:"m",active:!1,autoClose:"default"}},function DefaultTemplate(args){return Object(jsx_runtime.jsxs)(Dropdown_Dropdown,Object.assign({},args,{children:[Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:"Action default"}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",active:!0,children:"Action default"}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:"Action default"}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:"Action default"}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:"Action default"})]}))});Dropdown_stories_DefaultTemplate.displayName="DefaultTemplate";var Dropdown_stories_IconTemplate=function IconTemplate(args){return Object(jsx_runtime.jsxs)(Dropdown_Dropdown,Object.assign({},args,{children:[Object(jsx_runtime.jsxs)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:[Object(jsx_runtime.jsx)(index_es.a,{icon:["fal","calendar"]}),"Action default"]}),Object(jsx_runtime.jsxs)(esm_Dropdown.a.Item,{href:"javascript:void(0)",active:!0,children:[Object(jsx_runtime.jsx)(index_es.a,{icon:["fal","calendar"]}),"Action default"]}),Object(jsx_runtime.jsxs)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:[Object(jsx_runtime.jsx)(index_es.a,{icon:["fal","calendar"]}),"Action default"]}),Object(jsx_runtime.jsxs)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:[Object(jsx_runtime.jsx)(index_es.a,{icon:["fal","calendar"]}),"Action default"]}),Object(jsx_runtime.jsxs)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:[Object(jsx_runtime.jsx)(index_es.a,{icon:["fal","calendar"]}),"Action default"]})]}))};Dropdown_stories_IconTemplate.displayName="IconTemplate";var Dropdown_stories_SearchTemplate=function SearchTemplate(args){return Object(jsx_runtime.jsxs)(Dropdown_Dropdown,Object.assign({},args,{children:[Object(jsx_runtime.jsx)(SearchBar.a,{className:"inf__dropdown-search",size:"s",autoFocus:!0}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",active:!0,children:"Action default"}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:"Action default"}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:"Action default"}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:"Action default"})]}))};Dropdown_stories_SearchTemplate.displayName="SearchTemplate";var Dropdown_stories_FilterTemplate=function FilterTemplate(args){return Object(jsx_runtime.jsxs)(Dropdown_Dropdown,Object.assign({},args,{children:[Object(jsx_runtime.jsxs)(Form.a.Select,{className:"inf__dropdown-select","aria-label":"Default select example",children:[Object(jsx_runtime.jsx)("option",{children:"Sort by"}),Object(jsx_runtime.jsx)("option",{value:"1",children:"One"}),Object(jsx_runtime.jsx)("option",{value:"2",children:"Two"}),Object(jsx_runtime.jsx)("option",{value:"3",children:"Three"})]}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:Object(jsx_runtime.jsx)(Checkbox.a,{id:"checkbox-1",label:"Action default"})}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:Object(jsx_runtime.jsx)(Checkbox.a,{id:"checkbox-2",label:"Action default"})}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:Object(jsx_runtime.jsx)(Checkbox.a,{id:"checkbox-3",label:"Action default"})}),Object(jsx_runtime.jsx)(esm_Dropdown.a.Item,{href:"javascript:void(0)",children:Object(jsx_runtime.jsx)(Checkbox.a,{id:"checkbox-4",label:"Action default"})})]}))};Dropdown_stories_FilterTemplate.displayName="FilterTemplate";var Default=Dropdown_stories_DefaultTemplate.bind({}),Icon=Dropdown_stories_IconTemplate.bind({}),Search=Dropdown_stories_SearchTemplate.bind({}),Filter=Dropdown_stories_FilterTemplate.bind({});Filter.args={autoClose:"outside"},Default.parameters=Object.assign({storySource:{source:'(args) => (\n  <Dropdown {...args}>\n    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)" active>Action default</BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>\n  </Dropdown>\n)'}},Default.parameters),Icon.parameters=Object.assign({storySource:{source:'(args) => (\n  <Dropdown {...args}>\n    <BsDropdown.Item href="javascript:void(0)">\n      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default\n    </BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)" active>\n      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default\n    </BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">\n      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default\n    </BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">\n      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default\n    </BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">\n      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default\n    </BsDropdown.Item>\n  </Dropdown>\n)'}},Icon.parameters),Search.parameters=Object.assign({storySource:{source:'(args) => (\n  <Dropdown {...args}>\n    <SearchBar className="inf__dropdown-search" size="s" autoFocus></SearchBar>\n\n    <BsDropdown.Item href="javascript:void(0)" active>Action default</BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>\n  </Dropdown>\n)'}},Search.parameters),Filter.parameters=Object.assign({storySource:{source:'(args) => (\n  <Dropdown {...args}>\n    <BsForm.Select className="inf__dropdown-select" aria-label="Default select example">\n      <option>Sort by</option>\n      <option value="1">One</option>\n      <option value="2">Two</option>\n      <option value="3">Three</option>\n    </BsForm.Select>\n\n    <BsDropdown.Item href="javascript:void(0)">\n      <Checkbox id="checkbox-1" label="Action default"></Checkbox>\n    </BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">\n      <Checkbox id="checkbox-2" label="Action default"></Checkbox>\n    </BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">\n      <Checkbox id="checkbox-3" label="Action default"></Checkbox>\n    </BsDropdown.Item>\n    <BsDropdown.Item href="javascript:void(0)">\n      <Checkbox id="checkbox-4" label="Action default"></Checkbox>\n    </BsDropdown.Item>\n  </Dropdown>\n)'}},Filter.parameters)},"./src/form-elements/Checkbox.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Checkbox}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-bootstrap/esm/Form.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","disabled","state"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,state:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["default","success","error"])},Checkbox=function Checkbox(_ref){var label=_ref.label,disabled=_ref.disabled,state=_ref.state,stateClass=(_objectWithoutProperties(_ref,_excluded),"success"===state?"is-valid":"error"===state?"is-invalid":""),State=function State(){return"error"===state?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__.a.Control.Feedback,{type:"invalid",children:"Error notification"}):null};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__.a.Check,{type:"checkbox",id:"checkbox",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__.a.Check.Input,{disabled:disabled,type:"checkbox",className:stateClass}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__.a.Check.Label,{children:label}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(State,{})]})};Checkbox.displayName="Checkbox",Checkbox.propTypes=propTypes,Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{description:"Set the Checkbox label text",type:{name:"string"},required:!1},disabled:{description:"Set a disabled Checkbox",type:{name:"bool"},required:!1},state:{description:"Set an File Input field state",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"success"',computed:!1},{value:'"error"',computed:!1}]},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-elements/Checkbox.jsx"]={name:"Checkbox",docgenInfo:Checkbox.__docgenInfo,path:"src/form-elements/Checkbox.jsx"})},"./src/form-elements/SearchBar.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SearchBar}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-bootstrap/esm/Form.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","state"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["s","m","l"]),disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,state:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["default","success","error"])},SearchBar=function SearchBar(_ref){var size=_ref.size,state=_ref.state,props=_objectWithoutProperties(_ref,_excluded),bsSize="s"===size?"sm":"l"===size?"lg":void 0,stateClass="success"===state?"is-valid":"error"===state?"is-invalid":"";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__.a.Control,Object.assign({className:"ifx__searchbar "+stateClass,type:"text",placeholder:"Search",size:bsSize},props))};SearchBar.displayName="SearchBar",SearchBar.propTypes=propTypes,SearchBar.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{size:{description:"Specifies a large or small Input field",type:{name:"enum",value:[{value:'"s"',computed:!1},{value:'"m"',computed:!1},{value:'"l"',computed:!1}]},required:!1},disabled:{description:"Set a disabled Input field",type:{name:"bool"},required:!1},state:{description:"Set an Input field state",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"success"',computed:!1},{value:'"error"',computed:!1}]},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-elements/SearchBar.jsx"]={name:"SearchBar",docgenInfo:SearchBar.__docgenInfo,path:"src/form-elements/SearchBar.jsx"})}}]);