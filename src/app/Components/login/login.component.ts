import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private entryService: EntryService,
    private tokenStorage: TokenStorageService
  ) {}

  // Error state matcher for form validation
  matcher = new ErrorsStateMatcher();

  // Variable for tracking active form and hide/show password
  active: string = '';
  hide: boolean = true;
  errorMessage: string = '';

  // Form group with email and password form controls
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  // Getter methods for form controls
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  // Function invoked on form submission
  onSubmit() {
    const LoginInfo = {
      email: this.email?.value,
      password: this.password?.value,
    };
    console.log(LoginInfo);
    if (this.form.valid) {
      console.log(this.form);
      // Temporary lines for setting authentication token and role (to be removed)
      window.sessionStorage.setItem(
        'auth-token',
        'To be removed from login.ts line 102,103 and 60,61'
      );
      window.sessionStorage.setItem('auth-role', 'Admin');
      this.router.navigate(['/Dashboard/Statistics']);
    } else {
      this._snackBar.open('Enter valid information!!!', '❌');
    }
  }

  // Form group for subscription form with respective form controls
  formSubs: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    emailSubs: new FormControl('', [Validators.required, Validators.email]),
    identificateur: new FormControl('', [Validators.required]),
    passwordSubs: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  // Getter methods for subscription form controls
  get nom() {
    return this.formSubs.get('nom');
  }
  get emailSubs() {
    return this.formSubs.get('emailSubs');
  }
  get identificateur() {
    return this.formSubs.get('identificateur');
  }
  get passwordSubs() {
    return this.formSubs.get('passwordSubs');
  }

  // Function invoked on subscription form submission
  onSubmitSubs() {
    const LoginInfoSubs = {
      nom: this.nom?.value,
      email: this.emailSubs?.value,
      identificateur: this.identificateur?.value,
      password: this.passwordSubs?.value,
    };
    console.log(LoginInfoSubs);
    if (this.formSubs.valid) {
      console.log(this.formSubs);
      // Temporary lines for setting authentication token and role (to be removed)
      sessionStorage.setItem(
        'auth-token',
        'To be removed from login.ts line 102,103 and 58'
      );
      sessionStorage.setItem('auth-role', 'Admin');
    } else {
      this._snackBar.open('Enter valid information!!!', '❌');
    }
  }
}
