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
    t1 = new TimelineMax(),
    t3 = new TimelineMax(),
    t4 = new TimelineMax();


  var time1, time2, time3;

  function videoFullWidth() {
    $video.css({
      "width": "100vw",
      "height": "100vh",
      "border-radius": "0",
    });
    $player.css({
      "width": "100vw",
      "height": "100vh",
      "border-radius": "0",
    });
    $playerItem.css({
      "border-radius": "0",
    });
    $preview.css({
      "mix-blend-mode": "normal",
      "background": "#000"
    });
    $previewInner.css({
      "background": "rgba(0, 0, 0, 0)",
      "z-index": "-1"
    });
    $(".close").css("display", "block");
    $video.prop("muted", false);


  };

  function textHidden() {
    $(".midle__title").css({
      "display": "none",
    })

  }

  $videoPlay.on("mouseenter", function () {
    $player.addClass("vidio__play");
    $playerItem.addClass("vidioItem__play");
    $preview.addClass("videoPreview__play");
    $videoPlay.css({"background": "rgba(0,0,0,0)", "animation": "none",}).delay(2000);
    //   $previewInner.addClass("vidioInner__play");
    $video[0].currentTime = 0;
    if ($video.attr('paused') !== false) {
      $video[0].play();
    }
    time1 = setTimeout(mute, 1900);

    function mute() {
      $video.prop("muted", false);

      }



    time2 = setTimeout(videoFullWidth, 2000);
    time3 = setTimeout(textHidden, 1800);


  });


  $videoPlay.on("mouseleave", function () {
    console.log($player.css("height"));
      $player.removeClass("vidio__play");
      $playerItem.removeClass("vidioItem__play");
      $preview.removeClass("videoPreview__play");
      t1.reverse();
      $previewInner.removeClass("vidioInner__play");
      clearTimeout(time2);
      clearTimeout(time3);


      clearTimeout(time1);
      $videoPlay.css({
        "background": "#fff",
        "animation": "pulse 2s infinite"
      })





  })


  $videoPlay.on("click", function (e) {
    e.preventDefault();
    $video[0].currentTime = 0;
    $video.prop("muted", false);
    $preview.css("mix-blend-mode", "normal");
    $(".midle__title").css({
      "display": "none",
    })
    if ($video.attr('paused') !== false) {
      $video[0].play();
    }


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
    $player.css({
      "width": "50vh",
      "height": "50vh",
    });
    $playerItem.css({
      "border-radius": "100%",
    });
    $preview.css({
      "mix-blend-mode": "multiply",
      "background": "#000"
    });
    $previewInner.css({
      "background": "#fff",
      "z-index": "0"
    });
    $videoPlay.css({
      "background": "#fff",
      "animation": "pulse 2s infinite"
    });
    $(".midle__title").css({
      "display": "block",
    });

    t4
      .to($playerItem, 0.2, {
        autoAlpha: 1,
      })
      .to($previewInner, 0.2, {
        autoAlpha: 1,
      })


  })


  $(".close").on("click", function (e) {
    e.preventDefault();
    $wrap.css({"height": "100%"});
    $video.prop("muted", true);
    $video.css("margin-bottom", "0");
    $player.css({
      "width": "50vh",
      "height": "50vh",
    });
    $playerItem.css({
      "border-radius": "100%",
    });
    $preview.css({
      "mix-blend-mode": "multiply",
      "background": "#000"
    });
    $previewInner.css({
      "background": "#fff",
      "z-index": "0"
    });
    $videoPlay.css({
      "background": "#fff",
      "animation": "pulse 2s infinite"
    });
    $(".midle__title").css({
      "display": "block",
    });

    t4
      .to($playerItem, 0.2, {
        autoAlpha: 1,
      })
      .to($previewInner, 0.2, {
        autoAlpha: 1,
      })


  })
});