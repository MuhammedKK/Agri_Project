/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FaUser, FaIdCard, FaPhone, FaEnvelope, FaLock } from "react-icons/fa";
import FormInput from "../../shared/FormInput";
import Button from "../../shared/Button";
import Sign from "../../assets/signup.png";
import { Link } from "react-router-dom";

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
    .oneOf([yup.ref("password")], "Passwords must match")
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
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: any) => {
    // Add your signup logic here
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="flex justify-between w-full max-w-screen-lg">
        <div className="w-1/2 mx-4">
          <div className="text-center my-4">
            <div className="parent-section text-3xl">Welcome to Agri-Sense</div>
            <div className="child-section xl">
              Create and account or{" "}
              <Link to={"/signin"} className="main-color">
                Log in
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              type="text"
              name="Fname"
              errors={errors}
              control={control}
              label="FullName"
              icon={<FaUser />}
              fullWidth
              message="FullName required!"
            />
            <FormInput
              type="text"
              name="Nid"
              errors={errors}
              control={control}
              label="NationalId"
              icon={<FaIdCard />}
              fullWidth
              message="NationalId required!"
            />
            <FormInput
              type="text"
              name="phone"
              errors={errors}
              control={control}
              label="phoneNumber"
              icon={<FaPhone />}
              fullWidth
              message="Phone Number required!"
            />
            <FormInput
              type="text"
              label="email"
              name="email"
              fullWidth
              control={control}
              icon={<FaEnvelope />}
              errors={errors}
              message="Email required!"
            />
            <FormInput
              type="password"
              name="pass"
              errors={errors}
              control={control}
              label="Password"
              icon={<FaLock />}
              fullWidth
              message="Password required!"
            />
            <FormInput
              type="password"
              name="Cpass"
              errors={errors}
              control={control}
              label="Confirm Password"
              icon={<FaLock />}
              fullWidth
              message="Confirm Password required!"
            />
            <Button
              label="SignUp"
              bgColor="#97B497"
              textColor="#FFF"
              fullwidth
            />
          </form>
        </div>

        <div className="w-1/2 text-center flex items-center justify-center mx-4">
          <img src={Sign} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
