#
# Flaw{LESS} Framework
#
# Initialization
#
# @author  Dominik Guzei
# @website wizzart.at
# @author  Isaac Johnston
# @website superstruct.co
# @author  Tony Rogers
# @website github.com/Zearin
#

require
  baseUrl: FLAWLESS.baseUrl || 'js/'
, [
  'flawless/css'
  'libs/jquery-1.5.2.min'
  'libs/less-1.0.41.min'
], (css) ->
  # Append the development stylesheet here instead of loading via markup in
  # index.html to mimimize differences for development vs production
  css.load 'css/development.less', 'stylesheet/less', 'flawless_css'
