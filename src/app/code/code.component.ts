import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
    images: string[] = [1, 2, 3, 4, 5, 6].map((n) => `assets/code/dmgartphoto-code${n}.png`);

    imgStyle = 'width:175pt;opacity: 1;';
    divStyle = 'opacity: 0;';
    menuStyle = 'margin-top: 0%;background-color: white;opacity: 0.4;';
    activeMenu = 'photo';
    constructor() { }

    ngOnInit(): void {
    }

    highLightLogo( highLight: boolean) {
        this.divStyle = highLight
            ? 'opacity: 0.7'
            : 'opacity: 0;';
        this.imgStyle = highLight
            ? 'width:175pt;opacity: 1;'
            : 'width:175pt;opacity: 0.8;';
    }

    stripImgPath(folder: string) {
        return this.images[0].replace(`assets/${this.activeMenu}/`, '');
    }

    highLightMenu( highLight: boolean) {
        this.menuStyle = highLight
            ? 'margin-top: 0%;opacity: 0.6;'
            : 'margin-top: 0%;opacity: 0.3';
    }
}
