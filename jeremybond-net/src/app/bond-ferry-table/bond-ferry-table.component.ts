import { AfterViewInit, Component } from '@angular/core';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bond-ferry-table',
  templateUrl: './bond-ferry-table.component.html',
  styleUrls: ['./bond-ferry-table.component.scss']
})
export class BondFerryTableComponent implements AfterViewInit {

  faBack = faBackward
  
  constructor() {
  }

  ngAfterViewInit(): void {
  }
}
