import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WorldClocksService {
  private readonly apiUrl = 'https://worldtimeapi.org/api/timezone';

  constructor(private http: HttpClient) {}

  getTimezones(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }


  getTimezoneInfo(timezone: string): Observable<any> {
    const timezoneUrl = `${this.apiUrl}/${timezone}`;
    return this.http.get(timezoneUrl);
  }
}

