(function($, undefined) {
  function executeCode(evt) {
    var source = $(this).data('source').replace("&gt;", ">").replace("&lt;", "<");

    try {
      CoffeeScript.run(source);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  }

  function compileCode(evt) {
    var source = $(this).data('source').replace("&gt;", ">").replace("&lt;", "<"),
        output = $(this).parent().find(".compiled-js"),
        compiledJs = "";

    try {
      compiledJs = CoffeeScript.compile(source, { bare: true });
    } catch (error) {
      alert('Error: ' + error.message);
    }

    $(output).text(compiledJs);
  }

  $.fn.evalcoffee = function() {
    this.parent().delegate("a.eval", "click", executeCode);
    this.parent().delegate("a.compile", "click", compileCode);

    return this.html(function(idx, content) {
      $(this)
          .before('<a class="eval" href="#">Run</a>')
          .prev()
          .data('source', content)
          .before('<a class="compile" href="#">Compile</a> ')
          .prev()
          .data('source', content);
    });
  }

  $.fn.trimContent = function() {
    this.html(function(idx, content) {
      var match = content.match(/\r?\n?([ \t]*)/);

      if (match && match[1]) {
        content = content.replace(new RegExp('^' + match[1], 'gm'), '');
      }

      return $.trim(content);
    });
  }
})(jQuery);
