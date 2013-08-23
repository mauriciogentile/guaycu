$(function() {
	/*$('#post').submit(function() {
		var post = $.post("create", $("#post").serialize());
		post.fail(function(err) {
			console.log(err);
		});
		post.done(function(err) {
			location.reload();
		});
		return false;
	});*/

	$('#create').click(function() {
		window.location = "create"
	});

	$('#cancel-edit').click(function() {
		window.location = "../"
	});

	$('#cancel-create').click(function() {
		window.location = "./"
	});
});