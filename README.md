Go is Awesome
=============

This is a presentation about [Go](http://golang.org) on which
I am working.  It uses [Reveal.js](http://lab.hakim.se/reveal-js/),
the [Ace editor](http://ajaxorg.github.io/ace/),
and the "[Present](https://code.google.com/p/go/source/browse/?repo=talks#hg%2Fpresent)" WebSocket service
from [talks.google.org](http://talks.golang.org/).  (All three are 
available under a BSD-style license, and code from each is 
bundled herein.)  These components together allow you
to edit and run Go code in the presentation/browser.

## Running the presentation

You can run the presentation merely by opening `index.html`; however,
if you'd like to run the Go code examples in the browser, you'll need
to run the `server/main.go` code as such

	go run main.go ../presentation

assuming that you're in the `server` directory.  Of course, to build
`main.go` you'll likely first have to run

	go get

in order to fetch dependencies.

## Resources

This code uses all of the following:

* [Reveal.js](http://lab.hakim.se/reveal-js/);
* the [Ace editor](http://ajaxorg.github.io/ace/);
* the "[Present](https://code.google.com/p/go/source/browse/?repo=talks#hg%2Fpresent)" WebSocket service from [talks.google.org](http://talks.golang.org/); and,
* ["GitHub" buttons](https://github.com/michenriksen/css3buttons).

Thanks much to the authors of those projects!

## License

Those works here created by me
are available under a
[Creative Commons Attribution](http://creativecommons.org/licenses/by/3.0/)
license in the case of text and an MIT license, shown below, in the
case of code.

Copyright (c) 2013 Kyle L. Jensen (kljensen@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.