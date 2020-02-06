## Importing an App

### HTML

- Make sure there are no function calls from the HTML document. 
- When we paste the HTML in the apps object, there must be NO SPACE between the last closing div and the backtick. Otherwise, the main script would not recognize the draggable-div's last child, and the adjacent HTML will not be removed after closing draggable-div.

### JavaScript

- The app's script has to be inside a function.
- This function's name must match the button id (check on index.html > nav)