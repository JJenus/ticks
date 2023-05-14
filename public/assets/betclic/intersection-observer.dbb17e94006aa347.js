!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var f=function(t){for(var e=window.document,i=p(e);i;)i=p(e=i.ownerDocument);return e}(),g=[],v=null,c=null;o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o._setupCrossOriginUpdater=function(){return v||(v=function(t,e){c=t&&e?I(t,e):{top:0,bottom:0,left:0,right:0,width:0,height:0},g.forEach(function(i){i._checkForIntersections()})}),v},o._resetCrossOriginUpdater=function(){v=null,c=null},o.prototype.observe=function(t){if(!this._observationTargets.some(function(i){return i.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(i,n,r){if("number"!=typeof i||isNaN(i)||i<0||i>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return i!==r[n-1]})},o.prototype._parseRootMargin=function(t){var i=(t||"0px").split(/\s+/).map(function(n){var r=/^(-?\d*\.?\d+)(px|%)$/.exec(n);if(!r)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(r[1]),unit:r[2]}});return i[1]=i[1]||i[0],i[2]=i[2]||i[0],i[3]=i[3]||i[1],i},o.prototype._monitorIntersections=function(t){var e=t.defaultView;if(e&&-1==this._monitoringDocuments.indexOf(t)){var i=this._checkForIntersections,n=null,r=null;if(this.POLL_INTERVAL?n=e.setInterval(i,this.POLL_INTERVAL):(y(e,"resize",i,!0),y(t,"scroll",i,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in e&&(r=new e.MutationObserver(i)).observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(t),this._monitoringUnsubscribes.push(function(){var h=t.defaultView;h&&(n&&h.clearInterval(n),E(h,"resize",i,!0)),E(t,"scroll",i,!0),r&&r.disconnect()}),t!=(this.root&&(this.root.ownerDocument||this.root)||f)){var s=p(t);s&&this._monitorIntersections(s.ownerDocument)}}},o.prototype._unmonitorIntersections=function(t){var e=this._monitoringDocuments.indexOf(t);if(-1!=e){var i=this.root&&(this.root.ownerDocument||this.root)||f;if(!this._observationTargets.some(function(s){var h=s.element.ownerDocument;if(h==t)return!0;for(;h&&h!=i;){var a=p(h);if((h=a&&a.ownerDocument)==t)return!0}return!1})){var r=this._monitoringUnsubscribes[e];if(this._monitoringDocuments.splice(e,1),this._monitoringUnsubscribes.splice(e,1),r(),t!=i){var u=p(t);u&&this._unmonitorIntersections(u.ownerDocument)}}}},o.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},o.prototype._checkForIntersections=function(){if(this.root||!v||c){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(i){var n=i.element,r=d(n),u=this._rootContainsTarget(n),s=i.entry,h=t&&u&&this._computeTargetAndRootIntersection(n,r,e),a=null;this._rootContainsTarget(n)?(!v||this.root)&&(a=e):a={top:0,bottom:0,left:0,right:0,width:0,height:0};var l=i.entry=new b({time:window.performance&&performance.now&&performance.now(),target:n,boundingClientRect:r,rootBounds:a,intersectionRect:h});s?t&&u?this._hasCrossedThreshold(s,l)&&this._queuedEntries.push(l):s&&s.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},o.prototype._computeTargetAndRootIntersection=function(t,e,i){if("none"!=window.getComputedStyle(t).display){for(var n=e,r=w(t),u=!1;!u&&r;){var s=null,h=1==r.nodeType?window.getComputedStyle(r):{};if("none"==h.display)return null;if(r==this.root||9==r.nodeType)if(u=!0,r==this.root||r==f)v&&!this.root?!c||0==c.width&&0==c.height?(r=null,s=null,n=null):s=c:s=i;else{var a=w(r),l=a&&d(a),O=a&&this._computeTargetAndRootIntersection(a,l,i);l&&O?(r=a,s=I(l,O)):(r=null,n=null)}else{var D=r.ownerDocument;r!=D.body&&r!=D.documentElement&&"visible"!=h.overflow&&(s=d(r))}if(s&&(n=L(s,n)),!n)break;r=r&&w(r)}return n}},o.prototype._getRootRect=function(){var t;if(this.root&&!R(this.root))t=d(this.root);else{var e=R(this.root)?this.root:f,i=e.documentElement,n=e.body;t={top:0,left:0,right:i.clientWidth||n.clientWidth,width:i.clientWidth||n.clientWidth,bottom:i.clientHeight||n.clientHeight,height:i.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(n,r){return"px"==n.unit?n.value:n.value*(r%2?t.width:t.height)/100}),i={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return i.width=i.right-i.left,i.height=i.bottom-i.top,i},o.prototype._hasCrossedThreshold=function(t,e){var i=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(i!==n)for(var r=0;r<this.thresholds.length;r++){var u=this.thresholds[r];if(u==i||u==n||u<i!=u<n)return!0}},o.prototype._rootIsInDom=function(){return!this.root||T(f,this.root)},o.prototype._rootContainsTarget=function(t){var e=this.root&&(this.root.ownerDocument||this.root)||f;return T(e,t)&&(!this.root||e==t.ownerDocument)},o.prototype._registerInstance=function(){g.indexOf(this)<0&&g.push(this)},o.prototype._unregisterInstance=function(){var t=g.indexOf(this);-1!=t&&g.splice(t,1)},window.IntersectionObserver=o,window.IntersectionObserverEntry=b}function p(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch{return null}}function b(t){this.time=t.time,this.target=t.target,this.rootBounds=_(t.rootBounds),this.boundingClientRect=_(t.boundingClientRect),this.intersectionRect=_(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,i=e.width*e.height,n=this.intersectionRect;this.intersectionRatio=i?Number((n.width*n.height/i).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType&&9!=i.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=function x(t,e){var i=null;return function(){i||(i=setTimeout(function(){t(),i=null},e))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map(function(n){return n.value+n.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function y(t,e,i,n){"function"==typeof t.addEventListener?t.addEventListener(e,i,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,i)}function E(t,e,i,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,i,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,i)}function L(t,e){var i=Math.max(t.top,e.top),n=Math.min(t.bottom,e.bottom),r=Math.max(t.left,e.left),u=Math.min(t.right,e.right),s=u-r,h=n-i;return s>=0&&h>=0&&{top:i,bottom:n,left:r,right:u,width:s,height:h}||null}function d(t){var e;try{e=t.getBoundingClientRect()}catch{}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function _(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function I(t,e){var i=e.top-t.top,n=e.left-t.left;return{top:i,left:n,height:e.height,width:e.width,bottom:i+e.height,right:n+e.width}}function T(t,e){for(var i=e;i;){if(i==t)return!0;i=w(i)}return!1}function w(t){var e=t.parentNode;return 9==t.nodeType&&t!=f?p(t):(e&&e.assignedSlot&&(e=e.assignedSlot.parentNode),e&&11==e.nodeType&&e.host?e.host:e)}function R(t){return t&&9===t.nodeType}}();