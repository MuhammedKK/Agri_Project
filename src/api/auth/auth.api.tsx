import { ClientCalls } from "../../utils/client-calls/ClientCalls";

export class SignIn {
  static auth = async (data: {
    email: string;
    password: string;
  }): Promise<any> => {
    return (await ClientCalls.post("auth/signin", data)).data;
  };
}

export class Signup {
  static signup = async (data: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    nationalId: string;
    phone: string;
  }): Promise<any> => {
    return (await ClientCalls.post("auth/signup", data)).data;
  };
}
