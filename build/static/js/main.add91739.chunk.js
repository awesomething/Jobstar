(this.webpackJsonpjobstar=this.webpackJsonpjobstar||[]).push([[0],{42:function(e,t){},57:function(e,t,c){},76:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(12),o=c.n(i),a=c(38),r=c(18),l=c(39),d=c(40),h=c(49),j=c(47),b=c(13),u=c(3),p=c(48),x=c(11),f=(c(57),c(17)),O=c.n(f),m=c(1);var g=function(){var e=Object(s.useState)(""),t=Object(x.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(0),o=Object(x.a)(i,2),a=o[0],r=o[1],l=Object(s.useState)(""),d=Object(x.a)(l,2),h=d[0],j=d[1],b=Object(s.useState)(""),u=Object(x.a)(b,2),f=u[0],g=u[1],y=Object(s.useState)(0),w=Object(x.a)(y,2),v=w[0],k=w[1],C=Object(s.useState)(0),N=Object(x.a)(C,2),S=N[0],A=N[1],I=Object(s.useState)([]),T=Object(x.a)(I,2),P=T[0],Y=T[1];return Object(m.jsxs)("div",{className:"Search",children:[Object(m.jsxs)("div",{className:"information",children:[Object(m.jsx)("label",{children:"Company:"}),Object(m.jsx)("input",{type:"text",onChange:function(e){n(e.target.value)}}),Object(m.jsx)("label",{children:"Experience:"}),Object(m.jsx)("input",{type:"number",onChange:function(e){r(e.target.value)}}),Object(m.jsx)("label",{children:"Country:"}),Object(m.jsx)("input",{type:"text",onChange:function(e){j(e.target.value)}}),Object(m.jsx)("label",{children:"Position:"}),Object(m.jsx)("input",{type:"text",onChange:function(e){g(e.target.value)}}),Object(m.jsx)("label",{children:"Wage (year):"}),Object(m.jsx)("input",{type:"number",onChange:function(e){k(e.target.value)}}),Object(m.jsx)("button",{onClick:function(){O.a.post("https://fast-cliffs-44772.herokuapp.com/create",{company:c,experience:a,country:h,position:f,wage:v}).then((function(){Y([].concat(Object(p.a)(P),[{company:c,experience:a,country:h,position:f,wage:v}]))}))},children:"Add Job"})]}),Object(m.jsxs)("div",{className:"employees",children:[Object(m.jsx)("button",{onClick:function(){O.a.get("https://fast-cliffs-44772.herokuapp.com/employees").then((function(e){Y(e.data)}))},children:"Show Jobs"}),P.map((function(e,t){return Object(m.jsxs)("div",{className:"employee",children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("h3",{children:["Company: ",e.company]}),Object(m.jsxs)("h3",{children:["Experience: ",e.experience]}),Object(m.jsxs)("h3",{children:["Country: ",e.country]}),Object(m.jsxs)("h3",{children:["Position: ",e.position]}),Object(m.jsxs)("h3",{children:["Wage: ",e.wage]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"text",placeholder:"2000...",onChange:function(e){A(e.target.value)}}),Object(m.jsxs)("button",{onClick:function(){var t;t=e.id,O.a.put("https://fast-cliffs-44772.herokuapp.com/update",{wage:S,id:t}).then((function(e){Y(P.map((function(e){return e.id===t?{id:e.id,company:e.company,country:e.country,experience:e.experience,position:e.position,wage:S}:e})))}))},children:[" ","Update"]}),Object(m.jsx)("button",{onClick:function(){var t;t=e.id,O.a.delete("https://fast-cliffs-44772.herokuapp.com/delete/".concat(t)).then((function(e){Y(P.filter((function(e){return e.id!==t})))}))},children:"Delete"})]})]})}))]})]})};c(76);var y=function(){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)(b.b,{to:"/",children:[Object(m.jsx)("center",{children:Object(m.jsx)("h2",{children:"JobStar"})}),Object(m.jsx)("img",{className:"header__icon",src:"https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg",alt:""})]}),Object(m.jsx)("div",{className:"header__center",children:Object(m.jsx)("input",{type:"text"})}),Object(m.jsx)("div",{className:"header__right"})]})},w=(c(81),c(82),c(99)),v=c(42),k=c.n(v);var C=function(){var e=Object(u.f)(),t=Object(s.useState)(!1),c=Object(x.a)(t,2),n=c[0],i=c[1];return Object(m.jsxs)("div",{className:"banner",children:[Object(m.jsxs)("div",{className:"banner__search",children:[n&&Object(m.jsx)(k.a,{}),Object(m.jsx)(w.a,{onClick:function(){return i(!n)},className:"banner__searchButton",variant:"outlined",children:n?"Hide":"Search"})]}),Object(m.jsxs)("div",{className:"banner__info",children:[Object(m.jsx)("h3",{children:"Are You Looking To Hire Developers On Contract?"}),Object(m.jsx)("h5",{children:"Post a contract job and hire top candidates."}),Object(m.jsx)(w.a,{onClick:function(){return e.push("/search")},variant:"outlined",children:"Post Jobs"})]})]})},N=c(46),S=c.n(N);c(83);var A=function(e){var t=e.src,c=e.title,s=e.description;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:t,alt:""}),Object(m.jsxs)("div",{className:"card__info",children:[Object(m.jsx)("h2",{children:c}),Object(m.jsx)("h4",{children:s})]})]})};var I=function(){return Object(s.useEffect)((function(){S()({key:"c029afa04c02572367ff910e88b048342e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){"name"===e.command&&alert("This code was executed")}})}),[]),Object(m.jsxs)("div",{className:"home-wrapper",children:[Object(m.jsx)(C,{}),Object(m.jsxs)("div",{className:"home__section",children:[Object(m.jsx)(A,{src:"https://media.giphy.com/media/cYaAvC3JnTpiJv5ZxA/giphy.gif",title:"Post Jobs and Website To Clone",description:"You would be able to post your jobs and website link you want developers to clone"}),Object(m.jsx)(A,{src:"https://media.giphy.com/media/CTkWFZ1IDvsfS/giphy.gif",title:"Track Contributions Daily",description:"Easily track how candidates contribute"}),Object(m.jsx)(A,{src:"https://media.giphy.com/media/ObWYXyjM30T6OUICdM/giphy.gif",title:"Offer The Contract Job",description:"In one to two weeks, you decide to offer the contract job to the top candidate"})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{class:"section-3",children:[Object(m.jsxs)("div",{class:"container-3 w-container",children:[Object(m.jsx)("h2",{class:"heading",children:"How Does Trial Before You Hire Work"}),Object(m.jsx)("p",{class:"paragraph"}),Object(m.jsxs)("div",{class:"columns-2 w-row",children:[Object(m.jsxs)("div",{class:"column-3 w-col w-col-4",children:[Object(m.jsx)("img",{src:"https://media.giphy.com/media/Q9383rfNGOs6k1hkaP/giphy.gif",width:"368px",height:"320px",sizes:"(max-width: 479px) 88vw, (max-width: 767px) 368px, \r (max-width: 991px) 233.3333282470703px, 304px",alt:""}),Object(m.jsx)("div",{class:"h3",children:"STEP 1 - Use non-traditional methods - like a dress rehearsal - where the final applicants work remotely to create a website clone. "})]}),Object(m.jsxs)("div",{class:"column-3 w-col w-col-4",children:[Object(m.jsx)("img",{src:"https://media.giphy.com/media/cNYPlsYn4DoYzHgoca/giphy.gif",width:"368px",height:"320px",sizes:"(max-width: 479px) 88vw, (max-width: 767px) 368px, (max-width: 991px) 233.3333282470703px, 304px",alt:""}),Object(m.jsx)("div",{class:"h3",children:"STEP 2 - Fast-track your hiring process and onboard people based on proof of work. Devs would ship small features and fix bugs frequently, while communicating with you on video call."})]}),Object(m.jsxs)("div",{class:"column-3 w-col w-col-4",children:[Object(m.jsx)("img",{src:"https://media.giphy.com/media/fYHEmYNQzl0mWjzdoA/giphy.gif",width:"368px",height:"320px",sizes:"(max-width: 479px) 88vw, (max-width: 767px) 368px, (max-width: 991px) 233.3333282470703px, 304px",alt:""}),Object(m.jsx)("div",{class:"h3",children:"STEP 3 - You get to decide at an interview for fulltime offer or longterm contract. They might not be ready for the fulltime job just yet, until they have engaged in a contract job with you,"})]})]}),Object(m.jsx)("div",{class:"div-block",children:Object(m.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSfdVBeCigNIYUGvsE6OZdalrAOgrErr1SKOFnSb4dfUKmXPgw/viewform",rel:"noopener noreferrer",target:"_blank",class:"button w-button",children:"Your Feedback"})})]}),Object(m.jsx)("div",{class:"section-4",children:Object(m.jsxs)("div",{class:"container-4 w-container",children:[Object(m.jsx)("h2",{class:"heading",children:"FAQ (Click the Mic and Ask Questions Below)"}),Object(m.jsxs)("div",{class:"card",children:[Object(m.jsx)("h3",{class:"question",children:"Why Should We Hire Your Applicants?"}),Object(m.jsx)("p",{class:"answer",children:" You make diversity a priority by increasing the number of diverse hires in your pipeline. Applicants schedule an appointment and we select devs interested in your clone website and job you posted. Companies get to judge potential hires based on contributions. During this period, their communication and remote team work skills would be tested through frequent pair programming sessions before you offer them a contract job. This quality process saves you a lot of advert placement cost."})]}),Object(m.jsxs)("div",{class:"card",children:[Object(m.jsx)("h3",{class:"question",children:"What Do I Need To Begin?"}),Object(m.jsx)("p",{class:"answer",children:"Click \u201cContract Proposal Details\u201d and submit details of your website choice you would like our applicants to work on. You will find a link to a Google document of clones, when filling the form. Optionally, one of your choices can be a project of your own website choice. In this case, you will email a sketch to us."})]}),Object(m.jsxs)("div",{class:"card",children:[Object(m.jsx)("h3",{class:"question",children:"How Are You Different?"}),Object(m.jsx)("p",{class:"answer",children:"Can you really trust a reference on a resume? The typical method of hiring for tech positions, based on degrees only is dead. If you choose from our MVP list, it would contain three key features for your chosen clone app. To confirm who is the right fit to get the contract job after the project, you would need to screen the top candidates based on proof of work. When you hire from us, you can and should skip the DS / Algorithm questions."})]}),Object(m.jsxs)("div",{class:"card",children:[Object(m.jsx)("h3",{class:"question",children:"When I propose my MVP Contract, what type of features should I expect developers to create? "}),Object(m.jsxs)("p",{class:"answer",children:["For EXAMPLE: If your app is a social media app that allows users to publicly share short tweets. It would incliude:",Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Users can create, view, and edit tweets that are viewable by any other user"}),Object(m.jsx)("li",{children:"Users have a private dashboard of other user's tweets and a public profile view of their own tweets"}),Object(m.jsx)("li",{children:"Users can search for other users"})]})]})]}),Object(m.jsxs)("div",{class:"card",children:[Object(m.jsx)("h3",{class:"question",children:"What Do I Need To Consider and How Do You Charge?"}),Object(m.jsxs)("p",{class:"answer",children:["We highly encourage you to be patient as developers will make many mistakes along the way. Ask yourself",Object(m.jsx)("p",{children:"What features of this site do I want developers to clone? Will these features show off things I want in my future website? Are these features self-explanatory and easy to understand? "}),Object(m.jsxs)("p",{children:["We charge you a month's salary for every hire. Once above has been considered, click ",Object(m.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeYoaQDXvjBlA8VOkAIw05HPj4fJ10JZNBSyJ2nFMB6fAP5gw/viewform?gxids=7628",rel:"noopener noreferrer",children:"Join Here"})]})," "]})]})]})})]})]})};c(84);var T=function(){return Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsx)("div",{className:"footer",children:Object(m.jsxs)("a",{href:"https://www.linkedin.com/in/henryebomah/",target:"_blank",rel:"noopener noreferrer",children:["LinkedIn",Object(m.jsx)("i",{className:"fab fa-linkedin"})]})}),Object(m.jsx)("div",{className:"copyright-text",children:Object(m.jsxs)("p",{children:["Copyright \xa9 2021 | Jobstar",Object(m.jsx)("br",{}),"All Rights Reserved"]})})]})},P=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(y,{}),Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"/search",children:Object(m.jsx)(g,{})}),Object(m.jsx)(u.a,{path:"/",children:Object(m.jsx)(I,{})})]}),Object(m.jsx)(T,{})]})})}}]),c}(s.Component),Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,100)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),s(e),n(e),i(e),o(e)}))};a.a.add(r.c,r.b,r.d,r.a),o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),Y()}},[[85,1,2]]]);
//# sourceMappingURL=main.add91739.chunk.js.map