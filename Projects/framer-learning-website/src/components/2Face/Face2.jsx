import "./face2.min.css";
// import "./2face/script";
import { useEffect, useRef } from "react";

const Face2 = () => {
  var screenWidth = window.innerWidth - 100;
  const face1Ref = useRef(null);
  const face2Ref = useRef(null);
  const facesRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  var prevX = useRef(0);
  var maxWidth = screenWidth / 2;

  useEffect(() => {
    const face1 = face1Ref.current;
    const face2 = face2Ref.current;
    const faces = facesRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    face1.style.width = screenWidth / 4;
    face2.style.width = screenWidth / 4;

    function handleMouseMove(e) {
      var xDirection = getMouseDirection(e);
      var face1Width = face1.offsetWidth;
      var face2Width = face2.offsetWidth;
      var facesHeight = faces.offsetHeight;
      var currentHeight = e.pageY;

      if (xDirection === "left" && currentHeight < facesHeight) {
        moveRight(face1Width, face2Width);
      } else if (xDirection === "right" && currentHeight < facesHeight) {
        moveLeft(face1Width, face2Width);
      } else if (currentHeight > facesHeight) {
        resetStyles();
      }
    }

    function getMouseDirection(e) {
      var dir;
      var currentX = e.pageX;
      // if (screenWidth / 2 < currentX) {
      if (prevX.current < currentX) {
        dir = "right";
      } else {
        dir = "left";
      }
      prevX.current = currentX;
      return dir;
    }

    function moveLeft(face1Width, face2Width) {
      if (face2Width < maxWidth) {
        face2.style.width = `${face2Width + 40}px`;
        face1.style.width = `${face1Width - 40}px`;

        //change opacity
        var percentage = getPercentage(face1Width, screenWidth / 4) / 100;
        text1.style.opacity = percentage > 0.25 ? percentage : 0;

        var percent = getPercentage(face2Width, screenWidth / 4) / 100;
        text2.style.opacity = percent > 0.25 ? percent : 0;

        //Move image left
        var picPos = faces.offsetLeft;
        var maxLeft = 150;
        if (picPos < maxLeft) {
          // var lft = faces.style.left - 100;
          // if (lft < window.innerWidth) {
          faces.style.left = picPos - 5 + "px";
          // }
        }
      }
    }

    function moveRight(face1Width, face2Width) {
      if (face1Width < maxWidth) {
        face1.style.width = `${face1Width + 40}px`;
        face2.style.width = `${face2Width - 40}px`;

        //chnage opacity
        var percentage = getPercentage(face1Width, screenWidth / 4) / 100;
        text1.style.opacity = percentage > 0.25 ? percentage : 0;

        var percent = getPercentage(face2Width, screenWidth / 4) / 100;
        text2.style.opacity = percent > 0.25 ? percent : 0;

        //Move Image Right
        var picPos = faces.offsetLeft;
        var maxRight = screenWidth / 2 - 150;
        if (picPos > maxRight) {
          // var leftSize = faces.style.left - 100;
          // if (leftSize > window.innerWidth) {
          faces.style.left = picPos + 5 + "px";
          // }
        }
      }
    }

    function getPercentage(width, total) {
      return (width * 100) / total;
    }
    function resetStyles() {
      face1.style.width = "50%";
      face2.style.width = "50%";

      text1Ref.current.style.opacity = 1;
      text2Ref.current.style.opacity = 1;

      faces.style.left = "25%";
    }

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, [screenWidth, maxWidth]);

  return (
    <div className="fcae2Page" style={{ backgroundColor: "white" }}>
      <div className="container-fluid faceMain">
        <div className="row">
          <div className="col-12">
            <div className="text col-lg-3" id="text1" ref={text1Ref}>
              <h1 style={{ fontSize: "5.6rem" }}>designer</h1>
              <p>
                Designer with apassion and creativity for designing <br />{" "}
                beautiful user frendly websites made changes
              </p>
            </div>
            <div className="faces col-lg-6" id="faces" ref={facesRef}>
              <div className="face" id="face1" ref={face1Ref}>
                {" "}
              </div>
              <div className="face" id="face2" ref={face2Ref}>
                {" "}
              </div>
            </div>
            <div className="text col-lg-3" id="text2" ref={text2Ref}>
              <h1 style={{ fontSize: "5.6rem" }}>
                <span className="chevron-left">&lt;</span>coder
                <span className="chevron-right">&gt;</span>
              </h1>
              <p>
                Best Coder you can get to know and learn <br />
                from him.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Face2;
