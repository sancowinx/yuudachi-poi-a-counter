var button            = document.getElementsByTagName('button')[0];
var button_restartbgm = document.getElementsByTagName('button')[2];
var button_stopbgm    = document.getElementsByTagName('button')[3];
var yuudachi_3        = document.getElementsByTagName('img')[0];
var yuudachi_6        = document.getElementsByTagName('img')[1];
var poi_tweet         = 0;
var poi_count         = 0;
var tweet_message     = "I poied " + poi_tweet + " poi!";


// audio
var poi               = new Audio('assets/audio/poi-wav.wav');

// hide
yuudachi_6.style.display = "none";

// attach touch events
button.addEventListener("touchstart", touchStart, false);
button.addEventListener("touchend", touchEnd, false);
button.addEventListener("touchcancel", touchCancel, false);


/*typical pc browser: mouse events*/
button.onclick = function (e) {
  e.preventDefault();

  if (poi.played) {
    // reset to start
    poi.pause();
    poi.currentTime = 0;
  }

  poi_count++;
  poi_tweet = poi_count;
  
  document.getElementById('counter').innerHTML = poi_count;
  
  poi.play();
};

button.onmousedown = function (){
  //yuudachi.src = "yuudachi-6.jpg";

  // Dirty fix stalled loading

  yuudachi_3.style.display = "none";
  yuudachi_6.style.display = "block";
};

button.onmouseup = function(){
  //yuudachi.src = "yuudachi-3.jpg";

  // Dirty fix stalled loading

  yuudachi_3.style.display = "block";
  yuudachi_6.style.display = "none";
};


/*typical pc browser: onkey- events*/
button.onkeydown = function(e){
  if(e.keyCode == 13) {
    poi_count = 0;
  }else{
    yuudachi_3.style.display = "none";
    yuudachi_6.style.display = "block";
  }
};

button.onkeyup = function(e){
  yuudachi_3.style.display = "block";
  yuudachi_6.style.display = "none";
};

// bgm playback 

button_restartbgm.onclick = function (e) {
  e.preventDefault();
  bgm.play();
  bgm.loop = true;
}

button_stopbgm.onclick = function (e) {
  e.preventDefault();
  bgm.pause();
  bgm.currentTime = 0;
}


/* touch based*/

function touchStart(e){
  e.preventDefault();

  if (poi.played) {
    poi.pause();
    poi.currentTime = 0;
  }

  poi_count++;
  poi_tweet = poi_count;
  document.getElementById('counter').innerHTML = poi_count;
  poi.play();

  //yuudachi.src = "yuudachi-6.jpg";


  // Dirty fix stalled loading

  yuudachi_3.style.display = "none";
  yuudachi_6.style.display = "block";

}

function touchEnd(e){
  e.preventDefault();

  //yuudachi.src = "yuudachi-3.jpg";


  // Dirty fix stalled loading

  yuudachi_3.style.display = "block";
  yuudachi_6.style.display = "none";

}

function ontouchEnd_onkeyup_onmouseup (e) {
    e.preventDefault();

  //yuudachi.src = "yuudachi-3.jpg";


  // Dirty fix stalled loading

  yuudachi_3.style.display = "block";
  yuudachi_6.style.display = "none";
}

function touchCancel(e){
  /*touchcancel: a touch is interrupted (implementation specific).*/
  e.preventDefault();

  //yuudachi.src = "yuudachi-3.jpg";


  // Dirty fix stalled loading

  yuudachi_3.style.display = "block";
  yuudachi_6.style.display = "none";
}

// https://twittercommunity.com/t/insert-dynamic-content-into-data-text-attribute/19598/6
// document.getElementById('twitter-share-btn').setAttribute("data-text" , "I poied " + poi_tweet + " poi!" );

//Twitter web Intent

document.getElementById("twitter-tweet").addEventListener("click",function(e){
  event.preventDefault();
  window.open(
    "https://twitter.com/intent/tweet?text=I%20poied%20"  + poi_tweet + "%20POI!",
    "Tweet this"
  );
});