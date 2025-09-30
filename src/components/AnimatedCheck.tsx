import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const AnimatedCheck = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const light = theme.palette.primary.light || '#e0e7ff';
  return (
    <motion.svg
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      style={{ display: 'block', margin: '0 auto' }}
    >
      <circle
        cx='32'
        cy='32'
        r='30'
        stroke={primary}
        strokeWidth='4'
        fill={light}
      />
      <motion.path
        d='M20 34L30 44L46 26'
        stroke={primary}
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </motion.svg>
  );
};

export default AnimatedCheck;
