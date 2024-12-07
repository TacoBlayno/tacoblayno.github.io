Terminal;
	v1.1.0
	By TacoBlayno

# Warning
This document and library was written for use on the SoloLearn platform so I could program real-time terminal programs on it. That platform had code limitations that were simply unworkable. That is why I made this. It is written for a browser, and it effictively bypasses the limitations so long as the programmer is willing to use JavaScript. I have put it on github merely for the convenience of not having to copy an paste it every time I want to use it, and I do not expect or advise it be used for other purposes.

=======
 About
=======
This program is a terminal Application Programming Interface (API) for JavaScript. It is meant to enable truly interactive terminal style programs in SoloLearn without user's having to make their own over an over again.

I ask that anyone who wishes to use this code includes a link to this code bit so other user's can be made aware of it and use it in their own code. Obviously, probabaly no one else will use this, but I figured it better to anticipate the possibility before it actually happens.

The motive for making this is that I enjoy making terminal style applications, and I also enjoy developing applocations on SoloLearn, but SoloLearn does not provide a live terminal, so I can't make terminal applications that expect an unpredictable amount of input (such as games).

==============
 Contributing
==============
Users can give recommendations for what I should include in the next update (it can be, but does not have to be, specific code). You can also report bugs in my bug comment (so as to keep them grouped together).

=======
 Goals
=======
This section lists gloas for future versions, including what bugs are planned on being fixed.

 Scalablility
==============
I plane on making it more scaleable by making styles changable via attributes and the style tag.

 Meathods
==========
read, readf, readchar
	I plan on making it so async functions calling and the `input` getter aren't necissary for recieving user input without blocking execution.
cursorPos
	I plan on implementing a meathod that changes the cursor position.
printAdd
	I plan on implementing a meathod that adds onto the last print (if new line has been written, it will throw an error). This is useful because it makes there less tags to travers.
printAddf
	I plan on implementing a formated version of `printAdd`.

 Getters
=========
input
	I plan on removing the `input` getter without removing functionality by enabling the reading functions to return the inputed values directly.

 Setters
=========

=========
 Version
=========
The current version can be seen at the top. This section is about understanding precicely what that version means.

It starts with 'v'. That simply stands for version.

The first number is what major version it is. In order to count as a major version, there must be significant enough changes that it isn't backwards compatible, or changes the underlying way that it works. This means that users may need to learn the whole thing over again (unliky), or may not know the difference after reading that documentation but not the code.

The second number is what minor version it is. In order to count as a minor version, it must be the same in how it works underneth, and it must be backwards compatible. This means some meathods may have been added, but could have been removed, and that a user who knew the code before should be able to look at it without noticing significant underlying changes in how it works and shouldn't have much more trouble contributing.

The third number is what bugfixed version it is. It only changes if all that was done is bug fixes. If adequate testing was done, it isn't unlikely that it will never change.

Creating tests, adding to tests,  and to the documentation are not considered new version worthy.

===============
 Documentation
===============

 Basics
========
Each `terminal-api` tag has its own API attached to it. That enables the possibility of multiple terminals in the same application at once without collision in a way that is easy to interact with.

 Meathods
==========
	read(terminating=13)
		The `read` meathod, as shown above, expects a terminating keycode as input. If no terminating value is provided, it defaults to 13 (`enter`). It changes what the `input` getter returns to what the user entered. It also returns a `Promise`.
	readf(terminating=13)
		The `readf` meathid does the same thing as the `read` mwathod with the addition of formating the user's entered string. When the user types "\n", JS recognizes it as a non-escaping sequence. The `readf` meathod turns it into an escaped sequence. For anything that starts with "\" and isn't a valid escape sequence, it leaves as is. If you would like to change that, empliment this functionality outside using the `read` meathod instead, or recommend it as an update.
	readchar()
		The `readchar` meathod changes the value returned by the `input` getter to a single character that the user entered. It returns a `Promise`.
	print(val)
		The `print` meathod expects a value as input. It outputs the of that value.
	printf(val)
		The `printf` meathod does the same thing as the `print` meathod with the addition that it formats it first. This means that '\n' (not to be mistaken for "\\n") will be interpreted as a line break.
	println(val)
		The `println` meathod does the same thing as the `print` meathod with the addition of putting a new line at the end.
	printlnf(val)
		The `printlnf` meathod does the same thing as the `printf` meathod with the addition of putting a new line at the end.
	ln()
		The `ln` meathod outputs a new line.
	unprint()
		The `unprint` meathod undoes the last print statement. I might make it also be able to unprint a certain numbered print statement.
	clear()
		The `clear` meathod clears the terminal. This makes everything in ther terminal purmenantly unaccessible, so save anything you need before you use this.
	defaultStyle()
		The `defaultStyle` meathod makes the elements style become the default. It does not effect what has been printed to the terminal.
	defaultText()
		The `defaultText` meathod changes the output style. It does not change the style of what has already been output to the terminal.
	default()
		The `default` meathod does what both `defaultStyle` and `defaultText` do. The name is likely change in a future major update because it is highlighted differently than the others, so it is probably a special meathod.
	
 Getters
=========
	version()
		The `version` getter returns the current version as a string.
	input
		Returns last read value.
	color
		Returns current `color` setting of text on the terminal.
	bg
		Returns the current `background` setting of text on the terminal.
	family
		Returns current `font-family` setting of text on the terminal.
	style
		Returns current `font-style` setting of text on the terminal.
	weight
		Returns current `font-weight` setting of text on the terminal.
	decoration
		Returns current `text-decoration` setting of text on the terminal.
	
 Setters
=========
	color
		Changes the `color` of text on the terminal.
	bg
		Changes the `background` of text on the terminal.
	family
		Changes the `font-family` of text on the terminal.
	style
		Changes the `font-style` of text on the terminal.
	weight
		Changes the `font-weight` of text on the terminal.
	decoration
		Changes the `text-decoration` of text on the terminal.

 Bug Fixes
===========
	Fixed read, readf, and readchar borders, which I mistook for outlines.
