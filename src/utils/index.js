export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

export const slideLeft = {
    hidden: { x: '50px', opacity: 0 },
    visible: { x: '0px', opacity: 1, transition: { duration: 0.3 } }
  };
  
export  const slideRight = {
    hidden: { x: '-50px', opacity: 0 },
    visible: { x: '0px', opacity: 1, transition: { duration: 0.3 } }
  };