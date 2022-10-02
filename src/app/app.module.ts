import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductComponent } from './reusableComponent/product/product.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HeaderComponent } from './reusableComponent/header/header.component';
import { BannerComponent } from './components/homeComponents/banner/banner.component';
import { ProductsComponent } from './components/homeComponents/products/products.component';
import { ClientReviewsComponent } from './components/homeComponents/client-reviews/client-reviews.component';
import { StorySliderComponent } from './components/aboutComponents/story-slider/story-slider.component';
import { CasesliderComponent } from './components/homeComponents/caseslider/caseslider.component';
import { FooterComponent } from './reusableComponent/footer/footer.component';
import { MyybaproductComponent } from './pages/myybaproduct/myybaproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    ProductComponent,
    ClientReviewsComponent,
    FooterComponent,
    HomepageComponent,
    AboutusComponent,
    StorySliderComponent,
    CasesliderComponent,
    MyybaproductComponent,
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
