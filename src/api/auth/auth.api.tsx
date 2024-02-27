import { ClientCalls } from "../../utils/client-calls/ClientCalls";

export class SignIn {
  static auth = async (data: {
    email: string;
    password: string;
  }): Promise<any> => {
    return (await ClientCalls.post("auth/signin", data)).data;
  };
}
