/*

The Pixelize jQuery Plugin
Copyright (c) 2014 Rob Glazebrook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


(function( $ ) {
  $.fn.pixelize = function(matrix) {
    var m = matrix || [[false]],
        pixels = '',
        longest = m.reduce(function(p,c) {return (c.length > p.length) ? c : p; }).length;
    for (y1=0;y1<m.length;y1++) {
      for (x1=0;x1<longest;x1++) {
        if(m[y1][x1]) pixels += (x1)+'em '+(y1)+'em '+m[y1][x1]+',';
      } 
    }
    this.css({
      'width': '1em',
      'height': '1em',
      'box-shadow': pixels.slice(0,-1),
      'background-color': m[0][0] || 'transparent'
    });
    return this;
  };
})( jQuery );