![Flaw{LESS} CSS Framework Logo](http://wizzart.at/wp-content/uploads/flawless_css_framework.jpg)

Flaw{LESS} CSS Framework takes a **completely new approach in webdesign** by providing a truly modular system with all the power of [LESS](http://lesscss.org)
at its core but using the Javascript variant [LESS.JS](http://github.com/cloudhead/less.js) to be completely server agnostic.

This means that you can take advantage of **variables**, **function calls**, **mixins** and **operations / calculations** in your stylesheets, together with a **full stack HTML5 CSS framework** that leverages all those exciting new technologies!

New Features:
----
### Flawless UI Menu 
New to version 1.2 is the **jQuery interface** which allows to quickly access the **compressed CSS code**, enable **YUI profiling from html5boilerplate** and see the **HTML5 outline** of your document with the help of [HTML5 Outliner](http://code.google.com/p/h5o)! You can find the **menu opener at bottom left in the browser window**—click the button to open the dialog! You can disable the menu in the index.html near the bottom.

### HTML5 Outliner
The outliner shows your current document’s structure with the new HTML5 algorithm to structur documents. This is important to write semantic websites! Just click on the links to highlight the various sections of your document.

Best Features:
-----

### View your changes without refreshing the browser!
During development you can keep your browser window open beside your code and as you make changes and save your .less file in your coding environment—**the browser refreshes to show you the changed layout!** Thanks to Dmitry Fadeyev who pointed that out in his great [article about Less.js](http://fadeyev.net/2010/06/19/lessjs-will-obsolete-CSS)

### CSS3 like a PIE!
Yes you can use **CSS3 today even in IE6**—the integrated [PIE script](http://css3pie.com) makes it possible to render **rounded corners**, **background gradients** and **drop shadows** with Internet Explorer! The best part is, you don’t have to mess with the settings. It’s just one “function call”: 
	
	.css3_border_radius(10px, 10px, 0, 0);

### Go Cutting edge with HTML5 today!
**Completely based on [HTML5 Boilerplate](http://html5boilerplate.com)** to provide the most professional starting point available for HTML5 today together with other great projects like [Modernizr](http://www.modernizr.com) which are included! This way you can write HTML5 today in all browsers!

### Media Queries and Responsive Layouts
Modern browsers and most mobile versions understand Media Queries, so you can take advance of **responsive layouts** that change their appearance in reaction to smaller screen sizes! Things like [Less Framework](http://lessframework.com) are extremely easy to achieve! (look at the CSS/style.less for an example)

### Content First, Layout on Top!
Pure semantic HTML is one of the most important goals I had in mind when designing the Flaw{LESS} CSS Framework, so you can completely divide markup and presentation! If you need to change the position of columns there are nice helpers like:

	// first column in markup -> shift it 2 columns to the right
	#my-content {
		.grid_span(4); // this is 4 columns wide
		.grid_shift_right(2); // shift 2 cols -> width of sidebar
	}
	
	// Second columns in markup -> the sidebar
	#my-sidebar {
		.grid_span(2); // this is 2 columns wide
		.grid_shift_left(4); // swap position with content (4 cols)
	}
	
This way you can swap column positions—just with CSS!

### Smallest Framework Ever!
You start with **0 kb** and just add exactly what your website need! **A basic grid is smaller than 1 KB!!**

How can I use this?
-----
Just download the complete package here and look at the **index.HTML** and **CSS/style.less** files. There is a lot of inline documentation to get you started. To fully understand how the framework works you should also take a look at [LESS](http://lesscss.org) and [LESS.JS](http://github.com/cloudhead/less.js)

What exactly is the difference?
----

Most CSS frameworks provide a set of CSS files that make up the rules. You have to **include many things you might not need** for your custom layout and often it’s not easy to change basic things like the number of columns in the grid system.

With **Flaw{LESS} CSS** you begin with no rules at all.
You add every feature you need via **mixins** that the framework provides.

Here is an example:

    .grid_setup(80%, 8, 1.5em, center, 740px, 960px);

This sets up an **8 column grid** with **80% width** and **gaps of 1.5em** between columns. The grid will be **centered** and has a **min-width of 740px** and **max-width of 960px**. This works cross browser down to IE6 and you don’t have to exhaust yourself again to find out how to make IE6 listen for min-width or max-width. All the dirty stuff is already in the framework which provides elegant abstractions to the wilderness of CSS today!

All this was said in **one** “function call” that sets up the grid system exactly the way **you need it**. 

Now lets define some markup for the grid:

    <body>
    <section id="grid">
        <header></header>
        <article></article>
        <aside></aside>
        <footer></footer>
    </section>
    </body>

This is the markup we could use for a basic two column layout with header and footer. We don’t have to put any classes about the layout or design here. This is pure semantics ok? 

Here is the CSS needed to build the complete grid:

     #grid {
        .grid(); /* make this element the grid */
     }

     header {
        .grid_span(8); /* span all 8 columns */
     }

     article {
        .grid_span(6); /* the content 6 columns wide */
     }

     aside {
        .grid_span(2); /* sidebar fills the rest */
     }

     footer {
        .grid_span(8); /* footer has full span of 8 cols */
     }

The good thing about this approach is that **you are not locked** in any rules the framework made up. You can go ahead and change the complete layout anytime, you just have to change the few arguments in the `.grid_setup()` call or adjust the size of elements by changing the number of columns an element should span.

Cutting Edge Webdesign
----
Maybe you have heard of all the talk about **liquid**, **elastic** and **device responsible** websites. **You know what? You can do all this with Flaw{LESS} CSS!**

Above you already saw a **liquid** layout `(width: 80%)`. But you can change your mind anytime! If you decide to go flexible just change the `.grid_setup` call to this:

	.grid_setup(90em, 8, 1.5em, 740px, 960px);
	
or if you are rigid you can also fix your layout width to 960px and the framework does the rest for you!

	.grid_setup(960px, 8, 1.5em);
	
### Responsive Layouts

Oh yeah—this is the holy grail!  All over the world, there are CSS frameworks growing like [Less Framework 4](http://lessframework.com) that seem to offer you flexible layout possibilities.

Look at this:

	@media only screen and (max-width: 767px) and (min-width: 480px) {
	
		article {
			.grid_span(8); /* make the article span the full 8 columns */
		}
		aside {
			.grid_span(8); /* and also the sidebar gets full width */
		}
	}
	
This is the way you decide how your columns change in response to the screen size. See how simple that is? These rules just apply to the layout on screen sizes between 480px and 767px. And we said: “If the screen is that small, change the width of my columns so that they both span the full width.” This results in a one column layout that’s perfect for small devices or screen sizes! 

Okay, that’s nice…but I want *real* CSS on my server!
----
Please just add **#compress** at the end of the URL in your development browser and reload the page. This will give you an textbox at the end of your page where you will find the complete CSS code, compressed and optimized for production. Copy this into a “normal” CSS file and link it in your HTML. You have finished your first development cycle!

The first CSS framework with real ADDONS
----
The best thing about Flaw{LESS} CSS Framework is its modular system. Each core module is located in the “core” subfolder where you can find all components that make up the modules. Components are files that add small functionality to the big picture and together they form great systems like the grid. 

### Want to make your own module?

It’s really easy:

# Create **first_module.less** inside /addons
# Open "install.less" (also in /addons)
# Add `@import "first_module.less";` at the end of the install.less

You’ve just installed your first Flaw{LESS} module!

Visions for the Future
----

If anyone is interested in collaborating: I’m planing a website (ala jQuery’s) where people can upload custom modules along with some docs or advice. I think this could become **the** next big movement toward pleasant webdesign, just as jQuery opened up Javascript to new audiences.

And of course, I’d love to see you in the team for making the framework better!

Kind regards, 

Dominik Guzei

Contact
----

Drop me a line at my blog [Wizzart](http://wizzart.at) or tweet me a msg [at Twitter](http://twitter.com/DominikGuzei)