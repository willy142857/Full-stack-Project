import { Component, OnInit } from '@angular/core';

declare function getUrlVars(): any;
declare function containerResized(): any;
declare function restartBannerTimer(): any;
declare function killBannerTimer(): any;
declare function callingNewSlide(): any;
declare function createThumbs(): any;
declare function moveSelectedThumb(): any;
declare function moveThumbSliderToPosition(): any;
declare function createBullets(): any;
declare function createArrows(): any;
declare function createKeyboard(): any;
declare function swipeAction(): any;
declare function hideThumbs(): any;
declare function setBulPos(): any;
declare function setSize(): any;
declare function prepareSlides(): any;
declare function prepareOneSlideSlot(): any;
declare function prepareOneSlideBox(): any;
declare function removeSlots(): any;
declare function swapSlide(): any;
declare function swapSlideProgress(): any;
declare function letItFree(): any;
declare function onPlayerStateChange(): any;
declare function vimeoready_auto(): any;
declare function html5vidready(): any;
declare function animateTheCaptions(): any;
declare function get_browser(): any;
declare function calcCaptionResponsive(): any;
declare function removeTheCaptions(): any;
declare function endMoveCaption(): any;
declare function removeAllListeners(): any;
declare function countDown(): any;

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  items = [
    {
      img: 'assets/images/slider-temp.jpg',
      name: '計畫名稱',
      date: '18'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '1124',
      date: '8'
    },
    {
      img: 'assets/images/slider-temp.jpg',
      name: '滅東廠',
      date: '7'
    }
  ];
  constructor() { }

  ngOnInit() {
    getUrlVars();
    containerResized();
    restartBannerTimer();
    killBannerTimer();
    callingNewSlide();
    createThumbs();
    moveSelectedThumb();
    moveThumbSliderToPosition();
    createBullets();
    createArrows();
    createKeyboard();
    swipeAction();
    hideThumbs();
    setBulPos();
    setSize();
    prepareSlides();
    prepareOneSlideSlot();
    prepareOneSlideBox();
    removeSlots();
    swapSlide();
    swapSlideProgress();
    letItFree();
    onPlayerStateChange();
    vimeoready_auto();
    html5vidready();
    animateTheCaptions();
    get_browser();
    calcCaptionResponsive();
    removeTheCaptions();
    endMoveCaption();
    removeAllListeners();
    countDown();
  }
}
