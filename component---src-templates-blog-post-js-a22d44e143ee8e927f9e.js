(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(203),l=n.n(o),i=n(200),c=n(205),s=n(202),u=(n(209),n(238)),p=n(199);r.a.Component;n.d(e,"pageQuery",function(){return f});var d=i.a.a.withConfig({displayName:"blog-post__Link",componentId:"sc-1ajnw5p-0"})(["{transition:color 0.6s ease;text-decoration:none;boxShadow:none;color:#0071bc;&:hover{cursor:pointer;}}"]),m=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data.markdownRemark;console.log(t);var e=Object(c.get)(this.props,"data.config.frontmatter.title"),n=(Object(c.get)(this,"props.data.config.html"),t.excerpt),a=this.props.pageContext,o=a.previous,i=a.next;return r.a.createElement(s.a,{location:this.props.location,config:this.props.data.config,translations:t.frontmatter.translations},r.a.createElement(l.a,{htmlAttributes:{lang:this.props.pageContext.language},meta:[{name:"description",content:n}],title:t.frontmatter.title+" | "+e}),r.a.createElement("h3",null,t.frontmatter.category," > ",t.frontmatter.sub_category," "),r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("p",{style:{display:"block"}},r.a.createElement(d,{href:"/"}," Gregorio Cabral ")," - ",t.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("hr",null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,o&&r.a.createElement(d,{to:o.fields.slug,rel:"prev"},"← ",o.frontmatter.title)),r.a.createElement("li",null,i&&r.a.createElement(d,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},a}(r.a.Component),f=(e.default=m,"1974644774")},197:function(t,e,n){var a;t.exports=(a=n(201))&&a.default||a},199:function(t,e,n){"use strict";n.d(e,"b",function(){return s});var a=n(0),r=n.n(a),o=n(66),l=n.n(o);n.d(e,"a",function(){return l.a});n(197),n(9).default.enqueue;var i=r.a.createContext({});function c(t){var e=t.staticQueryData,n=t.data,a=t.query,o=t.render,l=n?n.data:e[a]&&e[a].data;return r.a.createElement(r.a.Fragment,null,l&&o(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(t){var e=t.data,n=t.query,a=t.render,o=t.children;return r.a.createElement(i.Consumer,null,function(t){return r.a.createElement(c,{data:e,query:n,render:a||o,staticQueryData:t})})}},201:function(t,e,n){"use strict";n.r(e);n(23);var a=n(0),r=n.n(a),o=n(102);e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json)):null}},202:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=(n(199),n(200)),l=n(211),i=new(n.n(l).a)({headerFontFamily:["Avenir Next","Arial"],bodyFontFamily:["Avenir Next","Arial"]});i.rhythm,i.scale;var c=o.a.div.withConfig({displayName:"Layout__Container",componentId:"sc-1nvm7fg-0"})(["@media (min-width:1200px){margin:20px 20%;}@media (max-width:1200px){margin:20px 5%;}"]),s=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props,e=(t.location,t.config,t.children);t.translations;return r.a.createElement(c,null,e)},a}(r.a.Component);e.a=s},238:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/es/"},frontmatter:{language:"es",language_label:"Español"}}},{node:{fields:{slug:"/"},frontmatter:{language:"en",language_label:"English"}}}]}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a22d44e143ee8e927f9e.js.map