$(function() {
	$('#post').submit(function() {
		var post = $.post("create", $("#post").serialize());
		post.fail(function(err) {
			console.log(err);
		});
		return false;
	});
});