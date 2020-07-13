import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pictures',
    templateUrl: './pictures.component.html',
    styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
    artimages: string[] = [
        1, 2, 3].map((n) => `assets/art/dmgartphoto-art${n}.jpg`);

    photoimages: string[] = [
        1, 2, 3].map((n) => `assets/photo/dmgartphoto-photo${n}.jpg`);

    logoimages: string[] = [
        1].map((n) => `assets/logo/dmgartphoto-logo${n}.jpg`);

    iconsetmages: string[] = [ 
        1, 2, 3, 4].map((n) => `assets/iconset/dmgartphoto-icon${n}.jpg`);

    imageTextHeader = 'Photos';
    imageText = 'Text that will show in HTML output';
    images: string[] = [];
    imgStyle = 'width:175pt;opacity: 1;';
    divStyle = 'opacity: 0;';
    menuStyle = 'margin-top: 0%;background-color: white;opacity: 0.4;';
    activeMenu = 'photo';
    
    constructor() { }

    ngOnInit(): void {
        this.images = this.photoimages;
    }

    highLightLogo( highLight: boolean) {
        this.divStyle = highLight
            ? 'opacity: 0.7'
            : 'opacity: 0;';
        this.imgStyle = highLight
            ? 'width:175pt;opacity: 1;'
            : 'width:175pt;opacity: 0.8;';
    }

    highLightMenu( highLight: boolean) {
        this.menuStyle = highLight
            ? 'margin-top: 0%;opacity: 0.6;'
            : 'margin-top: 0%;opacity: 0.3';
    }

    isActive(folder: string) {
        return this.activeMenu === folder ? 'background-color: pink' : '';
    }

    show(folder: string) {
        this.activeMenu = folder;
        this.imageText =  'Text that will show in HTML output'
        switch (folder){
            case 'art':
                this.images = this.artimages;
                this.imageTextHeader = 'Artwork';
                this.imageText = this.imageText
                    + 'Text that will show in HTML output.';
                break;
            case 'photo':
                this.images = this.photoimages;
                this.imageTextHeader = 'Photos';
                this.imageText =  this.imageText
                    + 'Text that will show in HTML output';
                break;
            case 'icon':
                this.images = this.iconsetmages;
                this.imageTextHeader = 'Icon poster';
                this.imageText =  this.imageText
                    + 'Text that will show in HTML output';
                break;
            case 'logo':
                this.images = this.logoimages;
                this.imageTextHeader = 'Logos';
                this.imageText =  this.imageText
                    + 'Text that will show in HTML output';
                break;
            default :
                this.images = this.photoimages;
        }
    }

    stripImgPath(folder: string) {
        return this.images[0].replace(`assets/${this.activeMenu}/`, '');
    }
}
