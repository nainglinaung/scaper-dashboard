import { Credentials } from "../types/credentials";
import FetchService  from "./fetch.service";

class UserServiceClass {

  private fetchService; 
  constructor() {
    this.fetchService = new FetchService({"Content-Type":"application/json"});
  }


  async login(credentials: Credentials) {
    const data = await this.fetchService.post("auth/login", credentials);  

    if (data.message) {
      throw new Error(data.message);
    }

    return data;

  }

  async register(credentials: Credentials) {
    return this.fetchService.post("auth/register", credentials);
  }
}


export const UserService = new UserServiceClass()