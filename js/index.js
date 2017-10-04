$(document).ready(function () {
  $(".main").onepage_scroll({
    sectionContainer: "section",
    loop: true,
    responsiveFallback: false
  });
});


$(function () {
  var $player = $(".player"),
    $playerItem = $(".player .item"),
    $previewInner = $(".preview__inner"),
    $overlay = $(".layer--overlay"),
    $video = $("#preview-video"),
    $wrap = $(".p-wrapper"),
    $preview = $(".preview"),
    $videoPlay = $(".item__play"),
    t1= new TimelineMax(),
    t3 = new TimelineMax(),
    t4 = new TimelineMax();

  $videoPlay.on("mouseenter", function (date) {
    console.log("enter")
    $player.addClass("vidio__play");
    $playerItem.addClass("vidioItem__play");
    $preview.addClass("videoPreview__play");
    $videoPlay.css({"background": "rgba(0,0,0,0)", "animation":"none",}).delay(2000);
    $previewInner.addClass("vidioInner__play");

    new TimelineMax($videoPlay,1,{
        background : "rgba(0,0,0,0)",
        animation : "none",
        width : "100%",
        height : "100%",
        margin: "0",
        ease: Power4.easeOut,
      }, "-=2");

  });


  $videoPlay.on("mouseleave", function (date) {


      console.log("1")
      $player.removeClass("vidio__play");
      $playerItem.removeClass("vidioItem__play");
      $preview.removeClass("videoPreview__play");
      t1.reverse();
    $previewInner.removeClass("vidioInner__play")






  })


  $videoPlay.on("click", function (e) {
    e.preventDefault();
    $video[0].currentTime = 0;
    //  $video.prop("muted", false);
    $preview.css("mix-blend-mode", "normal");


    t3
      .add("start")
      .to($playerItem, 1.2, {
        autoAlpha: 0,
        ease: Power4.easeOut
      }, "start")
      .to($previewInner, 0.8, {
        autoAlpha: 0,
        ease: Power4.easeOut
      }, "-=0.8")
  });


  $video.on("click", function (e) {
    e.preventDefault();
    $wrap.css({"height": "100%"});
    $video.prop("muted", true);
    $video.css("margin-bottom", "0");
    $preview.css("mix-blend-mode", "multiply");

    t4
      .to($playerItem, 0.2, {
        autoAlpha: 1,
      })
      .to($previewInner, 0.2, {
        autoAlpha: 1,
      })


  })
});