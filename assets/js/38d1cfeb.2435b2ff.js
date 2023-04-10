"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="useKeyboardAnimation",s={unversionedId:"api/hooks/use-keyboard-animation",id:"version-1.5.0/api/hooks/use-keyboard-animation",title:"useKeyboardAnimation",description:"useKeyboardAnimation is a hook which gives access to two animated values:",source:"@site/versioned_docs/version-1.5.0/api/hooks/use-keyboard-animation.md",sourceDirName:"api/hooks",slug:"/api/hooks/use-keyboard-animation",permalink:"/react-native-keyboard-controller/docs/api/hooks/use-keyboard-animation",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.5.0/api/hooks/use-keyboard-animation.md",tags:[],version:"1.5.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/react-native-keyboard-controller/docs/category/api-reference"},next:{title:"useKeyboardHandler",permalink:"/react-native-keyboard-controller/docs/api/hooks/use-keyboard-handler/"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Using with class component",id:"using-with-class-component",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usekeyboardanimation"},"useKeyboardAnimation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useKeyboardAnimation")," is a hook which gives access to two animated values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"height")," - value which changes between ",(0,o.kt)("strong",{parentName:"li"},"0")," and ",(0,o.kt)("strong",{parentName:"li"},"keyboardHeight"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"progress")," - value which changes between ",(0,o.kt)("strong",{parentName:"li"},"0")," (keyboard closed) and ",(0,o.kt)("strong",{parentName:"li"},"1")," (keyboard opened).")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useKeyboardAnimation } from "react-native-keyboard-controller";\n\nconst { height, progress } = useKeyboardAnimation();\n')),(0,o.kt)("p",null,"Also have a look on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example"},"example")," app for more comprehensive usage."),(0,o.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  KeyboardController,\n  KeyboardContext,\n  AndroidSoftInputModes,\n} from "react-native-keyboard-controller";\n\nclass KeyboardAnimation extends React.PureComponent {\n  // 1. use context value\n  static contextType = KeyboardContext;\n\n  componentDidMount() {\n    // 2. set input mode for android to `adjustResize`\n    // (can be omitted if you already have `adjustResize` in `AndroidManifest.xml`)\n    KeyboardController.setInputMode(AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);\n  }\n\n  componentWillUnmount() {\n    // 2. return to default input mode (for Android)\n    // in order not to break other part of your app\n    KeyboardController.setDefaultMode();\n  }\n\n  render() {\n    // 3. consume animated values \ud83d\ude0a\n    const { animated } = this.context;\n  }\n}\n')))}d.isMDXComponent=!0}}]);