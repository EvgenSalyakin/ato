# Meteor JS & React JS website "ATO"
(https://cards-ato.herokuapp.com)

## ATO PARTICIPANT SOCIAL CARD

Scope Of Work
Version 1.0 29.01.2017

### 1. General

1. Web site providing general info about ATO Participant Social Card (further - Card), accounting issued Сards, displaying interactive map of stores and marketplaces where Card may be used.
2. Site should be optimized for mobile, tablet, desktop and widescreen devices.
3. Site should be supported by latest 3 versions of Chrome, FF, Opera, Safari and Edge browsers, as well as Internet Explorer 10/11.
4. For mobile devices site should be supported by Android 4.0 and higher, iOS 7 and higher, Chrome and Safari mobile browsers (latest three versions)

### 2. The sitemap

1. Home Page
  1.1. Includes general information about the card (the visual presentation of the Card, how it is obtained, where it can be used)
  1.2. Login Prompt.
    1.2.1. Users may be logged in to the site using their mail address or Facebook/Google+ social accounts.
    1.2.2. “Remember me” option should be present to prevent users need to enter their login and password each time they are back.
    1.2.3. “Forgot password” option should provide user an input, where he may submit his email address, which will be used by system to send a recover email. When received such an email user will have to follow a “password recovery” link. Clicking on this link will open a New Password page, where user will enter and confirm his new password. After this is successfully submitted user may log in with his new password.
    1.3. Registration
        1.3.1. When registering a new account user is prompted to enter his email address, password and password confirmation.

2. User Profile
    2.1. Logged in users have access to their profile page.
    2.2. Profile page gives users an opportunity to edit their profile details. Editable fields are: first name/last name, address, profile image and password.
    2.3. If user has a Participant status, his profile also contains a card section. This section indicates his card status (active, not active, lost). Card status may be only set by site admin.

3. Map
    3.1. Map is interactive and shows pinned outlets where the Card may be used.
    3.2. Map is initialized relatively to current user location. If current location is not available relatively to the city where his card was issued.
    3.3. There is filtering by outlet within location, initialized above.


### 3. Users

1. User instances are separated by type. There are 5 types of users of the site: Common, Participant, Discount Provider, Site Admin and Super admin.
2. Common. This user is the one registered to the site, without any other user type assigned by admin. Admin confirms a role of the user. Common user has access to basic functionality of the site:
    2.1. Log in/out
    2.2. Edit profile info
    2.3. Surf the site, access to interactive map of discount outlets
3. Participant. This user type assigned by admin for users having issued Card. This type of user has access to Card section of his profile page. Card section displays his Card information.
4. Discount Provider. This user type assigned by site admin.
    4.1. This type of user has access to the list of Participants from his profile page.
    4.2. This type of user may have the list of outlets where his discount is provided. List of outlets is presented by both usual list and map with pins.  Such locations are added by site admin.

5. Site Admin. This user has access to site admin panel.
    5.1. Admin has access to the list of all users of the site.
        5.1.1. Admin may review user profile and make edits.
        5.1.2. Admin may create new user through admin panel.
        5.1.3. Admin may delete user. Confirmation pop-up should be shown.
        5.1.4. Admin may search for users by first name/last name and user type.
        5.1.5. Admin may deactivate users. If user is Participant, he will not be shown for Discount Provider in a list of Participants. If user is Discount Provider, then this user’s outlets will not be shown on a map.
    5.2. Admin has access to all issued cards.
        5.2.1. Admin may access to card details and make edits.
        5.2.2. Admin may assign card to one of Participants accounts.
        5.2.3. Admin may assign card to admin accounts.
        5.2.4. Admin may delete card. Confirmation pop-up should be shown.
    5.3. Admin has access to all discount locations.
        5.3.1. Admin may access location details and make edits.
        5.3.2. Admin may assign discount location to discount provider.
        5.3.3. Admin may delete location. Confirmation pop-up should be shown.

6. Super admin. This user has access to site admin panel and can assign Site Admins.

### 4. Entities

#### 1. User
- Name
- Surname
- E-mail
- Address
- Phone Number
- Password
- Activated
- Role
- Image

#### 2. Card
- Number
- Owner
- Date issued
- Status

#### 3. Outlet
- Owner
- Address

### 5.Design

Design should be light and use cover image of ATO Participant Social Card Facebook group https://www.facebook.com/groups/kartkaato/, should use Bootstrap 12-column grid as a basis

### 6. Other

Project will be covered by manual testing
