import { motion } from 'framer-motion';
import FormikError from './FormikError';

import { Form, Formik, type FormikHelpers } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema, type AdvancedFormValues } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import AnimatedCheck from './AnimatedCheck';
import {
  Button,
  MenuItem,
  Container,
  Paper,
  Stack,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';

import { useState } from 'react';

const AdvancedForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = async (
    values: AdvancedFormValues,
    actions: FormikHelpers<AdvancedFormValues>
  ) => {
    console.log('Submit called', values);
    await new Promise((res) => setTimeout(res, 1000));
    setShowSuccess(true);
    actions.resetForm();
    actions.setSubmitting(false);
    setTimeout(() => setShowSuccess(false), 1500);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Container maxWidth='sm'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              minHeight: 380,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            }}
          >
            <Typography
              variant='h4'
              component='h1'
              gutterBottom
              align='center'
              sx={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                mb: 3,
              }}
            >
              Advanced Form
            </Typography>
            {showSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: 'center', paddingTop: 48 }}
              >
                <AnimatedCheck />
                <Typography variant='h6' color='primary' sx={{ mt: 2 }}>
                  Erfolgreich gesendet!
                </Typography>
              </motion.div>
            ) : (
              <Formik
                initialValues={{
                  username: '',
                  jobType: '',
                  acceptedTos: false,
                }}
                validationSchema={advancedSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Stack spacing={2.5}>
                      <motion.div
                        style={{
                          display: 'block',
                          width: '100%',
                          marginTop: '0',
                        }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1,
                          ease: 'easeOut',
                        }}
                        whileHover={{ scale: 1.025 }}
                        whileFocus={{ scale: 1.03 }}
                      >
                        <CustomInput
                          label='Username'
                          name='username'
                          type='text'
                          placeholder='Enter username'
                        />
                        <FormikError name='username' />
                      </motion.div>
                      <motion.div
                        style={{
                          display: 'block',
                          width: '100%',
                          marginTop: '0',
                        }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.25,
                          ease: 'easeOut',
                        }}
                        whileHover={{ scale: 1.025 }}
                        whileFocus={{ scale: 1.03 }}
                      >
                        <CustomSelect label='Job Type' name='jobType'>
                          <MenuItem value=''>
                            <em>Bitte wählen…</em>
                          </MenuItem>
                          <MenuItem value='development'>Developer</MenuItem>
                          <MenuItem value='design'>Designer</MenuItem>
                          <MenuItem value='management'>Management</MenuItem>
                          <MenuItem value='human resource'>
                            Human Resource
                          </MenuItem>
                          <MenuItem value='social media'>Social Media</MenuItem>
                          <MenuItem value='other'>Other</MenuItem>
                        </CustomSelect>
                        <FormikError name='jobType' />
                      </motion.div>
                      <motion.div
                        style={{
                          display: 'block',
                          width: '100%',
                          marginTop: '0',
                        }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.4,
                          ease: 'easeOut',
                        }}
                        whileHover={{ scale: 1.025 }}
                        whileFocus={{ scale: 1.03 }}
                      >
                        <CustomCheckbox name='acceptedTos' />
                        <FormikError name='acceptedTos' />
                      </motion.div>
                      <motion.div
                        style={{
                          display: 'block',
                          width: '100%',
                          marginTop: '0',
                        }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.55,
                          ease: 'easeOut',
                        }}
                        whileHover={{ scale: 1.025 }}
                        whileFocus={{ scale: 1.03 }}
                      >
                        <motion.div
                          whileTap={{ scale: 0.92 }}
                          whileHover={{ scale: 1.04 }}
                          style={{ width: '100%' }}
                        >
                          <Button
                            disabled={isSubmitting}
                            type='submit'
                            variant='contained'
                            fullWidth
                            sx={{
                              mt: 2,
                              minHeight: 48,
                              position: 'relative',
                              background:
                                'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                              borderRadius: 2,
                              textTransform: 'none',
                              fontSize: '1rem',
                              fontWeight: 600,
                              boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
                              transition: 'all 0.2s ease-in-out',
                              '&:hover': {
                                background:
                                  'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
                                boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)',
                                transform: 'translateY(-1px)',
                              },
                            }}
                          >
                            {isSubmitting ? (
                              <CircularProgress
                                size={24}
                                color='inherit'
                                sx={{
                                  position: 'absolute',
                                  left: '50%',
                                  top: '50%',
                                  marginTop: '-12px',
                                  marginLeft: '-12px',
                                }}
                              />
                            ) : (
                              'Submit'
                            )}
                          </Button>
                        </motion.div>
                      </motion.div>
                    </Stack>
                  </Form>
                )}
              </Formik>
            )}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AdvancedForm;
