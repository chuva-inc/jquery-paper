jquery-paper
============

This is a [jQuery](http://jquery.com jQuery) plugin which adds support for
turning canvas elements into [Paper.js](http://paperjs.org Paper.js) canvases.

The plugin can either be called with a paperscript file location:

    $('#canvas-id').paper('/path/to/paperscript/file.js');

or a function whose `this` object should be used to store handlers:

    $('#canvas-id').paper(function() {
      // draw dots where mouse clicks occur
      this.onMouseDown = function(event) {
        var circle = new paper.Path.Circle(event.point, 5);
        circle.fillColor = 'red';
      };
    });

Note: When using a function, you must use the paper namespace for Paper.js
specific functions and constructors.

