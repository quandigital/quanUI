jQuery.fn.extend({
    calcProgress: function() {
        var maxProgress = $(this).attr('max'),
            valueProgress = $(this).attr('value'),
            progress;

        if (typeof valueProgress !== typeof undefined && valueProgress !== false) {
            progress = valueProgress;
            if (typeof maxProgress !== typeof undefined && maxProgress !== false) {
                progress = Math.floor(valueProgress/maxProgress * 1000)/1000;
            }
        }

        return progress;
    }
});