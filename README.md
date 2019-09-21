![Go is Awesome presentation screenshot](https://raw.github.com/kljensen/go-is-awesome/master/presentation/img/presentation-screenshot.png)

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

assuming that you're in the `server` directory.  The dependencies are
tracked with Go modules. 

## How the presentation works

The `code` blocks are turned into ACE editor areas, and wired up
to the Present websocket service using slightly altered js from that
project.  The `data-src` attribute of the `code` blocks is used to
load the correct Go example from the `examples` directory.

The organization of the js assets is a bit ungainly; it was put
together in haste.

## Resources

This code uses all of the following:

* [Reveal.js](http://lab.hakim.se/reveal-js/);
* the [Ace editor](http://ajaxorg.github.io/ace/);
* the "[Present](https://code.google.com/p/go/source/browse/?repo=talks#hg%2Fpresent)" WebSocket service from [talks.google.org](http://talks.golang.org/); and,
* ["GitHub" buttons](https://github.com/michenriksen/css3buttons).

Thanks much to the authors of those projects!

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
