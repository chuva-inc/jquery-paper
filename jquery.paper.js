/**
 * jquery-paper
 *
 * This is a jquery plugin for running paperscript files dynamically in the
 * context of any canvas.
 *
 * Usage:
 *
 *     $('#canvas-id').paper('path/to/paperscript/file.js');
 */

(function($) {
  var count = 0;
  $.fn.paper = function(url) {
    return this.each(function() {
      var script = $('<script></script>').attr({
        src: url,
        canvas: $(this).attr('id')
      });
      var scope = new paper.PaperScope($(this).attr('id') || url
                                       || 'jquery-paper-' + (count++));
      script.attr('id', scope.id);
      paper.evaluate(script.get(0), scope);
    });
  };
})(jQuery);

