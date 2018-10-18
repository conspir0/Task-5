import $ from 'jquery';

require('webpack-jquery-ui');

$( function() {
    $( ".slider-range" ).each(function() {
        $( this ).slider({
            range: true,
            min: $(this).data('min'),
            max: $(this).data('max'),
            values: [ $(this).data('value1'), $(this).data('value2') ],
            slide: function( event, ui ) {
                console.log(ui.values[0], ui.values[1], $(this).siblings('.slider-value').find('.value-min').text());
                $(this).siblings('.slider-value').find('.value-min').text(ui.values[0]);
                $(this).siblings('.slider-value').find('.value-max').text(ui.values[1]); 
                console.log($(this).data('max'));
            }

        });
        
    })
});