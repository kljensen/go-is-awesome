// Before the document is ready, wrap
// our code elements
function resizeActiveEditors(height){

}

function toggleCodeMinMax () {
	var els = $('#minmax')
	var activeEditors = $('section.present').not('.stack').find('code.editor');
	if (els.length == 1) {
		els.remove();

		activeEditors.each(function(i, el){
			var jel = $(el);
			jel.height(jel.data('originalHeight'));
			editor = ace.edit(el);
			editor.resize();
		});	
	}else{
		// activeEditors.hide()
		$('head').append('<style id="minmax">.reveal, .reveal .slides, .slides, section { position: absolute !important; width: 100% !important; height: 100% !important;} .playground-wrapper{ position: absolute !important; top: 0px; left: 0; width: 100% !important;height: 100% !important; margin: 0 !important; } div.ace_content{width:100%;}.playground{width:100% !important; height:80%;} div.output {right:25%; bottom:25%;}</style>');

		// .reveal .editor{height:100%;}
		activeEditors.each(function(i, el){
			var jel = $(el);
			jel.data('originalHeight', jel.height());
			jel.height('90%');
			editor = ace.edit(el);
			editor.resize();
		});	
	};
	resizeActiveEditors();
}

(function () {

	$('code').each(function(){
		var dis = $(this)

		// Make sure transitions on slides with code
		// are "none", otherwise they're borked-ish.
		var parentSections = dis.parent('section')
		parentSections.attr('data-transition', 'none')

		// Do the same if the slide is nested.
		parentSections.parent('section').attr('data-transition', 'none')

		// Wrap this in a playground div so that
		// the Go present tool works.
		dis.wrap('<div class="playground" />');

		// Add Go class to help ACE with syntax highlighting
		dis.addClass("go");

		// .editor selector used elsewhere
		dis.addClass("editor");

		// Wrap playgrounds to support making them fullscreen
		$('div.playground').wrap('<div class="playground-wrapper" />')
	});
	$('div.playground').prepend('<a class="minmax">minmax</a>');
	$('a.minmax').click(toggleCodeMinMax);
}());

$(document).ready(function () {
	function activeEditor (el) {

		// Activate the ACE editor
	    var editor = ace.edit(el);
	    editor.setTheme("ace/theme/tomorrow_night");
	    editor.getSession().setMode("ace/mode/golang");
	}

	// Activate each of the code regions
	$('code.editor').each(function(){


		var thisEditor = this;
		var src = $(this).attr('data-src');
		if (src) {
			$.get(src, function(data){
				$(thisEditor).html(data);
				activeEditor(thisEditor);			

			});
		}else{
			activeEditor(thisEditor);			
		};
	});
});