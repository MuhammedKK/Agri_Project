/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import FormInput from "../../shared/FormInput";
import { FaLock } from "react-icons/fa";
import Button from "../../shared/Button";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Password } from "../../api/auth/auth.api";

const ResetPassword = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  // useLocation hook gives access to the current location object
  const location = useLocation();

  // location.search contains the query parameters in the form of a string
  const queryParams = new URLSearchParams(location.search);

  // You can then get the value of a specific parameter using the get method
  const token = queryParams.get('token');

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    console.log(data, token);
    try {
      if (token) {
        const res = await Password.reset(token, {
          password: data.pass,
          confirmPassword: data.Cpass,
        });
        toast.success(res?.message);
        navigate("/signin", { replace: true });
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <div
      style={{ width: "30%", margin: "auto" }}
      className="flex items-center justify-center text-white h-screen"
    >
      <div className="p-8 rounded shadow-md w-full animate__animated animate__backInDown">
        <h2 className="text-2xl font-bold mb-4">Create New Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4"></div>
          <FormInput
            type="password"
            label="New Password"
            name="pass"
            fullWidth
            control={control}
            icon={<FaLock />}
            errors={errors}
            message="Password is required!"
          />
          <div className="mb-4"></div>
          <FormInput
            type="password"
            label="Confirm New Password"
            name="Cpass"
            fullWidth
            control={control}
            icon={<FaLock />}
            errors={errors}
            message="Confirm Password is required!"
          />
          <Button label="Rest Password" fullwidth bgColor="#97B497" />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
