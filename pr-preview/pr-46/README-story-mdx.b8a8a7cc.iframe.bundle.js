(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__.d(__webpack_exports__,"a",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta}))},"./node_modules/core-js/modules/es.array.index-of.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),$IndexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),un$IndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!un$IndexOf&&1/un$IndexOf([1],1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("indexOf");$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!STRICT_METHOD},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?un$IndexOf(this,searchElement,fromIndex)||0:$IndexOf(this,searchElement,fromIndex)}})},"./tmp/README.story.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,{title:"Docs/README",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h1",null,"Infineon Design System Bootstrap Components"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://github.com/Infineon/Infineon-Design-System-Bootstrap/issues"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{parentName:"a",src:"https://img.shields.io/github/issues/Infineon/Infineon-Design-System-Bootstrap?style=plastic",alt:"GitHub Repo Issues"})),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://github.com/Infineon/Infineon-Design-System-Bootstrap/pulls"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{parentName:"a",src:"https://img.shields.io/github/issues-pr-raw/Infineon/Infineon-Design-System-Bootstrap?style=plastic",alt:"GitHub Pull Requests"})),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://github.com/Infineon/Infineon-Design-System-Bootstrap/blob/master/package.json"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{parentName:"a",src:"https://img.shields.io/github/package-json/v/Infineon/Infineon-Design-System-Bootstrap?style=plastic",alt:"GitHub Repo Version"})),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://github.com/Infineon/Infineon-Design-System-Bootstrap/tree/master"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{parentName:"a",src:"https://img.shields.io/github/commit-activity/w/Infineon/Infineon-Design-System-Bootstrap/master?style=plastic",alt:"GitHub Master Branch Weekly Commits"})),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://github.com/Infineon/Infineon-Design-System-Bootstrap/graphs/contributors"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{parentName:"a",src:"https://img.shields.io/github/contributors/Infineon/Infineon-Design-System-Bootstrap?style=plastic",alt:"GitHub Repo Contributors"})),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://github.com/Infineon/Infineon-Design-System-Bootstrap/"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{parentName:"a",src:"https://img.shields.io/github/discussions/Infineon/Infineon-Design-System-Bootstrap",alt:"GitHub Repo Discussions"}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("details",{id:"tableContent"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("summary",null,"Table of Contents"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#about-the-project"},"About The Project"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#built-with"},"Built With")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#getting-started"},"Getting Started"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#prerequisites"},"Prerequisites")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#installation"},"Installation")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#usage"},"Usage")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#local-development"},"Local Development")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#contact"},"Contact")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"About The Project"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"As part of the Infineon brand guidelines, the Infineon Digital Design System supports designers, developers and project managers to build user interfaces faster and better – with the ultimate goal to create a coherent and optimal user journey across all internal and external Infineon digital touchpoints."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"This repository contains an Bootstrap implementation of Infineons Digital Design System and it's Storybook sourcecode."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"Use it to build & run storybook and distribute the Bootstrap SCSS."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",null,"Built With"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"li",href:"https://reactjs.org/"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{parentName:"a",src:"https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",alt:"React"}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"li",href:"https://getbootstrap.com"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",alt:"Bootstrap"})))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",{align:"right"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#tableContent"},"back to top")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"Getting Started"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",null,"Prerequisites"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node")," v14 or older."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/"},"Yarn")," v1.22.10 or older, or ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"li",href:"https://www.npmjs.com/"},"Npm")," v6.14.13 or older.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",null,"Installation on React, Vue or Angular"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",null,"With NPM"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ol"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"li"},"npm install --save @infineon/design-system-bootstrap"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",null,"With Yarn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ol"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"li"},"yarn add @infineon/design-system-bootstrap"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",null,"Import the module inside your entry point file."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"For React: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("b",null,"index.js")," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("br",null),"\nFor Vue: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("b",null,"main.js")," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("br",null),"\nFor Angular: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("b",null,"main.ts")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},'import "@infineon/design-system-bootstrap";')),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",null,"Installation of Fontawesome"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("li",{parentName:"ol"},"Send an email to ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"li",href:"mailto:dds@infineon.com"},"dds@infineon.com")," to get the fontawesome token key. Then execute these two commands:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("code",{parentName:"pre",className:"language-bash"},'\nnpm config set "@fortawesome:registry" https://npm.fontawesome.com/\nnpm config set "//npm.fontawesome.com/:_authToken" <PASTE KEY HERE>\n')),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"Additional Fontawesome installation instructions can be found here: "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"For Angular: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://fontawesome.com/v5/docs/web/use-with/angular"},"https://fontawesome.com/v5/docs/web/use-with/angular")," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("br",null),"\nFor Vue ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://fontawesome.com/v6/docs/web/use-with/vue/"},"https://fontawesome.com/v6/docs/web/use-with/vue/")," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("br",null),"\nFor React: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://fontawesome.com/v6/docs/web/use-with/react/"},"https://fontawesome.com/v6/docs/web/use-with/react/")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",null,"Installation of SASS"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"For React projects only, run: "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("code",{parentName:"pre",className:"language-bash"},"npm install sass\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",null,"Change Public folder as a temporary solution for React only"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"Copy (",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("b",null,"not move!"),") the:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"node_modules -> @infineon -> design-system-bootstrap -> ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("b",null,"public")," folder"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"inside"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"node_modules -> @infineon -> design-system-bootstrap -> ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("b",null,"src")," folder"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",{align:"right"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#tableContent"},"back to top")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"Explore our components in Storybook."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://storybook-bootstrap.icp.infineon.com"},"https://storybook-bootstrap.icp.infineon.com")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",{align:"right"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#tableContent"},"back to top")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"Local Development"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",null,"Installation"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"Install all the modules and dependencies listed on the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"package.json")," file with:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"or"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",null,"Build Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"To deploy Storybook, we first need to export it as a static web app.\nTo do so, we can use the inbuild ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"build-storybook")," command with ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"yarn"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("code",{parentName:"pre",className:"language-bash"},"yarn storybook-build\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"or"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("code",{parentName:"pre",className:"language-bash"},"npm storybook-build\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"This will generate a static Storybook in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"storybook-static")," directory."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",null,"Start Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"To start storybook, simply run the inbuild command ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"storybook-start")," with ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"yarn"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("code",{parentName:"pre",className:"language-bash"},"yarn storybook-start\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"or"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("code",{parentName:"pre",className:"language-bash"},"npm storybook-start\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"storybook-start")," also executes ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"watch-css")," and ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"watch-storybook")," which automatically update storybook on code change."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",{align:"right"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#tableContent"},"back to top")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"Contact"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",null,"WebEx"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"Yanchev Tihomir ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("br",null),"\nWerther Kai"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",null,"Email"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"mailto:tihomir.yanchev-EE@infineon.com"},"tihomir.yanchev-EE@infineon.com")," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("br",null),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"mailto:kai.werther@infineon.com"},"kai.werther@infineon.com")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",{align:"right"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{href:"#tableContent"},"back to top")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Docs/README",includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXContent,null)}}),__webpack_exports__.default=componentMeta}}]);