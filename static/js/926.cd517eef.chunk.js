"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[926],{4926:function(n,t,e){e.r(t),e.d(t,{default:function(){return A}});var i,r,o,c,s,h,u,a,m,l,d=e(2791),f=e(7689),p=e(7391),x=e(168),g=e(4313),b=g.ZP.ul(i||(i=(0,x.Z)(["\n  position: absolute;\n  display: none;\n\n  width: 120px;\n  padding: ","px;\n\n  border: ",";\n  border-radius: 8px;\n\n  background-color: ",";\n\n  font-size: ",";\n"])),(function(n){return n.theme.space[3]+4}),(function(n){return n.theme.borders.input}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes[0]})),w=g.ZP.li(r||(r=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  &:not(:last-child) {\n    margin-bottom: ","px;\n  }\n\n  &:nth-child(",") {\n    color: ",";\n\n    font-weight: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.currentDayOfWeek}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontWeights.bold})),j={0:"MN",1:"TU",2:"WE",3:"TH",4:"FR",5:"SA",6:"SU"},k=(new Date).getDay(),Z="------------",z=e(3329),y=function(n){var t=n.workDays,e=[];return t&&0!==t.length&&(e=t.map((function(n,t){var e=n.from,i=n.to,r=n.isOpen,o=e&&e.startsWith("0")?e.slice(1):e;return(0,z.jsxs)(w,{currentDayOfWeek:k,children:[(0,z.jsx)("p",{children:j[t]}),(0,z.jsx)("p",{children:r?(0,z.jsxs)("span",{children:[o,"-",i]}):(0,z.jsx)("span",{children:Z})})]},t)}))),(0,z.jsx)(z.Fragment,{children:e&&0!==e.length&&(0,z.jsx)(b,{children:e})})},v=e(8665),S=e(9230),P=g.ZP.ul(o||(o=(0,x.Z)(["\n  a {\n    display: block;\n\n    text-decoration: none;\n  }\n\n  @media (min-width: ",") {\n    display: flex;\n    flex-wrap: wrap;\n  }\n"])),(function(n){return n.theme.breakpoints[1]})),W=g.ZP.li(c||(c=(0,x.Z)(["\n  &:first-child {\n    position: relative;\n  }\n\n  padding: ","px ","px;\n\n  justify-content: center;\n\n  border-radius: ",";\n\n  background-color: ",";\n\n  box-shadow: ",";\n\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  letter-spacing: ",";\n\n  @media only screen and (min-width: ",") and (max-width: 767px) {\n    &:not(:last-child) {\n      margin-bottom: ","px;\n    }\n  }\n\n  @media only screen and (min-width: ",") and (max-width: 1279px) {\n    padding: ","px ","px;\n    margin-right: ","px;\n    &:nth-child(2n) {\n      margin-right: 0;\n    }\n    margin-bottom: ","px;\n    &:nth-last-child(-n + ",") {\n      margin-bottom: 0;\n    }\n    width: calc((100% / 2) - (","px) / 2);\n\n    border-radius: ",";\n\n    font-size: ",";\n  }\n\n  @media (min-width: ",") {\n    padding-top: ","px;\n    padding-bottom: ","px;\n    margin-right: ","px;\n    &:nth-child(3n) {\n      margin-right: 0;\n    }\n    margin-bottom: ","px;\n    &:nth-last-child(-n + ",") {\n      margin-bottom: 0;\n    }\n    width: calc((100% / 3) - (","px * 2 / 3));\n\n    border-radius: ",";\n\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.space[3]+4}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.small}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.section}),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.text}),(function(n){return n.theme.letterSpacing.text}),(function(n){return n.theme.breakpoints[0]}),(function(n){return n.theme.space[3]+4}),(function(n){return n.theme.breakpoints[1]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.resultsLength%2||2}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.radii.big}),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.breakpoints[2]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.resultsLength%3||3}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.radii.big}),(function(n){return n.theme.fontSizes[2]})),_=g.ZP.div(s||(s=(0,x.Z)(["\n  display: flex;\n"]))),D=g.ZP.a(h||(h=(0,x.Z)(["\n  padding-left: ","px;\n  padding-right: ","px;\n  color: ",";\n\n  text-align: center;\n  font-weight: ",";\n  line-height: ",";\n  letter-spacing: ",";\n\n  transition: all ",";\n\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n\n    transition: all ",";\n  }\n\n  @media (min-width: ",") {\n    margin-bottom: ","px;\n    height: 44px;\n\n    font-size: ",";\n  }\n\n  @media (min-width: ",") {\n    margin-bottom: ","px;\n    height: 44px;\n\n    font-size: ",";\n  }\n\n  @media (min-width: ",") {\n    height: 54px;\n\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.lineHeights.text}),(function(n){return n.theme.letterSpacing.text}),(function(n){return n.theme.transition.main}),(function(n){return n.theme.transition.main}),(function(n){return n.theme.breakpoints[0]}),(function(n){return n.theme.space[3]+4}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.breakpoints[1]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.breakpoints[2]}),(function(n){return n.theme.fontSizes[4]})),O=g.ZP.img(u||(u=(0,x.Z)(["\n  margin-right: ","px;\n  width: 110px;\n  height: 78px;\n\n  @media (min-width: ",") {\n    margin-right: ","px;\n    width: 120px;\n    height: 85px;\n  }\n\n  @media (min-width: ",") {\n    margin-right: ","px;\n    width: 158px;\n    height: 115px;\n  }\n"])),(function(n){return n.theme.space[3]+4}),(function(n){return n.theme.breakpoints[1]}),(function(n){return n.theme.space[3]+6}),(function(n){return n.theme.breakpoints[2]}),(function(n){return n.theme.space[4]})),H=g.ZP.li(a||(a=(0,x.Z)(["\n  &:not(:last-child) {\n    margin-bottom: ","px;\n  };\n\n  & p.time {\n    transition: all ",";\n  };\n\n  & p.time:hover,\n  & p.time:focus {\n    color: ",";\n\n    transition: all ",";\n\n    & ~ ul {\n      display: block;\n    }\n  }\n\n  @media (min-width: ",") {\n    &:not(:last-child) {\n      margin-bottom: ","px;\n    }\n  }\n\n  @media (min-width: ",") {\n    &:not(:last-child) {\n      margin-bottom: ","px;\n    }\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.transition.main}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.transition.main}),(function(n){return n.theme.breakpoints[1]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.breakpoints[2]}),(function(n){return n.theme.space[3]+4})),T=g.ZP.a(m||(m=(0,x.Z)(["\n  color: ",";\n\n  transition: all ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n\n    transition: all ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.transition.main}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.transition.main})),U=function(n){var t=n.results,e=(0,S.$G)().t,i=t.map((function(n){var i=n.title,r=n.url,o=n.address,c=n.addressUrl,s=n.email,h=n.imageUrl,u=n.phone,a=n.workDays,m=n._id,l={};a&&0!==a.length&&(l=a.find((function(n){return!0===n.isOpen})));var d=l,f=d.from,p=d.to;return(0,z.jsxs)(W,{resultsLength:t.length,children:[r?(0,z.jsx)(D,{target:"_blank",rel:"noreferrer",href:r,children:i}):(0,z.jsx)("p",{children:i}),(0,z.jsxs)(_,{children:[(0,z.jsx)("div",{children:(0,z.jsx)(O,{src:h||v.Vo,alt:i})}),(0,z.jsx)("div",{children:(0,z.jsxs)("ul",{children:[(0,z.jsxs)(H,{children:[(0,z.jsxs)("p",{children:[e("Time"),":"]}),f&&p?(0,z.jsxs)("p",{className:"time",children:[f," - ",p]}):(0,z.jsx)("p",{children:Z}),(0,z.jsx)(y,{workDays:a})]}),(0,z.jsxs)(H,{children:[(0,z.jsxs)("p",{children:[e("Address"),":"]}),o?(0,z.jsx)(T,{target:"_blank",rel:"noreferrer",href:c,children:o}):(0,z.jsx)("p",{children:Z})]}),(0,z.jsxs)(H,{children:[(0,z.jsxs)("p",{children:[e("Email"),":"]}),s?(0,z.jsx)(T,{href:"mailto:".concat(s),children:s}):(0,z.jsx)("p",{children:Z})]}),(0,z.jsxs)(H,{children:[(0,z.jsxs)("p",{children:[e("Phone"),":"]}),u?(0,z.jsx)(T,{href:"tel:".concat(u),children:u}):(0,z.jsx)("p",{children:Z})]})]})})]})]},m)}));return(0,z.jsx)(P,{children:i})},E=e(319),L=g.ZP.h1(l||(l=(0,x.Z)(["\n    margin-top: 100px;\n    margin-bottom: 28px;\n\n    text-align: center;\n\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n    letter-spacing: ",";\n\n    @media (min-width: ",") {\n        margin-top: 160px;\n        margin-bottom: 40px;\n\n        font-size: ",";\n    };\n\n    @media (min-width: ",") {\n        margin-top: 129px;\n        margin-bottom: 60px;\n    };\n"])),(function(n){return n.theme.fontSizes[5]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.lineHeights.text}),(function(n){return n.theme.letterSpacing.text}),(function(n){return n.theme.breakpoints[1]}),(function(n){return n.theme.fontSizes[9]}),(function(n){return n.theme.breakpoints[2]})),A=function(){var n=(0,S.$G)().t,t=(0,f.TH)(),e=(0,p.xR)("api/friends").results;return(0,d.useEffect)((function(){document.title="Our friends"}),[t]),(0,z.jsx)("section",{children:(0,z.jsxs)(E.W,{children:[(0,z.jsx)(L,{children:n("Our_friends")}),(0,z.jsx)(U,{results:e})]})})}}}]);
//# sourceMappingURL=926.cd517eef.chunk.js.map