import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { FaUser, FaIdCard, FaPhone, FaEnvelope, FaLock } from "react-icons/fa";
import FormInput from "./component/FormInput";
import Button from "./component/Button";

// Yup Schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  nationalId: yup.string().required("National ID is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

// interface
interface FormValues {
  fullName: string;
  nationalId: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Add your signup logic here
    console.log("Form submitted:", data);
  };
  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="flex justify-between w-full max-w-screen-lg">
        <div className="w-1/2">
          <form action="">
            <FormInput
              type="text"
              register={register}
              name="test"
              errors={errors}
              control={control}
              label="FullName"
              icon={<FaUser />}
              fullWidth
            />
            <FormInput
              type="text"
              register={register}
              name="test"
              errors={errors}
              control={control}
              label="NationalId"
              icon={<FaIdCard />}
            />
            <FormInput
              type="text"
              register={register}
              name="test"
              errors={errors}
              control={control}
              label="phoneNumber"
              icon={<FaPhone />}
            />
            <FormInput
              type="email"
              register={register}
              name="email"
              errors={errors}
              control={control}
              label="email"
              icon={<FaEnvelope />}
            />
            <FormInput
              type="password"
              register={register}
              name="test"
              errors={errors}
              control={control}
              label="Password"
              icon={<FaLock />}
            />
            <FormInput
              type="password"
              register={register}
              name="test"
              errors={errors}
              control={control}
              label="Confirm Password"
              icon={<FaLock />}
            />
            <Button
                label="SignUp"
                bgColor="#97B497"
                textColor="#FFF"
                fullwidth
            />
          </form>
        </div>

        <div className="w-1/2">
          <h2 className="text-lg font-semibold mb-2">Subsection 2</h2>
          <p>This is the content of Subsection 2.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
