

// call PROFILE.show() to show the profileViewer

var FLAWLESS_PROFILE = {

  init : function(bool) {
  
  	// define what objects, constructors and functions you want to profile
  	// documentation here: http://developer.yahoo.com/yui/profiler/
  	
  	YAHOO.tool.Profiler.registerObject("jQuery", jQuery, true);
  	
  	// the following would profile all methods within constructor's prototype
    // YAHOO.tool.Profiler.registerConstructor("Person");
  	
    // the following would profile the global function sayHi
    // YAHOO.tool.Profiler.registerFunction("sayHi", window); 
    
    // if true is passed into init(), F9 will bring up the profiler
    if (bool){
      $(document).keyup(function(e){
        if (e.keyCode === 120){ 
          FLAWLESS_PROFILE.show(); 
          $(document).unbind('keyup',arguments.callee); 
        }
      })
    }
  },
  
  //When the showProfile button is clicked, use YUI Loader to get all required
  //dependencies and then show the profile:
  show : function() {
	
	YAHOO.util.Dom.addClass(document.body, 'yui-skin-sam');

	//instantiate ProfilerViewer with desired options:
	var pv = new YAHOO.widget.ProfilerViewer("", {
		visible: true, //expand the viewer mmediately after instantiation
		showChart: true,
	  //	base:"../../build/",
	  swfUrl: FLAWLESS_DIRECTORY + "core/development/profiling/charts.swf"
	});
  }
};
FLAWLESS_PROFILE.init(true);