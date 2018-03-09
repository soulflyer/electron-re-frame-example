# Electron and re-frame sample project

This is a very basic clojurescript hello-world project that uses electron and re-frame. It also includes re-frame-10x and cider integration. It is heavily based on [Descjop](https://github.com/karad/lein_template_descjop) And you should probably check that out for further information. Here is a shortened version of the setup instructions (mac biased) 
## setup

```
$ npm install -g grunt-cli
$ lein descjop-init
$ lein descjop-externs
$ lein descjop-once
$ lein descjop-figwheel    # or C-c M-j from emacs
$ ./electron/Electron.app/Contents/MacOS/Electron app/dev
```
## Use
Fire it up. It says hello. Check out the [re-frame documentation](https://github.com/Day8/re-frame) for where to go next. Also check out how to use [re-frame-10x](https://github.com/Day8/re-frame-10x).

## License


 THE TEA-WARE LICENSE" (Revision 42):
 
Iain Wood wrote this file.  You can do whatever you want with this stuff. If we meet some day, and you think this stuff is worth it, you can buy me a cup of tea in return.
    
(Credit to Poul-Henning Kamp and his beer-ware licence.)
