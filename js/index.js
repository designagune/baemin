// visual-section-3 image load
$(document).ready(function () {
  for (var i = 1; i <= 15; i++) {
    $(".visual-section-box-1:nth-child(" + i + ")")
      .css("background", "url(image/badge_" + i + ".png) top center no-repeat")
      .css("background-size", "150px 150px");
  }
});
