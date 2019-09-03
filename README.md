# Storage JS
Storage JS is a simple JS library that simplifies using the localStorage API

# Usage

### Vanilla JS:

```
Storage.get(field); //takes a string (field name) and returns the value of the field
-> window.localStorage.getItem(field); 

Storage.save(field, value); //takes two strings and saves them in a name-value pair. JSON values should be strigified first.
-> window.localStorage.setItem(field, value);

Storage.remove(field); //deletes the contents of a field
-> window.localStorage.removeItem(field);

Storage.clear(); //takes no parameters. Clears all the content of the localStorage
-> window.localStorage.clear();
```
 
 If you have any suggestions or new features you'd love to be added shoot me a mail at: limbowe.me@gmail.com
