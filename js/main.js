    var win = 0;
    var lose = 0;
    var imgurl3="";
    var gu = 0;
    var cyoki = 0;
    var pa = 0;
    let imgurl = "";
    for (i = 1; i < 10; i++) {
        imgurl =　i ;
        console.log(imgurl);
        $("#zibun").append(`<img class=${i} src=img/${imgurl}.png alt=card${i} width=100px>`);
}
    let imgurl2 = "";
    for (i = 10; i < 19; i++) {
        imgurl2 =　i ;
        console.log(imgurl2);
        $("#uraa").append(`<img class=imawa${i} src=img/${imgurl2}.png alt=card${i} width=100px>`);
}
   // $("#zibun").on("click", "img", function () {
   // $(this).toggleClass("clicked");
   // $(".result").append(this); 
   $(function(){
    var aiteimage= [0,1,2,3,4,5,6,7,8];
   $(".1,.2,.3").on("click",function () {
    $(this).toggleClass("clicked");   
    $(".result").append(this);
    console.log(this);
    var number=Math.floor( Math.random() *aiteimage.length);
    console.log(number);
    var number3=aiteimage[number];
    console.log(number3);
    var number2=number3+19;
    console.log(number2);
if(number2==19 || number2==20 || number2==21){
    console.log("チョキ");
    $(".aite").html(`<img src=img/${number2}.png>`);
    console.log("同点");
    $(".syobu").html('同点');
}
else if(number2==22 || number2==23 || number2==24){
    console.log("グー");
    $(".aite").html(`<img src=img/${number2}.png>`);
    console.log("負け");
    $(".syobu").html('負け');
    lose++;
}
else if(number2==25 || number2==26 || number2==27){
    console.log("パー");
    $(".aite").html(`<img src=img/${number2}.png>`);
    console.log("勝ち");
    $(".syobu").html('勝ち');
    win++;
}
cyoki++;
console.log(imgurl3);
console.log(win);
aiteimage.splice(number,1);
console.log(aiteimage.length);
if(aiteimage.length==0){
    if(win>lose){
        console.log("勝利");
        $(".syouhai").html("勝利");
        $(".syouhai").css('background-color','black');
        setTimeout(function(){
            location.href = 'tonegawa.html';
          }, 5*1000);          
    }
    else if(win<lose){
        console.log("敗北");
        $(".syouhai").html("敗北");
        $(".syouhai").css('background-color','black');
    }
    else if(win==lose){
        console.log("同点");
        $()
        $(".syouhai").html("同点");
        $(".syouhai").css('background-color','black');
    }
}
console.log(aiteimage);
$(".button").on("click",function () {
    console.log(number);
$(".imawa10").empty(); 
$(".result").empty(); 
$(".aite").empty(); 
$(".syobu").empty(); 
$(".win").html("勝利数"+win);
$(".lose").html("敗北数"+lose);
});
 });
 $(".4,.5,.6").on("click",function () {
    $(this).toggleClass("clicked");   
    $(".result").append(this);
    console.log(this);
    var number=Math.floor( Math.random() *aiteimage.length);
    console.log(number);
    var number3=aiteimage[number];
    var number2=number3+19;
    console.log(number2);
if(number2==19 || number2==20 || number2==21){
    console.log("チョキ");
    $(".aite").html(`<img src=img/${number2}.png>`);
    console.log("勝ち");
    $(".syobu").html('勝ち');
    win++;
}
else if(number2==22 || number2==23 || number2==24){
    console.log("グー");
    $(".aite").html(`<img src=img/${number2}.png>`);
    console.log("同点");
    $(".syobu").html('同点');
}
else if(number2==25 || number2==26 || number2==27){
    console.log("パー");
    $(".aite").html(`<img src=img/${number2}.png>`);
    console.log("負け");
    $(".syobu").html('負け');
    lose++;
}
gu++;
var imgurl3 = document.getElementById("zibun").innerHTML;
aiteimage.splice(number,1);
console.log(aiteimage.length);
if(aiteimage.length==0){
    if(win>lose){
        console.log("勝利");
        $(".syouhai").html("勝利");
        $(".syouhai").css('background-color','black');
        setTimeout(function(){
            location.href = 'tonegawa.html';
          }, 5*1000);
          
    }
    else if(win<lose){
        console.log("敗北");
        $(".syouhai").html("敗北");
        $(".syouhai").css('background-color','black');
    }
    else if(win==lose){
        console.log("同点");
        $(".syouhai").html("同点");
        $(".syouhai").css('background-color','black');
    }
}
console.log(aiteimage);
$(".button").on("click",function () {
console.log(number);
$(".imawa11").empty(); 
$(".result").empty(); 
$(".aite").empty(); 
$(".syobu").empty(); 
});
 });
 $(".7,.8,.9").on("click",function () {
    $(this).toggleClass("clicked");   
    $(".result").append(this);
    console.log(this);
    var number=Math.floor( Math.random() *aiteimage.length);
    console.log(number);
    var number3=aiteimage[number];
    var number2=number3+19
    console.log(number2);
if(number2==19 || number2==20 || number2==21){
    console.log("チョキ");
    $(".aite").html(`<img src=img/${number2}.png>`);
    console.log("負け");
    $(".syobu").html('負け');
    lose++;
}
else if(number2==22 || number2==23 || number2==24){
    console.log("グー");
    $(".aite").html(`<img src=img/${number2}.png>`);
    console.log("勝ち");
    $(".syobu").html('勝ち');
    win++;
}
else if(number2==25 || number2==26 || number2==27){
    console.log("パー");
    $(".aite").html(`<img src=img/${number2}.png>`);
    console.log("同点");
    $(".syobu").html('同点');
}
pa++;
var imgurl3 = document.getElementById("zibun").innerHTML;
aiteimage.splice(number,1);
console.log(aiteimage.length);
if(aiteimage.length==0){
    if(win>lose){
        console.log("勝利");
        $(".syouhai").html("勝利");
        $(".syouhai").css('background-color','black');
        setTimeout(function(){
            location.href = 'tonegawa.html';
          }, 5*1000);     
    }
    else if(win<lose){
        console.log("敗北");
        $(".syouhai").html("敗北");
        $(".syouhai").css('background-color','black');
    }
    else if(win==lose){
        console.log("同点");
        $(".syouhai").html("同点");
        $(".syouhai").css('background-color','black');
    }
}
console.log(aiteimage);
$(".button").on("click",function () {
console.log(number);
$(".imawa10").empty(); 
$(".result").empty(); 
$(".aite").empty(); 
$(".syobu").empty(); 
});
 });
 $("#save").on("click", function () {
    localStorage.setItem('how',win);
    console.log(win);
    localStorage.setItem('may',lose);
    console.log(lose);
    localStorage.setItem('when',aiteimage);
    console.log(aiteimage);
    localStorage.setItem('will',imgurl3);
    console.log(imgurl3);
    localStorage.setItem('will1',gu);
    localStorage.setItem('will2',cyoki);
    localStorage.setItem('will3',pa);
  })
  $("#load").on("click", function () {
     var win1 =localStorage.getItem("how");
     var lose1 =localStorage.getItem("may");
     var aiteimage1= localStorage.getItem("when");
     var pa1= localStorage.getItem("will3");
     console.log(pa1);
     var pa2 = 10-pa1
     var gu1=localStorage.getItem("will1");
     console.log(gu1);
     var gu2 = 7-gu1
     var cyoki1=localStorage.getItem("will2");
     console.log(cyoki1);
     var cyoki2 = 4-cyoki1
     var win = win1
     var lose = lose1
     var aiteimage = aiteimage1
     console.log(win);
     console.log(lose);
     $("#zibun").empty();
     let zyanke1 = "";
     for (i = 7; i < pa2; i++) {
        zyanke1 =　i ;
        console.log(zyanke1);
        $("#zibun").append(`<img class=${i} src=img/${zyanke1}.png alt=card${i} width=100px>`);
}
    let zyanke2 = "";
for (i = 4; i < gu2; i++) {
    zyanke2 =　i ;
    console.log(zyanke2);
    $("#zibun").append(`<img class=${i} src=img/${zyanke2}.png alt=card${i} width=100px>`);
}
let zyanke3 = "";
for (i = 1; i < cyoki2; i++) {
    zyanke3 =　i ;
    console.log(zyanke3);
    $("#zibun").append(`<img class=${i} src=img/${zyanke3}.png alt=card${i} width=100px>`);
}
     $(".win").html("勝利数"+win);
     $(".lose").html("敗北数"+lose);
     var aiteimage= [0,1,2,3,4,5,6,7,8];
     $(".1,.2,.3").on("click",function () {
      $(this).toggleClass("clicked");   
      $(".result").append(this);
      console.log(this);
      var number=Math.floor( Math.random() *aiteimage.length);
      console.log(number);
      var number3=aiteimage[number];
      console.log(number3);
      var number2=number3+19;
      console.log(number2);
  if(number2==19 || number2==20 || number2==21){
      console.log("チョキ");
      $(".aite").html(`<img src=img/${number2}.png>`);
      console.log("同点");
      $(".syobu").html('同点');
  }
  else if(number2==22 || number2==23 || number2==24){
      console.log("グー");
      $(".aite").html(`<img src=img/${number2}.png>`);
      console.log("負け");
      $(".syobu").html('負け');
      lose++;
  }
  else if(number2==25 || number2==26 || number2==27){
      console.log("パー");
      $(".aite").html(`<img src=img/${number2}.png>`);
      console.log("勝ち");
      $(".syobu").html('勝ち');
      win++;
  }
  console.log(win);
  aiteimage.splice(number,1);
  console.log(aiteimage.length);
  if(aiteimage.length==0){
      if(win>lose){
          console.log("勝利");
          $(".syouhai").html("勝利");
          $(".syouhai").css('background-color','black');
          setTimeout(function(){
              location.href = 'tonegawa.html';
            }, 5*1000);          
      }
      else if(win<lose){
          console.log("敗北");
          $(".syouhai").html("敗北");
          $(".syouhai").css('background-color','black');
      }
      else if(win==lose){
          console.log("同点");
          $()
          $(".syouhai").html("同点");
          $(".syouhai").css('background-color','black');
      }
  }
  console.log(aiteimage);
  $(".button").on("click",function () {
      console.log(number);
  $(".imawa10").empty(); 
  $(".result").empty(); 
  $(".aite").empty(); 
  $(".syobu").empty(); 
  $(".win").html("勝利数"+win);
  $(".lose").html("敗北数"+lose);
  });
   });
   $(".4,.5,.6").on("click",function () {
      $(this).toggleClass("clicked");   
      $(".result").append(this);
      console.log(this);
      var number=Math.floor( Math.random() *aiteimage.length);
      console.log(number);
      var number3=aiteimage[number];
      var number2=number3+19;
      console.log(number2);
  if(number2==19 || number2==20 || number2==21){
      console.log("チョキ");
      $(".aite").html(`<img src=img/${number2}.png>`);
      console.log("勝ち");
      $(".syobu").html('勝ち');
      win++;
  }
  else if(number2==22 || number2==23 || number2==24){
      console.log("グー");
      $(".aite").html(`<img src=img/${number2}.png>`);
      console.log("同点");
      $(".syobu").html('同点');
  }
  else if(number2==25 || number2==26 || number2==27){
      console.log("パー");
      $(".aite").html(`<img src=img/${number2}.png>`);
      console.log("負け");
      $(".syobu").html('負け');
      lose++;
  }
  aiteimage.splice(number,1);
  console.log(aiteimage.length);
  if(aiteimage.length==0){
      if(win>lose){
          console.log("勝利");
          $(".syouhai").html("勝利");
          $(".syouhai").css('background-color','black');
          setTimeout(function(){
              location.href = 'tonegawa.html';
            }, 5*1000);        
      }
      else if(win<lose){
          console.log("敗北");
          $(".syouhai").html("敗北");
          $(".syouhai").css('background-color','black');
      }
      else if(win==lose){
          console.log("同点");
          $(".syouhai").html("同点");
          $(".syouhai").css('background-color','black');
      }
  }
  console.log(aiteimage);
  $(".button").on("click",function () {
  console.log(number);
  $(".imawa11").empty(); 
  $(".result").empty(); 
  $(".aite").empty(); 
  $(".syobu").empty(); 
  });
   });
   $(".7,.8,.9").on("click",function () {
      $(this).toggleClass("clicked");   
      $(".result").append(this);
      console.log(this);
      var number=Math.floor( Math.random() *aiteimage.length);
      console.log(number);
      var number3=aiteimage[number];
      var number2=number3+19
      console.log(number2);
  if(number2==19 || number2==20 || number2==21){
      console.log("チョキ");
      $(".aite").html(`<img src=img/${number2}.png>`);
      console.log("負け");
      $(".syobu").html('負け');
      lose++;
  }
  else if(number2==22 || number2==23 || number2==24){
      console.log("グー");
      $(".aite").html(`<img src=img/${number2}.png>`);
      console.log("勝ち");
      $(".syobu").html('勝ち');
      win++;
  }
  else if(number2==25 || number2==26 || number2==27){
      console.log("パー");
      $(".aite").html(`<img src=img/${number2}.png>`);
      console.log("同点");
      $(".syobu").html('同点');
  }
  aiteimage.splice(number,1);
  console.log(aiteimage.length);
  if(aiteimage.length==0){
      if(win>lose){
          console.log("勝利");
          $(".syouhai").html("勝利");
          $(".syouhai").css('background-color','black');
          setTimeout(function(){
              location.href = 'tonegawa.html';
            }, 5*1000);     
      }
      else if(win<lose){
          console.log("敗北");
          $(".syouhai").html("敗北");
          $(".syouhai").css('background-color','black');
      }
      else if(win==lose){
          console.log("同点");
          $(".syouhai").html("同点");
          $(".syouhai").css('background-color','black');
      }
  }
  console.log(aiteimage);
  $(".button").on("click",function () {
  console.log(number);
  $(".imawa10").empty(); 
  $(".result").empty(); 
  $(".aite").empty(); 
  $(".syobu").empty(); 
  });
   });
   });
   });
  