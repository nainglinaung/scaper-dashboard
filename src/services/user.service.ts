import { Credentials } from "../types/credentials";
import FetchService  from "./fetch.service";

class UserServiceClass {

  private fetchService; 
  constructor() {
    this.fetchService = new FetchService({"Content-Type":"application/json"});
  }


   async login(credentials: Credentials) {
    return this.fetchService.request("auth/login", credentials, 'POST');
  }

  async register(credentials: Credentials) {
    return this.fetchService.request("auth/register", credentials, 'POST');
  }
}


export const UserService = new UserServiceClass()