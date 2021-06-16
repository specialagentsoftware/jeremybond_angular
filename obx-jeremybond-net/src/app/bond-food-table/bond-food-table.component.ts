import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog'
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// TODO: Replace this with your own data model type
export interface BondFoodTableItem {
  name: string
  tel: string
  address: string
  category: string
  maplink: string
  website: string
  city: string
}

// TODO: replace this with real data from your application
const REST_DATA: BondFoodTableItem[] = [
  { name: 'Gidgets', tel: "252.995.3109", address: "41934 Nc 12 Hwy, Avon, NC 27915",category:"Pizza",maplink:"https://www.google.com/maps/dir/Current+Location/41934+Nc+12+Hwy+,+Avon+,+NC+27915",website:"http://gidgetspizza.com/",city:"Avon"},
  { name: 'Bros', tel: "252.995.9595", address: "41934 NC 12 Hwy, Avon, NC 27915",category:"Sandwich",maplink:"https://www.google.com/maps/dir/Current+Location/41934+NC+12+Hwy+,+Avon+,+NC+27915",website:"http://www.brossandwichshack.com",city:"Avon"},
  { name: 'Oceana\'s Bistro', tel: "252.995.4991", address: "40774 NC 12 Hwy, Avon, NC 27915",category:"Seafood",maplink:"https://www.google.com/maps/dir/Current+Location/40774+NC+12Hwy+,+Avon+,+NC+27915",website:"http://www.oceanasbistro.com",city:"Avon"},
  { name: 'Ketch 55 Seafood', tel: "252.995.5060", address: "40396 Nc-12, Avon, NC 27915",category:"Seafood",maplink:"https://www.google.com/maps/dir/Current+Location/40396+Nc-12+,+Avon+,+NC+27915",website:"http://ketch55.com/",city:"Avon"},
  { name: 'La Fogata', tel: "252.986.1118", address: "41934 Nc 12 Hwy, Avon, NC 27915",category:"Mexican",maplink:"https://www.google.com/maps/dir/Current+Location/41934+Nc+12+Hwy+,+Avon+,+NC+27915",website:"http://lafogatobx.com/",city:"Avon"},
  { name: "Ninos\'s", tel: "252.995.5358", address: "41188 Palazzolo Rd, Avon, NC 27915",category:"Pizza",maplink:"https://www.google.com/maps/dir/Current+Location/41188+Palazzolo+Rd+,+Avon+,+NC+27915",website:"",city:"Avon"},
  { name: 'Pangea',tel:"252.995.3800",address:"41001 Nc-12, Avon, NC 27915",category:"SeaFood",maplink:"https://www.google.com/maps/dir/Current+Location/41001+Nc-12+,+Avon+,+NC+27915",website:"http://pangeatavern.com/",city:"Avon"},
  { name: 'Orange Blossom Cafe', tel: "252.995.4109", address: "47206 Highway 12, Buxton, NC 27920",category:"Pizza",maplink:"https://www.google.com/maps/dir/Current+Location/47206+Highway+12+,+Buxton+,+NC+27920",website:"http://orangeblossombakery.com/",city:"Buxton"},
  { name: 'Diamond Shoals', tel: "252.995.5217", address: "46843 NC Hwy 12, Buxton, NC 27953", category: "Sandwich", maplink: "https://www.google.com/maps/dir/Current+Location/46843+NC+Hwy+12+,+Buxton+,+NC+27953", website: "http://diamondshoalsrestaurant.com/", city: "Buxton" },
  { name: 'Hatteras Sol', tel: "252.986.1414", address: "58646 Highway 12, Hatteras, NC 27943", category: "Pizza", maplink: "https://www.google.com/maps/dir/Current+Location/58646+Highway+12+,+Hatteras+,+NC+27943", website: "http://hatterassol.com/", city: "Hatteras" },
  { name: 'Howards Pub', tel: "252.928.4441", address: "1175 Irvin Garrish Hwy, Ocracoke, NC 27960",category:"Pizza",maplink:"https://www.google.com/maps/dir/Current+Location/1175+Irvin+Garrish+Hwy+,+Ocracoke+,+NC+27960",website:"http://www.howardspub.com/",city:"Ocracoke"},
  { name: 'Back Porch Restaurant', tel: "252.928.6401", address: "110 Back Road, Ocracoke, NC 27960",category:"Sandwich",maplink:"https://www.google.com/maps/dir/Current+Location/110+Back+Road+,+Ocracoke+,+NC+27960",website:"http://backporchocracoke.com",city:"Ocracoke"},
];

@Component({
  selector: 'app-bond-food-table',
  templateUrl: './bond-food-table.component.html',
  styleUrls: ['./bond-food-table.component.scss']
})
export class BondFoodTableComponent implements AfterViewInit {
  
  closeModal: string = ''
  restdata: BondFoodTableItem[]  
  faBack = faBackward
  modalname: string = ''
  modaltel: string = ''
  modaladdress: string = ''
  modalcategory: string = ''
  modalmaplink: string = ''
  modalwebsite: string = ''
  modalcity: string = ''
  
  constructor(private modalService: NgbModal) {
    this.restdata = REST_DATA
  }

  ngAfterViewInit(): void {
  }

  showData(phone:string,address:string) {
    alert("Phone is "+phone + " and address is " + address)
  }

  triggerModal(content: any, rowdata: any) {
    this.modalname = rowdata.name
    this.modaltel = rowdata.tel
    this.modaladdress = rowdata.address
    this.modalcategory = rowdata.category
    this.modalmaplink = rowdata.maplink
    this.modalwebsite = rowdata.website
    this.modalcity = rowdata.city
  
   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',windowClass:'custom-class'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
