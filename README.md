## IMAGEHOMEPAGE README
A bit daunting for the new cumber these instructions are. But it should be possible to make it run with these instructions. I have tested and, as developers usually says "It works on my machine"

## 1. SOFTWARE USED 
To set this project up you need to install: 
- Linux as OS, free and and extremely reliable and versatile
- *NPM* (comes with *node.js*), for managing all the add on libraries as well as development web server
- *Angular cli*, the commands for the *angular framework* that is used to create the code
- For code editing I use *Visual Studio Code* for its excellent feature set, plugins and ease of use.
- My Browser preference is *Firefox* for its good debugging capabilities and privacy/security options.
- Images where resized and renamed using the tool *XnConvert*, free and rock solid software.
- My image library is manage by *XnViepMP*, fast rendering of thumbnails and very good picture management.
- A *terminal window* for most of the software installing, its quick and precise

I really like *Linux*, *open source* and *free software* but you can of course also do the same on *Windows* and *Mac* (all but the software is available and free there too). Instead of *Firefox*,  Google *Chrome* can be used. Other *code editor/ide's* will do but I have never worked in a better one than VS code.

To follow the instructions you need as a minimum to install Visual Studio Code, Node.js/NPM and Angular cli.

## 2. SUPPORT
All the code and the following description is supplied as is. The descriptions are based on that you don't add or remove any functionality. If you want to enhance the app, just go ahead, but then you are  on you own. 

Feel free though to contact me on https://dmgartphoto.se/about if you have problems, I'll try to answer if I can. Don't forget to supply a replay email.

Please also leave a message on https://dmgartphoto.se/about if you think the instructions are wrong or unclear and I'll try to correct it.


## 2. INSTALL VS CODE
See https://code.visualstudio.com/ for instructions


## 3. INSTALL NODE.JS / NPM
See download instructions on https://nodejs.org/en/download/ and install instructions on https://nodejs.org/en/download/package-manager/
Note - you need to do this step before installing angular cli


## 4. INSTALL ANGULAR CLI
From a terminal prompt run the command: npm install -g @angular/cli
This will install the cli on your machine.
An overview of *Angular cli* commands can found here: https://angular.io/cli
See also **8 AUTO CREATED INSTRUCTIONS BY ANGULAR CLI** below.


## 5. GET THE SOURCE CODE IN THIS REPOSITORY
The code must be copied to you local hard disk:
- Create a folder for the project - anywhere on your hard drive will do - like **c:\codeprojects**.
- Start a *terminal* window and **cd** into the created folder
- Type **git Clone https://github.com/dgfreemem/imagehomepage.git**
- The code should be downloaded to a sub folder called *imagehomepage* (like *c:\codeprojects\imagehomepage*)


## 6. SET FIREFOX UP FOR DEBUGGING
To run the code and find errors you need to debug it using av browser. Enabled it in Firefox:
- Start *Firefox*
- Hit **F12** to start developer tools *section*
- Hit **F1** to get to developer tools *settings*
- Find these two settings and make sure they are enabled:
  - *Enable browser chrome and add-on debugging toolboxes*
  - *Enable remote debugging*


## 7. SET UP IN VS CODE
In a linux/windows/mac terminal window:
- **cd** into the *imagehomepage* folder created in step 4.
- Run the command: **npm install**. If you want to be anonymous answer **N** on question *Would you like to share anonymous usage data...*
- After the install is finished, start *Visual Studio Code* and open the project by typing **code .** (note the dot)
- In the files tree to the left in the program - locate the folder *.vscode* at the top and expand it.
  - If you use *Chrome* as a browser: rename the file **chrome-launch.json** to **launch.json** 
  - If you use *Firefox* as a browser: rename the file **firefox-launch.json** to **launch.json**

(To rename, select the filename and press *F2*.)

Install browser debug plugin: 
* Select menu *View -> Extensions*
* Search for **Debugger for Firefox** or **Debugger for Chrome** depending on you choice above
* Click the small *green install button* 
* Also consider installing the extension *tslint* (gives you hints on code improvement/readability)

## 8. RUN THE PROJECT
To see the result in the browser you need to compile and run the project, like so:
- Select the menu *Terminal* and then sub menu *Terminal*. This will open a terminal window within Visual Studio Code.
- In the terminal terminal, compile the code by window at the bottom of VS code, type the command: **ng serve**. This might take a long time the first time you run it..
* Hit **F5** to to start *Firefox* or *Chrome* in debug mode 
* The site should now show in the browser
* To stop the code from running, go back to the terminal window in Visual Studio Code and press **ctrl + c**

## 9. AUTO CREATED INSTRUCTIONS BY ANGULAR CLI 
# Dmgartphoto
This project was generated with *Angular cli, (https://github.com/angular/angular-cli)* version 9.1.11.

#### 9.1 Development server
Type **ng serve** to compile the code and start the development  server. Navigate to *http://localhost:4200/*. 

#### 9.2 Code scaffolding
Type **ng generate component component-name** to generate a new component. You can also use **ng generate directive|pipe|service|class|guard|interface|enum|module**.

#### 9.3 Build
Type **ng build** to build the project. The build artifacts will be stored in the **dist/** directory. Use the **--prod** flag for a production build.

#### 9.4  Further help
To get more help on the *Angular cli* Type **ng help** or go check out the *Angular cli README(https://github.com/angular/angular-cli/blob/master/README.md)*.


## 10 HOW TO EDIT THE CODE
The code is based on that you have a bunch of files that you want to show. To make it work you need to rename them in an incremental order like, *file1.jpg, file2.jpg ... fileNN.jpg*. There can be no gap in the sequence so if you remove a file you need to rename the series again. See tools used at the top.

#### *10.1 BASICS*
The app consists of a lot of files and to use it you need to add you own image files.
In the basic setup there are 4 image folders in *src/assets: photo, iconset and logo* where you can put your image files. 

The *src/assets* folder itself contains the *background.jpg* (site background), *imagesimage.jpg* (home page menu) and *logoimage.jpg* (displayed in several places. Replace them with your own files with the same names (and similar heigth/width).

There is also 2 display pages - *Home* and *Pictures*.
As you can see each of the *src/app/home* and *src/app/pictures* folders concists of a *.css, .html and .ts file*. Each described in 9.2 - 9.4.

The folder structure and setup is part of Angular. If you are new to programming and want to know more there is a lot on the internet of course. 
Maybe the e-book *https://www.syncfusion.com/ebooks/angular-succinctly* can be useful.

#### *10.2 CSS STYLE SHEET CODE*
The code in css file determines the look and feel of the page. If you want to change it a good reference to start to learn css is *https://www.w3schools.com/css/default.asp*. On *w3schools* you also find a ton of other useful web technique tips.

#### *10.3 HTML LAYOUT CODE*
The code in html file determines the look and feel of the page. If you want to change it a good reference to start to learn html is *https://www.w3schools.com/html*. On *w3schools* you also find a ton of other useful web technique tips.

Things you can change - and should - is where it says: 
- *YOUR COMPANY*
- *YOUR TEXT*
- *YOUR XXX MENU TEXT*
- *YOUREXTERNALLINK*
- *YOUR LINK TEXT*

#### *9.4 TS CODE*
The ts file is where the logic that drives screen updates happen. It’s written in the *typescript language*.

##### *9.4.1 VARIABLES*
The content that is displayed is what you call dynamicly changed depending on what action the user takes. This is done by using so called varliables in code that ar then rendered in the htlm. 
- *artimages, photoimages, logoimages, iconsetmages*: see 9.2.2
- *imageTextHeader*: Found in pictures html looking like {{imageTextHeader}}. Changing the code **mageTextHeader = 'Photos';** to **imageTextHeader = 'My Photos';** will display *My Photos* on the page.

- *imageText*: Found in pictures html looking like {{imageText}}.Changing the code **imageText = 'Text that will show in HTML output';** to **imageText = 'My image text';** will display *My image text* on the page.

- *images*: string[] = []; Found in pictures html looking like {{images}}. Used to hold the list of current selected images of type selected by user(photo, art ...).

- *imgStyle*: dynamically changes the transparency of the logo displayed on top of displayed images.

- *divStyle*: same as *imgStyle*.

- *menuStyle*: Dynamically changes the transparency of the menu at the top of the page

- *activeMenu*: Keeps track of the image type selected by the user.

The style in *imgStyle*, *divStyle* and *menuStyle* can be edited. For example, replace: **return this.activeMenu === folder ? 'background-color: pink' : '';** with **return this.activeMenu === folder ? 'background-color: blue' : '';** the get a blue tint for the selected menu item.

##### *9.4.2 IMAGE LISTINGS*
Find this line with code in the file **src/app/pictures/pictures.component.ts**:

    photoimages: string[] = [
        1, 2, 3].map((n) => `assets/photo/dmgartphoto-code${n}.png`);

This tells the code to look for files in the photo folder where file names starts with *dmgartphoto-photo* and having the format *jpg*.
It also tells that there should be three files: *dmgartphoto-code1.jpg*, *dmgartphoto-code2.jpg* and *dmgartphoto-code3.jpg* (note the numbering 1, 2 and 3). *{n}* will be replaced by the sequence number at runtime.

Now - lets say you have 56 files named *myartfile, myartfile2 ... myartfile56* and you put them in the *assets/art* folder. 
Edit and save the code to look like this:

    artimages: string[] = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56].map((n) => `assets/art/myartfile2${n}.jpg`);

If you now run the code (See Item **7 RUN THE PROJECT**) you should be able to flip through your photos in the picture section.

You can now do the same for *photos*, *logos* and *icons*:

    photoimages: string[] = [
        1, 2, 3].map((n) => `assets/photo/dmgartphoto-photo${n}.jpg`);
        
    logoimages: string[] = [
        1].map((n) => `assets/logo/dmgartphoto-logo${n}.jpg`);
        
    iconsetmages: string[] = [ 
        1, 2, 3, 4].map((n) => `assets/iconset/dmgartphoto-icon${n}.jpg`);


##### *9.4.3 DELIVER YOUR CODE*
When  When you are done editing and testing your changes you might want to deliver it. Any server hosting where you can add a site with static content (like neocities.org) will do.
1. In the visual studio code terminal window, type **ng build –prod**. This will compile the code and images to a package that can be copied to the server host.
2. When build is finished you will find a folder called *dist* in the folder tree.
3. Copy upload the files and folders to the server. How the upload is done varies, check with you hosting supplier.
4. Navigate to your site url, for example *dmgartphoto.neocities.org*.


#### *NEXT STEP*
A later exercise for you could be to add/remove folders and change the code accordingly. Looking at the code it should not be too hard to do, just be thorough. 
GOOD LUCK!
