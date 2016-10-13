    $(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 450) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-solid-state").css({"background-color":"#242d44","color": "#ffffff"}); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
          $(".navbar-solid-state p").css({"background-color":"transparent","color": "#ffffff"});
        } else {
          $(".navbar-solid-state").css("background-color", "transparent"); // if not, change it back to transparent
          $(".navbar-solid-state p").css({"background-color":"transparent","color": "transparent"});
        }
      });
    });

    