jQuery.fn.extend({
    getClasses: function() {
        var classesString, 
            classes = [],
            elementClass = $(this).attr('class');

        if (typeof elementClass !== typeof undefined && elementClass !== false) {
            $(elementClass.split(' ')).each(function() { 
                if (this !== '') {
                    classes[this] = this;
                }    
            });
        };

        $.each(classes, function(index, val) {
             classesString += val;
        });

        return classesString;
    }
});