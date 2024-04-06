import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Carousel({ products }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % products.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <div style={{ position: 'relative' }}>
      <AnimatePresence initial={false}>
        <motion.img
          key={products[index]._id}
          src={products[index].banner}
          alt={products[index].name}
          initial={{ opacity: 0, x: 200 }} //start from right side
          animate={{ opacity: 1, x: 0 }} //move to left side
          exit={{ opacity: 0, x: -200}} //exit to left side
          transition={{ duration: 5 }} // Adjust the duration as needed
          style={{ width: '100%', height: 'auto', position: 'absolute' }}
        />
      </AnimatePresence>
    </div>
  );
}

// export default Carousel;
