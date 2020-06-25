$(document).ready(function () {
    //show nav when click icon
    $('.category h3').click(function () {
        $('.nav').slideToggle();
    });

    var newTitle = $('#newTitle').val();

    $(".nav-item a").click(function () {
        var Title = $(this).attr('id');
        $("#newTitle").text(Title);
        if (Title === 'Chicken') {
            $('.fees > div ').show();
        } else {
            $('.fees > div ').hide();
            $('.' + Title).show();
            console.log('.' + Title);
           
        }

//slid
    });
});