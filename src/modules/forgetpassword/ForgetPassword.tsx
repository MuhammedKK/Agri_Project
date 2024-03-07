/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../shared/Button";
import { useNavigate } from "react-router-dom";
import FormInput from "../../shared/FormInput";
import { FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Token } from "../../api/auth/auth.api";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = async (data:any) => {
    console.log(data);
    try {
      const res = await Token.sendToken({
        email: data.email
      });
      toast.success(res?.message);
      navigate('/checkMail', {replace: true});
    } catch (err:any) {
      toast.error(err?.response?.data?.message)
    }
    // navigate('/checkMail', {replace: true})
  }
  return (
    <>
      <div
        style={{ width: "30%", margin: "auto" }}
        className="flex items-center justify-center text-white h-screen"
      >
        <div className="p-8 rounded shadow-md w-full animate__animated animate__backInDown">
          <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
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
            <Button label="Send Email" fullwidth bgColor="#97B497" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
