jquery-paper
============

This is a [jQuery](http://jquery.com) plugin which adds support for
turning canvas elements into [Paper.js](http://paperjs.org) canvases.

The plugin can either be called with a paperscript file location:

```javascript
$('#canvas-id').paper('/path/to/paperscript/file.js');
```

or a function whose `this` object should be used to store handlers:

```javascript
$('#canvas-id').paper(function() {
  // draw dots 10px by 10px away from the click point
  this.onMouseDown = function(event) {
    var point = new paper.Point(10, 10)
    var circle = new paper.Path.Circle(event.point.add(point), 5);
    circle.fillColor = 'red';
  };
});
```

Note: When using a function, you must use the paper namespace for Paper.js
specific functions and constructors. You also must explicitly call these methods
instead of using overloaded operators:

* +: `add`
* -: `subtract`
* *: `multiply`
* /: `divide`
* %: `modulo`
* ==: `equals`
* - (prefix sign): `negate`

