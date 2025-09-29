import { Form, Formik, type FormikHelpers } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';

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
    <Formik
      initialValues={{ username: '', jobType: '', acceptedTos: '' }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <Form>
            <CustomInput
              label='Username'
              name='username'
              type='text'
              placeholder='Enter username'
            />
            <CustomSelect
              label='Job Type'
              name='jobType'
              placeholder='Please select a job'
            >
              <option value=''>Please select a job type</option>
              <option value='development'>Developer</option>
              <option value='design'>Designer</option>
              <option value='management'>Management</option>
              <option value='human resource'>Human Resource</option>
              <option value='social media'>Social Media</option>
              <option value='other'>Other</option>
            </CustomSelect>
            <CustomCheckbox type='checkbox' name='acceptedTos' />
            <button disabled={isSubmitting} type='submit'>
              Submit
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default AdvancedForm;
