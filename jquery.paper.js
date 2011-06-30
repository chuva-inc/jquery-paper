/**
 * jquery-paper
 *
 * This is a jquery plugin for running paperscript files or functions in the
 * context of any canvas.
 *
 * The plugin takes either the path to a paperscript file, or a function as its
 * argument.
 *
 */
(function($) {
  var count = 0;
  $.fn.paper = function(arg) {
    if ($.isFunction(arg)) {
      // apply function to context
      return this.each(function() {
        // code more or less copied from paper.js
        var scope = new paper.PaperScope('jPaperScope-' + (count++));
        var view = scope.view;
        var tool = scope.tool = new paper.Tool(null, scope);
        var res = {};
        paper = scope;
        new paper.Project();
        new paper.View(this).activate();
        with (scope) {
          (function() {
            var handlers = ['onEditOptions', 'onSelect', 'onDeselect',
                            'onReselect', 'onMouseDown', 'onMouseUp',
                            'onMouseDown', 'onMouseUp', 'onMouseDrag',
                            'onMouseMove', 'onKeyDown', 'onKeyUp']
            // call the functiion with the result object
            arg.call(res);
            if (tool) {
              $.each(handlers, function(i, key) {
                // copy handlers from result object to the tool
                tool[key] = res[key];
              });
            }
            if (view) {
              // code from paperjs, copies more handlers
              view.onResize = res.onResize;
              if (res.onFrame) {
                view.setOnFrame(res.onFrame);
              } else {
                view.draw()
              }
            }
          }).call(scope);
        }
      });
    }
    // run script at url
    return this.each(function() {
      // add script to head
      $('<script></script>').attr({
        id: 'jPaperScope-' + (count++),
        type: 'text/paperscript',
        src: arg,
        canvas: $(this).attr('id')
      }).appendTo($('head'));
      // reload paperscript files
      paper.load();
    });
  };
})(jQuery);

