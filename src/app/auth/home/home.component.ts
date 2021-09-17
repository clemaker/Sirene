import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/core/models/company.model.interface';
import { AuthorizationsHttpServiceService } from '../shared/services/authorizations-http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public search = false;
  company: Company;
  active = [];

  constructor(
    private authorizationsHttpService: AuthorizationsHttpServiceService,
        private routerService: Router,
  ) { }

  ngOnInit() {}

  getToken(): void {
    this.authorizationsHttpService.getToken().subscribe(
      () => {
          this.routerService.navigate(['/login']);
      },
      (error: string) => {
        'Error';
      }
  );
  }

  getTokenTest(): void {
    this.authorizationsHttpService.getTokenTest();
    this.search = true;
  }

  getInformations(): void {
    this.authorizationsHttpService.getInformations().subscribe(
      (res: Object) => {console.log(res)},
      (error: string) => {error}
    )
  }

  getActiveDetails(): void {
    this.authorizationsHttpService.getActiveDetails().subscribe(
      (res: Company) => {
        this.active = res.etablissements;
    for (let i = 0; i < this.active.length; i++) {
      for (let y = 0; y < this.active[i]['periodesEtablissement'].length; y++) {
        if (this.active[i]['periodesEtablissement'][y]['dateFin'] !== null) {
          console.log(this.active[i]);
        }
      }
    }
      },
      (error: string) => {error}
    )
  }

}
