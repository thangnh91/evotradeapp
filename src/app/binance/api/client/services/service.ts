import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/timeout';

const httpOptions = {
    headers: new HttpHeaders({
        'timeout': '72000'
    })
};

@Injectable()
export class Service {
    private url = 'https://evotradingappserver.herokuapp.com';

    constructor(
        private http: HttpClient
    ) { }

    get<T>(pattern: string): Observable<T> {
        return this.http.get<T>(this.url + pattern, httpOptions)
            .timeout(72000)
            .pipe(
                //tap(T => console.log(JSON.stringify(T)))
            );
    }
}