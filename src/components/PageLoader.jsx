import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect } from 'react';
import { slideUp } from '../utils';

const PageLoader = ({ title }) => {
  useEffect(() => {
    const chars = document.querySelectorAll('.char');

    // RotateY animation
    gsap.fromTo(
      chars,
      { rotateY: 0, opacity : 0 },
      {
        rotateY: 720,
        duration: 0.3,
        opacity : 1,
        ease: 'power1.inOut',
        stagger: 0.1,
        onComplete: () => {
          gsap.to('.nextGalleryName', {
            y: -50,
            opacity: 0,
            duration: 0.5,
            ease: 'power1.inOut'
          });
        }
      }
    );
  }, [title]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="pageloader-introduction w-full h-screen flex justify-center items-center"
    >
      <div className="nextGalleryNameContainer">
        <div className="nextGalleryName">
          <div
            style={{
              display: "inline-block",
              overflow: "hidden",
              padding: 0,
              margin: 0,
              border: 0,
              outline: 0
            }}
            className="resizeTextC"
          >
            <span>
              {title.split("").map((item, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                  className="char char1 ml-3"
                >
                  {i === 0 ? item.toUpperCase() : item.toLowerCase()}
                </div>
              ))}{" "}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PageLoader;
