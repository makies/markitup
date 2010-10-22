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
					{name:'Smile',	replaceWith:'![Smile](/tinymce/js/plugins/emotions/img/smiley-smile.gif "Smile")', className:"smile" },
					{name:'Wink',	replaceWith:'![Wink](/tinymce/js/plugins/emotions/img/smiley-wink.gif "wink")', className:"wink" },
					{name:'Laughing',	replaceWith:'![Laughing](/tinymce/js/plugins/emotions/img/smiley-laughing.gif "laughing")', className:"laughing" },
					{name:'Cool',	replaceWith:'![Cool](/tinymce/js/plugins/emotions/img/smiley-cool.gif "cool")', className:"cool" },
					{name:'Tongue Out',	replaceWith:'![Tongue Out](/tinymce/js/plugins/emotions/img/smiley-tongue-out.gif "tounge-out")', className:"tongue-out" },
					{name:'Embarrassed',	replaceWith:'![Embarrassed](/tinymce/js/plugins/emotions/img/smiley-embarassed.gif "embarassed")', className:"embarassed" },
					{name:'Innocent',	replaceWith:'![Innocent](/tinymce/js/plugins/emotions/img/smiley-innocent.gif "innocent")', className:"innocent" },
					{name:'Kiss',	replaceWith:'![Kiss](/tinymce/js/plugins/emotions/img/smiley-kiss.gif "kiss")', className:"kiss" },
					{name:'Cry',	replaceWith:'![Cry](/tinymce/js/plugins/emotions/img/smiley-cry.gif "cry")', className:"cry" },
					{name:'Foot-in-Mouth',	replaceWith:'![Foot-in-Mouth](/tinymce/js/plugins/emotions/img/smiley-foot-in-mouth.gif "foot-in-mouth")', className:"foot-in-mouth" },
					{name:'Frown',	replaceWith:'![Frown](/tinymce/js/plugins/emotions/img/smiley-frown.gif "frown")', className:"frown" },
					{name:'Money-Mouth',	replaceWith:'![Money-Mouth](/tinymce/js/plugins/emotions/img/smiley-money-mouth.gif "money-mouth")', className:"money-mouth" },
					{name:'Sealed',	replaceWith:'![Sealed](/tinymce/js/plugins/emotions/img/smiley-sealed.gif "sealed")', className:"sealed" },
					{name:'Surprised',	replaceWith:'![Surprised](/tinymce/js/plugins/emotions/img/smiley-surprised.gif "surprised")', className:"surprised" },
					{name:'Undecided',	replaceWith:'![Undecided](/tinymce/js/plugins/emotions/img/smiley-undecided.gif "undecided")', className:"undecided" },
					{name:'Yell',	replaceWith:'![Yell](/tinymce/js/plugins/emotions/img/smiley-yell.gif "yell")', className:"yell" },
					] },
		{separator:'---------------'},	
		{name:'Quotes', openWith:'> '},
		{name:'Code', className:'code', openWith:'<pre class="brush:php">', closeWith:'</pre>' },
		{separator:'---------------'},
		//{name:'Preview', call:'preview', className:"preview"}
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