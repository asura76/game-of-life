/*   	utilities.js
	Javascript file of functions generally useful, containing:
	 	addEvent (obj, type, fn) -- used to add an event listener, whether you're in IE or a real browser
		That's taken from Ullman (see below)

     	Will Briggs
     	CS 385
     	Spring 2013 */
     
'use strict'

function addEvent (obj, type, fn) 	//This function will be buried in a .js file somewhere
					//and not edited -- you can just use it
{
	//Taken from p. 276, Ullman, Modern Javascript:  Development and Design
	if (obj && obj.addEventListener) obj.addEventListener (type, fn, false); //normal browsers
	else if (obj && obj.attachEvent) obj.attachEvent ('on'+type, fn);	 //IE
}

