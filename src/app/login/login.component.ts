import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {catchError, finalize} from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import {UserService} from "@app/services/user.service";

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  version: string = environment.version;
  error: string;
  loginForm: FormGroup;
  isLoading = false;
  JWT: string = null;
  JWTError = false;
  roles = {};


  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private i18nService: I18nService,
              private authenticationService: AuthenticationService,
              private roleService: UserService) {
        this.route.queryParams.subscribe(params => {
          this.JWT = params['JWT'];
          this.JWTError = params['JWTError'];
        });
        if (this.JWT) {
          this.authenticationService.saveJWT({key: 'token ' + this.JWT});
          this.callRoles();
        }
        this.createForm();
  }


  ngOnInit() { }

  login() {
    this.isLoading = true;
    this.authenticationService.login(this.loginForm.value)
      .pipe(finalize(() => {
        this.loginForm.markAsPristine();
        this.isLoading = false;
      }))
      .subscribe(credentials => {
        log.debug(`${credentials.username} successfully logged in`);
        this.router.navigate(['/'], { replaceUrl: true });
      }, error => {
        log.debug(`Login error: ${error}`);
        this.error = error;
      });
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }

  private callRoles() {
    this.isLoading = true;
    this.roleService.getRoles({ key: this.JWT})
      .pipe(
        catchError((err, caught): any =>  {
          this.router.navigate(
            ['.'],
            { relativeTo: this.route, queryParams: { JWTError: true} }
          );
        }),
      finalize(() => { this.isLoading = false; })

  )
      .subscribe((result) => {
        this.roles = result.roles;
        localStorage.setItem('UserRoles', result);
        this.router.navigateByUrl('/role-selection');
      });
  }

}
