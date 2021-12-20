import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {Router} from "@angular/router";
import {authCodeFlowConfig} from "../auth-config/auth-config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private oAuthService: OAuthService, private router: Router) {
    this.initOAuth();
  }

  private initOAuth() {
    this.oAuthService.configure(authCodeFlowConfig);
    if (this.oAuthService.hasValidAccessToken()) {
      this.router.navigate(['transactions']);
      return;
    }
    this.oAuthService.loadDiscoveryDocumentAndLogin().then(response => {
      console.log(response);
    });
  }
}
