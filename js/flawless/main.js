(function() {
  require({
    baseUrl: FLAWLESS.baseUrl || 'js/'
  }, ['flawless/css', 'libs/jquery-1.5.2.min', 'libs/less-1.1.0.min'], function(css) {
    return css.load('css/development.less', 'stylesheet/less', 'flawless_css');
  });
}).call(this);
