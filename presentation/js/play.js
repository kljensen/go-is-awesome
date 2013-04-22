// Copyright 2012 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
(function() {
  "use strict";
  
  var runFunc;
  var count = 0;

  function getId() {
    return "code" + (count++);
  }

  function text(node) {
    // Check for an ACE editor

    // MUST have Ace installed
    var s = "";
    $(node).find('.ace_editor').each(function(){
      s += ace.edit(this).getValue();
    });
    console.log(s);
    return s;
    // node.parentElement.className.indexOf('ace_editor')

    // if (typeof(ace) != 'undefined' &&  != -1) {
    // };
    // // Otherwise do normal stuff
    // var s = "";
    // for (var i = 0; i < node.childNodes.length; i++) {
    //   var n = node.childNodes[i];
    //   if (n.nodeType === 1 && n.tagName === "PRE") {
    //     var innerText = n.innerText === undefined ? "textContent" : "innerText";
    //     s += n[innerText] + "\n";
    //     continue;
    //   }
    //   if (n.nodeType === 1 && n.tagName !== "BUTTON") {
    //     s += text(n);
    //   }
    // }
    // return s;
  }

  function init(code) {
    var id = getId();

    var output = document.createElement('div');
    var outpre = document.createElement('pre');
    var stopFunc;

    function onKill() {
      if (stopFunc) {
        stopFunc();
      }
    }

    function onRun() {
      onKill();
      outpre.innerHTML = "";
      output.style.display = "block";
      // run.style.display = "none";
      stopFunc = runFunc(text(code), outpre);
    }

    function onClose() {
      onKill();
      output.style.display = "none";
      // run.style.display = "inline-block";
    }

    var run = document.createElement('button');
    run.innerHTML = 'Run';
    run.className = 'run button';
    run.addEventListener("click", onRun, false);
    var run2 = document.createElement('button');
    run2.className = 'run button';
    run2.innerHTML = 'Run';
    run2.addEventListener("click", onRun, false);
    var kill = document.createElement('button');
    kill.className = 'kill button';
    kill.innerHTML = 'Kill';
    kill.addEventListener("click", onKill, false);
    var close = document.createElement('button');
    close.className = 'close button primary';
    close.innerHTML = 'Close';
    close.addEventListener("click", onClose, false);

    var button = document.createElement('div');
    button.classList.add('buttons');
    button.appendChild(run);
    // Hack to simulate insertAfter
    code.parentNode.insertBefore(button, code.nextSibling);

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    buttons.classList.add('button-group');
    buttons.appendChild(run2);
    buttons.appendChild(kill);
    buttons.appendChild(close);

    output.classList.add('output');
    output.appendChild(buttons);
    output.appendChild(outpre);
    output.style.display = "none";
    code.parentNode.insertBefore(output, button.nextSibling);
  }

  var play = document.querySelectorAll('div.playground');
  console.log(play.length);
  for (var i = 0; i < play.length; i++) {
    init(play[i]);

  }
  if (play.length > 0) {
    if (window.connectPlayground) {
      runFunc = window.connectPlayground("ws://" + window.location.host + "/socket");
    } else {
      // If this message is logged,
      // we have neglected to include socket.js or playground.js.
      console.log("No playground transport available.");
    }
  }
})();
