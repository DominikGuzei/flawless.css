Flaw{LESS} Css Framework
=======

About
-----

Flaw{LESS} Css Framework takes a **completely new approach in webdesign** by providing a truly modular system with all the power of [LESS](http://lesscss.org)
at it's core but using the javascript variant [LESS.JS](http://github.com/cloudhead/less.js/) to be completely server agnostic.

This means that you can take advantage of **variables**, **function calls**, **mixins** and **operations / calculations** in your stylesheets, together with a **full stack html5 css framework** that leverages all those exciting new technologies!

How can i use this?
-----
Just download the complete package here and look at the **starter.html** and **starter.less** files. There is a lot of inline documentation to get you started. To fully understand how the framework works you should also take a look at [LESS](http://lesscss.org) and [LESS.JS](http://github.com/cloudhead/less.js/)

What exactly is the difference?
----

Most css frameworks provide a set of css files that make up the rules. You have to **include many things you might not need** for your custom layout and often it's not easy to change basic things like the number of columns in the grid system.

With **Flaw{LESS} Css** you begin with no rules at all.
You add every feature you need via **mixins** that the framework provides.

Here is an example:

    .grid_setup(80%, 8, 1.5em, center, 740px, 960px);

This sets up an **8 column grid** with **80% width** and **gaps of 1.5em** between columns. The grid will be **centered** and has a **min-width of 740px** and **max-width of 960px**.

All this was said in **one** "function call" that sets up the grid system exactly the way **YOU need it**. 

Now lets define some markup for the grid:

    <body>
    <section id="grid">
        <header></header>
        <article></article>
        <aside></aside>
        <footer></footer>
    </section>
    </body>

This is the markup we could use for a basic two column layout with header and footer. We don't have to put any classes about the layout or design here. This is pure semantics ok? 

Here is the css needed to build the complete grid:

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

The good thing about this approach is that **you are not locked** in any rules the framework made up. You can go ahead and change the complete layout anytime, you just have to change the few arguments in the .grid_setup() call or adjust the size of elements by changing the number of columns an element should span.

Cutting Edge Webdesign
----
Maybe you have heard of all the talk about **liquid**, **elastic** and **device responsible** websites. **You know what? You can do ALL of this with Flaw{LESS} Css!**

Above you already saw a **liquid** layout (width: 80%). But you can change your mind anytime! If you decide to go flexible just change the .grid_setup call to this:

	.grid_setup(90em, 8, 1.5em, 740px, 960px);
	
or if you are rigid you can also fix your layout width to 960px and the framework does the rest for you!

	.grid_setup(960px, 8, 1.5em);
	
### Responsive Layouts

Oh yeah, this is the holy grail! All over the world there are growing css frameworks like [Less Framework 2](http://lessframework.com/) that seem to offer you flexible layout possibilities.

Look at this:

	@media only screen and (max-width: 767px) and (min-width: 480px) {
	
		article {
			.grid_span(8); /* make the article span the full 8 columns */
		}
		aside {
			.grid_span(8); /* and also the sidebar gets full width */
		}
	}
	
This is the way you decide how your columns change in response to the screen size. See how simple that is? These rules just apply to the layout on screen sizes between 480px and 767px. And we said: "If the screen is that small, change the width of my columns so that they both span the full width." This results in an one column layout, perfect for small devices or screen sizes! 

Ok that's nice but I want REAL css on my Server!
----
Please just add **#compress** at the end of the url in your development browser and reload the page. This will give you an textbox at the end of your page where you will find the complete css code, compressed and optimized for production. Copy this into a "normal" css file and link it in your html. You have finished your first development cycle!

The first css framework with real ADDONS
----
The best thing about Flaw{LESS} Css Framework is it's modular system. Each core module is located in the "core" subfolder where you can find all components that make up the modules. Components are files that add small functionality to the big picture and together they form great systems like the grid. 

### My First Module

If you want to develop your own modules, this is really easy! Just create **first_module.less** put it into the addons folder and open the "install.less" file inside the addons folder. Add **@import "first_module.less";** at the end of the install.less file and you have successfully installed your first addon to Flaw{LESS} Css Framework!