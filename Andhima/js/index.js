$(document).ready(function ($) {



    $('html, body').animate({
        scrollTop: $("#slide1").offset().top
    }, 500);

    $('.signup').addClass('animated wobble');

    var parPosition = [];
    var YoudivOffst = $('#slide4').offset().top;
   
    $('.par').each(function () {
        parPosition.push($(this).offset().top);
    });

    var profiles = [["Condolenses", "Suresh", 4, 5, 6],
                ["Regrets", "Nikhil", 8, 5, 6],
                ["Deep Regret", "Ujjal", 4, 20, 6],
                ["Rest in Peace", "Nikunj", 30, 5, 6],
                ["Condolenses", "Kumar", 10, 5, 12],
                ["Rest in Peace", "Ramesh", 4, 5, 6],
                ["Deep Regret", "Jai Singh", 4, 5, 6],
                 ["Regrets", "Jeena", 8, 5, 6],
                  ["Regrets", "Marna", 8, 5, 6],
                   ["Regrets", "Batman", 8, 5, 6]];

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    shuffle(profiles);
 
    var x = '<div class="name">' + profiles[0][0] + '</div><hr /><img src="img/imgperson.jpg"><div class="nameOfPerson">' + profiles[0][1] + '</div><hr /><div class="buttons">' + profiles[0][2] + ' ' + profiles[0][3] + ' ' + profiles[0][4] + '</div>';
    var y = '<div class="name">' + profiles[1][0] + '</div><hr /><img src="img/imgperson.jpg"><div class="nameOfPerson">' + profiles[1][1] + '</div><hr /><div class="buttons">' + profiles[1][2] + ' ' + profiles[1][3] + ' ' + profiles[1][4] + '</div>';
    var z = '<div class="name">' + profiles[2][0] + '</div><hr /><img src="img/imgperson.jpg"><div class="nameOfPerson">' + profiles[2][1] + '</div><hr /><div class="buttons">' + profiles[2][2] + ' ' + profiles[2][3] + ' ' + profiles[2][4] + '</div>';
      $("#one").append(x);
       $("#two").append(y);
       $("#three").append(z);





    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    $('.vNav ul li a').click(function () {
        $('.vNav ul li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.vNav a').hover(function () {
        $(this).find('.label').show();
    }, function () {
        $(this).find('.label').hide();
    });

    var lastScrollTop = 0;
    $(document).scroll(function () {
        var position = $(document).scrollTop(),
                index;
        for (var i = 0; i < parPosition.length; i++) {
            if (position <= parPosition[i]) {
                index = i;
                break;
            }
        }

        if (position >= (YoudivOffst-5)) {

            $(".userimage").show("slow", "swing");
        }


        $('.vNav ul li a').removeClass('active');
        $('.vNav ul li a:eq(' + index + ')').addClass('active');
    });

    $('.vNav ul li a').click(function () {
        $('.vNav ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.inputdata').parallax({
        speed: 0.35
    });
    $('#slide1').parallax({
        speed: 0.30
    });
    $('#slide2').parallax({
        speed: 0.25
    });
    $('#slide3').parallax({
        speed: 0.20
    });
    $('#slide4').parallax({
        speed: 0.25
    });
    $('#slide5').parallax({
        speed: 0.25
    });


});

