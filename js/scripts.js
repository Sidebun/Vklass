$(document).ready(function () { /* jQuery toggle layout */
    $('#btnToggle').click(function () {
        if ($(this).hasClass('on')) {
            $('#main .col-md-6').addClass('col-md-4').removeClass('col-md-6');
            $(this).removeClass('on');
        } else {
            $('#main .col-md-4').addClass('col-md-6').removeClass('col-md-4');
            $(this).addClass('on');
        }
    });


    var schema_knapp = $('.schema-knapp');
    var schema_main = $('.main-scheme');

    schema_main.hide();

    var spacing;

    var schema = [

        {

            day: 'm',
            lek: ['Pro 2', 'Data L', 'Gymn', 'Gräns'],
            lar: ['LAHE', 'ROHU', 'NINO'],
            timestart_1: [08, 09, 12, 13],
            timestart_2: [20, 55, 15, 50],
            timeend: ['09:45', '11:20', '13:40', '15:15']

        },
        {

            day: 't',
            lek: ['Web', 'Mob'],
            lar: ['Jill', 'Jill'],
            timestart_1: [11, 12],
            timestart_2: [35, 55],
            timeend: ['12:45', '14:20']

        },
        {
            day: 'o',
            lek: ['Data L', 'Mjuk D', 'Web', 'Gymn'],
            lar: ['ROHU', 'Jill', 'Jill', 'NINO'],
            timestart_1: [08, 10, 12, 14],
            timestart_2: [20, 30, 45, 05],
            timeend: ['09:45', '10:20', '11:55', '13:50', '15:35']
        }
    ];

    function map(x,
        in_min,
        in_max,
        out_min,
        out_max) {

        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }


    schema_knapp.click(function () {
        schema_main.show();
        // var lkj = 2;
        //$('.m-1st-lekt').text('.m-' + lkj + 'st-lekt');

        for (var u = 0; u <= schema.length - 1; u++) {

            for (var i = 0; i <= schema[u].lek.length - 1; i++) {
                $('.' + u + '-' + i + 'st-lekt').text(schema[u].lek[i]);
                $('.' + u + '-' + i + 'st-teac').text(schema[u].lar[i]);
                $('.' + u + '-' + i + 'st-time').text(schema[u].timestart_1[i] + ':' + schema[u].timestart_2[i] +
                    '-' + schema[u].timeend[i]);

                spacing = schema[u].timestart_1[i] + (schema[u].timestart_2[i] / 100);
                spacing = map(spacing, 8.00, 17, 10, 800);

                $('.' + u + '-' + i).css("margin-top", spacing);




            };

        };


    });


});