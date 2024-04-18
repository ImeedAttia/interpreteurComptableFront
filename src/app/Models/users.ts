export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: number;
  password !: string;
  status !: string;
  role !: string;

  constructor() {
    this.id = 0;
    this.firstName = "";
    this.lastName = "";
    this.email = 0;
  }
}
