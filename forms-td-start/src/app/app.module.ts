import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import {EmployeeDataService} from './employee-data.service';
import { FilterPipe } from './search/filter.pipe';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'list-employee', component: ShowEmployeeComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ShowEmployeeComponent,
    HomeComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
