import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { GiaiTriComponent } from './giai-tri/giai-tri.component';
import { KinhDoanhComponent } from './kinh-doanh/kinh-doanh.component';
import { LamDepComponent } from './lam-dep/lam-dep.component';
import { TamSuComponent } from './tam-su/tam-su.component';
import { ThoiSuComponent } from './thoi-su/thoi-su.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

const routes: Routes = [
  {
    path: '',
    component: TrangChuComponent
  },
  {
    path: 'ThoiSu',
    component: ThoiSuComponent
  },
  {
    path: 'TamSu',
    component: TamSuComponent
  },
  {
    path: 'KinhDoanh',
    component: KinhDoanhComponent
  },
  {
    path: 'GiaiTri',
    component: GiaiTriComponent
  },
  {
    path: 'LamDep',
    component: LamDepComponent
  },
  {
    path: 'DangNhap',
    component: DangNhapComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
