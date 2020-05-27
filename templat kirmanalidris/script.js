//onscroll header
(function() {
var documentElem = $(document),
kirmanheader = $('.kirman-header'),
lastScrollTop = 0;

documentElem.on('scroll', function() {
var currentScrollTop = $(this).scrollTop();

// scroll down
if (currentScrollTop > lastScrollTop) kirmanheader.addClass('hidden');
// scrollTop
else kirmanheader.removeClass('hidden');

lastScrollTop = currentScrollTop;
});

})();
// Sidenav
$(document).ready(function(){$(".kirman_sidenav a").click(function(){$(".kirman_sidenav").removeClass("kirman_sidenav_active"),$(".kirman_overlay").removeClass("kirman_overlay_active")})});
$(document).ready(function(){$(".btn-mr1").click(function(){$(".more-nav").addClass("slideup"),$(".kirman_sidenav").removeClass("kirman_sidenav_active"),$(".kirman_overlay").addClass("kirman_overlay_active")})})
$(document).ready(function(){$(".btn-mr").click(function(){$(".more-nav").addClass("slideup"),$(".kirman_overlay").addClass("kirman_overlay_active")})}),$(document).ready(function(){$(".btn-setting").click(function(){$(".setting").addClass("slideup"),$(".kirman_sidenav").removeClass("kirman_sidenav_active"),$(".kirman_overlay").addClass("kirman_overlay_active")})}),$(".btn-s").click(function(){$(".kirman-s").toggle()}),$(document).ready(function(){$(".btn-m").click(function(){$(".kirman_sidenav").addClass("kirman_sidenav_active"),$(".kirman_overlay").addClass("kirman_overlay_active")})}),$(document).ready(function(){$(".kirman_overlay").click(function(){$(".kirman_sidenav").removeClass("kirman_sidenav_active"),$(".more-nav").removeClass("slideup"),$(".setting").removeClass("slideup"),$(".kirman_overlay").removeClass("kirman_overlay_active")})}),$(document).ready(function(){$(".kirman-btn-search").click(function(){$(".search-form").toggleClass("s-left"),$(".logo").toggleClass("hide")})});
// Dark Mode
$("#nightmode").click(function(){$("body").toggleClass("nightmode")}),$("body").toggleClass(localStorage.toggled),$("#nightmode").click(function(){"nightmode"!=localStorage.toggled?($("body").toggleClass("nightmode",!0),localStorage.toggled="nightmode"):($("body").toggleClass("nightmode",!1),localStorage.toggled="")});
// To top
var mybutton=document.getElementById("myBtn");function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?mybutton.style.visibility="visible":mybutton.style.visibility="hidden"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()};
//Highlight
!function(){for(var n=document.getElementsByTagName("pre"),e=n.length,a=0;a<e;a++){n[a].innerHTML='<span class="line-number"></span>'+n[a].innerHTML+'<span class="cl"></span>';for(var s=n[a].innerHTML.split(/\n/).length,r=0;r<s;r++){n[a].getElementsByTagName("span")[0].innerHTML+="<span>"+(r+1)+"</span>"}}}();
//Highlight komentar
!function(){for(var n=document.getElementsByTagName("em"),e=n.length,a=0;a<e;a++){n[a].innerHTML='<span class="line-number"></span>'+n[a].innerHTML+'<span class="cl"></span>';for(var s=n[a].innerHTML.split(/\n/).length,l=0;l<s;l++){n[a].getElementsByTagName("span")[0].innerHTML+="<span>"+(l+1)+"</span>"}}}();
//Sticky popular posts
$(document).ready(function() { $(window).scroll(function() { if ($(document).scrollTop() > 1500) { $("#PopularPosts1").addClass("sticky"); } else { $("#PopularPosts1").removeClass("sticky");} }); });
//Html 9
$(document).ready(function() { $(window).scroll(function() { if ($(document).scrollTop() > 1200) { $("#HTML9").addClass("menghilang"); } else { $("#HTML9").removeClass("menghilang");} }); });
//Lazy Load
function ignielLazyLoad(){eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('u B(){Y(v e=o.1r("B"),t=0;t<e.1q;t++)Q(e[t])&&(e[t].N=e[t].1p("1n-N"))}u Q(e){v t=e.1t();Z t.1x>=0&&t.1w>=0&&t.1v<=(y.1u||o.T.1m)&&t.1k<=(y.1c||o.T.1b)}v b=["\\r\\m\\m\\D\\G\\a\\f\\c\\M\\n\\p\\c\\a\\f\\a\\k","\\h\\f","\\r\\c\\c\\r\\l\\A\\D\\G\\a\\f\\c","\\g\\h\\r\\m","\\p\\l\\k\\h\\g\\g","\\V\\1a\\1e\\R\\h\\f\\c\\a\\f\\c\\M\\h\\r\\m\\a\\m","\\w\\p\\a\\1l\\p\\c\\k\\n\\l\\c","\\r","\\1f\\w\\a\\k\\L\\1j\\a\\g\\a\\l\\c\\h\\k\\W\\g\\g","\\g\\a\\f\\q\\c\\A","\\w\\p\\a\\k\\W\\q\\a\\f\\c","\\c\\a\\p\\c","\\m\\h\\l\\w\\F\\a\\f\\c\\D\\g\\a\\F\\a\\f\\c","\\1i\\h\\m\\L","\\l\\g\\n\\l\\1g","\\p\\l\\k\\h\\g\\g\\1h\\h\\J","\\c\\h\\J","\\q\\a\\c\\S\\h\\w\\f\\m\\n\\f\\q\\R\\g\\n\\a\\f\\c\\1z\\a\\l\\c","\\A\\k\\a\\X","\\a\\1y\\a\\l","\\q\\a\\c\\D\\g\\a\\F\\a\\f\\c\\S\\L\\1F\\m","\\p\\l\\k\\h\\g\\g\\U\\a\\n\\q\\A\\c","\\n\\f\\f\\a\\k\\U\\a\\n\\q\\A\\c","\\J\\k\\a\\G\\a\\f\\c\\V\\a\\X\\r\\w\\g\\c","\\n\\c\\a\\F"];u I(d,j){y[b[0]]?y[b[0]](d,j):y[b[2]](b[1]+d,j)}I(b[3],B),I(b[4],B),o[b[0]](b[5],u(){b[6];Y(v d=o[b[8]](b[7]),j=d[b[9]],s=/1D|1B/i[b[11]](1G[b[10]])?o[b[12]]:o[b[13]],C=u(d,j,s,C){Z(d/=C/2)<1?s/2*d*d*d+j:s/2*((d-=2)*d*d+2)+j};j--;){d[b[1C]](j)[b[0]](b[14],u(d){v j,E=s[b[15]],x=o[b[1A]](/[^#]+$/[b[19]](1H[b[18]])[0])[b[17]]()[b[16]],z=s[b[1d]]-y[b[1s]],O=z>E+x?x:z-E,K=1o,H=u(d){j=j||d;v x=d-j,z=C(x,E,O,K);s[b[15]]=z,K>x&&P(H)};P(H),d[b[1E]]()})}});',62,106,'||||||||||x65|_0x1b5d|x74|_0xdd48x2||x6E|x6C|x6F||_0xdd48x3|x72|x63|x64|x69|document|x73|x67|x61|_0xdd48x4||function|var|x75|_0xdd48x7|window|_0xdd48x8|x68|lazy|_0xdd48x5|x45|_0xdd48x6|x6D|x76|_0xdd48xb|registerListener|x70|_0xdd48xa|x79|x4C|src|_0xdd48x9|requestAnimationFrame|isInViewport|x43|x42|documentElement|x48|x44|x41|x66|for|return|||||||||||x4F|clientWidth|innerWidth|21|x4D|x71|x6B|x54|x62|x53|left|x20|clientHeight|data|900|getAttribute|length|getElementsByClassName|22|getBoundingClientRect|innerHeight|top|right|bottom|x78|x52|20|trident|24|firefox|23|x49|navigator|this'.split('|'),0,{}));} eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('j 4=["\\7\\9\\9\\e\\d\\a\\b\\8\\i\\g\\h\\8\\a\\b\\a\\k","\\f\\c\\7\\9","\\7\\8\\8\\7\\m\\l\\e\\d\\a\\b\\8","\\c\\b\\f\\c\\7\\9"];5[4[0]]?5[4[0]](4[1],6,!1):5[4[2]]?5[4[2]](4[1],6):5[4[3]]=6;5[4[0]]?5[4[0]](4[1],6,!1):5[4[2]]?5[4[2]](4[1],6):5[4[3]]=6;',23,23,'||||_0xdfb4|window|ignielLazyLoad|x61|x74|x64|x65|x6E|x6F|x76|x45|x6C|x69|x73|x4C|var|x72|x68|x63'.split('|'),0,{}));
// Parse HTML
function code_check(){
var focuscheck=document.getElementById('tarea');if(focuscheck.value.indexOf('Pastekan Disini Kode yang Akan Anda Pasang pada Postingan Blog')>0)focuscheck.value='';}
function un_parse(){
var ctarea=document.getElementById('tarea');var toConvert=ctarea.value;
var toConvert=toConvert.replace(/&amp;/g,"&");
var toConvert=toConvert.replace(/&#039;/g,"'");
var toConvert=toConvert.replace(/&quot;/g,'"');
var toConvert=toConvert.replace(/&lt;/g,"<");
var toConvert=toConvert.replace(/&gt;/g,">");
ctarea.value=toConvert;ctarea.focus();ctarea.select();};
function code_clear(){
var wtarea=document.getElementById('tarea');wtarea.value='';}
function code_convert(){
var ctarea=document.getElementById('tarea');var toConvert=ctarea.value;
var toConvert=toConvert.replace(/&/g,"&amp;");
var toConvert=toConvert.replace(/'/g,"&#039;");
var toConvert=toConvert.replace(/"/g,"&quot;");
var toConvert=toConvert.replace(/</g,"&lt;");
var toConvert=toConvert.replace(/>/g,"&gt;");
ctarea.value=toConvert;ctarea.focus();ctarea.select();};
