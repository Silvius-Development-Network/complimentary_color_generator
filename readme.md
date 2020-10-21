# Complimentary color generator

A function that returns the complimentary color from a color passed in as an argument.

Only works with hsl (or hsla) colors.

Usage:
```HTML
<script src="https://unpkg.com/@silv21/complimentary_color_generator@1.0.0/index.js"></script>
```
```JavaScript
complimentaryColor("hsl(192, 10%, 20%)");
// returns "hsl(12,10%,20%)"
```

or:

```JavaScript
import complimentaryColor from "https://unpkg.com/@silv21/complimentary_color_generator@1.0.0/index.js";

complimentaryColor("hsl(56, 10%, 20%)");
// returns "hsl(236,10%,20%)"
```