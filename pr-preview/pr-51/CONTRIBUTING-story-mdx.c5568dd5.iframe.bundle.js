(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__.d(__webpack_exports__,"a",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta}))},"./node_modules/core-js/modules/es.array.index-of.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),$IndexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),un$IndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!un$IndexOf&&1/un$IndexOf([1],1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("indexOf");$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!STRICT_METHOD},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?un$IndexOf(this,searchElement,fromIndex)||0:$IndexOf(this,searchElement,fromIndex)}})},"./tmp/CONTRIBUTING.story.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={},MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXLayout,_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.b,{title:"Docs/CONTRIBUTING",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h1",{id:"contributing-to-the-infineon-design-system-bootstrap"},"Contributing to the Infineon Design System Bootstrap"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ul"},"Reporting a bug"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ul"},"Discussing the current state of the code"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ul"},"Submitting a fix"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ul"},"Proposing new features"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ul"},"Or anything else...")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",{id:"we-develop-with-github-so-all-code-changes-happen-through-pull-requests"},"We Develop with Github, So All Code Changes Happen Through Pull Requests"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"Pull requests are the best way to propose changes to the codebase."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"To contribute fork the repo and create your branch from ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"master"),". When developing make sure to follow our guidelines and coding style. Please contact the maintainers if you need to know more."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",{id:"any-contributions-you-make-will-be-under-the-mit-software-license"},"Any contributions you make will be under the MIT Software License"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"In short, when you submit code changes, your submissions are understood to be under the same ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://github.com/Infineon/Infineon-Design-System-Bootstrap/blob/master/LICENSE",target:"_blank",rel:"nofollow noopener noreferrer"},"MIT License")," that covers the project. Feel free to contact the maintainers if that's a concern."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",{id:"report-bugs-using-github-issues"},"Report bugs using Github ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"h2",href:"https://github.com/Infineon/Infineon-Design-System-Bootstrap/issues",target:"_blank",rel:"nofollow noopener noreferrer"},"issues")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"We use GitHub issues to track public bugs. Report a bug by ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://github.com/Infineon/Infineon-Design-System-Bootstrap/issues/new?assignees=&labels=&template=bug_report.md&title=",target:"_blank",rel:"nofollow noopener noreferrer"},"opening a new issue")," - it's that easy!"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",{id:"license"},"License"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"By contributing, you agree that your contributions will be licensed under its MIT License."))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Docs/CONTRIBUTING",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta}}]);