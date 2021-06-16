import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BondNavComponent } from './bond-nav/bond-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BondDashComponent } from './bond-dash/bond-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BondAddressComponent } from './bond-address/bond-address.component';
import { BondScheduleComponent } from './bond-schedule/bond-schedule.component';
import { BondFerryComponent } from './bond-ferry/bond-ferry.component';
import { BondFoodComponent } from './bond-food/bond-food.component';
import { BondShoppingComponent } from './bond-shopping/bond-shopping.component';
import { AgmCoreModule } from '@agm/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BondFoodTableComponent } from './bond-food-table/bond-food-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BondShoppingTableComponent } from './bond-shopping-table/bond-shopping-table.component';
import { BondFerryTableComponent } from './bond-ferry-table/bond-ferry-table.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//apiKey:"AIzaSyDJCvaWdGrK8FY7_zNCPy4va-rzq6nG1-8"

@NgModule({
  declarations: [
    AppComponent,
    BondNavComponent,
    BondDashComponent,
    BondAddressComponent,
    BondScheduleComponent,
    BondFerryComponent,
    BondFoodComponent,
    BondShoppingComponent,
    BondFoodTableComponent,
    BondShoppingTableComponent,
    BondFerryTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJCvaWdGrK8FY7_zNCPy4va-rzq6nG1-8'
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory:adapterFactory,
    }),
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
