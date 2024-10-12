import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { logo } from '../assets';
import { navItems } from '../constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { Drawer } from 'antd';
import { About } from '../components'
import { motion } from 'framer-motion'



const Interface = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState("/");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const menuItems = document.querySelectorAll('.menuitem');
    const email = document.querySelector('.email');
    const aboutMenu = document.querySelector('.aboutmenu');

    const handleMouseEnter = (item) => {
      gsap.fromTo(
        item.children,
        { rotateY: 0 },
        {
          rotateY: 360,
          duration: 0.5,
          ease: 'power1.inOut',
          stagger: 0.1,
        }
      );
      menuItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.add('nonHovered');
          otherItem.classList.remove('hovered');
        } else {
          otherItem.classList.add('hovered');
          otherItem.classList.remove('nonHovered');
        }
      });
    };

    const handleMouseLeave = () => {
      menuItems.forEach((otherItem) => {
        otherItem.classList.remove('nonHovered');
        otherItem.classList.remove('hovered');
      });
    };

    menuItems.forEach((item) => {
      item.addEventListener('mouseenter', () => handleMouseEnter(item));
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    email.addEventListener('mouseenter', () => {
      gsap.to('.emailline', {
        opacity: 1,
        scaleX: 1,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    });

    email.addEventListener('mouseleave', () => {
      gsap.to('.emailline', {
        opacity: 0,
        scaleX: 0,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    });

    aboutMenu.addEventListener('mouseenter', () => {
      gsap.to('.aboutline', {
        opacity: 1,
        scaleX: 1,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    });

    aboutMenu.addEventListener('mouseleave', () => {
      gsap.to('.aboutline', {
        opacity: 0,
        scaleX: 0,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    });

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener('mouseenter', () => handleMouseEnter(item));
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
      email.removeEventListener('mouseenter', () => {});
      email.removeEventListener('mouseleave', () => {});
      aboutMenu.removeEventListener('mouseenter', () => {});
      aboutMenu.removeEventListener('mouseleave', () => {});
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setPath("/");
    } else {
      setPath(location.pathname.toString().split("/")[2]);
    }
  }, [location.pathname]);

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="interface">
      <div
        className="logo"
        style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
      >
        <motion.div className="logo-main cursor-pointer" onClick={() => handleRedirect("/")}
        >
          <img className="myManuLogo" src={"https://res.cloudinary.com/dlxpea208/image/upload/v1728636525/Frame_48096258_dzq3gi.png"} alt="logo" />
        </motion.div>
      </div>
      <nav className="navi">
        <div className="menu">
          <div className="menu-inner">
            {navItems.map((item) => (
              <div
                onClick={() => handleRedirect(`/gallerie/${item.path}`)}
                key={item.id}
                className={`menuitem ${path === item.path ? "active" : path === "/" ? "active" : "inactive"}`}
              >
                {item.title.split('').map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div className="aboutmenu_wrapper" onClick={showDrawer}>
        <div
          className="aboutmenu font-semibold"
          style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
        >
          <div className="aboutword font-semibold">
            About &amp; {"に関しては"}
            <div className="aboutline" style={{ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'center' }} />
          </div>
        </div>
      </div>
      <a
        target="_blank"
        href="https://www.instagram.com/man_yog_/"
        className="email font-semibold"
        style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
      >
        Man Yog
        <div className="emailline" style={{ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'center' }} />
      </a>
      <div
        className="phoneWrapper"
        style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
      >
        <div className="phone font-semibold">+91-9518167563</div>
      </div>
      <div
        className="slogan"
        style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
      >
        <span className="font-normal">{"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।"}</span>
      </div>

      <Drawer 
      onClose={onClose} 
      open={open}
      width='100%'
      height='100%'
      >
        <About setOpen={setOpen}/>
      </Drawer>
    </div>
  );
};

export default Interface;
