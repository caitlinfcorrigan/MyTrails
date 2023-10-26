# MyTrails
Crowd-sourcing reviews of hiking trails. Trails and reviews are available to the public, but users must login to create, edit, or delete their own reviews.

## Technologies Used
Lanaguages: HTML, CSS, Javascript
Frameworks: Node.js, Express
Data/API: MongoDB, GoogleMaps, OAuth (Google)
https://developers.google.com/maps/documentation/javascript

## Entity Relationship Diagram (ERD)
Users
* Name
* Email
* Review
Trails (trailheads?)
* Name
* Lat
* Long
* Address?
* Distance
Reviews
* Trail
* Reviewer
* Rating
* Review


## RESTful Routing Chart
| HTTP METHOD (_Verb_) | URL (_Nouns_)     | CRUD    | Response          | Notes        |
| -------------------- | ----------------- | ------- | ----------------- | ------------ |
| GET | `/index` | READ | Display Home page|  |
| POST | `/trails` | CREATE | Add a new `{ trail }` | Adds a new trail in Mongo & drops pin in map |
| POST | `/trails/:id/review` | CREATE | Add a new `{ review }` | Adds a new review to a trail |
| PUT | `/trails/:id/reviews/:id` | UPDATE | Modifies a `{ review }` | Redirects back to `/trails/:id` |
| GET | `/users` | READ | Return array of `[ user, user ]` | View all app users and stats? |
| GET | `/users/:id` | READ | Return `{ user }` | |



## Wireframes

## User Stories
* AAU, I want to create an account.
* AAU, I want to delete my account.
* AAU, I want to read reviews of trails.
* AAU, I want to rate trails I've hiked.
* AAU, I want to view all trails I've reviewed.
* AAU, I want to modify my reviews.
* AAU, I want to delete my reviews.

## MVP Goals
* Without logging in, users can:
    * View a list of trails
    * View a trail's reviews
* Users  login using Google OAuth.
* Users login to:
    * Write reviews
    * Edit reviews
    * Delete reviews


## Stretch Goals
* Use Google Map API to embed a map with pins for all trails (Home page)
* Display map with trail on /trails:id
* Sort reviews by date or rating.
* Highest rated trails

