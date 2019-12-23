/* DEV NOTE: This custom hooks allow us to re use all the logic related to screen resizing 
on different components with ease */

import { useState, useEffect } from 'react';

export default function useWindowSize() {
    const isClient = typeof window === 'object';
  
    const getSize = () => {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      const handleResize = () => {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      // DEV NOTE: useEffect hook allow us to set a cleanup function as the return value
      // Here we remove the event listener to prevent memory leaks
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  }