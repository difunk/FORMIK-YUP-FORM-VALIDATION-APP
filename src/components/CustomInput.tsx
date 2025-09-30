import { memo } from 'react';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const CustomInput = memo(({ label, ...props }: CustomInputProps) => {
  const [field] = useField(props);
  return (
    <TextField
      fullWidth
      label={label}
      {...field}
      {...props}
      variant='outlined'
      margin='normal'
    />
  );
});

CustomInput.displayName = 'CustomInput';

export default CustomInput;
