import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class Service {
    private url = 'https://api.binance.com';

    constructor(
        private http: HttpClient
    ) { }

    get<T>(pattern: string): Observable<T> {
        return this.http.get<T>(this.url + pattern)
            .pipe(
                //tap(T => console.log(JSON.stringify(T)))
            );
    }
}