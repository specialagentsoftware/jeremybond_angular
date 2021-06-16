import { Component, OnInit } from '@angular/core';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bond-address',
  templateUrl: './bond-address.component.html',
  styleUrls: ['./bond-address.component.scss']
})
export class BondAddressComponent implements OnInit {


  title = 'Maestrale';
  lat = 35.32208745752378;
  lng = -75.51263248166092;
  address = "42158 Park Drive Avon, NC 27915"
  faBack = faBackward

  constructor() { }

  ngOnInit(): void {
  }
}
