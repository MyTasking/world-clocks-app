import { Component, OnInit } from '@angular/core';
import { WorldClocksService } from '../world-clocks.service'; 
import { TimezoneData } from './timezone-data';

@Component({
  selector: 'app-world-clocks',
  templateUrl: './world-clocks.component.html',
  styleUrls: ['./world-clocks.component.css'],
})
export class WorldClocksComponent implements OnInit {

  timeZones: TimezoneData[] = []; 

  selectedTimezone: string = ''; 

  allTimezones: string[] = []; 

  constructor(private worldClocksService: WorldClocksService) {}

  ngOnInit(): void {
   
    this.worldClocksService.getTimezones().subscribe((timezones: string[]) => {
 
      this.timeZones = timezones.map((timezone: string) => {

        if (typeof timezone === 'string') {
   
          return {
            name: timezone,
            abbreviation: '',
            offset: '',
            currentTime: '',
            localDate: '',
            daylightSaving: '',
          };
        } else {
          console.error('Invalid timezone data:', timezone);
          return {
            name: '', 
            abbreviation: '',
            offset: '',
            currentTime: '',
            localDate: '',
            daylightSaving: '',
          };
        }
      });
    });
  }

  addTimezone() {
   
  }

  cancelAdd() {
    
  }
}



