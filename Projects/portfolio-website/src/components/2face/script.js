// // var screenWidth =screen.width -100;
// // var face1=document.getElementById("face1");
// // var face2=document.getElementById("face2");
// // var faces =document.getElementById("faces");
// // face1.style.width=screenWidth/4;
// // face2.style.width=screenWidth/4;

// // var bodyElement =document.querySelector("body");
// // bodyElement.addEventListener("mousemove", chnageFace, false);

// // var prevX=0;
// // var maxWidth=screenWidth/2;

// // function chnageFace(e){
// //   var xDirection = getMouseDirection(e);
// //   var face1Width =face1.offsetWidth;
// //   var face2Width =face2.offsetWidth;
// //   if(xDirection=="left"){
// //     moveRight(face1Width, face2Width);
// //   }else if(xDirection=="right"){
// //     moveLeft(face1Width, face2Width);
// //   }
// // }

// // function moveLeft(face1Width, face2Width){
// //   if(face2Width<maxWidth){
// //     face2.style.width=face2Width+10+"px";
// //     face1.style.width=face1Width-10+"px";

// //     //change opacity
// //     var percentage =getPercentage(face1Width, screenWidth/4)/100;
// //     document.getElementById("text1").style.opacity=percentage>0.2? percentage:0;

// //     var percent =getPercentage(face2Width, screenWidth/4)/100;
// //     document.getElementById("text2").style.opacity=percent>0.2? percent:0;
// //     //Move image left
// //     var picPos =faces.offsetLeft;
// //     var maxLeft=150;
// //     if(picPos>maxLeft){
// //       faces.style.left =picPos-10+"px";
// //     }

// //   }
// // }

// // function moveRight(face1Width, face2Width){
// //   if(face1Width<maxWidth){
// //     face1.style.width=face1Width+10+"px";
// //     face2.style.width=face2Width-10+"px";

// //     //chnage opacity
// //     var percentage =getPercentage(face1Width, screenWidth/4)/100;
// //     document.getElementById("text1").style.opacity=percentage>0.2? percentage:0;

// //     var percent =getPercentage(face2Width, screenWidth/4)/100;
// //     document.getElementById("text2").style.opacity=percent>0.2? percent:0;

// //     //Move Image Right
// //     var picPos =faces.offsetLeft;
// //     var maxRight =screenWidth/2-150;
// //     if(picPos<maxRight){
// //       faces.style.left =picPos +10+"px";
// //     }
// //   }
// // }

// // function getPercentage(width,total){
// // return (width*100)/total;
// // }

// // function getMouseDirection(e){
// //   var dir;
// //   var currentX= e.pageX;
// //   if(prevX<currentX){
// //     dir="right";
// //   }else{
// //     dir="left";
// //   }
// //   prevX=currentX;
// //   return dir;
// // }

// import React, { useEffect, useRef } from 'react';

// const AnimationComponent = () => {
//   const face1Ref = useRef(null);
//   const face2Ref = useRef(null);
//   const facesRef = useRef(null);
//   const text1Ref = useRef(null);
//   const text2Ref = useRef(null);
//   const screenWidth = screen.width - 100;
//   const maxWidth = screenWidth / 2;
//   let prevX = 0;

//   useEffect(() => {
//     const face1 = face1Ref.current;
//     const face2 = face2Ref.current;
//     const faces = facesRef.current;
//     const text1 = text1Ref.current;
//     const text2 = text2Ref.current;

//     face1.style.width = screenWidth / 4 + 'px';
//     face2.style.width = screenWidth / 4 + 'px';

//     const handleMouseMove = (e) => {
//       const xDirection = getMouseDirection(e);
//       const face1Width = face1.offsetWidth;
//       const face2Width = face2.offsetWidth;
//       if (xDirection === 'left') {
//         moveRight(face1Width, face2Width);
//       } else if (xDirection === 'right') {
//         moveLeft(face1Width, face2Width);
//       }
//     };

//     const getMouseDirection = (e) => {
//       const currentX = e.pageX;
//       const dir = prevX < currentX ? 'right' : 'left';
//       prevX = currentX;
//       return dir;
//     };

//     const getPercentage = (width, total) => (width * 100) / total;

//     const moveLeft = (face1Width, face2Width) => {
//       if (face2Width < maxWidth) {
//         face2.style.width = face2Width + 10 + 'px';
//         face1.style.width = face1Width - 10 + 'px';

//         const percentage = getPercentage(face1Width, screenWidth / 4) / 100;
//         text1.style.opacity = percentage > 0.2 ? percentage : 0;

//         const percent = getPercentage(face2Width, screenWidth / 4) / 100;
//         text2.style.opacity = percent > 0.2 ? percent : 0;

//         const picPos = faces.offsetLeft;
//         const maxLeft = 150;
//         if (picPos > maxLeft) {
//           faces.style.left = picPos - 10 + 'px';
//         }
//       }
//     };

//     const moveRight = (face1Width, face2Width) => {
//       if (face1Width < maxWidth) {
//         face1.style.width = face1Width + 10 + 'px';
//         face2.style.width = face2Width - 10 + 'px';

//         const percentage = getPercentage(face1Width, screenWidth / 4) / 100;
//         text1.style.opacity = percentage > 0.2 ? percentage : 0;

//         const percent = getPercentage(face2Width, screenWidth / 4) / 100;
//         text2.style.opacity = percent > 0.2 ? percent : 0;

//         const picPos = faces.offsetLeft;
//         const maxRight = screenWidth / 2 - 150;
//         if (picPos < maxRight) {
//           faces.style.left = picPos + 10 + 'px';
//         }
//       }
//     };

//     document.body.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.body.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [screenWidth, maxWidth]);

//   return (
//     <div id="faces" ref={facesRef} style={{ position: 'relative' }}>
//       <div id="face1" ref={face1Ref} style={{ float: 'left' }}></div>
//       <div id="face2" ref={face2Ref} style={{ float: 'left' }}></div>
//       <div id="text1" ref={text1Ref}></div>
//       <div id="text2" ref={text2Ref}></div>
//     </div>
//   );
// };

// export default AnimationComponent;




