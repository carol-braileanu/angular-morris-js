webpackJsonp([3],{wvyb:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("WT6e"),t=function(){},d=u("fxu3"),o=u("bT3F"),a=u("J8x8"),r={xkey:"y",ykeys:["a","b"],labels:["Series A","Series B"],resize:!0},i=[{y:"2006",a:100,b:90},{y:"2007",a:75,b:65},{y:"2008",a:50,b:40},{y:"2009",a:75,b:65},{y:"2010",a:50,b:40},{y:"2011",a:75,b:65},{y:"2012",a:100,b:90}],s=function(){function l(){}return l.prototype.ngOnInit=function(){this.chartBarData=i,this.chartBarOptions=r},l.prototype.ngAfterViewInit=function(){Prism.highlightAll()},l}(),c=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,9,"mk-box",[["header","Demo"]],null,null,null,d.l,d.b)),e["\u0275did"](1,4374528,null,4,o.y,[e.ChangeDetectorRef,e.NgZone,e.Renderer2],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e["\u0275qud"](335544320,1,{boxHeaderDirective:0}),e["\u0275qud"](335544320,2,{boxFooterDirective:0}),e["\u0275qud"](335544320,3,{boxContentDirective:0}),e["\u0275qud"](335544320,4,{boxToolsDirective:0}),(l()(),e["\u0275ted"](-1,3,["\n  "])),(l()(),e["\u0275eld"](7,0,null,3,1,"div",[["mk-morris-js",""],["style","height: 500px; width: 100%;"],["type","Bar"]],null,null,null,null,null)),e["\u0275did"](8,4931584,null,0,a.a,[e.ElementRef,e.NgZone],{type:[0,"type"],options:[1,"options"],data:[2,"data"]},null),(l()(),e["\u0275ted"](-1,3,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](11,0,null,null,10,"mk-box",[["header","Usage"]],null,null,null,d.l,d.b)),e["\u0275did"](12,4374528,null,4,o.y,[e.ChangeDetectorRef,e.NgZone,e.Renderer2],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e["\u0275qud"](335544320,5,{boxHeaderDirective:0}),e["\u0275qud"](335544320,6,{boxFooterDirective:0}),e["\u0275qud"](335544320,7,{boxContentDirective:0}),e["\u0275qud"](335544320,8,{boxToolsDirective:0}),(l()(),e["\u0275ted"](-1,3,["\n  "])),(l()(),e["\u0275eld"](18,0,null,3,2,"pre",[],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,1,"code",[["class","language-html"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,['<div mk-morris-js [options]="chartBarOptions" [data]="chartBarData" type="Bar"></div>'])),(l()(),e["\u0275ted"](-1,3,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](23,0,null,null,24,"mk-box",[["header","Datas"]],null,null,null,d.l,d.b)),e["\u0275did"](24,4374528,null,4,o.y,[e.ChangeDetectorRef,e.NgZone,e.Renderer2],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e["\u0275qud"](335544320,9,{boxHeaderDirective:0}),e["\u0275qud"](335544320,10,{boxFooterDirective:0}),e["\u0275qud"](335544320,11,{boxContentDirective:0}),e["\u0275qud"](335544320,12,{boxToolsDirective:0}),(l()(),e["\u0275ted"](-1,3,["\n  "])),(l()(),e["\u0275eld"](30,0,null,3,12,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    This is an array of objects, containing x and y attributes as described by the "])),(l()(),e["\u0275eld"](32,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["xkey"])),(l()(),e["\u0275ted"](-1,null,[" and "])),(l()(),e["\u0275eld"](35,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ykeys"])),(l()(),e["\u0275ted"](-1,null,[" options.\n    "])),(l()(),e["\u0275eld"](38,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](40,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Note: the order in which you provide the data is the order in which the bars are displayed."])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,3,["\n  "])),(l()(),e["\u0275eld"](44,0,null,3,2,"pre",[],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,1,"code",[["class","language-html"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["let chartAreaData = [\n  { y: '2006', a: 100, b: 90 },\n  { y: '2007', a: 75,  b: 65 },\n  { y: '2008', a: 50,  b: 40 },\n  { y: '2009', a: 75,  b: 65 },\n  { y: '2010', a: 50,  b: 40 },\n  { y: '2011', a: 75,  b: 65 },\n  { y: '2012', a: 100, b: 90 }\n];"])),(l()(),e["\u0275ted"](-1,3,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](49,0,null,null,207,"mk-box",[["header","Options"]],null,null,null,d.l,d.b)),e["\u0275did"](50,4374528,null,4,o.y,[e.ChangeDetectorRef,e.NgZone,e.Renderer2],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e["\u0275qud"](335544320,13,{boxHeaderDirective:0}),e["\u0275qud"](335544320,14,{boxFooterDirective:0}),e["\u0275qud"](335544320,15,{boxContentDirective:0}),e["\u0275qud"](335544320,16,{boxToolsDirective:0}),(l()(),e["\u0275ted"](-1,3,["\n  "])),(l()(),e["\u0275eld"](56,0,null,3,199,"table",[["class","table table-striped table-bordered"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](58,0,null,null,196,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](60,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](62,0,null,null,5,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["xkey"])),(l()(),e["\u0275eld"](65,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["required"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](69,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          A string containing the name of the attribute that contains\n          X labels.\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](73,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](75,0,null,null,5,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](76,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ykeys"])),(l()(),e["\u0275eld"](78,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](79,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["required"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](82,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          A list of strings containing names of attributes that\n          contain Y values (one for each series of data to be\n          plotted).\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](86,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](88,0,null,null,5,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](89,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["labels"])),(l()(),e["\u0275eld"](91,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](92,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["required"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](95,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          A list of strings containing labels for the data series\n          to be plotted (corresponding to the values in the\n          "])),(l()(),e["\u0275eld"](97,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ykeys"])),(l()(),e["\u0275ted"](-1,null,[" option).\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](102,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](104,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](105,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["barColors"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](108,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Array containing colors for the series bars.\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](112,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](114,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](115,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["stacked"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](118,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Set to "])),(l()(),e["\u0275eld"](120,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["true"])),(l()(),e["\u0275ted"](-1,null,[" to draw bars stacked vertically.\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](125,0,null,null,24,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](127,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](128,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["hideHover"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](131,0,null,null,17,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Set to "])),(l()(),e["\u0275eld"](133,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["false"])),(l()(),e["\u0275ted"](-1,null,[" to always show a hover legend.\n          "])),(l()(),e["\u0275eld"](136,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Set to "])),(l()(),e["\u0275eld"](138,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["true"])),(l()(),e["\u0275ted"](-1,null,[" or "])),(l()(),e["\u0275eld"](141,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["'auto'"])),(l()(),e["\u0275ted"](-1,null,[" to only show the\n          hover legend when the mouse cursor is over the chart.\n          "])),(l()(),e["\u0275eld"](144,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Set to "])),(l()(),e["\u0275eld"](146,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["'always'"])),(l()(),e["\u0275ted"](-1,null,[" to never show a hover legend.\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](151,0,null,null,21,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](153,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](154,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["hoverCallback"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](157,0,null,null,14,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Provide a function on this option to generate custom\n          hover legends.\n          "])),(l()(),e["\u0275eld"](159,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          The function will be called with the index of the row under\n          the hover legend, the options object passed to the constructor\n          as arguments, a string containing the default generated hover legend\n          content HTML, and an object containing the original data for the\n          row as passed in the "])),(l()(),e["\u0275eld"](161,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["data"])),(l()(),e["\u0275ted"](-1,null,[" option.\n          "])),(l()(),e["\u0275eld"](164,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](166,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["eg:"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](169,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,['hoverCallback: function (index, options, content, row) {\nreturn "sin(" + row.x + ") = " + row.y;\n}'])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](174,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](176,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](177,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["axes"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](180,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Set to "])),(l()(),e["\u0275eld"](182,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["false"])),(l()(),e["\u0275ted"](-1,null,[" to disable drawing the x and\n          y axes.\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](187,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](189,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](190,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["grid"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](193,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Set to "])),(l()(),e["\u0275eld"](195,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["false"])),(l()(),e["\u0275ted"](-1,null,[" to disable drawing the horizontal\n          grid lines.\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](200,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](202,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](203,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["gridTextColor"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](206,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Set the color of the axis labels (default: #888).\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](210,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](212,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](213,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["gridTextSize"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](216,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Set the point size of the axis labels (default: 12).\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](220,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](222,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](223,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["gridTextFamily"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](226,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Set the font family of the axis labels (default: sans-serif).\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](230,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](232,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](233,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["gridTextWeight"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](236,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Set the font weight of the axis labels (default: normal).\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](240,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](242,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275eld"](243,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["resize"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](246,0,null,null,6,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          Set to "])),(l()(),e["\u0275eld"](248,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["true"])),(l()(),e["\u0275ted"](-1,null,[" to enable automatic resizing when the\n          containing element resizes. (default: false).\n          "])),(l()(),e["\u0275eld"](251,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          This has a significant performance impact, so is disabled by\n          default.\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,3,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,1,0,"Demo",!1,!1),l(n,8,0,"Bar",u.chartBarOptions,u.chartBarData),l(n,12,0,"Usage",!1,!1),l(n,24,0,"Datas",!0,!1),l(n,50,0,"Options",!0,!1)},null)}var h=e["\u0275ccf"]("app-chart-bar",s,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-chart-bar",[],null,null,null,b,c)),e["\u0275did"](1,4308992,null,0,s,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),p=u("Xjw4"),f=u("bfOx"),g=function(){},y=u("M75R");u.d(n,"ChartBarModuleNgFactory",function(){return m});var m=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[h]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[e.LOCALE_ID,[2,p["\u0275a"]]]),e["\u0275mpd"](512,p.CommonModule,p.CommonModule,[]),e["\u0275mpd"](512,f.RouterModule,f.RouterModule,[[2,f["\u0275a"]],[2,f.Router]]),e["\u0275mpd"](512,g,g,[]),e["\u0275mpd"](512,o._0,o._0,[]),e["\u0275mpd"](512,o.p,o.p,[]),e["\u0275mpd"](512,o.d,o.d,[]),e["\u0275mpd"](512,y.a,y.a,[]),e["\u0275mpd"](512,t,t,[]),e["\u0275mpd"](1024,f.ROUTES,function(){return[[{path:"",component:s}]]},[])])})}});