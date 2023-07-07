import { Fragment, useEffect, useState, useRef } from "react";
import useClickOutside from "../../useClickOutside";

interface ImgViewsProps {
  close:any;
  src:any;
}

const onCloseRef = useRef(null);

const ImgViews = (props: ImgViewsProps)  => {
  const { close, src } = props;
  let domNode = useClickOutside(() => {
    close(false);
  });
  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div
          className={` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}
        >
          <div className="mfp-content" ref={onCloseRef}>
            <div className="mfp-iframe-scaler">
              <img className="mfp-img" src={src} />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const ImageView = () => {
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const aLinks:any = document.getElementsByTagName("a");
      aLinks.forEach((a:any) => {
        if (a.href.includes("assets/img/")) {
          if (a.getAttribute("download") === null) {
            a.addEventListener("click", (e:any) => {
              e.preventDefault();
              setImgValue(a.href);
              setImg(true);
            });
          }
        }
      });
    }, 1500);
  }, []);
  return (
    <Fragment>
      {img && <ImgViews close={() => setImg(false)} src={imgValue} />}
    </Fragment>
  );
};
export default ImageView;
function forEach(arg0: (a: any) => void) {
  throw new Error("Function not implemented.");
}

