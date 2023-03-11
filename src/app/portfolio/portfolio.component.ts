import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  imagesList: string[] = [
    '../../assets/imges/cabin.png',
    '../../assets/imges/cake.png',
    '../../assets/imges/circus.png',
    '../../assets/imges/game.png',
    '../../assets/imges/safe.png',
    '../../assets/imges/submarine.png',
  ];
  clickedImageSrc: string = '';
  getImgSrc(e: any) {
    try {
      this.clickedImageSrc = e.path[1].childNodes[0].childNodes[0].src;
    } catch (exception) {
      this.clickedImageSrc =
        e.path[1].offsetParent.childNodes[0].childNodes[0].src;
    } }

  constructor() { }
  ngOnInit(): void {
  }

}
