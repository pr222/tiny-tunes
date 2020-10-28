# Web Component Tiny-Tune

This component will play a small song for you.

To use:

## In HTML
Add the module using the script tag in the head-element:
```HTML
<script type="module" src="js/components/tiny-tune/index.js"></script>
```

Add the element to the html:
```HTML
<tiny-tune></tiny-tune>
```

## In Javascript
Load the module
```Javascript
import './components/tiny-tune/'
```
Create a component using the standard DOM-api:
```Javascript
const tune = document.createElement('tiny-tune')
```