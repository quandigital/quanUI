(function() {
    var $ = jQuery;
    
    $('progress').initialize(function(index) {
        // add new elements
        var progressVal = $('<span class="progress-value">');
        var progressBar = $('<span class="progress-bar">')
            .clone()
            .appendTo(
                $('<div class="progress-container">')
                    .clone()
                    .prependTo($(this).parent())
                    .append(progressVal)
            )
            .css('width', $(this).calcProgress() * 100 + '%')
            .addClass($(this).attr('class'));

        // "progress" the bar
        $(this).on('change', function() {
            progressBar.removeClass('indeterminate').css('width', $(this).calcProgress() * 100 + '%');
            progressVal.text(Math.floor($(this).calcProgress() * 1000)/10 + '%');

            // add a success class if it has reached 100%
            if ($(this).calcProgress() >= 1) {
                progressBar.addClass('success');
            };
        });

        // add an indeterminate class
        if ($(this).attr('value') == '' || typeof $(this).attr('value') === typeof undefined || $(this).attr('value') === false) {
            progressBar.addClass('indeterminate').css('width', '100%');
        } else {
            // numerical representation
            progressVal.text(Math.floor($(this).calcProgress() * 1000)/10 + '%');
        }

        // add a success class if it already has reached 100%
        if ($(this).calcProgress() >= 1) {
            progressBar.addClass('success');
        };

        
    });

})(jQuery);