#Bus Mall
---
## User Stories (MVP)
* As a user, I want to view three randomly-generated, non-duplicate, images side-by-side on the webpage.
* As a user, I want to select one of the three images to produce 3 new, also non-duplicate, images that are not duplicates of any of the three images that immediately precede them.
* As a user, after 25 selections, I want to view the images I clicked with a corresponding tally of how many times they were selected.
* As a user, I want experience the website as organized, attractive, and easily-to-understand.

## Developer Stories
* As a developer, I want to track the clicks that each image receives by the user.
* As a developer, I want to track how many times an image is displayed to the user.
* As the developer, after 25 clicks, I want to turn off the event listener and produce the selected images with the number of clicks they received.

---

### Technical Plan
1. Create img directory with all images from "assets"
2. Set up html page with links to style.css and app.js
3. Create global var/ arrays to track images used and selected
3. Create img object in app.js
  * Track number of times produced and number of times clicked
4. Create instances of object for every image
5. Create function to randomly select and produce images
6. Test randomly generating images
7. Create event listener to produce new images after user clicks old images
8. Use "if" statement to stop product generating function after 25 clicks
