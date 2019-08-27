# meowage
Dating App for Sophisticated Cats looking for a LTR

To start:
cd into ./backend and run ".mvnw spring-boot:run"
then,
cd into ./meowage/meowage and run "npm start"


App Description:  Check out the new dating alternative for cats looking for something serious, Meowage!  Move over cat hookup apps, the sophisticated, mature cat of tomorrow is looking to settle down, make a commitment, and have kittens.  Meowage brings together like-minded cats and asks them to be open and vulnerable in their profiles to find a match based on more than just looks!  Meowage:  You’ve only got 9 lives… make them count!

What technologies do I plan to use? (React, Spring Boot, PostgreSQL, Socket.io, reactstrap, custom CSS, stretch (Amazon S3 or some other image hosting platform))

User Stories:

	Login Page:
	
As a user, I see an option to enter my username and password when I am directed to the login page.

As a user, I see an option to sign up if I do not already have an account and I am redirected to a signup page when selected.

As a user, if I enter the correct username and password, I am redirected to the dashboard page.

As a user, if I enter an incorrect username or password, I receive feedback from the page and I am not redirected.

	Signup Page:
	
As a user, I see an option to choose a username and password.

As a user, I receive feedback from the page if the username or password are not accepted.

As a user, I am redirected to the Edit Profile View once my account is created.

	Edit Profile View:
	
As a user, I see an option to enter a personal narrative, my age, and my favorite toy into form fields.

As a user, I see an option to enter a link to a profile picture.

Stretch: As a user, I see an option to upload a photo from my computer.

As a user, I see an option to save my profile information to join the site (or update my information).

As a user, I can delete my profile and account completely from this view.

	Dashboard View:
	
As a user, I see an option to view my matches

As a user, I see a list of all users that are selectable.  If I select a user, I am redirected to a profile view of that user.

As a user, I see an option to edit my profile

STRETCH: As a user, I see an option to filter the results by age or favorite toy

	User Profile View:
	
As a user, I can view another user’s profile information and photo within this view.

As a user, if I have not matched with this other user, I have the option to select match

As a user, if I have already matched with this other user, I have the option to send the user a message.

STRETCH: As a user, if I have already matched with this other user, and they are also online, I can start a live chat with that user.

	Matches View:
	
As a user, I see a list of all matches that are selectable.  If I select a match, I am redirected to a profile view of that user.

Database Organization:

<img src="Screen Shot 2019-08-22 at 2.10.47 PM.png"/>

Component Tree:

<img src="Screen Shot 2019-08-26 at 10.30.45 AM.png"/>
