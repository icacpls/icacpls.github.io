(function(factory){if (typeof define === 'function' && define.amd){define(['jquery'], factory);} else if (typeof module === 'object' && typeof module.exports === 'object'){module.exports = factory(require('jquery'));} else {factory(jQuery);}}(function(jQuery){

/*! Widget: filter - updated 2018-03-18 (v2.30.0) */
!function(M){"use strict";var I,D,z=M.tablesorter||{},_=z.css,o=z.keyCodes;M.extend(_,{filterRow:"tablesorter-filter-row",filter:"tablesorter-filter",filterDisabled:"disabled",filterRowHide:"hideme"}),M.extend(o,{backSpace:8,escape:27,space:32,left:37,down:40}),z.addWidget({id:"filter",priority:50,options:{filter_cellFilter:"",filter_childRows:!1,filter_childByColumn:!1,filter_childWithSibs:!0,filter_columnAnyMatch:!0,filter_columnFilters:!0,filter_cssFilter:"",filter_defaultAttrib:"data-value",filter_defaultFilter:{},filter_excludeFilter:{},filter_external:"",filter_filteredRow:"filtered",filter_filterLabel:'Filter "{{label}}" column by...',filter_formatter:null,filter_functions:null,filter_hideEmpty:!0,filter_hideFilters:!1,filter_ignoreCase:!0,filter_liveSearch:!0,filter_matchType:{input:"exact",select:"exact"},filter_onlyAvail:"filter-onlyAvail",filter_placeholder:{search:"",select:""},filter_reset:null,filter_resetOnEsc:!0,filter_saveFilters:!1,filter_searchDelay:300,filter_searchFiltered:!0,filter_selectSource:null,filter_selectSourceSeparator:"|",filter_serversideFiltering:!1,filter_startsWith:!1,filter_useParsedData:!1},format:function(e,t,r){t.$table.hasClass("hasFilters")||I.init(e,t,r)},remove:function(e,t,r,i){var l,a,n=t.$table,s=t.$tbodies,o="addRows updateCell update updateRows updateComplete appendCache filterReset filterAndSortReset filterFomatterUpdate filterEnd search stickyHeadersInit ".split(" ").join(t.namespace+"filter ");if(n.removeClass("hasFilters").unbind(o.replace(z.regex.spaces," ")).find("."+_.filterRow).remove(),r.filter_initialized=!1,!i){for(l=0;l<s.length;l++)(a=z.processTbody(e,s.eq(l),!0)).children().removeClass(r.filter_filteredRow).show(),z.processTbody(e,a,!1);r.filter_reset&&M(document).undelegate(r.filter_reset,"click"+t.namespace+"filter")}}}),D=(I=z.filter={regex:{regex:/^\/((?:\\\/|[^\/])+)\/([migyu]{0,5})?$/,child:/tablesorter-childRow/,filtered:/filtered/,type:/undefined|number/,exact:/(^[\"\'=]+)|([\"\'=]+$)/g,operators:/[<>=]/g,query:"(q|query)",wild01:/\?/g,wild0More:/\*/g,quote:/\"/g,isNeg1:/(>=?\s*-\d)/,isNeg2:/(<=?\s*\d)/},types:{or:function(e,t,r){if(!D.orTest.test(t.iFilter)&&!D.orSplit.test(t.filter)||D.regex.test(t.filter))return null;var i,l,a,n=M.extend({},t),s=t.filter.split(D.orSplit),o=t.iFilter.split(D.orSplit),c=s.length;for(i=0;i<c;i++){n.nestedFilters=!0,n.filter=""+(I.parseFilter(e,s[i],t)||""),n.iFilter=""+(I.parseFilter(e,o[i],t)||""),a="("+(I.parseFilter(e,n.filter,t)||"")+")";try{if(l=new RegExp(t.isMatch?a:"^"+a+"$",e.widgetOptions.filter_ignoreCase?"i":"").test(n.exact)||I.processTypes(e,n,r))return l}catch(e){return null}}return l||!1},and:function(e,t,r){if(D.andTest.test(t.filter)){var i,l,a,n,s=M.extend({},t),o=t.filter.split(D.andSplit),c=t.iFilter.split(D.andSplit),f=o.length;for(i=0;i<f;i++){s.nestedFilters=!0,s.filter=""+(I.parseFilter(e,o[i],t)||""),s.iFilter=""+(I.parseFilter(e,c[i],t)||""),n=("("+(I.parseFilter(e,s.filter,t)||"")+")").replace(D.wild01,"\\S{1}").replace(D.wild0More,"\\S*");try{a=new RegExp(t.isMatch?n:"^"+n+"$",e.widgetOptions.filter_ignoreCase?"i":"").test(s.exact)||I.processTypes(e,s,r),l=0===i?a:l&&a}catch(e){return null}}return l||!1}return null},regex:function(e,t){if(D.regex.test(t.filter)){var r,i=t.filter_regexCache[t.index]||D.regex.exec(t.filter),l=i instanceof RegExp;try{l||(t.filter_regexCache[t.index]=i=new RegExp(i[1],i[2])),r=i.test(t.exact)}catch(e){r=!1}return r}return null},operators:function(e,t){if(D.operTest.test(t.iFilter)&&""!==t.iExact){var r,i,l,a=e.table,n=t.parsed[t.index],s=z.formatFloat(t.iFilter.replace(D.operators,""),a),o=e.parsers[t.index]||{},c=s;return(n||"numeric"===o.type)&&(l=M.trim(""+t.iFilter.replace(D.operators,"")),s="number"!=typeof(i=I.parseFilter(e,l,t,!0))||""===i||isNaN(i)?s:i),!n&&"numeric"!==o.type||isNaN(s)||void 0===t.cache?(l=isNaN(t.iExact)?t.iExact.replace(z.regex.nondigit,""):t.iExact,r=z.formatFloat(l,a)):r=t.cache,D.gtTest.test(t.iFilter)?i=D.gteTest.test(t.iFilter)?s<=r:s<r:D.ltTest.test(t.iFilter)&&(i=D.lteTest.test(t.iFilter)?r<=s:r<s),i||""!==c||(i=!0),i}return null},notMatch:function(e,t){if(D.notTest.test(t.iFilter)){var r,i=t.iFilter.replace("!",""),l=I.parseFilter(e,i,t)||"";return D.exact.test(l)?""===(l=l.replace(D.exact,""))||M.trim(l)!==t.iExact:(r=t.iExact.search(M.trim(l)),""===l||(t.anyMatch?r<0:!(e.widgetOptions.filter_startsWith?0===r:0<=r)))}return null},exact:function(e,t){if(D.exact.test(t.iFilter)){var r=t.iFilter.replace(D.exact,""),i=I.parseFilter(e,r,t)||"";return t.anyMatch?0<=M.inArray(i,t.rowArray):i==t.iExact}return null},range:function(e,t){if(D.toTest.test(t.iFilter)){var r,i,l,a,n=e.table,s=t.index,o=t.parsed[s],c=t.iFilter.split(D.toSplit);return i=c[0].replace(z.regex.nondigit,"")||"",l=z.formatFloat(I.parseFilter(e,i,t),n),i=c[1].replace(z.regex.nondigit,"")||"",a=z.formatFloat(I.parseFilter(e,i,t),n),(o||"numeric"===e.parsers[s].type)&&(l=""===(r=e.parsers[s].format(""+c[0],n,e.$headers.eq(s),s))||isNaN(r)?l:r,a=""===(r=e.parsers[s].format(""+c[1],n,e.$headers.eq(s),s))||isNaN(r)?a:r),!o&&"numeric"!==e.parsers[s].type||isNaN(l)||isNaN(a)?(i=isNaN(t.iExact)?t.iExact.replace(z.regex.nondigit,""):t.iExact,r=z.formatFloat(i,n)):r=t.cache,a<l&&(i=l,l=a,a=i),l<=r&&r<=a||""===l||""===a}return null},wild:function(e,t){if(D.wildOrTest.test(t.iFilter)){var r=""+(I.parseFilter(e,t.iFilter,t)||"");!D.wildTest.test(r)&&t.nestedFilters&&(r=t.isMatch?r:"^("+r+")$");try{return new RegExp(r.replace(D.wild01,"\\S{1}").replace(D.wild0More,"\\S*"),e.widgetOptions.filter_ignoreCase?"i":"").test(t.exact)}catch(e){return null}}return null},fuzzy:function(e,t){if(D.fuzzyTest.test(t.iFilter)){var r,i=0,l=t.iExact.length,a=t.iFilter.slice(1),n=I.parseFilter(e,a,t)||"";for(r=0;r<l;r++)t.iExact[r]===n[i]&&(i+=1);return i===n.length}return null}},init:function(r){z.language=M.extend(!0,{},{to:"to",or:"or",and:"and"},z.language);var e,t,i,l,a,n,s,o,c=r.config,f=c.widgetOptions,d=function(e,t,r){return""===(t=t.trim())?"":(e||"")+t+(r||"")};if(c.$table.addClass("hasFilters"),c.lastSearch=[],f.filter_searchTimer=null,f.filter_initTimer=null,f.filter_formatterCount=0,f.filter_formatterInit=[],f.filter_anyColumnSelector='[data-column="all"],[data-column="any"]',f.filter_multipleColumnSelector='[data-column*="-"],[data-column*=","]',n="\\{"+D.query+"\\}",M.extend(D,{child:new RegExp(c.cssChildRow),filtered:new RegExp(f.filter_filteredRow),alreadyFiltered:new RegExp("(\\s+(-"+d("|",z.language.or)+d("|",z.language.to)+")\\s+)","i"),toTest:new RegExp("\\s+(-"+d("|",z.language.to)+")\\s+","i"),toSplit:new RegExp("(?:\\s+(?:-"+d("|",z.language.to)+")\\s+)","gi"),andTest:new RegExp("\\s+("+d("",z.language.and,"|")+"&&)\\s+","i"),andSplit:new RegExp("(?:\\s+(?:"+d("",z.language.and,"|")+"&&)\\s+)","gi"),orTest:new RegExp("(\\|"+d("|\\s+",z.language.or,"\\s+")+")","i"),orSplit:new RegExp("(?:\\|"+d("|\\s+(?:",z.language.or,")\\s+")+")","gi"),iQuery:new RegExp(n,"i"),igQuery:new RegExp(n,"ig"),operTest:/^[<>]=?/,gtTest:/>/,gteTest:/>=/,ltTest:/</,lteTest:/<=/,notTest:/^\!/,wildOrTest:/[\?\*\|]/,wildTest:/\?\*/,fuzzyTest:/^~/,exactTest:/[=\"\|!]/}),n=c.$headers.filter(".filter-false, .parser-false").length,!1!==f.filter_columnFilters&&n!==c.$headers.length&&I.buildRow(r,c,f),i="addRows updateCell update updateRows updateComplete appendCache filterReset "+"filterAndSortReset filterResetSaved filterEnd search ".split(" ").join(c.namespace+"filter "),c.$table.bind(i,function(e,t){return n=f.filter_hideEmpty&&M.isEmptyObject(c.cache)&&!(c.delayInit&&"appendCache"===e.type),c.$table.find("."+_.filterRow).toggleClass(f.filter_filteredRow,n),/(search|filter)/.test(e.type)||(e.stopPropagation(),I.buildDefault(r,!0)),"filterReset"===e.type||"filterAndSortReset"===e.type?(c.$table.find("."+_.filter).add(f.filter_$externalFilters).val(""),"filterAndSortReset"===e.type?z.sortReset(this.config,function(){I.searching(r,[])}):I.searching(r,[])):"filterResetSaved"===e.type?z.storage(r,"tablesorter-filters",""):"filterEnd"===e.type?I.buildDefault(r,!0):(t="search"===e.type?t:"updateComplete"===e.type?c.$table.data("lastSearch"):"",/(update|add)/.test(e.type)&&"updateComplete"!==e.type&&(c.lastCombinedFilter=null,c.lastSearch=[],setTimeout(function(){c.$table.triggerHandler("filterFomatterUpdate")},100)),I.searching(r,t,!0)),!1}),f.filter_reset&&(f.filter_reset instanceof M?f.filter_reset.click(function(){c.$table.triggerHandler("filterReset")}):M(f.filter_reset).length&&M(document).undelegate(f.filter_reset,"click"+c.namespace+"filter").delegate(f.filter_reset,"click"+c.namespace+"filter",function(){c.$table.triggerHandler("filterReset")})),f.filter_functions)for(a=0;a<c.columns;a++)if(s=z.getColumnData(r,f.filter_functions,a))if(o=!((l=c.$headerIndexed[a].removeClass("filter-select")).hasClass("filter-false")||l.hasClass("parser-false")),!(e="")===s&&o)I.buildSelect(r,a);else if("object"==typeof s&&o){for(t in s)"string"==typeof t&&(e+=""===e?'<option value="">'+(l.data("placeholder")||l.attr("data-placeholder")||f.filter_placeholder.select||"")+"</option>":"",0<=(i=n=t).indexOf(f.filter_selectSourceSeparator)&&(i=(n=t.split(f.filter_selectSourceSeparator))[1],n=n[0]),e+="<option "+(i===n?"":'data-function-name="'+t+'" ')+'value="'+n+'">'+i+"</option>");c.$table.find("thead").find("select."+_.filter+'[data-column="'+a+'"]').append(e),(s="function"==typeof(i=f.filter_selectSource)||z.getColumnData(r,i,a))&&I.buildSelect(c.table,a,"",!0,l.hasClass(f.filter_onlyAvail))}I.buildDefault(r,!0),I.bindSearch(r,c.$table.find("."+_.filter),!0),f.filter_external&&I.bindSearch(r,f.filter_external),f.filter_hideFilters&&I.hideFilters(c),c.showProcessing&&(i="filterStart filterEnd ".split(" ").join(c.namespace+"filter-sp "),c.$table.unbind(i.replace(z.regex.spaces," ")).bind(i,function(e,t){l=t?c.$table.find("."+_.header).filter("[data-column]").filter(function(){return""!==t[M(this).data("column")]}):"",z.isProcessing(r,"filterStart"===e.type,t?l:"")})),c.filteredRows=c.totalRows,i="tablesorter-initialized pagerBeforeInitialized ".split(" ").join(c.namespace+"filter "),c.$table.unbind(i.replace(z.regex.spaces," ")).bind(i,function(){I.completeInit(this)}),c.pager&&c.pager.initialized&&!f.filter_initialized?(c.$table.triggerHandler("filterFomatterUpdate"),setTimeout(function(){I.filterInitComplete(c)},100)):f.filter_initialized||I.completeInit(r)},completeInit:function(e){var t=e.config,r=t.widgetOptions,i=I.setDefaults(e,t,r)||[];i.length&&(t.delayInit&&""===i.join("")||z.setFilters(e,i,!0)),t.$table.triggerHandler("filterFomatterUpdate"),setTimeout(function(){r.filter_initialized||I.filterInitComplete(t)},100)},formatterUpdated:function(e,t){var r=e&&e.closest("table"),i=r.length&&r[0].config,l=i&&i.widgetOptions;l&&!l.filter_initialized&&(l.filter_formatterInit[t]=1)},filterInitComplete:function(e){var t,r,i=e.widgetOptions,l=0,a=function(){i.filter_initialized=!0,e.lastSearch=e.$table.data("lastSearch"),e.$table.triggerHandler("filterInit",e),I.findRows(e.table,e.lastSearch||[]),z.debug(e,"filter")&&console.log("Filter >> Widget initialized")};if(M.isEmptyObject(i.filter_formatter))a();else{for(r=i.filter_formatterInit.length,t=0;t<r;t++)1===i.filter_formatterInit[t]&&l++;clearTimeout(i.filter_initTimer),i.filter_initialized||l!==i.filter_formatterCount?i.filter_initialized||(i.filter_initTimer=setTimeout(function(){a()},500)):a()}},processFilters:function(e,t){var r,i=[],l=t?encodeURIComponent:decodeURIComponent,a=e.length;for(r=0;r<a;r++)e[r]&&(i[r]=l(e[r]));return i},setDefaults:function(e,t,r){var i,l,a,n,s,o=z.getFilters(e)||[];if(r.filter_saveFilters&&z.storage&&(l=z.storage(e,"tablesorter-filters")||[],(i=M.isArray(l))&&""===l.join("")||!i||(o=I.processFilters(l))),""===o.join(""))for(s=t.$headers.add(r.filter_$externalFilters).filter("["+r.filter_defaultAttrib+"]"),a=0;a<=t.columns;a++)n=a===t.columns?"all":a,o[a]=s.filter('[data-column="'+n+'"]').attr(r.filter_defaultAttrib)||o[a]||"";return t.$table.data("lastSearch",o),o},parseFilter:function(e,t,r,i){return i||r.parsed[r.index]?e.parsers[r.index].format(t,e.table,[],r.index):t},buildRow:function(e,t,r){var i,l,a,n,s,o,c,f,d,u=r.filter_cellFilter,h=t.columns,p=M.isArray(u),g='<tr role="search" class="'+_.filterRow+" "+t.cssIgnoreRow+'">';for(a=0;a<h;a++)t.$headerIndexed[a].length&&(g+=1<(d=t.$headerIndexed[a]&&t.$headerIndexed[a][0].colSpan||0)?'<td data-column="'+a+"-"+(a+d-1)+'" colspan="'+d+'"':'<td data-column="'+a+'"',g+=p?u[a]?' class="'+u[a]+'"':"":""!==u?' class="'+u+'"':"",g+="></td>");for(t.$filters=M(g+="</tr>").appendTo(t.$table.children("thead").eq(0)).children("td"),a=0;a<h;a++)o=!1,(n=t.$headerIndexed[a])&&n.length&&(i=I.getColumnElm(t,t.$filters,a),f=z.getColumnData(e,r.filter_functions,a),s=r.filter_functions&&f&&"function"!=typeof f||n.hasClass("filter-select"),l=z.getColumnData(e,t.headers,a),o="false"===z.getData(n[0],l,"filter")||"false"===z.getData(n[0],l,"parser"),s?g=M("<select>").appendTo(i):((f=z.getColumnData(e,r.filter_formatter,a))?(r.filter_formatterCount++,(g=f(i,a))&&0===g.length&&(g=i.children("input")),g&&(0===g.parent().length||g.parent().length&&g.parent()[0]!==i[0])&&i.append(g)):g=M('<input type="search">').appendTo(i),g&&(d=n.data("placeholder")||n.attr("data-placeholder")||r.filter_placeholder.search||"",g.attr("placeholder",d))),g&&(c=(M.isArray(r.filter_cssFilter)?void 0!==r.filter_cssFilter[a]&&r.filter_cssFilter[a]||"":r.filter_cssFilter)||"",g.addClass(_.filter+" "+c),(d=(c=r.filter_filterLabel).match(/{{([^}]+?)}}/g))||(d=["{{label}}"]),M.each(d,function(e,t){var r=new RegExp(t,"g"),i=n.attr("data-"+t.replace(/{{|}}/g,"")),l=void 0===i?n.text():i;c=c.replace(r,M.trim(l))}),g.attr({"data-column":i.attr("data-column"),"aria-label":c}),o&&(g.attr("placeholder","").addClass(_.filterDisabled)[0].disabled=!0)))},bindSearch:function(l,e,t){if(l=M(l)[0],(e=M(e)).length){var r,a=l.config,n=a.widgetOptions,i=a.namespace+"filter",s=n.filter_$externalFilters;!0!==t&&(r=n.filter_anyColumnSelector+","+n.filter_multipleColumnSelector,n.filter_$anyMatch=e.filter(r),s&&s.length?n.filter_$externalFilters=n.filter_$externalFilters.add(e):n.filter_$externalFilters=e,z.setFilters(l,a.$table.data("lastSearch")||[],!1===t)),r="keypress keyup keydown search change input ".split(" ").join(i+" "),e.attr("data-lastSearchTime",(new Date).getTime()).unbind(r.replace(z.regex.spaces," ")).bind("keydown"+i,function(e){if(e.which===o.escape&&!l.config.widgetOptions.filter_resetOnEsc)return!1}).bind("keyup"+i,function(e){n=l.config.widgetOptions;var t=parseInt(M(this).attr("data-column"),10),r="boolean"==typeof n.filter_liveSearch?n.filter_liveSearch:z.getColumnData(l,n.filter_liveSearch,t);if(void 0===r&&(r=n.filter_liveSearch.fallback||!1),M(this).attr("data-lastSearchTime",(new Date).getTime()),e.which===o.escape)this.value=n.filter_resetOnEsc?"":a.lastSearch[t];else{if(""!==this.value&&("number"==typeof r&&this.value.length<r||e.which!==o.enter&&e.which!==o.backSpace&&(e.which<o.space||e.which>=o.left&&e.which<=o.down)))return;if(!1===r&&""!==this.value&&e.which!==o.enter)return}I.searching(l,!0,!0,t)}).bind("search change keypress input blur ".split(" ").join(i+" "),function(e){var t=parseInt(M(this).attr("data-column"),10),r=e.type,i="boolean"==typeof n.filter_liveSearch?n.filter_liveSearch:z.getColumnData(l,n.filter_liveSearch,t);!l.config.widgetOptions.filter_initialized||e.which!==o.enter&&"search"!==r&&"blur"!==r&&("change"!==r&&"input"!==r||!0!==i&&(!0===i||"INPUT"===e.target.nodeName)||this.value===a.lastSearch[t])||(e.preventDefault(),M(this).attr("data-lastSearchTime",(new Date).getTime()),I.searching(l,"keypress"!==r,!0,t))})}},searching:function(e,t,r,i){var l,a=e.config.widgetOptions;void 0===i?l=!1:void 0===(l="boolean"==typeof a.filter_liveSearch?a.filter_liveSearch:z.getColumnData(e,a.filter_liveSearch,i))&&(l=a.filter_liveSearch.fallback||!1),clearTimeout(a.filter_searchTimer),void 0===t||!0===t?a.filter_searchTimer=setTimeout(function(){I.checkFilters(e,t,r)},l?a.filter_searchDelay:10):I.checkFilters(e,t,r)},equalFilters:function(e,t,r){var i,l=[],a=[],n=e.columns+1;for(t=M.isArray(t)?t:[],r=M.isArray(r)?r:[],i=0;i<n;i++)l[i]=t[i]||"",a[i]=r[i]||"";return l.join(",")===a.join(",")},checkFilters:function(e,t,r){var i=e.config,l=i.widgetOptions,a=M.isArray(t),n=a?t:z.getFilters(e,!0),s=n||[];if(M.isEmptyObject(i.cache))i.delayInit&&(!i.pager||i.pager&&i.pager.initialized)&&z.updateCache(i,function(){I.checkFilters(e,!1,r)});else if(a&&(z.setFilters(e,n,!1,!0!==r),l.filter_initialized||(i.lastSearch=[],i.lastCombinedFilter="")),l.filter_hideFilters&&i.$table.find("."+_.filterRow).triggerHandler(I.hideFiltersCheck(i)?"mouseleave":"mouseenter"),!I.equalFilters(i,i.lastSearch,s)||!1===t){if(!1===t&&(i.lastCombinedFilter="",i.lastSearch=[]),n=n||[],n=Array.prototype.map?n.map(String):n.join("�").split("�"),l.filter_initialized&&i.$table.triggerHandler("filterStart",[n]),!i.showProcessing)return I.findRows(e,n,s),!1;setTimeout(function(){return I.findRows(e,n,s),!1},30)}},hideFiltersCheck:function(e){if("function"==typeof e.widgetOptions.filter_hideFilters){var t=e.widgetOptions.filter_hideFilters(e);if("boolean"==typeof t)return t}return""===z.getFilters(e.$table).join("")},hideFilters:function(i,e){var l;(e||i.$table).find("."+_.filterRow).addClass(_.filterRowHide).bind("mouseenter mouseleave",function(e){var t=e,r=M(this);clearTimeout(l),l=setTimeout(function(){/enter|over/.test(t.type)?r.removeClass(_.filterRowHide):M(document.activeElement).closest("tr")[0]!==r[0]&&r.toggleClass(_.filterRowHide,I.hideFiltersCheck(i))},200)}).find("input, select").bind("focus blur",function(e){var t=e,r=M(this).closest("tr");clearTimeout(l),l=setTimeout(function(){clearTimeout(l),r.toggleClass(_.filterRowHide,I.hideFiltersCheck(i)&&"focus"!==t.type)},200)})},defaultFilter:function(e,t){if(""===e)return e;var r=D.iQuery,i=t.match(D.igQuery).length,l=1<i?M.trim(e).split(/\s/):[M.trim(e)],a=l.length-1,n=0,s=t;for(a<1&&1<i&&(l[1]=l[0]);r.test(s);)s=s.replace(r,l[n++]||""),r.test(s)&&n<a&&""!==(l[n]||"")&&(s=t.replace(r,s));return s},getLatestSearch:function(e){return e?e.sort(function(e,t){return M(t).attr("data-lastSearchTime")-M(e).attr("data-lastSearchTime")}):e||M()},findRange:function(e,t,r){var i,l,a,n,s,o,c,f,d,u=[];if(/^[0-9]+$/.test(t))return[parseInt(t,10)];if(!r&&/-/.test(t))for(d=(l=t.match(/(\d+)\s*-\s*(\d+)/g))?l.length:0,f=0;f<d;f++){for(a=l[f].split(/\s*-\s*/),n=parseInt(a[0],10)||0,(s=parseInt(a[1],10)||e.columns-1)<n&&(i=n,n=s,s=i),s>=e.columns&&(s=e.columns-1);n<=s;n++)u[u.length]=n;t=t.replace(l[f],"")}if(!r&&/,/.test(t))for(d=(o=t.split(/\s*,\s*/)).length,c=0;c<d;c++)""!==o[c]&&(f=parseInt(o[c],10))<e.columns&&(u[u.length]=f);if(!u.length)for(f=0;f<e.columns;f++)u[u.length]=f;return u},getColumnElm:function(t,e,r){return e.filter(function(){var e=I.findRange(t,M(this).attr("data-column"));return-1<M.inArray(r,e)})},multipleColumns:function(e,t){var r=e.widgetOptions,i=r.filter_initialized||!t.filter(r.filter_anyColumnSelector).length,l=M.trim(I.getLatestSearch(t).attr("data-column")||"");return I.findRange(e,l,!i)},processTypes:function(e,t,r){var i,l=null,a=null;for(i in I.types)M.inArray(i,r.excludeMatch)<0&&null===a&&null!==(a=I.types[i](e,t,r))&&(t.matchedOn=i,l=a);return l},matchType:function(e,t){var r,i=e.widgetOptions,l=e.$headerIndexed[t];return l.hasClass("filter-exact")?r=!1:l.hasClass("filter-match")?r=!0:(i.filter_columnFilters?l=e.$filters.find("."+_.filter).add(i.filter_$externalFilters).filter('[data-column="'+t+'"]'):i.filter_$externalFilters&&(l=i.filter_$externalFilters.filter('[data-column="'+t+'"]')),r=!!l.length&&"match"===e.widgetOptions.filter_matchType[(l[0].nodeName||"").toLowerCase()]),r},processRow:function(t,r,e){var i,l,a,n,s,o=t.widgetOptions,c=!0,f=o.filter_$anyMatch&&o.filter_$anyMatch.length,d=o.filter_$anyMatch&&o.filter_$anyMatch.length?I.multipleColumns(t,o.filter_$anyMatch):[];if(r.$cells=r.$row.children(),r.matchedOn=null,r.anyMatchFlag&&1<d.length||r.anyMatchFilter&&!f){if(r.anyMatch=!0,r.isMatch=!0,r.rowArray=r.$cells.map(function(e){if(-1<M.inArray(e,d)||r.anyMatchFilter&&!f)return r.parsed[e]?s=r.cacheArray[e]:(s=r.rawArray[e],s=M.trim(o.filter_ignoreCase?s.toLowerCase():s),t.sortLocaleCompare&&(s=z.replaceAccents(s))),s}).get(),r.filter=r.anyMatchFilter,r.iFilter=r.iAnyMatchFilter,r.exact=r.rowArray.join(" "),r.iExact=o.filter_ignoreCase?r.exact.toLowerCase():r.exact,r.cache=r.cacheArray.slice(0,-1).join(" "),e.excludeMatch=e.noAnyMatch,null!==(l=I.processTypes(t,r,e)))c=l;else if(o.filter_startsWith)for(c=!1,d=Math.min(t.columns,r.rowArray.length);!c&&0<d;)d--,c=c||0===r.rowArray[d].indexOf(r.iFilter);else c=0<=(r.iExact+r.childRowText).indexOf(r.iFilter);if(r.anyMatch=!1,r.filters.join("")===r.filter)return c}for(d=0;d<t.columns;d++)r.filter=r.filters[d],r.index=d,e.excludeMatch=e.excludeFilter[d],r.filter&&(r.cache=r.cacheArray[d],i=r.parsed[d]?r.cache:r.rawArray[d]||"",r.exact=t.sortLocaleCompare?z.replaceAccents(i):i,r.iExact=!D.type.test(typeof r.exact)&&o.filter_ignoreCase?r.exact.toLowerCase():r.exact,r.isMatch=I.matchType(t,d),i=c,n=o.filter_columnFilters&&t.$filters.add(o.filter_$externalFilters).filter('[data-column="'+d+'"]').find("select option:selected").attr("data-function-name")||"",t.sortLocaleCompare&&(r.filter=z.replaceAccents(r.filter)),o.filter_defaultFilter&&D.iQuery.test(e.defaultColFilter[d])&&(r.filter=I.defaultFilter(r.filter,e.defaultColFilter[d])),r.iFilter=o.filter_ignoreCase?(r.filter||"").toLowerCase():r.filter,l=null,(a=e.functions[d])&&("function"==typeof a?l=a(r.exact,r.cache,r.filter,d,r.$row,t,r):"function"==typeof a[n||r.filter]&&(l=a[s=n||r.filter](r.exact,r.cache,r.filter,d,r.$row,t,r))),null===l?(l=I.processTypes(t,r,e),s=!0===a&&("and"===r.matchedOn||"or"===r.matchedOn),null===l||s?!0===a?i=r.isMatch?0<=(""+r.iExact).search(r.iFilter):r.filter===r.exact:(s=(r.iExact+r.childRowText).indexOf(I.parseFilter(t,r.iFilter,r)),i=!o.filter_startsWith&&0<=s||o.filter_startsWith&&0===s):i=l):i=l,c=!!i&&c);return c},findRows:function(e,r,t){if(!I.equalFilters(e.config,e.config.lastSearch,t)&&e.config.widgetOptions.filter_initialized){var i,l,a,n,s,o,c,f,d,u,h,p,g,m,_,y,F,w,x,b,C,v,$,S=M.extend([],r),R=e.config,T=R.widgetOptions,A=z.debug(R,"filter"),O={anyMatch:!1,filters:r,filter_regexCache:[]},E={noAnyMatch:["range","operators"],functions:[],excludeFilter:[],defaultColFilter:[],defaultAnyFilter:z.getColumnData(e,T.filter_defaultFilter,R.columns,!0)||""};for(O.parsed=[],d=0;d<R.columns;d++)O.parsed[d]=T.filter_useParsedData||R.parsers&&R.parsers[d]&&R.parsers[d].parsed||z.getData&&"parsed"===z.getData(R.$headerIndexed[d],z.getColumnData(e,R.headers,d),"filter")||R.$headerIndexed[d].hasClass("filter-parsed"),E.functions[d]=z.getColumnData(e,T.filter_functions,d)||R.$headerIndexed[d].hasClass("filter-select"),E.defaultColFilter[d]=z.getColumnData(e,T.filter_defaultFilter,d)||"",E.excludeFilter[d]=(z.getColumnData(e,T.filter_excludeFilter,d,!0)||"").split(/\s+/);for(A&&(console.log("Filter >> Starting filter widget search",r),m=new Date),R.filteredRows=0,t=S||[],c=R.totalRows=0;c<R.$tbodies.length;c++){if(f=z.processTbody(e,R.$tbodies.eq(c),!0),d=R.columns,l=R.cache[c].normalized,n=M(M.map(l,function(e){return e[d].$row.get()})),""===t.join("")||T.filter_serversideFiltering)n.removeClass(T.filter_filteredRow).not("."+R.cssChildRow).css("display","");else{if(i=(n=n.not("."+R.cssChildRow)).length,(T.filter_$anyMatch&&T.filter_$anyMatch.length||void 0!==r[R.columns])&&(O.anyMatchFlag=!0,O.anyMatchFilter=""+(r[R.columns]||T.filter_$anyMatch&&I.getLatestSearch(T.filter_$anyMatch).val()||""),T.filter_columnAnyMatch)){for(x=O.anyMatchFilter.split(D.andSplit),b=!1,y=0;y<x.length;y++)1<(C=x[y].split(":")).length&&(isNaN(C[0])?M.each(R.headerContent,function(e,t){-1<t.toLowerCase().indexOf(C[0])&&(r[v=e]=C[1])}):v=parseInt(C[0],10)-1,0<=v&&v<R.columns&&(r[v]=C[1],x.splice(y,1),y--,b=!0));b&&(O.anyMatchFilter=x.join(" && "))}if(w=T.filter_searchFiltered,h=R.lastSearch||R.$table.data("lastSearch")||[],w)for(y=0;y<d+1;y++)_=r[y]||"",w||(y=d),w=w&&h.length&&0===_.indexOf(h[y]||"")&&!D.alreadyFiltered.test(_)&&!D.exactTest.test(_)&&!(D.isNeg1.test(_)||D.isNeg2.test(_))&&!(""!==_&&R.$filters&&R.$filters.filter('[data-column="'+y+'"]').find("select").length&&!I.matchType(R,y));for(F=n.not("."+T.filter_filteredRow).length,w&&0===F&&(w=!1),A&&console.log("Filter >> Searching through "+(w&&F<i?F:"all")+" rows"),O.anyMatchFlag&&(R.sortLocaleCompare&&(O.anyMatchFilter=z.replaceAccents(O.anyMatchFilter)),T.filter_defaultFilter&&D.iQuery.test(E.defaultAnyFilter)&&(O.anyMatchFilter=I.defaultFilter(O.anyMatchFilter,E.defaultAnyFilter),w=!1),O.iAnyMatchFilter=T.filter_ignoreCase&&R.ignoreCase?O.anyMatchFilter.toLowerCase():O.anyMatchFilter),o=0;o<i;o++)if($=n[o].className,!(o&&D.child.test($)||w&&D.filtered.test($))){if(O.$row=n.eq(o),O.rowIndex=o,O.cacheArray=l[o],a=O.cacheArray[R.columns],O.rawArray=a.raw,O.childRowText="",!T.filter_childByColumn){for($="",u=a.child,y=0;y<u.length;y++)$+=" "+u[y].join(" ")||"";O.childRowText=T.filter_childRows?T.filter_ignoreCase?$.toLowerCase():$:""}if(p=!1,g=I.processRow(R,O,E),s=a.$row,_=!!g,u=a.$row.filter(":gt(0)"),T.filter_childRows&&u.length){if(T.filter_childByColumn)for(T.filter_childWithSibs||(u.addClass(T.filter_filteredRow),s=s.eq(0)),y=0;y<u.length;y++)O.$row=u.eq(y),O.cacheArray=a.child[y],O.rawArray=O.cacheArray,_=I.processRow(R,O,E),p=p||_,!T.filter_childWithSibs&&_&&u.eq(y).removeClass(T.filter_filteredRow);p=p||g}else p=_;s.toggleClass(T.filter_filteredRow,!p)[0].display=p?"":"none"}}R.filteredRows+=n.not("."+T.filter_filteredRow).length,R.totalRows+=n.length,z.processTbody(e,f,!1)}R.lastCombinedFilter=S.join(""),R.lastSearch=S,R.$table.data("lastSearch",S),T.filter_saveFilters&&z.storage&&z.storage(e,"tablesorter-filters",I.processFilters(S,!0)),A&&console.log("Filter >> Completed search"+z.benchmark(m)),T.filter_initialized&&(R.$table.triggerHandler("filterBeforeEnd",R),R.$table.triggerHandler("filterEnd",R)),setTimeout(function(){z.applyWidget(R.table)},0)}},getOptionSource:function(e,t,r){var i=(e=M(e)[0]).config,l=!1,a=i.widgetOptions.filter_selectSource,n=i.$table.data("lastSearch")||[],s="function"==typeof a||z.getColumnData(e,a,t);if(r&&""!==n[t]&&(r=!1),!0===s)l=a(e,t,r);else{if(s instanceof M||"string"===M.type(s)&&0<=s.indexOf("</option>"))return s;if(M.isArray(s))l=s;else if("object"===M.type(a)&&s&&null===(l=s(e,t,r)))return null}return!1===l&&(l=I.getOptions(e,t,r)),I.processOptions(e,t,l)},processOptions:function(l,a,r){if(!M.isArray(r))return!1;var n,e,t,i,s,o,c=(l=M(l)[0]).config,f=null!=a&&0<=a&&a<c.columns,d=!!f&&c.$headerIndexed[a].hasClass("filter-select-sort-desc"),u=[];if(r=M.grep(r,function(e,t){return!!e.text||M.inArray(e,r)===t}),f&&c.$headerIndexed[a].hasClass("filter-select-nosort"))return r;for(i=r.length,t=0;t<i;t++)o=(e=r[t]).text?e.text:e,s=(f&&c.parsers&&c.parsers.length&&c.parsers[a].format(o,l,[],a)||o).toString(),s=c.widgetOptions.filter_ignoreCase?s.toLowerCase():s,e.text?(e.parsed=s,u[u.length]=e):u[u.length]={text:e,parsed:s};for(n=c.textSorter||"",u.sort(function(e,t){var r=d?t.parsed:e.parsed,i=d?e.parsed:t.parsed;return f&&"function"==typeof n?n(r,i,!0,a,l):f&&"object"==typeof n&&n.hasOwnProperty(a)?n[a](r,i,!0,a,l):!z.sortNatural||z.sortNatural(r,i)}),r=[],i=u.length,t=0;t<i;t++)r[r.length]=u[t];return r},getOptions:function(e,t,r){var i,l,a,n,s,o,c,f,d=(e=M(e)[0]).config,u=d.widgetOptions,h=[];for(l=0;l<d.$tbodies.length;l++)for(s=d.cache[l],a=d.cache[l].normalized.length,i=0;i<a;i++)if(n=s.row?s.row[i]:s.normalized[i][d.columns].$row[0],!r||!n.className.match(u.filter_filteredRow))if(u.filter_useParsedData||d.parsers[t].parsed||d.$headerIndexed[t].hasClass("filter-parsed")){if(h[h.length]=""+s.normalized[i][t],u.filter_childRows&&u.filter_childByColumn)for(f=s.normalized[i][d.columns].$row.length-1,o=0;o<f;o++)h[h.length]=""+s.normalized[i][d.columns].child[o][t]}else if(h[h.length]=s.normalized[i][d.columns].raw[t],u.filter_childRows&&u.filter_childByColumn)for(f=s.normalized[i][d.columns].$row.length,o=1;o<f;o++)c=s.normalized[i][d.columns].$row.eq(o).children().eq(t),h[h.length]=""+z.getElementText(d,c,t);return h},buildSelect:function(e,t,r,i,l){if(e=M(e)[0],t=parseInt(t,10),e.config.cache&&!M.isEmptyObject(e.config.cache)){var a,n,s,o,c,f,d,u=e.config,h=u.widgetOptions,p=u.$headerIndexed[t],g='<option value="">'+(p.data("placeholder")||p.attr("data-placeholder")||h.filter_placeholder.select||"")+"</option>",m=u.$table.find("thead").find("select."+_.filter+'[data-column="'+t+'"]').val();if(void 0!==r&&""!==r||null!==(r=I.getOptionSource(e,t,l))){if(M.isArray(r)){for(a=0;a<r.length;a++)if((d=r[a]).text){for(n in d["data-function-name"]=void 0===d.value?d.text:d.value,g+="<option",d)d.hasOwnProperty(n)&&"text"!==n&&(g+=" "+n+'="'+d[n].replace(D.quote,"&quot;")+'"');d.value||(g+=' value="'+d.text.replace(D.quote,"&quot;")+'"'),g+=">"+d.text.replace(D.quote,"&quot;")+"</option>"}else""+d!="[object Object]"&&(0<=(n=s=d=(""+d).replace(D.quote,"&quot;")).indexOf(h.filter_selectSourceSeparator)&&(n=(o=s.split(h.filter_selectSourceSeparator))[0],s=o[1]),g+=""!==d?"<option "+(n===s?"":'data-function-name="'+d+'" ')+'value="'+n+'">'+s+"</option>":"");r=[]}c=(u.$filters?u.$filters:u.$table.children("thead")).find("."+_.filter),h.filter_$externalFilters&&(c=c&&c.length?c.add(h.filter_$externalFilters):h.filter_$externalFilters),(f=c.filter('select[data-column="'+t+'"]')).length&&(f[i?"html":"append"](g),M.isArray(r)||f.append(r).val(m),f.val(m))}}},buildDefault:function(e,t){var r,i,l,a=e.config,n=a.widgetOptions,s=a.columns;for(r=0;r<s;r++)l=!((i=a.$headerIndexed[r]).hasClass("filter-false")||i.hasClass("parser-false")),(i.hasClass("filter-select")||!0===z.getColumnData(e,n.filter_functions,r))&&l&&I.buildSelect(e,r,"",t,i.hasClass(n.filter_onlyAvail))}}).regex,z.getFilters=function(e,t,r,i){var l,a,n,s,o=[],c=e?M(e)[0].config:"",f=c?c.widgetOptions:"";if(!0!==t&&f&&!f.filter_columnFilters||M.isArray(r)&&I.equalFilters(c,r,c.lastSearch))return M(e).data("lastSearch")||[];if(c&&(c.$filters&&(a=c.$filters.find("."+_.filter)),f.filter_$externalFilters&&(a=a&&a.length?a.add(f.filter_$externalFilters):f.filter_$externalFilters),a&&a.length))for(o=r||[],l=0;l<c.columns+1;l++)s=l===c.columns?f.filter_anyColumnSelector+","+f.filter_multipleColumnSelector:'[data-column="'+l+'"]',(n=a.filter(s)).length&&(n=I.getLatestSearch(n),M.isArray(r)?(i&&1<n.length&&(n=n.slice(1)),l===c.columns&&(n=(s=n.filter(f.filter_anyColumnSelector)).length?s:n),n.val(r[l]).trigger("change"+c.namespace)):(o[l]=n.val()||"",l===c.columns?n.slice(1).filter('[data-column*="'+n.attr("data-column")+'"]').val(o[l]):n.slice(1).val(o[l])),l===c.columns&&n.length&&(f.filter_$anyMatch=n));return o},z.setFilters=function(e,t,r,i){var l=e?M(e)[0].config:"",a=z.getFilters(e,!0,t,i);return void 0===r&&(r=!0),l&&r&&(l.lastCombinedFilter=null,l.lastSearch=[],I.searching(l.table,t,i),l.$table.triggerHandler("filterFomatterUpdate")),0!==a.length}}(jQuery);return jQuery;}));