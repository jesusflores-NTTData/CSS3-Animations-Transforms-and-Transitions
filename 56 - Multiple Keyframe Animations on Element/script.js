$(document).ready(function () {
  $(".fill").mouseenter(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    $(this).find(".circle").css({ top: mouseY, left: mouseX });
  });
});
