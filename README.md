# Bugo Font Awesome

Add icons to your Hugo Templates and Content. The code included here will display the Font Awesome bomb icon. https://fontawesome.com/icons/bomb?style=solid

## Installation

Before starting check the list below:

* Your Hugo project must use Hugo v0.58.3
* Your Hugo project must be in a git repository
* Your Huog project must be a Hugo Module

If your project isn't a Hugo Module.
```BASH
hugo mod init
```

Get this module.
```BASH
hugo mod get github.com/bugoio/bugo-font-awesome
```

Add it to your Hugo config file (shown in YAML).
```YAML
module:
  imports:
  - disable: false
    ignoreConfig: false
    path: github.com/bugoio/bugo-font-awesome
```

## Usage

### Icons in templates

Add Fontawesome icons to your templates using a partial. Just call the partial using the path "icons/<icon-name>".

```GO
{{ partial "icons/bomb" . }}
```

### Icons in content

Add Fontawesome icons to your markdown content using Hugo shortcodes. The shortcode below adds the Font Awesome bomb icon.

```GO
{{<icon bomb>}}
```


