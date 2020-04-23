// fullpage.js lib control
$(document).ready(function () {
  var myFullpage = new fullpage("#fullpage", {
    onLeave: function (origin, destination, direction) {
      var leavingSection = this;
      var height = $(window).height();

      if (origin.index == 0 && direction == "down") {
        if (height >= 880) {
          $(".visual-header").css("background", "transparent");
          setTimeout(function () {
            $(".gnb a").css("color", "#FFF");
            $(".logo img").attr("src", "image/logo_w.png");
          }, 500);
        }
      } else if (destination.index == 0) {
        $(".visual-header").css("background", "#FFF");
        $(".gnb a").css("color", "#222");
        $(".logo img").attr("src", "image/logo.png");
      } else if (destination.index == 3) {
        setTimeout(function () {
          $(".visual-header")
            .css("background", "#FFF")
            .css("border-bottom", "1px solid #EEE");
          $(".gnb a").css("color", "#222");
          $(".logo img").attr("src", "image/logo.png");
        }, 500);
        $("#bmMV")[0].contentWindow.postMessage(
          '{"event":"command","func":"' + "playVideo" + '","args":""}',
          "*"
        );
      } else if (origin.index == 3 && direction == "up") {
        if (height >= 880) {
          $(".visual-header")
            .css("background", "transparent")
            .css("border-bottom", "1px solid transparent");
          $(".gnb a").css("color", "#FFF");
          $(".logo img").attr("src", "image/logo_w.png");
        }
      }
    },
  });
});
