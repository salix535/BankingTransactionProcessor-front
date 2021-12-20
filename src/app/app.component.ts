import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "./auth-config/auth-config";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
