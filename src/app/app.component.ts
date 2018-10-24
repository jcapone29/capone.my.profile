import { Component, Input, Output } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage/index';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 1000,
    afterLoad: (a, i) => this.slideChange(a, i),
    onLeave: (i, ni, d) => this.slideLeave(i, ni, d),
    menu: '.menu',
    css3: true,
    anchors: [
      'main', 'skill-set', 'about-me'
    ],
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
  });


 @ViewChild('videoPlayer') videoplayer: any;


  public anchor = 0;
  public showNav = true;
  constructor(public fullpageService: MnFullpageService) { }

  slideChange(anchorLink: string, index: number) {
    this.anchor = index['index'];
  }

  slideLeave(index: number, nextIndex: number, direction: string) {
    this.showNav = nextIndex['isFirst'];

    this.showNav?
     this.videoplayer.nativeElement.play() : 
     this.videoplayer.nativeElement.pause();
    
  }
}
