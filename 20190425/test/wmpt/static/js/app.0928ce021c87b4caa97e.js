webpackJsonp([0],{"/7cU":function(t,s){},"/FCT":function(t,s){},"/HTW":function(t,s){},"/ccn":function(t,s){},"4Uwr":function(t,s,a){t.exports=a.p+"static/img/logo.aee38a9.jpg"},"5Kde":function(t,s){},"88AM":function(t,s){},"9jKD":function(t,s){},BEOv:function(t,s){},BfqV:function(t,s){},DKjl:function(t,s){!function(t,s){function a(){var a=e.getBoundingClientRect().width;a>(s=s||540)&&(a=s);var i=100*a/t;o.innerHTML="html{font-size:"+i+"px;}"}var i,n=document,c=window,e=n.documentElement,o=document.createElement("style");if(e.firstElementChild)e.firstElementChild.appendChild(o);else{var r=n.createElement("div");r.appendChild(o),n.write(r.innerHTML),r=null}a(),c.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(a,300)},!1),c.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(a,300))},!1),"complete"===n.readyState?n.body.style.fontSize="16px":n.addEventListener("DOMContentLoaded",function(t){n.body.style.fontSize="16px"},!1)}(750,750)},IiY9:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),n=(a("DKjl"),{render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]});var c=a("VU/8")({name:"App"},n,!1,function(t){a("/ccn")},null,null).exports,e=a("/ocq"),o={data:function(){return{}},methods:{loginBtn:function(){var t=this.$refs.userName.value,s=this.$refs.userPassword.value;"123"==t&&"123"==s?this.$router.push("/member"):alert("用户名或密码错误")}},components:{}},r={data:function(){return{}},created:function(){},methods:{goBlack:function(){this.$router.go(-1)}},components:{}};r.components={};var l=r,v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"headWrap"},[a("div",{staticClass:"headLeft"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(s){t.goBlack()}}},[a("i",{staticClass:"iconfont icon-houtui"})])]),t._v(" "),t._t("title"),t._v(" "),a("div",{staticClass:"headRight"},[t._t("right")],2)],2)},staticRenderFns:[]};var d=a("VU/8")(l,v,!1,function(t){a("sYgg"),a("gqad")},"data-v-72e0ab1e",null).exports;o.components={Header:d};var u=o,p={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"loginWrap"},[i("Header",[i("span",{attrs:{slot:"title"},slot:"title"},[t._v("会员登录")]),t._v(" "),i("router-link",{attrs:{slot:"right",to:"/registered"},slot:"right"},[t._v("注册")])],1),t._v(" "),i("div",{staticClass:"loginMain"},[i("img",{staticClass:"logo",attrs:{src:a("4Uwr")}}),t._v(" "),i("ul",[i("li",[t._m(0),t._v(" "),i("input",{ref:"userName",attrs:{type:"text",name:"userName",placeholder:"请输入用户名"}})]),t._v(" "),i("li",[t._m(1),t._v(" "),i("input",{ref:"userPassword",attrs:{type:"password",name:"userPassword",placeholder:"请输入密码"}})])]),t._v(" "),i("a",{staticClass:"loginBtn",attrs:{href:"javascript:;"},on:{click:function(s){t.loginBtn()}}},[t._v("登录")])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("i",{staticClass:"iconfont icon-ren"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("i",{staticClass:"iconfont icon-mima"})])}]};var _=a("VU/8")(u,p,!1,function(t){a("nTU2")},"data-v-36363bc2",null).exports,h={data:function(){return{}},watch:{},created:function(){},methods:{checkName:function(t){t.target.value=t.target.value.replace(/[^\w\.\/]/gi,"")},checkPassword:function(t){t.target.value=t.target.value.replace(/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/g,"")},regBtn:function(){this.$refs.userName.value;this.$refs.userPassword.value==this.$refs.userPassword2.value?this.$router.push("/login"):alert("两次输入的密码不一致")}},components:{}};h.components={Header:d};var f=h,C={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"registeredWrap"},[a("Header",[a("span",{attrs:{slot:"title"},slot:"title"},[t._v("会员注册")])]),t._v(" "),a("div",{staticClass:"reg-con-wrap"},[a("div",{staticClass:"reg-con-main"},[a("ul",[a("li",[a("span",[t._v("用户名：")]),t._v(" "),a("input",{ref:"userName",attrs:{type:"text",name:"userName",placeholder:"请输入用户名"},on:{keyup:function(s){t.checkName(s)}}})]),t._v(" "),a("li",[a("span",[t._v("密码：")]),t._v(" "),a("input",{ref:"userPassword",attrs:{type:"password",name:"userPassword",placeholder:"请输入密码"},on:{keyup:function(s){t.checkPassword(s)}}})]),t._v(" "),a("li",[a("span",[t._v("确认密码：")]),t._v(" "),a("input",{ref:"userPassword2",attrs:{type:"password",name:"userPassword2",placeholder:"请再次输入密码"},on:{keyup:function(s){t.checkPassword(s)}}})])])]),t._v(" "),a("a",{staticClass:"reg-submit",attrs:{href:"javascript:;"},on:{click:function(s){t.regBtn()}}},[t._v("注册")])])],1)},staticRenderFns:[]};var m=a("VU/8")(f,C,!1,function(t){a("aMPM")},"data-v-10811bc0",null).exports,g={data:function(){return{}},watch:{},created:function(){},methods:{},components:{}};g.components={};var b=g,w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"registeredWrap"},[this._v("\n\t骑手注册页\n")])},staticRenderFns:[]};var y=a("VU/8")(b,w,!1,function(t){a("88AM")},"data-v-79b1a6be",null).exports,j={data:function(){return{h:window.innerHeight+"px"}},watch:{},created:function(){},mounted:function(){var t=this;window.onresize=function(){t.h=window.innerHeight+"px"}},methods:{},components:{}};j.components={};var x=j,k={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"memberWrap",style:{height:t.h}},[t._m(0),t._v(" "),a("div",{staticClass:"myOrder"},[a("div",{staticClass:"myOrderHead"},[t._v("我的订单"),a("router-link",{attrs:{to:"/orderList"}},[t._v("全部订单 "),a("i",{staticClass:"iconfont icon-xiangyou"})])],1),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"offerCollection"},[a("ul",[t._m(2),t._v(" "),a("li",[a("router-link",{attrs:{to:"/collection"}},[a("i",{staticClass:"iconfont icon-shoucang1",staticStyle:{color:"#dba829"}}),t._v(" "),a("span",[t._v("我的收藏")]),t._v(" "),a("b",[a("i",{staticClass:"iconfont icon-xiangyou"})])])],1)]),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"memberHead"},[s("img",{staticClass:"avatar",attrs:{src:a("4Uwr")}}),this._v(" "),s("span",{staticClass:"userName"},[this._v("userName")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"myOrderMain"},[a("ul",[a("li",[a("i",{staticClass:"iconfont icon-daifukuan"}),t._v(" "),a("span",[t._v("待付款")])]),t._v(" "),a("li",[a("i",{staticClass:"iconfont icon-daishouhuo"}),t._v(" "),a("span",[t._v("待收货")])]),t._v(" "),a("li",[a("i",{staticClass:"iconfont icon-yiwancheng"}),t._v(" "),a("span",[t._v("已完成")])]),t._v(" "),a("li",[a("i",{staticClass:"iconfont icon-icon5"}),t._v(" "),a("span",[t._v("退货")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("i",{staticClass:"iconfont icon-weibiaoti1",staticStyle:{color:"#de8156"}}),this._v(" "),s("span",[this._v("优惠券")]),this._v(" "),s("b",[s("i",{staticClass:"iconfont icon-xiangyou"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("i",{staticClass:"iconfont icon-wodeyue",staticStyle:{color:"#60aae7"}}),this._v(" "),s("span",[this._v("我的余额")]),this._v(" "),s("b",[s("i",{staticClass:"iconfont icon-xiangyou"})])]),this._v(" "),s("li",[s("i",{staticClass:"iconfont icon-xinyong",staticStyle:{color:"#f95d4e"}}),this._v(" "),s("span",[this._v("我的信用")]),this._v(" "),s("b",[s("i",{staticClass:"iconfont icon-xiangyou"})])])])}]};var $=a("VU/8")(x,k,!1,function(t){a("BEOv")},"data-v-bb670e4a",null).exports,E={data:function(){return{}},watch:{},created:function(){},methods:{},components:{}},N={data:function(){return{h:.2*window.innerWidth+"px"}},watch:{},created:function(){},mounted:function(){var t=this;window.onresize=function(){t.h=.2*window.innerWidth+"px"}},methods:{goBlack:function(){this.$router.go(-1)},collectBtn:function(t){"i"==t.target.tagName.toLowerCase()&&("iconfont icon-shoucang"==t.target.className?t.target.className="iconfont icon-shoucang1":"iconfont icon-shoucang1"==t.target.className&&(t.target.className="iconfont icon-shoucang"))}},components:{}};N.components={};var P=N,U={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"shopHeadWrap"},[t._m(0),t._v(" "),i("img",{staticClass:"shopLogo",style:{height:t.h},attrs:{src:a("4Uwr")}}),t._v(" "),i("a",{staticClass:"blackBtn",attrs:{href:"javascript:;"},on:{click:function(s){t.goBlack()}}},[i("i",{staticClass:"iconfont icon-fanhuitianchong"})]),t._v(" "),i("a",{staticClass:"collectBtn",attrs:{href:"javascript:;"},on:{click:function(s){t.collectBtn(s)}}},[i("i",{staticClass:"iconfont icon-shoucang1"})])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bannerWrap"},[s("img",{attrs:{src:a("hKcQ")}})])}]};var W=a("VU/8")(P,U,!1,function(t){a("/7cU")},"data-v-2b406b7a",null).exports;function F(t,s){return window.getComputedStyle?window.getComputedStyle(t,null)[s]:t.currentStyle[s]}var H={data:function(){return{}},watch:{},created:function(){},mounted:function(){this.getUlWidth(),this.ulMove()},methods:{getUlWidth:function(){for(var t=this.$refs.bulletinUl,s=t.children,a=0,i=0;i<s.length;i++)a+=parseFloat(F(s[i],"width"));t.style.width=a+"px"},ulMove:function(){var t=this.$refs.bulletinMain,s=this.$refs.bulletinUl,a=parseFloat(F(t,"width")),i=parseFloat(F(s,"width")),n=0;setInterval(function(){(n-=4)<=-i&&(n=a),s.style.left=n+"px"},200)}},components:{}};H.components={};var S=H,B={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"shopActivityWrap"},[s("div",{staticClass:"shopActivityMain"},[s("div",{staticClass:"bulletin"},[s("h4",[this._v("店铺公告：")]),this._v(" "),s("div",{ref:"bulletinMain",staticClass:"bulletinMain"},[s("ul",{ref:"bulletinUl"},[s("li",[this._v("该店新开业全场9折！满50减2！")]),this._v(" "),s("li",[this._v("该店新开业全场8折！满100减4！")])])])]),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"offer"},[s("p",[s("i",{staticClass:"iconfont icon-jian1"}),this._v("满50减2")])])}]};var L=a("VU/8")(S,B,!1,function(t){a("/HTW")},"data-v-ba035338",null).exports,M={data:function(){return{curr:0}},watch:{},created:function(){},mounted:function(){this.setHeight()},methods:{setHeight:function(){for(var t=this.$refs.shopProductRight,s=t.getElementsByTagName("li"),a=t.getElementsByClassName("productImg"),i=parseFloat(F(s[0],"width")),n=0;n<a.length;n++)a[n].style.height=.26*i+"px"},tabProduct:function(t){this.curr=t}},components:{}};M.components={};var z=M,R={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"shopProductWrap"},[a("div",{staticClass:"shopProductLeft"},[a("ul",[a("li",{class:{active:0==t.curr},on:{click:function(s){t.tabProduct(0)}}},[t._v("类别1")]),t._v(" "),a("li",{class:{active:1==t.curr},on:{click:function(s){t.tabProduct(1)}}},[t._v("类别2")]),t._v(" "),a("li",{class:{active:2==t.curr},on:{click:function(s){t.tabProduct(2)}}},[t._v("类别3")])])]),t._v(" "),a("div",{ref:"shopProductRight",staticClass:"shopProductRight"},[0==t.curr?a("div",{staticClass:"shopProductCon"},[t._m(0)]):t._e(),t._v(" "),1==t.curr?a("div",{staticClass:"shopProductCon"},[t._m(1)]):t._e(),t._v(" "),2==t.curr?a("div",{staticClass:"shopProductCon"},[t._m(2)]):t._e()])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("div",{staticClass:"productImg"},[a("img",{attrs:{src:"http://img1.360buyimg.com/n6/jfs/t4036/320/1521607279/199780/c5780d6/587d8999N301d4489.jpg"}})]),t._v(" "),a("div",{staticClass:"productCon"},[a("div",{staticClass:"productName"},[t._v("商品1")]),t._v(" "),a("div",{staticClass:"productInfo"},[t._v("商品描述")]),t._v(" "),a("div",{staticClass:"productSell"},[t._v("\n\t\t\t\t\t\t\t月销售"),a("span",[t._v("99")]),t._v("库存量"),a("span",[t._v("99")])]),t._v(" "),a("div",{staticClass:"productPrice"},[a("span",[t._v("￥12.00")]),t._v(" "),a("del",[t._v("原价15.00")])])]),t._v(" "),a("div",{staticClass:"countWrap"},[a("a",{staticClass:"subtract",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jianhao"})]),t._v(" "),a("span",[t._v("0")]),t._v(" "),a("a",{staticClass:"add",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jiahao-copy"})])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("div",{staticClass:"productImg"},[a("img",{attrs:{src:"http://img1.360buyimg.com/n6/jfs/t4036/320/1521607279/199780/c5780d6/587d8999N301d4489.jpg"}})]),t._v(" "),a("div",{staticClass:"productCon"},[a("div",{staticClass:"productName"},[t._v("商品2")]),t._v(" "),a("div",{staticClass:"productInfo"},[t._v("商品描述")]),t._v(" "),a("div",{staticClass:"productSell"},[t._v("\n\t\t\t\t\t\t\t月销售"),a("span",[t._v("99")]),t._v("库存量"),a("span",[t._v("99")])]),t._v(" "),a("div",{staticClass:"productPrice"},[a("span",[t._v("￥12.00")]),t._v(" "),a("del",[t._v("原价15.00")])])]),t._v(" "),a("div",{staticClass:"countWrap"},[a("a",{staticClass:"subtract",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jianhao"})]),t._v(" "),a("span",[t._v("0")]),t._v(" "),a("a",{staticClass:"add",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jiahao-copy"})])])]),t._v(" "),a("li",[a("div",{staticClass:"productImg"},[a("img",{attrs:{src:"http://img1.360buyimg.com/n6/jfs/t4036/320/1521607279/199780/c5780d6/587d8999N301d4489.jpg"}})]),t._v(" "),a("div",{staticClass:"productCon"},[a("div",{staticClass:"productName"},[t._v("商品3")]),t._v(" "),a("div",{staticClass:"productInfo"},[t._v("商品描述")]),t._v(" "),a("div",{staticClass:"productSell"},[t._v("\n\t\t\t\t\t\t\t月销售"),a("span",[t._v("99")]),t._v("库存量"),a("span",[t._v("99")])]),t._v(" "),a("div",{staticClass:"productPrice"},[a("span",[t._v("￥12.00")]),t._v(" "),a("del",[t._v("原价15.00")])])]),t._v(" "),a("div",{staticClass:"countWrap"},[a("a",{staticClass:"subtract",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jianhao"})]),t._v(" "),a("span",[t._v("0")]),t._v(" "),a("a",{staticClass:"add",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jiahao-copy"})])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("div",{staticClass:"productImg"},[a("img",{attrs:{src:"http://img1.360buyimg.com/n6/jfs/t4036/320/1521607279/199780/c5780d6/587d8999N301d4489.jpg"}})]),t._v(" "),a("div",{staticClass:"productCon"},[a("div",{staticClass:"productName"},[t._v("商品4")]),t._v(" "),a("div",{staticClass:"productInfo"},[t._v("商品描述")]),t._v(" "),a("div",{staticClass:"productSell"},[t._v("\n\t\t\t\t\t\t\t月销售"),a("span",[t._v("99")]),t._v("库存量"),a("span",[t._v("99")])]),t._v(" "),a("div",{staticClass:"productPrice"},[a("span",[t._v("￥12.00")]),t._v(" "),a("del",[t._v("原价15.00")])])]),t._v(" "),a("div",{staticClass:"countWrap"},[a("a",{staticClass:"subtract",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jianhao"})]),t._v(" "),a("span",[t._v("0")]),t._v(" "),a("a",{staticClass:"add",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jiahao-copy"})])])]),t._v(" "),a("li",[a("div",{staticClass:"productImg"},[a("img",{attrs:{src:"http://img1.360buyimg.com/n6/jfs/t4036/320/1521607279/199780/c5780d6/587d8999N301d4489.jpg"}})]),t._v(" "),a("div",{staticClass:"productCon"},[a("div",{staticClass:"productName"},[t._v("商品5")]),t._v(" "),a("div",{staticClass:"productInfo"},[t._v("商品描述")]),t._v(" "),a("div",{staticClass:"productSell"},[t._v("\n\t\t\t\t\t\t\t月销售"),a("span",[t._v("99")]),t._v("库存量"),a("span",[t._v("99")])]),t._v(" "),a("div",{staticClass:"productPrice"},[a("span",[t._v("￥12.00")]),t._v(" "),a("del",[t._v("原价15.00")])])]),t._v(" "),a("div",{staticClass:"countWrap"},[a("a",{staticClass:"subtract",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jianhao"})]),t._v(" "),a("span",[t._v("0")]),t._v(" "),a("a",{staticClass:"add",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jiahao-copy"})])])]),t._v(" "),a("li",[a("div",{staticClass:"productImg"},[a("img",{attrs:{src:"http://img1.360buyimg.com/n6/jfs/t4036/320/1521607279/199780/c5780d6/587d8999N301d4489.jpg"}})]),t._v(" "),a("div",{staticClass:"productCon"},[a("div",{staticClass:"productName"},[t._v("商品6")]),t._v(" "),a("div",{staticClass:"productInfo"},[t._v("商品描述")]),t._v(" "),a("div",{staticClass:"productSell"},[t._v("\n\t\t\t\t\t\t\t月销售"),a("span",[t._v("99")]),t._v("库存量"),a("span",[t._v("99")])]),t._v(" "),a("div",{staticClass:"productPrice"},[a("span",[t._v("￥12.00")]),t._v(" "),a("del",[t._v("原价15.00")])])]),t._v(" "),a("div",{staticClass:"countWrap"},[a("a",{staticClass:"subtract",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jianhao"})]),t._v(" "),a("span",[t._v("0")]),t._v(" "),a("a",{staticClass:"add",attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-jiahao-copy"})])])])])}]};var I=a("VU/8")(z,R,!1,function(t){a("9jKD")},"data-v-4ea56b54",null).exports,T=a("9qgI"),V=a.n(T),O={data:function(){return{bShowCart:!0}},watch:{},created:function(){},methods:{showCart:function(){if(this.bShowCart){var t=this.$refs.productBackground,s=this.$refs.productList;t.style.display="block",V()(t,{opacity:.6},800),V()(s,"slideDown",500),this.bShowCart=!1}},hideCart:function(){var t=this.$refs.productBackground,s=this.$refs.productList;V()(t,{opacity:0},{complete:function(s){t.style.display="none"}},800),V()(s,"slideUp",500),this.bShowCart=!0}},components:{}};O.components={};var A=O,X={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"shopCartWrap"},[a("div",{ref:"productBackground",staticClass:"productBackground",on:{click:function(s){t.hideCart()}}}),t._v(" "),a("div",{ref:"productList",staticClass:"productList"},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"shopCartMain"},[a("div",{staticClass:"shopCart"},[a("a",{staticClass:"shopCartBtn",attrs:{href:"javascript:;"},on:{click:function(s){t.showCart()}}},[a("i",{staticClass:"iconfont icon-ziyuan"}),t._v(" "),a("span",[t._v("9")])])]),t._v(" "),t._m(2),t._v(" "),a("router-link",{staticClass:"aBuy",attrs:{to:"/addOrder"}},[t._v("去结算")])],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"productListHead"},[s("h3",[this._v("购物车列表")]),this._v(" "),s("a",{staticClass:"clearCart",attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont icon-qingkongshanchu"}),this._v("清空购物车")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"productListMain"},[s("ul",[s("li",[s("span",{staticClass:"productName"},[this._v("商品1")]),this._v(" "),s("div",{staticClass:"countWrap"},[s("a",{staticClass:"subtract",attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont icon-jianhao"})]),this._v(" "),s("span",[this._v("0")]),this._v(" "),s("a",{staticClass:"add",attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont icon-jiahao-copy"})])]),this._v(" "),s("span",{staticClass:"productPrice"},[this._v("￥12.00")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"totalMain"},[s("span",{staticClass:"total"},[this._v("￥12.00")]),this._v(" "),s("p",[this._v("另需配送费0.00")])])}]};var q=a("VU/8")(A,X,!1,function(t){a("5Kde")},"data-v-9f3e147a",null).exports;E.components={shopHead:W,shopActivity:L,shopProduct:I,shopCart:q};var K=E,D={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"shopWrap"},[s("shop-head"),this._v(" "),s("shop-activity"),this._v(" "),s("shop-product"),this._v(" "),s("shop-cart")],1)},staticRenderFns:[]};var Y=a("VU/8")(K,D,!1,function(t){a("BfqV")},"data-v-528b949a",null).exports,J={data:function(){return{}},watch:{},created:function(){},methods:{},components:{}};J.components={Header:d};var Q=J,G={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"addOrderWrap"},[s("Header",[s("span",{attrs:{slot:"title"},slot:"title"},[this._v("提交订单")])]),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"addOrderMain"},[i("div",{staticClass:"takeawayAddress"},[i("h3",[t._v("外卖配送")]),t._v(" "),i("ul",[i("li",[i("span",[t._v("收货人：")]),t._v(" "),i("input",{attrs:{type:"text",placeholder:"填写收货人"}})]),t._v(" "),i("li",[i("span",[t._v("联系电话：")]),t._v(" "),i("input",{attrs:{type:"number",placeholder:"填写联系电话"}})]),t._v(" "),i("li",[i("span",[t._v("配送地址：")]),t._v(" "),i("input",{attrs:{type:"text",placeholder:"填写配送地址"}})])])]),t._v(" "),i("div",{staticClass:"productList"},[i("div",{staticClass:"productMain"},[i("h3",[i("img",{staticClass:"shopLogo",attrs:{src:a("4Uwr")}}),i("span",[t._v("四舍零食店")])]),t._v(" "),i("ul",{staticClass:"productUl"},[i("li",[i("span",{staticClass:"productName"},[t._v("方便面")]),t._v(" "),i("span",{staticClass:"productTotal"},[t._v("￥12.00")]),t._v(" "),i("span",{staticClass:"productNumber"},[t._v("X1")])])]),t._v(" "),i("ul",{staticClass:"ShippingFeeUl"},[i("li",[i("span",{staticClass:"ShippingFeeName"},[t._v("配送费")]),t._v(" "),i("span",{staticClass:"ShippingFeeTotal"},[t._v("￥0.00")]),t._v(" "),i("span",{staticClass:"ShippingFeeNumber"},[t._v("X1")])])]),t._v(" "),i("ul",{staticClass:"offerUl"},[i("li",[i("span",{staticClass:"offerName"},[i("i",{staticClass:"iconfont icon-jian1"}),t._v("满减优惠")]),t._v(" "),i("span",{staticClass:"offerTotal"},[t._v("-￥0.00")])])])]),t._v(" "),i("div",{staticClass:"totalWrap"},[i("p",[t._v("合计"),i("span",[t._v("￥12.00")])])])]),t._v(" "),i("div",{staticClass:"offerWrap"},[i("p",[i("i",{staticClass:"iconfont icon-quan"}),t._v(" "),i("span",{staticClass:"offerSpanLeft"},[t._v("暂无可用")]),t._v(" "),i("span",{staticClass:"offerSpanCon"},[t._v("优惠券")]),t._v(" "),i("span",{staticClass:"offerSpanRight"},[t._v("点击查看")])])]),t._v(" "),i("div",{staticClass:"payWrap"},[i("h3",[t._v("支付方式 "),i("span",{staticClass:"payName"},[t._v("微信支付")])]),t._v(" "),i("ul",[i("li",{staticClass:"active"},[i("i",{staticClass:"iconfont icon-xuanzhong"}),t._v("微信支付"),i("span")]),t._v(" "),i("li",[i("i",{staticClass:"iconfont icon-xuanzhong"}),t._v("钱包支付"),i("span",[t._v("余额不足")])])])]),t._v(" "),i("div",{staticClass:"addOrderFoot"},[i("span",{staticClass:"addOrderOffer"},[t._v("已优惠￥"),i("span",[t._v("0.00")])]),t._v(" "),i("span",{staticClass:"addOrderTotal"},[t._v("合计￥"),i("span",[t._v("12.00")])]),t._v(" "),i("a",{staticClass:"addOrderBtn",attrs:{href:"javascript:;"}},[t._v("提交订单")])])])}]};var Z=a("VU/8")(Q,G,!1,function(t){a("lXjC")},"data-v-19016d62",null).exports,tt={data:function(){return{}},watch:{},created:function(){},methods:{},components:{}};tt.components={Header:d};var st=tt,at={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"orderListWrap"},[s("Header",[s("span",{attrs:{slot:"title"},slot:"title"},[this._v("我的订单")])]),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"orderListMain"},[a("div",{staticClass:"orderListHead"},[a("ul",[a("li",{staticClass:"active"},[t._v("待支付")]),t._v(" "),a("li",[t._v("待收货")]),t._v(" "),a("li",[t._v("已完成")]),t._v(" "),a("li",[t._v("退货")]),t._v(" "),a("li",[t._v("全部")])])])])}]};var it=a("VU/8")(st,at,!1,function(t){a("/FCT")},"data-v-12b77ccb",null).exports,nt={data:function(){return{}},watch:{},created:function(){},methods:{},components:{}};nt.components={Header:d};var ct=nt,et={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"collectionWrap"},[i("Header",[i("span",{attrs:{slot:"title"},slot:"title"},[t._v("我的收藏")])]),t._v(" "),i("div",{staticClass:"collectionMain"},[i("ul",[i("li",[i("router-link",{attrs:{to:"/shop"}},[i("div",{staticClass:"shopImg"},[i("img",{staticClass:"shopLogo",attrs:{src:a("4Uwr")}})]),t._v(" "),i("div",{staticClass:"shopCon"},[i("div",{staticClass:"shopName"},[t._v("XXX小卖铺")]),t._v(" "),i("div",{staticClass:"shopHot"},[i("i",{staticClass:"iconfont icon-xingzhuang60kaobei2"}),t._v(" "),i("i",{staticClass:"iconfont icon-xingzhuang60kaobei2"}),t._v(" "),i("i",{staticClass:"iconfont icon-xingzhuang60kaobei2"}),t._v(" "),i("i",{staticClass:"iconfont icon-xingzhuang60kaobei2"}),t._v(" "),i("i",{staticClass:"iconfont icon-xingzhuang60kaobei2"})]),t._v(" "),i("div",{staticClass:"monthlySales"},[t._v("\n\t\t    \t\t\t\t\t月销"),i("span",[t._v("999")])]),t._v(" "),i("div",{staticClass:"toll"},[t._v("\n\t\t    \t\t\t\t\t配送费:"),i("span",[t._v("￥12.00")]),t._v("\n\t\t    \t\t\t\t\t餐盒费:"),i("span",[t._v("￥12.00")])])])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/shop"}},[i("div",{staticClass:"shopImg"},[i("img",{staticClass:"shopLogo",attrs:{src:a("4Uwr")}})]),t._v(" "),i("div",{staticClass:"shopCon"},[i("div",{staticClass:"shopName"},[t._v("XXX小卖铺")]),t._v(" "),i("div",{staticClass:"shopHot"},[i("i",{staticClass:"iconfont icon-xingzhuang60kaobei2"}),t._v(" "),i("i",{staticClass:"iconfont icon-xingzhuang60kaobei2"}),t._v(" "),i("i",{staticClass:"iconfont icon-xingzhuang60kaobei2"}),t._v(" "),i("i",{staticClass:"iconfont icon-xingzhuang60kaobei2"}),t._v(" "),i("i",{staticClass:"iconfont icon-xingzhuang60kaobei2"})]),t._v(" "),i("div",{staticClass:"monthlySales"},[t._v("\n\t\t    \t\t\t\t\t月销"),i("span",[t._v("999")])]),t._v(" "),i("div",{staticClass:"toll"},[t._v("\n\t\t    \t\t\t\t\t配送费:"),i("span",[t._v("￥12.00")]),t._v("\n\t\t    \t\t\t\t\t餐盒费:"),i("span",[t._v("￥12.00")])])])])],1)])])],1)},staticRenderFns:[]};var ot=a("VU/8")(ct,et,!1,function(t){a("IiY9")},"data-v-3c70dd9b",null).exports,rt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello"},[this._v("\n  首页\n")])},staticRenderFns:[]};var lt=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},rt,!1,function(t){a("zJPF")},"data-v-b13e4b00",null).exports;i.a.use(e.a);var vt=new e.a({routes:[{path:"/",redirect:"/index"},{path:"/index",component:lt},{path:"/login",component:_},{path:"/registered",component:m},{path:"/registered2",component:y},{path:"/shop",component:Y},{path:"/addOrder",component:Z},{path:"/orderList",component:it},{path:"/collection",component:ot},{path:"/member",component:$}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:vt,components:{App:c},template:"<App/>"})},aMPM:function(t,s){},gqad:function(t,s){},hKcQ:function(t,s,a){t.exports=a.p+"static/img/banner.9a709cd.jpg"},lXjC:function(t,s){},nTU2:function(t,s){},sYgg:function(t,s){},zJPF:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.0928ce021c87b4caa97e.js.map