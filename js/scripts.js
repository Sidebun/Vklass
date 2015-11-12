$(document).ready(function () { /* jQuery toggle layout */


    var schema_knapp = $('.schema-knapp');
    var schema_main = $('.main-scheme');

    schema_main.hide();

    var spacing;
    var kurshojd;
    var corr_1;
    var corr_2;

    var schema = [

        {

            day: 'm',
            lek: ['Pro 2', 'Data L', 'Gymn ', 'Gräns'],
            lar: ['LAHE', 'ROHU', 'NINO', 'BJLA'],
            timestart_1: [08, 09, 12, 13],
            timestart_2: [20, 55, 15, 50],

            timeend_1: [09, 11, 13, 15],
            timeend_2: [45, 20, 40, 15]
        },
        {

            day: 't',
            lek: ['Web', 'Mob'],
            lar: ['Jill', 'Jill'],
            timestart_1: [11, 12],
            timestart_2: [35, 55],

            timeend_1: [12, 14],
            timeend_2: [45, 20]

        },
        {
            day: 'o',
            lek: ['Data L', 'Mjuk D', 'Web', 'Gymn'],
            lar: ['ROHU', 'Jill', 'Jill', 'NINO'],
            timestart_1: [08, 10, 12, 13],
            timestart_2: [20, 30, 45, 55],

            timeend_1: [09, 11, 13, 15],
            timeend_2: [45, 55, 50, 35]
        },
        {

            day: 't',
            lek: ['Gräns', 'Mob', 'Mjuk'],
            lar: ['BJLA', 'Jill', 'Jill'],
            timestart_1: [08, 10, 12],
            timestart_2: [20, 10, 10],

            timeend_1: [09, 11, 13],
            timeend_2: [45, 30, 35]




        },
        {

            day: 'f',
            lek: ['Pro 2', 'Gymn'],
            lar: ['LAHE', 'NINO'],
            timestart_1: [09, 12],
            timestart_2: [50, 10],

            timeend_1: [11, 13],
            timeend_2: [15, 30]




        }
    ];

    function map(x,
        in_min,
        in_max,
        out_min,
        out_max) {

        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    function set_prop(u, i) {

        $('.' + u + '-' + i + 'st-lekt').text(schema[u].lek[i]);
        $('.' + u + '-' + i + 'st-teac').text(schema[u].lar[i]);
        $('.' + u + '-' + i + 'st-time').text(schema[u].timestart_1[i] + ':' + schema[u].timestart_2[i] + '-' + schema[u].timeend_1[i] + ':' + schema[u].timeend_2[i]);

    }


    schema_knapp.click(function () {
        schema_main.show();
        // var lkj = 2;
        //$('.m-1st-lekt').text('.m-' + lkj + 'st-lekt');

        for (var u = 0; u <= schema.length - 1; u++) {

            for (var i = 0; i <= schema[u].lek.length - 1; i++) {

                set_prop(u, i);

                spacing = schema[u].timestart_1[i] + (schema[u].timestart_2[i] / 100);
                spacing = map(spacing, 8.00, 17, 30, 900);

                $('.' + u + '-' + i).css("margin-top", spacing);

                corr_1 = map(schema[u].timestart_2[i], 0, 60, 0, 100);
                corr_2 = map(schema[u].timeend_2[i], 0, 60, 0, 100);

                kurshojd = (schema[u].timeend_1[i] + (corr_2 / 100)) - (schema[u].timestart_1[i] + (corr_1 / 100));

                kurshojd = map(kurshojd, 1, 3, 70, 250);

                $('.' + u + '-' + i).css("height", kurshojd);
            };

        };


    });


});