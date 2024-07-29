var screenWidth =screen.width -100;
var face1=document.getElementById("face1");
var face2=document.getElementById("face2");
var faces =document.getElementById("faces");
face1.style.width=screenWidth/4;
face2.style.width=screenWidth/4;

var bodyElement =document.querySelector("body");
bodyElement.addEventListener("mousemove", chnageFace, false);

var prevX=0;
var maxWidth=screenWidth/2;

function chnageFace(e){
  var xDirection = getMouseDirection(e);
  var face1Width =face1.offsetWidth;
  var face2Width =face2.offsetWidth;
  if(xDirection=="left"){
    moveRight(face1Width, face2Width);
  }else if(xDirection=="right"){
    moveLeft(face1Width, face2Width);
  }
}

function moveLeft(face1Width, face2Width){
  if(face2Width<maxWidth){
    face2.style.width=face2Width+10+"px";
    face1.style.width=face1Width-10+"px";

    //change opacity
    var percentage =getPercentage(face1Width, screenWidth/4)/100;
    document.getElementById("text1").style.opacity=percentage>0.2? percentage:0;

    var percentage =getPercentage(face2Width, screenWidth/4)/100;
    document.getElementById("text2").style.opacity=percentage>0.2? percentage:0;
    //Move image left
    var picPos =faces.offsetLeft;
    maxLeft=150;
    if(picPos>maxLeft){
      faces.style.left =picPos-10+"px";
    }

  }
}

function moveRight(face1Width, face2Width){
  if(face1Width<maxWidth){
    face1.style.width=face1Width+10+"px";
    face2.style.width=face2Width-10+"px";

    //chnage opacity
    var percentage =getPercentage(face1Width, screenWidth/4)/100;
    document.getElementById("text1").style.opacity=percentage>0.2? percentage:0;

    var percentage =getPercentage(face2Width, screenWidth/4)/100;
    document.getElementById("text2").style.opacity=percentage>0.2? percentage:0;

    //Move Image Right
    var picPos =faces.offsetLeft;
    var maxRight =screenWidth/2-150;
    if(picPos<maxRight){
      faces.style.left =picPos +10+"px";
    }
  }
}

function getPercentage(width,total){
return (width*100)/total;
}

function getMouseDirection(e){
  var dir;
  currentX= e.pageX;
  if(prevX<currentX){
    dir="right";
  }else{
    dir="left";
  }
  prevX=currentX;
  return dir;
}





