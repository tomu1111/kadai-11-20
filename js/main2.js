var kaizi = 0;
var tonegawa = 0;
let imgurl = "";
    for (i = 1; i < 5; i++) {
        imgurl =　i ;
        console.log(imgurl);
        $("#zibun").append(`<img class=${i} src=img2/${imgurl}.png alt=card${i} width=100px>`);
}
    let imgurl2 = "";
    for (i = 10; i < 14; i++) {
        imgurl2 =　i ;
        console.log(imgurl2);
        $("#uraa").append(`<img class=imawa${i} src=img2/${imgurl2}.png alt=card${i} width=100px>`);
}
const speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';


const btn = document.getElementById('btn');
const content = document.getElementById('content');


btn.addEventListener('click' , function() {
    speech.start();
});
speech.addEventListener('result' , function(e) { 
   console.log(e);
const text = e.results[0][0].transcript;
     if(text=="なんでだよ"){
    window.open("https://www.youtube.com/watch?v=tdfSLck4uPI");
  }
  　else if(text=="蛇"){
    window.open("https://www.youtube.com/watch?v=X7RPfIwy6nE&t=17s");
  }
  else if(text=="利根川"){
    window.open("https://www.youtube.com/watch?v=i_a9fiPi-7o");
  }
});
   $(function(){
    var aiteimage= [0,1,2,3];
   $(".2,.3,.4").on("click",function () {
    $(this).toggleClass("clicked");   
    $(".result").append(this);
    console.log(this);
    var number=Math.floor( Math.random() *aiteimage.length);
    console.log(number);
    var number3=aiteimage[number];
    console.log(number3);
if(number3==0 || number3==1 || number3==2){
    console.log("市民");
    $(".aite").html(`<img src=img2/2.png>`);
    console.log("同点");
    $(".syobu").html('同点');
}
else if(number3==3){
    console.log("王様");
    $(".aite").html(`<img src=img2/5.png>`);
    console.log("負け");
    $(".syobu").html('負け');
    tonegawa++;
}
aiteimage.splice(number,1);
console.log(aiteimage.length);
if(aiteimage.length==0){
    if(kaizi>tonegawa){
        console.log("勝利");
        $(".syouhai").html("勝利");
        $(".syouhai").css('background-color','red');          
    }
    else if(kaizi<tonegawa){
        console.log("敗北");
        $(".syouhai").html("敗北");
        $(".syouhai").css('background-color','red');
    }
    else if(kaizi==tonegawa){
        console.log("同点");
        $(".syouhai").html("同点");
        $(".syouhai").css('background-color','black');
    }
}
console.log(aiteimage);
$(".button").on("click",function () {
    console.log(number);
$(".imawa10").empty(); 
$("imawa[10]")
$(".result").empty(); 
$(".aite").empty(); 
$(".syobu").empty(); 
$(".kaizi").html("カイジ"+kaizi+"pt");
$(".tonegawa").html("利根川"+tonegawa+"pt");
console.log(aiteimage);
});
 }); 
$(".1").on("click",function () {
    $(this).toggleClass("clicked");   
    $(".result").append(this);
    console.log(this);
    var number=Math.floor( Math.random() *aiteimage.length);
    console.log(number);
    var number3=aiteimage[number];
    console.log(number3);
if(number3==0 || number3==1 || number3==2){
    console.log("市民");
    $(".aite").html(`<img src=img2/2.png>`);
    console.log("負け");
    $(".syobu").html('負け');
    tonegawa++;
}
else if(number3==3){
    console.log("王様");
    $(".aite").html(`<img src=img2/5.png>`);
    console.log("勝ち");
    $(".syobu").html('勝ち');
    kaizi=kaizi+5;
}
aiteimage.splice(number,1);
console.log(aiteimage.length);
if(aiteimage.length==0){
    if(kaizi>tonegawa){
        console.log("勝利");
        $(".syouhai").html("勝利");
        $(".syouhai").css('background-color','red');
        setTimeout(function(){
            location.href = 'tonegawa.html';
          }, 5*1000);          
    }
    else if(kaizi<tonegawa){
        console.log("敗北");
        $(".syouhai").html("敗北");
        $(".syouhai").css('background-color','red');
    }
    else if(kaizi==tonegawa){
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
$("imawa[10]")
$(".result").empty(); 
$(".aite").empty(); 
$(".syobu").empty(); 
$(".kaizi").html("カイジ"+kaizi+"pt");
$(".tonegawa").html("利根川"+tonegawa+"pt");
console.log(aiteimage);
});
});
   });