$(document).ready(function () {
    var data = [{
        "title": "Lorem Ipsum",
        "bg": "images/home1.jpg"
    }, {
        "title": "Lorem Ipsum",
        "bg": "images/home2.jpg"
    }, {
        "title": "Lorem Ipsum",
        "bg": "images/home3.jpg"
    }, {
        "title": "Lorem Ipsum",
        "bg": "images/home4.jpg"
    }, {
        "title": "Lorem Ipsum",
        "bg": "images/home5.jpg"
    }

    ];
    $.each(data, function (index) {
        $("#owl-demo").append('<div class="item" style="background-image:url(' + data[index].bg + ');"></div>');
    });

    $("#owl-demo").owlCarousel({

        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 5000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true

    });
    var width = $(window).width();
    $(".main").mouseover(function () { $('.owl-buttons').show(); $('.owl-pagination').show(); })
        .mouseout(function () {
            $('.owl-buttons').hide(); $('.owl-pagination').hide();
        });

});

