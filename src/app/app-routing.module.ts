import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';

const routes: Routes = [
  { path: 'product', component: ProductpageComponent },
  { path: 'about', component: AboutusComponent },
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

