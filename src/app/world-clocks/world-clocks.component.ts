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
      this.allTimezones = timezones;
      this.timeZones = this.allTimezones.map((timezone: string) => {
        return {
          name: timezone,
          abbreviation: '',
          offset: '',
          currentTime: '',
          localDate: '',
          daylightSaving: '',
        };
      });
      this.loadTimezoneInfo();
    });
  }

  loadTimezoneInfo() {
    this.allTimezones.forEach((timezone, index) => {
      this.worldClocksService.getTimezoneInfo(timezone).subscribe(
        (data: any) => {
          this.timeZones[index].abbreviation = data.abbreviation;
          this.timeZones[index].offset = data.utc_offset;
        },
        (error: any) => {
          console.error(`Error fetching data for timezone ${timezone}:`, error);
        }
      );
    });
  }

  addTimezone() {

  }

  cancelAdd() {
   
  }
}


  


