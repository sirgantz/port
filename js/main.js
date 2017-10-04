$(document).ready(function() {
  pm = 1;
  var menuw = $("#menu-pc").width();
  $('#m-item2').css({'background-position-x': menuw+'px'});
  $('#m-item3').css({'background-position-x': menuw+'px'});
  $('#m-item1').css({'background-position-x': menuw*0.85+'px'});

function mic(item) {
  setTimeout(function() {
    if (pm === item) {
      $('#m-i'+item).stop().animate({'opacity': '1'}, 250, 'linear');
    }
  }, 250);
}

function mi(item) {
  for (i = 1; i <= 3; i++) {
    if (item == i)
    {
      mic(i);
    }
    else {
      $('#m-i'+i).stop().animate({'opacity': '0'}, 70, 'linear');
    }
  }
}

mi_bg_a = "#182a78";
mi_bg_p = "#203493";
mi_tx_a = "#182a78";
mi_tx_p = "#ebebeb";

function pm1() {
  pm = 1;
  var menuw = $("#menu-pc").width();
  $("#m-item1").stop();
  $("#m-item2").stop();
  $("#m-item3").stop();
  $("#m-item2").animate({width:"100%", "background-color":mi_bg_p}, 200);
  $("#m-item3").animate({width:"100%", "background-color":mi_bg_p}, 200);
  $("#m-item1").animate({width:"107%", "background-color":mi_bg_a}, 200);
  $('#m-item2').animate({'background-position-x': menuw+'px'}, 200, 'easeInCirc');
  $('#m-item3').animate({'background-position-x': menuw+'px'}, 200, 'easeInCirc');
  $('#m-item1').animate({'background-position-x': menuw*0.85+'px'}, 300, 'easeOutCirc', mi(1));
}
function pm2() {
  pm = 2;
  var menuw = $("#menu-pc").width();
  $("#m-item1").stop();
  $("#m-item2").stop();
  $("#m-item3").stop();
  $("#m-item1").animate({width:"100%", "background-color":mi_bg_p}, 200);
  $("#m-item3").animate({width:"100%", "background-color":mi_bg_p}, 200);
  $("#m-item2").animate({width:"107%", "background-color":mi_bg_a}, 200);
  $('#m-item1').animate({'background-position-x': menuw+'px'}, 200, 'easeInCirc');
  $('#m-item3').animate({'background-position-x': menuw+'px'}, 200, 'easeInCirc');
  $('#m-item2').animate({'background-position-x': menuw*0.85+'px'}, 300, 'easeOutCirc', mi(2));
  //background-position: -110% 0%;
}
function pm3() {
  pm = 3;
  var menuw = $("#menu-pc").width();
  $("#m-item1").stop();
  $("#m-item2").stop();
  $("#m-item3").stop();
  $("#m-item1").animate({width:"100%", "background-color":mi_bg_p}, 200);
  $("#m-item2").animate({width:"100%", "background-color":mi_bg_p}, 200);
  $("#m-item3").animate({width:"107%", "background-color":mi_bg_a}, 200);
  $('#m-item1').animate({'background-position-x': menuw+'px'}, 200, 'easeInCirc');
  $('#m-item2').animate({'background-position-x': menuw+'px'}, 200, 'easeInCirc');
  $('#m-item3').animate({'background-position-x': menuw*0.85+'px'}, 300, 'easeOutCirc', mi(3));
}

var axemenu = Snap('#foxy-menu');
var axe = axemenu.select('#axe-move');
function axer() {
  axe.animate({transform: "r-90,100,100"}, 300, mina.easeinout);
  setTimeout(function() {
    axe.animate({transform: "r-10,100,100"}, 150, mina.easeinout);
    setTimeout(function() {
        axe.animate({transform: "r-50,100,100"}, 220, mina.easeinout);
    }, 150);
  }, 300);
}


foxyr = 0;

axe.transform('r-50,100,100');
//foxymenu = Snap('#foxy-menu');
//foxymove = foxymenu.select('#foxy-move');
scrolled = 0;
$("body").stop().animate({"scrollTop":0},10);
  window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var menuh = $("#menu-pc").height();
    var scr = scrolled/menuh*360;

    /*
    if (scr>=0 && scr<=30) {
      if (foxyr == 0) {
        //$("#foxy-menu").stop().animate({"left":"10px"}, 150);
        axer();
      }
      foxyr = 1;
    }
    else if (scr>=330 && scr<=390) {
      if (foxyr == 0) {
        //$("#foxy-menu").stop().animate({"left":"10px"}, 150);
        axer();
      }
      foxyr = 1;
    }
    else if (scr>=690) {
      if (foxyr == 0) {
        //$("#foxy-menu").stop().animate({"left":"10px"}, 150);
        axer();
      }
      foxyr = 1;
    }
    else {
      if (foxyr == 1) {
        //$("#foxy-menu").stop().animate({"left":"0px"}, 150);
      }
      foxyr = 0;
    }
    */

    $("#foxy-menu").css({"-webkit-transform":"rotate("+scr+"deg)"});
    $("#foxy-menu").css({"-moz-transform":"rotate("+scr+"deg)"});
    $("#foxy-menu").css({"-o-transform":"rotate("+scr+"deg)"});
    var mii = $("#menu-items").height();
    var it = (scrolled/menuh*mii)/2.9;
    $("#foxy-menu").css({"top":it+"px"});

    /* AXE
    var mii = $("#menu-items").height();
    var it = scrolled/menuh*mii;
    var ots1 = $("#menu-top").height();
    var ots2 = $("#logo").height();
    var ots3 = $("#logo-text").height();
    var ots = ots1+ots2+ots3+(menuh*0.5)+(menuh*0.3)+(menuh*0.6);
    var ots = ots+it;
    axe.transform('t0 '+ots+'r'+scr+',100,100');
    */

    if (scrolled < (menuh-50)) {
      if (pm != 1) {
        pm1();
      }
    }
    if (scrolled >= (menuh-50) && scrolled < ((menuh-50)*2)) {
      if (pm != 2) {
        pm2();
      }
    }
    if (scrolled >= ((menuh-50)*2)) {
      if (pm != 3) {
        pm3();
      }
    }
  }

  var loho = Snap('#llogo');
  var lohog = loho.select('#loho');
  var lohoimg = loho.select('#lohoimg');
  var lohotext = loho.select('#lohotext');
  var lohotextg = loho.select('#lohotextg');
  var loholine = loho.select('#loholine');
  lohoimg.animate({transform: "s0 0"}, 0, mina.easeInCirc);
  lohotextg.animate({transform: "s0 0"}, 0, mina.easeInCirc);
  lohor = 1;
  $('#llogo').click(function() {
    loholine.attr({strokeDasharray: 1000, strokeDashoffset: 0});
    if (lohor == 1) {
      random = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
      if (random == 1) {
        lohotext.attr({text: 'Hey, Hi:)', x: '182'});
      }
      if (random == 2) {
        lohotext.attr({ text: 'Look around:b', x: '165'});
      }
      if (random == 3) {
        lohotext.attr({ text: 'Call me;)', x: '182'});
      }
      if (random == 4) {
        lohotext.attr({ text: "What's up?", x: '177'});
      }
      if (random == 5) {
        lohotext.attr({ text: 'Enjoy:3', x: '184'});
      }
      if (random == 6) {
        lohotext.attr({ text: 'Insta stories?!', x: '167'});
      }
      if (random == 7) {
        lohotext.attr({ text: "Random phrases.", x: '157'});
      }
      lohor = 0;
      lohog.animate({transform: "s0 0"}, 150, mina.easeInCirc);
      setTimeout(function() {
        loholine.animate({strokeDashoffset: 1000}, 3000, mina.easein);
        lohoimg.animate({transform: "s1 1"}, 100, mina.easeInCirc);
        lohotextg.animate({transform: "s1 1"}, 450, mina.bounce);
        setTimeout(function() {
          lohoimg.animate({transform: "s0 0"}, 150, mina.easeInCirc);
          lohotextg.animate({transform: "s0 0"}, 100, mina.easeInCirc);
          setTimeout(function() {
            lohog.animate({transform: "s1 1"}, 100, mina.easeInCirc);
            setTimeout(function() {
              lohor = 1;
            }, 200);
          }, 150);
        }, 3000);
      }, 150);
    }
  });


  $("#m-item1").click(function() {
    var menuh = $("#menu-pc").height();
    var statm = scrolled;
    $("body").stop().animate({"scrollTop":0},600);
    setTimeout(function() {
      if (statm != 0) {
        axer();
      }
    }, 610);
  });
  $("#m-item2").click(function() {
    var menuh = $("#menu-pc").height();
    var statm = scrolled;
    $("body").stop().animate({"scrollTop":menuh},600);
    setTimeout(function() {
      if (statm != menuh) {
        axer();
      }
    }, 610);
  });
  $("#m-item3").click(function() {
    var menuh = $("#menu-pc").height();
    var statm = scrolled;
    $("body").stop().animate({"scrollTop":menuh*2},600);
    setTimeout(function() {
      if (statm != menuh*2) {
        axer();
      }
    }, 610);
  });
/* AXE
203493
  var axemenu = Snap('#axe-menu');
  var axe = axemenu.select('#axe-move');
    window.onscroll = function() {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      axe.transform('t0 '+scrolled+'r'+scrolled+',100,100');
    }


    $("#m-item1").click(function() {
      var menuw = $("#menu-pc").width();
      $("#m-item1").stop();
      $("#m-item2").stop();
      $("#m-item3").stop();
      $("#m-item2").animate({width:"100%", "background-color":"#203493"}, 100);
      $("#m-item3").animate({width:"100%", "background-color":"#203493"}, 100);
      $("#m-item1").animate({width:"107%", "background-color":"#182a78"}, 100);
      $('#m-item2').animate({'background-position-x': menuw+'px'}, 150, 'easeInCirc');
      $('#m-item3').animate({'background-position-x': menuw+'px'}, 150, 'easeInCirc');
      $('#m-item1').animate({'background-position-x': menuw*0.85+'px'}, 300, 'easeOutCirc', mi(1));
    });
*/

/*
var logo = Snap('#llogo');
var irb = logo.select('#logoirb');
var d1 = "M681.5,496.5c-2.75-11.5-7.9-11.12-10-18.5-1.75-6.17-2.07-10.83-.5-18.25,1.75-8.25,4-8.81,8.29-12.25,2.62-2.11,5.76-3.85,8.61-6.32-9.67-7.43-12.85-17.58-11.81-30-2.72,2.83-5.64,5.5-8.07,8.56-.84,1.06-.88,3.13-.62,4.62a144.26,144.26,0,0,0,3.38,16.09c1.76,5.95.05,9.9-6.11,12.69-1.65-8.09-3.39-16.71-5.09-25-2.67,2.5-4.71,4.25-4.71,4.25a84.11,84.11,0,0,1,1.63,8.92c.76,6.15.38,9.05-5.76,11.82l-2.87-12.85-16.83,14-1.57-1.67c1.78-2,15.15-14.43,17.65-17.18,0,0-.33-2.47-2.88-15.26-1.67-8.39-3-17-5.23-25.36-1.64-6.25.29-10.12,6.18-13.2,2.94,15.37,5.87,31.25,8.8,46.61,4.25-3.08,4.85-5,4-8.81-1.85-8.44-3.41-16.95-5-25.45-1.34-7.28-1-7.93,6.19-12.2l1.25,5.48c3.05-3,5.71-6.26,9-8.58,2-1.42,5.93-2.69,7.47-1.69,2,1.3,2.73,4.85,3.52,7.57.41,1.42-.24,3.15-.45,5.14,2.94-2.81,5.14-4.51,7.7-7,.88-.9,1.45-.53,1.31.08-.77,3.59-1.48,7-2.25,10.57l.71.49L699,379.92l1.62,8.47c2.73-2.45,5-4.75,7.54-6.7,3.15-2.4,7.1-6,10.55-2.8,2.12,1.95,3.1,5.35,2.08,10.47-.26,1.28-.37,2.28-.71,3.51a10.3,10.3,0,0,1,2.3-1.25c15.56-5.22,26.48,1.69,31.05,17.75,5,17.6,3.78,32.36-12.55,40.63-4.86,2.46-12.25,5-20.8,2.4-7.77-2.37-15.74-4.09-23.67-5.87a16.47,16.47,0,0,0-6.42.09c-4.34.8-10,5.84-9.61,10.63a44.2,44.2,0,0,0,2.38,11C685.5,477,687.5,484.75,681.5,496.5Zm63.12-85.61-31.9,30.56c5.8,1.61,10.81,3.23,15.93,4.36,6.32,1.39,14-1.93,16.05-7.29A36.76,36.76,0,0,0,744.62,410.89Zm-51.48-16.56c-10.24,6.1-10.31,15.45-8.51,24.74,1.65,8.51,6.72,14.88,16.49,17.83ZM708.06,426c7.84-8.79,16.57-18.22,24.79-27.44-8.27-4.89-16.48-.25-22.6,6.88C705.49,411,706.19,419.31,708.06,426Zm27.35-24.58a26.9,26.9,0,0,0-3.52,3.46c-6.6,7.5-13,15.2-20,22.35-2.24,2.15-2.93,5.09-1.46,9.39,8.88-8.37,17.75-16.67,26.54-25C742.67,406.21,742.62,407.16,735.41,401.42Zm-66.92,5.19-1.52-1.4c.91-1.51,2.19-2.92,2.66-4.56a84.91,84.91,0,0,0,3.14-13.31c.28-2.24-1.78-5.5-4.2-3-3,3-6.14,7.43-6.23,11.3-.14,6.62,2.06,13.29,3.5,21.16,5.35-6.78,13.51-10,13-19.78Zm35.9-.83c2.17-2.46,3.83-4.36,5.36-6.23,2.75-3.36,4.15-6.26,4.05-9.76-.05-1.91-.67-3.59-1.75-4.16s-3.16.33-4.31,1.22C702.13,391.69,701.56,394.69,704.39,405.78Z";
var d2 = "M661,472.75c7,4.75,12.49,2.5,10-4.75a15.44,15.44,0,0,1,.63-11.75c2.26-5,4.27-6.52,7.67-8.75a78.69,78.69,0,0,0,8.61-6.32c-9.67-7.43-12.85-17.58-11.81-30-2.72,2.83-5.64,5.5-8.07,8.56-.84,1.06-.88,3.13-.62,4.62a144.26,144.26,0,0,0,3.38,16.09c1.76,5.95.05,9.9-6.11,12.69-1.65-8.09-3.39-16.71-5.09-25-2.67,2.5-4.71,4.25-4.71,4.25a84.11,84.11,0,0,1,1.63,8.92c.76,6.15.38,9.05-5.76,11.82l-2.87-12.85-16.83,14-1.57-1.67c1.78-2,15.15-14.43,17.65-17.18,0,0-.33-2.47-2.88-15.26-1.67-8.39-3-17-5.23-25.36-1.64-6.25.29-10.12,6.18-13.2,2.94,15.37,5.87,31.25,8.8,46.61,4.25-3.08,4.85-5,4-8.81-1.85-8.44-3.41-16.95-5-25.45-1.34-7.28-1-7.93,6.19-12.2l1.25,5.48c3.05-3,5.71-6.26,9-8.58,2-1.42,5.93-2.69,7.47-1.69,2,1.3,2.73,4.85,3.52,7.57.41,1.42-.24,3.15-.45,5.14,2.94-2.81,5.14-4.51,7.7-7,.88-.9,1.45-.53,1.31.08-.77,3.59-1.48,7-2.25,10.57l.71.49L699,379.92l1.62,8.47c2.73-2.45,5-4.75,7.54-6.7,3.15-2.4,7.1-6,10.55-2.8,2.12,1.95,3.1,5.35,2.08,10.47-.26,1.28-.37,2.28-.71,3.51a10.3,10.3,0,0,1,2.3-1.25c15.56-5.22,26.48,1.69,31.05,17.75,5,17.6,3.78,32.36-12.55,40.63-4.86,2.46-12.25,5-20.8,2.4-7.77-2.37-15.74-4.09-23.67-5.87a16.47,16.47,0,0,0-6.42.09c-4.34.8-11.54,6-11.11,10.76.5,5.63,3,6.67,4.21,13.88C684.83,481.87,665.75,489,661,472.75Zm83.62-61.86-31.9,30.56c5.8,1.61,10.81,3.23,15.93,4.36,6.32,1.39,14-1.93,16.05-7.29A36.76,36.76,0,0,0,744.62,410.89Zm-51.48-16.56c-10.24,6.1-10.31,15.45-8.51,24.74,1.65,8.51,6.72,14.88,16.49,17.83ZM708.06,426c7.84-8.79,16.57-18.22,24.79-27.44-8.27-4.89-16.48-.25-22.6,6.88C705.49,411,706.19,419.31,708.06,426Zm27.35-24.58a26.9,26.9,0,0,0-3.52,3.46c-6.6,7.5-13,15.2-20,22.35-2.24,2.15-2.93,5.09-1.46,9.39,8.88-8.37,17.75-16.67,26.54-25C742.67,406.21,742.62,407.16,735.41,401.42Zm-66.92,5.19-1.52-1.4c.91-1.51,2.19-2.92,2.66-4.56a84.91,84.91,0,0,0,3.14-13.31c.28-2.24-1.78-5.5-4.2-3-3,3-6.14,7.43-6.23,11.3-.14,6.62,2.06,13.29,3.5,21.16,5.35-6.78,13.51-10,13-19.78Zm35.9-.83c2.17-2.46,3.83-4.36,5.36-6.23,2.75-3.36,4.15-6.26,4.05-9.76-.05-1.91-.67-3.59-1.75-4.16s-3.16.33-4.31,1.22C702.13,391.69,701.56,394.69,704.39,405.78Z";
var d0 = "M702.38,463.38c.39,3.7-3.62,16-12.62,16a17.55,17.55,0,0,1-17.87-16.62c-.3-7.19,3.14-11.81,7.42-15.25,2.62-2.11,5.76-3.85,8.61-6.32-9.67-7.43-12.85-17.58-11.81-30-2.72,2.83-5.64,5.5-8.07,8.56-.84,1.06-.88,3.13-.62,4.62a144.26,144.26,0,0,0,3.38,16.09c1.76,5.95.05,9.9-6.11,12.69-1.65-8.09-3.39-16.71-5.09-25-2.67,2.5-4.71,4.25-4.71,4.25a84.11,84.11,0,0,1,1.63,8.92c.76,6.15.38,9.05-5.76,11.82l-2.87-12.85-16.83,14-1.57-1.67c1.78-2,15.15-14.43,17.65-17.18,0,0-.33-2.47-2.88-15.26-1.67-8.39-3-17-5.23-25.36-1.64-6.25.29-10.12,6.18-13.2,2.94,15.37,5.87,31.25,8.8,46.61,4.25-3.08,4.85-5,4-8.81-1.85-8.44-3.41-16.95-5-25.45-1.34-7.28-1-7.93,6.19-12.2l1.25,5.48c3.05-3,5.71-6.26,9-8.58,2-1.42,5.93-2.69,7.47-1.69,2,1.3,2.73,4.85,3.52,7.57.41,1.42-.24,3.15-.45,5.14,2.94-2.81,5.14-4.51,7.7-7,.88-.9,1.45-.53,1.31.08-.77,3.59-1.48,7-2.25,10.57l.71.49L699,379.92l1.62,8.47c2.73-2.45,5-4.75,7.54-6.7,3.15-2.4,7.1-6,10.55-2.8,2.12,1.95,3.1,5.35,2.08,10.47-.26,1.28-.37,2.28-.71,3.51a10.3,10.3,0,0,1,2.3-1.25c15.56-5.22,26.48,1.69,31.05,17.75,5,17.6,3.78,32.36-12.55,40.63-4.86,2.46-12.25,5-20.8,2.4-7.77-2.37-15.74-4.09-23.67-5.87a16.47,16.47,0,0,0-6.42.09c-4.34.8-9,4.84-8.61,9.63.5,5.63,3,7.63,4.89,9C691,468.88,698.72,466.28,702.38,463.38Zm42.25-52.49-31.9,30.56c5.8,1.61,10.81,3.23,15.93,4.36,6.32,1.39,14-1.93,16.05-7.29A36.76,36.76,0,0,0,744.62,410.89Zm-51.48-16.56c-10.24,6.1-10.31,15.45-8.51,24.74,1.65,8.51,6.72,14.88,16.49,17.83ZM708.06,426c7.84-8.79,16.57-18.22,24.79-27.44-8.27-4.89-16.48-.25-22.6,6.88C705.49,411,706.19,419.31,708.06,426Zm27.35-24.58a26.9,26.9,0,0,0-3.52,3.46c-6.6,7.5-13,15.2-20,22.35-2.24,2.15-2.93,5.09-1.46,9.39,8.88-8.37,17.75-16.67,26.54-25C742.67,406.21,742.62,407.16,735.41,401.42Zm-66.92,5.19-1.52-1.4c.91-1.51,2.19-2.92,2.66-4.56a84.91,84.91,0,0,0,3.14-13.31c.28-2.24-1.78-5.5-4.2-3-3,3-6.14,7.43-6.23,11.3-.14,6.62,2.06,13.29,3.5,21.16,5.35-6.78,13.51-10,13-19.78Zm35.9-.83c2.17-2.46,3.83-4.36,5.36-6.23,2.75-3.36,4.15-6.26,4.05-9.76-.05-1.91-.67-3.59-1.75-4.16s-3.16.33-4.31,1.22C702.13,391.69,701.56,394.69,704.39,405.78Z"
function anim1() {
  irb.animate({d:d1}, 300, mina.minaeaseout, anim2);
}
anim1();
function anim2() {
  irb.animate({d:d2}, 300, mina.minaeaseout, anim3);
}
function anim3() {
  irb.animate({d:d1}, 300, mina.minaeaseout, anim4);
}
function anim4() {
  irb.animate({d:d0}, 300, mina.minaeaseout, anim1);
}
*/
});
