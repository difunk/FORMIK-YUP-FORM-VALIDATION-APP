import { memo } from 'react';
import {
  FormControl,
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
    const [field] = useField(props);
    return (
      <>
        <FormControl fullWidth margin='normal'>
          <InputLabel variant='outlined' id={`${props.name}-label`}>
            {label}
          </InputLabel>
          <Select
            {...field}
            {...props}
            labelId={`${props.name}-label`}
            id={`${props.name}-select`}
            label={label}
            sx={{
              '& .MuiSelect-icon': {
                color: '#2563eb',
              },
            }}
          >
            {children}
          </Select>
        </FormControl>
      </>
    );
  }
);

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
