(function($, console) {
  var console = console || { log: function() {} },
      oldLog = console.log;

  function redirectOutput(output) {
    return function(obj) {
      output.append(obj.toString());
      oldLog.call(console, obj);
    }
  }

  function executeCode(evt) {
    var output = $(this).next('.codeoutput');

    if (output) {
      console.log = redirectOutput(output);
    }

    try {
      eval($(this).data('source').replace("&gt;", ">").replace("&lt;", "<"));
    } catch (error) {
      alert('Error: ' + error.message);
    }
  }

  $.fn.evaljs = function() {
    this.parent().delegate("a.eval", "click", executeCode);

    return this.html(function(idx, content) {
      $(this)
          .before('<a class="eval">Run</a>')
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
})(jQuery, console);
