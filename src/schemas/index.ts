import * as yup from 'yup';

//Passwort muss mindestens 8 Zeichen, Groß- und Kleinbuchstaben, Zahl und Sonderzeichen enthalten
const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;

export const basicSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  lastName: yup
    .string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
    .required('Please confirm your password'),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'At least 3 characters long')
    .required('Required'),
  jobType: yup
    .string()
    .oneOf([
      'development',
      'design',
      'management',
      'human resource',
      'social media',
      'other',
    ])
    .required('Required'),
  acceptedTos: yup
    .boolean()
    .oneOf([true], 'Please accept the terms of service'),
});
