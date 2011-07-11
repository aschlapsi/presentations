(function($, console, undefined) {
  var console = console || { log: function() {} };

  function clearConsole() {
    this.find('.consoleOutput').text("");
  }

  $.fn.consolejs = function() {
    this.delegate("a.clear", "click", clearConsole);
    this.delegate("a.hide", "click", hideConsole);
    this.delegate("a.hide", "click", hideConsole);

    this.each(function(idx, el) {
      var log = console.log;

      console.log = function(obj) {
        $(el).find('.consoleOutput').append(obj.toString() + "<br>");
        log.call(console, obj);
      }
    });

    return this.html(function() {
      $(this).html('<div class="consolePanel active"><a href="#" class="hide">Hide</a> <a href="#" class="clear">Clear</a></div><div class="consolePanel inactive"><a href="#" class="show">Show</a><div class="consoleOutput"></div>');
    });
  }
})(jQuery, console);
