

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimezoneService {
  private userTimezone: string = 'Your Default Timezone';

  setUserTimezone(timezone: string): void {
    this.userTimezone = timezone;
  }

  getUserTimezone(): string {
    return this.userTimezone;
  }
}
