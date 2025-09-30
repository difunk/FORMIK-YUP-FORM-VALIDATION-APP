import { memo } from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  type CheckboxProps,
} from '@mui/material';
import { useField } from 'formik';

interface CustomCheckboxProps extends Omit<CheckboxProps, 'name' | 'type'> {
  name: string;
  label?: string;
}

const CustomCheckbox = memo(
  ({
    label = 'I accept the terms of service',
    ...props
  }: CustomCheckboxProps) => {
    const [field, meta] = useField(props);
    return (
      <>
        <FormControlLabel
          control={
            <Checkbox
              {...field}
              {...props}
              checked={field.value === true || field.value === 'true'}
              onChange={(e) =>
                field.onChange({
                  target: {
                    name: field.name,
                    value: e.target.checked,
                  },
                })
              }
            />
          }
          label={label}
        />

        {meta.touched && meta.error && (
          <FormHelperText error>{meta.error}</FormHelperText>
        )}
      </>
    );
  }
);

CustomCheckbox.displayName = 'CustomCheckbox';

export default CustomCheckbox;
