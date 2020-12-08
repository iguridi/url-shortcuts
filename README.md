## Url shortcuts

Extension for Chrome for making url shortcuts

### Example

With this configuration set

```json
[
  {
    "key": "url_key",
    "url": "https://random-url/$1?project=$2"
  }
]
```

Wrinting this in the address bar

```
kk url_key arg2 arg2
```

Redirects to the url `https://random-url/arg1?project=arg2`

The configuration is set clicking in the extension icon.
This will open a text editor to add or remove url shortcuts

### Install

To install this extension

- Clone this repository
- Put `chrome://extensions/` in the chrome address bar and press enter
- Toggle `Developer mode` to `on`
- Click in `Load unpacked`
- Select this repository root folder
- Click in extension icon and add the example config
- Write `kk url_key arg2 arg2` in the address bar and press enter
- Voila, you will be redirected to another url

After this demostration you are ready to start adding your own shortcuts
