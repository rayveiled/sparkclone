(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(24),r=t(9),c=t.n(r),o=t(31),i=t(20),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(75),t(76);var u,h=t(17),g=t(18),d=t(21),E=t(19),b=t(22),v=t(113),f=t(112),x=t(58),y=t.n(x),k=(t(78),t(114)),T=(t(79),t(59)),w=new(t.n(T).a)({en:{english:"English",japanese:"\u65e5\u672c\u8a9e",SparkCalc:"Spark Calc",ExpRpCalc:"RP&EXP Calc",crystals:"Crystals:",singleTickets:"Single tickets:",grandTickets:"10x tickets:",totalRolls:"Total rolls:",percentage:"Percentage:",levelFrom:"From:",levelTo:"To:",toNextLevel:"To next level:",bonusExp:"Bonus Exp (%):",bonusExpInfo:"Usually comes from Wonders and Elemental Skills.",weaponSummon:"Weapon / Summon",character:"Character",rank:"Rank",sameType:"Same type",totalExperience:"Total Experience:",archangelItems:"Archangel Items:",vessels:"Vessels:",error:"Error",cantDowngrade:"You cannot downgrade weapons/summons/characters.",suggestionsWelcomed:"If you have any suggestions or ideas, contact me on Discord: IAmVisco#7099"},jp:{english:"English",japanese:"\u65e5\u672c\u8a9e",SparkCalc:"\u84bc\u5149\u306e\u5fa1\u5370\u306e\u8a08\u7b97",ExpRpCalc:"RP\u3068EXP\u306e\u8a08\u7b97",crystals:"\u5b9d\u6676\u77f3:",singleTickets:"\u30c1\u30b1\u30c3\u30c8:",grandTickets:"10\u9023\u30c1\u30b1\u30c3\u30c8:",totalRolls:"\u5408\u8a08:",percentage:"%:",levelFrom:"\u304b\u3089:",levelTo:"\u307e\u3067:",toNextLevel:"\u6b21\u306eLv\u307e\u3067:",bonusExp:" \u30dc\u30fc\u30ca\u30b9EXP (%):",bonusExpInfo:"\u666e\u901a\u306b\u5927\u4e8b\u306a\u3082\u306e\u3068\u5c5e\u6027\u5f37\u5316\u30b9\u30ad\u30eb\u304b\u3089",weaponSummon:"\u6b66\u5668/\u53ec\u559a\u77f3",character:"\u30ad\u30e3\u30e9",rank:"Rank",sameType:"\u540c\u3058\u6b66\u5668\u306e\u7a2e\u985e",totalExperience:"EXP\u306e\u5408\u8a08:",archangelItems:"\u30a2\u30fc\u30af\u30a8\u30f3\u30b8\u30a7\u30eb:",vessels:"\u676f:",error:"\u30a8\u30e9\u30fc",cantDowngrade:"\u6b66\u5668/\u53ec\u559a\u77f3/\u30ad\u30e3\u30e9\u3092\u4e0b\u304c\u3089\u306a\u3044",suggestionsWelcomed:"\u4f55\u304b\u8003\u3048\u3068\u52a9\u8a00\u304c\u3042\u308c\u3070\u79c1\u306bDiscord\uff1aIAmVisco\uff037099\u3067\u9023\u7d61\u3057\u3066\u304f\u3060\u3055\u3044"}}),C="SET_SPARK_DATA",N=t(15),S="en",O="jp",j={Weapon:"weapon",Character:"character",Rank:"rank"},F=(u={},Object(N.a)(u,j.Weapon,[0,0,10,22,36,52,70,90,112,136,162,190,220,255,295,340,390,450,520,600,690,790,910,1050,1210,1390,1590,1810,2050,2310,2590,2890,3210,3550,3910,4290,4690,5110,5550,6010,6490,6990,7510,8050,8610,9190,9790,10410,11050,11710,12390,13090,13810,14550,15310,16090,16890,17710,18550,19410,20290,21190,22110,23050,24010,24990,25990,27010,28050,29110,30190,31290,32410,33550,34710,35890,37090,38310,39550,40810,42090,43990,44710,46050,47410,48790,50190,51610,53050,54510,55990,57490,59010,60550,62110,63690,65290,66910,68550,70210,71890,77090,82490,88090,93890,99890,106090,112490,119090,125890,132890,140090,147490,155090,162890,170890,179090,187490,196090,204890,213890,223190,232790,242690,252890,263490,274490,285990,297990,310490,323590,337290,351590,366490,382090,398390,415390,433090,451590,470890,490990,511990,533990,556990,580990,605990,631990,658990,686990,715990,745990,775990,805990,835990,865990,895990,925990,955990,985990,1015990,1045990,1075990,1105990,1135990,1165990,1195990,1225990,1255990,1285990,1315990,1345990,1375990,1405990,1435990,1465990,1495990,1525990,1555990,1585990,1615990,1645990,1675990,1705990,1735990,1765990,1795990,1825990,1855990,1885990,1915990,1945990,1975990,2005990,2035990,2065990,2095990,2125990,2155990,2185990,2215990,2245990]),Object(N.a)(u,j.Character,[0,0,30,100,200,320,460,620,800,1e3,1220,1460,1720,2e3,2300,2650,3050,3500,4e3,4550,5150,5800,6500,7300,8200,9200,10300,11500,12800,14200,15700,17300,19e3,20800,22700,24700,26800,29e3,31400,34e3,36800,39800,43e3,46400,5e4,53800,57800,62e3,66400,71e3,75800,80800,86050,91550,97300,103300,109550,116050,122800,129800,137050,144550,152350,160450,168850,177550,186550,196050,206050,216550,227550,239050,251050,263550,276550,290050,304050,318550,333550,349050,365050,415050,435050,456050,478050,501050,525050,550050,576050,603050,703050,853050,1053050,1303050,1603050,1953050,2353050,2803050,3303050,3803050,4803050]),Object(N.a)(u,j.Rank,[0,0,50,200,500,900,1500,2200,2900,3800,4900,6500,8e3,9600,11500,13500,15600,17800,20100,22950,26500,30450,34450,38900,43850,49350,55450,62200,69650,77850,86850,96700,107450,119150,131850,145600,160450,176450,193650,212100,231850,252950,275450,299400,324850,351850,380450,410700,442650,476350,511850,549200,588450,629650,672850,718100,765450,814950,866650,920600,976850,1035450,1096450,1159900,1225850,1294350,1365450,1439200,1515650,1594850,1676850,1761700,1849450,1940150,2033850,2130600,2230450,2333450,2439650,2549100,2661850,2777950,2897450,3020400,3146850,3276850,3410450,3547700,3688650,3833350,3981850,4134200,4290450,4450650,4614850,4783100,4955450,5131950,5312650,5497600,5686850,5936850,6197e3,6467400,6748300,7039900,7342400,7656e3,7980900,8317300,8665400,9025400,9397500,9781900,10178800,10588400,11010900,11446500,11895400,12357800,12833900,13323900,13828e3,14346400,14879300,15426900,15989400,16567e3,17159900,17768300,18392400,19032400,19688600,20361300,21050800,21757400,22481400,23223100,23982800,24760800,25557400,26372900,27207600,28061800,28935800,29829800,30744200,31679400,32635800,33613800,34613800,35636300,36682800,37754800,38853800,39981800,41141800,42336800,43571800,44851800,46181800,47571800,49031800,50571800,52201800,53931800,55781800,57771800,59921800,62251800,64781800,67531800,70541800,73821800,77371800,81276800,85197800,89136300,93092800,97069300,101067800,105091300,109142800,113227300,117349800,121515300,125733800,130015300,134369800,138807300,143337800,147981300,152757800,157687300,162789800,168085300,173598800,179355300,185379800,191697300,198332800,204968300,211603800,218239300,224874800,231510300,238145800,244781300,251416800,258052300,264687800,271323300,277958800,284594300,291229800,297865300,304500800,311136300,317771800,324407300,331042800,337678300,344313800,350949300,357584800,364220300,370855800,377516440,384202310,390913500,397650100,404412200,411199890,418013260,424852400,431717400,438608350,445525340,452468460,459437800,466433450,473455500,480504040,487579160,494680950,501809500,508964900,516147240,523356610,530593100,537856800]),u),I=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).handleCheckboxChange=function(){var e=t.props,a=e.changeLanguage,n=e.languageCode===S?O:S;a(n),s.a.event({category:"Settings change",action:"Language change",label:n})},t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"language-label"},w.english,"\xa0"),l.a.createElement("label",{className:"switch"},l.a.createElement("input",{type:"checkbox",id:"languageSwitch",onChange:this.handleCheckboxChange,checked:this.props.languageCode===O}),l.a.createElement("span",{className:"slider"})),l.a.createElement("label",{className:"language-label"},"\xa0",w.japanese),l.a.createElement(k.a,{variant:"info",className:"mb-0 mt-3"},w.suggestionsWelcomed))}}]),a}(l.a.Component),R=Object(i.b)(function(e){return{languageCode:e.languageCode}},function(e){return{changeLanguage:function(a){return e({type:"SET_LANGUAGE",payload:a})}}})(I),L=t(109),A=t(110),W=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={crystals:0,singleTickets:0,grandTickets:0},t.selectField=function(e){e.target.select()},t.handleChange=function(e){t.setState(Object(N.a)({},e.target.name,e.target.value),function(){t.props.dispatch({type:C,payload:{crystals:t.state.crystals,singleTickets:t.state.singleTickets,grandTickets:t.state.grandTickets}}),t.recalculateRolls()})},t.recalculateRolls=function(){var e=t.state,a=e.crystals,n=e.singleTickets,l=e.grandTickets,s=parseInt(a/300)+parseInt(n)+parseInt(10*l),r=~~(s/300*100)+"%";t.setState({totalRolls:s,percentage:r})},t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"componentWillMount",value:function(){this.setState({crystals:this.props.crystals,singleTickets:this.props.singleTickets,grandTickets:this.props.grandTickets},this.recalculateRolls)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,null,l.a.createElement(A.a,{xs:"4",md:"3",lg:"2"},l.a.createElement("label",{className:"no-wrap",htmlFor:"crystals"},w.crystals),l.a.createElement("input",{min:"0",step:"100",max:"999999",type:"number",className:"input-sm form-control disable-ff-shadow",id:"crystals",name:"crystals",defaultValue:this.state.crystals,onClick:this.selectField,onChange:this.handleChange})),l.a.createElement(A.a,{xs:"4",md:"3",lg:"2"},l.a.createElement("label",{className:"no-wrap",htmlFor:"singleTickets"},w.singleTickets),l.a.createElement("input",{min:"0",max:"9999",type:"number",className:"input-sm form-control",id:"singleTickets",name:"singleTickets",defaultValue:this.state.singleTickets,onClick:this.selectField,onChange:this.handleChange})),l.a.createElement(A.a,{xs:"4",md:"3",lg:"2"},l.a.createElement("label",{className:"no-wrap",htmlFor:"grandTickets"},w.grandTickets),l.a.createElement("input",{min:"0",max:"999",type:"number",className:"input-sm form-control",id:"grandTickets",name:"grandTickets",defaultValue:this.state.grandTickets,onClick:this.selectField,onChange:this.handleChange}))),l.a.createElement(L.a,{className:"pt-2"},l.a.createElement(A.a,{xs:"4",md:"3",lg:"2"},l.a.createElement("label",{className:"no-wrap",htmlFor:"totalRolls"},w.totalRolls),l.a.createElement("input",{disabled:!0,type:"text",className:"input-sm form-control",id:"totalRolls",name:"totalRolls",defaultValue:this.state.totalRolls,onClick:this.selectField,onChange:this.handleChange})),l.a.createElement(A.a,{xs:"4",md:"3",lg:"2"},l.a.createElement("label",{className:"no-wrap",htmlFor:"percentage"},w.percentage),l.a.createElement("input",{disabled:!0,type:"text",className:"input-sm form-control",id:"percentage",name:"percentage",defaultValue:this.state.percentage,onClick:this.selectField,onChange:this.handleChange}))))}}]),a}(l.a.Component),_=Object(i.b)(function(e){return{crystals:e.crystals,singleTickets:e.singleTickets,grandTickets:e.grandTickets}})(W),D=t(115),P=t(111),U=(t(91),t(61)),V=t.n(U),X=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={expType:j.Weapon,bonusExp:10,sameType:!1,totalExperience:0,archangelItems:0,vessels:0,levelTo:40,levelFrom:1,toNextLevel:0,showError:!1,maxLevel:F[j.Weapon].length-1,experienceTable:F[j.Weapon]},t.recalculateExperience=function(){var e=t.state,a=e.levelFrom,n=e.levelTo,l=F[t.state.expType].length-1;t.setState({experienceTable:F[t.state.expType],levelFrom:a>l?l:a,levelTo:n>l?l:n,maxLevel:l},function(){var e=t.state,a=e.bonusExp,n=e.experienceTable,l=e.expType,s=e.levelFrom,r=e.levelTo,c=e.sameType,o=e.toNextLevel,i=function(e,t){return Math.ceil(e/(t+Math.floor(t*(a/100))))};if(s>r)t.setState({showError:!0});else{t.setState({showError:!1});var m=c?750:500,p=0;o>0&&(p=n[s+1]-n[s]-o);var u=n[r]-n[s]-p;if(l!==j.Rank){var h=i(u,3e4),g=i(u,m);t.setState({vessels:h,archangelItems:g})}t.setState({totalExperience:u})}})},t.handleInputChange=function(e){t.setState(Object(N.a)({},e.target.name,parseInt(e.target.value)||""),function(){t.recalculateExperience()})},t.handleChange=function(e){t.setState(Object(N.a)({},e.target.name,e.target.value),function(){t.recalculateExperience()})},t.handleCheckbox=function(e){t.setState(Object(N.a)({},e.target.name,e.target.checked),function(){t.recalculateExperience()})},t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){this.recalculateExperience()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,null,l.a.createElement(A.a,{xs:"4",md:"3",lg:"2"},l.a.createElement("label",{className:"no-wrap",htmlFor:"levelFrom"},w.levelFrom),l.a.createElement("input",{min:"0",max:this.state.maxLevel,type:"number",className:"input-sm form-control",id:"levelFrom",name:"levelFrom",value:this.state.levelFrom,onChange:this.handleInputChange})),l.a.createElement(A.a,{xs:"4",md:"3",lg:"2"},l.a.createElement("label",{className:"no-wrap",htmlFor:"levelTo"},w.levelTo),l.a.createElement("input",{min:"0",max:this.state.maxLevel,type:"number",className:"input-sm form-control",id:"levelTo",name:"levelTo",value:this.state.levelTo,onChange:this.handleInputChange})),l.a.createElement(A.a,{xs:"4",md:"3",lg:"2"},l.a.createElement("label",{className:"no-wrap",htmlFor:"toNextLevel"},w.toNextLevel),l.a.createElement("input",{min:"0",step:"100",type:"number",className:"input-sm form-control",id:"toNextLevel",name:"toNextLevel",value:this.state.toNextLevel,onChange:this.handleInputChange})),l.a.createElement(A.a,{xs:"4",md:"3",lg:"2",className:"will-hide tooltip-col",hidden:this.state.expType===j.Rank},l.a.createElement(D.a,{overlay:l.a.createElement(P.a,null,w.bonusExpInfo)},l.a.createElement("label",{className:"no-wrap",htmlFor:"bonusExp"},l.a.createElement("img",{src:V.a,alt:"info icon",width:"16"})," ",w.bonusExp)),l.a.createElement("input",{min:"0",type:"number",className:"input-sm form-control",id:"bonusExp",name:"bonusExp",value:this.state.bonusExp,onChange:this.handleInputChange}))),l.a.createElement(L.a,{className:"mt-3"},l.a.createElement("div",{className:"radio-tile-group"},l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{id:"weaponExperience",type:"radio",name:"expType",className:"radio-button",value:j.Weapon,checked:this.state.expType===j.Weapon,onChange:this.handleChange}),l.a.createElement("div",{className:"radio-tile"},l.a.createElement("label",{htmlFor:"weaponExperience",className:"radio-tile-label"},w.weaponSummon))),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{id:"characterExperience",type:"radio",name:"expType",className:"radio-button",value:j.Character,checked:this.state.expType===j.Character,onChange:this.handleChange}),l.a.createElement("div",{className:"radio-tile"},l.a.createElement("label",{htmlFor:"characterExperience",className:"radio-tile-label"},w.character))),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{id:"rankExperience",type:"radio",name:"expType",className:"radio-button",value:j.Rank,checked:this.state.expType===j.Rank,onChange:this.handleChange}),l.a.createElement("div",{className:"radio-tile"},l.a.createElement("label",{htmlFor:"rankExperience",className:"radio-tile-label"},w.rank)))),l.a.createElement(A.a,{md:"2",className:"align-items-center checkbox-col will-hide",hidden:this.state.expType===j.Rank},l.a.createElement("label",{htmlFor:"sameType",className:"m-0 pr-2 no-wrap"},w.sameType),l.a.createElement("input",{type:"checkbox",id:"sameType",name:"sameType",className:"checkbox-input",checked:this.state.sameType,onChange:this.handleCheckbox}),l.a.createElement("label",{htmlFor:"sameType",className:"checkbox-label mb-0"},l.a.createElement("span",{className:"checkbox"})))),l.a.createElement(L.a,{className:"mt-3"},l.a.createElement(A.a,{xs:"4",md:"3",lg:"2"},l.a.createElement("label",{className:"no-wrap",htmlFor:"totalExperience"},w.totalExperience),l.a.createElement("input",{disabled:!0,type:"number",id:"totalExperience",name:"totalExperience",className:"input-sm form-control",value:this.state.totalExperience,onChange:this.handleChange})),l.a.createElement(A.a,{xs:"4",md:"3",lg:"2",className:"will-hide",hidden:this.state.expType===j.Rank},l.a.createElement("label",{className:"no-wrap",htmlFor:"archangelItems"},w.archangelItems),l.a.createElement("input",{disabled:!0,type:"number",id:"archangelItems",name:"archangelItems",className:"input-sm form-control",value:this.state.archangelItems,onChange:this.handleChange})),l.a.createElement(A.a,{xs:"4",md:"3",lg:"2",className:"will-hide",hidden:this.state.expType===j.Rank},l.a.createElement("label",{className:"no-wrap",htmlFor:"vessels"},w.vessels),l.a.createElement("input",{disabled:!0,type:"number",id:"vessels",name:"vessels",value:this.state.vessels,className:"input-sm form-control",onChange:this.handleChange}))),l.a.createElement(k.a,{variant:"danger",className:"mb-0 mt-3",show:this.state.showError},l.a.createElement("strong",{className:"align-middle"},w.error,": "),l.a.createElement("span",{className:"align-middle"},w.cantDowngrade)))}}]),a}(l.a.Component),G=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).handleTabSelect=function(e){s.a.modalview(e)},t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"componentWillMount",value:function(){this.props.languageCode===O&&this.props.changeLanguage(O)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container mt-md-3"},l.a.createElement(v.a,{defaultActiveKey:"spark",onSelect:this.handleTabSelect},l.a.createElement(f.a,{eventKey:"spark",title:w.SparkCalc},l.a.createElement(_,{language:this.props.languageCode})),l.a.createElement(f.a,{eventKey:"exp",title:w.ExpRpCalc},l.a.createElement(X,{language:this.props.languageCode})),l.a.createElement(f.a,{eventKey:"settings",title:"Settings/\u8a2d\u5b9a"},l.a.createElement(R,null))),l.a.createElement(y.a,{href:"https://github.com/eurea/eurea.github.io",bannerColor:"#0288D1",target:"_blank",rel:"noreferrer"}))}}]),a}(l.a.Component),K=Object(i.b)(function(e){return{languageCode:e.languageCode}},function(e){return{changeLanguage:function(a){return e({type:"SET_LANGUAGE",payload:a})}}})(G),M=t(50),J=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):function(){var e={languageCode:localStorage.getItem("lang")||"en",crystals:localStorage.getItem("crystals")||0,singleTickets:localStorage.getItem("singles")||0,grandTickets:localStorage.getItem("tens")||0};return localStorage.clear(),e}(),B=Object(o.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case C:return Object(M.a)({},e,a.payload);case"SET_LANGUAGE":return w.setLanguage(a.payload),Object(M.a)({},e,{languageCode:a.payload});default:return e}},J,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());B.subscribe(function(){localStorage.setItem("reduxState",JSON.stringify(B.getState()))});var z=l.a.createElement(i.a,{store:B},l.a.createElement(K,null));c.a.render(z,document.getElementById("root")),s.a.initialize("UA-101216558-2"),s.a.pageview(window.location.pathname),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("","/service-worker.js");m?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):p(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):p(a,e)})}}()},61:function(e,a,t){e.exports=t.p+"static/media/info-filled.e1681639.svg"},66:function(e,a,t){e.exports=t(106)},76:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},91:function(e,a,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.3f13806e.chunk.js.map