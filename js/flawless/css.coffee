define ->
  {
    # Retrieve the compiled CSS for the given title
    get: (title = 'flawless_css') ->
      style = jQuery('#less\\:' + title)[0]
      if style.styleSheet # IE
        return style.styleSheet.cssText
      else
        return style.firstChild.nodeValue

    # Inject a stylesheet into the document
    load: (href, rel = 'stylesheet', title = '') ->
      # Create the link element for this stylesheet
      link = document.createElement 'link'
      link.href = href
      link.type = 'text/css'
      link.rel = rel
      link.title = title

      # Inject the link element into the document head
      jQuery('head:first').append link

      # If the stylesheet is a LESS file coax Less.js into compiling it
      if link.rel == 'stylesheet/less'
        less.sheets.push link
        less.refresh()
  }
