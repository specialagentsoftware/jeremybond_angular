import { AfterViewInit, Component } from '@angular/core';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface BondShoppingTableItem {
  name: string
  tel: string
  address: string
  category: string
  maplink: string
  website: string
  city: string
}

const SHOP_DATA: BondShoppingTableItem[] = [
  { name: 'Outlets Nags Head', tel: "252.441.5634", address: "7100 S Croatan Hwy, Nags Head, NC 27959-8881",category:"Mall",maplink:"https://www.google.com/maps/dir/Current+Location/7100+S+Croatan+Hwy+,+Nags+Head+,+NC+27959-8881",website:"http://www.outletsnagshead.com/",city:"Nags Head"},
  { name: 'Scotch Bonnet', tel: "252.995.4242", address: "51684 NC Hwy 12, Hatteras Island, NC 27936",category:"Sandwich",maplink:"https://www.google.com/maps/dir/Current+Location/51684+NC+Hwy+12+,+Hatteras+Island+,+NC+27936",website:"http://scotchbonnetfudges.com/",city:"Hatteras"},
  { name: 'Gulf Stream Gifts', tel: "252.441.0433", address: "2512 S Virginia Dare Trl, Nags Head, NC 27959-9248",category:"Seafood",maplink:"https://www.google.com/maps/dir/Current+Location/2512+S+Virginia+Dare+Trl+,+Nags+Head+,+NC+27959-9248",website:"http://www.gulfstreamgifts.com/",city:"Nags Head"},
  { name: 'Lee Robinson\s General Store', tel: "252.986.2381", address: "58372 Nc 12, Hatteras, Hatteras Island, NC 27981",category:"Seafood",maplink:"https://www.google.com/maps/dir/Current+Location/58372+Nc+12+,+Hatteras+,+Hatteras+Island+,+NC+27981",website:"",city:"Hatteras"},
  { name: 'Miss Kitty\s Photos & Gifts', tel: "252.457.5011", address: "794 Sunset Blvd Suite K Timbuck II Shopping Village, Corolla, NC 27927-9501",category:"Mexican",maplink:"https://www.google.com/maps/dir/Current+Location/794+Sunset+Blvd+Suite+K+Timbuck+II+Shopping+Village+,+Corolla+,+NC+27927-9501",website:"http://oldtimephoto.net/",city:"Corolla"},
  { name: "Stop-N-Shop", tel: "252.441.6105", address: "100 S Virginia Dare Trl, Kill Devil Hills, NC 27948-9024",category:"Pizza",maplink:"https://www.google.com/maps/dir/Current+Location/100+S+Virginia+Dare+Trl+,+Kill+Devil+Hills+,+NC+27948-9024",website:"http://www.stopnshopobx.com/",city:"Kill Devil Hills"},
  { name: 'Books to Be Red',tel:"252.928.3936",address:"34 School Road, Ocracoke, NC 27960",category:"SeaFood",maplink:"https://www.google.com/maps/dir/Current+Location/34+School+Road+,+Ocracoke+,+NC+27960",website:"",city:"Ocracoke"},
  { name: 'Kitty Hawk Kites', tel: "252.449.2210", address: "3933 S Croatan Hwy, Nags Head, NC 27959-9796",category:"Pizza",maplink:"https://www.google.com/maps/dir/Current+Location/3933+S+Croatan+Hwy+,+Nags+Head+,+NC+27959-9796",website:"https://www.kittyhawk.com",city:"Multiple Locations"},
  { name: 'Super Wings', tel: "252.480.0009", address: "4116 N Croatan Hwy, Kitty Hawk, NC 27949-6075", category: "Sandwich", maplink: "https://www.google.com/maps/dir/Current+Location/4116+N+Croatan+Hwy+,+Kitty+Hawk+,+NC+27949-6075", website: "http://www.outerbanks.com/super-wings.html", city: "Multiple Locations" },
];


@Component({
  selector: 'app-bond-shopping-table',
  templateUrl: './bond-shopping-table.component.html',
  styleUrls: ['./bond-shopping-table.component.scss']
})
export class BondShoppingTableComponent implements AfterViewInit {
  
  closeModal: string = ''
  shopdata: BondShoppingTableItem[]  
  faBack = faBackward
  modalname: string = ''
  modaltel: string = ''
  modaladdress: string = ''
  modalcategory: string = ''
  modalmaplink: string = ''
  modalwebsite: string = ''
  modalcity: string = ''

  constructor(private modalService: NgbModal) {
    this.shopdata = SHOP_DATA
  }

  ngAfterViewInit(): void {
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
