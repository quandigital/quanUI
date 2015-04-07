$(document).ready(function() {
    $('#uploads tbody').append(
        $('<tr>').append([
            $('<td>').text('test.csv'),
            $('<td>').text('500'),
            $('<td>').html($('<progress class="testclass" value="">')),
            $('<td>').text('2015-03-31'),
            $('<td>').text('2015-03-31'),
        ])
    );

    intervalVal = parseInt($('.testclass').val());
    setTimeout(function(){
        var intervalID = setInterval(function() {
            intervalVal = intervalVal + .005;
            if (intervalVal >= 1) {
                clearInterval(intervalID);
            };
            $('.testclass').attr('value', intervalVal).change();
        }, 30);
    }, 4000);
});