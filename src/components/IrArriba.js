import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import '../css/IrArriba.css'
  
const IrArriba = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button style={{transform: visible ? 'scale(1)' : 'scale(0)'}} onClick={scrollToTop}>
     <IoIosArrowUp />
    </button>
  );
}
  
export default IrArriba;