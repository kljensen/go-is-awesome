// Before the document is ready, wrap
// our code elements

(function () {

	function restoreEditorSizes () {
		$('#minmax').remove();

		var allEditors = $('section').find('code.editor');
		allEditors.each(function(i, el){
			var jel = $(el);
			var height = jel.data('originalHeight')
			if (typeof(height) != 'undefined') {
				var jel = $(el);
				jel.height(jel.data('originalHeight'));
				editor = ace.edit(el);
				editor.resize();
				jel.removeData('originalHeight')				
			};
		});		
	}

	function toggleCodeMinMax () {
		var els = $('#minmax')
		if (els.length == 1) {
			restoreEditorSizes();
		}else{
			// activeEditors.hide()
			var activeEditors = $('section.present').not('.stack').find('code.editor');
			$('head').append('<style id="minmax">.reveal, .reveal .slides, .slides, section { position: absolute !important; width: 100% !important; height: 100% !important;} .playground-wrapper{ position: absolute !important; top: 0px; left: 0; width: 100% !important;height: 100% !important; margin: 0 !important; } div.ace_content{width:100%;}.playground{width:100% !important; height:80%;} div.output {right:25%; bottom:25%;} .reveal .editor{font-size: 20px}</style>');

			// .reveal .editor{height:100%;}
			activeEditors.each(function(i, el){
				var jel = $(el);
				jel.data('originalHeight', jel.height());
				jel.height('90%');
				editor = ace.edit(el);
				editor.resize();
			});	
		};
	}

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
	$('div.playground').prepend('<a class="minmax">&#10063;</a>');
	$('a.minmax').click(toggleCodeMinMax);

	Reveal.addEventListener( 'slidechanged', function( event ) {
	    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
	    restoreEditorSizes();
	} );
}());

$(document).ready(function () {
	function activeEditor (el) {

		// Activate the ACE editor
	    var editor = ace.edit(el);
	    editor.setTheme("ace/theme/tomorrow_night");
	    editor.getSession().setMode("ace/mode/golang");

	    // Put the cursor on main if it is there
	    var result = editor.find("func main() {");
	    if (typeof(result) != "undefined"){
		    editor.gotoLine(result.start.row + 1);
	    	
	    }
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