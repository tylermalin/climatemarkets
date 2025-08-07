import{c as Ks,g as Js}from"./vendor-BbzuHON1.js";import{_ as Ra,s as cu,w as uu,a as du,g as ka,b as Na,m as hu,f as fu,c as pu,d as gu,e as wu,h as mu,i as Oa}from"./wagmi-DA4gJ8uS.js";const vu=Symbol(),Pa=Object.getPrototypeOf,Os=new WeakMap,bu=i=>i&&(Os.has(i)?Os.get(i):Pa(i)===Object.prototype||Pa(i)===Array.prototype),yu=i=>bu(i)&&i[vu]||null,Ma=(i,e=!0)=>{Os.set(i,e)},so={},cs=i=>typeof i=="object"&&i!==null,ui=new WeakMap,Xr=new WeakSet,xu=(i=Object.is,e=(h,p)=>new Proxy(h,p),t=h=>cs(h)&&!Xr.has(h)&&(Array.isArray(h)||!(Symbol.iterator in h))&&!(h instanceof WeakMap)&&!(h instanceof WeakSet)&&!(h instanceof Error)&&!(h instanceof Number)&&!(h instanceof Date)&&!(h instanceof String)&&!(h instanceof RegExp)&&!(h instanceof ArrayBuffer),r=h=>{switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:throw h}},o=new WeakMap,n=(h,p,m=r)=>{const x=o.get(h);if((x==null?void 0:x[0])===p)return x[1];const y=Array.isArray(h)?[]:Object.create(Object.getPrototypeOf(h));return Ma(y,!0),o.set(h,[p,y]),Reflect.ownKeys(h).forEach(E=>{if(Object.getOwnPropertyDescriptor(y,E))return;const A=Reflect.get(h,E),B={value:A,enumerable:!0,configurable:!0};if(Xr.has(A))Ma(A,!1);else if(A instanceof Promise)delete B.value,B.get=()=>m(A);else if(ui.has(A)){const[I,R]=ui.get(A);B.value=n(I,R(),m)}Object.defineProperty(y,E,B)}),Object.preventExtensions(y)},s=new WeakMap,a=[1,1],u=h=>{if(!cs(h))throw new Error("object required");const p=s.get(h);if(p)return p;let m=a[0];const x=new Set,y=(X,z=++a[0])=>{m!==z&&(m=z,x.forEach(P=>P(X,z)))};let E=a[1];const A=(X=++a[1])=>(E!==X&&!x.size&&(E=X,I.forEach(([z])=>{const P=z[1](X);P>m&&(m=P)})),m),B=X=>(z,P)=>{const Ee=[...z];Ee[1]=[X,...Ee[1]],y(Ee,P)},I=new Map,R=(X,z)=>{if((so?"production":void 0)!=="production"&&I.has(X))throw new Error("prop listener already exists");if(x.size){const P=z[3](B(X));I.set(X,[z,P])}else I.set(X,[z])},O=X=>{var z;const P=I.get(X);P&&(I.delete(X),(z=P[1])==null||z.call(P))},N=X=>(x.add(X),x.size===1&&I.forEach(([P,Ee],Le)=>{if((so?"production":void 0)!=="production"&&Ee)throw new Error("remove already exists");const Y=P[3](B(Le));I.set(Le,[P,Y])}),()=>{x.delete(X),x.size===0&&I.forEach(([P,Ee],Le)=>{Ee&&(Ee(),I.set(Le,[P]))})}),j=Array.isArray(h)?[]:Object.create(Object.getPrototypeOf(h)),ge=e(j,{deleteProperty(X,z){const P=Reflect.get(X,z);O(z);const Ee=Reflect.deleteProperty(X,z);return Ee&&y(["delete",[z],P]),Ee},set(X,z,P,Ee){const Le=Reflect.has(X,z),Y=Reflect.get(X,z,Ee);if(Le&&(i(Y,P)||s.has(P)&&i(Y,s.get(P))))return!0;O(z),cs(P)&&(P=yu(P)||P);let L=P;if(P instanceof Promise)P.then(k=>{P.status="fulfilled",P.value=k,y(["resolve",[z],k])}).catch(k=>{P.status="rejected",P.reason=k,y(["reject",[z],k])});else{!ui.has(P)&&t(P)&&(L=u(P));const k=!Xr.has(L)&&ui.get(L);k&&R(z,k)}return Reflect.set(X,z,L,Ee),y(["set",[z],P,Y]),!0}});s.set(h,ge);const Se=[j,A,n,N];return ui.set(ge,Se),Reflect.ownKeys(h).forEach(X=>{const z=Object.getOwnPropertyDescriptor(h,X);"value"in z&&(ge[X]=h[X],delete z.value,delete z.writable),Object.defineProperty(j,X,z)}),ge})=>[u,ui,Xr,i,e,t,r,o,n,s,a],[_u]=xu();function tt(i={}){return _u(i)}function ri(i,e,t){const r=ui.get(i);(so?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let o;const n=[],s=r[3];let a=!1;const h=s(p=>{n.push(p),o||(o=Promise.resolve().then(()=>{o=void 0,a&&e(n.splice(0))}))});return a=!0,()=>{a=!1,h()}}function Ol(i,e){const t=ui.get(i);(so?"production":void 0)!=="production"&&!t&&console.warn("Please use proxy object");const[r,o,n]=t;return n(r,o(),e)}function cn(i){return Xr.add(i),i}function Tt(i,e,t,r){let o=i[e];return ri(i,()=>{const n=i[e];Object.is(o,n)||t(o=n)})}const us="https://secure.web3modal.com",Qt={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:us,SECURE_SITE_DASHBOARD:`${us}/dashboard`,SECURE_SITE_FAVICON:`${us}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},G={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const i=window.navigator.userAgent.toLowerCase();return G.isMobile()&&i.includes("android")},isIos(){const i=window.navigator.userAgent.toLowerCase();return G.isMobile()&&(i.includes("iphone")||i.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(i){return i?i-Date.now()<=Qt.TEN_SEC_MS:!0},isAllowedRetry(i){return Date.now()-i>=Qt.ONE_SEC_MS},copyToClopboard(i){navigator.clipboard.writeText(i)},getPairingExpiry(){return Date.now()+Qt.FOUR_MINUTES_MS},getPlainAddress(i){return i.split(":")[2]},async wait(i){return new Promise(e=>{setTimeout(e,i)})},debounce(i,e=500){let t;return(...r)=>{function o(){i(...r)}t&&clearTimeout(t),t=setTimeout(o,e)}},isHttpUrl(i){return i.startsWith("http://")||i.startsWith("https://")},formatNativeUrl(i,e){if(G.isHttpUrl(i))return this.formatUniversalUrl(i,e);let t=i;t.includes("://")||(t=i.replaceAll("/","").replaceAll(":",""),t=`${t}://`),t.endsWith("/")||(t=`${t}/`);const r=encodeURIComponent(e);return{redirect:`${t}wc?uri=${r}`,href:t}},formatUniversalUrl(i,e){if(!G.isHttpUrl(i))return this.formatNativeUrl(i,e);let t=i;t.endsWith("/")||(t=`${t}/`);const r=encodeURIComponent(e);return{redirect:`${t}wc?uri=${r}`,href:t}},openHref(i,e){window.open(i,e,"noreferrer noopener")},async preloadImage(i){const e=new Promise((t,r)=>{const o=new Image;o.onload=t,o.onerror=r,o.crossOrigin="anonymous",o.src=i});return Promise.race([e,G.wait(2e3)])},formatBalance(i,e){var r;let t;if(i==="0")t="0.000";else if(typeof i=="string"){const o=Number(i);o&&(t=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return t?`${t} ${e}`:`0.000 ${e}`},isRestrictedRegion(){try{const{timeZone:i}=new Intl.DateTimeFormat().resolvedOptions(),e=i.toUpperCase();return Qt.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return G.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return G.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return G.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,i=>{const e=Math.random()*16|0;return(i==="x"?e:e&3|8).toString(16)})},parseError(i){var e,t;return typeof i=="string"?i:typeof((t=(e=i==null?void 0:i.issues)==null?void 0:e[0])==null?void 0:t.message)=="string"?i.issues[0].message:i instanceof Error?i.message:"Unknown error"}},ze=tt({isConnected:!1}),we={state:ze,subscribe(i){return ri(ze,()=>i(ze))},subscribeKey(i,e){return Tt(ze,i,e)},setIsConnected(i){ze.isConnected=i},setCaipAddress(i){ze.caipAddress=i,ze.address=i?G.getPlainAddress(i):void 0},setBalance(i,e){ze.balance=i,ze.balanceSymbol=e},setProfileName(i){ze.profileName=i},setProfileImage(i){ze.profileImage=i},setAddressExplorerUrl(i){ze.addressExplorerUrl=i},resetAccount(){ze.isConnected=!1,ze.caipAddress=void 0,ze.address=void 0,ze.balance=void 0,ze.balanceSymbol=void 0,ze.profileName=void 0,ze.profileImage=void 0,ze.addressExplorerUrl=void 0}};class Qs{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){const r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...t}){const r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:t,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:t,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:t,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:t}){const r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([o,n])=>{n&&r.searchParams.append(o,n)}),r}}const ds="WALLETCONNECT_DEEPLINK_CHOICE",Ba="@w3m/recent",La="@w3m/connected_wallet_image_url",Da="@w3m/connected_connector",Qe={setWalletConnectDeepLink({href:i,name:e}){try{localStorage.setItem(ds,JSON.stringify({href:i,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const i=localStorage.getItem(ds);if(i)return JSON.parse(i)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(ds)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(i){try{const e=Qe.getRecentWallets();e.find(r=>r.id===i.id)||(e.unshift(i),e.length>2&&e.pop(),localStorage.setItem(Ba,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const i=localStorage.getItem(Ba);return i?JSON.parse(i):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(i){try{localStorage.setItem(La,i)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(La)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(i){try{localStorage.setItem(Da,i)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(Da)}catch{console.info("Unable to get Connected Connector")}}},ci=tt({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),_r={state:ci,subscribeNetworkImages(i){return ri(ci.networkImages,()=>i(ci.networkImages))},subscribeKey(i,e){return Tt(ci,i,e)},setWalletImage(i,e){ci.walletImages[i]=e},setNetworkImage(i,e){ci.networkImages[i]=e},setConnectorImage(i,e){ci.connectorImages[i]=e},setTokenImage(i,e){ci.tokenImages[i]=e}},ot=tt({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),be={state:ot,subscribeKey(i,e){return Tt(ot,i,e)},setProjectId(i){ot.projectId=i},setIncludeWalletIds(i){ot.includeWalletIds=i},setExcludeWalletIds(i){ot.excludeWalletIds=i},setFeaturedWalletIds(i){ot.featuredWalletIds=i},setTokens(i){ot.tokens=i},setTermsConditionsUrl(i){ot.termsConditionsUrl=i},setPrivacyPolicyUrl(i){ot.privacyPolicyUrl=i},setCustomWallets(i){ot.customWallets=i},setEnableAnalytics(i){ot.enableAnalytics=i},setSdkVersion(i){ot.sdkVersion=i},setMetadata(i){ot.metadata=i}},Ni=tt({connectors:[]}),_e={state:Ni,subscribeKey(i,e){return Tt(Ni,i,e)},setConnectors(i){Ni.connectors=i.map(e=>cn(e))},addConnector(i){var e,t;if(Ni.connectors.push(cn(i)),i.id==="w3mEmail"){const r=i,o=Ol(be.state);(t=(e=r==null?void 0:r.provider)==null?void 0:e.syncDappData)==null||t.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId})}},getEmailConnector(){return Ni.connectors.find(i=>i.type==="EMAIL")},getAnnouncedConnectorRdns(){return Ni.connectors.filter(i=>i.type==="ANNOUNCED").map(i=>{var e;return(e=i.info)==null?void 0:e.rdns})},getConnectors(){return Ni.connectors}},Kr=tt({open:!1,selectedNetworkId:void 0}),Ar={state:Kr,subscribe(i){return ri(Kr,()=>i(Kr))},set(i){Object.assign(Kr,{...Kr,...i})}},Ge=tt({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Me={state:Ge,subscribeKey(i,e){return Tt(Ge,i,e)},_getClient(){if(!Ge._client)throw new Error("NetworkController client not set");return Ge._client},setClient(i){Ge._client=cn(i)},setCaipNetwork(i){Ge.caipNetwork=i,Ar.set({selectedNetworkId:i==null?void 0:i.id})},setDefaultCaipNetwork(i){Ge.caipNetwork=i,Ar.set({selectedNetworkId:i==null?void 0:i.id}),Ge.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(i){Ge.requestedCaipNetworks=i},async getApprovedCaipNetworksData(){const i=await this._getClient().getApprovedCaipNetworksData();Ge.supportsAllNetworks=i.supportsAllNetworks,Ge.approvedCaipNetworkIds=i.approvedCaipNetworkIds},async switchActiveNetwork(i){await this._getClient().switchCaipNetwork(i),Ge.caipNetwork=i},resetNetwork(){Ge.isDefaultCaipNetwork||(Ge.caipNetwork=void 0),Ge.approvedCaipNetworkIds=void 0,Ge.supportsAllNetworks=!0}},Cu=G.getApiUrl(),Mt=new Qs({baseUrl:Cu}),Eu="40",Wa="4",Je=tt({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),he={state:Je,subscribeKey(i,e){return Tt(Je,i,e)},_getApiHeaders(){const{projectId:i,sdkType:e,sdkVersion:t}=be.state;return{"x-project-id":i,"x-sdk-type":e,"x-sdk-version":t}},async _fetchWalletImage(i){const e=`${Mt.baseUrl}/getWalletImage/${i}`,t=await Mt.getBlob({path:e,headers:he._getApiHeaders()});_r.setWalletImage(i,URL.createObjectURL(t))},async _fetchNetworkImage(i){const e=`${Mt.baseUrl}/public/getAssetImage/${i}`,t=await Mt.getBlob({path:e,headers:he._getApiHeaders()});_r.setNetworkImage(i,URL.createObjectURL(t))},async _fetchConnectorImage(i){const e=`${Mt.baseUrl}/public/getAssetImage/${i}`,t=await Mt.getBlob({path:e,headers:he._getApiHeaders()});_r.setConnectorImage(i,URL.createObjectURL(t))},async fetchNetworkImages(){const{requestedCaipNetworks:i}=Me.state,e=i==null?void 0:i.map(({imageId:t})=>t).filter(Boolean);e&&await Promise.allSettled(e.map(t=>he._fetchNetworkImage(t)))},async fetchConnectorImages(){const{connectors:i}=_e.state,e=i.map(({imageId:t})=>t).filter(Boolean);await Promise.allSettled(e.map(t=>he._fetchConnectorImage(t)))},async fetchFeaturedWallets(){const{featuredWalletIds:i}=be.state;if(i!=null&&i.length){const{data:e}=await Mt.get({path:"/getWallets",headers:he._getApiHeaders(),params:{page:"1",entries:i!=null&&i.length?String(i.length):Wa,include:i==null?void 0:i.join(",")}});e.sort((r,o)=>i.indexOf(r.id)-i.indexOf(o.id));const t=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(t.map(r=>he._fetchWalletImage(r))),Je.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:i,excludeWalletIds:e,featuredWalletIds:t}=be.state,r=[...e??[],...t??[]].filter(Boolean),{data:o,count:n}=await Mt.get({path:"/getWallets",headers:he._getApiHeaders(),params:{page:"1",entries:Wa,include:i==null?void 0:i.join(","),exclude:r==null?void 0:r.join(",")}}),s=Qe.getRecentWallets(),a=o.map(h=>h.image_id).filter(Boolean),u=s.map(h=>h.image_id).filter(Boolean);await Promise.allSettled([...a,...u].map(h=>he._fetchWalletImage(h))),Je.recommended=o,Je.count=n??0},async fetchWallets({page:i}){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=be.state,o=[...Je.recommended.map(({id:u})=>u),...t??[],...r??[]].filter(Boolean),{data:n,count:s}=await Mt.get({path:"/getWallets",headers:he._getApiHeaders(),params:{page:String(i),entries:Eu,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),a=n.map(u=>u.image_id).filter(Boolean);await Promise.allSettled([...a.map(u=>he._fetchWalletImage(u)),G.wait(300)]),Je.wallets=[...Je.wallets,...n],Je.count=s>Je.count?s:Je.count,Je.page=i},async searchWallet({search:i}){const{includeWalletIds:e,excludeWalletIds:t}=be.state;Je.search=[];const{data:r}=await Mt.get({path:"/getWallets",headers:he._getApiHeaders(),params:{page:"1",entries:"100",search:i,include:e==null?void 0:e.join(","),exclude:t==null?void 0:t.join(",")}}),o=r.map(n=>n.image_id).filter(Boolean);await Promise.allSettled([...o.map(n=>he._fetchWalletImage(n)),G.wait(300)]),Je.search=r},prefetch(){Je.prefetchPromise=Promise.race([Promise.allSettled([he.fetchFeaturedWallets(),he.fetchRecommendedWallets(),he.fetchNetworkImages(),he.fetchConnectorImages()]),G.wait(3e3)])}},$u=G.getAnalyticsUrl(),Au=new Qs({baseUrl:$u}),Su=["MODAL_CREATED"],wr=tt({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),ie={state:wr,subscribe(i){return ri(wr,()=>i(wr))},_getApiHeaders(){const{projectId:i,sdkType:e,sdkVersion:t}=be.state;return{"x-project-id":i,"x-sdk-type":e,"x-sdk-version":t}},async _sendAnalyticsEvent(i){try{if(Su.includes(i.data.event)||typeof window>"u")return;await Au.post({path:"/e",headers:ie._getApiHeaders(),body:{eventId:G.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:i.timestamp,props:i.data}})}catch{}},sendEvent(i){wr.timestamp=Date.now(),wr.data=i,be.state.enableAnalytics&&ie._sendAnalyticsEvent(wr)}},Ie=tt({view:"Connect",history:["Connect"]}),Z={state:Ie,subscribeKey(i,e){return Tt(Ie,i,e)},push(i,e){i!==Ie.view&&(Ie.view=i,Ie.history.push(i),Ie.data=e)},reset(i){Ie.view=i,Ie.history=[i]},replace(i,e){Ie.history.length>1&&Ie.history.at(-1)!==i&&(Ie.view=i,Ie.history[Ie.history.length-1]=i,Ie.data=e)},goBack(){if(Ie.history.length>1){Ie.history.pop();const[i]=Ie.history.slice(-1);i&&(Ie.view=i)}},goBackToIndex(i){if(Ie.history.length>1){Ie.history=Ie.history.slice(0,i+1);const[e]=Ie.history.slice(-1);e&&(Ie.view=e)}}},Oi=tt({loading:!1,open:!1}),Ce={state:Oi,subscribe(i){return ri(Oi,()=>i(Oi))},subscribeKey(i,e){return Tt(Oi,i,e)},async open(i){await he.state.prefetchPromise,i!=null&&i.view?Z.reset(i.view):we.state.isConnected?Z.reset("Account"):Z.reset("Connect"),Oi.open=!0,Ar.set({open:!0}),ie.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){Oi.open=!1,Ar.set({open:!1}),ie.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(i){Oi.loading=i}},Iu=G.getBlockchainApiUrl(),Ua=new Qs({baseUrl:Iu}),Pl={fetchIdentity({caipChainId:i,address:e}){return Ua.get({path:`/v1/identity/${e}`,params:{chainId:i,projectId:be.state.projectId}})},fetchTransactions({account:i,projectId:e,cursor:t}){const r=t?{cursor:t}:{};return Ua.get({path:`/v1/account/${i}/history?projectId=${e}`,params:r})}},Yt=tt({message:"",variant:"success",open:!1}),Be={state:Yt,subscribeKey(i,e){return Tt(Yt,i,e)},showSuccess(i){Yt.message=i,Yt.variant="success",Yt.open=!0},showError(i){const e=G.parseError(i);Yt.message=e,Yt.variant="error",Yt.open=!0},hide(){Yt.open=!1}},Fe=tt({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),bt={state:Fe,subscribe(i){return ri(Fe,()=>i(Fe))},async fetchTransactions(i){const{projectId:e}=be.state;if(!e||!i)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");Fe.loading=!0;try{const t=await Pl.fetchTransactions({account:i,projectId:e,cursor:Fe.next}),r=this.filterSpamTransactions(t.data),o=[...Fe.transactions,...r];Fe.loading=!1,Fe.transactions=o,Fe.transactionsByYear=this.groupTransactionsByYear(Fe.transactionsByYear,r),Fe.empty=o.length===0,Fe.next=t.next?t.next:void 0}catch{ie.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:i,projectId:e,cursor:Fe.next}}),Be.showError("Failed to fetch transactions"),Fe.loading=!1,Fe.empty=!0}},groupTransactionsByYear(i={},e=[]){const t=i;return e.forEach(r=>{var n;const o=new Date(r.metadata.minedAt).getFullYear();t[o]||(t[o]=[]),(n=t[o])==null||n.push(r)}),t},filterSpamTransactions(i){return i.filter(e=>!e.transfers.every(r=>{var o;return((o=r.nft_info)==null?void 0:o.flags.is_spam)===!0}))},resetTransactions(){Fe.transactions=[],Fe.transactionsByYear={},Fe.loading=!1,Fe.empty=!1,Fe.next=void 0}},He=tt({wcError:!1,buffering:!1}),pe={state:He,subscribeKey(i,e){return Tt(He,i,e)},_getClient(){if(!He._client)throw new Error("ConnectionController client not set");return He._client},setClient(i){He._client=cn(i)},connectWalletConnect(){He.wcPromise=this._getClient().connectWalletConnect(i=>{He.wcUri=i,He.wcPairingExpiry=G.getPairingExpiry()})},async connectExternal(i){var e,t;await((t=(e=this._getClient()).connectExternal)==null?void 0:t.call(e,i)),Qe.setConnectedConnector(i.type)},async signMessage(i){return this._getClient().signMessage(i)},checkInstalled(i){var e,t;return(t=(e=this._getClient()).checkInstalled)==null?void 0:t.call(e,i)},resetWcConnection(){He.wcUri=void 0,He.wcPairingExpiry=void 0,He.wcPromise=void 0,He.wcLinking=void 0,He.recentWallet=void 0,bt.resetTransactions(),Qe.deleteWalletConnectDeepLink()},setWcLinking(i){He.wcLinking=i},setWcError(i){He.wcError=i,He.buffering=!1},setRecentWallet(i){He.recentWallet=i},setBuffering(i){He.buffering=i},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},st=tt({status:"uninitialized",isSiweEnabled:!1}),We={state:st,subscribeKey(i,e){return Tt(st,i,e)},subscribe(i){return ri(st,()=>i(st))},_getClient(){if(!st._client)throw new Error("SIWEController client not set");return st._client},async getNonce(){const e=await this._getClient().getNonce();return this.setNonce(e),e},async getSession(){const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(i){const t=this._getClient().createMessage(i);return this.setMessage(t),t},async verifyMessage(i){return await this._getClient().verifyMessage(i)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const i=this._getClient();await i.signOut(),this.setStatus("ready"),(e=i.onSignOut)==null||e.call(i)},onSignIn(i){var t;const e=this._getClient();(t=e.onSignIn)==null||t.call(e,i)},onSignOut(){var e;const i=this._getClient();(e=i.onSignOut)==null||e.call(i)},setSIWEClient(i){st._client=cn(i),st.status="ready",st.isSiweEnabled=i.options.enabled},setNonce(i){st.nonce=i},setStatus(i){st.status=i},setMessage(i){st.message=i},setSession(i){st.session=i}},Pi=tt({themeMode:"dark",themeVariables:{}}),it={state:Pi,subscribe(i){return ri(Pi,()=>i(Pi))},setThemeMode(i){Pi.themeMode=i},setThemeVariables(i){Pi.themeVariables={...Pi.themeVariables,...i}},getSnapshot(){return Ol(Pi)}},Pe={getWalletImage(i){if(i!=null&&i.image_url)return i==null?void 0:i.image_url;if(i!=null&&i.image_id)return _r.state.walletImages[i.image_id]},getNetworkImage(i){if(i!=null&&i.imageUrl)return i==null?void 0:i.imageUrl;if(i!=null&&i.imageId)return _r.state.networkImages[i.imageId]},getConnectorImage(i){if(i!=null&&i.imageUrl)return i.imageUrl;if(i!=null&&i.imageId)return _r.state.connectorImages[i.imageId]}},Ml={goBackOrCloseModal(){Z.state.history.length>1?Z.goBack():Ce.close()},navigateAfterNetworkSwitch(){const{history:i}=Z.state,e=i.findIndex(t=>t==="Networks");e>=1?Z.goBackToIndex(e-1):Ce.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ro=globalThis,Xs=ro.ShadowRoot&&(ro.ShadyCSS===void 0||ro.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ea=Symbol(),ja=new WeakMap;let Bl=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ea)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Xs&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ja.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ja.set(t,e))}return e}toString(){return this.cssText}};const Bt=i=>new Bl(typeof i=="string"?i:i+"",void 0,ea),H=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,o,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new Bl(t,i,ea)},Tu=(i,e)=>{if(Xs)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),o=ro.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)}},za=Xs?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Bt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ru,defineProperty:ku,getOwnPropertyDescriptor:Nu,getOwnPropertyNames:Ou,getOwnPropertySymbols:Pu,getPrototypeOf:Mu}=Object,gi=globalThis,Fa=gi.trustedTypes,Bu=Fa?Fa.emptyScript:"",hs=gi.reactiveElementPolyfillSupport,en=(i,e)=>i,ao={toAttribute(i,e){switch(e){case Boolean:i=i?Bu:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ta=(i,e)=>!Ru(i,e),Za={attribute:!0,type:String,converter:ao,reflect:!1,useDefault:!1,hasChanged:ta};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),gi.litPropertyMetadata??(gi.litPropertyMetadata=new WeakMap);let br=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Za){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&ku(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:n}=Nu(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const a=o==null?void 0:o.call(this);n==null||n.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Za}static _$Ei(){if(this.hasOwnProperty(en("elementProperties")))return;const e=Mu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(en("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(en("properties"))){const t=this.properties,r=[...Ou(t),...Pu(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(za(o))}else e!==void 0&&t.push(za(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tu(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var n;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:ao).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){var n,s;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),u=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:ao;this._$Em=o;const h=u.fromAttribute(t,a.type);this[o]=h??((s=this._$Ej)==null?void 0:s.get(o))??h,this._$Em=null}}requestUpdate(e,t,r){var o;if(e!==void 0){const n=this.constructor,s=this[e];if(r??(r=n.getPropertyOptions(e)),!((r.hasChanged??ta)(s,t)||r.useDefault&&r.reflect&&s===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:n},s){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??t??this[e]),n!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,s]of o){const{wrapped:a}=s,u=this[n];a!==!0||this._$AL.has(n)||u===void 0||this.C(n,void 0,s,u)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};br.elementStyles=[],br.shadowRootOptions={mode:"open"},br[en("elementProperties")]=new Map,br[en("finalized")]=new Map,hs==null||hs({ReactiveElement:br}),(gi.reactiveElementVersions??(gi.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tn=globalThis,lo=tn.trustedTypes,Ha=lo?lo.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ll="$lit$",di=`lit$${Math.random().toFixed(9).slice(2)}$`,Dl="?"+di,Lu=`<${Dl}>`,Fi=document,un=()=>Fi.createComment(""),dn=i=>i===null||typeof i!="object"&&typeof i!="function",ia=Array.isArray,Du=i=>ia(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",fs=`[ 	
\f\r]`,Jr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Va=/-->/g,Ga=/>/g,Mi=RegExp(`>|${fs}(?:([^\\s"'>=/]+)(${fs}*=${fs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qa=/'/g,Ya=/"/g,Wl=/^(?:script|style|textarea|title)$/i,Ul=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),$=Ul(1),M=Ul(2),Zi=Symbol.for("lit-noChange"),Ue=Symbol.for("lit-nothing"),Ka=new WeakMap,Li=Fi.createTreeWalker(Fi,129);function jl(i,e){if(!ia(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ha!==void 0?Ha.createHTML(e):e}const Wu=(i,e)=>{const t=i.length-1,r=[];let o,n=e===2?"<svg>":e===3?"<math>":"",s=Jr;for(let a=0;a<t;a++){const u=i[a];let h,p,m=-1,x=0;for(;x<u.length&&(s.lastIndex=x,p=s.exec(u),p!==null);)x=s.lastIndex,s===Jr?p[1]==="!--"?s=Va:p[1]!==void 0?s=Ga:p[2]!==void 0?(Wl.test(p[2])&&(o=RegExp("</"+p[2],"g")),s=Mi):p[3]!==void 0&&(s=Mi):s===Mi?p[0]===">"?(s=o??Jr,m=-1):p[1]===void 0?m=-2:(m=s.lastIndex-p[2].length,h=p[1],s=p[3]===void 0?Mi:p[3]==='"'?Ya:qa):s===Ya||s===qa?s=Mi:s===Va||s===Ga?s=Jr:(s=Mi,o=void 0);const y=s===Mi&&i[a+1].startsWith("/>")?" ":"";n+=s===Jr?u+Lu:m>=0?(r.push(h),u.slice(0,m)+Ll+u.slice(m)+di+y):u+di+(m===-2?a:y)}return[jl(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};let Ps=class zl{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,s=0;const a=e.length-1,u=this.parts,[h,p]=Wu(e,t);if(this.el=zl.createElement(h,r),Li.currentNode=this.el.content,t===2||t===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=Li.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const m of o.getAttributeNames())if(m.endsWith(Ll)){const x=p[s++],y=o.getAttribute(m).split(di),E=/([.?@])?(.*)/.exec(x);u.push({type:1,index:n,name:E[2],strings:y,ctor:E[1]==="."?ju:E[1]==="?"?zu:E[1]==="@"?Fu:Do}),o.removeAttribute(m)}else m.startsWith(di)&&(u.push({type:6,index:n}),o.removeAttribute(m));if(Wl.test(o.tagName)){const m=o.textContent.split(di),x=m.length-1;if(x>0){o.textContent=lo?lo.emptyScript:"";for(let y=0;y<x;y++)o.append(m[y],un()),Li.nextNode(),u.push({type:2,index:++n});o.append(m[x],un())}}}else if(o.nodeType===8)if(o.data===Dl)u.push({type:2,index:n});else{let m=-1;for(;(m=o.data.indexOf(di,m+1))!==-1;)u.push({type:7,index:n}),m+=di.length-1}n++}}static createElement(e,t){const r=Fi.createElement("template");return r.innerHTML=e,r}};function Sr(i,e,t=i,r){var s,a;if(e===Zi)return e;let o=r!==void 0?(s=t._$Co)==null?void 0:s[r]:t._$Cl;const n=dn(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),n===void 0?o=void 0:(o=new n(i),o._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=o:t._$Cl=o),o!==void 0&&(e=Sr(i,o._$AS(i,e.values),o,r)),e}let Uu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??Fi).importNode(t,!0);Li.currentNode=o;let n=Li.nextNode(),s=0,a=0,u=r[0];for(;u!==void 0;){if(s===u.index){let h;u.type===2?h=new ra(n,n.nextSibling,this,e):u.type===1?h=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(h=new Zu(n,this,e)),this._$AV.push(h),u=r[++a]}s!==(u==null?void 0:u.index)&&(n=Li.nextNode(),s++)}return Li.currentNode=Fi,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},ra=class Fl{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=Ue,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Sr(this,e,t),dn(e)?e===Ue||e==null||e===""?(this._$AH!==Ue&&this._$AR(),this._$AH=Ue):e!==this._$AH&&e!==Zi&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Du(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ue&&dn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Fi.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ps.createElement(jl(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(t);else{const s=new Uu(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=Ka.get(e.strings);return t===void 0&&Ka.set(e.strings,t=new Ps(e)),t}k(e){ia(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new Fl(this.O(un()),this.O(un()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Do=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=Ue,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Ue}_$AI(e,t=this,r,o){const n=this.strings;let s=!1;if(n===void 0)e=Sr(this,e,t,0),s=!dn(e)||e!==this._$AH&&e!==Zi,s&&(this._$AH=e);else{const a=e;let u,h;for(e=n[0],u=0;u<n.length-1;u++)h=Sr(this,a[r+u],t,u),h===Zi&&(h=this._$AH[u]),s||(s=!dn(h)||h!==this._$AH[u]),h===Ue?e=Ue:e!==Ue&&(e+=(h??"")+n[u+1]),this._$AH[u]=h}s&&!o&&this.j(e)}j(e){e===Ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ju=class extends Do{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ue?void 0:e}},zu=class extends Do{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ue)}},Fu=class extends Do{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=Sr(this,e,t,0)??Ue)===Zi)return;const r=this._$AH,o=e===Ue&&r!==Ue||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==Ue&&(r===Ue||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Zu=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Sr(this,e)}};const ps=tn.litHtmlPolyfillSupport;ps==null||ps(Ps,ra),(tn.litHtmlVersions??(tn.litHtmlVersions=[])).push("3.3.1");const Hu=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=o=new ra(e.insertBefore(un(),n),n,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui=globalThis;let q=class extends br{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Hu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Zi}};var Rl;q._$litElement$=!0,q.finalized=!0,(Rl=Ui.litElementHydrateSupport)==null||Rl.call(Ui,{LitElement:q});const gs=Ui.litElementPolyfillSupport;gs==null||gs({LitElement:q});(Ui.litElementVersions??(Ui.litElementVersions=[])).push("4.2.1");let rn,wi,mi;function Zl(i,e){rn=document.createElement("style"),wi=document.createElement("style"),mi=document.createElement("style"),rn.textContent=Cr(i).core.cssText,wi.textContent=Cr(i).dark.cssText,mi.textContent=Cr(i).light.cssText,document.head.appendChild(rn),document.head.appendChild(wi),document.head.appendChild(mi),na(e)}function na(i){wi&&mi&&(i==="light"?(wi.removeAttribute("media"),mi.media="enabled"):(mi.removeAttribute("media"),wi.media="enabled"))}function Hl(i){rn&&wi&&mi&&(rn.textContent=Cr(i).core.cssText,wi.textContent=Cr(i).dark.cssText,mi.textContent=Cr(i).light.cssText)}function Cr(i){return{core:H`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${Bt(i!=null&&i["--w3m-color-mix-strength"]?`${i["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Bt((i==null?void 0:i["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Bt((i==null?void 0:i["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Bt((i==null?void 0:i["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Bt((i==null?void 0:i["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:H`
      :root {
        --w3m-color-mix: ${Bt((i==null?void 0:i["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Bt((i==null?void 0:i["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: var(--wui-success-glass-015);
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:H`
      :root {
        --w3m-color-mix: ${Bt((i==null?void 0:i["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Bt((i==null?void 0:i["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const Q=H`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Re=H`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,oa=H`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function Vu(i,e){const{kind:t,elements:r}=e;return{kind:t,elements:r,finisher(o){customElements.get(i)||customElements.define(i,o)}}}function Gu(i,e){return customElements.get(i)||customElements.define(i,e),e}function S(i){return function(t){return typeof t=="function"?Gu(i,t):Vu(i,t)}}const qu=H`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var Yu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let co=class extends q{render(){return $`<slot></slot>`}};co.styles=[Q,qu];co=Yu([S("wui-card")],co);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ku={attribute:!0,type:String,converter:ao,reflect:!1,hasChanged:ta},Ju=(i=Ku,e,t)=>{const{kind:r,metadata:o}=t;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(t.name,i),r==="accessor"){const{name:s}=t;return{set(a){const u=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,u,i)},init(a){return a!==void 0&&this.C(s,void 0,i,a),a}}}if(r==="setter"){const{name:s}=t;return function(a){const u=this[s];e.call(this,a),this.requestUpdate(s,u,i)}}throw Error("Unsupported decorator location: "+r)};function w(i){return(e,t)=>typeof t=="object"?Ju(i,e,t):((r,o,n)=>{const s=o.hasOwnProperty(n);return o.constructor.createProperty(n,r),s?Object.getOwnPropertyDescriptor(o,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wo(i){return w({...i,state:!0,attribute:!1})}const Qu=H`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Xu=M`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,ed=M`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,td=M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,id=M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,rd=M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,nd=M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,od=M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,sd=M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,ad=M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,ld=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,cd=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,ud=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,dd=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,hd=M`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,fd=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,pd=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,gd=M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,wd=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,md=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,vd=M` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,bd=M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,yd=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,xd=M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,_d=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Cd=M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Ed=M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,$d=M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Ad=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Sd=M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Id=M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Td=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,Rd=M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,kd=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,Nd=M`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,Od=M`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,Pd=M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,Md=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,Bd=M` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,Ld=M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,Dd=M`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,Wd=M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,Ud=M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,jd=M`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,zd=M`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Fd=M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,Zd=M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Hd=M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Vd=M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Gd=M`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,qd=M`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,Yd=M`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,Kd=M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,Jd=M`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,Qd=M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,Xd=M`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.687 0.557043C11.1462 0.671832 11.4254 1.13706 11.3106 1.59615C11.2044 2.02082 11.0975 2.51184 10.9822 3.04102C10.7176 4.25623 10.4091 5.6727 9.96482 6.94907C10.1435 7.58939 10.3065 8.16905 10.4935 8.68429C10.6447 9.10072 10.7858 9.39487 10.9179 9.58289C11.0055 9.70747 11.0597 9.74443 11.0748 9.75277C11.096 9.75724 11.1075 9.75764 11.1531 9.71916C11.2342 9.65067 11.3386 9.50891 11.4426 9.28357C11.5416 9.06892 11.614 8.8366 11.662 8.6497C11.6854 8.55831 11.7019 8.48242 11.7122 8.43111C11.7174 8.40555 11.7209 8.38638 11.723 8.37476L11.725 8.36363C11.8 7.89659 12.2395 7.57864 12.7068 7.65342C13.1742 7.72822 13.4925 8.16766 13.4177 8.63494C13.4153 8.64924 13.42 8.62063 13.4177 8.63494L13.4175 8.63596L13.4173 8.63721L13.4168 8.64037L13.4153 8.64924L13.4105 8.67692C13.4064 8.69961 13.4006 8.73069 13.3929 8.76891C13.3776 8.84516 13.3545 8.95091 13.3224 9.07586C13.2593 9.32166 13.1564 9.66085 12.9992 10.0015C12.8469 10.3315 12.6139 10.7288 12.2595 11.0282C11.8757 11.3523 11.35 11.5553 10.7293 11.4312C10.1645 11.3183 9.77597 10.939 9.51527 10.5681C9.2535 10.1957 9.05129 9.7349 8.88212 9.26898C8.87877 9.25975 8.87542 9.25049 8.87208 9.2412C8.03954 10.4941 6.83375 11.4479 5.03926 11.4479C3.48049 11.4479 2.31021 10.7159 1.56788 9.63945C0.846767 8.5938 0.544023 7.25403 0.573206 5.9702C0.60242 4.68505 0.966023 3.36073 1.69055 2.33272C2.42915 1.28475 3.5614 0.531453 5.03927 0.531453C6.44937 0.531453 7.4408 1.29593 8.1276 2.27567C8.48261 2.7821 8.77248 3.36668 9.0177 3.97383C9.1059 3.59106 9.18901 3.20908 9.27086 2.83294C9.39492 2.26277 9.51606 1.70605 9.64752 1.18046C9.76235 0.721369 10.2277 0.442254 10.687 0.557043ZM8.16354 6.87693C8.08689 6.60534 8.01003 6.33741 7.93241 6.08076C7.59522 4.96581 7.22132 3.969 6.72371 3.25914C6.24674 2.57873 5.72135 2.24516 5.03927 2.24516C4.21565 2.24516 3.56947 2.6422 3.09195 3.31975C2.60035 4.01725 2.31013 4.99361 2.28705 6.00913C2.26393 7.02599 2.51041 7.9869 2.97927 8.66676C3.42691 9.31586 4.08734 9.73417 5.03926 9.73417C6.48097 9.73417 7.4216 8.72164 8.14437 6.9249C8.15079 6.90893 8.15718 6.89294 8.16354 6.87693Z" fill="#47A1FF"/>
</svg>`;var Uo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const e0={allWallets:Xu,alpha:Xd,appStore:ed,chromeStore:hd,apple:td,arrowBottom:id,arrowLeft:rd,arrowRight:nd,arrowTop:od,browser:sd,checkmark:ad,chevronBottom:ld,chevronLeft:cd,chevronRight:ud,chevronTop:dd,clock:fd,close:pd,compass:wd,coinPlaceholder:gd,copy:md,cursor:vd,desktop:bd,disconnect:yd,discord:xd,etherscan:_d,extension:Cd,externalLink:Ed,facebook:$d,filters:Ad,github:Sd,google:Id,helpCircle:Td,infoCircle:Rd,mail:kd,mobile:Nd,networkPlaceholder:Od,nftPlaceholder:Pd,off:Md,playStore:Bd,qrCode:Ld,refresh:Dd,search:Wd,swapHorizontal:Ud,swapHorizontalBold:jd,swapVertical:zd,telegram:Fd,twitch:Zd,twitter:Hd,twitterIcon:Vd,verify:Gd,verifyFilled:qd,wallet:Kd,walletConnect:Jd,walletPlaceholder:Yd,warningCircle:Qd};let Hi=class extends q{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,$`${e0[this.name]}`}};Hi.styles=[Q,oa,Qu];Uo([w()],Hi.prototype,"size",void 0);Uo([w()],Hi.prototype,"name",void 0);Uo([w()],Hi.prototype,"color",void 0);Hi=Uo([S("wui-icon")],Hi);const t0=H`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var sa=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ir=class extends q{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return $`<img src=${this.src} alt=${this.alt} />`}};Ir.styles=[Q,oa,t0];sa([w()],Ir.prototype,"src",void 0);sa([w()],Ir.prototype,"alt",void 0);Ir=sa([S("wui-image")],Ir);const i0=H`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var r0=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let uo=class extends q{render(){return $`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};uo.styles=[Q,i0];uo=r0([S("wui-loading-hexagon")],uo);const n0=H`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var aa=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Tr=class extends q{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,$`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Tr.styles=[Q,n0];aa([w()],Tr.prototype,"color",void 0);aa([w()],Tr.prototype,"size",void 0);Tr=aa([S("wui-loading-spinner")],Tr);const o0=H`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Vl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let hn=class extends q{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,o=116+r,n=245+r,s=360+r*1.75;return $`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${n}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};hn.styles=[Q,o0];Vl([w({type:Number})],hn.prototype,"radius",void 0);hn=Vl([S("wui-loading-thumbnail")],hn);const s0=H`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var jo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Vi=class extends q{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,$`<slot></slot>`}};Vi.styles=[s0];jo([w()],Vi.prototype,"width",void 0);jo([w()],Vi.prototype,"height",void 0);jo([w()],Vi.prototype,"borderRadius",void 0);Vi=jo([S("wui-shimmer")],Vi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gl={ATTRIBUTE:1,CHILD:2},ql=i=>(...e)=>({_$litDirective$:i,values:e});let Yl=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a0=ql(class extends Yl{constructor(i){var e;if(super(i),i.type!==Gl.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var r,o;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(e)}const t=i.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||(o=this.nt)!=null&&o.has(n)||(s?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Zi}}),l0=H`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var zo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Gi=class extends q{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,$`<slot class=${a0(e)}></slot>`}};Gi.styles=[Q,l0];zo([w()],Gi.prototype,"variant",void 0);zo([w()],Gi.prototype,"color",void 0);zo([w()],Gi.prototype,"align",void 0);Gi=zo([S("wui-text")],Gi);const c0=M`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,u0=M`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,d0=M`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,h0=M`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,f0=M`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,p0=M`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,g0=M`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,w0=M`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,m0=M`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,v0=M`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,b0=M`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,y0=M`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,x0=M`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,_0=H`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var Kl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const C0={browser:c0,dao:u0,defi:d0,defiAlt:h0,eth:f0,layers:p0,lock:g0,login:w0,network:m0,nft:v0,noun:b0,profile:y0,system:x0};let fn=class extends q{constructor(){super(...arguments),this.name="browser"}render(){return $`${C0[this.name]}`}};fn.styles=[Q,_0];Kl([w()],fn.prototype,"name",void 0);fn=Kl([S("wui-visual")],fn);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=i=>i??Ue,ye={getSpacingStyles(i,e){if(Array.isArray(i))return i[e]?`var(--wui-spacing-${i[e]})`:void 0;if(typeof i=="string")return`var(--wui-spacing-${i})`},getFormattedDate(i){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(i)},getHostName(i){return new URL(i).hostname},getTruncateString({string:i,charsStart:e,charsEnd:t,truncate:r}){return i.length<=e+t?i:r==="end"?`${i.substring(0,e)}...`:r==="start"?`...${i.substring(i.length-t)}`:`${i.substring(0,Math.floor(e))}...${i.substring(i.length-Math.floor(t))}`},generateAvatarColors(i){const t=i.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o==null?void 0:o.replace("px","")),a=`${s}% ${s}% at 65% 40%`,u=[];for(let h=0;h<5;h+=1){const p=this.tintColor(r,.15*h);u.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(i){const e=parseInt(i,16),t=e>>16&255,r=e>>8&255,o=e&255;return[t,r,o]},tintColor(i,e){const[t,r,o]=i,n=Math.round(t+(255-t)*e),s=Math.round(r+(255-r)*e),a=Math.round(o+(255-o)*e);return[n,s,a]},isNumber(i){return{number:/^[0-9]+$/u}.number.test(i)},getColorTheme(i){return i||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},E0=H`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var ct=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let qe=class extends q{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&ye.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ye.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ye.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ye.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ye.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ye.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ye.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ye.getSpacingStyles(this.margin,3)};
    `,$`<slot></slot>`}};qe.styles=[Q,E0];ct([w()],qe.prototype,"flexDirection",void 0);ct([w()],qe.prototype,"flexWrap",void 0);ct([w()],qe.prototype,"flexBasis",void 0);ct([w()],qe.prototype,"flexGrow",void 0);ct([w()],qe.prototype,"flexShrink",void 0);ct([w()],qe.prototype,"alignItems",void 0);ct([w()],qe.prototype,"justifyContent",void 0);ct([w()],qe.prototype,"columnGap",void 0);ct([w()],qe.prototype,"rowGap",void 0);ct([w()],qe.prototype,"gap",void 0);ct([w()],qe.prototype,"padding",void 0);ct([w()],qe.prototype,"margin",void 0);qe=ct([S("wui-flex")],qe);const $0=H`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Fo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let qi=class extends q{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return $`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",$`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=ye.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};qi.styles=[Q,$0];Fo([w()],qi.prototype,"imageSrc",void 0);Fo([w()],qi.prototype,"alt",void 0);Fo([w()],qi.prototype,"address",void 0);qi=Fo([S("wui-avatar")],qi);const A0=H`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var ni=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ft=class extends q{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t=this.size==="lg",r=this.size==="xl",o=t?"12%":"16%",n=t?"xxs":r?"s":"3xl",s=this.background==="gray",a=this.background==="opaque",u=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let h=`var(--wui-color-${this.backgroundColor})`;return u?h=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(h=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${h};
       --local-bg-mix: ${u||s?"100%":o};
       --local-border-radius: var(--wui-border-radius-${n});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,$` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};ft.styles=[Q,Re,A0];ni([w()],ft.prototype,"size",void 0);ni([w()],ft.prototype,"backgroundColor",void 0);ni([w()],ft.prototype,"iconColor",void 0);ni([w()],ft.prototype,"iconSize",void 0);ni([w()],ft.prototype,"background",void 0);ni([w({type:Boolean})],ft.prototype,"border",void 0);ni([w()],ft.prototype,"borderColor",void 0);ni([w()],ft.prototype,"icon",void 0);ft=ni([S("wui-icon-box")],ft);const S0=H`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var oi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let pt=class extends q{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return $`
      <button
        ?disabled=${this.disabled}
        class=${Dt(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${ye.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?$`<wui-image src=${this.networkSrc}></wui-image>`:$`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return $`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};pt.styles=[Q,Re,S0];oi([w()],pt.prototype,"networkSrc",void 0);oi([w()],pt.prototype,"avatarSrc",void 0);oi([w()],pt.prototype,"balance",void 0);oi([w({type:Boolean})],pt.prototype,"disabled",void 0);oi([w({type:Boolean})],pt.prototype,"isProfileName",void 0);oi([w()],pt.prototype,"address",void 0);oi([w()],pt.prototype,"charsStart",void 0);oi([w()],pt.prototype,"charsEnd",void 0);pt=oi([S("wui-account-button")],pt);const I0=H`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var ur=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Wt=class extends q{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),$`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?$`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:$`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Wt.styles=[Q,I0];ur([w()],Wt.prototype,"size",void 0);ur([w()],Wt.prototype,"name",void 0);ur([w()],Wt.prototype,"imageSrc",void 0);ur([w()],Wt.prototype,"walletIcon",void 0);ur([w({type:Boolean})],Wt.prototype,"installed",void 0);ur([w()],Wt.prototype,"badgeSize",void 0);Wt=ur([S("wui-wallet-image")],Wt);const T0=H`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Jl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const ws=4;let pn=class extends q{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<ws;return $`${this.walletImages.slice(0,ws).map(({src:t,walletName:r})=>$`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${Dt(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(ws-this.walletImages.length)].map(()=>$` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};pn.styles=[Q,T0];Jl([w({type:Array})],pn.prototype,"walletImages",void 0);pn=Jl([S("wui-all-wallets-image")],pn);const R0=H`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Ai=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ct=class extends q{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return $`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?$`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:$``}};Ct.styles=[Q,Re,R0];Ai([w()],Ct.prototype,"size",void 0);Ai([w({type:Boolean})],Ct.prototype,"disabled",void 0);Ai([w({type:Boolean})],Ct.prototype,"fullWidth",void 0);Ai([w({type:Boolean})],Ct.prototype,"loading",void 0);Ai([w()],Ct.prototype,"variant",void 0);Ai([w({type:Boolean})],Ct.prototype,"hasIconLeft",void 0);Ai([w({type:Boolean})],Ct.prototype,"hasIconRight",void 0);Ct=Ai([S("wui-button")],Ct);const Ql=M`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,k0=H`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var Xl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let gn=class extends q{constructor(){super(...arguments),this.type="wallet"}render(){return $`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?$` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Ql}`:$`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};gn.styles=[Q,Re,k0];Xl([w()],gn.prototype,"type",void 0);gn=Xl([S("wui-card-select-loader")],gn);const N0=M`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,O0=H`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var jn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bi=class extends q{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,$`${this.templateVisual()} ${e?N0:Ql}`}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};bi.styles=[Q,O0];jn([w()],bi.prototype,"size",void 0);jn([w()],bi.prototype,"name",void 0);jn([w()],bi.prototype,"imageSrc",void 0);jn([w({type:Boolean})],bi.prototype,"selected",void 0);bi=jn([S("wui-network-image")],bi);const P0=H`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var dr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ut=class extends q{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return $`
      <button data-selected=${Dt(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?$`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Dt(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:$`
      <wui-wallet-image
        size="md"
        imageSrc=${Dt(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Ut.styles=[Q,Re,P0];dr([w()],Ut.prototype,"name",void 0);dr([w()],Ut.prototype,"type",void 0);dr([w()],Ut.prototype,"imageSrc",void 0);dr([w({type:Boolean})],Ut.prototype,"disabled",void 0);dr([w({type:Boolean})],Ut.prototype,"selected",void 0);dr([w({type:Boolean})],Ut.prototype,"installed",void 0);Ut=dr([S("wui-card-select")],Ut);const M0=H`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var hr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let jt=class extends q{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const t=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return $`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${this.title?this.title:ye.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:null}};jt.styles=[Q,Re,M0];hr([w()],jt.prototype,"variant",void 0);hr([w()],jt.prototype,"imageSrc",void 0);hr([w({type:Boolean})],jt.prototype,"disabled",void 0);hr([w()],jt.prototype,"icon",void 0);hr([w()],jt.prototype,"href",void 0);hr([w()],jt.prototype,"text",void 0);jt=hr([S("wui-chip")],jt);const B0=H`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var la=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Rr=class extends q{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return $`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?$`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Rr.styles=[Q,Re,B0];la([w()],Rr.prototype,"size",void 0);la([w({type:Boolean})],Rr.prototype,"loading",void 0);Rr=la([S("wui-connect-button")],Rr);const L0=H`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Zo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Yi=class extends q{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return $`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Yi.styles=[Q,Re,L0];Zo([w({type:Boolean})],Yi.prototype,"disabled",void 0);Zo([w()],Yi.prototype,"label",void 0);Zo([w()],Yi.prototype,"buttonLabel",void 0);Yi=Zo([S("wui-cta-button")],Yi);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D0=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn=(i,e)=>{var r;const t=i._$AN;if(t===void 0)return!1;for(const o of t)(r=o._$AO)==null||r.call(o,e,!1),nn(o,e);return!0},ho=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},ec=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),j0(e)}};function W0(i){this._$AN!==void 0?(ho(this),this._$AM=i,ec(this)):this._$AM=i}function U0(i,e=!1,t=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let n=t;n<r.length;n++)nn(r[n],!1),ho(r[n]);else r!=null&&(nn(r,!1),ho(r));else nn(this,i)}const j0=i=>{i.type==Gl.CHILD&&(i._$AP??(i._$AP=U0),i._$AQ??(i._$AQ=W0))};let z0=class extends Yl{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),ec(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),t&&(nn(this,e),ho(this))}setValue(e){if(D0(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tc=()=>new F0;let F0=class{};const ms=new WeakMap,ic=ql(class extends z0{render(i){return Ue}update(i,[e]){var r;const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(r=i.options)==null?void 0:r.host,this.rt(this.ct=i.element)),Ue}rt(i){if(this.isConnected||(i=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=ms.get(e);t===void 0&&(t=new WeakMap,ms.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){var i,e;return typeof this.G=="function"?(i=ms.get(this.ht??globalThis))==null?void 0:i.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Z0=H`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Si=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Et=class extends q{constructor(){super(...arguments),this.inputElementRef=tc(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return $` ${this.templateIcon()}
      <input
        ${ic(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${Dt(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${Dt(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?$`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};Et.styles=[Q,Re,Z0];Si([w()],Et.prototype,"size",void 0);Si([w()],Et.prototype,"icon",void 0);Si([w({type:Boolean})],Et.prototype,"disabled",void 0);Si([w()],Et.prototype,"placeholder",void 0);Si([w()],Et.prototype,"type",void 0);Si([w()],Et.prototype,"keyHint",void 0);Si([w()],Et.prototype,"value",void 0);Et=Si([S("wui-input-text")],Et);const H0=H`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Ho=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ki=class extends q{constructor(){super(...arguments),this.disabled=!1}render(){return $`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?$`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Ki.styles=[Q,H0];Ho([w()],Ki.prototype,"errorMessage",void 0);Ho([w({type:Boolean})],Ki.prototype,"disabled",void 0);Ho([w()],Ki.prototype,"value",void 0);Ki=Ho([S("wui-email-input")],Ki);const V0=H`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var zn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yi=class extends q{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};yi.styles=[Q,Re,oa,V0];zn([w()],yi.prototype,"size",void 0);zn([w({type:Boolean})],yi.prototype,"disabled",void 0);zn([w()],yi.prototype,"icon",void 0);zn([w()],yi.prototype,"iconColor",void 0);yi=zn([S("wui-icon-link")],yi);const G0=H`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var rc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wn=class extends q{constructor(){super(...arguments),this.icon="copy"}render(){return $`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};wn.styles=[Q,Re,G0];rc([w()],wn.prototype,"icon",void 0);wn=rc([S("wui-input-element")],wn);const q0=H`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var ca=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let kr=class extends q{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return $`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};kr.styles=[Q,Re,q0];ca([w({type:Boolean})],kr.prototype,"disabled",void 0);ca([w({type:String})],kr.prototype,"value",void 0);kr=ca([S("wui-input-numeric")],kr);const Y0=H`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var ua=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Nr=class extends q{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Nr.styles=[Q,Re,Y0];ua([w({type:Boolean})],Nr.prototype,"disabled",void 0);ua([w()],Nr.prototype,"color",void 0);Nr=ua([S("wui-link")],Nr);const K0=H`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Vt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let lt=class extends q{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return $`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Dt(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return $`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return $`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:t;return $`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?$`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:$``}chevronTemplate(){return this.chevron?$`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};lt.styles=[Q,Re,K0];Vt([w()],lt.prototype,"icon",void 0);Vt([w()],lt.prototype,"iconSize",void 0);Vt([w()],lt.prototype,"variant",void 0);Vt([w()],lt.prototype,"iconVariant",void 0);Vt([w({type:Boolean})],lt.prototype,"disabled",void 0);Vt([w()],lt.prototype,"imageSrc",void 0);Vt([w()],lt.prototype,"alt",void 0);Vt([w({type:Boolean})],lt.prototype,"chevron",void 0);Vt([w({type:Boolean})],lt.prototype,"loading",void 0);lt=Vt([S("wui-list-item")],lt);var Ms;(function(i){i.approve="approved",i.bought="bought",i.borrow="borrowed",i.burn="burnt",i.cancel="canceled",i.claim="claimed",i.deploy="deployed",i.deposit="deposited",i.execute="executed",i.mint="minted",i.receive="received",i.repay="repaid",i.send="sent",i.sell="sold",i.stake="staked",i.trade="swapped",i.unstake="unstaked",i.withdraw="withdrawn"})(Ms||(Ms={}));const J0=H`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var fr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let zt=class extends q{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,r=(e==null?void 0:e.type)==="NFT",o=t!=null&&t.url?t.type==="NFT":r,n=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${n};
    --local-right-border-radius: ${s};
    `,$`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||t!=null&&t.url)?$`<div class="swap-images-container">
        ${e!=null&&e.url?$`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t!=null&&t.url?$`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?$`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?$`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:$`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",t;return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?$`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};zt.styles=[J0];fr([w()],zt.prototype,"type",void 0);fr([w()],zt.prototype,"status",void 0);fr([w()],zt.prototype,"direction",void 0);fr([w({type:Boolean})],zt.prototype,"onlyDirectionIcon",void 0);fr([w({type:Array})],zt.prototype,"images",void 0);fr([w({type:Object})],zt.prototype,"secondImage",void 0);zt=fr([S("wui-transaction-visual")],zt);const Q0=H`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Ii=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let $t=class extends q{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return $`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Dt(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${Dt(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Ms[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[0];return e?$`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[1];return e?$`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};$t.styles=[Q,Q0];Ii([w()],$t.prototype,"type",void 0);Ii([w({type:Array})],$t.prototype,"descriptions",void 0);Ii([w()],$t.prototype,"date",void 0);Ii([w({type:Boolean})],$t.prototype,"onlyDirectionIcon",void 0);Ii([w()],$t.prototype,"status",void 0);Ii([w()],$t.prototype,"direction",void 0);Ii([w({type:Array})],$t.prototype,"images",void 0);$t=Ii([S("wui-transaction-list-item")],$t);const X0=H`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var eh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fo=class extends q{render(){return $`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};fo.styles=[Q,X0];fo=eh([S("wui-transaction-list-item-loader")],fo);const th=H`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var nc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let mn=class extends q{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,$`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};mn.styles=[Q,th];nc([w()],mn.prototype,"variant",void 0);mn=nc([S("wui-tag")],mn);const ih=H`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Rt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let rt=class extends q{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?$` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?$` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?$`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?$`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?$`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?$`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rt.styles=[Q,Re,ih];Rt([w({type:Array})],rt.prototype,"walletImages",void 0);Rt([w()],rt.prototype,"imageSrc",void 0);Rt([w()],rt.prototype,"name",void 0);Rt([w()],rt.prototype,"tagLabel",void 0);Rt([w()],rt.prototype,"tagVariant",void 0);Rt([w()],rt.prototype,"icon",void 0);Rt([w()],rt.prototype,"walletIcon",void 0);Rt([w({type:Boolean})],rt.prototype,"installed",void 0);Rt([w({type:Boolean})],rt.prototype,"disabled",void 0);Rt([w({type:Boolean})],rt.prototype,"showAllWallets",void 0);rt=Rt([S("wui-list-wallet")],rt);const rh=H`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var oc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vn=class extends q{constructor(){super(...arguments),this.logo="google"}render(){return $`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};vn.styles=[Q,rh];oc([w()],vn.prototype,"logo",void 0);vn=oc([S("wui-logo")],vn);const nh=H`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var da=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Or=class extends q{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Or.styles=[Q,Re,nh];da([w()],Or.prototype,"logo",void 0);da([w({type:Boolean})],Or.prototype,"disabled",void 0);Or=da([S("wui-logo-select")],Or);const oh=H`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var ha=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Pr=class extends q{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:$`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Pr.styles=[Q,Re,oh];ha([w()],Pr.prototype,"imageSrc",void 0);ha([w({type:Boolean})],Pr.prototype,"disabled",void 0);Pr=ha([S("wui-network-button")],Pr);const sh=H`
  :host {
    position: relative;
    display: block;
  }
`;var Vo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ji=class extends q{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(r=>r!==""),this.handleKeyDown=(e,t)=>{const r=e.target,o=this.getInputElement(r),n=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;n.includes(e.key)&&e.preventDefault();const s=o.selectionStart;switch(e.key){case"ArrowLeft":s&&o.setSelectionRange(s+1,s+1),this.focusInputField("prev",t);break;case"ArrowRight":this.focusInputField("next",t);break;case"Shift":this.focusInputField("next",t);break;case"Delete":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break;case"Backspace":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break}},this.focusInputField=(e,t)=>{if(e==="next"){const r=t+1;if(!this.shouldInputBeEnabled(r))return;const o=this.numerics[r<this.length?r:t],n=o?this.getInputElement(o):void 0;n&&(n.disabled=!1,n.focus())}if(e==="prev"){const r=t-1,o=this.numerics[r>-1?r:t],n=o?this.getInputElement(o):void 0;n&&n.focus()}}}firstUpdated(){var t,r;this.otp&&(this.values=this.otp.split(""));const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(r=this.numerics[0])==null||r.focus()}render(){return $`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>$`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,t)}
              @keydown=${r=>this.handleKeyDown(r,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){const o=this.numerics[t],n=e||(o?this.getInputElement(o):void 0);n&&(n.value=r,this.values=this.values.map((s,a)=>a===t?r:s))}handleInput(e,t){const r=e.target,o=this.getInputElement(r);if(o){const n=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,n,t):ye.isNumber(n)&&e.data?(this.updateInput(o,t,e.data),this.focusInputField("next",t)):this.updateInput(o,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){const o=t[0];if(o&&ye.isNumber(o)){this.updateInput(e,r,o);const s=t.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],u=a?this.getInputElement(a):void 0;u&&this.handlePaste(u,s,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};Ji.styles=[Q,sh];Vo([w({type:Number})],Ji.prototype,"length",void 0);Vo([w({type:String})],Ji.prototype,"otp",void 0);Vo([Wo()],Ji.prototype,"values",void 0);Ji=Vo([S("wui-otp")],Ji);var Fn={},ah=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},sc={},ut={};let fa;const lh=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];ut.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};ut.getSymbolTotalCodewords=function(e){return lh[e]};ut.getBCHDigit=function(i){let e=0;for(;i!==0;)e++,i>>>=1;return e};ut.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');fa=e};ut.isKanjiModeEnabled=function(){return typeof fa<"u"};ut.toSJIS=function(e){return fa(e)};var Go={};(function(i){i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw new Error("Unknown EC Level: "+t)}}i.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},i.from=function(r,o){if(i.isValid(r))return r;try{return e(r)}catch{return o}}})(Go);function ac(){this.buffer=[],this.length=0}ac.prototype={get:function(i){const e=Math.floor(i/8);return(this.buffer[e]>>>7-i%8&1)===1},put:function(i,e){for(let t=0;t<e;t++)this.putBit((i>>>e-t-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(i){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),i&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var ch=ac;function Zn(i){if(!i||i<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=i,this.data=new Uint8Array(i*i),this.reservedBit=new Uint8Array(i*i)}Zn.prototype.set=function(i,e,t,r){const o=i*this.size+e;this.data[o]=t,r&&(this.reservedBit[o]=!0)};Zn.prototype.get=function(i,e){return this.data[i*this.size+e]};Zn.prototype.xor=function(i,e,t){this.data[i*this.size+e]^=t};Zn.prototype.isReserved=function(i,e){return this.reservedBit[i*this.size+e]};var uh=Zn,lc={};(function(i){const e=ut.getSymbolSize;i.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=e(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,a=[n-7];for(let u=1;u<o-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},i.getPositions=function(r){const o=[],n=i.getRowColCoords(r),s=n.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||o.push([n[a],n[u]]);return o}})(lc);var cc={};const dh=ut.getSymbolSize,Ja=7;cc.getPositions=function(e){const t=dh(e);return[[0,0],[t-Ja,0],[0,t-Ja]]};var uc={};(function(i){i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};i.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},i.from=function(o){return i.isValid(o)?parseInt(o,10):void 0},i.getPenaltyN1=function(o){const n=o.size;let s=0,a=0,u=0,h=null,p=null;for(let m=0;m<n;m++){a=u=0,h=p=null;for(let x=0;x<n;x++){let y=o.get(m,x);y===h?a++:(a>=5&&(s+=e.N1+(a-5)),h=y,a=1),y=o.get(x,m),y===p?u++:(u>=5&&(s+=e.N1+(u-5)),p=y,u=1)}a>=5&&(s+=e.N1+(a-5)),u>=5&&(s+=e.N1+(u-5))}return s},i.getPenaltyN2=function(o){const n=o.size;let s=0;for(let a=0;a<n-1;a++)for(let u=0;u<n-1;u++){const h=o.get(a,u)+o.get(a,u+1)+o.get(a+1,u)+o.get(a+1,u+1);(h===4||h===0)&&s++}return s*e.N2},i.getPenaltyN3=function(o){const n=o.size;let s=0,a=0,u=0;for(let h=0;h<n;h++){a=u=0;for(let p=0;p<n;p++)a=a<<1&2047|o.get(h,p),p>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|o.get(p,h),p>=10&&(u===1488||u===93)&&s++}return s*e.N3},i.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let u=0;u<s;u++)n+=o.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*e.N4};function t(r,o,n){switch(r){case i.Patterns.PATTERN000:return(o+n)%2===0;case i.Patterns.PATTERN001:return o%2===0;case i.Patterns.PATTERN010:return n%3===0;case i.Patterns.PATTERN011:return(o+n)%3===0;case i.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case i.Patterns.PATTERN101:return o*n%2+o*n%3===0;case i.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case i.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}i.applyMask=function(o,n){const s=n.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)n.isReserved(u,a)||n.xor(u,a,t(o,u,a))},i.getBestMask=function(o,n){const s=Object.keys(i.Patterns).length;let a=0,u=1/0;for(let h=0;h<s;h++){n(h),i.applyMask(h,o);const p=i.getPenaltyN1(o)+i.getPenaltyN2(o)+i.getPenaltyN3(o)+i.getPenaltyN4(o);i.applyMask(h,o),p<u&&(u=p,a=h)}return a}})(uc);var qo={};const pi=Go,Xn=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],eo=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];qo.getBlocksCount=function(e,t){switch(t){case pi.L:return Xn[(e-1)*4+0];case pi.M:return Xn[(e-1)*4+1];case pi.Q:return Xn[(e-1)*4+2];case pi.H:return Xn[(e-1)*4+3];default:return}};qo.getTotalCodewordsCount=function(e,t){switch(t){case pi.L:return eo[(e-1)*4+0];case pi.M:return eo[(e-1)*4+1];case pi.Q:return eo[(e-1)*4+2];case pi.H:return eo[(e-1)*4+3];default:return}};var dc={},Yo={};const on=new Uint8Array(512),po=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)on[t]=e,po[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)on[t]=on[t-255]})();Yo.log=function(e){if(e<1)throw new Error("log("+e+")");return po[e]};Yo.exp=function(e){return on[e]};Yo.mul=function(e,t){return e===0||t===0?0:on[po[e]+po[t]]};(function(i){const e=Yo;i.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)n[s+a]^=e.mul(r[s],o[a]);return n},i.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let u=0;u<o.length;u++)n[u]^=e.mul(o[u],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},i.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=i.mul(o,new Uint8Array([1,e.exp(n)]));return o}})(dc);const hc=dc;function pa(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}pa.prototype.initialize=function(e){this.degree=e,this.genPoly=hc.generateECPolynomial(this.degree)};pa.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const r=hc.mod(t,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var hh=pa,fc={},Ti={},ga={};ga.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Gt={};const pc="[0-9]+",fh="[A-Z $%*+\\-./:]+";let bn="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";bn=bn.replace(/u/g,"\\u");const ph="(?:(?![A-Z0-9 $%*+\\-./:]|"+bn+`)(?:.|[\r
]))+`;Gt.KANJI=new RegExp(bn,"g");Gt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Gt.BYTE=new RegExp(ph,"g");Gt.NUMERIC=new RegExp(pc,"g");Gt.ALPHANUMERIC=new RegExp(fh,"g");const gh=new RegExp("^"+bn+"$"),wh=new RegExp("^"+pc+"$"),mh=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Gt.testKanji=function(e){return gh.test(e)};Gt.testNumeric=function(e){return wh.test(e)};Gt.testAlphanumeric=function(e){return mh.test(e)};(function(i){const e=ga,t=Gt;i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},i.getBestModeForData=function(n){return t.testNumeric(n)?i.NUMERIC:t.testAlphanumeric(n)?i.ALPHANUMERIC:t.testKanji(n)?i.KANJI:i.BYTE},i.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},i.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw new Error("Unknown mode: "+o)}}i.from=function(n,s){if(i.isValid(n))return n;try{return r(n)}catch{return s}}})(Ti);(function(i){const e=ut,t=qo,r=Go,o=Ti,n=ga,s=7973,a=e.getBCHDigit(s);function u(x,y,E){for(let A=1;A<=40;A++)if(y<=i.getCapacity(A,E,x))return A}function h(x,y){return o.getCharCountIndicator(x,y)+4}function p(x,y){let E=0;return x.forEach(function(A){const B=h(A.mode,y);E+=B+A.getBitsLength()}),E}function m(x,y){for(let E=1;E<=40;E++)if(p(x,E)<=i.getCapacity(E,y,o.MIXED))return E}i.from=function(y,E){return n.isValid(y)?parseInt(y,10):E},i.getCapacity=function(y,E,A){if(!n.isValid(y))throw new Error("Invalid QR Code version");typeof A>"u"&&(A=o.BYTE);const B=e.getSymbolTotalCodewords(y),I=t.getTotalCodewordsCount(y,E),R=(B-I)*8;if(A===o.MIXED)return R;const O=R-h(A,y);switch(A){case o.NUMERIC:return Math.floor(O/10*3);case o.ALPHANUMERIC:return Math.floor(O/11*2);case o.KANJI:return Math.floor(O/13);case o.BYTE:default:return Math.floor(O/8)}},i.getBestVersionForData=function(y,E){let A;const B=r.from(E,r.M);if(Array.isArray(y)){if(y.length>1)return m(y,B);if(y.length===0)return 1;A=y[0]}else A=y;return u(A.mode,A.getLength(),B)},i.getEncodedBits=function(y){if(!n.isValid(y)||y<7)throw new Error("Invalid QR Code version");let E=y<<12;for(;e.getBCHDigit(E)-a>=0;)E^=s<<e.getBCHDigit(E)-a;return y<<12|E}})(fc);var gc={};const Bs=ut,wc=1335,vh=21522,Qa=Bs.getBCHDigit(wc);gc.getEncodedBits=function(e,t){const r=e.bit<<3|t;let o=r<<10;for(;Bs.getBCHDigit(o)-Qa>=0;)o^=wc<<Bs.getBCHDigit(o)-Qa;return(r<<10|o)^vh};var mc={};const bh=Ti;function Mr(i){this.mode=bh.NUMERIC,this.data=i.toString()}Mr.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Mr.prototype.getLength=function(){return this.data.length};Mr.prototype.getBitsLength=function(){return Mr.getBitsLength(this.data.length)};Mr.prototype.write=function(e){let t,r,o;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),o=parseInt(r,10),e.put(o,10);const n=this.data.length-t;n>0&&(r=this.data.substr(t),o=parseInt(r,10),e.put(o,n*3+1))};var yh=Mr;const xh=Ti,vs=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Br(i){this.mode=xh.ALPHANUMERIC,this.data=i}Br.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Br.prototype.getLength=function(){return this.data.length};Br.prototype.getBitsLength=function(){return Br.getBitsLength(this.data.length)};Br.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=vs.indexOf(this.data[t])*45;r+=vs.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(vs.indexOf(this.data[t]),6)};var _h=Br,Ch=function(e){for(var t=[],r=e.length,o=0;o<r;o++){var n=e.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=e.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){t.push(n);continue}if(n<2048){t.push(n>>6|192),t.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){t.push(n>>12|224),t.push(n>>6&63|128),t.push(n&63|128);continue}if(n>=65536&&n<=1114111){t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(n&63|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer};const Eh=Ch,$h=Ti;function Lr(i){this.mode=$h.BYTE,typeof i=="string"&&(i=Eh(i)),this.data=new Uint8Array(i)}Lr.getBitsLength=function(e){return e*8};Lr.prototype.getLength=function(){return this.data.length};Lr.prototype.getBitsLength=function(){return Lr.getBitsLength(this.data.length)};Lr.prototype.write=function(i){for(let e=0,t=this.data.length;e<t;e++)i.put(this.data[e],8)};var Ah=Lr;const Sh=Ti,Ih=ut;function Dr(i){this.mode=Sh.KANJI,this.data=i}Dr.getBitsLength=function(e){return e*13};Dr.prototype.getLength=function(){return this.data.length};Dr.prototype.getBitsLength=function(){return Dr.getBitsLength(this.data.length)};Dr.prototype.write=function(i){let e;for(e=0;e<this.data.length;e++){let t=Ih.toSJIS(this.data[e]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),i.put(t,13)}};var Th=Dr,vc={exports:{}};(function(i){var e={single_source_shortest_paths:function(t,r,o){var n={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var u,h,p,m,x,y,E,A,B;!a.empty();){u=a.pop(),h=u.value,m=u.cost,x=t[h]||{};for(p in x)x.hasOwnProperty(p)&&(y=x[p],E=m+y,A=s[p],B=typeof s[p]>"u",(B||A>E)&&(s[p]=E,a.push(p,E),n[p]=h))}if(typeof o<"u"&&typeof s[o]>"u"){var I=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(I)}return n},extract_shortest_path_from_predecessor_list:function(t,r){for(var o=[],n=r;n;)o.push(n),t[n],n=t[n];return o.reverse(),o},find_path:function(t,r,o){var n=e.single_source_shortest_paths(t,r,o);return e.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(t){var r=e.PriorityQueue,o={},n;t=t||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,r){return t.cost-r.cost},push:function(t,r){var o={value:t,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};i.exports=e})(vc);var Rh=vc.exports;(function(i){const e=Ti,t=yh,r=_h,o=Ah,n=Th,s=Gt,a=ut,u=Rh;function h(I){return unescape(encodeURIComponent(I)).length}function p(I,R,O){const N=[];let j;for(;(j=I.exec(O))!==null;)N.push({data:j[0],index:j.index,mode:R,length:j[0].length});return N}function m(I){const R=p(s.NUMERIC,e.NUMERIC,I),O=p(s.ALPHANUMERIC,e.ALPHANUMERIC,I);let N,j;return a.isKanjiModeEnabled()?(N=p(s.BYTE,e.BYTE,I),j=p(s.KANJI,e.KANJI,I)):(N=p(s.BYTE_KANJI,e.BYTE,I),j=[]),R.concat(O,N,j).sort(function(ge,Se){return ge.index-Se.index}).map(function(ge){return{data:ge.data,mode:ge.mode,length:ge.length}})}function x(I,R){switch(R){case e.NUMERIC:return t.getBitsLength(I);case e.ALPHANUMERIC:return r.getBitsLength(I);case e.KANJI:return n.getBitsLength(I);case e.BYTE:return o.getBitsLength(I)}}function y(I){return I.reduce(function(R,O){const N=R.length-1>=0?R[R.length-1]:null;return N&&N.mode===O.mode?(R[R.length-1].data+=O.data,R):(R.push(O),R)},[])}function E(I){const R=[];for(let O=0;O<I.length;O++){const N=I[O];switch(N.mode){case e.NUMERIC:R.push([N,{data:N.data,mode:e.ALPHANUMERIC,length:N.length},{data:N.data,mode:e.BYTE,length:N.length}]);break;case e.ALPHANUMERIC:R.push([N,{data:N.data,mode:e.BYTE,length:N.length}]);break;case e.KANJI:R.push([N,{data:N.data,mode:e.BYTE,length:h(N.data)}]);break;case e.BYTE:R.push([{data:N.data,mode:e.BYTE,length:h(N.data)}])}}return R}function A(I,R){const O={},N={start:{}};let j=["start"];for(let ae=0;ae<I.length;ae++){const ge=I[ae],Se=[];for(let X=0;X<ge.length;X++){const z=ge[X],P=""+ae+X;Se.push(P),O[P]={node:z,lastCount:0},N[P]={};for(let Ee=0;Ee<j.length;Ee++){const Le=j[Ee];O[Le]&&O[Le].node.mode===z.mode?(N[Le][P]=x(O[Le].lastCount+z.length,z.mode)-x(O[Le].lastCount,z.mode),O[Le].lastCount+=z.length):(O[Le]&&(O[Le].lastCount=z.length),N[Le][P]=x(z.length,z.mode)+4+e.getCharCountIndicator(z.mode,R))}}j=Se}for(let ae=0;ae<j.length;ae++)N[j[ae]].end=0;return{map:N,table:O}}function B(I,R){let O;const N=e.getBestModeForData(I);if(O=e.from(R,N),O!==e.BYTE&&O.bit<N.bit)throw new Error('"'+I+'" cannot be encoded with mode '+e.toString(O)+`.
 Suggested mode is: `+e.toString(N));switch(O===e.KANJI&&!a.isKanjiModeEnabled()&&(O=e.BYTE),O){case e.NUMERIC:return new t(I);case e.ALPHANUMERIC:return new r(I);case e.KANJI:return new n(I);case e.BYTE:return new o(I)}}i.fromArray=function(R){return R.reduce(function(O,N){return typeof N=="string"?O.push(B(N,null)):N.data&&O.push(B(N.data,N.mode)),O},[])},i.fromString=function(R,O){const N=m(R,a.isKanjiModeEnabled()),j=E(N),ae=A(j,O),ge=u.find_path(ae.map,"start","end"),Se=[];for(let X=1;X<ge.length-1;X++)Se.push(ae.table[ge[X]].node);return i.fromArray(y(Se))},i.rawSplit=function(R){return i.fromArray(m(R,a.isKanjiModeEnabled()))}})(mc);const Ko=ut,bs=Go,kh=ch,Nh=uh,Oh=lc,Ph=cc,Ls=uc,Ds=qo,Mh=hh,go=fc,Bh=gc,Lh=Ti,ys=mc;function Dh(i,e){const t=i.size,r=Ph.getPositions(e);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||t<=n+a))for(let u=-1;u<=7;u++)s+u<=-1||t<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?i.set(n+a,s+u,!0,!0):i.set(n+a,s+u,!1,!0))}}function Wh(i){const e=i.size;for(let t=8;t<e-8;t++){const r=t%2===0;i.set(t,6,r,!0),i.set(6,t,r,!0)}}function Uh(i,e){const t=Oh.getPositions(e);for(let r=0;r<t.length;r++){const o=t[r][0],n=t[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?i.set(o+s,n+a,!0,!0):i.set(o+s,n+a,!1,!0)}}function jh(i,e){const t=i.size,r=go.getEncodedBits(e);let o,n,s;for(let a=0;a<18;a++)o=Math.floor(a/3),n=a%3+t-8-3,s=(r>>a&1)===1,i.set(o,n,s,!0),i.set(n,o,s,!0)}function xs(i,e,t){const r=i.size,o=Bh.getEncodedBits(e,t);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?i.set(n,8,s,!0):n<8?i.set(n+1,8,s,!0):i.set(r-15+n,8,s,!0),n<8?i.set(8,r-n-1,s,!0):n<9?i.set(8,15-n-1+1,s,!0):i.set(8,15-n-1,s,!0);i.set(r-8,8,1,!0)}function zh(i,e){const t=i.size;let r=-1,o=t-1,n=7,s=0;for(let a=t-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!i.isReserved(o,a-u)){let h=!1;s<e.length&&(h=(e[s]>>>n&1)===1),i.set(o,a-u,h),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||t<=o){o-=r,r=-r;break}}}function Fh(i,e,t){const r=new kh;t.forEach(function(u){r.put(u.mode.bit,4),r.put(u.getLength(),Lh.getCharCountIndicator(u.mode,i)),u.write(r)});const o=Ko.getSymbolTotalCodewords(i),n=Ds.getTotalCodewordsCount(i,e),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let u=0;u<a;u++)r.put(u%2?17:236,8);return Zh(r,i,e)}function Zh(i,e,t){const r=Ko.getSymbolTotalCodewords(e),o=Ds.getTotalCodewordsCount(e,t),n=r-o,s=Ds.getBlocksCount(e,t),a=r%s,u=s-a,h=Math.floor(r/s),p=Math.floor(n/s),m=p+1,x=h-p,y=new Mh(x);let E=0;const A=new Array(s),B=new Array(s);let I=0;const R=new Uint8Array(i.buffer);for(let ge=0;ge<s;ge++){const Se=ge<u?p:m;A[ge]=R.slice(E,E+Se),B[ge]=y.encode(A[ge]),E+=Se,I=Math.max(I,Se)}const O=new Uint8Array(r);let N=0,j,ae;for(j=0;j<I;j++)for(ae=0;ae<s;ae++)j<A[ae].length&&(O[N++]=A[ae][j]);for(j=0;j<x;j++)for(ae=0;ae<s;ae++)O[N++]=B[ae][j];return O}function Hh(i,e,t,r){let o;if(Array.isArray(i))o=ys.fromArray(i);else if(typeof i=="string"){let h=e;if(!h){const p=ys.rawSplit(i);h=go.getBestVersionForData(p,t)}o=ys.fromString(i,h||40)}else throw new Error("Invalid data");const n=go.getBestVersionForData(o,t);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=n;else if(e<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Fh(e,t,o),a=Ko.getSymbolSize(e),u=new Nh(a);return Dh(u,e),Wh(u),Uh(u,e),xs(u,t,0),e>=7&&jh(u,e),zh(u,s),isNaN(r)&&(r=Ls.getBestMask(u,xs.bind(null,u,t))),Ls.applyMask(r,u),xs(u,t,r),{modules:u,version:e,errorCorrectionLevel:t,maskPattern:r,segments:o}}sc.create=function(e,t){if(typeof e>"u"||e==="")throw new Error("No input text");let r=bs.M,o,n;return typeof t<"u"&&(r=bs.from(t.errorCorrectionLevel,bs.M),o=go.from(t.version),n=Ls.from(t.maskPattern),t.toSJISFunc&&Ko.setToSJISFunction(t.toSJISFunc)),Hh(e,o,r,n)};var bc={},wa={};(function(i){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let r=t.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+t);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}i.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},i.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},i.getImageWidth=function(r,o){const n=i.getScale(r,o);return Math.floor((r+o.margin*2)*n)},i.qrToImageData=function(r,o,n){const s=o.modules.size,a=o.modules.data,u=i.getScale(s,n),h=Math.floor((s+n.margin*2)*u),p=n.margin*u,m=[n.color.light,n.color.dark];for(let x=0;x<h;x++)for(let y=0;y<h;y++){let E=(x*h+y)*4,A=n.color.light;if(x>=p&&y>=p&&x<h-p&&y<h-p){const B=Math.floor((x-p)/u),I=Math.floor((y-p)/u);A=m[a[B*s+I]?1:0]}r[E++]=A.r,r[E++]=A.g,r[E++]=A.b,r[E]=A.a}}})(wa);(function(i){const e=wa;function t(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}i.render=function(n,s,a){let u=a,h=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(h=r()),u=e.getOptions(u);const p=e.getImageWidth(n.modules.size,u),m=h.getContext("2d"),x=m.createImageData(p,p);return e.qrToImageData(x.data,n,u),t(m,h,p),m.putImageData(x,0,0),h},i.renderToDataURL=function(n,s,a){let u=a;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const h=i.render(n,s,u),p=u.type||"image/png",m=u.rendererOpts||{};return h.toDataURL(p,m.quality)}})(bc);var yc={};const Vh=wa;function Xa(i,e){const t=i.a/255,r=e+'="'+i.hex+'"';return t<1?r+" "+e+'-opacity="'+t.toFixed(2).slice(1)+'"':r}function _s(i,e,t){let r=i+e;return typeof t<"u"&&(r+=" "+t),r}function Gh(i,e,t){let r="",o=0,n=!1,s=0;for(let a=0;a<i.length;a++){const u=Math.floor(a%e),h=Math.floor(a/e);!u&&!n&&(n=!0),i[a]?(s++,a>0&&u>0&&i[a-1]||(r+=n?_s("M",u+t,.5+h+t):_s("m",o,0),o=0,n=!1),u+1<e&&i[a+1]||(r+=_s("h",s),s=0)):o++}return r}yc.render=function(e,t,r){const o=Vh.getOptions(t),n=e.modules.size,s=e.modules.data,a=n+o.margin*2,u=o.color.light.a?"<path "+Xa(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",h="<path "+Xa(o.color.dark,"stroke")+' d="'+Gh(s,n,o.margin)+'"/>',p='viewBox="0 0 '+a+" "+a+'"',x='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+p+' shape-rendering="crispEdges">'+u+h+`</svg>
`;return typeof r=="function"&&r(null,x),x};const qh=ah,Ws=sc,xc=bc,Yh=yc;function ma(i,e,t,r,o){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!qh())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=t,t=e,e=r=void 0):s===3&&(e.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=t,t=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(t=e,e=r=void 0):s===2&&!e.getContext&&(r=t,t=e,e=void 0),new Promise(function(u,h){try{const p=Ws.create(t,r);u(i(p,e,r))}catch(p){h(p)}})}try{const u=Ws.create(t,r);o(null,i(u,e,r))}catch(u){o(u)}}Fn.create=Ws.create;Fn.toCanvas=ma.bind(null,xc.render);Fn.toDataURL=ma.bind(null,xc.renderToDataURL);Fn.toString=ma.bind(null,function(i,e,t){return Yh.render(i,t)});const Kh=.1,el=2.5,Kt=7;function Cs(i,e,t){return i===e?!1:(i-e<0?e-i:i-e)<=t+Kh}function Jh(i,e){const t=Array.prototype.slice.call(Fn.create(i,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(t.length);return t.reduce((o,n,s)=>(s%r===0?o.push([n]):o[o.length-1].push(n))&&o,[])}const Qh={generate(i,e,t){const r="#141414",o="transparent",s=[],a=Jh(i,"Q"),u=e/a.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:A,y:B})=>{const I=(a.length-Kt)*u*A,R=(a.length-Kt)*u*B,O=.45;for(let N=0;N<h.length;N+=1){const j=u*(Kt-N*2);s.push(M`
            <rect
              fill=${N===2?r:o}
              width=${N===0?j-5:j}
              rx= ${N===0?(j-5)*O:j*O}
              ry= ${N===0?(j-5)*O:j*O}
              stroke=${r}
              stroke-width=${N===0?5:0}
              height=${N===0?j-5:j}
              x= ${N===0?R+u*N+5/2:R+u*N}
              y= ${N===0?I+u*N+5/2:I+u*N}
            />
          `)}});const p=Math.floor((t+25)/u),m=a.length/2-p/2,x=a.length/2+p/2-1,y=[];a.forEach((A,B)=>{A.forEach((I,R)=>{if(a[B][R]&&!(B<Kt&&R<Kt||B>a.length-(Kt+1)&&R<Kt||B<Kt&&R>a.length-(Kt+1))&&!(B>m&&B<x&&R>m&&R<x)){const O=B*u+u/2,N=R*u+u/2;y.push([O,N])}})});const E={};return y.forEach(([A,B])=>{var I;E[A]?(I=E[A])==null||I.push(B):E[A]=[B]}),Object.entries(E).map(([A,B])=>{const I=B.filter(R=>B.every(O=>!Cs(R,O,u)));return[Number(A),I]}).forEach(([A,B])=>{B.forEach(I=>{s.push(M`<circle cx=${A} cy=${I} fill=${r} r=${u/el} />`)})}),Object.entries(E).filter(([A,B])=>B.length>1).map(([A,B])=>{const I=B.filter(R=>B.some(O=>Cs(R,O,u)));return[Number(A),I]}).map(([A,B])=>{B.sort((R,O)=>R<O?-1:1);const I=[];for(const R of B){const O=I.find(N=>N.some(j=>Cs(R,j,u)));O?O.push(R):I.push([R])}return[A,I.map(R=>[R[0],R[R.length-1]])]}).forEach(([A,B])=>{B.forEach(([I,R])=>{s.push(M`
              <line
                x1=${A}
                x2=${A}
                y1=${I}
                y2=${R}
                stroke=${r}
                stroke-width=${u/(el/2)}
                stroke-linecap="round"
              />
            `)})}),s}},Xh=H`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Gr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ei=class extends q{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,$`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return M`
      <svg height=${e} width=${e}>
        ${Qh.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:$`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ei.styles=[Q,Xh];Gr([w()],ei.prototype,"uri",void 0);Gr([w({type:Number})],ei.prototype,"size",void 0);Gr([w()],ei.prototype,"theme",void 0);Gr([w()],ei.prototype,"imageSrc",void 0);Gr([w()],ei.prototype,"alt",void 0);ei=Gr([S("wui-qr-code")],ei);const e1=H`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var t1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wo=class extends q{constructor(){super(...arguments),this.inputComponentRef=tc()}render(){return $`
      <wui-input-text
        ${ic(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};wo.styles=[Q,e1];wo=t1([S("wui-search-bar")],wo);const i1=H`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Hn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xi=class extends q{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return $`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};xi.styles=[Q,i1];Hn([w()],xi.prototype,"backgroundColor",void 0);Hn([w()],xi.prototype,"iconColor",void 0);Hn([w()],xi.prototype,"icon",void 0);Hn([w()],xi.prototype,"message",void 0);xi=Hn([S("wui-snackbar")],xi);const r1=H`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Ri=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let At=class extends q{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{const r=t===this.activeTab;return $`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],o=this.buttons[e],n=r==null?void 0:r.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),a=o==null?void 0:o.getBoundingClientRect(),u=s==null?void 0:s.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&u&&s&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+u.width)+6}px`,o.animate([{width:`${a.width+u.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};At.styles=[Q,Re,r1];Ri([w({type:Array})],At.prototype,"tabs",void 0);Ri([w()],At.prototype,"onTabChange",void 0);Ri([w({type:Array})],At.prototype,"buttons",void 0);Ri([w({type:Boolean})],At.prototype,"disabled",void 0);Ri([Wo()],At.prototype,"activeTab",void 0);Ri([Wo()],At.prototype,"localTabWidth",void 0);Ri([Wo()],At.prototype,"isDense",void 0);At=Ri([S("wui-tabs")],At);const n1=H`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var va=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Wr=class extends q{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return $`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Wr.styles=[Q,Re,n1];va([w()],Wr.prototype,"placement",void 0);va([w()],Wr.prototype,"message",void 0);Wr=va([S("wui-tooltip")],Wr);const o1=H`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Jo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Qi=class extends q{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,$`${this.templateVisual()}`}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:$`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Qi.styles=[Q,o1];Jo([w()],Qi.prototype,"imageSrc",void 0);Jo([w()],Qi.prototype,"alt",void 0);Jo([w({type:Boolean})],Qi.prototype,"borderRadiusFull",void 0);Qi=Jo([S("wui-visual-thumbnail")],Qi);const s1=H`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var Qo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Xi=class extends q{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return $`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Xi.styles=[Q,Re,s1];Qo([w()],Xi.prototype,"label",void 0);Qo([w()],Xi.prototype,"description",void 0);Qo([w()],Xi.prototype,"icon",void 0);Xi=Qo([S("wui-notice-card")],Xi);const a1=H`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var ba=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Es=100;let Ur=class extends q{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".heightContent");if(e){this.scrollElement=e;const r=e==null?void 0:e.scrollHeight;r&&r>Es&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}},0)}render(){return $`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${Es}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${Es}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?$` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Ur.styles=[Q,Re,a1];ba([w()],Ur.prototype,"textTitle",void 0);ba([w()],Ur.prototype,"overflowedContent",void 0);Ur=ba([S("wui-list-accordion")],Ur);const l1=H`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Xo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let er=class extends q{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return $`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?$` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};er.styles=[Q,Re,l1];Xo([w()],er.prototype,"imageSrc",void 0);Xo([w()],er.prototype,"textTitle",void 0);Xo([w()],er.prototype,"textValue",void 0);er=Xo([S("wui-list-content")],er);const c1=H`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Vn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _i=class extends q{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return $`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?$`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};_i.styles=[Q,Re,c1];Vn([w()],_i.prototype,"amount",void 0);Vn([w()],_i.prototype,"networkCurreny",void 0);Vn([w()],_i.prototype,"networkImageUrl",void 0);Vn([w()],_i.prototype,"receiverAddress",void 0);_i=Vn([S("wui-list-wallet-transaction")],_i);const u1=H`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var wt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Xe=class extends q{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&ye.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ye.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ye.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ye.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ye.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ye.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ye.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ye.getSpacingStyles(this.margin,3)};
    `,$`<slot></slot>`}};Xe.styles=[Q,u1];wt([w()],Xe.prototype,"gridTemplateRows",void 0);wt([w()],Xe.prototype,"gridTemplateColumns",void 0);wt([w()],Xe.prototype,"justifyItems",void 0);wt([w()],Xe.prototype,"alignItems",void 0);wt([w()],Xe.prototype,"justifyContent",void 0);wt([w()],Xe.prototype,"alignContent",void 0);wt([w()],Xe.prototype,"columnGap",void 0);wt([w()],Xe.prototype,"rowGap",void 0);wt([w()],Xe.prototype,"gap",void 0);wt([w()],Xe.prototype,"padding",void 0);wt([w()],Xe.prototype,"margin",void 0);Xe=wt([S("wui-grid")],Xe);const d1=H`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var _c=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yn=class extends q{constructor(){super(...arguments),this.text=""}render(){return $`${this.template()}`}template(){return this.text?$`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};yn.styles=[Q,d1];_c([w()],yn.prototype,"text",void 0);yn=_c([S("wui-separator")],yn);var Cc={exports:{}};(function(i,e){(function(t,r){i.exports=r()})(Ks,function(){var t=1e3,r=6e4,o=36e5,n="millisecond",s="second",a="minute",u="hour",h="day",p="week",m="month",x="quarter",y="year",E="date",A="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,I=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,R={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Y){var L=["th","st","nd","rd"],k=Y%100;return"["+Y+(L[(k-20)%10]||L[k]||L[0])+"]"}},O=function(Y,L,k){var V=String(Y);return!V||V.length>=L?Y:""+Array(L+1-V.length).join(k)+Y},N={s:O,z:function(Y){var L=-Y.utcOffset(),k=Math.abs(L),V=Math.floor(k/60),W=k%60;return(L<=0?"+":"-")+O(V,2,"0")+":"+O(W,2,"0")},m:function Y(L,k){if(L.date()<k.date())return-Y(k,L);var V=12*(k.year()-L.year())+(k.month()-L.month()),W=L.clone().add(V,m),ne=k-W<0,oe=L.clone().add(V+(ne?-1:1),m);return+(-(V+(k-W)/(ne?W-oe:oe-W))||0)},a:function(Y){return Y<0?Math.ceil(Y)||0:Math.floor(Y)},p:function(Y){return{M:m,y,w:p,d:h,D:E,h:u,m:a,s,ms:n,Q:x}[Y]||String(Y||"").toLowerCase().replace(/s$/,"")},u:function(Y){return Y===void 0}},j="en",ae={};ae[j]=R;var ge="$isDayjsObject",Se=function(Y){return Y instanceof Ee||!(!Y||!Y[ge])},X=function Y(L,k,V){var W;if(!L)return j;if(typeof L=="string"){var ne=L.toLowerCase();ae[ne]&&(W=ne),k&&(ae[ne]=k,W=ne);var oe=L.split("-");if(!W&&oe.length>1)return Y(oe[0])}else{var ee=L.name;ae[ee]=L,W=ee}return!V&&W&&(j=W),W||!V&&j},z=function(Y,L){if(Se(Y))return Y.clone();var k=typeof L=="object"?L:{};return k.date=Y,k.args=arguments,new Ee(k)},P=N;P.l=X,P.i=Se,P.w=function(Y,L){return z(Y,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var Ee=function(){function Y(k){this.$L=X(k.locale,null,!0),this.parse(k),this.$x=this.$x||k.x||{},this[ge]=!0}var L=Y.prototype;return L.parse=function(k){this.$d=function(V){var W=V.date,ne=V.utc;if(W===null)return new Date(NaN);if(P.u(W))return new Date;if(W instanceof Date)return new Date(W);if(typeof W=="string"&&!/Z$/i.test(W)){var oe=W.match(B);if(oe){var ee=oe[2]-1||0,fe=(oe[7]||"0").substring(0,3);return ne?new Date(Date.UTC(oe[1],ee,oe[3]||1,oe[4]||0,oe[5]||0,oe[6]||0,fe)):new Date(oe[1],ee,oe[3]||1,oe[4]||0,oe[5]||0,oe[6]||0,fe)}}return new Date(W)}(k),this.init()},L.init=function(){var k=this.$d;this.$y=k.getFullYear(),this.$M=k.getMonth(),this.$D=k.getDate(),this.$W=k.getDay(),this.$H=k.getHours(),this.$m=k.getMinutes(),this.$s=k.getSeconds(),this.$ms=k.getMilliseconds()},L.$utils=function(){return P},L.isValid=function(){return this.$d.toString()!==A},L.isSame=function(k,V){var W=z(k);return this.startOf(V)<=W&&W<=this.endOf(V)},L.isAfter=function(k,V){return z(k)<this.startOf(V)},L.isBefore=function(k,V){return this.endOf(V)<z(k)},L.$g=function(k,V,W){return P.u(k)?this[V]:this.set(W,k)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(k,V){var W=this,ne=!!P.u(V)||V,oe=P.p(k),ee=function(mt,Ve){var Ot=P.w(W.$u?Date.UTC(W.$y,Ve,mt):new Date(W.$y,Ve,mt),W);return ne?Ot:Ot.endOf(h)},fe=function(mt,Ve){return P.w(W.toDate()[mt].apply(W.toDate("s"),(ne?[0,0,0,0]:[23,59,59,999]).slice(Ve)),W)},De=this.$W,Ze=this.$M,Ke=this.$D,qt="set"+(this.$u?"UTC":"");switch(oe){case y:return ne?ee(1,0):ee(31,11);case m:return ne?ee(1,Ze):ee(0,Ze+1);case p:var Nt=this.$locale().weekStart||0,dt=(De<Nt?De+7:De)-Nt;return ee(ne?Ke-dt:Ke+(6-dt),Ze);case h:case E:return fe(qt+"Hours",0);case u:return fe(qt+"Minutes",1);case a:return fe(qt+"Seconds",2);case s:return fe(qt+"Milliseconds",3);default:return this.clone()}},L.endOf=function(k){return this.startOf(k,!1)},L.$set=function(k,V){var W,ne=P.p(k),oe="set"+(this.$u?"UTC":""),ee=(W={},W[h]=oe+"Date",W[E]=oe+"Date",W[m]=oe+"Month",W[y]=oe+"FullYear",W[u]=oe+"Hours",W[a]=oe+"Minutes",W[s]=oe+"Seconds",W[n]=oe+"Milliseconds",W)[ne],fe=ne===h?this.$D+(V-this.$W):V;if(ne===m||ne===y){var De=this.clone().set(E,1);De.$d[ee](fe),De.init(),this.$d=De.set(E,Math.min(this.$D,De.daysInMonth())).$d}else ee&&this.$d[ee](fe);return this.init(),this},L.set=function(k,V){return this.clone().$set(k,V)},L.get=function(k){return this[P.p(k)]()},L.add=function(k,V){var W,ne=this;k=Number(k);var oe=P.p(V),ee=function(Ze){var Ke=z(ne);return P.w(Ke.date(Ke.date()+Math.round(Ze*k)),ne)};if(oe===m)return this.set(m,this.$M+k);if(oe===y)return this.set(y,this.$y+k);if(oe===h)return ee(1);if(oe===p)return ee(7);var fe=(W={},W[a]=r,W[u]=o,W[s]=t,W)[oe]||1,De=this.$d.getTime()+k*fe;return P.w(De,this)},L.subtract=function(k,V){return this.add(-1*k,V)},L.format=function(k){var V=this,W=this.$locale();if(!this.isValid())return W.invalidDate||A;var ne=k||"YYYY-MM-DDTHH:mm:ssZ",oe=P.z(this),ee=this.$H,fe=this.$m,De=this.$M,Ze=W.weekdays,Ke=W.months,qt=W.meridiem,Nt=function(Ve,Ot,ai,vt){return Ve&&(Ve[Ot]||Ve(V,ne))||ai[Ot].slice(0,vt)},dt=function(Ve){return P.s(ee%12||12,Ve,"0")},mt=qt||function(Ve,Ot,ai){var vt=Ve<12?"AM":"PM";return ai?vt.toLowerCase():vt};return ne.replace(I,function(Ve,Ot){return Ot||function(ai){switch(ai){case"YY":return String(V.$y).slice(-2);case"YYYY":return P.s(V.$y,4,"0");case"M":return De+1;case"MM":return P.s(De+1,2,"0");case"MMM":return Nt(W.monthsShort,De,Ke,3);case"MMMM":return Nt(Ke,De);case"D":return V.$D;case"DD":return P.s(V.$D,2,"0");case"d":return String(V.$W);case"dd":return Nt(W.weekdaysMin,V.$W,Ze,2);case"ddd":return Nt(W.weekdaysShort,V.$W,Ze,3);case"dddd":return Ze[V.$W];case"H":return String(ee);case"HH":return P.s(ee,2,"0");case"h":return dt(1);case"hh":return dt(2);case"a":return mt(ee,fe,!0);case"A":return mt(ee,fe,!1);case"m":return String(fe);case"mm":return P.s(fe,2,"0");case"s":return String(V.$s);case"ss":return P.s(V.$s,2,"0");case"SSS":return P.s(V.$ms,3,"0");case"Z":return oe}return null}(Ve)||oe.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(k,V,W){var ne,oe=this,ee=P.p(V),fe=z(k),De=(fe.utcOffset()-this.utcOffset())*r,Ze=this-fe,Ke=function(){return P.m(oe,fe)};switch(ee){case y:ne=Ke()/12;break;case m:ne=Ke();break;case x:ne=Ke()/3;break;case p:ne=(Ze-De)/6048e5;break;case h:ne=(Ze-De)/864e5;break;case u:ne=Ze/o;break;case a:ne=Ze/r;break;case s:ne=Ze/t;break;default:ne=Ze}return W?ne:P.a(ne)},L.daysInMonth=function(){return this.endOf(m).$D},L.$locale=function(){return ae[this.$L]},L.locale=function(k,V){if(!k)return this.$L;var W=this.clone(),ne=X(k,V,!0);return ne&&(W.$L=ne),W},L.clone=function(){return P.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},Y}(),Le=Ee.prototype;return z.prototype=Le,[["$ms",n],["$s",s],["$m",a],["$H",u],["$W",h],["$M",m],["$y",y],["$D",E]].forEach(function(Y){Le[Y[1]]=function(L){return this.$g(L,Y[0],Y[1])}}),z.extend=function(Y,L){return Y.$i||(Y(L,Ee,z),Y.$i=!0),z},z.locale=X,z.isDayjs=Se,z.unix=function(Y){return z(1e3*Y)},z.en=ae[j],z.Ls=ae,z.p={},z})})(Cc);var h1=Cc.exports;const xn=Js(h1);var Ec={exports:{}};(function(i,e){(function(t,r){i.exports=r()})(Ks,function(){return function(t,r,o){o.updateLocale=function(n,s){var a=o.Ls[n];if(a)return(s?Object.keys(s):[]).forEach(function(u){a[u]=s[u]}),a}}})})(Ec);var f1=Ec.exports;const p1=Js(f1);var $c={exports:{}};(function(i,e){(function(t,r){i.exports=r()})(Ks,function(){return function(t,r,o){t=t||{};var n=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(h,p,m,x){return n.fromToBase(h,p,m,x)}o.en.relativeTime=s,n.fromToBase=function(h,p,m,x,y){for(var E,A,B,I=m.$locale().relativeTime||s,R=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],O=R.length,N=0;N<O;N+=1){var j=R[N];j.d&&(E=x?o(h).diff(m,j.d,!0):m.diff(h,j.d,!0));var ae=(t.rounding||Math.round)(Math.abs(E));if(B=E>0,ae<=j.r||!j.r){ae<=1&&N>0&&(j=R[N-1]);var ge=I[j.l];y&&(ae=y(""+ae)),A=typeof ge=="string"?ge.replace("%d",ae):ge(ae,p,j.l,B);break}}if(p)return A;var Se=B?I.future:I.past;return typeof Se=="function"?Se(A):Se.replace("%s",A)},n.to=function(h,p){return a(h,p,this,!0)},n.from=function(h,p){return a(h,p,this)};var u=function(h){return h.$u?o.utc():o()};n.toNow=function(h){return this.to(u(this),h)},n.fromNow=function(h){return this.from(u(this),h)}}})})($c);var g1=$c.exports;const w1=Js(g1);xn.extend(w1);xn.extend(p1);xn.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const Ac={getYear(i=new Date().toISOString()){return xn(i).year()},getRelativeDateFromNow(i){return xn(i).fromNow(!0)}},m1=3,v1=["receive","deposit","borrow","claim"],b1=["withdraw","repay","burn"],Di={getTransactionGroupTitle(i){const e=Ac.getYear();return i===e?"This Year":i},getTransactionImages(i){const[e,t]=i,r=!!e&&(i==null?void 0:i.every(s=>!!s.nft_info)),o=(i==null?void 0:i.length)>1;return(i==null?void 0:i.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(t)]:o?i.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(i){return{type:Di.getTransactionTransferTokenType(i),url:Di.getTransactionImageURL(i)}},getTransactionImageURL(i){var o,n,s,a,u;let e=null;const t=!!(i!=null&&i.nft_info),r=!!(i!=null&&i.fungible_info);return i&&t?e=(s=(n=(o=i==null?void 0:i.nft_info)==null?void 0:o.content)==null?void 0:n.preview)==null?void 0:s.url:i&&r&&(e=(u=(a=i==null?void 0:i.fungible_info)==null?void 0:a.icon)==null?void 0:u.url),e},getTransactionTransferTokenType(i){return i!=null&&i.fungible_info?"FUNGIBLE":i!=null&&i.nft_info?"NFT":null},getTransactionDescriptions(i){var m,x,y;const e=(m=i.metadata)==null?void 0:m.operationType,t=i.transfers,r=((x=i.transfers)==null?void 0:x.length)>0,o=((y=i.transfers)==null?void 0:y.length)>1,n=r&&(t==null?void 0:t.every(E=>!!E.fungible_info)),[s,a]=t;let u=this.getTransferDescription(s),h=this.getTransferDescription(a);if(!r)return(e==="send"||e==="receive")&&n?(u=ye.getTruncateString({string:i.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),h=ye.getTruncateString({string:i.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[u,h]):[i.metadata.status];if(o)return t.map(E=>this.getTransferDescription(E));let p="";return v1.includes(e)?p="+":b1.includes(e)&&(p="-"),u=p.concat(u),[u]},getTransferDescription(i){var t;let e="";return i&&(i!=null&&i.nft_info?e=((t=i==null?void 0:i.nft_info)==null?void 0:t.name)||"-":i!=null&&i.fungible_info&&(e=this.getFungibleTransferDescription(i)||"-")),e},getFungibleTransferDescription(i){var r;return i?[this.getQuantityFixedValue(i==null?void 0:i.quantity.numeric),(r=i==null?void 0:i.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(i){return i?parseFloat(i).toFixed(m1):null}},y1=Object.freeze(Object.defineProperty({__proto__:null,TransactionUtil:Di,UiHelperUtil:ye,get WuiAccountButton(){return pt},get WuiAllWalletsImage(){return pn},get WuiAvatar(){return qi},get WuiButton(){return Ct},get WuiCard(){return co},get WuiCardSelect(){return Ut},get WuiCardSelectLoader(){return gn},get WuiChip(){return jt},get WuiConnectButton(){return Rr},get WuiCtaButton(){return Yi},get WuiEmailInput(){return Ki},get WuiFlex(){return qe},get WuiGrid(){return Xe},get WuiIcon(){return Hi},get WuiIconBox(){return ft},get WuiIconLink(){return yi},get WuiImage(){return Ir},get WuiInputElement(){return wn},get WuiInputNumeric(){return kr},get WuiInputText(){return Et},get WuiLink(){return Nr},get WuiListAccordion(){return Ur},get WuiListContent(){return er},get WuiListItem(){return lt},get WuiListWallet(){return rt},get WuiListWalletTransaction(){return _i},get WuiLoadingHexagon(){return uo},get WuiLoadingSpinner(){return Tr},get WuiLoadingThumbnail(){return hn},get WuiLogo(){return vn},get WuiLogoSelect(){return Or},get WuiNetworkButton(){return Pr},get WuiNetworkImage(){return bi},get WuiNoticeCard(){return Xi},get WuiOtp(){return Ji},get WuiQrCode(){return ei},get WuiSearchBar(){return wo},get WuiSeparator(){return yn},get WuiShimmer(){return Vi},get WuiSnackbar(){return xi},get WuiTabs(){return At},get WuiTag(){return mn},get WuiText(){return Gi},get WuiTooltip(){return Wr},get WuiTransactionListItem(){return $t},get WuiTransactionListItemLoader(){return fo},get WuiTransactionVisual(){return zt},get WuiVisual(){return fn},get WuiVisualThumbnail(){return Qi},get WuiWalletImage(){return Wt},customElement:S,initializeTheming:Zl,setColorTheme:na,setThemeVariables:Hl},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no=globalThis,ya=no.ShadowRoot&&(no.ShadyCSS===void 0||no.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xa=Symbol(),tl=new WeakMap;let Sc=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==xa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ya&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=tl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&tl.set(t,e))}return e}toString(){return this.cssText}};const x1=i=>new Sc(typeof i=="string"?i:i+"",void 0,xa),Ae=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,o,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new Sc(t,i,xa)},_1=(i,e)=>{if(ya)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),o=no.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)}},il=ya?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return x1(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:C1,defineProperty:E1,getOwnPropertyDescriptor:$1,getOwnPropertyNames:A1,getOwnPropertySymbols:S1,getPrototypeOf:I1}=Object,vi=globalThis,rl=vi.trustedTypes,T1=rl?rl.emptyScript:"",$s=vi.reactiveElementPolyfillSupport,sn=(i,e)=>i,mo={toAttribute(i,e){switch(e){case Boolean:i=i?T1:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},_a=(i,e)=>!C1(i,e),nl={attribute:!0,type:String,converter:mo,reflect:!1,useDefault:!1,hasChanged:_a};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),vi.litPropertyMetadata??(vi.litPropertyMetadata=new WeakMap);let yr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=nl){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&E1(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:n}=$1(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const a=o==null?void 0:o.call(this);n==null||n.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??nl}static _$Ei(){if(this.hasOwnProperty(sn("elementProperties")))return;const e=I1(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(sn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(sn("properties"))){const t=this.properties,r=[...A1(t),...S1(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(il(o))}else e!==void 0&&t.push(il(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _1(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var n;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:mo).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){var n,s;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),u=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:mo;this._$Em=o;const h=u.fromAttribute(t,a.type);this[o]=h??((s=this._$Ej)==null?void 0:s.get(o))??h,this._$Em=null}}requestUpdate(e,t,r){var o;if(e!==void 0){const n=this.constructor,s=this[e];if(r??(r=n.getPropertyOptions(e)),!((r.hasChanged??_a)(s,t)||r.useDefault&&r.reflect&&s===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:n},s){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??t??this[e]),n!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,s]of o){const{wrapped:a}=s,u=this[n];a!==!0||this._$AL.has(n)||u===void 0||this.C(n,void 0,s,u)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};yr.elementStyles=[],yr.shadowRootOptions={mode:"open"},yr[sn("elementProperties")]=new Map,yr[sn("finalized")]=new Map,$s==null||$s({ReactiveElement:yr}),(vi.reactiveElementVersions??(vi.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const an=globalThis,vo=an.trustedTypes,ol=vo?vo.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ic="$lit$",hi=`lit$${Math.random().toFixed(9).slice(2)}$`,Tc="?"+hi,R1=`<${Tc}>`,tr=document,_n=()=>tr.createComment(""),Cn=i=>i===null||typeof i!="object"&&typeof i!="function",Ca=Array.isArray,k1=i=>Ca(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",As=`[ 	
\f\r]`,Qr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sl=/-->/g,al=/>/g,Bi=RegExp(`>|${As}(?:([^\\s"'>=/]+)(${As}*=${As}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ll=/'/g,cl=/"/g,Rc=/^(?:script|style|textarea|title)$/i,N1=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),_=N1(1),jr=Symbol.for("lit-noChange"),je=Symbol.for("lit-nothing"),ul=new WeakMap,Wi=tr.createTreeWalker(tr,129);function kc(i,e){if(!Ca(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ol!==void 0?ol.createHTML(e):e}const O1=(i,e)=>{const t=i.length-1,r=[];let o,n=e===2?"<svg>":e===3?"<math>":"",s=Qr;for(let a=0;a<t;a++){const u=i[a];let h,p,m=-1,x=0;for(;x<u.length&&(s.lastIndex=x,p=s.exec(u),p!==null);)x=s.lastIndex,s===Qr?p[1]==="!--"?s=sl:p[1]!==void 0?s=al:p[2]!==void 0?(Rc.test(p[2])&&(o=RegExp("</"+p[2],"g")),s=Bi):p[3]!==void 0&&(s=Bi):s===Bi?p[0]===">"?(s=o??Qr,m=-1):p[1]===void 0?m=-2:(m=s.lastIndex-p[2].length,h=p[1],s=p[3]===void 0?Bi:p[3]==='"'?cl:ll):s===cl||s===ll?s=Bi:s===sl||s===al?s=Qr:(s=Bi,o=void 0);const y=s===Bi&&i[a+1].startsWith("/>")?" ":"";n+=s===Qr?u+R1:m>=0?(r.push(h),u.slice(0,m)+Ic+u.slice(m)+hi+y):u+hi+(m===-2?a:y)}return[kc(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class En{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,s=0;const a=e.length-1,u=this.parts,[h,p]=O1(e,t);if(this.el=En.createElement(h,r),Wi.currentNode=this.el.content,t===2||t===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=Wi.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const m of o.getAttributeNames())if(m.endsWith(Ic)){const x=p[s++],y=o.getAttribute(m).split(hi),E=/([.?@])?(.*)/.exec(x);u.push({type:1,index:n,name:E[2],strings:y,ctor:E[1]==="."?M1:E[1]==="?"?B1:E[1]==="@"?L1:es}),o.removeAttribute(m)}else m.startsWith(hi)&&(u.push({type:6,index:n}),o.removeAttribute(m));if(Rc.test(o.tagName)){const m=o.textContent.split(hi),x=m.length-1;if(x>0){o.textContent=vo?vo.emptyScript:"";for(let y=0;y<x;y++)o.append(m[y],_n()),Wi.nextNode(),u.push({type:2,index:++n});o.append(m[x],_n())}}}else if(o.nodeType===8)if(o.data===Tc)u.push({type:2,index:n});else{let m=-1;for(;(m=o.data.indexOf(hi,m+1))!==-1;)u.push({type:7,index:n}),m+=hi.length-1}n++}}static createElement(e,t){const r=tr.createElement("template");return r.innerHTML=e,r}}function zr(i,e,t=i,r){var s,a;if(e===jr)return e;let o=r!==void 0?(s=t._$Co)==null?void 0:s[r]:t._$Cl;const n=Cn(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),n===void 0?o=void 0:(o=new n(i),o._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=o:t._$Cl=o),o!==void 0&&(e=zr(i,o._$AS(i,e.values),o,r)),e}class P1{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??tr).importNode(t,!0);Wi.currentNode=o;let n=Wi.nextNode(),s=0,a=0,u=r[0];for(;u!==void 0;){if(s===u.index){let h;u.type===2?h=new Gn(n,n.nextSibling,this,e):u.type===1?h=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(h=new D1(n,this,e)),this._$AV.push(h),u=r[++a]}s!==(u==null?void 0:u.index)&&(n=Wi.nextNode(),s++)}return Wi.currentNode=tr,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Gn{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=je,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=zr(this,e,t),Cn(e)?e===je||e==null||e===""?(this._$AH!==je&&this._$AR(),this._$AH=je):e!==this._$AH&&e!==jr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):k1(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==je&&Cn(this._$AH)?this._$AA.nextSibling.data=e:this.T(tr.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=En.createElement(kc(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(t);else{const s=new P1(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=ul.get(e.strings);return t===void 0&&ul.set(e.strings,t=new En(e)),t}k(e){Ca(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new Gn(this.O(_n()),this.O(_n()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class es{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=je,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=je}_$AI(e,t=this,r,o){const n=this.strings;let s=!1;if(n===void 0)e=zr(this,e,t,0),s=!Cn(e)||e!==this._$AH&&e!==jr,s&&(this._$AH=e);else{const a=e;let u,h;for(e=n[0],u=0;u<n.length-1;u++)h=zr(this,a[r+u],t,u),h===jr&&(h=this._$AH[u]),s||(s=!Cn(h)||h!==this._$AH[u]),h===je?e=je:e!==je&&(e+=(h??"")+n[u+1]),this._$AH[u]=h}s&&!o&&this.j(e)}j(e){e===je?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class M1 extends es{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===je?void 0:e}}class B1 extends es{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==je)}}class L1 extends es{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=zr(this,e,t,0)??je)===jr)return;const r=this._$AH,o=e===je&&r!==je||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==je&&(r===je||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}let D1=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){zr(this,e)}};const Ss=an.litHtmlPolyfillSupport;Ss==null||Ss(En,Gn),(an.litHtmlVersions??(an.litHtmlVersions=[])).push("3.3.1");const W1=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=o=new Gn(e.insertBefore(_n(),n),n,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=globalThis;let ce=class extends yr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=W1(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return jr}};var kl;ce._$litElement$=!0,ce.finalized=!0,(kl=ji.litElementHydrateSupport)==null||kl.call(ji,{LitElement:ce});const Is=ji.litElementPolyfillSupport;Is==null||Is({LitElement:ce});(ji.litElementVersions??(ji.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U1={attribute:!0,type:String,converter:mo,reflect:!1,hasChanged:_a},j1=(i=U1,e,t)=>{const{kind:r,metadata:o}=t;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(t.name,i),r==="accessor"){const{name:s}=t;return{set(a){const u=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,u,i)},init(a){return a!==void 0&&this.C(s,void 0,i,a),a}}}if(r==="setter"){const{name:s}=t;return function(a){const u=this[s];e.call(this,a),this.requestUpdate(s,u,i)}}throw Error("Unsupported decorator location: "+r)};function ke(i){return(e,t)=>typeof t=="object"?j1(i,e,t):((r,o,n)=>{const s=o.hasOwnProperty(n);return o.constructor.createProperty(n,r),s?Object.getOwnPropertyDescriptor(o,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(i){return ke({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=i=>i??je;var kt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let gt=class extends ce{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=we.state.address,this.balanceVal=we.state.balance,this.balanceSymbol=we.state.balanceSymbol,this.profileName=we.state.profileName,this.profileImage=we.state.profileImage,this.network=Me.state.caipNetwork,this.unsubscribe.push(we.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),Me.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=Pe.getNetworkImage(this.network),t=this.balance==="show";return _`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${me(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${me(e)}
        avatarSrc=${me(this.profileImage)}
        balance=${t?G.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){Ce.open()}};kt([ke({type:Boolean})],gt.prototype,"disabled",void 0);kt([ke()],gt.prototype,"balance",void 0);kt([ke()],gt.prototype,"charsStart",void 0);kt([ke()],gt.prototype,"charsEnd",void 0);kt([F()],gt.prototype,"address",void 0);kt([F()],gt.prototype,"balanceVal",void 0);kt([F()],gt.prototype,"balanceSymbol",void 0);kt([F()],gt.prototype,"profileName",void 0);kt([F()],gt.prototype,"profileImage",void 0);kt([F()],gt.prototype,"network",void 0);gt=kt([S("w3m-account-button")],gt);const z1=Ae`
  :host {
    display: block;
    width: max-content;
  }
`;var si=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let St=class extends ce{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=we.state.isConnected,this.unsubscribe.push(we.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?_`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${me(this.balance)}
            .charsStart=${me(this.charsStart)}
            .charsEnd=${me(this.charsEnd)}
          >
          </w3m-account-button>
        `:_`
          <w3m-connect-button
            size=${me(this.size)}
            label=${me(this.label)}
            loadingLabel=${me(this.loadingLabel)}
          ></w3m-connect-button>
        `}};St.styles=z1;si([ke({type:Boolean})],St.prototype,"disabled",void 0);si([ke()],St.prototype,"balance",void 0);si([ke()],St.prototype,"size",void 0);si([ke()],St.prototype,"label",void 0);si([ke()],St.prototype,"loadingLabel",void 0);si([ke()],St.prototype,"charsStart",void 0);si([ke()],St.prototype,"charsEnd",void 0);si([F()],St.prototype,"isAccount",void 0);St=si([S("w3m-button")],St);var qr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ir=class extends ce{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ce.state.open,this.loading=Ce.state.loading,this.unsubscribe.push(Ce.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return _`
      <wui-connect-button
        size=${me(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ce.close():this.loading||Ce.open()}};qr([ke()],ir.prototype,"size",void 0);qr([ke()],ir.prototype,"label",void 0);qr([ke()],ir.prototype,"loadingLabel",void 0);qr([F()],ir.prototype,"open",void 0);qr([F()],ir.prototype,"loading",void 0);ir=qr([S("w3m-connect-button")],ir);const F1=Ae`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var ts=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const dl="scroll-lock";let rr=class extends ce{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Ce.state.open,this.caipAddress=we.state.address,this.isSiweEnabled=We.state.isSiweEnabled,this.initializeTheming(),he.prefetch(),this.unsubscribe.push(Ce.subscribeKey("open",e=>e?this.onOpen():this.onClose()),We.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),we.subscribe(e=>this.onNewAccountState(e))),ie.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?_`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&We.state.status!=="success"&&await pe.disconnect(),Ce.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=it.state,r=ye.getColorTheme(t);Zl(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Be.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=dl,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${dl}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:o}=r.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:t,caipAddress:r}=e;if(this.isSiweEnabled){t&&!this.caipAddress&&(this.caipAddress=r),t&&r&&this.caipAddress!==r&&(await We.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{const o=await We.getSession();o&&!t?await We.signOut():t&&!o&&this.onSiweNavigation()}catch{t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?Z.push("ConnectingSiwe"):Ce.open({view:"ConnectingSiwe"})}};rr.styles=F1;ts([F()],rr.prototype,"open",void 0);ts([F()],rr.prototype,"caipAddress",void 0);ts([F()],rr.prototype,"isSiweEnabled",void 0);rr=ts([S("w3m-modal")],rr);const Z1=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return rr}},Symbol.toStringTag,{value:"Module"})),H1=Ae`
  :host {
    display: block;
    width: max-content;
  }
`;var qn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let nr=class extends ce{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Me.state.caipNetwork,this.connected=we.state.isConnected,this.loading=Ce.state.loading,this.unsubscribe.push(Me.subscribeKey("caipNetwork",e=>this.network=e),we.subscribeKey("isConnected",e=>this.connected=e),Ce.subscribeKey("loading",e=>this.loading=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return _`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        imageSrc=${me(Pe.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||Ce.open({view:"Networks"})}};nr.styles=H1;qn([ke({type:Boolean})],nr.prototype,"disabled",void 0);qn([F()],nr.prototype,"network",void 0);qn([F()],nr.prototype,"connected",void 0);qn([F()],nr.prototype,"loading",void 0);nr=qn([S("w3m-network-button")],nr);const V1=Ae`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Nc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bo=class extends ce{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=Z.state.view,this.unsubscribe.push(Z.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const t=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return _`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return _`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return _`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return _`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return _`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return _`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return _`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return _`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return _`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return _`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return _`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return _`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return _`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return _`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return _`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return _`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return _`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return _`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return _`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return _`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`;default:return _`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:t}=Z.state;let r=-10,o=10;t.length<this.prevHistoryLength&&(r=10,o=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};bo.styles=V1;Nc([F()],bo.prototype,"view",void 0);bo=Nc([S("w3m-router")],bo);const G1=Ae`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var ki=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ft=class extends ce{constructor(){super(),this.usubscribe=[],this.address=we.state.address,this.profileImage=we.state.profileImage,this.profileName=we.state.profileName,this.balance=we.state.balance,this.balanceSymbol=we.state.balanceSymbol,this.network=Me.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(we.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):Ce.close()}),Me.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var t;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Pe.getNetworkImage(this.network);return _`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${me(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?ye.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ye.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${G.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${me(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((t=this.network)==null?void 0:t.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const e=Qe.getConnectedConnector(),t=_e.getEmailConnector(),{origin:r}=location;return!t||e!=="EMAIL"||r.includes(Qt.SECURE_SITE)?null:_`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){const e=Qe.getConnectedConnector(),t=_e.getEmailConnector();if(!t||e!=="EMAIL")return null;const r=t.provider.getEmail()??"";return _`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=we.state;return e?_`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=Me.state,t=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var n;return o===((n=this.network)==null?void 0:n.id)});return t||!r}onCopyAddress(){try{this.address&&(G.copyToClopboard(this.address),Be.showSuccess("Address copied"))}catch{Be.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&Z.push("Networks")}onTransactions(){ie.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),Z.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await pe.disconnect(),ie.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ce.close()}catch{ie.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Be.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=we.state;e&&G.openHref(e,"_blank")}onGoToUpgradeView(){ie.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Z.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){Z.push("UpdateEmailWallet",{email:e})}};Ft.styles=G1;ki([F()],Ft.prototype,"address",void 0);ki([F()],Ft.prototype,"profileImage",void 0);ki([F()],Ft.prototype,"profileName",void 0);ki([F()],Ft.prototype,"balance",void 0);ki([F()],Ft.prototype,"balanceSymbol",void 0);ki([F()],Ft.prototype,"network",void 0);ki([F()],Ft.prototype,"disconecting",void 0);Ft=ki([S("w3m-account-view")],Ft);var Oc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Us=class extends ce{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=G.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return _`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?_`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:_`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return G.isMobile()?_`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Z.push("ConnectingWalletConnect")}};Oc([F()],Us.prototype,"search",void 0);Us=Oc([S("w3m-all-wallets-view")],Us);const q1=Ae`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Pc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yo=class extends ce{constructor(){super(),this.unsubscribe=[],this.connectors=_e.state.connectors,this.unsubscribe.push(_e.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return _`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(G.isMobile())return null;const e=this.connectors.find(t=>t.type==="WALLET_CONNECT");return e?_`
      <wui-list-wallet
        imageSrc=${me(Pe.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=be.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(r=>_`
        <wui-list-wallet
          imageSrc=${me(Pe.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(o=>o.type==="WALLET_CONNECT"))return null;const{featured:t}=he.state;return t.length?this.filterOutDuplicateWallets(t).map(o=>_`
        <wui-list-wallet
          imageSrc=${me(Pe.getWalletImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onConnectWallet(o)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return Qe.getRecentWallets().map(t=>_`
        <wui-list-wallet
          imageSrc=${me(Pe.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:_`
        <wui-list-wallet
          imageSrc=${me(Pe.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const e=this.connectors.find(t=>t.type==="ANNOUNCED");return this.connectors.map(t=>t.type!=="INJECTED"||!pe.checkInstalled()?null:_`
        <wui-list-wallet
          imageSrc=${me(Pe.getConnectorImage(t))}
          .installed=${!!e}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){const e=_e.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(Qt.CONNECTOR_RDNS_MAP[t.id])?null:_`
        <wui-list-wallet
          imageSrc=${me(Pe.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){if(!this.connectors.find(a=>a.type==="WALLET_CONNECT"))return null;const t=he.state.count,r=he.state.featured.length,o=t+r,n=o<10?o:Math.floor(o/10)*10,s=n<o?`${n}+`:`${n}`;return _`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(m=>m.type==="WALLET_CONNECT"))return null;const{recommended:t}=he.state,{customWallets:r,featuredWalletIds:o}=be.state,{connectors:n}=_e.state,s=Qe.getRecentWallets(),a=n.filter(m=>m.type==="ANNOUNCED");if(o||r||!t.length)return null;const u=a.length+s.length,h=Math.max(0,2-u);return this.filterOutDuplicateWallets(t).slice(0,h).map(m=>_`
        <wui-list-wallet
          imageSrc=${me(Pe.getWalletImage(m))}
          name=${(m==null?void 0:m.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(m)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?G.isMobile()?Z.push("AllWallets"):Z.push("ConnectingWalletConnect"):Z.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:t}=_e.state,o=Qe.getRecentWallets().map(a=>a.id),n=t.map(a=>{var u;return(u=a.info)==null?void 0:u.rdns}).filter(Boolean);return e.filter(a=>!o.includes(a.id)&&!n.includes(a.rdns??void 0))}onAllWallets(){ie.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),Z.push("AllWallets")}onConnectWallet(e){Z.push("ConnectingWalletConnect",{wallet:e})}};yo.styles=q1;Pc([F()],yo.prototype,"connectors",void 0);yo=Pc([S("w3m-connect-view")],yo);const Y1=Ae`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var pr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};class nt extends ce{constructor(){var e,t,r,o;super(),this.wallet=(e=Z.state.data)==null?void 0:e.wallet,this.connector=(t=Z.state.data)==null?void 0:t.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Pe.getWalletImage(this.wallet)??Pe.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=pe.state.wcUri,this.error=pe.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(pe.subscribeKey("wcUri",n=>{var s;this.uri=n,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),pe.subscribeKey("wcError",n=>this.error=n),pe.subscribeKey("buffering",n=>this.buffering=n))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),_`
      <wui-flex
        data-error=${me(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${me(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?_`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;this.buffering||(pe.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(t=this.onConnect)==null||t.call(this))}loaderTemplate(){const e=it.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return _`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(G.copyToClopboard(this.uri),Be.showSuccess("Link copied"))}catch{Be.showError("Failed to copy")}}}nt.styles=Y1;pr([F()],nt.prototype,"uri",void 0);pr([F()],nt.prototype,"error",void 0);pr([F()],nt.prototype,"ready",void 0);pr([F()],nt.prototype,"showRetry",void 0);pr([F()],nt.prototype,"buffering",void 0);pr([ke({type:Boolean})],nt.prototype,"isMobile",void 0);pr([ke()],nt.prototype,"onRetry",void 0);var K1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const J1={INJECTED:"browser",ANNOUNCED:"browser"};let hl=class extends nt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:J1[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&Qe.setConnectedWalletImageUrl(this.connector.imageUrl),await pe.connectExternal(this.connector),We.state.isSiweEnabled?Z.push("ConnectingSiwe"):Ce.close(),ie.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){ie.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};hl=K1([S("w3m-connecting-external-view")],hl);var Mc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let js=class extends ce{constructor(){var e;super(...arguments),this.dappName=(e=be.state.metadata)==null?void 0:e.name,this.isSigning=!1}render(){return _`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,ie.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{We.setStatus("loading");const e=await We.signIn();return We.setStatus("success"),ie.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch{return Be.showError("Signature declined"),We.setStatus("error"),ie.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=we.state;e?(await pe.disconnect(),Ce.close()):Z.push("Connect"),ie.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};Mc([F()],js.prototype,"isSigning",void 0);js=Mc([S("w3m-connecting-siwe-view")],js);var Ea=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xo=class extends ce{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=Z.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Qt.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),_`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):_`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=pe.state;if(e||G.isPairingExpired(t)){if(pe.connectWalletConnect(),this.wallet){const r=Pe.getWalletImage(this.wallet);r&&Qe.setConnectedWalletImageUrl(r)}else{const o=_e.state.connectors.find(s=>s.type==="WALLET_CONNECT"),n=Pe.getConnectorImage(o);n&&Qe.setConnectedWalletImageUrl(n)}await pe.state.wcPromise,this.finalizeConnection(),We.state.isSiweEnabled?Z.push("ConnectingSiwe"):Ce.close()}}catch(t){ie.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),pe.setWcError(!0),G.isAllowedRetry(this.lastRetry)&&(Be.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=pe.state;e&&Qe.setWalletConnectDeepLink(e),t&&Qe.setWeb3ModalRecent(t),ie.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:o,rdns:n}=this.wallet,s=o==null?void 0:o.map(({injected_id:E})=>E).filter(Boolean),a=n?[n]:s??[],u=a.length,h=e,p=r,m=pe.checkInstalled(a),x=u&&m,y=t&&!G.isMobile();x&&this.platforms.push("browser"),h&&this.platforms.push(G.isMobile()?"mobile":"qrcode"),p&&this.platforms.push("web"),y&&this.platforms.push("desktop"),!x&&u&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return _`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return _`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return _`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return _`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return _`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return _`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?_`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Ea([F()],xo.prototype,"platform",void 0);Ea([F()],xo.prototype,"platforms",void 0);xo=Ea([S("w3m-connecting-wc-view")],xo);var Q1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fl=class extends ce{constructor(){var e;super(...arguments),this.wallet=(e=Z.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return _`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?_`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?_`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?_`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?_`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&G.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&G.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&G.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&G.openHref(this.wallet.homepage,"_blank")}};fl=Q1([S("w3m-downloads-view")],fl);var X1=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const ef="https://walletconnect.com/explorer";let pl=class extends ce{render(){return _`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{G.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=he.state,{customWallets:r}=be.state;return[...t,...r??[],...e].slice(0,4).map(n=>_`
        <wui-list-wallet
          name=${n.name??"Unknown"}
          tagVariant="main"
          imageSrc=${me(Pe.getWalletImage(n))}
          @click=${()=>{G.openHref(n.homepage??ef,"_blank")}}
        ></wui-list-wallet>
      `)}};pl=X1([S("w3m-get-wallet-view")],pl);const tf=Ae`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var $a=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let $n=class extends ce{constructor(){var e;super(),this.network=(e=Z.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return _`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${me(Pe.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:_`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await Me.switchActiveNetwork(this.network),We.state.isSiweEnabled||Ml.navigateAfterNetworkSwitch())}catch{this.error=!0}}};$n.styles=tf;$a([F()],$n.prototype,"showRetry",void 0);$a([F()],$n.prototype,"error",void 0);$n=$a([S("w3m-network-switch-view")],$n);const rf=Ae`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Bc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _o=class extends ce{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Me.state.caipNetwork,this.unsubscribe.push(Me.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return _`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){ie.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),Z.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=Me.state,o=e,n=t,s={};return n&&o&&(o.forEach((a,u)=>{s[a]=u}),n.sort((a,u)=>{const h=s[a.id],p=s[u.id];return h!==void 0&&p!==void 0?h-p:h!==void 0?-1:p!==void 0?1:0})),n==null?void 0:n.map(a=>{var u;return _`
        <wui-card-select
          .selected=${((u=this.caipNetwork)==null?void 0:u.id)===a.id}
          imageSrc=${me(Pe.getNetworkImage(a))}
          type="network"
          name=${a.name??a.id}
          @click=${()=>this.onSwitchNetwork(a)}
          .disabled=${!r&&!(o!=null&&o.includes(a.id))}
          data-testid=${`w3m-network-switch-${a.name??a.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:t}=we.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:n}=Me.state,{data:s}=Z.state;t&&(n==null?void 0:n.id)!==e.id?r!=null&&r.includes(e.id)?(await Me.switchActiveNetwork(e),Ml.navigateAfterNetworkSwitch()):o&&Z.push("SwitchNetwork",{...s,network:e}):t||(Me.setCaipNetwork(e),Z.push("Connect"))}};_o.styles=rf;Bc([F()],_o.prototype,"caipNetwork",void 0);_o=Bc([S("w3m-networks-view")],_o);const nf=Ae`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var gr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const to="last-transaction",of=7;let ti=class extends ce{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=we.state.address,this.transactions=bt.state.transactions,this.transactionsByYear=bt.state.transactionsByYear,this.loading=bt.state.loading,this.empty=bt.state.empty,this.next=bt.state.next,this.unsubscribe.push(we.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,bt.resetTransactions(),bt.fetchTransactions(e.address))}),bt.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.transactions.length===0&&bt.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return _`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{const o=r===e.length-1,n=parseInt(t,10),s=Di.getTransactionGroupTitle(n),a=this.transactionsByYear[n];return a?_`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,o)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,t){const{date:r,descriptions:o,direction:n,isAllNFT:s,images:a,status:u,transfers:h,type:p}=this.getTransactionListItemProps(e),m=(h==null?void 0:h.length)>1;return(h==null?void 0:h.length)===2&&!s?_`
        <wui-transaction-list-item
          date=${r}
          .direction=${n}
          id=${t&&this.next?to:""}
          status=${u}
          type=${p}
          .images=${a}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:m?h.map((y,E)=>{const A=Di.getTransferDescription(y),B=t&&E===h.length-1;return _` <wui-transaction-list-item
          date=${r}
          direction=${y.direction}
          id=${B&&this.next?to:""}
          status=${u}
          type=${p}
          .onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[E]]}
          .descriptions=${[A]}
        ></wui-transaction-list-item>`}):_`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${t&&this.next?to:""}
        status=${u}
        type=${p}
        .images=${a}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,o)=>{const n=t&&o===e.length-1;return _`${this.templateRenderTransaction(r,n)}`})}templateEmpty(){return _`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(of).fill(_` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){const{projectId:e}=be.state;this.paginationObserver=new IntersectionObserver(([t])=>{t!=null&&t.isIntersecting&&!this.loading&&(bt.fetchTransactions(this.address),ie.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var t,r,o;(t=this.paginationObserver)==null||t.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${to}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var u,h,p,m,x;const t=Ac.getRelativeDateFromNow((u=e==null?void 0:e.metadata)==null?void 0:u.minedAt),r=Di.getTransactionDescriptions(e),o=e==null?void 0:e.transfers,n=(h=e==null?void 0:e.transfers)==null?void 0:h[0],s=!!n&&((p=e==null?void 0:e.transfers)==null?void 0:p.every(y=>!!y.nft_info)),a=Di.getTransactionImages(o);return{date:t,direction:n==null?void 0:n.direction,descriptions:r,isAllNFT:s,images:a,status:(m=e.metadata)==null?void 0:m.status,transfers:o,type:(x=e.metadata)==null?void 0:x.operationType}}};ti.styles=nf;gr([F()],ti.prototype,"address",void 0);gr([F()],ti.prototype,"transactions",void 0);gr([F()],ti.prototype,"transactionsByYear",void 0);gr([F()],ti.prototype,"loading",void 0);gr([F()],ti.prototype,"empty",void 0);gr([F()],ti.prototype,"next",void 0);ti=gr([S("w3m-transactions-view")],ti);var sf=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const af=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let gl=class extends ce{render(){return _`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${af}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{G.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};gl=sf([S("w3m-what-is-a-network-view")],gl);var lf=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const cf=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let wl=class extends ce{render(){return _`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${cf}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){ie.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),Z.push("GetWallet")}};wl=lf([S("w3m-what-is-a-wallet-view")],wl);const uf=Ae`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,Er={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"};var ve;(function(i){i.assertEqual=o=>o;function e(o){}i.assertIs=e;function t(o){throw new Error}i.assertNever=t,i.arrayToEnum=o=>{const n={};for(const s of o)n[s]=s;return n},i.getValidEnumValues=o=>{const n=i.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),s={};for(const a of n)s[a]=o[a];return i.objectValues(s)},i.objectValues=o=>i.objectKeys(o).map(function(n){return o[n]}),i.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const n=[];for(const s in o)Object.prototype.hasOwnProperty.call(o,s)&&n.push(s);return n},i.find=(o,n)=>{for(const s of o)if(n(s))return s},i.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function r(o,n=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(n)}i.joinValues=r,i.jsonStringifyReplacer=(o,n)=>typeof n=="bigint"?n.toString():n})(ve||(ve={}));var zs;(function(i){i.mergeShapes=(e,t)=>({...e,...t})})(zs||(zs={}));const D=ve.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),fi=i=>{switch(typeof i){case"undefined":return D.undefined;case"string":return D.string;case"number":return isNaN(i)?D.nan:D.number;case"boolean":return D.boolean;case"function":return D.function;case"bigint":return D.bigint;case"symbol":return D.symbol;case"object":return Array.isArray(i)?D.array:i===null?D.null:i.then&&typeof i.then=="function"&&i.catch&&typeof i.catch=="function"?D.promise:typeof Map<"u"&&i instanceof Map?D.map:typeof Set<"u"&&i instanceof Set?D.set:typeof Date<"u"&&i instanceof Date?D.date:D.object;default:return D.unknown}},T=ve.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),df=i=>JSON.stringify(i,null,2).replace(/"([^"]+)":/g,"$1:");class xt extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(n){return n.message},r={_errors:[]},o=n=>{for(const s of n.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)r._errors.push(t(s));else{let a=r,u=0;for(;u<s.path.length;){const h=s.path[u];u===s.path.length-1?(a[h]=a[h]||{_errors:[]},a[h]._errors.push(t(s))):a[h]=a[h]||{_errors:[]},a=a[h],u++}}};return o(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,ve.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},r=[];for(const o of this.issues)o.path.length>0?(t[o.path[0]]=t[o.path[0]]||[],t[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}xt.create=i=>new xt(i);const An=(i,e)=>{let t;switch(i.code){case T.invalid_type:i.received===D.undefined?t="Required":t=`Expected ${i.expected}, received ${i.received}`;break;case T.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(i.expected,ve.jsonStringifyReplacer)}`;break;case T.unrecognized_keys:t=`Unrecognized key(s) in object: ${ve.joinValues(i.keys,", ")}`;break;case T.invalid_union:t="Invalid input";break;case T.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${ve.joinValues(i.options)}`;break;case T.invalid_enum_value:t=`Invalid enum value. Expected ${ve.joinValues(i.options)}, received '${i.received}'`;break;case T.invalid_arguments:t="Invalid function arguments";break;case T.invalid_return_type:t="Invalid function return type";break;case T.invalid_date:t="Invalid date";break;case T.invalid_string:typeof i.validation=="object"?"includes"in i.validation?(t=`Invalid input: must include "${i.validation.includes}"`,typeof i.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${i.validation.position}`)):"startsWith"in i.validation?t=`Invalid input: must start with "${i.validation.startsWith}"`:"endsWith"in i.validation?t=`Invalid input: must end with "${i.validation.endsWith}"`:ve.assertNever(i.validation):i.validation!=="regex"?t=`Invalid ${i.validation}`:t="Invalid";break;case T.too_small:i.type==="array"?t=`Array must contain ${i.exact?"exactly":i.inclusive?"at least":"more than"} ${i.minimum} element(s)`:i.type==="string"?t=`String must contain ${i.exact?"exactly":i.inclusive?"at least":"over"} ${i.minimum} character(s)`:i.type==="number"?t=`Number must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${i.minimum}`:i.type==="date"?t=`Date must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(i.minimum))}`:t="Invalid input";break;case T.too_big:i.type==="array"?t=`Array must contain ${i.exact?"exactly":i.inclusive?"at most":"less than"} ${i.maximum} element(s)`:i.type==="string"?t=`String must contain ${i.exact?"exactly":i.inclusive?"at most":"under"} ${i.maximum} character(s)`:i.type==="number"?t=`Number must be ${i.exact?"exactly":i.inclusive?"less than or equal to":"less than"} ${i.maximum}`:i.type==="bigint"?t=`BigInt must be ${i.exact?"exactly":i.inclusive?"less than or equal to":"less than"} ${i.maximum}`:i.type==="date"?t=`Date must be ${i.exact?"exactly":i.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(i.maximum))}`:t="Invalid input";break;case T.custom:t="Invalid input";break;case T.invalid_intersection_types:t="Intersection results could not be merged";break;case T.not_multiple_of:t=`Number must be a multiple of ${i.multipleOf}`;break;case T.not_finite:t="Number must be finite";break;default:t=e.defaultError,ve.assertNever(i)}return{message:t}};let Lc=An;function hf(i){Lc=i}function Co(){return Lc}const Eo=i=>{const{data:e,path:t,errorMaps:r,issueData:o}=i,n=[...t,...o.path||[]],s={...o,path:n};let a="";const u=r.filter(h=>!!h).slice().reverse();for(const h of u)a=h(s,{data:e,defaultError:a}).message;return{...o,path:n,message:o.message||a}},ff=[];function U(i,e){const t=Eo({issueData:e,data:i.data,path:i.path,errorMaps:[i.common.contextualErrorMap,i.schemaErrorMap,Co(),An].filter(r=>!!r)});i.common.issues.push(t)}class Ye{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const o of t){if(o.status==="aborted")return re;o.status==="dirty"&&e.dirty(),r.push(o.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const o of t)r.push({key:await o.key,value:await o.value});return Ye.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const o of t){const{key:n,value:s}=o;if(n.status==="aborted"||s.status==="aborted")return re;n.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),n.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(r[n.value]=s.value)}return{status:e.value,value:r}}}const re=Object.freeze({status:"aborted"}),Dc=i=>({status:"dirty",value:i}),et=i=>({status:"valid",value:i}),Fs=i=>i.status==="aborted",Zs=i=>i.status==="dirty",Sn=i=>i.status==="valid",$o=i=>typeof Promise<"u"&&i instanceof Promise;var K;(function(i){i.errToObj=e=>typeof e=="string"?{message:e}:e||{},i.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(K||(K={}));class Zt{constructor(e,t,r,o){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const ml=(i,e)=>{if(Sn(e))return{success:!0,data:e.value};if(!i.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new xt(i.common.issues);return this._error=t,this._error}}};function se(i){if(!i)return{};const{errorMap:e,invalid_type_error:t,required_error:r,description:o}=i;if(e&&(t||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:t??a.defaultError},description:o}}class ue{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return fi(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:fi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Ye,ctx:{common:e.parent.common,data:e.data,parsedType:fi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if($o(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const o={common:{issues:[],async:(r=t==null?void 0:t.async)!==null&&r!==void 0?r:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:fi(e)},n=this._parseSync({data:e,path:o.path,parent:o});return ml(o,n)}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:fi(e)},o=this._parse({data:e,path:r.path,parent:r}),n=await($o(o)?o:Promise.resolve(o));return ml(r,n)}refine(e,t){const r=o=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(o):t;return this._refinement((o,n)=>{const s=e(o),a=()=>n.addIssue({code:T.custom,...r(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(u=>u?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,t){return this._refinement((r,o)=>e(r)?!0:(o.addIssue(typeof t=="function"?t(r,o):t),!1))}_refinement(e){return new It({schema:this,typeName:J.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Xt.create(this,this._def)}nullable(){return ar.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return _t.create(this,this._def)}promise(){return Zr.create(this,this._def)}or(e){return kn.create([this,e],this._def)}and(e){return Nn.create(this,e,this._def)}transform(e){return new It({...se(this._def),schema:this,typeName:J.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Ln({...se(this._def),innerType:this,defaultValue:t,typeName:J.ZodDefault})}brand(){return new Uc({typeName:J.ZodBranded,type:this,...se(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new To({...se(this._def),innerType:this,catchValue:t,typeName:J.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Yn.create(this,e)}readonly(){return ko.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const pf=/^c[^\s-]{8,}$/i,gf=/^[a-z][a-z0-9]*$/,wf=/^[0-9A-HJKMNP-TV-Z]{26}$/,mf=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,vf=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,bf="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Ts;const yf=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,xf=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,_f=i=>i.precision?i.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}Z$`):i.precision===0?i.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):i.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Cf(i,e){return!!((e==="v4"||!e)&&yf.test(i)||(e==="v6"||!e)&&xf.test(i))}class yt extends ue{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==D.string){const n=this._getOrReturnCtx(e);return U(n,{code:T.invalid_type,expected:D.string,received:n.parsedType}),re}const r=new Ye;let o;for(const n of this._def.checks)if(n.kind==="min")e.data.length<n.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:T.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),r.dirty());else if(n.kind==="max")e.data.length>n.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:T.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),r.dirty());else if(n.kind==="length"){const s=e.data.length>n.value,a=e.data.length<n.value;(s||a)&&(o=this._getOrReturnCtx(e,o),s?U(o,{code:T.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}):a&&U(o,{code:T.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}),r.dirty())}else if(n.kind==="email")vf.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"email",code:T.invalid_string,message:n.message}),r.dirty());else if(n.kind==="emoji")Ts||(Ts=new RegExp(bf,"u")),Ts.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"emoji",code:T.invalid_string,message:n.message}),r.dirty());else if(n.kind==="uuid")mf.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"uuid",code:T.invalid_string,message:n.message}),r.dirty());else if(n.kind==="cuid")pf.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"cuid",code:T.invalid_string,message:n.message}),r.dirty());else if(n.kind==="cuid2")gf.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"cuid2",code:T.invalid_string,message:n.message}),r.dirty());else if(n.kind==="ulid")wf.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"ulid",code:T.invalid_string,message:n.message}),r.dirty());else if(n.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),U(o,{validation:"url",code:T.invalid_string,message:n.message}),r.dirty()}else n.kind==="regex"?(n.regex.lastIndex=0,n.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"regex",code:T.invalid_string,message:n.message}),r.dirty())):n.kind==="trim"?e.data=e.data.trim():n.kind==="includes"?e.data.includes(n.value,n.position)||(o=this._getOrReturnCtx(e,o),U(o,{code:T.invalid_string,validation:{includes:n.value,position:n.position},message:n.message}),r.dirty()):n.kind==="toLowerCase"?e.data=e.data.toLowerCase():n.kind==="toUpperCase"?e.data=e.data.toUpperCase():n.kind==="startsWith"?e.data.startsWith(n.value)||(o=this._getOrReturnCtx(e,o),U(o,{code:T.invalid_string,validation:{startsWith:n.value},message:n.message}),r.dirty()):n.kind==="endsWith"?e.data.endsWith(n.value)||(o=this._getOrReturnCtx(e,o),U(o,{code:T.invalid_string,validation:{endsWith:n.value},message:n.message}),r.dirty()):n.kind==="datetime"?_f(n).test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{code:T.invalid_string,validation:"datetime",message:n.message}),r.dirty()):n.kind==="ip"?Cf(e.data,n.version)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"ip",code:T.invalid_string,message:n.message}),r.dirty()):ve.assertNever(n);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(o=>e.test(o),{validation:t,code:T.invalid_string,...K.errToObj(r)})}_addCheck(e){return new yt({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...K.errToObj(e)})}url(e){return this._addCheck({kind:"url",...K.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...K.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...K.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...K.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...K.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...K.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...K.errToObj(e)})}datetime(e){var t;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,...K.errToObj(e==null?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...K.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...K.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...K.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...K.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...K.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...K.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...K.errToObj(t)})}nonempty(e){return this.min(1,K.errToObj(e))}trim(){return new yt({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new yt({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new yt({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}yt.create=i=>{var e;return new yt({checks:[],typeName:J.ZodString,coerce:(e=i==null?void 0:i.coerce)!==null&&e!==void 0?e:!1,...se(i)})};function Ef(i,e){const t=(i.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=t>r?t:r,n=parseInt(i.toFixed(o).replace(".","")),s=parseInt(e.toFixed(o).replace(".",""));return n%s/Math.pow(10,o)}class Ci extends ue{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==D.number){const n=this._getOrReturnCtx(e);return U(n,{code:T.invalid_type,expected:D.number,received:n.parsedType}),re}let r;const o=new Ye;for(const n of this._def.checks)n.kind==="int"?ve.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),U(r,{code:T.invalid_type,expected:"integer",received:"float",message:n.message}),o.dirty()):n.kind==="min"?(n.inclusive?e.data<n.value:e.data<=n.value)&&(r=this._getOrReturnCtx(e,r),U(r,{code:T.too_small,minimum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),o.dirty()):n.kind==="max"?(n.inclusive?e.data>n.value:e.data>=n.value)&&(r=this._getOrReturnCtx(e,r),U(r,{code:T.too_big,maximum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),o.dirty()):n.kind==="multipleOf"?Ef(e.data,n.value)!==0&&(r=this._getOrReturnCtx(e,r),U(r,{code:T.not_multiple_of,multipleOf:n.value,message:n.message}),o.dirty()):n.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),U(r,{code:T.not_finite,message:n.message}),o.dirty()):ve.assertNever(n);return{status:o.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,K.toString(t))}gt(e,t){return this.setLimit("min",e,!1,K.toString(t))}lte(e,t){return this.setLimit("max",e,!0,K.toString(t))}lt(e,t){return this.setLimit("max",e,!1,K.toString(t))}setLimit(e,t,r,o){return new Ci({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:K.toString(o)}]})}_addCheck(e){return new Ci({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:K.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:K.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:K.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:K.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:K.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:K.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:K.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:K.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:K.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ve.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(t===null||r.value>t)&&(t=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Ci.create=i=>new Ci({checks:[],typeName:J.ZodNumber,coerce:(i==null?void 0:i.coerce)||!1,...se(i)});class Ei extends ue{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==D.bigint){const n=this._getOrReturnCtx(e);return U(n,{code:T.invalid_type,expected:D.bigint,received:n.parsedType}),re}let r;const o=new Ye;for(const n of this._def.checks)n.kind==="min"?(n.inclusive?e.data<n.value:e.data<=n.value)&&(r=this._getOrReturnCtx(e,r),U(r,{code:T.too_small,type:"bigint",minimum:n.value,inclusive:n.inclusive,message:n.message}),o.dirty()):n.kind==="max"?(n.inclusive?e.data>n.value:e.data>=n.value)&&(r=this._getOrReturnCtx(e,r),U(r,{code:T.too_big,type:"bigint",maximum:n.value,inclusive:n.inclusive,message:n.message}),o.dirty()):n.kind==="multipleOf"?e.data%n.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),U(r,{code:T.not_multiple_of,multipleOf:n.value,message:n.message}),o.dirty()):ve.assertNever(n);return{status:o.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,K.toString(t))}gt(e,t){return this.setLimit("min",e,!1,K.toString(t))}lte(e,t){return this.setLimit("max",e,!0,K.toString(t))}lt(e,t){return this.setLimit("max",e,!1,K.toString(t))}setLimit(e,t,r,o){return new Ei({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:K.toString(o)}]})}_addCheck(e){return new Ei({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:K.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:K.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:K.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:K.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:K.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Ei.create=i=>{var e;return new Ei({checks:[],typeName:J.ZodBigInt,coerce:(e=i==null?void 0:i.coerce)!==null&&e!==void 0?e:!1,...se(i)})};class In extends ue{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==D.boolean){const r=this._getOrReturnCtx(e);return U(r,{code:T.invalid_type,expected:D.boolean,received:r.parsedType}),re}return et(e.data)}}In.create=i=>new In({typeName:J.ZodBoolean,coerce:(i==null?void 0:i.coerce)||!1,...se(i)});class or extends ue{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==D.date){const n=this._getOrReturnCtx(e);return U(n,{code:T.invalid_type,expected:D.date,received:n.parsedType}),re}if(isNaN(e.data.getTime())){const n=this._getOrReturnCtx(e);return U(n,{code:T.invalid_date}),re}const r=new Ye;let o;for(const n of this._def.checks)n.kind==="min"?e.data.getTime()<n.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:T.too_small,message:n.message,inclusive:!0,exact:!1,minimum:n.value,type:"date"}),r.dirty()):n.kind==="max"?e.data.getTime()>n.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:T.too_big,message:n.message,inclusive:!0,exact:!1,maximum:n.value,type:"date"}),r.dirty()):ve.assertNever(n);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new or({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:K.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:K.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}or.create=i=>new or({checks:[],coerce:(i==null?void 0:i.coerce)||!1,typeName:J.ZodDate,...se(i)});class Ao extends ue{_parse(e){if(this._getType(e)!==D.symbol){const r=this._getOrReturnCtx(e);return U(r,{code:T.invalid_type,expected:D.symbol,received:r.parsedType}),re}return et(e.data)}}Ao.create=i=>new Ao({typeName:J.ZodSymbol,...se(i)});class Tn extends ue{_parse(e){if(this._getType(e)!==D.undefined){const r=this._getOrReturnCtx(e);return U(r,{code:T.invalid_type,expected:D.undefined,received:r.parsedType}),re}return et(e.data)}}Tn.create=i=>new Tn({typeName:J.ZodUndefined,...se(i)});class Rn extends ue{_parse(e){if(this._getType(e)!==D.null){const r=this._getOrReturnCtx(e);return U(r,{code:T.invalid_type,expected:D.null,received:r.parsedType}),re}return et(e.data)}}Rn.create=i=>new Rn({typeName:J.ZodNull,...se(i)});class Fr extends ue{constructor(){super(...arguments),this._any=!0}_parse(e){return et(e.data)}}Fr.create=i=>new Fr({typeName:J.ZodAny,...se(i)});class zi extends ue{constructor(){super(...arguments),this._unknown=!0}_parse(e){return et(e.data)}}zi.create=i=>new zi({typeName:J.ZodUnknown,...se(i)});class ii extends ue{_parse(e){const t=this._getOrReturnCtx(e);return U(t,{code:T.invalid_type,expected:D.never,received:t.parsedType}),re}}ii.create=i=>new ii({typeName:J.ZodNever,...se(i)});class So extends ue{_parse(e){if(this._getType(e)!==D.undefined){const r=this._getOrReturnCtx(e);return U(r,{code:T.invalid_type,expected:D.void,received:r.parsedType}),re}return et(e.data)}}So.create=i=>new So({typeName:J.ZodVoid,...se(i)});class _t extends ue{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),o=this._def;if(t.parsedType!==D.array)return U(t,{code:T.invalid_type,expected:D.array,received:t.parsedType}),re;if(o.exactLength!==null){const s=t.data.length>o.exactLength.value,a=t.data.length<o.exactLength.value;(s||a)&&(U(t,{code:s?T.too_big:T.too_small,minimum:a?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&t.data.length<o.minLength.value&&(U(t,{code:T.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&t.data.length>o.maxLength.value&&(U(t,{code:T.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((s,a)=>o.type._parseAsync(new Zt(t,s,t.path,a)))).then(s=>Ye.mergeArray(r,s));const n=[...t.data].map((s,a)=>o.type._parseSync(new Zt(t,s,t.path,a)));return Ye.mergeArray(r,n)}get element(){return this._def.type}min(e,t){return new _t({...this._def,minLength:{value:e,message:K.toString(t)}})}max(e,t){return new _t({...this._def,maxLength:{value:e,message:K.toString(t)}})}length(e,t){return new _t({...this._def,exactLength:{value:e,message:K.toString(t)}})}nonempty(e){return this.min(1,e)}}_t.create=(i,e)=>new _t({type:i,minLength:null,maxLength:null,exactLength:null,typeName:J.ZodArray,...se(e)});function xr(i){if(i instanceof Te){const e={};for(const t in i.shape){const r=i.shape[t];e[t]=Xt.create(xr(r))}return new Te({...i._def,shape:()=>e})}else return i instanceof _t?new _t({...i._def,type:xr(i.element)}):i instanceof Xt?Xt.create(xr(i.unwrap())):i instanceof ar?ar.create(xr(i.unwrap())):i instanceof Ht?Ht.create(i.items.map(e=>xr(e))):i}class Te extends ue{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=ve.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==D.object){const h=this._getOrReturnCtx(e);return U(h,{code:T.invalid_type,expected:D.object,received:h.parsedType}),re}const{status:r,ctx:o}=this._processInputParams(e),{shape:n,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof ii&&this._def.unknownKeys==="strip"))for(const h in o.data)s.includes(h)||a.push(h);const u=[];for(const h of s){const p=n[h],m=o.data[h];u.push({key:{status:"valid",value:h},value:p._parse(new Zt(o,m,o.path,h)),alwaysSet:h in o.data})}if(this._def.catchall instanceof ii){const h=this._def.unknownKeys;if(h==="passthrough")for(const p of a)u.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(h==="strict")a.length>0&&(U(o,{code:T.unrecognized_keys,keys:a}),r.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const p of a){const m=o.data[p];u.push({key:{status:"valid",value:p},value:h._parse(new Zt(o,m,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const h=[];for(const p of u){const m=await p.key;h.push({key:m,value:await p.value,alwaysSet:p.alwaysSet})}return h}).then(h=>Ye.mergeObjectSync(r,h)):Ye.mergeObjectSync(r,u)}get shape(){return this._def.shape()}strict(e){return K.errToObj,new Te({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,r)=>{var o,n,s,a;const u=(s=(n=(o=this._def).errorMap)===null||n===void 0?void 0:n.call(o,t,r).message)!==null&&s!==void 0?s:r.defaultError;return t.code==="unrecognized_keys"?{message:(a=K.errToObj(e).message)!==null&&a!==void 0?a:u}:{message:u}}}:{}})}strip(){return new Te({...this._def,unknownKeys:"strip"})}passthrough(){return new Te({...this._def,unknownKeys:"passthrough"})}extend(e){return new Te({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Te({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:J.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new Te({...this._def,catchall:e})}pick(e){const t={};return ve.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new Te({...this._def,shape:()=>t})}omit(e){const t={};return ve.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new Te({...this._def,shape:()=>t})}deepPartial(){return xr(this)}partial(e){const t={};return ve.objectKeys(this.shape).forEach(r=>{const o=this.shape[r];e&&!e[r]?t[r]=o:t[r]=o.optional()}),new Te({...this._def,shape:()=>t})}required(e){const t={};return ve.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let n=this.shape[r];for(;n instanceof Xt;)n=n._def.innerType;t[r]=n}}),new Te({...this._def,shape:()=>t})}keyof(){return Wc(ve.objectKeys(this.shape))}}Te.create=(i,e)=>new Te({shape:()=>i,unknownKeys:"strip",catchall:ii.create(),typeName:J.ZodObject,...se(e)});Te.strictCreate=(i,e)=>new Te({shape:()=>i,unknownKeys:"strict",catchall:ii.create(),typeName:J.ZodObject,...se(e)});Te.lazycreate=(i,e)=>new Te({shape:i,unknownKeys:"strip",catchall:ii.create(),typeName:J.ZodObject,...se(e)});class kn extends ue{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;function o(n){for(const a of n)if(a.result.status==="valid")return a.result;for(const a of n)if(a.result.status==="dirty")return t.common.issues.push(...a.ctx.common.issues),a.result;const s=n.map(a=>new xt(a.ctx.common.issues));return U(t,{code:T.invalid_union,unionErrors:s}),re}if(t.common.async)return Promise.all(r.map(async n=>{const s={...t,common:{...t.common,issues:[]},parent:null};return{result:await n._parseAsync({data:t.data,path:t.path,parent:s}),ctx:s}})).then(o);{let n;const s=[];for(const u of r){const h={...t,common:{...t.common,issues:[]},parent:null},p=u._parseSync({data:t.data,path:t.path,parent:h});if(p.status==="valid")return p;p.status==="dirty"&&!n&&(n={result:p,ctx:h}),h.common.issues.length&&s.push(h.common.issues)}if(n)return t.common.issues.push(...n.ctx.common.issues),n.result;const a=s.map(u=>new xt(u));return U(t,{code:T.invalid_union,unionErrors:a}),re}}get options(){return this._def.options}}kn.create=(i,e)=>new kn({options:i,typeName:J.ZodUnion,...se(e)});const oo=i=>i instanceof Pn?oo(i.schema):i instanceof It?oo(i.innerType()):i instanceof Mn?[i.value]:i instanceof $i?i.options:i instanceof Bn?Object.keys(i.enum):i instanceof Ln?oo(i._def.innerType):i instanceof Tn?[void 0]:i instanceof Rn?[null]:null;class is extends ue{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==D.object)return U(t,{code:T.invalid_type,expected:D.object,received:t.parsedType}),re;const r=this.discriminator,o=t.data[r],n=this.optionsMap.get(o);return n?t.common.async?n._parseAsync({data:t.data,path:t.path,parent:t}):n._parseSync({data:t.data,path:t.path,parent:t}):(U(t,{code:T.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),re)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const o=new Map;for(const n of t){const s=oo(n.shape[e]);if(!s)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of s){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,n)}}return new is({typeName:J.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:o,...se(r)})}}function Hs(i,e){const t=fi(i),r=fi(e);if(i===e)return{valid:!0,data:i};if(t===D.object&&r===D.object){const o=ve.objectKeys(e),n=ve.objectKeys(i).filter(a=>o.indexOf(a)!==-1),s={...i,...e};for(const a of n){const u=Hs(i[a],e[a]);if(!u.valid)return{valid:!1};s[a]=u.data}return{valid:!0,data:s}}else if(t===D.array&&r===D.array){if(i.length!==e.length)return{valid:!1};const o=[];for(let n=0;n<i.length;n++){const s=i[n],a=e[n],u=Hs(s,a);if(!u.valid)return{valid:!1};o.push(u.data)}return{valid:!0,data:o}}else return t===D.date&&r===D.date&&+i==+e?{valid:!0,data:i}:{valid:!1}}class Nn extends ue{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),o=(n,s)=>{if(Fs(n)||Fs(s))return re;const a=Hs(n.value,s.value);return a.valid?((Zs(n)||Zs(s))&&t.dirty(),{status:t.value,value:a.data}):(U(r,{code:T.invalid_intersection_types}),re)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([n,s])=>o(n,s)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Nn.create=(i,e,t)=>new Nn({left:i,right:e,typeName:J.ZodIntersection,...se(t)});class Ht extends ue{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==D.array)return U(r,{code:T.invalid_type,expected:D.array,received:r.parsedType}),re;if(r.data.length<this._def.items.length)return U(r,{code:T.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),re;!this._def.rest&&r.data.length>this._def.items.length&&(U(r,{code:T.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const n=[...r.data].map((s,a)=>{const u=this._def.items[a]||this._def.rest;return u?u._parse(new Zt(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(n).then(s=>Ye.mergeArray(t,s)):Ye.mergeArray(t,n)}get items(){return this._def.items}rest(e){return new Ht({...this._def,rest:e})}}Ht.create=(i,e)=>{if(!Array.isArray(i))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Ht({items:i,typeName:J.ZodTuple,rest:null,...se(e)})};class On extends ue{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==D.object)return U(r,{code:T.invalid_type,expected:D.object,received:r.parsedType}),re;const o=[],n=this._def.keyType,s=this._def.valueType;for(const a in r.data)o.push({key:n._parse(new Zt(r,a,r.path,a)),value:s._parse(new Zt(r,r.data[a],r.path,a))});return r.common.async?Ye.mergeObjectAsync(t,o):Ye.mergeObjectSync(t,o)}get element(){return this._def.valueType}static create(e,t,r){return t instanceof ue?new On({keyType:e,valueType:t,typeName:J.ZodRecord,...se(r)}):new On({keyType:yt.create(),valueType:e,typeName:J.ZodRecord,...se(t)})}}class Io extends ue{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==D.map)return U(r,{code:T.invalid_type,expected:D.map,received:r.parsedType}),re;const o=this._def.keyType,n=this._def.valueType,s=[...r.data.entries()].map(([a,u],h)=>({key:o._parse(new Zt(r,a,r.path,[h,"key"])),value:n._parse(new Zt(r,u,r.path,[h,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const u of s){const h=await u.key,p=await u.value;if(h.status==="aborted"||p.status==="aborted")return re;(h.status==="dirty"||p.status==="dirty")&&t.dirty(),a.set(h.value,p.value)}return{status:t.value,value:a}})}else{const a=new Map;for(const u of s){const h=u.key,p=u.value;if(h.status==="aborted"||p.status==="aborted")return re;(h.status==="dirty"||p.status==="dirty")&&t.dirty(),a.set(h.value,p.value)}return{status:t.value,value:a}}}}Io.create=(i,e,t)=>new Io({valueType:e,keyType:i,typeName:J.ZodMap,...se(t)});class sr extends ue{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==D.set)return U(r,{code:T.invalid_type,expected:D.set,received:r.parsedType}),re;const o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(U(r,{code:T.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),t.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(U(r,{code:T.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),t.dirty());const n=this._def.valueType;function s(u){const h=new Set;for(const p of u){if(p.status==="aborted")return re;p.status==="dirty"&&t.dirty(),h.add(p.value)}return{status:t.value,value:h}}const a=[...r.data.values()].map((u,h)=>n._parse(new Zt(r,u,r.path,h)));return r.common.async?Promise.all(a).then(u=>s(u)):s(a)}min(e,t){return new sr({...this._def,minSize:{value:e,message:K.toString(t)}})}max(e,t){return new sr({...this._def,maxSize:{value:e,message:K.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}sr.create=(i,e)=>new sr({valueType:i,minSize:null,maxSize:null,typeName:J.ZodSet,...se(e)});class $r extends ue{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==D.function)return U(t,{code:T.invalid_type,expected:D.function,received:t.parsedType}),re;function r(a,u){return Eo({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Co(),An].filter(h=>!!h),issueData:{code:T.invalid_arguments,argumentsError:u}})}function o(a,u){return Eo({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Co(),An].filter(h=>!!h),issueData:{code:T.invalid_return_type,returnTypeError:u}})}const n={errorMap:t.common.contextualErrorMap},s=t.data;if(this._def.returns instanceof Zr){const a=this;return et(async function(...u){const h=new xt([]),p=await a._def.args.parseAsync(u,n).catch(y=>{throw h.addIssue(r(u,y)),h}),m=await Reflect.apply(s,this,p);return await a._def.returns._def.type.parseAsync(m,n).catch(y=>{throw h.addIssue(o(m,y)),h})})}else{const a=this;return et(function(...u){const h=a._def.args.safeParse(u,n);if(!h.success)throw new xt([r(u,h.error)]);const p=Reflect.apply(s,this,h.data),m=a._def.returns.safeParse(p,n);if(!m.success)throw new xt([o(p,m.error)]);return m.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new $r({...this._def,args:Ht.create(e).rest(zi.create())})}returns(e){return new $r({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new $r({args:e||Ht.create([]).rest(zi.create()),returns:t||zi.create(),typeName:J.ZodFunction,...se(r)})}}class Pn extends ue{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Pn.create=(i,e)=>new Pn({getter:i,typeName:J.ZodLazy,...se(e)});class Mn extends ue{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return U(t,{received:t.data,code:T.invalid_literal,expected:this._def.value}),re}return{status:"valid",value:e.data}}get value(){return this._def.value}}Mn.create=(i,e)=>new Mn({value:i,typeName:J.ZodLiteral,...se(e)});function Wc(i,e){return new $i({values:i,typeName:J.ZodEnum,...se(e)})}class $i extends ue{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),r=this._def.values;return U(t,{expected:ve.joinValues(r),received:t.parsedType,code:T.invalid_type}),re}if(this._def.values.indexOf(e.data)===-1){const t=this._getOrReturnCtx(e),r=this._def.values;return U(t,{received:t.data,code:T.invalid_enum_value,options:r}),re}return et(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return $i.create(e)}exclude(e){return $i.create(this.options.filter(t=>!e.includes(t)))}}$i.create=Wc;class Bn extends ue{_parse(e){const t=ve.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==D.string&&r.parsedType!==D.number){const o=ve.objectValues(t);return U(r,{expected:ve.joinValues(o),received:r.parsedType,code:T.invalid_type}),re}if(t.indexOf(e.data)===-1){const o=ve.objectValues(t);return U(r,{received:r.data,code:T.invalid_enum_value,options:o}),re}return et(e.data)}get enum(){return this._def.values}}Bn.create=(i,e)=>new Bn({values:i,typeName:J.ZodNativeEnum,...se(e)});class Zr extends ue{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==D.promise&&t.common.async===!1)return U(t,{code:T.invalid_type,expected:D.promise,received:t.parsedType}),re;const r=t.parsedType===D.promise?t.data:Promise.resolve(t.data);return et(r.then(o=>this._def.type.parseAsync(o,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Zr.create=(i,e)=>new Zr({type:i,typeName:J.ZodPromise,...se(e)});class It extends ue{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===J.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),o=this._def.effect||null,n={addIssue:s=>{U(r,s),s.fatal?t.abort():t.dirty()},get path(){return r.path}};if(n.addIssue=n.addIssue.bind(n),o.type==="preprocess"){const s=o.transform(r.data,n);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:s,path:r.path,parent:r})}if(o.type==="refinement"){const s=a=>{const u=o.refinement(a,n);if(r.common.async)return Promise.resolve(u);if(u instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?re:(a.status==="dirty"&&t.dirty(),s(a.value),{status:t.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?re:(a.status==="dirty"&&t.dirty(),s(a.value).then(()=>({status:t.value,value:a.value}))))}if(o.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Sn(s))return s;const a=o.transform(s.value,n);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>Sn(s)?Promise.resolve(o.transform(s.value,n)).then(a=>({status:t.value,value:a})):s);ve.assertNever(o)}}It.create=(i,e,t)=>new It({schema:i,typeName:J.ZodEffects,effect:e,...se(t)});It.createWithPreprocess=(i,e,t)=>new It({schema:e,effect:{type:"preprocess",transform:i},typeName:J.ZodEffects,...se(t)});class Xt extends ue{_parse(e){return this._getType(e)===D.undefined?et(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Xt.create=(i,e)=>new Xt({innerType:i,typeName:J.ZodOptional,...se(e)});class ar extends ue{_parse(e){return this._getType(e)===D.null?et(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ar.create=(i,e)=>new ar({innerType:i,typeName:J.ZodNullable,...se(e)});class Ln extends ue{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===D.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Ln.create=(i,e)=>new Ln({innerType:i,typeName:J.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...se(e)});class To extends ue{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return $o(o)?o.then(n=>({status:"valid",value:n.status==="valid"?n.value:this._def.catchValue({get error(){return new xt(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new xt(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}To.create=(i,e)=>new To({innerType:i,typeName:J.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...se(e)});class Ro extends ue{_parse(e){if(this._getType(e)!==D.nan){const r=this._getOrReturnCtx(e);return U(r,{code:T.invalid_type,expected:D.nan,received:r.parsedType}),re}return{status:"valid",value:e.data}}}Ro.create=i=>new Ro({typeName:J.ZodNaN,...se(i)});const $f=Symbol("zod_brand");class Uc extends ue{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class Yn extends ue{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const n=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return n.status==="aborted"?re:n.status==="dirty"?(t.dirty(),Dc(n.value)):this._def.out._parseAsync({data:n.value,path:r.path,parent:r})})();{const o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?re:o.status==="dirty"?(t.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(e,t){return new Yn({in:e,out:t,typeName:J.ZodPipeline})}}class ko extends ue{_parse(e){const t=this._def.innerType._parse(e);return Sn(t)&&(t.value=Object.freeze(t.value)),t}}ko.create=(i,e)=>new ko({innerType:i,typeName:J.ZodReadonly,...se(e)});const jc=(i,e={},t)=>i?Fr.create().superRefine((r,o)=>{var n,s;if(!i(r)){const a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,u=(s=(n=a.fatal)!==null&&n!==void 0?n:t)!==null&&s!==void 0?s:!0,h=typeof a=="string"?{message:a}:a;o.addIssue({code:"custom",...h,fatal:u})}}):Fr.create(),Af={object:Te.lazycreate};var J;(function(i){i.ZodString="ZodString",i.ZodNumber="ZodNumber",i.ZodNaN="ZodNaN",i.ZodBigInt="ZodBigInt",i.ZodBoolean="ZodBoolean",i.ZodDate="ZodDate",i.ZodSymbol="ZodSymbol",i.ZodUndefined="ZodUndefined",i.ZodNull="ZodNull",i.ZodAny="ZodAny",i.ZodUnknown="ZodUnknown",i.ZodNever="ZodNever",i.ZodVoid="ZodVoid",i.ZodArray="ZodArray",i.ZodObject="ZodObject",i.ZodUnion="ZodUnion",i.ZodDiscriminatedUnion="ZodDiscriminatedUnion",i.ZodIntersection="ZodIntersection",i.ZodTuple="ZodTuple",i.ZodRecord="ZodRecord",i.ZodMap="ZodMap",i.ZodSet="ZodSet",i.ZodFunction="ZodFunction",i.ZodLazy="ZodLazy",i.ZodLiteral="ZodLiteral",i.ZodEnum="ZodEnum",i.ZodEffects="ZodEffects",i.ZodNativeEnum="ZodNativeEnum",i.ZodOptional="ZodOptional",i.ZodNullable="ZodNullable",i.ZodDefault="ZodDefault",i.ZodCatch="ZodCatch",i.ZodPromise="ZodPromise",i.ZodBranded="ZodBranded",i.ZodPipeline="ZodPipeline",i.ZodReadonly="ZodReadonly"})(J||(J={}));const Sf=(i,e={message:`Input not instance of ${i.name}`})=>jc(t=>t instanceof i,e),zc=yt.create,Fc=Ci.create,If=Ro.create,Tf=Ei.create,Zc=In.create,Rf=or.create,kf=Ao.create,Nf=Tn.create,Of=Rn.create,Pf=Fr.create,Mf=zi.create,Bf=ii.create,Lf=So.create,Df=_t.create,Wf=Te.create,Uf=Te.strictCreate,jf=kn.create,zf=is.create,Ff=Nn.create,Zf=Ht.create,Hf=On.create,Vf=Io.create,Gf=sr.create,qf=$r.create,Yf=Pn.create,Kf=Mn.create,Jf=$i.create,Qf=Bn.create,Xf=Zr.create,vl=It.create,ep=Xt.create,tp=ar.create,ip=It.createWithPreprocess,rp=Yn.create,np=()=>zc().optional(),op=()=>Fc().optional(),sp=()=>Zc().optional(),ap={string:i=>yt.create({...i,coerce:!0}),number:i=>Ci.create({...i,coerce:!0}),boolean:i=>In.create({...i,coerce:!0}),bigint:i=>Ei.create({...i,coerce:!0}),date:i=>or.create({...i,coerce:!0})},lp=re;var b=Object.freeze({__proto__:null,defaultErrorMap:An,setErrorMap:hf,getErrorMap:Co,makeIssue:Eo,EMPTY_PATH:ff,addIssueToContext:U,ParseStatus:Ye,INVALID:re,DIRTY:Dc,OK:et,isAborted:Fs,isDirty:Zs,isValid:Sn,isAsync:$o,get util(){return ve},get objectUtil(){return zs},ZodParsedType:D,getParsedType:fi,ZodType:ue,ZodString:yt,ZodNumber:Ci,ZodBigInt:Ei,ZodBoolean:In,ZodDate:or,ZodSymbol:Ao,ZodUndefined:Tn,ZodNull:Rn,ZodAny:Fr,ZodUnknown:zi,ZodNever:ii,ZodVoid:So,ZodArray:_t,ZodObject:Te,ZodUnion:kn,ZodDiscriminatedUnion:is,ZodIntersection:Nn,ZodTuple:Ht,ZodRecord:On,ZodMap:Io,ZodSet:sr,ZodFunction:$r,ZodLazy:Pn,ZodLiteral:Mn,ZodEnum:$i,ZodNativeEnum:Bn,ZodPromise:Zr,ZodEffects:It,ZodTransformer:It,ZodOptional:Xt,ZodNullable:ar,ZodDefault:Ln,ZodCatch:To,ZodNaN:Ro,BRAND:$f,ZodBranded:Uc,ZodPipeline:Yn,ZodReadonly:ko,custom:jc,Schema:ue,ZodSchema:ue,late:Af,get ZodFirstPartyTypeKind(){return J},coerce:ap,any:Pf,array:Df,bigint:Tf,boolean:Zc,date:Rf,discriminatedUnion:zf,effect:vl,enum:Jf,function:qf,instanceof:Sf,intersection:Ff,lazy:Yf,literal:Kf,map:Vf,nan:If,nativeEnum:Qf,never:Bf,null:Of,nullable:tp,number:Fc,object:Wf,oboolean:sp,onumber:op,optional:ep,ostring:np,pipeline:rp,preprocess:ip,promise:Xf,record:Hf,set:Gf,strictObject:Uf,string:zc,symbol:kf,transformer:vl,tuple:Zf,undefined:Nf,union:jf,unknown:Mf,void:Lf,NEVER:lp,ZodIssueCode:T,quotelessJson:df,ZodError:xt});const at=b.object({message:b.string()});function le(i){return b.literal(Er[i])}b.object({accessList:b.array(b.string()),blockHash:b.string().nullable(),blockNumber:b.string().nullable(),chainId:b.string(),from:b.string(),gas:b.string(),hash:b.string(),input:b.string().nullable(),maxFeePerGas:b.string(),maxPriorityFeePerGas:b.string(),nonce:b.string(),r:b.string(),s:b.string(),to:b.string(),transactionIndex:b.string().nullable(),type:b.string(),v:b.string(),value:b.string()});const cp=b.object({chainId:b.number()}),up=b.object({email:b.string().email()}),dp=b.object({otp:b.string()}),hp=b.object({chainId:b.optional(b.number())}),fp=b.object({email:b.string().email()}),pp=b.object({themeMode:b.optional(b.enum(["light","dark"])),themeVariables:b.optional(b.record(b.string(),b.string().or(b.number())))}),gp=b.object({metadata:b.object({name:b.string(),description:b.string(),url:b.string(),icons:b.array(b.string())}).optional(),sdkVersion:b.string(),projectId:b.string()}),wp=b.object({action:b.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),mp=b.object({email:b.string().email(),address:b.string(),chainId:b.number()}),vp=b.object({isConnected:b.boolean()}),bp=b.object({chainId:b.number()}),yp=b.object({chainId:b.number()}),xp=b.object({email:b.string().email()}),_p=b.any(),Cp=b.object({method:b.literal("personal_sign"),params:b.array(b.any())}),Ep=b.object({method:b.literal("eth_sendTransaction"),params:b.array(b.any())}),$p=b.object({method:b.literal("eth_accounts")}),Ap=b.object({method:b.literal("eth_getBalance"),params:b.array(b.any())}),Sp=b.object({method:b.literal("eth_estimateGas"),params:b.array(b.any())}),Ip=b.object({method:b.literal("eth_gasPrice")}),Tp=b.object({method:b.literal("eth_signTypedData_v4"),params:b.array(b.any())}),Rp=b.object({method:b.literal("eth_getTransactionByHash"),params:b.array(b.any())}),kp=b.object({method:b.literal("eth_blockNumber")}),Np=b.object({method:b.literal("eth_chainId")}),bl=b.object({token:b.string()});b.object({type:le("APP_SWITCH_NETWORK"),payload:cp}).or(b.object({type:le("APP_CONNECT_EMAIL"),payload:up})).or(b.object({type:le("APP_CONNECT_DEVICE")})).or(b.object({type:le("APP_CONNECT_OTP"),payload:dp})).or(b.object({type:le("APP_GET_USER"),payload:b.optional(hp)})).or(b.object({type:le("APP_SIGN_OUT")})).or(b.object({type:le("APP_IS_CONNECTED"),payload:b.optional(bl)})).or(b.object({type:le("APP_GET_CHAIN_ID")})).or(b.object({type:le("APP_RPC_REQUEST"),payload:Cp.or(Ep).or($p).or(Ap).or(Sp).or(Ip).or(Tp).or(kp).or(Np).or(Rp)})).or(b.object({type:le("APP_UPDATE_EMAIL"),payload:fp})).or(b.object({type:le("APP_AWAIT_UPDATE_EMAIL")})).or(b.object({type:le("APP_SYNC_THEME"),payload:pp})).or(b.object({type:le("APP_SYNC_DAPP_DATA"),payload:gp})),b.object({type:le("FRAME_SWITCH_NETWORK_ERROR"),payload:at}).or(b.object({type:le("FRAME_SWITCH_NETWORK_SUCCESS"),payload:yp})).or(b.object({type:le("FRAME_CONNECT_EMAIL_ERROR"),payload:at})).or(b.object({type:le("FRAME_CONNECT_EMAIL_SUCCESS"),payload:wp})).or(b.object({type:le("FRAME_CONNECT_OTP_ERROR"),payload:at})).or(b.object({type:le("FRAME_CONNECT_OTP_SUCCESS")})).or(b.object({type:le("FRAME_CONNECT_DEVICE_ERROR"),payload:at})).or(b.object({type:le("FRAME_CONNECT_DEVICE_SUCCESS")})).or(b.object({type:le("FRAME_GET_USER_ERROR"),payload:at})).or(b.object({type:le("FRAME_GET_USER_SUCCESS"),payload:mp})).or(b.object({type:le("FRAME_SIGN_OUT_ERROR"),payload:at})).or(b.object({type:le("FRAME_SIGN_OUT_SUCCESS")})).or(b.object({type:le("FRAME_IS_CONNECTED_ERROR"),payload:at})).or(b.object({type:le("FRAME_IS_CONNECTED_SUCCESS"),payload:vp})).or(b.object({type:le("FRAME_GET_CHAIN_ID_ERROR"),payload:at})).or(b.object({type:le("FRAME_GET_CHAIN_ID_SUCCESS"),payload:bp})).or(b.object({type:le("FRAME_RPC_REQUEST_ERROR"),payload:at})).or(b.object({type:le("FRAME_RPC_REQUEST_SUCCESS"),payload:_p})).or(b.object({type:le("FRAME_SESSION_UPDATE"),payload:bl})).or(b.object({type:le("FRAME_UPDATE_EMAIL_ERROR"),payload:at})).or(b.object({type:le("FRAME_UPDATE_EMAIL_SUCCESS")})).or(b.object({type:le("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:at})).or(b.object({type:le("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:xp})).or(b.object({type:le("FRAME_SYNC_THEME_ERROR"),payload:at})).or(b.object({type:le("FRAME_SYNC_THEME_SUCCESS")})).or(b.object({type:le("FRAME_SYNC_DAPP_DATA_ERROR"),payload:at})).or(b.object({type:le("FRAME_SYNC_DAPP_DATA_SUCCESS")}));const yl={set(i,e){localStorage.setItem(`${Er.STORAGE_KEY}${i}`,e)},get(i){return localStorage.getItem(`${Er.STORAGE_KEY}${i}`)},delete(i){localStorage.removeItem(`${Er.STORAGE_KEY}${i}`)}},Op=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],io=30*1e3,Rs={getBlockchainApiUrl(){try{const{timeZone:i}=new Intl.DateTimeFormat().resolvedOptions(),e=i.toUpperCase();return Op.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const i=yl.get(Er.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<io){const t=Math.ceil((io-e)/1e3);throw new Error(`Please try again after ${t} seconds`)}}},getTimeToNextEmailLogin(){const i=yl.get(Er.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<io)return Math.ceil((io-e)/1e3)}return 0}};var rs=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Pp=6;let Hr=class extends ce{constructor(){var e;super(...arguments),this.email=(e=Z.state.data)==null?void 0:e.email,this.emailConnector=_e.getEmailConnector(),this.loading=!1,this.timeoutTimeLeft=Rs.getTimeToNextEmailLogin(),this.error="",this.otp=""}firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}render(){if(!this.email)throw new Error("w3m-email-verify-otp-view: No email provided");const e=!!this.timeoutTimeLeft;return _`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?_`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:_` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?_`<wui-text variant="small-400" color="error-100"
                    >${this.error}. Try Again</wui-text
                  >`:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=Rs.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Rs.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{this.loading||(this.otp=e.detail,this.emailConnector&&this.otp.length===Pp&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:this.otp}),ie.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await pe.connectExternal(this.emailConnector),Ce.close(),ie.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}})))}catch(t){ie.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),this.error=G.parseError(t),this.loading=!1}}async onResendCode(){try{if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";const e=_e.getEmailConnector();if(!e||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),ie.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),this.startOTPTimeout(),Be.showSuccess("Code email resent")}}catch(e){Be.showError(e)}finally{this.loading=!1}}};Hr.styles=uf;rs([F()],Hr.prototype,"loading",void 0);rs([F()],Hr.prototype,"timeoutTimeLeft",void 0);rs([F()],Hr.prototype,"error",void 0);Hr=rs([S("w3m-email-verify-otp-view")],Hr);const Mp=Ae`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var Hc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let No=class extends ce{constructor(){var e;super(),this.email=(e=Z.state.data)==null?void 0:e.email,this.emailConnector=_e.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return _`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),ie.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),ie.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),Z.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),Be.showSuccess("Code email resent")}}catch(e){Be.showError(e)}finally{this.loading=!1}}};No.styles=Mp;Hc([F()],No.prototype,"loading",void 0);No=Hc([S("w3m-email-verify-device-view")],No);const Bp=Ae`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var Vc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Oo=class extends ce{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Ce.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";const t=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{const o=(t==null?void 0:t.getBoundingClientRect())??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${o.width}px`,this.iframe.style.height=`${o.height-10}px`,this.iframe.style.left=`${o.left}px`,this.iframe.style.top=`${o.top+10/2}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),_`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};Oo.styles=Bp;Vc([F()],Oo.prototype,"ready",void 0);Oo=Vc([S("w3m-approve-transaction-view")],Oo);var Lp=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xl=class extends ce{render(){return _`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Qt.SECURE_SITE_DASHBOARD}
          imageSrc=${Qt.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};xl=Lp([S("w3m-upgrade-wallet-view")],xl);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dp=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wp={CHILD:2},Up=i=>(...e)=>({_$litDirective$:i,values:e});let jp=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ln=(i,e)=>{var r;const t=i._$AN;if(t===void 0)return!1;for(const o of t)(r=o._$AO)==null||r.call(o,e,!1),ln(o,e);return!0},Po=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},Gc=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Zp(e)}};function zp(i){this._$AN!==void 0?(Po(this),this._$AM=i,Gc(this)):this._$AM=i}function Fp(i,e=!1,t=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let n=t;n<r.length;n++)ln(r[n],!1),Po(r[n]);else r!=null&&(ln(r,!1),Po(r));else ln(this,i)}const Zp=i=>{i.type==Wp.CHILD&&(i._$AP??(i._$AP=Fp),i._$AQ??(i._$AQ=zp))};class Hp extends jp{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Gc(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),t&&(ln(this,e),Po(this))}setValue(e){if(Dp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qc=()=>new Vp;class Vp{}const ks=new WeakMap,Yc=Up(class extends Hp{render(i){return je}update(i,[e]){var r;const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(r=i.options)==null?void 0:r.host,this.rt(this.ct=i.element)),je}rt(i){if(this.isConnected||(i=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=ks.get(e);t===void 0&&(t=new WeakMap,ks.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){var i,e;return typeof this.G=="function"?(i=ks.get(this.ht??globalThis))==null?void 0:i.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Gp=Ae`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var Aa=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Dn=class extends ce{constructor(){var e;super(...arguments),this.formRef=qc(),this.initialValue=((e=Z.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return _`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${Yc(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${Z.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=_e.getEmailConnector();if(!t)throw new Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),ie.sendEvent({type:"track",event:"EMAIL_EDIT"}),Z.replace("UpdateEmailWalletWaiting",{email:this.email})}catch(t){Be.showError(t),this.loading=!1}}};Dn.styles=Gp;Aa([F()],Dn.prototype,"email",void 0);Aa([F()],Dn.prototype,"loading",void 0);Dn=Aa([S("w3m-update-email-wallet-view")],Dn);const qp=Ae`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var Kc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Mo=class extends ce{constructor(){var e;super(),this.email=(e=Z.state.data)==null?void 0:e.email,this.emailConnector=_e.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw new Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw new Error("w3m-update-email-wallet-waiting-view: No email connector provided");return _`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForEmailUpdateApproval(){this.emailConnector&&(await this.emailConnector.provider.awaitUpdateEmail(),Z.replace("Account"),Be.showSuccess("Email updated"))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-update-email-wallet-waiting-view: Unable to resend email");this.loading=!0,await this.emailConnector.provider.updateEmail({email:this.email}),this.listenForEmailUpdateApproval(),Be.showSuccess("Code email resent")}}catch(e){Be.showError(e)}finally{this.loading=!1}}};Mo.styles=qp;Kc([F()],Mo.prototype,"loading",void 0);Mo=Kc([S("w3m-update-email-wallet-waiting-view")],Mo);const Yp=Ae`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function Jc(i){const{connectors:e}=_e.state,t=e.filter(n=>n.type==="ANNOUNCED").reduce((n,s)=>{var a;return(a=s.info)!=null&&a.rdns&&(n[s.info.rdns]=!0),n},{});return i.map(n=>({...n,installed:!!n.rdns&&!!t[n.rdns??""]})).sort((n,s)=>Number(s.installed)-Number(n.installed))}var Kn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const _l="local-paginator";let lr=class extends ce{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!he.state.wallets.length,this.wallets=he.state.wallets,this.recommended=he.state.recommended,this.featured=he.state.featured,this.unsubscribe.push(he.subscribeKey("wallets",e=>this.wallets=e),he.subscribeKey("recommended",e=>this.recommended=e),he.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.paginationObserver)==null||e.disconnect()}render(){return _`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-grid");this.initial&&e&&(await he.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>_`
        <wui-card-select-loader type="wallet" id=${me(t)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return Jc(e).map(r=>_`
        <wui-card-select
          imageSrc=${me(Pe.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
          .installed=${r.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:o}=he.state,n=window.innerWidth<352?3:4,s=e.length+t.length;let u=Math.ceil(s/n)*n-s+n;return u-=e.length?r.length%n:0,o===0&&r.length>0?null:o===0||[...r,...e,...t].length<o?this.shimmerTemplate(u,_l):null}createPaginationObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${_l}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:o,count:n,wallets:s}=he.state;s.length<n&&he.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:t}=_e.state,r=t.find(({explorerId:o})=>o===e.id);r?Z.push("ConnectingExternal",{connector:r}):Z.push("ConnectingWalletConnect",{wallet:e})}};lr.styles=Yp;Kn([F()],lr.prototype,"initial",void 0);Kn([F()],lr.prototype,"wallets",void 0);Kn([F()],lr.prototype,"recommended",void 0);Kn([F()],lr.prototype,"featured",void 0);lr=Kn([S("w3m-all-wallets-list")],lr);const Kp=Ae`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Sa=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Wn=class extends ce{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?_`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await he.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=he.state,t=Jc(e);return e.length?_`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(r=>_`
            <wui-card-select
              imageSrc=${me(Pe.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
              .installed=${r.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:_`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:t}=_e.state,r=t.find(({explorerId:o})=>o===e.id);r?Z.push("ConnectingExternal",{connector:r}):Z.push("ConnectingWalletConnect",{wallet:e})}};Wn.styles=Kp;Sa([F()],Wn.prototype,"loading",void 0);Sa([ke()],Wn.prototype,"query",void 0);Wn=Sa([S("w3m-all-wallets-search")],Wn);var ns=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Un=class extends ce{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(pe.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return _`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(t=>t==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:t==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:t==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:t==="web"?{label:"Webapp",icon:"browser",platform:"web"}:t==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:t})=>t),e}onTabChange(e){var r;const t=this.platformTabs[e];t&&((r=this.onSelectPlatfrom)==null||r.call(this,t))}};ns([ke({type:Array})],Un.prototype,"platforms",void 0);ns([ke()],Un.prototype,"onSelectPlatfrom",void 0);ns([F()],Un.prototype,"buffering",void 0);Un=ns([S("w3m-connecting-header")],Un);var Jp=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Cl=class extends nt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=_e.state,t=e.find(o=>{var n,s;return o.type==="ANNOUNCED"&&((n=o.info)==null?void 0:n.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=e.find(o=>o.type==="INJECTED");t?await pe.connectExternal(t):r&&await pe.connectExternal(r),Ce.close(),ie.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){ie.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Cl=Jp([S("w3m-connecting-wc-browser")],Cl);var Qp=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let El=class extends nt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:r}=this.wallet,{redirect:o,href:n}=G.formatNativeUrl(t,this.uri);pe.setWcLinking({name:r,href:n}),pe.setRecentWallet(this.wallet),G.openHref(o,"_blank")}catch{this.error=!0}}};El=Qp([S("w3m-connecting-wc-desktop")],El);var Xp=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let $l=class extends nt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,name:r}=this.wallet,{redirect:o,href:n}=G.formatNativeUrl(t,this.uri);pe.setWcLinking({name:r,href:n}),pe.setRecentWallet(this.wallet),G.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=G.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(pe.setBuffering(!0),setTimeout(()=>{pe.setBuffering(!1)},5e3))}};$l=Xp([S("w3m-connecting-wc-mobile")],$l);const eg=Ae`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var tg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Vs=class extends nt{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),_`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return pe.setWcLinking(void 0),pe.setRecentWallet(this.wallet),_` <wui-qr-code
      size=${e}
      theme=${it.state.themeMode}
      uri=${this.uri}
      imageSrc=${me(Pe.getWalletImage(this.wallet))}
      alt=${me(t)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return _`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Vs.styles=eg;Vs=tg([S("w3m-connecting-wc-qrcode")],Vs);const ig=Ae`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var rg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Gs=class extends ce{constructor(){var e;super(...arguments),this.dappImageUrl=(e=be.state.metadata)==null?void 0:e.icons,this.walletImageUrl=Qe.getConnectedWalletImageUrl()}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return _`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Gs.styles=ig;Gs=rg([S("w3m-connecting-siwe")],Gs);var ng=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Al=class extends ce{constructor(){var e;if(super(),this.wallet=(e=Z.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return _`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${me(Pe.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Al=ng([S("w3m-connecting-wc-unsupported")],Al);var og=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Sl=class extends nt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",ie.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:r}=this.wallet,{redirect:o,href:n}=G.formatUniversalUrl(t,this.uri);pe.setWcLinking({name:r,href:n}),pe.setRecentWallet(this.wallet),G.openHref(o,"_blank")}catch{this.error=!0}}};Sl=og([S("w3m-connecting-wc-web")],Sl);const sg=Ae`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var os=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};function Il(){var s,a,u,h,p,m,x;const i=(a=(s=Z.state.data)==null?void 0:s.connector)==null?void 0:a.name,e=(h=(u=Z.state.data)==null?void 0:u.wallet)==null?void 0:h.name,t=(m=(p=Z.state.data)==null?void 0:p.network)==null?void 0:m.name,r=e??i,o=_e.getConnectors();return{Connect:`Connect ${o.length===1&&((x=o[0])==null?void 0:x.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:t??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let Vr=class extends ce{constructor(){super(),this.unsubscribe=[],this.heading=Il()[Z.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(Z.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),pe.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return _`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){ie.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),Z.push("WhatIsAWallet")}async onClose(){We.state.isSiweEnabled&&We.state.status!=="success"&&await pe.disconnect(),Ce.close()}titleTemplate(){return _`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=Z.state,t=e==="Connect",r=e==="ApproveTransaction";return this.showBack&&!r?_`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:_`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?_`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(t){const o=Il()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=Z.state,t=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){Z.state.view==="ConnectingSiwe"?Z.push("Connect"):Z.goBack()}};Vr.styles=[sg];os([F()],Vr.prototype,"heading",void 0);os([F()],Vr.prototype,"buffering",void 0);os([F()],Vr.prototype,"showBack",void 0);Vr=os([S("w3m-header")],Vr);var Qc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let qs=class extends ce{constructor(){super(...arguments),this.data=[]}render(){return _`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>_`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(t=>_`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};Qc([ke({type:Array})],qs.prototype,"data",void 0);qs=Qc([S("w3m-help-widget")],qs);const ag=Ae`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var lg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ys=class extends ce{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=be.state;return!e&&!t?null:_`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=be.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=be.state;return e?_`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=be.state;return e?_`<a href=${e}>Privacy Policy</a>`:null}};Ys.styles=[ag];Ys=lg([S("w3m-legal-footer")],Ys);const cg=Ae`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Xc=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Bo=class extends ce{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:o,homepage:n}=this.wallet,s=G.isMobile(),a=G.isIos(),u=G.isAndroid(),h=[t,r,n,o].filter(Boolean).length>1,p=ye.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return h&&!s?_`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${()=>Z.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!h&&n?_`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?_`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&u?_`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&G.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&G.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&G.openHref(this.wallet.homepage,"_blank")}};Bo.styles=[cg];Xc([ke({type:Object})],Bo.prototype,"wallet",void 0);Bo=Xc([S("w3m-mobile-download-links")],Bo);const ug=Ae`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var eu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const dg={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Lo=class extends ce{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Be.state.open,this.unsubscribe.push(Be.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=Be.state,r=dg[t];return _`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Be.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Lo.styles=ug;eu([F()],Lo.prototype,"open",void 0);Lo=eu([S("w3m-snackbar")],Lo);const hg=Ae`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .alphaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`;var Jn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let cr=class extends ce{constructor(){super(),this.unsubscribe=[],this.formRef=qc(),this.connectors=_e.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(_e.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=this.connectors.length>1;return this.connectors.find(r=>r.type==="EMAIL")?_`
      ${this.alphaWarningTemplate()}
      <form ${Yc(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?_`<wui-separator text="or"></wui-separator>`:null}
    `:null}alphaWarningTemplate(){return _`
          <wui-flex class="alphaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-icon-box
              size="sm"
              icon="alpha"
              iconColor="accent-100"
              background="opaque"
              backgroundColor="accent-100"
            ></wui-icon-box>
            <wui-text variant="small-400" color="accent-100">
              This is an alpha version to test before launch
            </wui-text>
          </wui-flex>
        `}submitButtonTemplate(){return!this.loading&&this.email.length>3?_`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?_`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=_e.getEmailConnector();if(!t)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await t.provider.connectEmail({email:this.email});ie.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),r==="VERIFY_OTP"?(ie.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),Z.push("EmailVerifyOtp",{email:this.email})):r==="VERIFY_DEVICE"&&Z.push("EmailVerifyDevice",{email:this.email})}catch(t){const r=G.parseError(t);r!=null&&r.includes("Invalid email")?this.error="Invalid email. Try again.":Be.showError(t)}finally{this.loading=!1}}onFocusEvent(){ie.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};cr.styles=hg;Jn([F()],cr.prototype,"connectors",void 0);Jn([F()],cr.prototype,"email",void 0);Jn([F()],cr.prototype,"loading",void 0);Jn([F()],cr.prototype,"error",void 0);cr=Jn([S("w3m-email-login-widget")],cr);let Tl=!1;class fg{constructor(e){this.initPromise=void 0,this.setIsConnected=t=>{we.setIsConnected(t)},this.setCaipAddress=t=>{we.setCaipAddress(t)},this.setBalance=(t,r)=>{we.setBalance(t,r)},this.setProfileName=t=>{we.setProfileName(t)},this.setProfileImage=t=>{we.setProfileImage(t)},this.resetAccount=()=>{we.resetAccount()},this.setCaipNetwork=t=>{Me.setCaipNetwork(t)},this.getCaipNetwork=()=>Me.state.caipNetwork,this.setRequestedCaipNetworks=t=>{Me.setRequestedCaipNetworks(t)},this.getApprovedCaipNetworksData=()=>Me.getApprovedCaipNetworksData(),this.resetNetwork=()=>{Me.resetNetwork()},this.setConnectors=t=>{_e.setConnectors(t)},this.addConnector=t=>{_e.addConnector(t)},this.getConnectors=()=>_e.getConnectors(),this.resetWcConnection=()=>{pe.resetWcConnection()},this.fetchIdentity=t=>Pl.fetchIdentity(t),this.setAddressExplorerUrl=t=>{we.setAddressExplorerUrl(t)},this.setSIWENonce=t=>{We.setNonce(t)},this.setSIWESession=t=>{We.setSession(t)},this.setSIWEStatus=t=>{We.setStatus(t)},this.setSIWEMessage=t=>{We.setMessage(t)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Ce.open(e)}async close(){await this.initOrContinue(),Ce.close()}setLoading(e){Ce.setLoading(e)}getThemeMode(){return it.state.themeMode}getThemeVariables(){return it.state.themeVariables}setThemeMode(e){it.setThemeMode(e),na(it.state.themeMode);try{const t=_e.getEmailConnector();t&&t.provider.syncTheme({themeMode:it.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){it.setThemeVariables(e),Hl(it.state.themeVariables);try{const t=_e.getEmailConnector();t&&t.provider.syncTheme({themeVariables:it.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return it.subscribe(e)}getState(){return{...Ar.state}}subscribeState(e){return Ar.subscribe(e)}getEvent(){return{...ie.state}}subscribeEvents(e){return ie.subscribe(e)}subscribeSIWEState(e){return We.subscribe(e)}initControllers(e){if(Me.setClient(e.networkControllerClient),Me.setDefaultCaipNetwork(e.defaultChain),be.setProjectId(e.projectId),be.setIncludeWalletIds(e.includeWalletIds),be.setExcludeWalletIds(e.excludeWalletIds),be.setFeaturedWalletIds(e.featuredWalletIds),be.setTokens(e.tokens),be.setTermsConditionsUrl(e.termsConditionsUrl),be.setPrivacyPolicyUrl(e.privacyPolicyUrl),be.setCustomWallets(e.customWallets),be.setEnableAnalytics(e.enableAnalytics),be.setSdkVersion(e._sdkVersion),pe.setClient(e.connectionControllerClient),e.siweControllerClient){const t=e.siweControllerClient;We.setSIWEClient(t)}e.metadata&&be.setMetadata(e.metadata),e.themeMode&&it.setThemeMode(e.themeMode),e.themeVariables&&it.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!Tl&&G.isClient()&&(Tl=!0,this.initPromise=new Promise(async e=>{await Promise.all([Ra(()=>Promise.resolve().then(()=>y1),void 0),Ra(()=>Promise.resolve().then(()=>Z1),void 0)]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}const te={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.5.7"},Jt={ConnectorExplorerIds:{[te.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[te.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[te.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[te.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[te.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[te.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[te.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[te.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[te.INJECTED_CONNECTOR_ID]:"Browser Wallet",[te.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[te.COINBASE_CONNECTOR_ID]:"Coinbase",[te.LEDGER_CONNECTOR_ID]:"Ledger",[te.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[te.INJECTED_CONNECTOR_ID]:"INJECTED",[te.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[te.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[te.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},mr={caipNetworkIdToNumber(i){return i?Number(i.split(":")[1]):void 0},getCaipTokens(i){if(!i)return;const e={};return Object.entries(i).forEach(([t,r])=>{e[`${te.EIP155}:${t}`]=r}),e}};function pg(i){if(i)return{id:`${te.EIP155}:${i.id}`,name:i.name,imageId:Jt.EIP155NetworkImageIds[i.id]}}const gg="wagmi.wallet";class S2 extends fg{constructor(e){const{wagmiConfig:t,siweConfig:r,chains:o,defaultChain:n,tokens:s,_sdkVersion:a,...u}=e;if(!t)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!u.projectId)throw new Error("web3modal:constructor - projectId is undefined");const h={switchCaipNetwork:async m=>{const x=mr.caipNetworkIdToNumber(m==null?void 0:m.id);x&&await wu({chainId:x})},async getApprovedCaipNetworksData(){var x,y,E,A;const m=localStorage.getItem(gg);if(m!=null&&m.includes(te.EMAIL_CONNECTOR_ID))return{supportsAllNetworks:!1,approvedCaipNetworkIds:Jt.WalletConnectRpcChainIds.map(B=>`${te.EIP155}:${B}`)};if(m!=null&&m.includes(te.WALLET_CONNECT_CONNECTOR_ID)){const B=t.connectors.find(j=>j.id===te.WALLET_CONNECT_CONNECTOR_ID);if(!B)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const R=(y=(x=(await B.getProvider()).signer)==null?void 0:x.session)==null?void 0:y.namespaces,O=(E=R==null?void 0:R[te.EIP155])==null?void 0:E.methods,N=(A=R==null?void 0:R[te.EIP155])==null?void 0:A.chains;return{supportsAllNetworks:O==null?void 0:O.includes(te.ADD_CHAIN_METHOD),approvedCaipNetworkIds:N}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},p={connectWalletConnect:async m=>{var E;const x=t.connectors.find(A=>A.id===te.WALLET_CONNECT_CONNECTOR_ID);if(!x)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");x.on("message",A=>{A.type==="display_uri"&&(m(A.data),x.removeAllListeners())});const y=mr.caipNetworkIdToNumber((E=this.getCaipNetwork())==null?void 0:E.id);await Oa({connector:x,chainId:y})},connectExternal:async({id:m,provider:x,info:y})=>{var B,I;const E=t.connectors.find(R=>R.id===m);if(!E)throw new Error("connectionControllerClient:connectExternal - connector is undefined");x&&y&&E.id===te.EIP6963_CONNECTOR_ID&&((B=E.setEip6963Wallet)==null||B.call(E,{provider:x,info:y}));const A=mr.caipNetworkIdToNumber((I=this.getCaipNetwork())==null?void 0:I.id);await Oa({connector:E,chainId:A})},checkInstalled:m=>{const x=this.getConnectors().filter(E=>E.type==="ANNOUNCED"),y=this.getConnectors().find(E=>E.type==="INJECTED");return m?x.length&&m.some(A=>x.some(B=>{var I;return((I=B.info)==null?void 0:I.rdns)===A}))?!0:y&&window!=null&&window.ethereum?m.some(E=>{var A;return!!((A=window.ethereum)!=null&&A[String(E)])}):!1:!!window.ethereum},disconnect:async()=>{var m;await mu(),(m=r==null?void 0:r.options)!=null&&m.signOutOnDisconnect&&await r.signOut()},signMessage:async m=>cu({message:m})};super({networkControllerClient:h,connectionControllerClient:p,siweControllerClient:r,defaultChain:pg(n),tokens:mr.getCaipTokens(s),_sdkVersion:a??`html-wagmi-${te.VERSION}`,...u}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(o),this.syncConnectors(t),this.syncEmailConnector(t),this.listenEIP6963Connector(t),this.listenEmailConnector(t),uu(()=>this.syncAccount()),du(()=>this.syncNetwork())}getState(){const e=super.getState();return{...e,selectedNetworkId:mr.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:mr.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){const t=e==null?void 0:e.map(r=>{var o,n;return{id:`${te.EIP155}:${r.id}`,name:r.name,imageId:Jt.EIP155NetworkImageIds[r.id],imageUrl:(n=(o=this.options)==null?void 0:o.chainImages)==null?void 0:n[r.id]}});this.setRequestedCaipNetworks(t??[])}async syncAccount(){const{address:e,isConnected:t}=ka(),{chain:r}=Na();if(this.resetAccount(),t&&e&&r){const o=`${te.EIP155}:${r.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(o),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var o,n,s,a;const{address:e,isConnected:t}=ka(),{chain:r}=Na();if(r){const u=String(r.id),h=`${te.EIP155}:${u}`;if(this.setCaipNetwork({id:h,name:r.name,imageId:Jt.EIP155NetworkImageIds[r.id],imageUrl:(n=(o=this.options)==null?void 0:o.chainImages)==null?void 0:n[r.id]}),t&&e){const p=`${te.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(p),(a=(s=r.blockExplorers)==null?void 0:s.default)!=null&&a.url){const m=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(m)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,t){if(t.id!==hu.id){this.setProfileName(null),this.setProfileImage(null);return}try{const{name:r,avatar:o}=await this.fetchIdentity({caipChainId:`${te.EIP155}:${t.id}`,address:e});this.setProfileName(r),this.setProfileImage(o)}catch{const r=await fu({address:e,chainId:t.id});if(r){this.setProfileName(r);const o=await pu({name:r,chainId:t.id});o&&this.setProfileImage(o)}}}async syncBalance(e,t){var o,n,s;const r=await gu({address:e,chainId:t.id,token:(s=(n=(o=this.options)==null?void 0:o.tokens)==null?void 0:n[t.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){const t=[];e.connectors.forEach(({id:r,name:o})=>{var n,s;[te.EIP6963_CONNECTOR_ID,te.EMAIL_CONNECTOR_ID].includes(r)||t.push({id:r,explorerId:Jt.ConnectorExplorerIds[r],imageId:Jt.ConnectorImageIds[r],imageUrl:(s=(n=this.options)==null?void 0:n.connectorImages)==null?void 0:s[r],name:Jt.ConnectorNamesMap[r]??o,type:Jt.ConnectorTypesMap[r]??"EXTERNAL"})}),this.setConnectors(t)}async syncEmailConnector(e){const t=e.connectors.find(({id:r})=>r==="w3mEmail");if(t){const r=await t.getProvider();this.addConnector({id:te.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:r})}}eip6963EventHandler(e,t){var r,o;if(t.detail){const{info:n,provider:s}=t.detail;this.getConnectors().find(h=>h.name===n.name)||(this.addConnector({id:te.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:n.icon??((o=(r=this.options)==null?void 0:r.connectorImages)==null?void 0:o[te.EIP6963_CONNECTOR_ID]),name:n.name,provider:s,info:n}),e.isAuthorized({info:n,provider:s}))}}listenEIP6963Connector(e){const t=e.connectors.find(r=>r.id===te.EIP6963_CONNECTOR_ID);if(typeof window<"u"&&t){const r=this.eip6963EventHandler.bind(this,t);window.addEventListener(te.EIP6963_ANNOUNCE_EVENT,r),window.dispatchEvent(new Event(te.EIP6963_REQUEST_EVENT))}}async listenEmailConnector(e){const t=e.connectors.find(r=>r.id===te.EMAIL_CONNECTOR_ID);if(typeof window<"u"&&t){super.setLoading(!0);const r=await t.getProvider(),o=r.getLoginEmailUsed();super.setLoading(o),r.onRpcRequest(()=>{super.open({view:"ApproveTransaction"})}),r.onRpcResponse(()=>{super.close()}),r.onIsConnected(()=>{super.setLoading(!1)})}}}var tu={},ss={};ss.byteLength=vg;ss.toByteArray=yg;ss.fromByteArray=Cg;var Lt=[],ht=[],wg=typeof Uint8Array<"u"?Uint8Array:Array,Ns="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var vr=0,mg=Ns.length;vr<mg;++vr)Lt[vr]=Ns[vr],ht[Ns.charCodeAt(vr)]=vr;ht[45]=62;ht[95]=63;function iu(i){var e=i.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=i.indexOf("=");t===-1&&(t=e);var r=t===e?0:4-t%4;return[t,r]}function vg(i){var e=iu(i),t=e[0],r=e[1];return(t+r)*3/4-r}function bg(i,e,t){return(e+t)*3/4-t}function yg(i){var e,t=iu(i),r=t[0],o=t[1],n=new wg(bg(i,r,o)),s=0,a=o>0?r-4:r,u;for(u=0;u<a;u+=4)e=ht[i.charCodeAt(u)]<<18|ht[i.charCodeAt(u+1)]<<12|ht[i.charCodeAt(u+2)]<<6|ht[i.charCodeAt(u+3)],n[s++]=e>>16&255,n[s++]=e>>8&255,n[s++]=e&255;return o===2&&(e=ht[i.charCodeAt(u)]<<2|ht[i.charCodeAt(u+1)]>>4,n[s++]=e&255),o===1&&(e=ht[i.charCodeAt(u)]<<10|ht[i.charCodeAt(u+1)]<<4|ht[i.charCodeAt(u+2)]>>2,n[s++]=e>>8&255,n[s++]=e&255),n}function xg(i){return Lt[i>>18&63]+Lt[i>>12&63]+Lt[i>>6&63]+Lt[i&63]}function _g(i,e,t){for(var r,o=[],n=e;n<t;n+=3)r=(i[n]<<16&16711680)+(i[n+1]<<8&65280)+(i[n+2]&255),o.push(xg(r));return o.join("")}function Cg(i){for(var e,t=i.length,r=t%3,o=[],n=16383,s=0,a=t-r;s<a;s+=n)o.push(_g(i,s,s+n>a?a:s+n));return r===1?(e=i[t-1],o.push(Lt[e>>2]+Lt[e<<4&63]+"==")):r===2&&(e=(i[t-2]<<8)+i[t-1],o.push(Lt[e>>10]+Lt[e>>4&63]+Lt[e<<2&63]+"=")),o.join("")}var Ia={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Ia.read=function(i,e,t,r,o){var n,s,a=o*8-r-1,u=(1<<a)-1,h=u>>1,p=-7,m=t?o-1:0,x=t?-1:1,y=i[e+m];for(m+=x,n=y&(1<<-p)-1,y>>=-p,p+=a;p>0;n=n*256+i[e+m],m+=x,p-=8);for(s=n&(1<<-p)-1,n>>=-p,p+=r;p>0;s=s*256+i[e+m],m+=x,p-=8);if(n===0)n=1-h;else{if(n===u)return s?NaN:(y?-1:1)*(1/0);s=s+Math.pow(2,r),n=n-h}return(y?-1:1)*s*Math.pow(2,n-r)};Ia.write=function(i,e,t,r,o,n){var s,a,u,h=n*8-o-1,p=(1<<h)-1,m=p>>1,x=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=r?0:n-1,E=r?1:-1,A=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=p):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+m>=1?e+=x/u:e+=x*Math.pow(2,1-m),e*u>=2&&(s++,u/=2),s+m>=p?(a=0,s=p):s+m>=1?(a=(e*u-1)*Math.pow(2,o),s=s+m):(a=e*Math.pow(2,m-1)*Math.pow(2,o),s=0));o>=8;i[t+y]=a&255,y+=E,a/=256,o-=8);for(s=s<<o|a,h+=o;h>0;i[t+y]=s&255,y+=E,s/=256,h-=8);i[t+y-E]|=A*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(i){const e=ss,t=Ia,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=a,i.SlowBuffer=R,i.INSPECT_MAX_BYTES=50;const o=2147483647;i.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=n(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function n(){try{const d=new Uint8Array(1),l={foo:function(){return 42}};return Object.setPrototypeOf(l,Uint8Array.prototype),Object.setPrototypeOf(d,l),d.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(d){if(d>o)throw new RangeError('The value "'+d+'" is invalid for option "size"');const l=new Uint8Array(d);return Object.setPrototypeOf(l,a.prototype),l}function a(d,l,c){if(typeof d=="number"){if(typeof l=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return m(d)}return u(d,l,c)}a.poolSize=8192;function u(d,l,c){if(typeof d=="string")return x(d,l);if(ArrayBuffer.isView(d))return E(d);if(d==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof d);if(Pt(d,ArrayBuffer)||d&&Pt(d.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Pt(d,SharedArrayBuffer)||d&&Pt(d.buffer,SharedArrayBuffer)))return A(d,l,c);if(typeof d=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const f=d.valueOf&&d.valueOf();if(f!=null&&f!==d)return a.from(f,l,c);const g=B(d);if(g)return g;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof d[Symbol.toPrimitive]=="function")return a.from(d[Symbol.toPrimitive]("string"),l,c);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof d)}a.from=function(d,l,c){return u(d,l,c)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function h(d){if(typeof d!="number")throw new TypeError('"size" argument must be of type number');if(d<0)throw new RangeError('The value "'+d+'" is invalid for option "size"')}function p(d,l,c){return h(d),d<=0?s(d):l!==void 0?typeof c=="string"?s(d).fill(l,c):s(d).fill(l):s(d)}a.alloc=function(d,l,c){return p(d,l,c)};function m(d){return h(d),s(d<0?0:I(d)|0)}a.allocUnsafe=function(d){return m(d)},a.allocUnsafeSlow=function(d){return m(d)};function x(d,l){if((typeof l!="string"||l==="")&&(l="utf8"),!a.isEncoding(l))throw new TypeError("Unknown encoding: "+l);const c=O(d,l)|0;let f=s(c);const g=f.write(d,l);return g!==c&&(f=f.slice(0,g)),f}function y(d){const l=d.length<0?0:I(d.length)|0,c=s(l);for(let f=0;f<l;f+=1)c[f]=d[f]&255;return c}function E(d){if(Pt(d,Uint8Array)){const l=new Uint8Array(d);return A(l.buffer,l.byteOffset,l.byteLength)}return y(d)}function A(d,l,c){if(l<0||d.byteLength<l)throw new RangeError('"offset" is outside of buffer bounds');if(d.byteLength<l+(c||0))throw new RangeError('"length" is outside of buffer bounds');let f;return l===void 0&&c===void 0?f=new Uint8Array(d):c===void 0?f=new Uint8Array(d,l):f=new Uint8Array(d,l,c),Object.setPrototypeOf(f,a.prototype),f}function B(d){if(a.isBuffer(d)){const l=I(d.length)|0,c=s(l);return c.length===0||d.copy(c,0,0,l),c}if(d.length!==void 0)return typeof d.length!="number"||ls(d.length)?s(0):y(d);if(d.type==="Buffer"&&Array.isArray(d.data))return y(d.data)}function I(d){if(d>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return d|0}function R(d){return+d!=d&&(d=0),a.alloc(+d)}a.isBuffer=function(l){return l!=null&&l._isBuffer===!0&&l!==a.prototype},a.compare=function(l,c){if(Pt(l,Uint8Array)&&(l=a.from(l,l.offset,l.byteLength)),Pt(c,Uint8Array)&&(c=a.from(c,c.offset,c.byteLength)),!a.isBuffer(l)||!a.isBuffer(c))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(l===c)return 0;let f=l.length,g=c.length;for(let v=0,C=Math.min(f,g);v<C;++v)if(l[v]!==c[v]){f=l[v],g=c[v];break}return f<g?-1:g<f?1:0},a.isEncoding=function(l){switch(String(l).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(l,c){if(!Array.isArray(l))throw new TypeError('"list" argument must be an Array of Buffers');if(l.length===0)return a.alloc(0);let f;if(c===void 0)for(c=0,f=0;f<l.length;++f)c+=l[f].length;const g=a.allocUnsafe(c);let v=0;for(f=0;f<l.length;++f){let C=l[f];if(Pt(C,Uint8Array))v+C.length>g.length?(a.isBuffer(C)||(C=a.from(C)),C.copy(g,v)):Uint8Array.prototype.set.call(g,C,v);else if(a.isBuffer(C))C.copy(g,v);else throw new TypeError('"list" argument must be an Array of Buffers');v+=C.length}return g};function O(d,l){if(a.isBuffer(d))return d.length;if(ArrayBuffer.isView(d)||Pt(d,ArrayBuffer))return d.byteLength;if(typeof d!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof d);const c=d.length,f=arguments.length>2&&arguments[2]===!0;if(!f&&c===0)return 0;let g=!1;for(;;)switch(l){case"ascii":case"latin1":case"binary":return c;case"utf8":case"utf-8":return as(d).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c*2;case"hex":return c>>>1;case"base64":return Ta(d).length;default:if(g)return f?-1:as(d).length;l=(""+l).toLowerCase(),g=!0}}a.byteLength=O;function N(d,l,c){let f=!1;if((l===void 0||l<0)&&(l=0),l>this.length||((c===void 0||c>this.length)&&(c=this.length),c<=0)||(c>>>=0,l>>>=0,c<=l))return"";for(d||(d="utf8");;)switch(d){case"hex":return ne(this,l,c);case"utf8":case"utf-8":return Y(this,l,c);case"ascii":return V(this,l,c);case"latin1":case"binary":return W(this,l,c);case"base64":return Le(this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return oe(this,l,c);default:if(f)throw new TypeError("Unknown encoding: "+d);d=(d+"").toLowerCase(),f=!0}}a.prototype._isBuffer=!0;function j(d,l,c){const f=d[l];d[l]=d[c],d[c]=f}a.prototype.swap16=function(){const l=this.length;if(l%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let c=0;c<l;c+=2)j(this,c,c+1);return this},a.prototype.swap32=function(){const l=this.length;if(l%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let c=0;c<l;c+=4)j(this,c,c+3),j(this,c+1,c+2);return this},a.prototype.swap64=function(){const l=this.length;if(l%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let c=0;c<l;c+=8)j(this,c,c+7),j(this,c+1,c+6),j(this,c+2,c+5),j(this,c+3,c+4);return this},a.prototype.toString=function(){const l=this.length;return l===0?"":arguments.length===0?Y(this,0,l):N.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(l){if(!a.isBuffer(l))throw new TypeError("Argument must be a Buffer");return this===l?!0:a.compare(this,l)===0},a.prototype.inspect=function(){let l="";const c=i.INSPECT_MAX_BYTES;return l=this.toString("hex",0,c).replace(/(.{2})/g,"$1 ").trim(),this.length>c&&(l+=" ... "),"<Buffer "+l+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(l,c,f,g,v){if(Pt(l,Uint8Array)&&(l=a.from(l,l.offset,l.byteLength)),!a.isBuffer(l))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof l);if(c===void 0&&(c=0),f===void 0&&(f=l?l.length:0),g===void 0&&(g=0),v===void 0&&(v=this.length),c<0||f>l.length||g<0||v>this.length)throw new RangeError("out of range index");if(g>=v&&c>=f)return 0;if(g>=v)return-1;if(c>=f)return 1;if(c>>>=0,f>>>=0,g>>>=0,v>>>=0,this===l)return 0;let C=v-g,de=f-c;const Ne=Math.min(C,de),$e=this.slice(g,v),Oe=l.slice(c,f);for(let xe=0;xe<Ne;++xe)if($e[xe]!==Oe[xe]){C=$e[xe],de=Oe[xe];break}return C<de?-1:de<C?1:0};function ae(d,l,c,f,g){if(d.length===0)return-1;if(typeof c=="string"?(f=c,c=0):c>2147483647?c=2147483647:c<-2147483648&&(c=-2147483648),c=+c,ls(c)&&(c=g?0:d.length-1),c<0&&(c=d.length+c),c>=d.length){if(g)return-1;c=d.length-1}else if(c<0)if(g)c=0;else return-1;if(typeof l=="string"&&(l=a.from(l,f)),a.isBuffer(l))return l.length===0?-1:ge(d,l,c,f,g);if(typeof l=="number")return l=l&255,typeof Uint8Array.prototype.indexOf=="function"?g?Uint8Array.prototype.indexOf.call(d,l,c):Uint8Array.prototype.lastIndexOf.call(d,l,c):ge(d,[l],c,f,g);throw new TypeError("val must be string, number or Buffer")}function ge(d,l,c,f,g){let v=1,C=d.length,de=l.length;if(f!==void 0&&(f=String(f).toLowerCase(),f==="ucs2"||f==="ucs-2"||f==="utf16le"||f==="utf-16le")){if(d.length<2||l.length<2)return-1;v=2,C/=2,de/=2,c/=2}function Ne(Oe,xe){return v===1?Oe[xe]:Oe.readUInt16BE(xe*v)}let $e;if(g){let Oe=-1;for($e=c;$e<C;$e++)if(Ne(d,$e)===Ne(l,Oe===-1?0:$e-Oe)){if(Oe===-1&&(Oe=$e),$e-Oe+1===de)return Oe*v}else Oe!==-1&&($e-=$e-Oe),Oe=-1}else for(c+de>C&&(c=C-de),$e=c;$e>=0;$e--){let Oe=!0;for(let xe=0;xe<de;xe++)if(Ne(d,$e+xe)!==Ne(l,xe)){Oe=!1;break}if(Oe)return $e}return-1}a.prototype.includes=function(l,c,f){return this.indexOf(l,c,f)!==-1},a.prototype.indexOf=function(l,c,f){return ae(this,l,c,f,!0)},a.prototype.lastIndexOf=function(l,c,f){return ae(this,l,c,f,!1)};function Se(d,l,c,f){c=Number(c)||0;const g=d.length-c;f?(f=Number(f),f>g&&(f=g)):f=g;const v=l.length;f>v/2&&(f=v/2);let C;for(C=0;C<f;++C){const de=parseInt(l.substr(C*2,2),16);if(ls(de))return C;d[c+C]=de}return C}function X(d,l,c,f){return Qn(as(l,d.length-c),d,c,f)}function z(d,l,c,f){return Qn(ou(l),d,c,f)}function P(d,l,c,f){return Qn(Ta(l),d,c,f)}function Ee(d,l,c,f){return Qn(su(l,d.length-c),d,c,f)}a.prototype.write=function(l,c,f,g){if(c===void 0)g="utf8",f=this.length,c=0;else if(f===void 0&&typeof c=="string")g=c,f=this.length,c=0;else if(isFinite(c))c=c>>>0,isFinite(f)?(f=f>>>0,g===void 0&&(g="utf8")):(g=f,f=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const v=this.length-c;if((f===void 0||f>v)&&(f=v),l.length>0&&(f<0||c<0)||c>this.length)throw new RangeError("Attempt to write outside buffer bounds");g||(g="utf8");let C=!1;for(;;)switch(g){case"hex":return Se(this,l,c,f);case"utf8":case"utf-8":return X(this,l,c,f);case"ascii":case"latin1":case"binary":return z(this,l,c,f);case"base64":return P(this,l,c,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ee(this,l,c,f);default:if(C)throw new TypeError("Unknown encoding: "+g);g=(""+g).toLowerCase(),C=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Le(d,l,c){return l===0&&c===d.length?e.fromByteArray(d):e.fromByteArray(d.slice(l,c))}function Y(d,l,c){c=Math.min(d.length,c);const f=[];let g=l;for(;g<c;){const v=d[g];let C=null,de=v>239?4:v>223?3:v>191?2:1;if(g+de<=c){let Ne,$e,Oe,xe;switch(de){case 1:v<128&&(C=v);break;case 2:Ne=d[g+1],(Ne&192)===128&&(xe=(v&31)<<6|Ne&63,xe>127&&(C=xe));break;case 3:Ne=d[g+1],$e=d[g+2],(Ne&192)===128&&($e&192)===128&&(xe=(v&15)<<12|(Ne&63)<<6|$e&63,xe>2047&&(xe<55296||xe>57343)&&(C=xe));break;case 4:Ne=d[g+1],$e=d[g+2],Oe=d[g+3],(Ne&192)===128&&($e&192)===128&&(Oe&192)===128&&(xe=(v&15)<<18|(Ne&63)<<12|($e&63)<<6|Oe&63,xe>65535&&xe<1114112&&(C=xe))}}C===null?(C=65533,de=1):C>65535&&(C-=65536,f.push(C>>>10&1023|55296),C=56320|C&1023),f.push(C),g+=de}return k(f)}const L=4096;function k(d){const l=d.length;if(l<=L)return String.fromCharCode.apply(String,d);let c="",f=0;for(;f<l;)c+=String.fromCharCode.apply(String,d.slice(f,f+=L));return c}function V(d,l,c){let f="";c=Math.min(d.length,c);for(let g=l;g<c;++g)f+=String.fromCharCode(d[g]&127);return f}function W(d,l,c){let f="";c=Math.min(d.length,c);for(let g=l;g<c;++g)f+=String.fromCharCode(d[g]);return f}function ne(d,l,c){const f=d.length;(!l||l<0)&&(l=0),(!c||c<0||c>f)&&(c=f);let g="";for(let v=l;v<c;++v)g+=au[d[v]];return g}function oe(d,l,c){const f=d.slice(l,c);let g="";for(let v=0;v<f.length-1;v+=2)g+=String.fromCharCode(f[v]+f[v+1]*256);return g}a.prototype.slice=function(l,c){const f=this.length;l=~~l,c=c===void 0?f:~~c,l<0?(l+=f,l<0&&(l=0)):l>f&&(l=f),c<0?(c+=f,c<0&&(c=0)):c>f&&(c=f),c<l&&(c=l);const g=this.subarray(l,c);return Object.setPrototypeOf(g,a.prototype),g};function ee(d,l,c){if(d%1!==0||d<0)throw new RangeError("offset is not uint");if(d+l>c)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(l,c,f){l=l>>>0,c=c>>>0,f||ee(l,c,this.length);let g=this[l],v=1,C=0;for(;++C<c&&(v*=256);)g+=this[l+C]*v;return g},a.prototype.readUintBE=a.prototype.readUIntBE=function(l,c,f){l=l>>>0,c=c>>>0,f||ee(l,c,this.length);let g=this[l+--c],v=1;for(;c>0&&(v*=256);)g+=this[l+--c]*v;return g},a.prototype.readUint8=a.prototype.readUInt8=function(l,c){return l=l>>>0,c||ee(l,1,this.length),this[l]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(l,c){return l=l>>>0,c||ee(l,2,this.length),this[l]|this[l+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(l,c){return l=l>>>0,c||ee(l,2,this.length),this[l]<<8|this[l+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(l,c){return l=l>>>0,c||ee(l,4,this.length),(this[l]|this[l+1]<<8|this[l+2]<<16)+this[l+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(l,c){return l=l>>>0,c||ee(l,4,this.length),this[l]*16777216+(this[l+1]<<16|this[l+2]<<8|this[l+3])},a.prototype.readBigUInt64LE=li(function(l){l=l>>>0,vt(l,"offset");const c=this[l],f=this[l+7];(c===void 0||f===void 0)&&Yr(l,this.length-8);const g=c+this[++l]*2**8+this[++l]*2**16+this[++l]*2**24,v=this[++l]+this[++l]*2**8+this[++l]*2**16+f*2**24;return BigInt(g)+(BigInt(v)<<BigInt(32))}),a.prototype.readBigUInt64BE=li(function(l){l=l>>>0,vt(l,"offset");const c=this[l],f=this[l+7];(c===void 0||f===void 0)&&Yr(l,this.length-8);const g=c*2**24+this[++l]*2**16+this[++l]*2**8+this[++l],v=this[++l]*2**24+this[++l]*2**16+this[++l]*2**8+f;return(BigInt(g)<<BigInt(32))+BigInt(v)}),a.prototype.readIntLE=function(l,c,f){l=l>>>0,c=c>>>0,f||ee(l,c,this.length);let g=this[l],v=1,C=0;for(;++C<c&&(v*=256);)g+=this[l+C]*v;return v*=128,g>=v&&(g-=Math.pow(2,8*c)),g},a.prototype.readIntBE=function(l,c,f){l=l>>>0,c=c>>>0,f||ee(l,c,this.length);let g=c,v=1,C=this[l+--g];for(;g>0&&(v*=256);)C+=this[l+--g]*v;return v*=128,C>=v&&(C-=Math.pow(2,8*c)),C},a.prototype.readInt8=function(l,c){return l=l>>>0,c||ee(l,1,this.length),this[l]&128?(255-this[l]+1)*-1:this[l]},a.prototype.readInt16LE=function(l,c){l=l>>>0,c||ee(l,2,this.length);const f=this[l]|this[l+1]<<8;return f&32768?f|4294901760:f},a.prototype.readInt16BE=function(l,c){l=l>>>0,c||ee(l,2,this.length);const f=this[l+1]|this[l]<<8;return f&32768?f|4294901760:f},a.prototype.readInt32LE=function(l,c){return l=l>>>0,c||ee(l,4,this.length),this[l]|this[l+1]<<8|this[l+2]<<16|this[l+3]<<24},a.prototype.readInt32BE=function(l,c){return l=l>>>0,c||ee(l,4,this.length),this[l]<<24|this[l+1]<<16|this[l+2]<<8|this[l+3]},a.prototype.readBigInt64LE=li(function(l){l=l>>>0,vt(l,"offset");const c=this[l],f=this[l+7];(c===void 0||f===void 0)&&Yr(l,this.length-8);const g=this[l+4]+this[l+5]*2**8+this[l+6]*2**16+(f<<24);return(BigInt(g)<<BigInt(32))+BigInt(c+this[++l]*2**8+this[++l]*2**16+this[++l]*2**24)}),a.prototype.readBigInt64BE=li(function(l){l=l>>>0,vt(l,"offset");const c=this[l],f=this[l+7];(c===void 0||f===void 0)&&Yr(l,this.length-8);const g=(c<<24)+this[++l]*2**16+this[++l]*2**8+this[++l];return(BigInt(g)<<BigInt(32))+BigInt(this[++l]*2**24+this[++l]*2**16+this[++l]*2**8+f)}),a.prototype.readFloatLE=function(l,c){return l=l>>>0,c||ee(l,4,this.length),t.read(this,l,!0,23,4)},a.prototype.readFloatBE=function(l,c){return l=l>>>0,c||ee(l,4,this.length),t.read(this,l,!1,23,4)},a.prototype.readDoubleLE=function(l,c){return l=l>>>0,c||ee(l,8,this.length),t.read(this,l,!0,52,8)},a.prototype.readDoubleBE=function(l,c){return l=l>>>0,c||ee(l,8,this.length),t.read(this,l,!1,52,8)};function fe(d,l,c,f,g,v){if(!a.isBuffer(d))throw new TypeError('"buffer" argument must be a Buffer instance');if(l>g||l<v)throw new RangeError('"value" argument is out of bounds');if(c+f>d.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(l,c,f,g){if(l=+l,c=c>>>0,f=f>>>0,!g){const de=Math.pow(2,8*f)-1;fe(this,l,c,f,de,0)}let v=1,C=0;for(this[c]=l&255;++C<f&&(v*=256);)this[c+C]=l/v&255;return c+f},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(l,c,f,g){if(l=+l,c=c>>>0,f=f>>>0,!g){const de=Math.pow(2,8*f)-1;fe(this,l,c,f,de,0)}let v=f-1,C=1;for(this[c+v]=l&255;--v>=0&&(C*=256);)this[c+v]=l/C&255;return c+f},a.prototype.writeUint8=a.prototype.writeUInt8=function(l,c,f){return l=+l,c=c>>>0,f||fe(this,l,c,1,255,0),this[c]=l&255,c+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(l,c,f){return l=+l,c=c>>>0,f||fe(this,l,c,2,65535,0),this[c]=l&255,this[c+1]=l>>>8,c+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(l,c,f){return l=+l,c=c>>>0,f||fe(this,l,c,2,65535,0),this[c]=l>>>8,this[c+1]=l&255,c+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(l,c,f){return l=+l,c=c>>>0,f||fe(this,l,c,4,4294967295,0),this[c+3]=l>>>24,this[c+2]=l>>>16,this[c+1]=l>>>8,this[c]=l&255,c+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(l,c,f){return l=+l,c=c>>>0,f||fe(this,l,c,4,4294967295,0),this[c]=l>>>24,this[c+1]=l>>>16,this[c+2]=l>>>8,this[c+3]=l&255,c+4};function De(d,l,c,f,g){ai(l,f,g,d,c,7);let v=Number(l&BigInt(4294967295));d[c++]=v,v=v>>8,d[c++]=v,v=v>>8,d[c++]=v,v=v>>8,d[c++]=v;let C=Number(l>>BigInt(32)&BigInt(4294967295));return d[c++]=C,C=C>>8,d[c++]=C,C=C>>8,d[c++]=C,C=C>>8,d[c++]=C,c}function Ze(d,l,c,f,g){ai(l,f,g,d,c,7);let v=Number(l&BigInt(4294967295));d[c+7]=v,v=v>>8,d[c+6]=v,v=v>>8,d[c+5]=v,v=v>>8,d[c+4]=v;let C=Number(l>>BigInt(32)&BigInt(4294967295));return d[c+3]=C,C=C>>8,d[c+2]=C,C=C>>8,d[c+1]=C,C=C>>8,d[c]=C,c+8}a.prototype.writeBigUInt64LE=li(function(l,c=0){return De(this,l,c,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=li(function(l,c=0){return Ze(this,l,c,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(l,c,f,g){if(l=+l,c=c>>>0,!g){const Ne=Math.pow(2,8*f-1);fe(this,l,c,f,Ne-1,-Ne)}let v=0,C=1,de=0;for(this[c]=l&255;++v<f&&(C*=256);)l<0&&de===0&&this[c+v-1]!==0&&(de=1),this[c+v]=(l/C>>0)-de&255;return c+f},a.prototype.writeIntBE=function(l,c,f,g){if(l=+l,c=c>>>0,!g){const Ne=Math.pow(2,8*f-1);fe(this,l,c,f,Ne-1,-Ne)}let v=f-1,C=1,de=0;for(this[c+v]=l&255;--v>=0&&(C*=256);)l<0&&de===0&&this[c+v+1]!==0&&(de=1),this[c+v]=(l/C>>0)-de&255;return c+f},a.prototype.writeInt8=function(l,c,f){return l=+l,c=c>>>0,f||fe(this,l,c,1,127,-128),l<0&&(l=255+l+1),this[c]=l&255,c+1},a.prototype.writeInt16LE=function(l,c,f){return l=+l,c=c>>>0,f||fe(this,l,c,2,32767,-32768),this[c]=l&255,this[c+1]=l>>>8,c+2},a.prototype.writeInt16BE=function(l,c,f){return l=+l,c=c>>>0,f||fe(this,l,c,2,32767,-32768),this[c]=l>>>8,this[c+1]=l&255,c+2},a.prototype.writeInt32LE=function(l,c,f){return l=+l,c=c>>>0,f||fe(this,l,c,4,2147483647,-2147483648),this[c]=l&255,this[c+1]=l>>>8,this[c+2]=l>>>16,this[c+3]=l>>>24,c+4},a.prototype.writeInt32BE=function(l,c,f){return l=+l,c=c>>>0,f||fe(this,l,c,4,2147483647,-2147483648),l<0&&(l=4294967295+l+1),this[c]=l>>>24,this[c+1]=l>>>16,this[c+2]=l>>>8,this[c+3]=l&255,c+4},a.prototype.writeBigInt64LE=li(function(l,c=0){return De(this,l,c,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=li(function(l,c=0){return Ze(this,l,c,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Ke(d,l,c,f,g,v){if(c+f>d.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("Index out of range")}function qt(d,l,c,f,g){return l=+l,c=c>>>0,g||Ke(d,l,c,4),t.write(d,l,c,f,23,4),c+4}a.prototype.writeFloatLE=function(l,c,f){return qt(this,l,c,!0,f)},a.prototype.writeFloatBE=function(l,c,f){return qt(this,l,c,!1,f)};function Nt(d,l,c,f,g){return l=+l,c=c>>>0,g||Ke(d,l,c,8),t.write(d,l,c,f,52,8),c+8}a.prototype.writeDoubleLE=function(l,c,f){return Nt(this,l,c,!0,f)},a.prototype.writeDoubleBE=function(l,c,f){return Nt(this,l,c,!1,f)},a.prototype.copy=function(l,c,f,g){if(!a.isBuffer(l))throw new TypeError("argument should be a Buffer");if(f||(f=0),!g&&g!==0&&(g=this.length),c>=l.length&&(c=l.length),c||(c=0),g>0&&g<f&&(g=f),g===f||l.length===0||this.length===0)return 0;if(c<0)throw new RangeError("targetStart out of bounds");if(f<0||f>=this.length)throw new RangeError("Index out of range");if(g<0)throw new RangeError("sourceEnd out of bounds");g>this.length&&(g=this.length),l.length-c<g-f&&(g=l.length-c+f);const v=g-f;return this===l&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(c,f,g):Uint8Array.prototype.set.call(l,this.subarray(f,g),c),v},a.prototype.fill=function(l,c,f,g){if(typeof l=="string"){if(typeof c=="string"?(g=c,c=0,f=this.length):typeof f=="string"&&(g=f,f=this.length),g!==void 0&&typeof g!="string")throw new TypeError("encoding must be a string");if(typeof g=="string"&&!a.isEncoding(g))throw new TypeError("Unknown encoding: "+g);if(l.length===1){const C=l.charCodeAt(0);(g==="utf8"&&C<128||g==="latin1")&&(l=C)}}else typeof l=="number"?l=l&255:typeof l=="boolean"&&(l=Number(l));if(c<0||this.length<c||this.length<f)throw new RangeError("Out of range index");if(f<=c)return this;c=c>>>0,f=f===void 0?this.length:f>>>0,l||(l=0);let v;if(typeof l=="number")for(v=c;v<f;++v)this[v]=l;else{const C=a.isBuffer(l)?l:a.from(l,g),de=C.length;if(de===0)throw new TypeError('The value "'+l+'" is invalid for argument "value"');for(v=0;v<f-c;++v)this[v+c]=C[v%de]}return this};const dt={};function mt(d,l,c){dt[d]=class extends c{constructor(){super(),Object.defineProperty(this,"message",{value:l.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${d}]`,this.stack,delete this.name}get code(){return d}set code(g){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:g,writable:!0})}toString(){return`${this.name} [${d}]: ${this.message}`}}}mt("ERR_BUFFER_OUT_OF_BOUNDS",function(d){return d?`${d} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),mt("ERR_INVALID_ARG_TYPE",function(d,l){return`The "${d}" argument must be of type number. Received type ${typeof l}`},TypeError),mt("ERR_OUT_OF_RANGE",function(d,l,c){let f=`The value of "${d}" is out of range.`,g=c;return Number.isInteger(c)&&Math.abs(c)>2**32?g=Ve(String(c)):typeof c=="bigint"&&(g=String(c),(c>BigInt(2)**BigInt(32)||c<-(BigInt(2)**BigInt(32)))&&(g=Ve(g)),g+="n"),f+=` It must be ${l}. Received ${g}`,f},RangeError);function Ve(d){let l="",c=d.length;const f=d[0]==="-"?1:0;for(;c>=f+4;c-=3)l=`_${d.slice(c-3,c)}${l}`;return`${d.slice(0,c)}${l}`}function Ot(d,l,c){vt(l,"offset"),(d[l]===void 0||d[l+c]===void 0)&&Yr(l,d.length-(c+1))}function ai(d,l,c,f,g,v){if(d>c||d<l){const C=typeof l=="bigint"?"n":"";let de;throw l===0||l===BigInt(0)?de=`>= 0${C} and < 2${C} ** ${(v+1)*8}${C}`:de=`>= -(2${C} ** ${(v+1)*8-1}${C}) and < 2 ** ${(v+1)*8-1}${C}`,new dt.ERR_OUT_OF_RANGE("value",de,d)}Ot(f,g,v)}function vt(d,l){if(typeof d!="number")throw new dt.ERR_INVALID_ARG_TYPE(l,"number",d)}function Yr(d,l,c){throw Math.floor(d)!==d?(vt(d,c),new dt.ERR_OUT_OF_RANGE("offset","an integer",d)):l<0?new dt.ERR_BUFFER_OUT_OF_BOUNDS:new dt.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${l}`,d)}const ru=/[^+/0-9A-Za-z-_]/g;function nu(d){if(d=d.split("=")[0],d=d.trim().replace(ru,""),d.length<2)return"";for(;d.length%4!==0;)d=d+"=";return d}function as(d,l){l=l||1/0;let c;const f=d.length;let g=null;const v=[];for(let C=0;C<f;++C){if(c=d.charCodeAt(C),c>55295&&c<57344){if(!g){if(c>56319){(l-=3)>-1&&v.push(239,191,189);continue}else if(C+1===f){(l-=3)>-1&&v.push(239,191,189);continue}g=c;continue}if(c<56320){(l-=3)>-1&&v.push(239,191,189),g=c;continue}c=(g-55296<<10|c-56320)+65536}else g&&(l-=3)>-1&&v.push(239,191,189);if(g=null,c<128){if((l-=1)<0)break;v.push(c)}else if(c<2048){if((l-=2)<0)break;v.push(c>>6|192,c&63|128)}else if(c<65536){if((l-=3)<0)break;v.push(c>>12|224,c>>6&63|128,c&63|128)}else if(c<1114112){if((l-=4)<0)break;v.push(c>>18|240,c>>12&63|128,c>>6&63|128,c&63|128)}else throw new Error("Invalid code point")}return v}function ou(d){const l=[];for(let c=0;c<d.length;++c)l.push(d.charCodeAt(c)&255);return l}function su(d,l){let c,f,g;const v=[];for(let C=0;C<d.length&&!((l-=2)<0);++C)c=d.charCodeAt(C),f=c>>8,g=c%256,v.push(g),v.push(f);return v}function Ta(d){return e.toByteArray(nu(d))}function Qn(d,l,c,f){let g;for(g=0;g<f&&!(g+c>=l.length||g>=d.length);++g)l[g+c]=d[g];return g}function Pt(d,l){return d instanceof l||d!=null&&d.constructor!=null&&d.constructor.name!=null&&d.constructor.name===l.name}function ls(d){return d!==d}const au=function(){const d="0123456789abcdef",l=new Array(256);for(let c=0;c<16;++c){const f=c*16;for(let g=0;g<16;++g)l[f+g]=d[c]+d[g]}return l}();function li(d){return typeof BigInt>"u"?lu:d}function lu(){throw new Error("BigInt not supported")}})(tu);var Nl;typeof window<"u"&&(window.Buffer||(window.Buffer=tu.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Nl=window.process)!=null&&Nl.env||(window.process={env:{}}));const Eg=G.getBlockchainApiUrl();function T2({projectId:i}){return function(t){if(!Jt.WalletConnectRpcChainIds.includes(t.id))return null;const r=`${Eg}/v1/?chainId=${te.EIP155}:${t.id}&projectId=${i}`;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}export{te as C,S2 as W,T2 as w};
