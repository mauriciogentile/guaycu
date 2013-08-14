$(document).ready(function(){
    
    // masonry
    
    var $container = $('#masonry');
    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector : '.col'
        });
    });
    $(window).resize(function() {
        $container.masonry({
            itemSelector : '.col',
            isAnimated: true
        });
    });
    
    //tool tip
    $('a,i').tooltip();
    
    //modal
    
    $('.span2.thumbnail').click(function(){
        $('#myModal').modal('toggle');
        var src = $(this).attr('href');
        var title = $(this).children().attr('title');
        $('#modalImg').attr('src',src);
        if (title)
            $('#imgTitle').html(title);
        else 
            $('#imgTitle').html('&nbsp;');
        return false
    });

    $('#myModal').on('show', function () {
        $(this).css('top', -$('html').position().top + 265+'px');
        $(this).show('fast');
    });
    
    //form Validation
    
    $("#commentform").validate({
        rules: {
            author: "required",
            email: "required email",
            comment: "required"
        }
    });
    
    
    
});