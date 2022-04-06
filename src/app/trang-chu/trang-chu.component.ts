import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

export interface isSlide{
  id: number;
  src: string;
  alt: string;
}

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit {

  Slide: isSlide[] = [
    {
      id: 1,
      src: 'assets/banner1.jpg',
      alt: 'banner1'
    },
    {
      id: 2,
      src: 'assets/banner2.jpg',
      alt: 'banner2'
    },
    {
      id: 3,
      src: 'assets/banner3.jpg',
      alt: 'banner3'
    },
    {
      id: 4,
      src: 'assets/banner4.jpg',
      alt: 'banner4'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  TrangChu: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoWidth: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    navSpeed: 50,
    navText: ["<", ">"],
    responsive:{
      0:{
        items: 1
      },
      180:{
        items: 2
      },
      100:{
        items: 3
      },
      30:{
        items: 4
      }
    },
    nav: true,
  }
}
