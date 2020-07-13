## INSTRUCTIONS
A bit daunting for the newcumber this instruction is. But it should be possible to make it run with these instructions. 
Please leave a message on https://dmgartphoto.se/about if you think the instructions are wrong and I'll get back to you.
In item 9 HOW TO EDIT THE CODE I'll show what you can change and how.

To set this project up you need to install: 
* NPM (comes with node.js), for managing all the add on libraries as well as development web server
* Angular CLI, the framework that is used to create the code
* For code editing I used Visual Studio Code for its excellent feature set and ease of use - and its free
* Browser Firefox for good debugging capabilities and privacy
* Images where resized and renamed using the tool XnConvert, free and rock solid software
* Terminal window for most of the software installing, quick and precise
* Linux as OS, free and and extemily versatile
I like real open source and free software but you can of course also do the same on windows and mac (all the sofware is available and free there too) Instead of Firefox Chrome can be used and any code editor will do but it seems VS code is one of the best for angular projects.

## 1 INSTALL VS CODE
See https://code.visualstudio.com/ for instructions

## 2 NODE.JS / NPM
See download instructions on https://nodejs.org/en/download/ and install instructions on https://nodejs.org/en/download/package-manager/
Note - you need to do this step before installing angular cli

## 3 ANGULAR CLI
From a terminal prompt run the command: npm install -g @angular/cli
This will install the  cli on your machine.
An overview of cli commands can found here: https://angular.io/cli
(See also 8 AUTO CREATED INSTRUCTIONS BY ANGULAR CLI below)

## 4 GET THE SOURCE CODE
Create a folder for the project - anywhere on your harddrive will do.
Start a terminal window and cd into the created folder
Run: git Clone https://github.com/dgfreemem/imagehomepage.git
The code should be downloaded to a sub folder called imagehomepage

## 5 SET FIREFOX UP FOR DEBUGGING
Start firefox
Hit F12 to start developer tools section
Hit F1 to get to develooer tools settings
Find these two settings and make sure they are enabled:
* Enable browser chrome and add-on debugging toolboxes
* Enable remote debugging

## 6 SET UP IN VS CODE
In a terminal, cd into the imagehomepage folder created in step 4.
Run the command: npm install
After the install is finished, start visual studio code by typing the command (note the ending dot): code .
When in the program, select the menu Terminal and then submenu Terminal

In the files tree to the left in the program - locate the folder .vscode at the top and expand it
* If you use Chrome as a browser: rename the file chrome-launch.json to launch.json (select and press F2)
* If you use Firefox as a browser: rename the file firefox-launch.json to launch.json (select and press F2)

Install browser debug plugin 
* Select menu View -> Extensions
* Search for Debugger for Chrome or Debugger for Firefox depending on you choise above
* Click the small green install button to the rigth
* Also consider intalling the extension tslint (gives you honts on improving the code)

## 7 RUN THE PROJECT
To see the result in the browser you need to compile and run the project, like so:
* In the terminal terminal, compile the code by window at the bottom of VS code, type the command: ng serve
* Hit F5 to to start Firefox or Chrome in debug mode 
* The site should now show in the browser
* To stop the code from running, go back to the terminal window in VS code and press Ctrl + c


# 8 AUTO CREATED INSTRUCTIONS BY ANGULAR CLI 

# Dmgartphoto
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.11.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 9 HOW TO EDIT THE CODE
The code is based on that you have a bunch of files that you wnat to show. To make it work you need to rename them in an incremental order like, file1.jeg, file2.jpe ... fileNN.jpg. There can be no gap in the sequence so if you remove a file you need to rename the series again.

In the basic setup there are 5 folders: assets/art, assets/photo, assets/iconset, assets/code and assets/logo where you can put your files. A later exercise for you could be to att more folders and change the code accordingly. Looking in the examples you can see files named in sequence and the code reflects how many files there are. Lets examin the code that handles the images, open the file: src/app/pictures/pictures.component.ts.

Find the line with code:
photoimages: string[] = [
        1, 2, 3].map((n) => `assets/photo/dmgartphoto-photo${n}.jpg`);
This tells the code to look for files in assets/photo/ with names starting with dmgartphoto-photo and having the format jpg.
It also tells that there should be three files ending with the numbers 1, 2 and 3.

Now - lets say you have copies 56 files named them myartfile, myartfile2 ... myartfile56 in the assets/art folder. 
Change the code to look like this:

    artimages: string[] = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56].map((n) => `assets/art/myartfile2${n}.jpg`);
        

If you now run the code (See Item 7 RUN THE PROJECT) you should be able to flip through you photos in the picture section.
You can now to the same for:

    photoimages: string[] = [
        1, 2, 3].map((n) => `assets/photo/dmgartphoto-photo${n}.jpg`);
        
    logoimages: string[] = [
        1].map((n) => `assets/logo/dmgartphoto-logo${n}.jpg`);
        
    iconsetmages: string[] = [ 
        1, 2, 3, 4].map((n) => `assets/iconset/dmgartphoto-icon${n}.jpg`);



