import React, { useEffect, useState } from 'react';
import withContainer from '../hof/Hof';
import { useParams } from 'react-router-dom';
import { navItems } from '../constants';
import { useAnimeContext } from '../context/animeContext';
import { PageLoader } from '../components';
import { motion } from 'framer-motion';
import { slideLeft, slideRight } from '../utils';
import { Modal } from 'antd';


const WorkDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState(null);
  const { setPathName } = useAnimeContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("")

  const showModal = (url) => {
    setIsModalOpen(true);
    setImgUrl(url)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    setIsLoading(true);

    const loadContent = async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    };

    loadContent();
  }, [id]);

  useEffect(() => {
    const data = navItems.find((item) => item.path === id);
    setPhotos(data);
    setPathName(`${data.path}`);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <PageLoader title={id} />
      ) : (
       <div className="gallery-overview">
        <div
            className="gallery-overview-outer"
            data-scrollbar="true"
            tabIndex={1}
            style={{ outline: 'none', opacity: 1 }} 
          >
            <div className="scroll-content">
              <div className="gallery-overview-inner" style={{ opacity: 1 }}>
              {photos?.photos.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`gallery-overview-image ${i % 2 !== 0 ? 'rightPicture' : 'leftPicture'}`}
                    style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
                    initial="hidden"
                    whileHover="visible"
                    onClick={()=>showModal(item)}
                    
                  >
                    <div
                      className="image-frame"
                      style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
                    >
                      <div className="pic-overlay">
                        <div
                          className="pic-overlay-inner"
                          style={{
                            transform: 'translate(-102%, 0%) matrix(1, 0, 0, 1, 0, 0)'
                          }}
                        />{' '}
                        <div
                          className="pic-overlay-inner2"
                          style={{
                            transform: 'translate(-102%, 0%) matrix(1, 0, 0, 1, 0, 0)'
                          }}
                        />
                      </div>{' '}
                      <div className="image-frame-inner">
                        <motion.img
                         whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1], filter: ["blur(5px)", "blur(0px)"], scaleX: [0, 1] }}
                         transition={{ duration: 0.4 }}
                          src={item}
                          className="img"
                        />
                      </div>
                    </div>{' '}
                    {i % 2 !== 0 ? (
                      <>
                        <motion.div
                          className="bildnummerOuter"
                        >
                          <div className="bildnummer"></div>
                        </motion.div>{' '}
                        <motion.div
                          className="bildnummerRechtsOuter"
                          variants={slideRight}
                        >
                          {i + 1}
                        </motion.div>
                      </>
                    ) : (
                      <>
                        <motion.div
                          className="bildnummerOuter"
                          variants={slideLeft}
                        >
                          <div className="bildnummer">{i + 1}</div>
                        </motion.div>{' '}
                        <motion.div
                          className="bildnummerRechtsOuter"
                        >
                          {/**/}
                        </motion.div>
                      </>
                    )}
                  </motion.div>
                ))}
                <div className="endspacer" />
              </div>
            </div>
          </div>
          <Modal width="100%" className='' open={isModalOpen} onCancel={handleCancel}>
            <div className="image-frame-inner model-foto flex justify-center items-center">
              <img
                   src={imgUrl}
                   className="img w-full h-full object-cover"
                  />
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default withContainer(WorkDetails);
