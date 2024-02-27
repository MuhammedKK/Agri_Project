import { ClientCalls } from "../../utils/client-calls/ClientCalls";

export class Users {
  static getUsers = async (): Promise<any> => {
    return (await ClientCalls.get("auth/whoishere")).data;
  };
}
