import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService } from '../../authentication/authentication.service';
import { MockAuthenticationService } from '../../authentication/authentication.service.mock';
import { I18nService } from '../../i18n.service';
import { AppOnlyLogoHeaderComponent } from './app-only-logo-header.component';

describe('AppOnlyLogoHeaderComponent', () => {
  let component: AppOnlyLogoHeaderComponent;
  let fixture: ComponentFixture<AppOnlyLogoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [AppOnlyLogoHeaderComponent],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        I18nService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOnlyLogoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
