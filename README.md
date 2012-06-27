# cripple.js

cripple.js is a small script designed to cripple the Javascript capabilities of your browser, rendering akin to an IE8 (see <http://kangax.github.com/es5-compat-table/>) browser.  

To use it simply, include it in your test application / page prior to running application logic:

```html
<script src="https://raw.github.com/DamonOehlman/cripple.js/master/cripple.js"></script>
```

## Why write this?

Because I still keep getting caught using particular varieties of JS goodness and stupidly forgetting that I have to support IE8. Using this script prevents me having to fire up a clunky old laptop to check for JS errors. CSS + Page Layout, well that's another thing entirely.

## Fixing a Crippled Browser

Have a look at including [es5-shim](https://github.com/kriskowal/es5-shim) into your page or compiled application code.