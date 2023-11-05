import { Credentials } from "../types/credentials";
import { FetchService } from "./fetch.service";

export class UserService {
    static async sendRequest(url: string, payload: object, method: string) {        
    return FetchService(url, payload, method);
  }

  static async login(credentials: Credentials) {
    return this.sendRequest("auth/login", credentials, 'POST');
  }

  static async register(credentials: Credentials) {
    return this.sendRequest("auth/register", credentials, 'POST');
  }
}
