import { Component, OnInit } from '@angular/core';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bond-search',
  templateUrl: './bond-search.component.html',
  styleUrls: ['./bond-search.component.css']
})
export class BondSearchComponent implements OnInit {
  faBack = faBackward
  constructor() { }

  ngOnInit(): void {
  }

  submit(form:any){
    var searchTerm = form.searchTerm;
    console.log(searchTerm);
  
    var City = form.city;
    console.log(City);
    window.location.href = "https://www.google.com/search?q=" + searchTerm + "+" + City+"+NC";
  }

}
