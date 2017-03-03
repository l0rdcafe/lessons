# Basic Tools Setup

## Get [Iterm][1]

- Run `sudo npm install -g tldr`, then try running `tldr 'command name'` for better `man` pages.
- You can pick themes and change the colors in **Iterm** by going to **preference > profile** and toying with the colors tab. Moreover, you can download preset color schemes from [here][5].
- Going back to the colors tab, you can load and import presets by browsing your scheme folder and importing .itermcolors files into **Iterm**.

## **Shell** upgrade to _zsh_ and **_prezto_**

- [Prezto][4], follow instructions. Godspeed!
- Go to `.zpreztorc` file and type the modules in the following order:

![a][f]

## Get [**brew**][2]

- Run `brew -v` to make sure **brew** isn't installed, if not [visit][2], and copy the installation command into _Iterm_.
- [Further reading][3] on **brew**

### Install _fasd_ with **brew**

- Run `brew install fasd`
- You can use the command `j` with a directory of your choice as an argument to navigate directories instantly
- A quick demo to show _fasd_ in action:

![k][l]

#### Improve **CSS** workflow by installing `browser-sync`

- Run `sudo npm install -g browser-sync`
- Whenever you want to use `browser-sync`, visit the project _directory_, and run `browser-sync start --server --files "~/style.css"`. Saving changes to that **CSS** file should update the page in the _browser_ seamlessly.
- Here's a quick demo:

![n][m]

- The command to initialize **browser-sync** is too long, so you should setup an _alias_. In my case and as in the above .gif, I used dev as the _alias_ name.

- _Aliases_ live in a `~/.zshrc` file, so do yourself a favor and type `alias dev='browser-sync start --server --files'` into the `~/.zshrc` file.

### Linters

- Check that you have **ruby** with `ruby -v`, if not go [here][6].

- If yes, install **scss_lint** with `gem install scss_lint`

## Atom plugins

- Run the following commands to install Atom plugins:

`apm install linter-csslint`

`apm install linter-htmlhint`

`apm install linter-jsonlint`

`apm install linter-scss-lint`

`apm install linter-markdown`

`apm install linter-write-good`

`apm install atom-beautify`

![w][o]

`apm install git-diff`

`apm install pigments`

`apm install file-type-icons`

`apm install open-recent`

`apm install linter-eslint`

Create `~/.eslintrc` and add the following to it:

`{ "extends": "airbnb/legacy", "rules": { "func-names": ["error", "never"] "no-console": 0 },"env": { "browser": true, "jquery": true,} }`

`apm install linter-stylelint`

Make sure the settings match the following:

![q][t]

![yes][s Run `npm get prefix` and input it in the **Global Installation Node** box in the settings

`apm install autoprefixer`

`apm install stylefmt`

[1]: https://iterm2.com
[2]: https://brew.sh/
[3]: https://github.com/jellyc0la/dotfiles/blob/master/Brewfile
[4]: https://github.com/sorin-ionescu/prezto
[5]: http://iterm2colorschemes.com/
[6]: https://www.ruby-lang.org/en/documentation/installation/
[f]: images/module.png
[l]: images/fasd.gif
[m]: images/browser-sync.gif
[o]: images/beautify.png
[s]: images/stylelint2.png
[t]: images/stylelint.png
