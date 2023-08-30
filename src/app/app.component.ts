import { Component, OnInit } from '@angular/core';
import { GeoIP2Service, GeoIP2Country } from 'ngx-';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userTimezone: string = 'Your Default Timezone'; // Значение по умолчанию

  constructor(private geoIP2Service: GeoIP2Service) {}

  ngOnInit(): void {
    this.getUserTimezone();
  }

  getUserTimezone(): void {
    this.geoIP2Service.getCountry().subscribe((geoIP2Country: GeoIP2Country) => {
      const timezone = this.getTimezoneByCountry(geoIP2Country);
      if (timezone) {
        this.userTimezone = timezone;
      }
    });
  }

  getTimezoneByCountry(geoIP2Country: GeoIP2Country): string {
    // Здесь нужно реализовать логику для определения временной зоны пользователя
    // Например, используя библиотеку для определения временных зон по странам
    // Верните временную зону пользователя или null, если не удается определить
    return 'Europe/Berlin'; // Пример: вернуть временную зону Берлина
  }
}
