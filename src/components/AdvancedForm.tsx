import { Form, Formik, type FormikHelpers } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import {
  Button,
  MenuItem,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

type AdvancedFormValues = {
  username: string;
  jobType: string;
  acceptedTos: string;
};

const onSubmit = async (
  values: AdvancedFormValues,
  actions: FormikHelpers<AdvancedFormValues>
) => {
  console.log('Submit called', values);
  await new Promise((res) => setTimeout(res, 1000));
  actions.resetForm();
  actions.setSubmitting(false);
};

const AdvancedForm = () => {
  return (
    <Container maxWidth='sm' sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom align='center'>
          Advanced Form
        </Typography>
        <Formik
          initialValues={{ username: '', jobType: '', acceptedTos: '' }}
          validationSchema={advancedSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack spacing={2}>
                <CustomInput
                  label='Username'
                  name='username'
                  type='text'
                  placeholder='Enter username'
                />
                <CustomSelect label='Job Type' name='jobType'>
                  <MenuItem value='development'>Developer</MenuItem>
                  <MenuItem value='design'>Designer</MenuItem>
                  <MenuItem value='management'>Management</MenuItem>
                  <MenuItem value='human resource'>Human Resource</MenuItem>
                  <MenuItem value='social media'>Social Media</MenuItem>
                  <MenuItem value='other'>Other</MenuItem>
                </CustomSelect>
                <CustomCheckbox name='acceptedTos' />
                <Button
                  disabled={isSubmitting}
                  type='submit'
                  variant='contained'
                  color='primary'
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default AdvancedForm;
