(()=>{"use strict";const e=window.wp.blocks,t=window.wp.element,i=(window.React,window.wp.i18n),l=window.wp.blockEditor,r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"title":"Basic Block","name":"basicblock/basic","description":"A basic static gutenberg block","version":"0.0.1","icon":"admin-tools","category":"design","supports":{"html":true},"attributes":{"exampleAttribute":{"type":"string"}},"keywords":["basic","model"],"editorScript":"file:./build/index.js","editorStyle":"file:./src/style.css"}');(0,e.registerBlockType)(r,{edit:function(e){return(0,t.createElement)("div",(0,l.useBlockProps)(),(0,t.createElement)("div",null,(0,t.createElement)("h3",null,"Basic Static Gutenberg Block"),(0,t.createElement)("p",null,"Type the attribute value below"),(0,t.createElement)("input",{type:"text",value:e.attributes.exampleAttribute,onChange:function(t){e.setAttributes({exampleAttribute:t.target.value})},placeholder:"Attribute value that will be displayed in the frontend"})))},save:function(e){return(0,t.createElement)("p",l.useBlockProps.save(),(0,i.__)((0,t.createElement)("div",null,e.attributes.exampleAttribute)))}})})();