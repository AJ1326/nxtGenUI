import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.scss']
})
export class RoleSelectionComponent implements OnInit {

  roles = [
      {
        "provider_id": 1,
        "provider_name": "Kenneth",
        "provider_slug": "kenneth-chan",
        "role_id": 6,
        "role_name": "physician"
      },
      {
        "provider_id": 2,
        "provider_name": "Novena Clinic",
        "provider_slug": "novena-clinic",
        "role_id": 7,
        "role_name": "clinic_administrator"
      },
      {
        "provider_id": 4,
        "provider_name": "TP clinic",
        "provider_slug": "tp-clinic",
        "role_id": 7,
        "role_name": "clinic_administrator"
      },
      {
        "provider_id": 3,
        "provider_name": "Mt Elizebeth",
        "provider_slug": "mt-elizebeth",
        "role_id": 8,
        "role_name": "hospital_administrator"
      }
    ];
  constructor() { }

  ngOnInit() {

  }

  selectRole(index: number) {
    console.log("role clicked : " + index);
  }

}
