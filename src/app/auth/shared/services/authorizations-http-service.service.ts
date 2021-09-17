import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'any'
})
export class AuthorizationsHttpServiceService {

    constructor(
        private http: HttpClient
    ) {
    }

    getToken(): Observable<any> {
        const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'})
            .set("Content-Type", "application/x-www-form-urlencoded")
            .set('Authorization', 'Basic ZTVTZDBBMDU2TEh6UklMczVlclJzWENoNnhvYTpmMmIyVzJ2cWZ5Rlk5Vm1BYUdDQnVTSEJOOHNh');
        const data = {
            grant_type: 'client_credentials'
        };
        return this.http.post<any>(environment.api.getToken, data, {headers});
    }

    getTokenTest(): void {
        localStorage.setItem('token', '6c58dd9d-af65-3558-9117-1722566ac84d');
    }

    getInformations(): Observable<any> {
        const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'})
            .set("Accept", "application/json")
            .set('Authorization','Bearer '+localStorage.getItem('token'));
        return this.http.get<any>(environment.api.getInformations, {headers});
    }

    getActiveDetails(): Observable<any> {
        const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'})
            .set("Accept", "application/json")
            .set('Authorization','Bearer '+localStorage.getItem('token'));
        return this.http.get<any>(environment.api.getActiveDetails, {headers});
    }
}
