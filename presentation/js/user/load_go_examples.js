// Before the document is ready, wrap
// our code elements
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
	});
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
				console.log("hello");
				$(thisEditor).html(data);
				activeEditor(thisEditor);			

			});
		}else{
			activeEditor(thisEditor);			
		};
	});
});