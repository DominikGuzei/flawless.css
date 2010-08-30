Flaw{LESS} Css Framework
=======


----------


About
-----

Flaw{LESS} Css Framework takes a completely new approach in webdesign by providing a truly modular system with all the power of [LESS](http://lesscss.org)
at it's core but using the javascript variant [LESS.JS](http://github.com/cloudhead/less.js/) to be completely server agnostic.

This means that you can take advantage of **variables**, **function calls** and **mixins** in your stylesheets, together with a **full stack html5 css framework** that leverages all those exciting new technologies!

---

What exactly is the difference?
----

Most css frameworks provide a set of css files that make up the rules. You have to **include many things you might not need** for your custom layout and often it's not easy to change basic things like the number of columns in the grid system.

With **Flaw{LESS} Css** you begin with no rules at all.
You add every feature you need via **mixins** that framework the provides.

Here is an example:

    .grid_setup(80%, 8, 1.5em, center, 740px, 960px)

This sets up a 8 column grid with 80% width and gaps between elements of 1.5em each. The grid will be centered and has a min-width of 740px and max-width of 960px.

This was **one** "function call" that sets up the grid system exactly the way **YOU need it**. 

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
        .grid_span(8);
     }