# spawnfest/spawnfest.github.io

This is the source code for <https://spawnfest.github.io/>.

## Development

Install `asdf` (https://asdf-vm.com/guide/getting-started.html#_3-install-asdf), then run:

```console
asdf plugin add ruby # Allows asdf to "control" Ruby
CFLAGS= asdf install # Installs asdf-controlled Ruby
bundle               # Installs stuff from Gemfile
jekyll serve
```
