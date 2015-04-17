# Website Performance Optimization

This website is for the Front-End Web Developer nanodegree project where we have to optimize the given website to at
least 90 seconds or more.

## Instructions
After cloning the project, please do the following:

- Install [Node.js](https://nodejs.org/)

- After installing Node.js, go to the root directory for this project using the command prompt.

- Next, install the following:

    - __grunt__: `npm install grunt --save-dev`
    
    - __grunt-contrib-copy__: `npm install grunt-contrib-copy --save-dev`
    
    - __grunt-contrib-cssmin__: `npm install grunt-contrib-cssmin --save-dev`
    
    - __grunt-contrib-htmlmin__: `npm install grunt-contrib-htmlmin --save-dev`
    
    - __grunt-contrib-uglify__: `npm install grunt-contrib-uglify --save-dev`
    
    - __grunt-processhtml__: `npm install grunt-processhtml --save-dev`
    
    - __grunt-usemin__: `npm install grunt-usemin --save-dev`
    
    - __grunt-contrib-concat__: `npm install grunt-contrib-concat --save-dev`

- Last, do `grunt build` and make sure there is no error.

## Root files (index.html, project-2048.html, project-mobile.html, project-webperf)
- For `style.css`, I've minimized it and put it in the `<style>` tags.
- Minimized both `print.css` and `perfmatters.js`.
- In `index.html`, added and reduced the size for `pizzeria3.jpg` to increase optimization for the image.
- Deleted extra empty lines.

## src/views (Pizzeria files)
- `pizza.html`:
    - I've deleted extra empty lines.
    - Added and reduced the size of `pizzeria2.jpg` to increase optimization.
    - Minified both `boostrap-grid.css` and `style.css` into one css file which is `site.tidy.min.css`
    - Minified `main.js`.
- `main.js`
    - Deleted several empty lines.
    - In both `getAdj(x)` and `getNoun(y)`, under `default`, I've returned the entire list instead of initiazing them as variables and return them.
    - In `generator(adj, noun)`, I've returned the last statement in that function instead of initializing the variable and returning it.
    - From `selectRandomMeat` to `ingredientItemizer`, I've returned all the statements instead of initializing the variable and returning them.
    - In `makeRandomPizza`, I've initialized `i, j, and k` globally in that function instead of calling them inside each of those for loops.
    - In `changePizzaSizes(size)`, I've placed `querySelectorAll` since it was slowing down inside the for loop.
    - In `updatePositions()`, the `scrollup` variable where its using the `scrollTop` property to calculate the new positions for the pizzas.
    - In `document.addEventListener('DOMContentLoaded', function()`, the move elements will be stored in the `items` array to reduce the
    amount of call coming from `querySelector` method by calling it outside of its loop.
    
## Results
 Tested on PageSpeed Insights and got approximately 91/100 speed on both Mobile and Desktop and 100/100 on User Experience.
 However, for __Optimize images__, both `pizzeria3.jpg` and `profilepic.jpg` are causing some issues of the lag of speed while 
 __Leverage browser caching__ does not have an expiration for `print.min.css`, `profilepic.jpg`, `perfmatters.min.js`, and `pizzeria3.jpg `.
 
 __Note__: The server response time sometimes reduce the speed to ~0.25 seconds. Restart `ngrok` and analyze it again so there won't be any
  speed reduction.
 
 
## Resources
- [Udacity - Website Performance Optimization](https://www.udacity.com/course/ud884)
- [Element.scrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)
- [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/webperformance/usertiming/)
- [Igvita](https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html)
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Grunt](http://gruntjs.com/)
- [Meet Grunt: The Build Tool for JavaScript](http://code.tutsplus.com/tutorials/meet-grunt-the-build-tool-for-javascript--net-24856)
- [Grunt JS Tutorial From Beginner to Ninja](http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja/)
- [HTML DOM querySelector() Method](http://www.w3schools.com/jsref/met_document_queryselector.asp)
- [HTML DOM querySelectorAll() Method](http://www.w3schools.com/jsref/met_element_queryselectorall.asp)
- Stack Overflow
