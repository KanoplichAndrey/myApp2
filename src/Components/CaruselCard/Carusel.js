import React from 'react';
import s from './Carusel.module.css';
import { useState, useEffect, useRef, Children, cloneElement } from 'react';
import { Pages } from './Pages';
import { CaruselContext } from './CaruselContext';

// const PAGE_WIDTH = 450;

export const Carusel = ({ children, infinite  }) => {
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(1250);
  const [page, setPage] = useState([])
  const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 })

  const windowElRef = useRef();

  useEffect(() => {
    if (infinite) {
      setPage([
        cloneElement(children[Children.count(children) - 1]),
        ...children,
        cloneElement(children[0]), 
      ])
      setClonesCount({ head: 1, tail: 1 })
      return
    }
    setPage(children)
  }, [children, infinite])

  useEffect(() => {
    const resizeHandler = () => {
      const _Width = windowElRef.current.offsetWidth
      // console.log('resized', windowElWidth)
      setWidth( _Width)
      setOffset(-(clonesCount.head * width)) 
    }
    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, []);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (children.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <CaruselContext.Provider value={{ width}}>
      <div className={s.mainContainer}>
        <div className={s.arrowLeft} onClick={handleLeftArrowClick} />
        <div className={s.window} ref={windowElRef}>
          <div
            className={s.allPagesContainer}
            style={{
              transform: `translateX(${offset}px)`,
            }}>
            {page}
          </div>
        </div>
        <div className={s.arrowRight} onClick={handleRightArrowClick} />
      </div>
    </CaruselContext.Provider>
  );
};

Carusel.Pages = Pages;
