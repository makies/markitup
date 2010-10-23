// -------------------------------------------------------------------
// markItUp!
// -------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// -------------------------------------------------------------------
// MarkDown tags example
// http://en.wikipedia.org/wiki/Markdown
// http://daringfireball.net/projects/markdown/
// -------------------------------------------------------------------
// Feel free to add more tags
// -------------------------------------------------------------------
mySettings = {
	previewParserPath:	'',
	resizeHandle: true,
  //previewInWindow: 'width=800, height=600, resizable=yes, scrollbars=yes',
	onShiftEnter:		{keepDefault:false, openWith:'\n\n'},
	markupSet: [
		{name:'First Level Heading', key:'1', placeHolder:'Your title here...', closeWith:function(markItUp) { return miu.markdownTitle(markItUp, '=') } },
		{name:'Second Level Heading', key:'2', placeHolder:'Your title here...', closeWith:function(markItUp) { return miu.markdownTitle(markItUp, '-') } },
		{name:'Heading 3', key:'3', openWith:'### ', placeHolder:'Your title here...' },
		{name:'Heading 4', key:'4', openWith:'#### ', placeHolder:'Your title here...' },
		{name:'Heading 5', key:'5', openWith:'##### ', placeHolder:'Your title here...' },
		{name:'Heading 6', key:'6', openWith:'###### ', placeHolder:'Your title here...' },
		{separator:'---------------' },		
		{name:'Bold', key:'B', openWith:'**', closeWith:'**'},
		{name:'Italic', key:'I', openWith:'_', closeWith:'_'},
		{separator:'---------------' },
		{name:'Bulleted List', openWith:'- ' },
		{name:'Numeric List', openWith:function(markItUp) {
			return markItUp.line+'. ';
		}},
		{separator:'---------------' },
		{name:'Picture', key:'P', replaceWith:'![[![Alternative text]!]]([![Url:!:http://]!] "[![Title]!]")'},
		{name:'Link', key:'L', openWith:'[', closeWith:']([![Url:!:http://]!] "[![Title]!]")', placeHolder:'Your text to link here...' },
		{name: 'Smilies', className: "smilies",
				dropMenu: [
					{name:'Smile',	replaceWith:'![Smile](/markitup/img/smiley-smile.gif "Smile")', className:"smile" },
					{name:'Wink',	replaceWith:'![Wink](/markitup/img/smiley-wink.gif "Wink")', className:"wink" },
					{name:'Laughing',	replaceWith:'![Laughing](/markitup/img/smiley-laughing.gif "Laughing")', className:"laughing" },
					{name:'Cool',	replaceWith:'![Cool](/markitup/img/smiley-cool.gif "Cool")', className:"cool" },
					{name:'Tongue Out',	replaceWith:'![Tongue Out](/markitup/img/smiley-tongue-out.gif "Tounge-out")', className:"tongue-out" },
					{name:'Embarrassed',	replaceWith:'![Embarrassed](/markitup/img/smiley-embarassed.gif "Embarassed")', className:"embarassed" },
					{name:'Innocent',	replaceWith:'![Innocent](/markitup/img/smiley-innocent.gif "Innocent")', className:"innocent" },
					{name:'Kiss',	replaceWith:'![Kiss](/markitup/img/smiley-kiss.gif "Kiss")', className:"kiss" },
					{name:'Cry',	replaceWith:'![Cry](/markitup/img/smiley-cry.gif "Cry")', className:"cry" },
					{name:'Foot-in-Mouth',	replaceWith:'![Foot-in-Mouth](/markitup/img/smiley-foot-in-mouth.gif "Foot-in-mouth")', className:"foot-in-mouth" },
					{name:'Frown',	replaceWith:'![Frown](/markitup/img/smiley-frown.gif "Frown")', className:"frown" },
					{name:'Money-Mouth',	replaceWith:'![Money-Mouth](/markitup/img/smiley-money-mouth.gif "Money-mouth")', className:"money-mouth" },
					{name:'Sealed',	replaceWith:'![Sealed](/markitup/img/smiley-sealed.gif "Sealed")', className:"sealed" },
					{name:'Surprised',	replaceWith:'![Surprised](/markitup/img/smiley-surprised.gif "Surprised")', className:"surprised" },
					{name:'Undecided',	replaceWith:'![Undecided](/markitup/img/smiley-undecided.gif "Undecided")', className:"undecided" },
					{name:'Yell',	replaceWith:'![Yell](/markitup/markitup/img/smiley-yell.gif "Yell")', className:"yell" },
					] },
		{separator:'---------------'},	
		{name:'Quotes', openWith:'> '},
		{name:'Code', className:'code', openWith:'<pre class="brush:php">', closeWith:'</pre>' },
		{name:'Encode Html special chars',
			className:"encodechars", 
			replaceWith:function(markItUp) { 
				container = document.createElement('div');
				container.appendChild(document.createTextNode(markItUp.selection));
				return container.innerHTML; 
			}},
		{separator:'---------------'},
		{name:'Preview', call:'preview', className:"preview"}
	]
}

// mIu nameSpace to avoid conflict.
miu = {
	markdownTitle: function(markItUp, char) {
		heading = '';
		n = $.trim(markItUp.selection||markItUp.placeHolder).length;
		for(i = 0; i < n; i++) {
			heading += char;
		}
		return '\n'+heading;
	}
}