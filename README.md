## Url shortcuts

Extension for Chrome for making url shortcuts

### Example

With this configuration set

```json
[
  {
    "key": "gcp",
    "url": "https://console.cloud.google.com/$1?project=$2"
  }
]
```

Wrinting this in the address bar

```
kk gcp arg2 arg2
```

Redirects to the url `https://console.cloud.google.com/arg1?project=arg2`

The configuration is set clicking in the extension icon.
This will open a text editor to add or remove url shortcuts
