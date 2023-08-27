import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorldClocksService } from '../world-clocks.service'; 
import { TimezoneData } from './timezone-data';
import * as momentTimezone from 'moment-timezone';

@Component({
  selector: 'app-world-clocks',
  templateUrl: './world-clocks.component.html',
  styleUrls: ['./world-clocks.component.css'],
})
export class WorldClocksComponent implements OnInit, OnDestroy {
  timeZones: TimezoneData[] = [];
  selectedTimezone: string = '';
  allTimezones: string[] = [];
  private intervalId: any;

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

    this.intervalId = setInterval(() => {
      this.loadTimezoneInfo();
    }, 1000);
  }

  ngOnDestroy(): void {
    
    clearInterval(this.intervalId);
  }

  async loadTimezoneInfo() {
    for (let index = 0; index < this.allTimezones.length; index++) {
      try {
        const data = await this.worldClocksService.getTimezoneInfo(this.allTimezones[index]).toPromise();
  
        this.timeZones[index].abbreviation = data.abbreviation;
        this.timeZones[index].offset = data.utc_offset;
  
        if (data.datetime && typeof data.datetime === 'string') {
          const utcTime = momentTimezone(data.datetime).tz(this.allTimezones[index]);
          const formattedTime = utcTime.format('HH:mm:ss');
          this.timeZones[index].currentTime = formattedTime;
  
          const formattedDate = utcTime.format('DD/MM/YYYY');
          this.timeZones[index].localDate = formattedDate;
  
          if (data.dst_from && data.dst_until) {
            const dstFrom = momentTimezone(data.dst_from).tz(this.allTimezones[index]);
            const dstUntil = momentTimezone(data.dst_until).tz(this.allTimezones[index]);
  
            const formattedDstFrom = dstFrom.format('DD-MM-YYYY');
            const formattedDstUntil = dstUntil.format('DD-MM-YYYY');
  
            const dstInfo = `${formattedDstFrom} -> ${formattedDstUntil}`;
            this.timeZones[index].daylightSaving = dstInfo;
          } else {
       
            this.timeZones[index].daylightSaving = 'no information';
          }
        } else {
          this.timeZones[index].currentTime = 'N/A';
          this.timeZones[index].localDate = 'N/A';
          this.timeZones[index].daylightSaving = '';
        }
      } catch (error) {
        console.error(`Error fetching data for timezone ${this.allTimezones[index]}:`, error);
        this.timeZones[index].currentTime = 'N/A';
        this.timeZones[index].localDate = 'N/A';
        this.timeZones[index].daylightSaving = '';
      }
    }
  }
  
  addTimezone() {

  }

  cancelAdd() {
   
  }
}
