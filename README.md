# ff-google-mail-checker

A Firefox WebExtension version of Google Mail Checker: <https://chrome.google.com/webstore/detail/google-mail-checker/mihcahmgecmbnbcchbopgniflfhgnkff>.

## Development Environment Setup

Requires a Node.js installation on your machine.

### WSL

1. Install the latest Firefox Nightly for Linux.

    1. The current latest version (at the time of writing) is [v88.0a1](https://ftp.mozilla.org/pub/firefox/nightly/2021/03/2021-03-21-09-39-03-mozilla-central/).
    2. Install dependencies for v88.0a1: `sudo apt install libstdc++5 libgtk-3-0`
    3. Extract the Firefox Nightly zip to `/opt`, such that the Firefox binary is located at `/opt/firefox/firefox`. You can change this another location on your machine, but make sure to point Firefox binary in the start script (in `package.json`) to the new location.

2. Setup X11 forwarding: <https://stackoverflow.com/a/61110604>

3. Clone the repo and run `yarn` to install dependencies. Run `yarn run start:firefox`.

### Windows

1. Open Firefox and navigate to [about:debugging](about:debugging).
2. Click "This Firefox" on the left menu and click "Load Temporary Add-on...".
3. In the window that opens, find and open `manifest.json`.

## Build From Source

1. Clone the repo and run `yarn` to install dependencies.
2. Run `yarn run build`. The build artifact will appear in `web-ext-artifacts` as a `.zip` file.
