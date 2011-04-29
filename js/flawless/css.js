(function() {
  define(function() {
    return {
      get: function(title) {
        var style;
        if (title == null) {
          title = 'flawless_css';
        }
        style = jQuery('#less\\:' + title)[0];
        if (style.styleSheet) {
          return style.styleSheet.cssText;
        } else {
          return style.firstChild.nodeValue;
        }
      },
      load: function(href, rel, title) {
        var link;
        if (rel == null) {
          rel = 'stylesheet';
        }
        if (title == null) {
          title = '';
        }
        link = document.createElement('link');
        link.href = href;
        link.type = 'text/css';
        link.rel = rel;
        link.title = title;
        jQuery('head:first').append(link);
        if (link.rel === 'stylesheet/less') {
          less.sheets.push(link);
          return less.refresh();
        }
      }
    };
  });
}).call(this);
