
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {CoreModule, HttpService} from '@app/core';
import { SharedModule } from '@app/shared';
import {QuoteService} from "@app/services/quote.service";
import {NgModule} from "@angular/core";
import {EmitterService} from "@app/services/emitter.service";
import {UserService} from "@app/services/user.service";


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
  ],
  declarations: [
  ],
  providers: [
    QuoteService, EmitterService, UserService
  ]
})
export class ServiceModule { }
