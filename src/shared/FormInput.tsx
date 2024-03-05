/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FieldValues, UseFormSetValue, DeepMap, FieldError, Path, useController } from 'react-hook-form';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

interface ReusableInputProps<TFieldValues extends FieldValues> {
  type: string;
  control: any; // replace 'any' with the appropriate type
  setValue?: UseFormSetValue<TFieldValues>;
  errors: DeepMap<TFieldValues, FieldError>;
  label: string;
  name: Path<TFieldValues>;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  message?: string;
}

const FormInput: React.FC<ReusableInputProps<any>> = ({
  type,
  control,
  label,
  icon,
  name,
  fullWidth = false,
  message
}) => {
  const inputClasses = `w-full p-2 pl-10 border rounded-lg placeholder-opacity-50 focus:outline-none ${fullWidth ? 'block' : 'inline-block'}`;

  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: {required: message}
  });


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`mb-4 ${fullWidth ? 'w-full' : 'max-w-md '}`}>
      <div className="relative">
        <input
          type={showPassword ? 'text' : type}
          id={name.toString()}
          placeholder={`Enter your ${label.toLowerCase()}`}
          className={inputClasses}
          style={{backgroundColor: "#2F2F2F"}}
          ref={ref}
          {...inputProps}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        {type === 'password' && (
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </div>
        )}
      </div>
      {invalid && <p className="text-red-500 text-sm mt-1">{error?.message}</p>}
    </div>
  );
};

export default FormInput;
