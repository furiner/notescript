# NoteScript
A stupid script for an interactice MS-DOS inspired piano.

# Installation
Run this in the console of your browser, on [this video](https://www.youtube.com/watch?v=onwo-0934JM) specifically.
```js
var noteScriptLoad = document.createElement("script");
noteScriptLoad.type = "text/javascript";
noteScriptLoad.src = "https://cdn.jsdelivr.net/gh/nyalter/notescript/noteshift.js";
$("head").append(noteScriptLoad);
```

# Description
I wanted to "programmatically" utilize the keyboard, and use it to make a sort of textual script to work with it. So I made this.

# Example
```
0:100,1:100,2:100,3:100,4:100,5:100,6:100,7:100,8:100,9:100
```

To run it, use `playables = NoteScript.scriptParse("0:100,1:100,2:100,3:100,4:100,5:100,6:100,7:100,8:100,9:100");`.
Then use `NoteScript.playNotes();`.
