function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,s=f||u||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var i,o,r,a,l,f,u=0,s=!1,c=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,u=t,a=e.apply(r,n)}function S(e){return u=e,l=setTimeout(j,t),s?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||c&&e-u>=r}function j(){var e=v();if(h(e))return O(e);l=setTimeout(j,function(e){var n=t-(e-f);return c?d(n,r-(e-u)):n}(e))}function O(e){return l=void 0,g&&i?y(e):(i=o=void 0,a)}function T(){var e=v(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return S(f);if(c)return l=setTimeout(j,t),y(f)}return void 0===l&&(l=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(s=!!n.leading,r=(c="maxWait"in n)?m(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=f=o=l=void 0},T.flush=function(){return void 0===l?a:O(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?l(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),S={};if(y.addEventListener("input",e(t)((function(){S.email=y.elements.email.value,S.message=y.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),y.addEventListener("submit",(function(e){if(""===y.elements.email.value||""===y.elements.message.value)return void alert("Please fill in all the fields!");e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")})),null!==localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));y.elements.email.value=e.email||"",y.elements.message.value=e.message||""}else y.elements.email.value="",y.elements.message.value="";
//# sourceMappingURL=03-feedback.bae0ee3a.js.map