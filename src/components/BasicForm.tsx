import { useFormik, type FormikHelpers } from 'formik';
import { basicSchema, type BasicFormValues } from '../schemas';

const onSubmit = async (
  values: BasicFormValues,
  actions: FormikHelpers<BasicFormValues>
) => {
  console.log('Submit called', values);
  await new Promise((res) => setTimeout(res, 1000));
  actions.resetForm();
  actions.setSubmitting(false);
};

const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik<BasicFormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstName'>First Name</label>
      <input
        id='firstName'
        name='firstName'
        type='text'
        onChange={handleChange}
        value={values.firstName}
        onBlur={handleBlur}
        className={errors.firstName && touched.firstName ? 'input-error' : ''}
      />
      {errors.firstName && touched.firstName && (
        <p className='error'>{errors.firstName}</p>
      )}
      <label htmlFor='lastName'>Last Name</label>
      <input
        id='lastName'
        name='lastName'
        type='text'
        onChange={handleChange}
        value={values.lastName}
        onBlur={handleBlur}
        className={errors.lastName && touched.lastName ? 'input-error' : ''}
      />
      {errors.lastName && touched.lastName && (
        <p className='error'>{errors.lastName}</p>
      )}
      <label htmlFor='email'>Email Address</label>
      <input
        id='email'
        name='email'
        type='email'
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
        className={errors.email && touched.email ? 'input-error' : ''}
      />
      {errors.email && touched.email && <p className='error'>{errors.email}</p>}

      <label htmlFor='password'>Password</label>
      <input
        id='password'
        name='password'
        type='password'
        onChange={handleChange}
        value={values.password}
        onBlur={handleBlur}
        className={errors.password && touched.password ? 'input-error' : ''}
      />
      {errors.password && touched.password && (
        <p className='error'>{errors.password}</p>
      )}
      <label htmlFor='confirmPassword'>Confirm Password</label>
      <input
        id='confirmPassword'
        name='confirmPassword'
        type='password'
        onChange={handleChange}
        value={values.confirmPassword}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className='error'>{errors.confirmPassword}</p>
      )}
      <button disabled={isSubmitting} type='submit'>
        Submit
      </button>
    </form>
  );
};

export default BasicForm;
