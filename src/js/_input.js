(function() {
    var $ = jQuery;

    $('input').initialize(function() {
        if ($(this).attr('type') == 'submit') {
            return false;
        };
        $(this).wrap($('<div>').addClass('type-' + $(this).attr('type')));
    });
})(jQuery);