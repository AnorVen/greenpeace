
$(document).ready(function(){
  $(".main").onepage_scroll({
    sectionContainer: "section",
    loop: true,
    responsiveFallback: false
  });
});





$(function () {
  var $moveable = $('.layer--movable'),
    $player = $(".player"),
    $playerItem = $(".player .item"),
    $previewInner = $(".preview__inner"),
    $overlay = $(".layer--overlay"),
    $video = $("#preview-video"),
    $wrap = $(".p-wrapper"),
    $preview=$(".preview"),

    t1 = new TimelineLite(),
    t2 = new TimelineLite(),
    t3 = new TimelineLite(),
    t4 = new TimelineLite();



  $player.on("mouseenter", function () {
    t1
      .to($player, 2, {
        width: "100vh",
        height: "100vh",
        ease: Power2.easeOut,


      } )
      .to($player,1,{
          width: "100vw",
        }, "-=1",

      )
      .to($playerItem, 1, {
        borderRadius: "0%",
        ease: Power0.easeOut,


      }, "-=1");

    t2
      .to($wrap, 3, {
        mixBlendMode: "normal",
        ease: Power0.easeOut,

      })

  })


  $player.on("mouseleave", function () {
    console.log("1")
    t1.reverse();
    t2.reverse();



    /* new TimelineLite()

      .from($player, 0.3, {
        width: "45vh",
        height: "45vh"
      }, "-=0.2")*/
  })


  $player.on("click", function (e) {
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
  })
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