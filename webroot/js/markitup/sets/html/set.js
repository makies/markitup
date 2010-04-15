// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Html tags
// http://en.wikipedia.org/wiki/html
// ----------------------------------------------------------------------------
// Basic set. Feel free to add more tags
// ----------------------------------------------------------------------------
mySettings = {
	onShiftEnter:	{keepDefault:false, replaceWith:'<br />\n'},
	onCtrlEnter:	{keepDefault:false, openWith:'\n<p>', closeWith:'</p>\n'},
	onTab:			{keepDefault:false, openWith:'	 '},
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'<h1(!( class="[![Class]!]")!)>', closeWith:'</h1>', placeHolder:'Your title here...' },
		{name:'Heading 2', key:'2', openWith:'<h2(!( class="[![Class]!]")!)>', closeWith:'</h2>', placeHolder:'Your title here...' },
		{name:'Heading 3', key:'3', openWith:'<h3(!( class="[![Class]!]")!)>', closeWith:'</h3>', placeHolder:'Your title here...' },
		{name:'Heading 4', key:'4', openWith:'<h4(!( class="[![Class]!]")!)>', closeWith:'</h4>', placeHolder:'Your title here...' },
		{name:'Heading 5', key:'5', openWith:'<h5(!( class="[![Class]!]")!)>', closeWith:'</h5>', placeHolder:'Your title here...' },
		{name:'Heading 6', key:'6', openWith:'<h6(!( class="[![Class]!]")!)>', closeWith:'</h6>', placeHolder:'Your title here...' },
		{name:'Paragraph', openWith:'<p(!( class="[![Class]!]")!)>', closeWith:'</p>' },
		{separator:'---------------' },
		{name:'Bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)' },
		{name:'Italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)' },
		{name:'Stroke through', key:'S', openWith:'<del>', closeWith:'</del>' },
		{separator:'---------------' },
		{name:'Ul', openWith:'<ul>\n', closeWith:'</ul>\n' },
		{name:'Ol', openWith:'<ol>\n', closeWith:'</ol>\n' },
		{name:'Li', openWith:'<li>', closeWith:'</li>' },
		{separator:'---------------' },
		{name:'Picture', key:'P', replaceWith:'<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" />' },
		{name:'Link', key:'L', openWith:'<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Your text to link...' },
		{name: 'Smilies', className: "smilies",
				dropMenu: [
					{name:'Smile',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-smile.gif" alt="smile" />', className:"smile" },
					{name:'Wink',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-wink.gif" alt="wink" />', className:"wink" },
					{name:'Laughing',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-laughing.gif" alt="laughing" />', className:"laughing" },
					{name:'Cool',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-cool.gif" alt="cool" />', className:"cool" },
					{name:'Tongue Out',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-tongue-out.gif" alt="tounge-out" />', className:"tongue-out" },
					{name:'Embarrassed',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-embarassed.gif" alt="embarassed" />', className:"embarassed" },
					{name:'Innocent',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-innocent.gif" alt="innocent" />', className:"innocent" },
					{name:'Kiss',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-kiss.gif" alt="kiss" />', className:"kiss" },
					{name:'Cry',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-cry.gif" alt="cry" />', className:"cry" },
					{name:'Foot-in-Mouth',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-foot-in-mouth.gif" alt="foot-in-mouth" />', className:"foot-in-mouth" },
					{name:'Frown',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-frown.gif" alt="frown" />', className:"frown" },
					{name:'Money-Mouth',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-money-mouth.gif" alt="money-mouth" />', className:"money-mouth" },
					{name:'Sealed',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-sealed.gif" alt="sealed" />', className:"sealed" },
					{name:'Surprised',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-surprised.gif" alt="surprised" />', className:"surprised" },
					{name:'Undecided',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-undecided.gif" alt="undecided" />', className:"undecided" },
					{name:'Yell',	replaceWith:'<img src="/tinymce/js/plugins/emotions/img/smiley-yell.gif" alt="yell" />', className:"yell" },
					] },
		{separator:'---------------' },
		{name:'Clean', className:'clean', replaceWith:function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") } },
		{name:'Encode Html special chars',
			className:"encodechars", 
			replaceWith:function(markItUp) { 
				container = document.createElement('div');
				container.appendChild(document.createTextNode(markItUp.selection));
				return container.innerHTML; 
			}},
			{name:'Code', className:'code', openWith:'<pre class="brush:php">', closeWith:'</pre>' },
			{name:'Preview', className:'preview', call:'preview' }
	]
}
