# fit-viewport
adjust an element height to the height (or percentage of the height) of the viewport. Responsive and cross browser tested. The 


## Options

````javascript
fitViewport({
  el:         document.getElementById('fitVp'),   // Id (or any selector) of the target element
  percent:    50,                                 // percent of the viewport height the element will cover
  minWidth:   750,                                // minimum viewport width for the plugin to work
  minHeight:  600,                                // minimum height of the viewport for the plugin to work
  maxHeight:  1200,                               // maximum height of the viewport for the plugin to work
  setToMin:   false,                              // set the style to height or min-height
});
````
