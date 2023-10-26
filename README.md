# MyTrails
MyTrails is a full stack application that crowd-sources reviews of hiking trails in parks. Parks, trails, and reviews are available to the public. Authenticated users can add new parks, trails, and reviews. Users can update or delete their own reviews.

## Technologies Used
* Lanaguages: HTML, CSS, Javascript
* Frameworks: Node.js, Express, EJS
* Authentication: OAuth (Google)
* Data Model: MongoDB
* APIs: Mapbox API, OpenWeather API
https://docs.mapbox.com/mapbox-gl-js/api/ - 50K calls/month free
https://openweathermap.org/api - 1M calls/month free

## Entity Relationship Diagram (ERD)



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
- [] AAU, I want to create an account.
- [] AAU, I want to login/logout of my account.
- [] AAU, I want to view parks.
- [] AAU, I want to view trails in a park.
- [] AAU, I want to read reviews of a trail.
- [] AAU, I want to create a review of a trail.
- [] AAU, I want to view all trails I've reviewed.
- [] AAU, I want to update my reviews.
- [] AAU, I want to delete my reviews.

## MVP Goals
* Users  login using Google OAuth.
* Without logging in, users can:
    - [] View a list of parks
    - [] View a list of trails for a park
    - [] View a trail's reviews
* When users login, they can:
    - [] Create a new park
    - [] Create a new trail for a park
    - [] Create a review for a trail
    - [] View a list of reviews they wrote
    - [] Update a review they wrote
    - [] Delete a review they wrote


## Stretch Goals
* Embed Mapbox in the `/` page
    * Use API to display markers representing parks on the map
    * Allow users to click a marker and link to the park's page
* Display map with trail on /trails:id
* On a trail's page, sort reviews by date or rating

