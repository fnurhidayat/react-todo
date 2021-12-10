var j=Object.defineProperty,S=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var T=(o,e,n)=>e in o?j(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,x=(o,e)=>{for(var n in e||(e={}))H.call(e,n)&&T(o,n,e[n]);if(g)for(var n of g(e))I.call(e,n)&&T(o,n,e[n]);return o},y=(o,e)=>S(o,$(e));import{j as N,r as m,R as C,a as w,B,b as M,c as v}from"./vendor.b8bc8881.js";const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};k();var _="/react-todo/assets/logo.ecc203fb.svg";const O="_DefaultLayout_jbtab_1";var A={DefaultLayout:O};const t=N.exports.jsx,c=N.exports.jsxs,b=({children:o,className:e})=>t("div",{className:`${e} ${A.DefaultLayout}`,children:t("header",{className:"DefaultLayout-header",children:t("div",{className:"DefaultLayout-container",children:o})})}),q="_Home_oltdh_10";var P={Home:q,"Home-logo-spin":"_Home-logo-spin_oltdh_1"};const K=({id:o,text:e,isDone:n,onTodoItemEdit:d=()=>{},onTodoItemMark:s=()=>{},onTodoItemRemove:a=()=>{}})=>c("li",{className:"Todo-item "+(n?"Todo-done":"Todo-active"),children:[t("input",{type:"checkbox",checked:n,onChange:()=>s(o)}),t("button",{className:"Todo-item",onClick:()=>s(o),children:e}),t("button",{className:"Todo-destroy",onClick:()=>a(o),children:"Remove"}),t("button",{className:"Todo-edit",onClick:()=>d(o,e),children:"Edit"})]}),U="_Todo_myemb_1";var z={Todo:U};const G=({todos:o,onTodoItemMark:e,onTodoItemRemove:n,onTodoItemEdit:d})=>t("div",{className:z.Todo,children:o.map(s=>t(K,y(x({},s),{onTodoItemMark:e,onTodoItemRemove:n,onTodoItemEdit:d}),s.id))});var J={"Todo-form":"_Todo-form_13voc_1"};const Q=({onSubmit:o,onTodoTextChange:e,text:n})=>c("form",{onSubmit:o,className:J["Todo-form"],children:[t("input",{type:"text",onChange:e,placeholder:"Main game",value:n,maxLength:35,minLength:4}),t("input",{type:"submit",value:"Add Todo"})]});var V={"Todo-form":"_Todo-form_qwpe5_1"};const W=({onSubmit:o,onTodoTextChange:e,text:n,id:d=0})=>c("form",{onSubmit:o,className:V["Todo-form"],children:[t("input",{type:"text",onChange:e,placeholder:"Main game",maxLength:35,minLength:4,value:n}),t("input",{type:"submit",value:"Edit Todo"})]});function X(o){var e;return(((e=o[o.length-1])==null?void 0:e.id)||0)+1}const Y=()=>{const[o,e]=m.exports.useState([{id:1,text:"Main game",isDone:!1},{id:2,text:"Belajar React",isDone:!0},{id:3,text:"Belajar React Router",isDone:!0},{id:4,text:"Healing",isDone:!1}]),[n,d]=m.exports.useState(""),[s,a]=m.exports.useState(!1),[u,f]=m.exports.useState(""),[h,p]=m.exports.useState(0);function L(r){const i=o.map(l=>(l.id===r&&(l.isDone=!l.isDone),l));e(i)}function D(r){const i=o.filter(l=>l.id!==r);e(i)}function F(r){if(r.preventDefault(),!n)return;const i=[...o];i.push({id:X(o),text:n,isDone:!1}),d(""),e(i)}function E(r,i){a(!0),p(r),f(i)}function R(r){r.preventDefault();const i=o.map(l=>(l.id===h&&(l.text=u),l));e(i),a(!1),p(0),f("")}return c(b,{className:P.Home,children:[t("img",{src:_,className:"Home-logo",alt:"logo"}),t("h1",{children:"Todo"}),s?t(W,{id:h,text:u,onTodoTextChange:r=>f(r.target.value),onSubmit:R}):t(Q,{onSubmit:F,onTodoTextChange:r=>d(r.target.value),text:n}),t(G,{todos:o,onTodoItemMark:L,onTodoItemRemove:D,onTodoItemEdit:E})]})},Z="_NotFound_gxwje_1";var ee={NotFound:Z,"NotFound-logo-spin":"_NotFound-logo-spin_gxwje_1"};const oe=()=>c(b,{className:ee.NotFound,children:[t("img",{src:_,className:"NotFound-logo",alt:"logo"}),c("div",{className:"NotFound-text",children:[t("h1",{children:"404"}),t("h5",{children:"Not Found!"})]})]}),te="/react-todo/";C.render(t(w.StrictMode,{children:t(B,{basename:te,children:c(M,{children:[t(v,{path:"/",element:t(Y,{})}),t(v,{path:"*",element:t(oe,{})})]})})}),document.getElementById("root"));