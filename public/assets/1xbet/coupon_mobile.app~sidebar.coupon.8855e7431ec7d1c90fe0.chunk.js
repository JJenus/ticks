(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[503],{723:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(4),r=n.n(o),i=n(5),c=n.n(i),a=n(23),u=n.n(a),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return resolve({Success:!1,Error:666})};r()(this,e),this.list=[],this.url=t,this.callback=n}return c()(e,[{key:"add",value:function(e){this.list.push(e)}},{key:"createPromise",value:function(e){var t=this;return new Promise((function(n){u.a.post(t.url,e).then((function(o){t.callback(o.data,n,e)})).catch((function(e){console.error(e),n({Success:!1,Error:666})}))}))}},{key:"sendRequest",value:function(){var e=this;return Promise.all(this.list.map((function(t){return e.createPromise(t)}))).then((function(t){return e.list=[],t}))}}]),e}()},825:function(e,t,n){e.exports=n(35)(46)},838:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(46),r=n.n(o),i=n(0),c=n.n(i),a=n(221),u=n(817);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={methods:{addBetToNewCoupon:function(e,t,n,o,i){var c=t.Opp2?t.Opp1+" - "+t.Opp2:t.Opp1,s=Object(u.a)({gameNumber:t.Num,sportName:t.SportName,championshipName:t.Champ,gameVid:t.GameVid,additionalInfo:t.DopInfo,isSingleOpponent:!1===Boolean(t.Opp2)});this.$store.dispatch(a.a+"ACTION_ADD_BET",{bet:p(p({},e),{},{sport_name:t.SportName,gameNum:t.Num,gameChamp:t.Champ,id_sport:t.SportId,opp1:t.Opp1,opp2:t.Opp2,Opp1Id:t.Opp1Id,Opp2Id:t.Opp2Id,Opp1Image:t.Opp1Image,Opp2Image:t.Opp2Image,GameId:e.idGame?e.idGame:t.Id.toString(),sportNameText:t.sportNameText?t.sportNameText:s,opp:void 0!==t.opp&&"object"!==r()(t.opp)?t.opp:c,nameGroup:o,nameBet:i,Direction:n,InstrumentId:e.InstrumentId||0,Seconds:e.Seconds||0,Price:e.Price||0,Expired:e.Expired||0,subSportId:t.SubSportId||""}),is_skip_one_click:!!e.ExpressNum})}}}},915:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(47),c=n(221),a=n(19);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var s=Object(i.createNamespacedHelpers)(c.b).mapMutations;t.a={props:{userId:{type:[Number,String],default:null},language:{type:String,default:"en"},coefViewId:{type:Number,default:0},timeZone:{type:Number,default:0},fastCouponSetting:{type:Boolean,default:!1},activeAccount:{type:[Object,null],default:null},userRefId:{type:Number,default:0},currentSection:{type:String,default:""},isDownCouponSettingEnabled:{type:Boolean,default:!1},isLeftMenuVisible:{type:Boolean,default:!1},isRightMenuVisible:{type:Boolean,default:!1},isShowMobileAppHeader:{type:Boolean,default:!0},isShowIdentificationHeader:{type:Boolean,default:!0},isMobileAppDownloadPopupVisible:{type:Boolean,default:!1}},watch:{userId:function(e){this.setUserId(e)},language:function(e){this.setLanguage(e)},coefViewId:function(e){this.setCoefViewId(e)},timeZone:function(e){this.setTimeZone(e)},fastCouponSetting:function(e){this.setGlobalFastCoupon(e)},activeAccount:function(e){this.setActiveAccount(e)},configUserRefId:function(e){this.setUserRefId(e)},currentSection:function(e){this.setCurrentSection(e)}},beforeMount:function(){this.setUserId(this.userId),this.setLanguage(this.language),this.setCoefViewId(this.coefViewId),this.setTimeZone(this.timeZone),this.setGlobalFastCoupon(this.fastCouponSetting),this.setActiveAccount(this.activeAccount),this.setUserRefId(this.configUserRefId),this.setCurrentSection(this.currentSection)},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s({setUserId:a.Sb,setLanguage:a.mb,setCoefViewId:a.J,setTimeZone:a.Qb,setGlobalFastCoupon:a.ab,setActiveAccount:a.p,setUserRefId:a.Tb,setCurrentSection:a.U}))}},917:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var o=n(30),r=n.n(o),i=n(0),c=n.n(i),a=n(147),u=n.n(a),s=n(306),p=n.n(s),l=n(723),f=n(47),m=n(825),d=n.n(m);n(702);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={name:"AfterCoupon",components:{bet:function(){return n.e(1675).then(n.bind(null,4046))}},props:{bets:{type:Array,default:function(){return[]}},coupons:{type:Array,default:function(){return[]}}},mounted:function(){var e=this;d.a.initialize(this.$refs.betList,{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20}),document.addEventListener("modal.close",(function(){e.$emit("close")}))},methods:{getErrorText:function(e){return e||""}},computed:b(b({},Object(f.mapGetters)("builder/dictionary",["d"])),{},{game:function(){var e=this;return function(t){return e.bets.find((function(e){return e.key===t}))}}})},y=n(24),O=Object(y.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"builder-coupon-modal builder-modal"},[n("div",{staticClass:"builder-coupon-modal__header"},[n("div",{staticClass:"builder-coupon-modal__title"}),e._v(" "),n("button",{staticClass:"builder-coupon-modal__close",attrs:{role:"button"},on:{click:function(t){return e.$emit("close")}}},[n("i",{staticClass:"fa fa-times"})])]),e._v(" "),n("div",{staticClass:"builder-coupon-modal__content"},[n("div",{ref:"betList",staticClass:"o-coupon-list"},e._l(e.coupons,(function(t,o){return n("bet",{key:o,attrs:{id:t.id,success:t.success,game:e.game(t.key),errText:e.getErrorText(t.error)}})})),1)]),e._v(" "),n("div",{staticClass:"builder-coupon-modal__footer"},[n("div",{staticClass:"builder-coupon-modal__btn",on:{click:function(t){return e.$emit("close")}}},[e._v("\n            ок\n        ")])])])}),[],!1,null,null,null).exports,g="/LineFeed/GetBetBuilderElemsNew",_="/LiveFeed/GetBetBuilderElemsNew",k=new(n(109).a);var I=n(42),C=n(51),S=n(75),j=n(37),w=n(34),N=n(19),E=n(157),P=n(55);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={},A={namespaced:!0,state:{trees:{},choise_list:{},markets:[],active_type:-1,active_market:-1,game:null,active_game:0,active_key:"",templates:{},removedAddr:{},has_block:!1,precoupon:[],opp:"",sportNameText:"",coupon:[],freeze:!1,CONST_NOT_SELECT_TYPE:-1,current_coef:0,is_first_bet:!0},actions:{changeTree:function(e,t){var n=t.value,o=p()({},u()(e.state.trees,t.key,{})),r=u()(e.state.choise_list,t.key,[]).map((function(e){return e.Value})).join(","),i=[],c="";if(function e(t,n){var o,r,c,a;if(t.T=null!==(o=t.T)&&void 0!==o?o:0,t.P=null!==(r=t.P)&&void 0!==r?r:0,t.S=null!==(c=t.S)&&void 0!==c?c:"",!t.parent){var u=t.P;t.parent=n?n.parent.concat(u):[u]}i.push(t.parent),null===(a=t.N)||void 0===a||a.forEach((function(n){e(n,t)}))}(n),i.forEach((function(e){-1!==r.indexOf(e)&&(c=e)})),!c||!c&&c.join(",")===r){var a=null;if(Object.keys(o).length&&function e(t){var n;t.parent.join(",")===c.join(",")&&(a=t),null===(n=t.N)||void 0===n||n.forEach(e)}(o),a){!function e(t){if(t.parent.join(",")===c.join(",")){var n,o,i,u=null===(n=a.N)||void 0===n?void 0:n.find((function(e){return-1!==r.indexOf(e.parent.join(","))}));if(u)u.removed=!0,u.N=null===(o=u.N)||void 0===o?void 0:o.map((function e(t){var n;return r.includes(t.parent.join(","))?(t.removed=!0,t.N=null===(n=t.N)||void 0===n?void 0:n.map(e).filter((function(e){return e})),t):null})).filter((function(e){return e})),null===(i=t.N)||void 0===i||i.push(u)}else{var s;null===(s=t.N)||void 0===s||s.forEach(e)}}(n)}}e.commit("setTree",{value:n,key:t.key})},getEvent:function(e){var t=e.commit,n=e.dispatch,o=e.getters,r=e.state,i=e.rootGetters;L.getEvent&&(clearInterval(L.getEvent),L.getEvent=null);var c,a=o.isLive,u=a?_:g,s=Object(E.b)(u);s.add("I",r.active_game),s.add("E",r.precoupon.map((function(e){return{CL:e.choise_list,T:e.market}}))),s.add("L",i[P.d+"/globalGetLanguage"]),t("setActiveType",-1);var p=Object(E.a)(s);(c=function(){(function(e,t){var n=e?_:g;return k.postRequest(n,{params:t})})(a,p).then((function(e){e.data.Success&&(t("setMarkets",e.data.Value.map((function(e){var t,n,o;return{I:null!==(t=e.T)&&void 0!==t?t:0,N:null!==(n=null===(o=e.N)||void 0===o?void 0:o.toString())&&void 0!==n?n:""}}))),e.data.Value.forEach((function(e){t("setTemplate",{value:e.P,key:e.T||0}),n("changeTree",{value:e.ET,key:e.T||0}),o.choise_list.length||t("setChoise",{value:e.CL,key:e.T||0}),(e.T||0)===o.activeMarket&&-1===o.activeType&&n("setActiveTypeByTemplate",e.P)})))}))})(),L.getEvent=setInterval(c,3e4)},setActiveTypeByTemplate:function(e,t){(0,e.commit)("setActiveType",parseInt(t.replace(/^\{?(\d+).*$/,"$1"),10))},setActiveGame:function(e,t){e.commit("setActiveGame",t),e.dispatch("getEvent")},setActiveMarket:function(e,t){(0,e.commit)("setActiveMarket",t)},addBet:function(e){var t=e.state,n=e.commit,o=e.getters;return new Promise((function(e){o.adressList.includes(o.choisen.join(","))?(t.precoupon.find((function(e){return o.activeMarket.toString()+o.choisen.join(",")===e.key}))||n("setPrecoupon",{choise_list:o.choise_list.map((function(e){return B({},e)})),template:u()(t.templates,t.active_market,""),market:o.activeMarket,key:o.activeMarket.toString()+o.choisen.join(",")}),e({success:!0}),n("setActiveMarket",-1)):e({success:!1})}))},changeBet:function(e,t){var n=e.commit,o=e.getters.precoupon.find((function(e){return e.key===t.key}));n("setActiveMarket",o.market),n("setChoise",{key:o.market,value:o.choise_list}),n("setActiveType",t.type),n("setActiveKey",t.key)},addToCoupon:function(e){var t=e.state,n=e.getters,o=e.dispatch;if(!window.CLOSE_COUPON&&t.precoupon.length&&!t.precoupon.find((function(e){return!!e.block}))){var r={};r.I=n.activeGame,r.summ=0,r.E=t.precoupon.map((function(e){return{params:{CL:e.choise_list,T:e.market},name:n.templateFunc(e.template,e.choise_list,u()(t.trees,e.market,{})).map((function(e){return e.name})).join(" "),opp:t.opp,sportNameText:t.sportNameText}})),r.key=(new Date).toISOString(),r.cf=t.current_coef,r.nameBet=r.E.reduce((function(e,t){return"".concat(t.name,"\n ").concat(e)}),""),o("setCoupon",[r])}},setCoupon:function(e,t){var n=e.commit,o=e.dispatch;t.forEach((function(e){n("setCoupon",e),n("clearPreCoupon"),o("updateCoupon"),o("addBetToNewCoupon",e)}))},updateCoupon:function(e){var t=e.state,n=e.commit,o=e.rootState,r=e.getters,i=e.rootGetters,c=function(e,t,n){e.Success?t({success:!0,cf:e.Value.Coef,koef:o.GLOBAL.cfview?e.Value.CoefView:e.Value.Coef,max_bet:e.Value.maxBet,min_bet:e.Value.minBet,key:n.key}):t({success:!1,key:n.key,cf:0})};L.updateCoupon&&(clearInterval(L.updateCoupon),L.updateCoupon=null);var a=function(){var e=r.isLive?w.i.LIVE:w.i.LINE,a=new l.a("/LiveUtil/UpdateCouponBuilder",c);t.coupon.forEach((function(t){a.add({Vid:w.h.COUPON_TYPES.ORDINARS,BuilderCoupon:{I:t.I,E:t.E.map((function(e){return e.params}))},Lng:"ru",CfView:o.GLOBAL.cfview,Coef:t.cf,UserId:i["global/globalGetUserId"],key:t.key,partner:o.GLOBAL.refId,Kind:e,IsNewBuilder:!0})})),a.sendRequest().then((function(e){e.forEach((function(e){n("updateCoef",e),n("coupon/"+N.qb,{value:e.min_bet},{root:!0}),n("coupon/"+N.pb,{value:e.max_bet},{root:!0}),n("coupon/"+N.N,{coef:e.cf},{root:!0})}))}))};a(),L.updateCoupon=setInterval(a,3e4)},placeBet:function(e){var t=e.state,n=e.commit,o=e.getters,r=e.rootState;if(user_balance.getMainUserId())if(t.coupon.filter((function(e){return isNaN(parseFloat(e.summ))&&!isFinite(e.summ)})).length)Object(C.alerts)("",o["dictionary/d"].incorrect_summ);else{n("setFreeze",!0);var i=o.isLive?w.i.LIVE:w.i.LINE,c=new l.a("/datalinelive/putbetscommon",(function(e,t,n){e.Success?(user_balance.updateBalance(n.UserId,e.Value.Balance),t({success:!0,key:n.coupon.key,id:e.Value.Id,cf:e.Value.Coupon.Coef,summ:n.coupon.Summ})):t({success:!1,error:130===e.ErrorCode?o["dictionary/d"].repeatBet:e.Error,key:n.coupon.key})}));t.coupon.forEach((function(e){c.add({coupon:{Vid:9,BuilderCoupon:{I:e.I,E:e.E.map((function(e){return e.params}))},Lng:I.get("lng","ru"),CfView:r.GLOBAL.cfview,UserId:user_balance.getMainUserId(),key:e.key,Summ:e.summ,Source:50,CheckCf:0,Coef:e.cf,hash:window.Core.cookie.get("uhash",""),is_builder:!0,Kind:i,IsNewBuilder:!0}})})),c.sendRequest().then((function(e){var t=2==I.get("is_rtl",1)?{name:"rtl-coupon-modal",classes:"rtl-coupon-modal"}:{};app.$modal.show(O,{coupons:e,bets:o.coupon},t),n("setFreeze",!1),n("clearCoupon")}))}else Object(C.alerts)("",o["dictionary/d"].pleaseAuth)},destroy:function(e){var t,n=e.state,o=e.commit,r=e.dispatch,i=Object.keys(L);i.length&&i.forEach((function(e){clearInterval(L[e])}));var c=null===(t=n.coupon.bets)||void 0===t?void 0:t.some((function(e){return e.is_builder}));n.is_first_bet||c||(r("coupon/"+j.f,{},{root:!0}),o("setFirstBet",!0)),o("clearAll")},setLastBetBlock:function(e,t){(0,e.commit)("setBetBlock",t)},addBetToNewCoupon:function(e,t){var n=e.state,o=e.getters,r=e.dispatch,i=e.commit;t.E||(t=n.coupon.find((function(e){return e.key===t.key}))),n.is_first_bet&&i("setFirstBet");var c=o.getPrepareBet(t);r("coupon/"+j.j,{sob_id:c.sob_id},{root:!0}),r("coupon/"+j.a,{bet:c,is_skip_update:!0},{root:!0}),r("coupon/"+j.C,{type:w.h.COUPON_TYPES.ORDINARS},{root:!0})}},getters:{tree:function(e){return u()(e.trees,e.active_market,{})},choise_list:function(e){return u()(e.choise_list,e.active_market,[])},markets:function(e){return e.markets},templateFunc:function(e,t){return function(e,n,o){return e.length?e.split(/{|}/g).map((function(e){return isNaN(parseInt(e))?e:parseInt(e)})).map((function(e){if("number"==typeof e){var r="",i=n[Symbol.iterator](),c=!1,a=i.next();return function n(o,a){if(a.done||(a=a.value),e===a.Key&&a.Value===o.P&&(r=t.getName(e,o.P,o.S?o.S:""),c=o.removed),o.T===a.Key&&a.Value===o.P){var u,s=i.next();null===(u=o.N)||void 0===u||u.forEach((function(e){n(e,s)}))}}(o,a),{name:r,removed:c,type:e}}return{name:e,type:-1}})):[]}},template:function(e,t){var n=u()(e.templates,e.active_market,""),o=u()(e.choise_list,e.active_market,[]);return t.templateFunc(n,o,t.tree)},game:function(e){return e.game},activeGame:function(e){return e.active_game},activeMarket:function(e){return e.active_market},activeType:function(e){return e.active_type},getName:function(e){return function(e,t,n){if(n)return n;switch(e){case 1:return t?"":dictionary.mainGame;case 0:case 2:case 3:case 4:return"";case 5:return t}}},marketName:function(e){var t=e.markets.find((function(t){return t.I===e.active_market}));return t?t.N:""},choisen:function(e,t){return t.choise_list.map((function(e){return e.Value}))},precoupon:function(e,t){return e.precoupon.map((function(n){return(n=p()({},n)).template=t.templateFunc(n.template,n.choise_list,u()(e.trees,n.market,{})),n}))},adressList:function(e,t){if(!Object.keys(t.tree).length)return[];var n=[];return function e(t){var o;t.removed||n.push(t.parent.join(",")),null===(o=t.N)||void 0===o||o.forEach((function(t){e(t)}))}(t.tree),n},selectedMarkets:function(e,t){var n=Object.keys(e.choise_list).map((function(e){return parseInt(e)})).sort((function(e,t){return e-t}));return e.active_market===t.CONST_NOT_SELECT?n.join(","):r()(new Set(n.concat(e.active_market))).sort((function(e,t){return e-t})).join(",")},coupon:function(e){return e.coupon},freeze:function(e){return e.freeze},CONST_NOT_SELECT:function(e){return e.CONST_NOT_SELECT_TYPE},getPrepareBet:function(e,t){var n=t.isLive?w.i.LIVE:w.i.LINE;return function(o){var i=t.game;if(!i)return o;var c,a=B(B({},o),{},{Type:w.h.COUPON_TYPES.ORDINARS,Vid:w.h.COUPON_TYPES.ORDINARS,Kind:n,PlayerId:0,Coef:o.cf,opp:e.opp,opp1:i.Opp1,opp2:i.Opp2,Opp1Id:i.Opp1Id,Opp2Id:i.Opp2Id,Opp1Image:i.Opp1Image,Opp2Image:i.Opp2Image,id_sport:i.SportId,GameId:i.MainGameId||i.Id,sport_name:i.SportName,nameGroup:"",Param:(c=o.E,c.reduce((function(e,t){return[].concat(r()(e),r()(t.params.CL))}),[]).reduce((function(e,t){return e+t.Value}),0)),sportNameText:e.sportNameText,is_builder:!0,BuilderCoupon:{I:o.I,E:o.E.map((function(e){return e.params}))}});return a.sob_id=Object(S.e)({bet:a}),a}},is_first_bet:function(e){return e.is_first_bet},isLive:function(e){var t;return null==e||null===(t=e.game)||void 0===t?void 0:t.is_live},templates:function(e){return e.templates}},mutations:{clearAll:function(e,t){e.trees={},e.markets={},e.choise_list={},e.precoupon=[],e.coupon=[],e.templates={},e.active_market=-1},updateCoef:function(e,t){e.coupon=e.coupon.map((function(e){return e.key===t.key&&(e.cf=t.cf,e.koef=t.koef),e}))},setMarkets:function(e,t){e.markets=t},setTree:function(e,t){if(!Object.keys(t).length)return[];window.Vue.set(e.trees,t.key,t.value)},setTemplate:function(e,t){window.Vue.set(e.templates,t.key,t.value)},setChoise:function(e,t){window.Vue.set(e.choise_list,t.key,t.value)},setActiveMarket:function(e,t){e.active_market=t},setActiveGame:function(e,t){e.game=t,e.active_game=t.MainGameId||t.Id},setActiveType:function(e,t){e.active_type=t},setPrecoupon:function(e,t){e.active_key?(e.precoupon=e.precoupon.map((function(n){return n.key===e.active_key&&(n=t),n})),e.active_key=""):e.precoupon.push(t)},clearPreCoupon:function(e){e.precoupon=[]},removePreBet:function(e,t){e.precoupon=e.precoupon.filter((function(e){return e.key!==t}))},removeBet:function(e,t){e.coupon=e.coupon.filter((function(e){return e.key!==t}))},setActiveKey:function(e,t){e.active_key=t},setOpp:function(e,t){e.opp=t},setSportNameText:function(e,t){e.sportNameText=t},setCoupon:function(e,t){e.coupon.push(t)},setSummBet:function(e,t){e.coupon=e.coupon.map((function(e){return e.key===t.key&&(e.summ=t.summ),e}))},clearCoupon:function(e){e.coupon=[]},setFreeze:function(e,t){e.freeze=t},setBetBlock:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.precoupon.length-1;e.precoupon=e.precoupon.map((function(e,o){return o===n&&(e.block=t),e}))},setCurrentCoef:function(e,t){e.current_coef=t},setFirstBet:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.is_first_bet=t}},modules:{dictionary:{namespaced:!0,state:{translate:{}},mutations:{setDictionary:function(e,t){e.translate=t}},actions:{setDictionary:function(e,t){(0,e.commit)("setDictionary",t)}},getters:{dictionary:function(e){return e.translate}}}}}}}]);