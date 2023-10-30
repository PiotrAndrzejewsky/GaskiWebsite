# Gąski website | Reservation system

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Usage](#usage)
* [Prerequisites](#prerequisites)
* [Setup](#setup)

## General info
A website presenting an offer of housing by the sea along with a reservation system. Equipped with CMS and support for multiple languages.
The project is pictured under this link https://github.com/PiotrAndrzejewsky/GaskiWebsite.
	
## Technologies
The project is created with:
* angular/core: "16.1.3" <img style="width:20px" src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png" />
* rxjs: "7.8.0" <img style="width:20px" src="https://rxjs.dev/assets/images/logos/Rx_Logo_S.png"/>
* typescript: "4.9.4"  <img style="width:20px" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" />
* bootstrap: "5.3.0" <img style="width:23px" src="https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png" />
* ngx-cookie-service: "15.0.0" 
* angular/material: "15.2.9" <img style="width:20px" src="https://material.angular.io/assets/img/angular-material-logo.svg" />
* Git: "2.39.1" <img style="width:20px" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" />
* AWS: <img style="width:25px" src="https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-desktop-en-white_59x35.png" />

## Features
## Features
- [x] Displaying offer
  - [x] Site banner
    - [x] Scroll down button
    - [x] Display of title 
  - [x] Displaying rooms
    - [x] image slider
  - [x] Displaying facilities
    - [x] Interactive content caruzel
  - [x] On scroll animations
  - [x] Responsive design 
- [x] Displaying room site
  - [x] PC design
  - [x] Mobile design
- [x] Website navigation
  - [x] Mobile design
  - [x] PC design
  - [x] Scroll down buttons
  - [x] Animated
- [x] Reservation order system
  - [x] interactive calendar
    - [x] Six week period's
    - [x] Days out of the month
    - [x] Edge case handling
    - [x] User's manual
  - [x] Reservation summary
    - [x] Contact form
      - [x] Form validation
  - [x] Thank you site
- [x] Management system
  - [x] Login system
  - [x] Reservation management system
    - [x] Display of upcoming bookings
    - [x] Acceptance of reservations
    - [x] Rejection of reservations
    - [x] Edition of reservations
    - [x] Manual addition of reservations
  - [ ] Content management system
    - [ ] Rooms menegement
      - [ ] Display of currently presented rooms
      - [ ] Adding a new room 
      - [ ] Room deletion
    - [ ] Facilities management
      - [ ] Display of currently presented facilities
      - [ ] Adding a new facility
      - [ ] Deletion of facility
## Usage 
<img  src="./images/login_page.png"/> 
<img  src="./images/dashboard_day.png"/>
<img  src="./images/dashboard_custom_range.png"/> 
<img  src="./images/add_order_dialog.png"/> 
<img  src="./images/add_order_type_dialog.png"/>

## Prerequisites
 Make sure you have Node.js and npm (Node Package Manager) installed on your computer.<br>
You can download them from the official website: https://nodejs.org/
## Setup
1. Install Angular CLI:
```
npm install -g @angular/cli
```
2. Clone the Project:
```
git clone https://github.com/PiotrAndrzejewsky/GaskiWebsite
```
3. Navigate to Project Directory:
```
cd GaskiWebsite
```
4. Install Dependencies:
```
npm install
```
5. Serve the Application:
```
ng serve
```
 Then navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
 
 Note that the application will not work properly without running GaskiWEbsiteBackend.

