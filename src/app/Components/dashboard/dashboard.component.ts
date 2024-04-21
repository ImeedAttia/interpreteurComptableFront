import { Component } from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {TokenStorageService} from "../../Services/token.service";
import {EntryService} from "../../Services/entry.service";
import {User} from "../../Models/users";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, RouterLinkActive, MatIcon, NgOptimizedImage],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  LogoImgPath = '../../../assets/Logo.png';


  // Dark Mode or Light Mode
  darkMode: boolean = false;

  // User data object
  userData: User = {
    email: 0, firstName: "", id: 0, lastName: "", password: "", role: "", status: ""

  };

  // Status variable
  status = false;

  // Image profile variable
  imageProfile!: SafeUrl;

  constructor(
    private tokenStorageService: TokenStorageService,
    private EService: EntryService,
    private sanitizer: DomSanitizer,
    private MatSnackBar: MatSnackBar
  ) {
    // Setting user role from token storage
    //this.userData.role = this.tokenStorageService.getRole() as string;
  }

  ngOnInit(): void {
    // Method to initialize component
    this.refreshProfile();
  }

  // Method to refresh profile
  refreshProfile() {
    //const userAuth = this.tokenStorageService.getUser();
    this.getImage();
  }

  // Method to logout
  signOut() {
    this.EService.signOut();
  }

  // Method to toggle status
  addToggle() {
    this.status = !this.status;
  }

  // Method to get user image
  getImage() {
    this.imageProfile =
      'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';
  }

  // Method to change mode (Dark Mode or Light Mode)
  modeChanges() {
    this.darkMode = !this.darkMode;
  }
}
