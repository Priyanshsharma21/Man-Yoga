import { useEffect, useState } from 'react';
import { Preloader } from './components';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import { Home, WorkDetails } from './pages';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);



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
  }, []);

  return (
    <>
        <AnimatePresence mode='wait'>
              {isLoading && <Preloader />}
          </AnimatePresence>
          <>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/gallerie/:id" element={<WorkDetails />} />
            </Routes>
          </>
    </>
  );
};

export default App;
