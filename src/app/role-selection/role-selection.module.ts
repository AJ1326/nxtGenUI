import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RoleSelectionComponent} from "@app/role-selection/role-selection.component";
import {RoleSelectionRoutingModule} from "@app/role-selection/role-selection-routing-module";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    RoleSelectionRoutingModule
  ],
  declarations: [
    RoleSelectionComponent
  ]
})
export class RoleSelectionModule {}
