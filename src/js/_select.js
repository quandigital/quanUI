(function() {
    var $ = jQuery;
    
    $('select').initialize(function(index) {
        // add new elements
        var handle = $('<div class="select-handle">'),
            options = $('<ul class="select-options">'),
            value = $('<div class="select-value">'),
            selected,
            width
            origSelect = $(this);

        $.each($(this).children(), function(index, val) {
            // console.log($(val));
            options.append($('<li class="select-option">').text($(val).text()).attr('data-value', $(val).val()));

            if ($(val)[0].selected == true) {
                selected = {
                    'index': index, 
                    'value': $(val).val(), 
                    'text': $(val).text()
                }
            }
        });

        $(this).parent()
            .append(
                handle.clone()
                .append(
                    options.clone()
                )
                .prepend(
                    value.clone().text(selected.text)
                )
            );

        $('.select-option').eq(selected.index).addClass('selected');

        // set the elements again to manipulate them
        handle = $(this).siblings('.select-handle');
        value = handle.children('.select-value');
        options = handle.children('.select-options');
        width = options.width() + 80;

        handle
            .width(width)
            .on('click', function() {
                options.toggleClass('select-list-visible');
                value.toggleClass('select-list-visible');
            });

        options.outerWidth(width);
        
        $('.select-option').on('click', function(e) {
            e.preventDefault();
            // console.log($(this).index());
            selected = {
                'index': $(this).index(), 
                'value': $(this).data('value'),
                'text': $(this).text()
            }

            $(this)
                .addClass('selected active')
                .siblings('.select-option').removeClass('selected');
            
            setTimeout($.proxy(function() {
                $(this).removeClass('active');
                options.toggleClass('select-list-visible');
                value.toggleClass('select-list-visible');
            }, this), 650);

            origSelect.val(selected.value).attr('selected'), 
            origSelect.change();

            value.text(selected.text);

            return false;
        });
    });

})(jQuery);