import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from './components/banner/banner.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './reusableComponent/product/product.component';
import { ClientReviewsComponent } from './components/client-reviews/client-reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    ProductComponent,
    ClientReviewsComponent,
    FooterComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
