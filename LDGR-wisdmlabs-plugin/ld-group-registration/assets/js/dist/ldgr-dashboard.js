!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t(2);var n,o=t(1);var l=new((n=o)&&n.__esModule?n:{default:n}).default;l.tabs(),l.toggleCheckbox(),l.searchfromList(),l.searchGroups(),l.scrolToElement(),l.replaceContent(".cnsg-btn",".ldgr-sub-groups-content",".ldgr-create-new-sg"),l.replaceContent(".edit-sub-group-button",".ldgr-sub-groups-content",".ldgr-create-new-sg"),l.replaceContent(".ldgr-cngc-btn",".ldgr-group-code-content",".ldgr-group-code-create-section"),l.replaceContent(".ldgr-edit-code",".ldgr-group-code-content",".ldgr-group-code-edit-section"),l.replaceContent(".create-sg-cancel",".ldgr-create-new-sg",".ldgr-sub-groups-content"),l.replaceContent(".edit-sg-cancel",".ldgr-edit-sg",".ldgr-sub-groups-content"),l.replaceContent(".gcs-cancel",".ldgr-group-code-setting",".ldgr-group-code-content"),l.openLightbox(".ldgr-edit-group","#ldgr-edit-group-popup"),l.openLightbox(".enroll-new-user","#ldgr-enroll-users-popup"),l.closeLightbox(".ldgr-icon-Close",".ldgr-lightbox"),l.closeLightbox(".upload-csv-cancel","#ldgr-enroll-users-popup"),l.closeLightbox(".add-usr-cancel","#ldgr-enroll-users-popup"),l.closeLightbox(".edit-group-cancel","#ldgr-edit-group-popup"),l.closePopupOutsideClick(),l.removeUsers(),l.addMoreUsers(),l.pagination()},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();var o=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"tabs",value:function(){jQuery(document).on("click",".ldgr-tabs li",(function(){var e=jQuery(this).attr("data-name");jQuery(this).parent().find("li").removeClass("current"),jQuery(this).addClass("current"),jQuery(".ldgr-tabs-content > div").removeClass("current"),jQuery(".ldgr-tabs-content").find("[data-name="+e+"]").addClass("current")}))}},{key:"toggleCheckbox",value:function(){jQuery(document).on("click",".empty-bg",(function(){jQuery(this).parent().toggleClass("enabled"),jQuery(this).trigger("checkboxToggle")}))}},{key:"searchfromList",value:function(){jQuery(".ldgr-search").on("keyup",(function(){var e=jQuery(this).val().toLowerCase();jQuery(this).parents(".ldgr-search-list-wrap").find(".ldgr-chk-item").filter((function(){jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(e)>-1)}))}))}},{key:"searchGroups",value:function(){var e=this;jQuery(".ldgr-search-groups .ldgr-search").on("keyup",(function(){var r=jQuery(this).val().toLowerCase();jQuery(this).parents(".ldgr-group-listing").find(".ldgr-group-item").find(".gr-title").filter((function(){jQuery(this).parents(".ldgr-group-item").toggle(jQuery(this).text().toLowerCase().indexOf(r)>-1),jQuery(this).text().toLowerCase().indexOf(r)>-1?jQuery(this).parents(".ldgr-group-item").addClass("ldgr-per-page"):jQuery(this).parents(".ldgr-group-item").removeClass("ldgr-per-page")})),e.pagination()}))}},{key:"scrolToElement",value:function(){jQuery(document).on("click",".ldgr-alphabets span",(function(){var e=jQuery(this).text(),r=jQuery(this).parents(".ldgr-search-list-wrap").find(".ldgr-list"),t=r.find("input[data-name^="+e.toLowerCase()+"]");if(t.length){var n=t.parents(".ldgr-chk-item")[0],o=n.offsetTop-n.parentNode.offsetTop;r.animate({scrollTop:o},200)}}))}},{key:"replaceContent",value:function(e,r,t){jQuery(document).on("click",e,(function(){jQuery(r).hide(),jQuery(t).show()}))}},{key:"openLightbox",value:function(e,r){jQuery(e).on("click",(function(){jQuery(r).css("display","flex")}))}},{key:"closeLightbox",value:function(e,r){jQuery(e).on("click",(function(){jQuery(r).hide()}))}},{key:"closePopupOutsideClick",value:function(){jQuery(".ldgr-lightbox").on("click",(function(e){jQuery(e.target).closest(".ldgr-popup").length||jQuery(".ldgr-lightbox").hide()}))}},{key:"addMoreUsers",value:function(){jQuery(document).on("click",".ldgr-add-more-users",(function(){jQuery(".ldgr-tabs-content .ldgr-add-users").append(ldgr_dashboard_loc.row_html)}))}},{key:"removeUsers",value:function(){jQuery(document).on("click",".remove-user",(function(){jQuery(this).parent().remove()}))}},{key:"pagination",value:function(){var e=jQuery(".ldgr-group-items").find(".ldgr-per-page").length,r=Math.floor(e/10);if(e%10!=0&&(r+=1),jQuery(".ldgr-pagination").html(""),r>1){for(var t="",n=1;n<=r;n++)t+="<li>"+n+"</li>";jQuery(".ldgr-pagination").html(t)}jQuery(".ldgr-group-items .ldgr-per-page").hide(),jQuery(".ldgr-group-items .ldgr-per-page").each((function(e){e<10&&jQuery(this).show()})),jQuery(".ldgr-pagination > li:nth-child(1)").addClass("ldgr-active"),jQuery(document).on("click",".ldgr-pagination li",(function(){jQuery(".ldgr-pagination > li:nth-child(1)"),jQuery(".ldgr-pagination > li").removeClass("ldgr-active"),jQuery(this).addClass("ldgr-active");var e=parseInt(jQuery(this).text()),r=10*e,t=10*e-10;jQuery(".ldgr-group-items > .ldgr-group-item").hide();for(var n=t+1;n<=r;n++)jQuery(".ldgr-group-items > .ldgr-group-item.ldgr-per-page:nth-child("+n+")").show()}))}}]),e}();r.default=o},function(e,r){}]);