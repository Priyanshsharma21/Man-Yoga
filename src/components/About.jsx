import { useEffect, useRef } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import gsap from 'gsap';
import { aboutData } from '../constants';
import { AnimatePresence, motion } from 'framer-motion'
import { Col, Row } from 'antd'


const About = ({ setOpen }) => {
  const textRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    const animateText = (element) => {
      gsap.fromTo(
        element.querySelectorAll('.word'),
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          stagger: 0.1,
          ease: 'power1.out',
        }
      );
    };

    if (textRef.current) {
      animateText(textRef.current);
    }
    
    if (subTextRef.current) {
      animateText(subTextRef.current);
    }
  }, []);

  return (
    <div className="about active">
      <div className="aboutInner" style={{ left: 0, opacity: 1 }}>
      <div onClick={()=>setOpen(false)} className="closeit absolute flex justify-end  right-6 top-5">
              <IoCloseOutline className='text-4xl close-icon cursor-pointer  text-[#16161635] hover:text-[#161616e2]'/>
      </div>
        <div className="aboutRightBg" />
        <motion.div className="aboutBgCropper"
          whileInView={{ opacity: [0,0, 1], filter: ["blur(10px)", "blur(0px)"]}}
          transition={{ duration: 0.4, delay : 0.5, ease : "circIn" }}
        >
          <div
          className="aboutBg">
          <img
              src="https://res.cloudinary.com/dlxpea208/image/upload/v1728635050/Simply_blue-tiful_1_m0oivn.jpg"
              alt=""
              className="aboutPictureLeft w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <div className="aboutTextAreaOuter" style={{ opacity: 1 }}>
          <div
            className="aboutTextAreaInner"
            data-scrollbar="true"
            tabIndex={1}
            style={{ overflow: "auto", outline: "none" }}
          >
            <div className="scroll-content">
              <div className="aboutBgCropperMobile"
               
              >
                <div className="aboutBgMobile">
                  <motion.img
                  whileInView={{opacity: [0,0,1], filter: ["blur(10px)", "blur(0px)"]}}
                  transition={{ duration: 1, ease : "circIn" }}
                    src="https://cdn.sanity.io/images/s9olv7lh/production/6deeb29622cf3c0581a26c3d1336aff9af980410-1200x785.png"
                    alt=""
                    className="aboutPictureLeftMobile"
                  />
                </div>
              </div>
              <div className="aboutTextArea">
                <div className="text" ref={textRef}>
                  {aboutData["aboutTextArea"].split(" ").map((text, i) => (
                    <>
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transformOrigin: "50% 50% 0px",
                        opacity: 1,
                      }}
                      className="word word1"
                    >
                      {text}
                    </div>{" "}
                    </>
                  ))}
                </div>
                <div className="subtext" ref={subTextRef}>
                  {aboutData["aboutSubText"].split(" ").map((text, i) => (
                    <>
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        display: "inline-block",
                        opacity: 1,
                      }}
                      className={`word word${i}`}
                    >
                      {text}
                    </div>{" "}
                    </>
                  ))}
                </div>
                <div className="pic_container">
                 <Row gutter={[8,8]}>
                 {aboutData["aboutImgDetails"].map((item, i) => {
                    return (
                      <Col className="about-col" xl={8} lg={8} md={12} xm={24} xs={24} key={i}>
                        <div className={`pic${item.id} picStagger`}>
                          <img
                            src={item.img}
                            alt="analog"
                            className="picimg"
                          />
                          <p className="picDescr">
                            {item.details}
                            <br />{" "}
                            <span className="analogYear">{item.year}</span>
                          </p>
                        </div>
                      </Col>
                    );
                  })}
                 </Row>
                </div>
                <div className="impressum_mobile" style={{ opacity: 1 }}>
                  <p className="h mobile-p stagger">
                    About &amp;
                    <br />
                    Terms
                  </p>{" "}
                  <p className="t">
                    {aboutData["aboutContactMain"].map((item, i) => (
                      <span key={item.id} className="stagger font-semibold">
                        {item.link ? (
                          <a href={item.link} target="blank" className="font-semibold">
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
                <div className="disclaimer pb-10" style={{ opacity: 1 }}>
                  <p className="createdBy font-semibold">
                    Webdesign &amp; Development by{" "}
                    <a
                      // href="https://spark-spectrum-studios.vercel.app/"
                      target="blank"
                      className="dsp underline text-black font-bold hover:text-[#161616]"
                    >
                      Spark Spectrum Studios
                    </a>
                  </p>{" "}
                  <div className="breakLine" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="impressum">
          <p className="contactText">
          <AnimatePresence>
              {aboutData["aboutContactMain"].map((item, i) => (
                <motion.span
                  key={item.id}
                  className="stagger font-semibold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  {item.link ? (
                    <a href={item.link} target="blank" className="font-semibold">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                  <br />
                </motion.span>
              ))}
            </AnimatePresence>
          </p>{" "}
          <p />
        </div>
      </div>
    </div>
  );
};

export default About;
