import { Component } from '@angular/core';
import {ErrorsStateMatcher} from "../../Models/ErrorStateMatcher";
import {TokenStorageService} from "../../Services/token.service";
import {EntryService} from "../../Services/entry.service";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatError, MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatError,
    MatIcon,
    MatFormField,
    MatLabel,],
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
      this.entryService.signIn(LoginInfo)
        .subscribe({
          next: (data :any) =>{
            this.tokenStorage.saveToken(data.token);
            this.router.navigate(['/down']);
          },
          error: (err : Error) => {
            this.errorMessage = err.message;
            console.log(err);
            this._snackBar.open(this.errorMessage, '❌');
          }
        });

      this.router.navigate(['/down']);
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
