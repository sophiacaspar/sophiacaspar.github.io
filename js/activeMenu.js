$(document).ready(function () {
        $('#menu ul li a').click(function (e) {
            e.preventDefault();
            $('#menu ul li a').removeClass('active');
            $(this).addClass('active');                
        });            
    });