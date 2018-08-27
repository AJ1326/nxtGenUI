import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService } from '../authentication/authentication.service';
import { MockAuthenticationService } from '../authentication/authentication.service.mock';
import { CoreModule } from '../core.module';
import { OnlyLogoShellComponent } from './only-logo-shell.component';

describe('OnlyLogoShellComponent', () => {
  let component: OnlyLogoShellComponent;
  let fixture: ComponentFixture<OnlyLogoShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        NgbModule.forRoot(),
        CoreModule
      ],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyLogoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create OnlyLogoShellComponent', () => {
    expect(component).toBeTruthy();
  });
});
