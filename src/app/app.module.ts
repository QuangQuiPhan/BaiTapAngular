import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { KinhDoanhComponent } from './kinh-doanh/kinh-doanh.component';
import { GiaiTriComponent } from './giai-tri/giai-tri.component';
import { ThoiSuComponent } from './thoi-su/thoi-su.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { LamDepComponent } from './lam-dep/lam-dep.component';
import { TamSuComponent } from './tam-su/tam-su.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    KinhDoanhComponent,
    GiaiTriComponent,
    ThoiSuComponent,
    TrangChuComponent,
    LamDepComponent,
    TamSuComponent,
    DangNhapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    CarouselModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
