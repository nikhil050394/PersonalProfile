$(document).ready(function () {
  $(".load").hide();

  $("#resumebutton").hover(
    function () {
      $(this).css("background-color", "rgba(0,0,0,0.3)");
    },
    function () {
      $(this).css("background-color", "rgba(0,0,0,0.2)");
    }
  );

  $(".Personal-Menu > div").on("click", function () {
    var introWidth = $(".Personal-Image").width(),
      menuWidth = $(".Personal-Menu").width();

    $(".Personal-Image").animate(
      {
        left: "-" + introWidth,
      },
      1000,
      "easeOutQuart"
    );
    $(".Personal-Menu").animate(
      {
        left: menuWidth,
      },
      1000,
      "easeOutQuart",
      function () {
        //        $('.homepage').hide();
      }
    );
    $(".close-btn").show();
  });

  // Show Reletive Page Onclick

  $(".Profile").click(function () {
    $(".profilehomepage").fadeIn(1200);
  });

  $(".Resume").click(function () {
    $(".resumehomepage").fadeIn(1200);
  });

  $(".Portfolio").click(function () {
    $(".portfoliohomepage").fadeIn(1200);
  });

  $(".Contact").click(function () {
    $(".contacthomepage").fadeIn(1200);
  });

  // Close Button, Hide Menu

  $(".close-btn").on("click", function () {
    $(".close-btn").hide();
    //  $('.homepage').show();
    $(".Personal-Image, .Personal-Menu").animate(
      {
        left: 0,
      },
      1000,
      "easeOutQuart"
    );
    $(".profilehomepage, .resumehomepage, .portfoliohomepage, .contacthomepage").fadeOut(800);
  });
  $("#reachmebutton").click(function () {
    alert("Sorry This feature is not Available Yet. Please mail manually on the id given below. Sorry for the inconvenience");
  });
});
