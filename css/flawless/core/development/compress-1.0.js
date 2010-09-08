/* Flaw{LESS} Css Framework - css compression plugin */

function flawless_size(count) {
	var level = 0;

	while(count > 1024) {
		count = count/1024;
		level++;
	}

	// Round to 2 decimals
	count = Math.round(count*100)/100;

	level = (['', 'K', 'M', 'G', 'T'])[level];

	return '<strong>' + count + '</strong> ' + level + 'B';
}

function flawless_css() {
  var styleNode = document.getElementById("less:flawless_css");
  var css = '';
  if (styleNode.styleSheet) { // IE
      css = styleNode.styleSheet.cssText;
  } else {
      css = styleNode.firstChild.nodeValue;
  }
  css = compress(css, true, false);
  css = css.replace(/0{5,11}|1{5,11}|2{5,11}|3{5,11}|4{5,11}|5{5,11}|6{5,11}|7{5,11}|8{5,11}|9{5,11}/g, '');

  return css;
}

/* This script compresses or pretty prints valid CSS code */
/* Author: datube - Date: 2005-11-08 - Revision: 0.0.3-1 */

/* This script is free software; you can distribute it and/or modify it */
/* under the terms of the GNU GPL.  See the file COPYING. */

/* Copyright (C) 2005 datube */

/*
  Modified: $Author: datube $- $Date: 2005-11-08 13:29:00 +0100 (Tue, 08 Now 2005) $ - $Rev: 33 $ 
*/


/* --- compress --- */
// input: 
//  (str) sin = valid css
//  (bool) bs = single line
//  (bool) ic = include comment
// output:
//   (str) compressed css
function compress(sin, bs, ic,bsort){
var sout= '';
var comp = 0;
var re;
  sout = sin;

  bs=(typeof(bs)=='undefined')?false:bs;
  ic=(typeof(ic)=='undefined')?false:ic;  
  bsort=(typeof(bsort)=='undefined')?false:bsort;
      
  // I've not a lot of experience with Regular Expressions,
  // Any for additional add-ons.. please notify me!	
  
  //remove all multiple white-spaces
  sout = sout.replace(/\s+/g, ' ');
  
  //remove all -*/..-
  sout = sout.replace(/\*\/\s+/g, '*\/');
   
  //replace all occurences of - spaces + [ an { or an } ] + white-spaces - with "the character"
  sout = sout.replace(/\s{0,}({|})\s{0,}/g, '$1');

  //whipe out all spaces between css-names:.. and last value ; ..
  sout = sout.replace(/\s{0,}(:|;|,)\s{0,}/g, '$1');

  //remove all -;- before -}-
  sout=sout.replace(/(;})/g, '}');

  // shorthand notations
  sout = shorthand_notations(sout); 

  //remove all comments
  if(!ic) sout = sout.replace(/(\/\*).*?(\*\/)\s{0,}/g, '');
  
  //trim leading and trailing spaces (if any left)
  sout = sout.replace(/^\s+/g, '').replace(/\s+$/g, '');

  // sort css definitions (only if no comments included)
  if(!ic && bsort) sout = sortcss(sout);

  //and for the reading-ness of all.. replace -} or */- with - } and a line break -
  
  if(!bs){
    sout = sout.replace(/}/g, '}\n'); 
    sout=sout.replace(/\*\//g, '*\/\n');  
  }
  


  return sout;

}//--------------------------------------------------------------


function shorthand_notations(sin){
var sout = sin;

  /* Smart replaces for shorthand notations */
  // replace ' 0px|em|pt|cm|mm|in' by ' 0'
  sout = sout.replace(/([\s|:])0\w+/g, '$10');
    
  // replace default colorcoding with shorthand notation
  sout = sout.replace(/#(\S)\1(\S)\2(\S)\3([;|}|\s])/g, '#$1$2$3$4');
  
  return sout;
}//--------------------------------------------------------------


function uncompress(sin,style){
var sout= '';

  // first compress it; so we sure we have singe-line input
  sout = compress(sin, true, true); 

  /* pretty print */
  	
  // strip leading and trailing spaces (if any)
  sout = sout.replace(/\s+$/g, '');
  
  // lay(back)out comments (also strips spaces..)
  sout = sout.replace(/\*\/(\w{0,})/g, '*\/\n$1');
    
  switch (style) {
    case '0':
      // opening curly bracket on next line
      sout = sout.replace(/\{/g, '\n{ ');
      // new line before new rule (semicolon)
      sout = sout.replace(/([\w|\W]);([\w|\W])/g, '$1;\n  $2');
      //ugly hack to fix stuff
      sout = sout.replace(/\}/g, '; }\n\n');
      break;
    case '1':
      // replace curly bracket with  newline curly bracket newline
      sout = sout.replace(/\{/g, ' {\n  ');
      // new line before new rule (semicolon)
      sout = sout.replace(/([\w|\W]);([\w|\W])/g, '$1;\n  $2');
      //add an extra space between prop and val and after a comma
      sout = sout.replace(/(:|,)/g, '$1 ');
      //extract shorthand rgb-color notation
      sout = sout.replace(/#(\S)(\S)(\S)([;|}|\s])/g, '#$1$1$2$2$3$3$4');
      //ugly hack to fix stuff
      sout = sout.replace(/\}/g, ';\n}\n\n');
      break;
  }

  // add -  -  after -;..comment-line-
  sout = sout.replace(/;\s{0,}\/\*(.*?)\*\/\s{0,}/g,'; /\* $1 \*\/\n  ');  
  return sout;

}//------------------------------------------------------------

/* _c(ompose)f(ont)prop(erty) */
function _cfprop(grp){
var ret = s = '';
var k = c = 0;

//http://www.w3.org/TR/REC-CSS2/fonts.html#font-shorthand
//[[<'font-style'> || <'font-variant'> || <'font-weight'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ]

    //number of style settings
  for(k=1;k<grp[1].length;k++){c+=1*(grp[1][k]!='') };

  if ((c>1)&&(grp[1][4]!='')&&(grp[1][6]!='')){ // MUST have an font-size AND family <- 2005-11-08
    //compose shorthand property
    ret+= ((s=grp[1][1])!='')?' '+s:''; // style
    ret+= ((s=grp[1][2])!='')?' '+s:''; // variant
    ret+= ((s=grp[1][3])!='')?' '+s:''; // weight
    ret+= ((s=grp[1][4])!='')?' '+s:''; // size
    ret+=(((s=grp[1][5])!='')&&(grp[1][4]!=''))?'/'+s:' '; //height (requires font-size?)
    ret+= ((s=grp[1][6])!='')?' '+s:''; // family
    //remove unwanted white-spaces
    ret = 'font:'+ret.replace(/\s+/g, ' ').replace(/^\s+/g, '').replace(/\s+$/g, '');
  }else //or not..
    ret=grp[1][0]; //retrieved style settings
    
  return ret;
}

/* sort output by style definition names */
/* output is by [html][class][id] */
function sortcss(sin){
var sout = sin.substring(0,sin.length-1); //strip last -}- and split by -}-
var css = new Array();
var c='';var i=0;
  css[0] = sout.split('}'); //create array of styles
  css[1]= new Array(); css[2]= new Array(); css[3]= new Array();
  for(i=0;i<css[0].length;i++){
    c=(css[0][i]).charAt(0);
    if(c=='#')      { css[3][css[3].length] = css[0][i]; }  /* ID class styles */
    else{ if(c=='.'){ css[2][css[2].length] = css[0][i]; }  /* class styles    */
    else            { css[1][css[1].length] = css[0][i]; }} /* html tag styles */ 
  }
  //sort them seperately
  css[1].sort(); css[2].sort(); css[3].sort();
  sout = css[1].join('}')+((css[1].length!=0)?'}':'')+
         css[2].join('}')+((css[2].length!=0)?'}':'')+
         css[3].join('}')+((css[3].length!=0)?'}':''); 
         
  return  sout;
}