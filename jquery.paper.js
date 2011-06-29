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
  $.fn.paper = function(url) {
    return this.each(function() {
      script = $('<script></script>').attr({
        type: 'text/paperscript',
        src: url,
        canvas: $(this).attr('id')
      }).appendTo($('head'));
      paper.load();
    });
  };
})(jQuery);

