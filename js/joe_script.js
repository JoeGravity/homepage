var top_menu_height = 0;
jQuery(function($) {
    $(window).on('load', function() {
        $('.external-link').unbind('click');
		});

        $(document).ready( function() {

        // scroll to top
        $('#btn-back-to-top').click(function(e){
            e.preventDefault();
            scrollTo('#joe-top');
        });

        // scroll to specific id when click on menu
        $('.joe-top-menu .navbar-nav a').click(function(e){
            e.preventDefault();
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });

        // to stick navbar on top
        $('.joe-top-menu ').stickUp();

        // gallery category
        $('.joe-gallery-category a').click(function(e){
            e.preventDefault();
            $(this).parent().children('a').removeClass('active');
            $(this).addClass('active');
            var linkClass = $(this).attr('href');
            $('.gallery').each(function(){
                if($(this).is(":visible") == true){
                   $(this).hide();
                };
            });
            $(linkClass).fadeIn();
        });



        //gallery light box setup
/*         $('a.colorbox').colorbox({
                                    rel: function(){
                                        return $(this).data('group');

                                    }
        }); */
    });
});

// scroll animation
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}
