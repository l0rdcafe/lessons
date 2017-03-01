# Basic Tools Setup
* [Iterm][1]
* Run ````sudo npm install -g tldr````, then try running ````tldr 'command name'```` for better ````man```` pages.
## Get **brew**
* Run ````brew -v```` to make sure **brew** isn't installed, if not [visit][2], and copy the installation command into _Iterm_.
* [Further reading][3] on **brew**

### Install _fasd_ with **brew**
* Run ````brew install fasd````
* You can use the command ````j```` wit a directory of your choice as an argument to navigate directories more quickly
* A quick demo to show _fasd_ in action:
>![k][l]

### **Shell** upgrade to _zsh_ and **_prezto_**
* [Prezto][4], follow instructions. Godspeed!
* Go to ````.zpreztorc```` file and type the modules in the following order:
> ![a][f]

#### Improve **CSS** workflow by installing ````browser-sync````
* Run ````sudo npm install -g browser-sync````
* Whenever you want to use ````browser-sync````, visit the project _directory_, and run ````browser-sync start --server --files "~/style.css"````. Saving changes to that **CSS** file should update the page in the _browser_ seamlessly.
* Here's a quick demo:
>![n][m]



[1]:https://iterm2.com
[2]:https://brew.sh/
[3]:https://github.com/jellyc0la/dotfiles/blob/master/Brewfile
[4]:https://github.com/sorin-ionescu/prezto
[f]:images/module.png
[m]:images/browser-sync.gif
[l]:images/fasd.gif
