import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-only-logo-header',
  templateUrl: './app-only-logo-header.component.html',
  styleUrls: ['./app-only-logo-header.component.scss']
})
export class AppOnlyLogoHeaderComponent implements OnInit {

  menuHidden = true;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private i18nService: I18nService) { }

  ngOnInit() { }

}
