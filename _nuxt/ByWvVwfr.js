import{Z as B,u as p,$ as f,c as _,a0 as E,a1 as O,I as M,a2 as V,e as H,L as R,a3 as P,a4 as S,Y as N,U as w}from"./mu6xFz0d.js";const U=s=>s==="defer"||s===!1;function x(...s){var g;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[e,d,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof d!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=p(),C=d,b=()=>f.value,j=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server??(a.server=!0),a.default??(a.default=b),a.getCachedData??(a.getCachedData=j),a.lazy??(a.lazy=!1),a.immediate??(a.immediate=!0),a.deep??(a.deep=f.deep),a.dedupe??(a.dedupe="cancel");const u=a.getCachedData(e,t),D=u!=null;if(!t._asyncData[e]||!a.immediate){(g=t.payload._errors)[e]??(g[e]=f.errorValue);const c=a.deep?_:E;t._asyncData[e]={data:c(D?u:a.default()),pending:_(!D),error:O(t.payload._errors,e),status:_("idle"),_default:a.default}}const n={...t._asyncData[e]};delete n._default,n.refresh=n.execute=(c={})=>{if(t._asyncDataPromises[e]){if(U(c.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(c._initial||t.isHydrating&&c._initial!==!1){const o=c._initial?u:a.getCachedData(e,t);if(o!=null)return Promise.resolve(o)}n.pending.value=!0,n.status.value="pending";const l=new Promise((o,i)=>{try{o(C(t))}catch(y){i(y)}}).then(async o=>{if(l.cancelled)return t._asyncDataPromises[e];let i=o;a.transform&&(i=await a.transform(o)),a.pick&&(i=I(i,a.pick)),t.payload.data[e]=i,n.data.value=i,n.error.value=f.errorValue,n.status.value="success"}).catch(o=>{if(l.cancelled)return t._asyncDataPromises[e];n.error.value=N(o),n.data.value=w(a.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},n.clear=()=>z(t,e);const h=()=>n.refresh({_initial:!0}),m=a.server!==!1&&t.payload.serverRendered;{const c=M();if(c&&m&&a.immediate&&!c.sp&&(c.sp=[]),c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const i=c._nuxtOnBeforeMountCbs;V(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),H(()=>i.splice(0,i.length))}m&&t.isHydrating&&(n.error.value||u!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):c&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(h):a.immediate&&h();const l=S();if(a.watch){const i=R(a.watch,()=>n.refresh());l&&P(i)}const o=t.hook("app:data:refresh",async i=>{(!i||i.includes(e))&&await n.refresh()});l&&P(o)}const v=Promise.resolve(t._asyncDataPromises[e]).then(()=>n);return Object.assign(v,n),v}async function K(s){await new Promise(e=>B(e)),await p().hooks.callHookParallel("app:data:refresh",void 0)}function z(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=f.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=w(s._asyncData[r]._default()),s._asyncData[r].error.value=f.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function I(s,r){const e={};for(const d of r)e[d]=s[d];return e}const L={content:"v3.3.0--2ttsBXCguDqYilsEEV0dCUYEo9iC_czdVujxyUeSLXI"},T={content:"_content_content",info:"_content_info"},X={content:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},info:{type:"data",fields:{}}};export{X as a,L as c,K as r,T as t,x as u};
