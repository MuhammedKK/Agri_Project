/* eslint-disable @typescript-eslint/no-explicit-any */
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

export class Token {
  static sendToken = async (data: {
    email: string;
  }): Promise<any> => {
    return (await ClientCalls.post("auth/new-token", data)).data;
  };
}

export class Password {
  static reset = async (token:string, data: {
    password: string;
    confirmPassword: string;
  }): Promise<any> => {
    return (await ClientCalls.post(`auth/new-password?token=${token}`, data)).data;
  };
}
