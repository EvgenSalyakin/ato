# Meteor JS & React JS website "ATO"
(https://cards-ato.herokuapp.com)

## ATO PARTICIPANT SOCIAL CARD

Scope Of Work
Version 1.0 29.01.2017

### 1. General

Web site providing general info about ATO Participant Social Card (further - Card), accounting issued Сards, displaying interactive map of stores and marketplaces where Card may be used.
Site should be optimized for mobile, tablet, desktop and widescreen devices.
Site should be supported by latest 3 versions of Chrome, FF, Opera, Safari and Edge browsers, as well as Internet Explorer 10/11.
For mobile devices site should be supported by Android 4.0 and higher, iOS 7 and higher, Chrome and Safari mobile browsers (latest three versions)

### 2. The sitemap

Home Page
Includes general information about the card (the visual presentation of the Card, how it is obtained, where it can be used)
Login Prompt.
Users may be logged in to the site using their mail address or Facebook/Google+ social accounts.
“Remember me” option should be present to prevent users need to enter their login and password each time they are back.
“Forgot password” option should provide user an input, where he may submit his email address, which will be used by system to send a recover email. When received such an email user will have to follow a “password recovery” link. Clicking on this link will open a New Password page, where user will enter and confirm his new password. After this is successfully submitted user may log in with his new password.
Registration
When registering a new account user is prompted to enter his email address, password and password confirmation.
User Profile
Logged in users have access to their profile page.
Profile page gives users an opportunity to edit their profile details. Editable fields are: first name/last name, address, profile image and password.
If user has a Participant status, his profile also contains a card section. This section indicates his card status (active, not active, lost). Card status may be only set by site admin.
Map
Map is interactive and shows pinned outlets where the Card may be used.
Map is initialized relatively to current user location. If current location is not available relatively to the city where his card was issued.
There is filtering by outlet within location, initialized above.


### 3. Users

User instances are separated by type. There are 5 types of users of the site: Common, Participant, Discount Provider, Site Admin and Super admin.
Common. This user is the one registered to the site, without any other user type assigned by admin. Admin confirms a role of the user. Common user has access to basic functionality of the site:
Log in/out
Edit profile info
Surf the site, access to interactive map of discount outlets
Participant. This user type assigned by admin for users having issued Card. This type of user has access to Card section of his profile page. Card section displays his Card information.
Discount Provider. This user type assigned by site admin.
This type of user has access to the list of Participants from his profile page.
This type of user may have the list of outlets where his discount is provided. List of outlets is presented by both usual list and map with pins.  Such locations are added by site admin.
Site Admin. This user has access to site admin panel.
Admin has access to the list of all users of the site.
Admin may review user profile and make edits.
Admin may create new user through admin panel.
Admin may delete user. Confirmation pop-up should be shown.
Admin may search for users by first name/last name and user type.
Admin may deactivate users. If user is Participant, he will not be shown for Discount Provider in a list of Participants. If user is Discount Provider, then this user’s outlets will not be shown on a map.
Admin has access to all issued cards.
Admin may access to card details and make edits.
Admin may assign card to one of Participants accounts.
Admin may assign card to admin accounts.
Admin may delete card. Confirmation pop-up should be shown.
Admin has access to all discount locations.
Admin may access location details and make edits.
Admin may assign discount location to discount provider.
Admin may delete location. Confirmation pop-up should be shown.
Super admin. This user has access to site admin panel and can assign Site Admins.

### 4. Entities

User
Name
Surname
E-mail
Address
Phone Number
Password
Activated
Role
Image
Card
Number
Owner
Date issued
Status
Outlet
Owner
Address

### 5.Design

Design should be light and use cover image of ATO Participant Social Card Facebook group https://www.facebook.com/groups/kartkaato/, should use Bootstrap 12-column grid as a basis

### 6. Other

Project will be covered by manual testing
