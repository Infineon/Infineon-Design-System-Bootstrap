/*! For license information please see typography-Typography-stories.afdb1ab1.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"./node_modules/core-js/modules/es.array.index-of.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),$IndexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),un$IndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!un$IndexOf&&1/un$IndexOf([1],1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("indexOf");$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!STRICT_METHOD},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?un$IndexOf(this,searchElement,fromIndex)||0:$IndexOf(this,searchElement,fromIndex)}})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/typography/Typography.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Heading",(function(){return Heading})),__webpack_require__.d(__webpack_exports__,"Display",(function(){return Display})),__webpack_require__.d(__webpack_exports__,"Paragraph",(function(){return Paragraph})),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes={text:prop_types_default.a.string},Typography_Typography=function Typography(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsx)("div",Object.assign({className:"ifx__paragraph"},props,{children:children}))};Typography_Typography.displayName="Typography",Typography_Typography.propTypes=propTypes,Typography_Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{text:{description:"Set the Paragraph title",type:{name:"string"},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/typography/Typography.jsx"]={name:"Typography",docgenInfo:Typography_Typography.__docgenInfo,path:"src/typography/Typography.jsx"});__webpack_exports__.default={title:"Components/Typography",component:Typography_Typography,args:{text:""}};var Heading=function HeadingTemplate(args){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("h1",{children:"Headline 1"}),Object(jsx_runtime.jsx)("h2",{children:"Headline 2"}),Object(jsx_runtime.jsx)("h3",{children:"Headline 3"}),Object(jsx_runtime.jsx)("h4",{children:"Headline 4"}),Object(jsx_runtime.jsx)("h5",{children:"Headline 5"}),Object(jsx_runtime.jsx)("h6",{children:"Headline 6"})]})}.bind({}),Display=function DisplayTemplate(args){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("h1",{class:"display-1",children:"Display 1"}),Object(jsx_runtime.jsx)("h1",{class:"display-2",children:"Display 2"}),Object(jsx_runtime.jsx)("h1",{class:"display-3",children:"Display 3"}),Object(jsx_runtime.jsx)("h1",{class:"display-4",children:"Display 4"})]})}.bind({}),Paragraph=function ParagraphTemplate(args){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("p",{children:"This is a regular paragraph."}),Object(jsx_runtime.jsx)("p",{class:"lead",children:"This is a lead paragraph."}),Object(jsx_runtime.jsx)("p",{class:"small",children:"This is a small paragraph."}),Object(jsx_runtime.jsx)("p",{class:"small fw-bold",children:"This is a small and bold paragraph."})]})}.bind({}),Text=function TextTemplate(args){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("del",{children:"This line of text is meant to be treated as deleted text."})}),Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("s",{children:"This line of text is meant to be treated as no longer accurate."})}),Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("ins",{children:"This line of text is meant to be treated as an addition to the document."})}),Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("u",{children:"This line of text will render as underlined."})}),Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("small",{children:"This line of text is meant to be treated as fine print."})}),Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("strong",{children:"This line rendered as bold text."})}),Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("em",{children:"This line rendered as italicized text."})})]})}.bind({});Heading.parameters=Object.assign({storySource:{source:"(args) => (\n  <>\n    <h1>Headline 1</h1>\n    <h2>Headline 2</h2>\n    <h3>Headline 3</h3>\n    <h4>Headline 4</h4>\n    <h5>Headline 5</h5>\n    <h6>Headline 6</h6>\n  </>\n)"}},Heading.parameters),Display.parameters=Object.assign({storySource:{source:'(args) => (\n  <>\n    <h1 class="display-1">Display 1</h1>\n    <h1 class="display-2">Display 2</h1>\n    <h1 class="display-3">Display 3</h1>\n    <h1 class="display-4">Display 4</h1>\n  </>\n)'}},Display.parameters),Paragraph.parameters=Object.assign({storySource:{source:'(args) => (\n  <>\n    <p>This is a regular paragraph.</p>\n    <p class="lead">This is a lead paragraph.</p>\n    <p class="small">This is a small paragraph.</p>\n    <p class="small fw-bold">This is a small and bold paragraph.</p>\n  </>\n)'}},Paragraph.parameters),Text.parameters=Object.assign({storySource:{source:"(args) => (\n  <>\n    <p><del>This line of text is meant to be treated as deleted text.</del></p>\n    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\n    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\n    <p><u>This line of text will render as underlined.</u></p>\n    <p><small>This line of text is meant to be treated as fine print.</small></p>\n    <p><strong>This line rendered as bold text.</strong></p>\n    <p><em>This line rendered as italicized text.</em></p>\n  </>\n)"}},Text.parameters)}}]);
//# sourceMappingURL=typography-Typography-stories.afdb1ab1.iframe.bundle.js.map