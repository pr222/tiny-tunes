# Web Component The-Time

This component display the time.

To use:

## In HTML
Add the module using the script tag in the head-element:
```HTML
<script type="module" src="js/components/the-time/index.js"></script>
```

Add the element to the html:
```HTML
<the-time></the-time>
```

## In Javascript
Load the module
```Javascript
import './components/the-time/'
```
Create a component using the standard DOM-api:
```Javascript
const time = document.createElement('the-time')
```