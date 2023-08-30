import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CacheService } from '../cache.service';

@Injectable({
  providedIn: 'root',
})
export class WorldClocksService {
  private readonly apiUrl = 'https://worldtimeapi.org/api/timezone';

  constructor(private http: HttpClient, private cacheService: CacheService) {}

  getTimezones(): Observable<string[]> {
      return this.http.get<string[]>(this.apiUrl).pipe(
        catchError((error) => {
        
          console.error('An error occurred while fetching timezones:', error);
          throw error; 
        })
      );
    }
    
  getTimezoneInfo(timezone: string): Observable<any> {
    const timezoneUrl = `${this.apiUrl}/${timezone}`;
    return this.http.get<any>(timezoneUrl).pipe(
      catchError((error) => {
        console.error(`An error occurred while fetching timezone info for ${timezone}:`, error);
        throw error;
      })
    );
  }

}

