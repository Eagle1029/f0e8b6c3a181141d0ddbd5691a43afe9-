"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6569],{16569:function(e,a,l){l.r(a);var o=l(85893),t=l(67294),s=l(83253),n=l.n(s),d=l(94184),i=l.n(d),m=l(2664),c=l(89755),r=l.n(c),u=l(69316),p=l(27982),h=l(88208),y=l(71667),g=l.n(y),M=l(19870),x=l(11163),b=l(83480),j=l(5152),f=l.n(j);n().setAppElement("#__next");let w=f()(()=>l.e(1146).then(l.bind(l,11146)),{loadableGenerated:{webpack:()=>[11146]},ssr:!1});a.default=(0,m.$j)(e=>({showWithdraw:e.auth.showWithdraw}))(function(e){let{className:a,showWithdraw:l}=e,[s,d]=(0,t.useState)(!1),c=(0,m.I0)(),y=(0,x.useRouter)(),j=t.useMemo(()=>(0,h.P)("margin"),["margin"]);function closeModal(){c({type:M.xm}),d(!1),document.body.style.overflow="initial",document.body.style.paddingRight="0px"}return(0,t.useEffect)(()=>{l?(d(!0),setTimeout(()=>{document.body.style.overflow="hidden",document.body.style.paddingRight=j.gap+"px"},0)):closeModal()},[l]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{}),(0,o.jsxs)(n(),{isOpen:s,onRequestClose:closeModal,contentLabel:"Withdraw modal",className:i()(g().defaultModal,g().modalMoneyManage,g().modalMoneyManageWithdraw,a),closeTimeoutMS:200,children:[(0,o.jsx)(p.Z,{style:{marginBottom:"1em"},element:"h2",className:g().modalMoneyManageTitle,children:"What would you like to withdraw?"}),(0,o.jsxs)("div",{className:g().modalMoneyManageOptions,children:[(0,o.jsxs)(b.Z,{onClick:()=>c({type:M.mI}),className:i()(g().modalMoneyManageOptionsItem),children:[(0,o.jsx)(u.Z,{textType:"regular16",element:"p",children:"Robux"}),(0,o.jsx)("div",{className:g().modalMoneyManageOptionsItemIllustration,children:(0,o.jsx)(r(),{src:"/backgrounds/modals/deposit/options/robux.png",layout:"fill",alt:"Logotype"})})]}),(0,o.jsxs)(b.Z,{onClick:()=>{y.push("/marketplace"),c({type:M.xm})},className:i()(g().modalMoneyManageOptionsItem),children:[(0,o.jsx)(u.Z,{textType:"regular16",element:"p",children:"Limiteds"}),(0,o.jsx)("div",{className:g().modalMoneyManageOptionsItemIllustration,children:(0,o.jsx)(r(),{src:"/backgrounds/modals/deposit/options/limitdes.png",layout:"fill",alt:"Logotype"})})]})]}),(0,o.jsx)(b.Z,{onClick:closeModal,className:g().defaultModalClose,"aria-label":"Close"})]})]})})}}]);