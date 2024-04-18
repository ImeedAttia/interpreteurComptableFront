export class Users {
  id: number;
  email: string;
  fullName: string;
  identifier: number;
  phonenumber : string;
  accountStatus: string;
  job : string;
  role : string;

  constructor() {
    this.id = 0;
    this.email = "";
    this.fullName = "";
    this.identifier = 0;
    this.phonenumber ="";
    this.accountStatus = "";
    this.job = "";
    this.role = "";
  }
}
