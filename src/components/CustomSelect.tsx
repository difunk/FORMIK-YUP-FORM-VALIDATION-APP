import { memo } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  type SelectProps,
} from '@mui/material';
import { useField } from 'formik';

interface CustomSelectProps extends Omit<SelectProps, 'label' | 'error'> {
  label: string;
  name: string;
  children: React.ReactNode;
}

const CustomSelect = memo(
  ({ label, children, ...props }: CustomSelectProps) => {
    const [field, meta] = useField(props);
    return (
      <>
        <FormControl
          fullWidth
          error={Boolean(meta.touched && meta.error)}
          margin='normal'
        >
          <InputLabel variant='outlined' id={`${props.name}-label`}>
            {label}
          </InputLabel>
          <Select
            {...field}
            {...props}
            labelId={`${props.name}-label`}
            id={`${props.name}-select`}
            label={label}
            aria-describedby={meta.error ? `${props.name}-error` : undefined}
          >
            {children}
          </Select>
          {meta.touched && meta.error && (
            <FormHelperText id={`${props.name}-error`}>
              {meta.error}
            </FormHelperText>
          )}
        </FormControl>
      </>
    );
  }
);

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
