(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{37:function(e,t,a){},39:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),s=a.n(o),c=(a(37),a(4)),i=a(5),l=a(8),u=a(7),h=a(13),d=(a(38),a(39),a(94)),j=a(1),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.HandleNameChange=function(t){e.setState({search:t.target.value})},e.HandleSubmit=function(t){t.preventDefault(),""===e.state.search.trim()&&h.b.error("Entry something pls :)",{}),e.props.onSubmit(e.state.search),e.setState({search:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{onSubmit:this.HandleSubmit,className:"SearchForm",children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)(d.a,{fill:"black"})}),Object(j.jsx)("input",{onChange:this.HandleNameChange,value:this.state.search,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),m=a(14),f=a(41).default,p=function(){function e(){Object(c.a)(this,e),this.page=1,this.searchQuery=""}return Object(i.a)(e,[{key:"fetchImg",value:function(e,t){return f.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=12&key=23531683-f7bec5b5f56f02023e7381294"))}},{key:"resetPage",value:function(){this.page=1}}]),e}(),g=a(32),O=a.n(g);a(80);function v(e){var t=e.value,a=e.onShowModal;return Object(j.jsx)("li",{onClick:a,className:"ImageGalleryItem",children:Object(j.jsx)("img",{className:"ImageGalleryItem-image",src:t.webformatURL,alt:"img","data-src":t.largeImageURL})})}a(81);function y(e){var t=e.onLoadMore;return Object(j.jsx)("button",{onClick:function(){return t()},className:"ButtonLoad",type:"button",children:"Load More"})}a(82);var x=document.querySelector("#modal-root"),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).HandleOverley=function(t){t.target===t.currentTarget&&e.props.onCloseModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keydown",(function(t){"Escape"===t.code&&e.props.onCloseModal()}))}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{class:"Overlay",onClick:this.HandleOverley,children:Object(j.jsx)("div",{class:"Modal",children:Object(j.jsx)("img",{src:this.props.link,alt:"img"})})}),x)}}]),a}(n.Component),M=a(20),w=(a(91),new p),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={status:"idle",values:"",error:"",page:1,showModal:!1,urlModal:""},e.loadImage=function(t,a){setTimeout((function(){w.fetchImg(t,a).then((function(e){return e.data.hits.length?(console.log(a),e.data.hits):Promise.reject(new Error("Nothing find ".concat(t)))})).then((function(t){return e.setState((function(e){return 1!==a?{values:[].concat(Object(m.a)(e.values),Object(m.a)(t)),status:"resolved"}:{values:Object(m.a)(t),status:"resolved"}}))})).catch((function(t){return e.setState({error:t,status:"rejected"})}))}),1e3)},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.showModal=function(t){e.setState((function(e){return{showModal:!e.showModal}})),e.setState({urlModal:t.target.dataset.src})},e.onCloseModal=function(){e.setState({showModal:!1})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.searchQuery,n=this.props.searchQuery,r=this.state.page;a!==n&&(this.setState({status:"pending"}),this.loadImage(n,1)),t.page!==this.state.page&&(this.setState({status:"pending"}),this.loadImage(n,r))}},{key:"render",value:function(){var e=this,t=this.state,a=t.status,n=t.values,r=t.error,o=t.urlModal;return"idle"===a?Object(j.jsx)("ul",{className:"gallery"}):"pending"===a?Object(j.jsxs)("div",{children:[n&&Object(j.jsx)("ul",{className:"ImageGallery ",children:n.map((function(e,t){return Object(j.jsx)(v,{value:e},t)}))}),Object(j.jsx)(O.a,{className:"spiner",type:"Oval",color:"black"})]}):"rejected"===a?Object(j.jsxs)("h1",{children:["ops... ",r.message]}):"resolved"===a?Object(j.jsxs)("div",{children:[Object(j.jsx)("ul",{className:"ImageGallery ",children:n.map((function(t,a){return Object(j.jsx)(v,{onShowModal:e.showModal,value:t},a)}))}),n.length>=12&&Object(j.jsx)("div",{className:"center",children:Object(j.jsx)(y,{onLoadMore:this.loadMore,message:"Load more"})}),n.length>=24&&M.animateScroll.scrollToBottom(),Object(j.jsx)(M.Link,{activeClass:"",to:"gallery",spy:!0,smooth:!0,offset:-70,duration:500}),this.state.showModal&&Object(j.jsx)(S,{link:o,onCloseModal:this.onCloseModal})]}):void 0}}]),a}(n.Component),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.ChangeSubmit=function(t){e.setState({search:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{onSubmit:this.ChangeSubmit}),Object(j.jsx)(k,{searchQuery:this.state.search}),Object(j.jsx)(h.a,{})]})}}]),a}(n.Component),N=C;s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.2958fa63.chunk.js.map