pixelize
========

Turn a 2D JS array into CSS pixel art.

Pixelize is a super simple jQuery plugin that helps you easily create pixel art.

The plugin takes an array of arrays (a 2D array). Each inner array acts as a row. Each item in the inner array contains a color (hex, hsl, rgba, whatever) and acts as a single cell in that row. 

Example (in spreadsheet-esque fashion):

    [
      [A1, A2, A3],
      [B1, B2, B3],
      [C1, C2, C3]
    ]

To make a space transparent, just leave it empty, like so:

    [A1, ,A3] // Space A2 would be transparent

You don't need a space in empty cells, though I've found it helps me visualize the array as I'm writing it out.

To save on space, all rows do not have to have the same number of columns in them: you can stop each row at the last "filled" cell.

There is an [example of the plugin on CodePen](http://codepen.io/rglazebrook/pen/dAEoc)

Usage
-----

  1. Create an element with an ID or class in your page: `<div id="pixels"></div>`
  2. Include the pixelize plugin somewhere after you've loaded jQuery.
  3. Create an array for pixelize to use: `var my_array = [['#fff','#f00','#fff'],['#f00','#fff','#f00']]`
  4. Call pixelize: `$('#pixels').pixelize(my_array);`

Tips
----

  * Each "pixel" created is 1em square. To change the size of the pixels and resultant pixel art, just use CSS to set a font-size on the element being pixelized. In our example above, `#pixels { font-size: 5px; }` would result in 5px square pixels.
  * Pixels are drawn from the top-left to the bottom-right, so you'll need to add some margins to the element to ensure there's no overlap with things below or to the right.
  * You can set the colors you plan to use as variables with short names in order to simplify your 2D array. Example: `var r='#f00', g='#0f0', pixels = [[r,r,r],[r,g,r],[g,g,g]];`
