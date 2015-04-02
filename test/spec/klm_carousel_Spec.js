var data = {
    ControlPanel: {
        CurrentInOrder: 1
    },
    Questions: [{
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
    }]
};

function Printdiv()
{
    $.each(data, function (index)
    {
        $("#owl-demo").append('<div class="item" style="background-image:url(' + data[index].bg + ');"></div>');
    });
}

function autoRun()
{
 /*   $("#owl-demo").owlCarousel({

     

    });*/
}