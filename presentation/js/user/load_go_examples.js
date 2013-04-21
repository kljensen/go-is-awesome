// Before the document is ready, wrap
// our code elements
$('code').each(function(){
	// Wrap this in a playground div so that
	// the Go present tool works.
	var dis = $(this)
	dis.addClass("go");
	dis.addClass("editor");
	dis.wrap('<div class="playground" />');
});

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