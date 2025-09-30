import { useFormikContext } from 'formik';
import { motion } from 'framer-motion';
import type { AdvancedFormValues } from '../schemas';

const FormikError = ({ name }: { name: keyof AdvancedFormValues }) => {
  const { errors, touched } = useFormikContext<AdvancedFormValues>();
  const errorMsg =
    touched[name] && typeof errors[name] === 'string'
      ? errors[name]
      : undefined;
  const show = Boolean(errorMsg);

  return (
    <motion.div
      initial={false}
      animate={{
        height: show ? 'auto' : 0,
        opacity: show ? 1 : 0,
        marginTop: show ? 6 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        height: { duration: 0.3 },
        opacity: { duration: show ? 0.2 : 0.15, delay: show ? 0.1 : 0 },
      }}
      style={{
        overflow: 'hidden',
      }}
    >
      <motion.div
        animate={{
          y: show ? 0 : -10,
          scale: show ? 1 : 0.95,
        }}
        transition={{
          duration: 0.25,
          ease: 'easeOut',
          delay: show ? 0.05 : 0,
        }}
        style={{
          color: '#d32f2f',
          fontSize: '0.875rem',
          fontWeight: 500,
          paddingLeft: 2,
          lineHeight: 1.2,
        }}
      >
        {errorMsg}
      </motion.div>
    </motion.div>
  );
};

export default FormikError;
