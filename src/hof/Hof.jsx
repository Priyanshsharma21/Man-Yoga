import React from 'react';
import Interface from '../components/Interface';

const withContainer = (WrappedComponent) => {
  return (props) => (
    <>
        <Interface />
        <section className="mainwrapper">
          <div className="bg"></div>

          <div className="overlay overlay-gallery">
            <div className="overlay-inner">
              <div className="overlay-inner-gradient" />
            </div>
          </div>
        </section>
        <WrappedComponent {...props} />
    </>
  );
};

export default withContainer