import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { faMap, faCalendarDay, faHamburger, faCartPlus, faShip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bond-dash',
  templateUrl: './bond-dash.component.html',
  styleUrls: ['./bond-dash.component.scss']
})
export class BondDashComponent {
  faMap = faMap
  faCalendarDay = faCalendarDay
  faBurger = faHamburger
  faCart = faCartPlus
  faShip = faShip
  isHidden:boolean = false

  HideAllButtons() {
  this.isHidden = !this.isHidden
}

  constructor(private breakpointObserver: BreakpointObserver) {}
}
