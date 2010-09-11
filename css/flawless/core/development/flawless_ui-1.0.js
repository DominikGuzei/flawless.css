/* Flaw{LESS} Css Framework
 * Menu Component with plugins to help you with development of great websites
 */
 
jQuery(document).ready(function($) {
	
	if(flawless.config("FLAWLESS_MENU")) {
		var getHTML5Outline = function() {
			var outliner = HTML5Outline(document.getElementsByTagName("body")[0]);
			return outliner.asHTML(true);
		}
		
		var dialogClosed = function(event, ui) {
			// also uncheck opener
			$('#flawless-ui-opener').attr("checked", false);
		}
		
		var initPlugins = function() {
			var css = flawless_css();
			$("#flawless-compress").html('<p><strong>Flaw{LESS} Css Framework</strong> - generated and compressed css (~' + flawless_size(css.length) + ')</p><textarea style="font-size: 60%; width: 99%; height: 300px">'+css+'</textarea>');
			
			$("#flawless-outline").html(getHTML5Outline());
			
			/* -------- PLUGIN SETUPS ------------ */
		
			// outliner highlight on click
			$("#flawless-outline a").each(function(i, elem) {
				$(this).click(function() {
					$($(this).attr("href")).effect("highlight", {}, 2000);
					return false; // prevent default
				});
			});
			
			/* profile html */
			$('#flawless-profile').html('<input type="checkbox" id="flawless-profile-opener" /> Show yui profiling! (or use F9 as shortcut anytime)');
			
			// profiling call
			$('#flawless-profile-opener').click(function() {
				if($(this).attr("checked")) {
					FLAWLESS_PROFILE.show();
				}
			});
		}
		
		var buildTabs = function() {
			
			var tabs = '<div id="flawless-ui-tabs"><ul>'
			
			// ---------- ADD TAB-HEADS HERE -----------
			tabs += '<li><a href="#flawless-compress">Compress</a></li>';
			tabs += '<li><a href="#flawless-profile">Yui Profiling</a></li>';
			tabs += '<li><a href="#flawless-outline">Html5 Outline</a></li>';
			
			tabs += '</ul>';
			
			// ---------- ADD TAB-CONTENT HERE ----------
			
			/* compress tab */
			tabs += '<div id="flawless-compress"></div>';
			
			/* yui profiling tab */
			tabs += '<div id="flawless-profile"></div>';
			
			/* html 5 outliner tab */
			tabs += '<div id="flawless-outline"></div>';
			
			tabs += '</div>'; // close ui tabs
			return tabs;
		}
		
		$("body").append("<div style='background: white; line-height:30px; width: 100px; position: fixed; bottom: 0; left: 0; border: 1px solid #ccc'><input type='checkbox' id='flawless-ui-opener' /><a id='flawless-ui-opener-link' href='#'>Flaw{less}</a></div>");
		
		// generate the menu dialog
		var $dialog = $('<div id="flawless-ui-menu"></div>')
			.html(buildTabs())
			.dialog({
				autoOpen: false, // change this to true while developing new plugins
				title: 'Flaw{LESS} Menu',
				width: 800,
				close: dialogClosed
			});
		
		var firstOpen = false;
		
		// toggle menu with opener
		$('#flawless-ui-opener').click(function() {
			if($(this).attr("checked")) {
				if(!firstOpen) {
					initPlugins();
					firstOpen = true;	
				}
				$dialog.dialog('open');
			} else {
				$dialog.dialog('close');	
			}
		});
		// same with link
		$('#flawless-ui-opener-link').click(function() {
			var check = $("#flawless-ui-opener");
			if(check.attr("checked")) {
				$dialog.dialog('close');
				check.attr("checked" , false);
			} else {
				$dialog.dialog('open');
				if(!firstOpen) {
					initPlugins();
					firstOpen = true;	
				}	
				check.attr("checked" , true);
			}
			return false; // prevent default link action
		});
		
		// init tabs
		$("#flawless-ui-tabs").tabs();
		
	}
});