/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import FormInput from "../../shared/FormInput";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../../shared/Button";
import { SignIn } from "../../api/auth/auth.api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SigninActions } from "../../store/reducers/slices/Signin.slice";
import "animate.css";
import { toast } from "react-toastify";




const Signin = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Methods
  const onSubmit = async (loginData: any) => {
    try {
      const { data } = await SignIn.auth({
        email: loginData.email,
        password: loginData.password,
      });

      console.log(data);
      toast.success('Login Successfully!')
      dispatch(SigninActions.setToken(data.accessToken));
      navigate("/dashboard", {replace: true});
    } catch (err) {
      toast.error('Login Failed')
      console.log(err);
    }
  };
  return (
    <>
      <div
        style={{ width: "30%", margin: "auto" }}
        className="flex items-center justify-center text-white h-screen"
      >
        <div className="p-8 rounded shadow-md w-full animate__animated animate__backInDown">
          <h2 className="text-2xl font-bold mb-4">Login to Agri-Sense</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4"></div>
            <FormInput
              type="email"
              label="E-mail"
              name="email"
              fullWidth
              control={control}
              icon={<FaEnvelope />}
              errors={errors}
              message="E-mail is required!"
            />
            <div className="mb-6">
              <FormInput
                type="password"
                label="Password"
                name="password"
                fullWidth
                control={control}
                icon={<FaLock />}
                errors={errors}
                message="Password is required!"
              />
            </div>
            <div className="flex justify-between mb-1">
              <div className="order-first">
                <div className="flex">
                  <FormInput
                    type="checkbox"
                    label="test"
                    name="rememberme"
                    control={control}
                    errors={errors}
                  />
                  <div className="mx-1">remember me</div>
                </div>
              </div>
              <Link replace to={'/forgetPassword'} className="order-last">Forget password?</Link>
            </div>
            <Button label="Login" fullwidth bgColor="#97B497" />
            <Link replace to="/" className="block text-center">
              or{" "}
              <span className="underline underline-offset-1">
                create new account
              </span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
