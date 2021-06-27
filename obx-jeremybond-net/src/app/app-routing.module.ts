import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BondAddressComponent } from './bond-address/bond-address.component';
import { BondFerryTableComponent } from './bond-ferry-table/bond-ferry-table.component';
import { BondFoodTableComponent } from './bond-food-table/bond-food-table.component';
import { BondScheduleComponent } from './bond-schedule/bond-schedule.component';
import { BondShoppingTableComponent } from './bond-shopping-table/bond-shopping-table.component';
import { BondDashComponent } from './bond-dash/bond-dash.component';
import { BondSearchComponent } from './bond-search/bond-search.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard',pathMatch:"full"},
  { path: 'address', component: BondAddressComponent },
  { path: 'ferry', component: BondFerryTableComponent },
  { path: 'food', component: BondFoodTableComponent },
  { path: 'schedule', component: BondScheduleComponent },
  { path: 'shopping', component: BondShoppingTableComponent },
  { path: 'dashboard', component: BondDashComponent },
  { path: 'search', component: BondSearchComponent },
  { path: '**', redirectTo:'/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
