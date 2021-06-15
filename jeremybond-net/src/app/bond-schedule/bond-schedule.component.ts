import { CalendarEvent, CalendarView } from 'angular-calendar';
import {AfterViewInit,ChangeDetectionStrategy,ChangeDetectorRef,Component,ElementRef,ViewChild} from '@angular/core';
import { differenceInMinutes, startOfDay, startOfHour } from 'date-fns';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bond-schedule',
  templateUrl: './bond-schedule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./bond-schedule.component.scss']
})
export class BondScheduleComponent implements AfterViewInit {
  @ViewChild('scrollContainer')
  scrollContainer!: ElementRef<HTMLElement>;

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Day
  CallendarView = CalendarView
  faBack = faBackward
  
  events: CalendarEvent[] = [
    {
      start: new Date("06-13-2021 19:00:00:00"),
      end: new Date("06-13-2021 20:00:00"),
      title: 'Test Event',
    },
    {
      start: new Date("06-13-2021 21:00:00:00"),
      end: new Date("06-13-2021 22:30:00"),
      title: 'Second Test Event',
    }
  ]
  
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.scrollToCurrentView()
  }

  viewChanged() {
    this.cdr.detectChanges()
    this.scrollToCurrentView()
  }

  private scrollToCurrentView() {
    if (this.view === CalendarView.Week || CalendarView.Day) {
      // each hour is 60px high, so to get the pixels to scroll it's just the amount of minutes since midnight
      const minutesSinceStartOfDay = differenceInMinutes(
        startOfHour(new Date()),
        startOfDay(new Date())
      );
      const headerHeight = this.view === CalendarView.Week ? 60 : 0;
      this.scrollContainer.nativeElement.scrollTop =
        minutesSinceStartOfDay + headerHeight;
    }
  }

  ngOnInit(): void {
  }

}
