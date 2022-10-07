import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { FitappspageComponent } from './pages/fitappspage/fitappspage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MyybaproductComponent } from './pages/myybaproduct/myybaproduct.component';

const routes: Routes = [
  { path: 'contactus', component: ContactpageComponent },
  { path: 'fitappcasedetails', component: FitappspageComponent },
  { path: 'myybacasedetails', component: MyybaproductComponent },
  { path: 'about', component: AboutusComponent },
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

