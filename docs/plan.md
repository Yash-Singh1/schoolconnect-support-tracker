# UI Plan

This document describes each and every state of the UI and how it should behave and be handled.

## Unauthenticated Pages

These UI states are shown when the user is not authenticated.

### Landing Unauthenticated

<img src="./assets/states/unauth_landing.png" alt="Landing Unauthenticated" style="max-height: 75vh; max-width: 50%; margin-top: 1rem;" />
The landing page for unauthenticated users displays all the possible roles and requires the user to chose one of them. Selecting admin on this page will redirect the user to the admin login page. Any other role will redirect the user to the role's respective signup page.

### Login Page

<img src="./assets/states/login.png" alt="Login Page" style="max-height: 75vh; max-width: 50%; margin-top: 1rem;" />

The login page features a Sign in with GitHub button. This button will redirect the user to the GitHub OAuth page. After the user is authenticated, the user will redirect back to the app and the backend will finish up the authentication process. Finally, the user will be redirected to the home page. The login page also features a link to the signup page for users who don't yet have an account.

### Signup Page (non-admin)

<img src="./assets/states/signup_nonadmin.png" alt="Signup Page (non-admin)" style="max-height: 50vh; margin-top: 1rem;" />

The signup page has two parts to it. The first part asks the user to select which school they are signing up for. The second part asks the user to Sign in with GitHub. This goes through a similar authentication process to that of the login page. Both parts feature a link to the login page for those who already have an account.

### Signup Page (admin)

<img src="./assets/states/signup_admin.png" alt="Signup Page (admin)" style="max-height: 50vh; margin-top: 1rem;" />

The signup page for administrators requests that the user contacts us for requesting a quote.

## Authenticated Pages

These pages are for users that are authenticated. The user will be redirected to the home page after they are authenticated.

### Home Page

<img src="./assets/states/home.png" alt="Home Page" style="max-height: 50vh; margin-top: 1rem;" />

The home page features the latest events and posts from the school and the user's classes. The user can also navigate to other pages through the bottom navigation bar. A social media integration is available on the home page, and an edit option for administrators.

### Social Media Integration

<img src="./assets/states/social_media.png" alt="Social Media" style="max-height: 50vh; margin-top: 1rem;" />

The social media integration is a page that allows the user to view the social media feeds of the school. The user can also navigate to other pages through the bottom navigation bar as in the home page.

### Social Media Modification

<img src="./assets/states/edit_social.png" alt="Edit Social Media" style="max-height: 50vh; margin-top: 1rem;" />

The social media modification page is only available to administrators. It allows the administrator to modify the social media feed of the school. The feed can be one of the following types: Facebook, Twitter, or Instagram.
