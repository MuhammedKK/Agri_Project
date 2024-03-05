/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import FormInput from "../../shared/FormInput";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../../shared/Button";
import { SignIn } from "../../api/auth/auth.api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SigninActions } from "../../store/reducers/slices/Signin.slice";

const Signin = () => {
  const {
    formState: { errors },
    control,
    handleSubmit
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Methods
  const onSubmit = async (loginData:any) => {
    try {
        const { data } = await SignIn.auth({
          email: loginData.email,
          password: loginData.password,
        });
        
        console.log(data);
        dispatch(SigninActions.setToken(data.accessToken));
        navigate('/subscription')
      } catch (err) {
        console.log(err);
      }
  }
  return (
    <div
      style={{ width: "30%", margin: "auto" }}
      className="flex items-center justify-center text-white h-screen"
    >
      <div className="p-8 rounded shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4">Login to Agri-Sense</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4"></div>
          <FormInput
            type="text"
            label="email"
            name="email"
            fullWidth
            control={control}
            icon={<FaEnvelope />}
            errors={errors}
          />
          <div className="mb-6">
            <FormInput
              type="password"
              label="password"
              name="password"
              fullWidth
              control={control}
              icon={<FaLock />}
              errors={errors}
            />
          </div>
          <Button label="Login" fullwidth bgColor="#97B497" />
          <div className="flex justify-between">
            <div className="order-first">
              <div className="flex">
                <FormInput
                  type="checkbox"
                  label="test"
                  name="email"
                  control={control}
                  errors={errors}
                />
                <div>remember me</div>
              </div>
            </div>
            <div className="order-last">
                Forget password?
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
