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

The Bugo templates will render your icon will a wrapper around it.

```HTML
<span class="template bugo-icon icon-bomb">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  [...]
  </svg>
</span>
```

### Icons in templates

Add Fontawesome icons to your templates using a partial. Just call the partial using the icon name.

```GO
{{ partial "icon" (slice "bomb")}}
```

### Icons in content

Add Fontawesome icons to your markdown content using Hugo shortcodes. The shortcode below adds the Font Awesome bomb icon.

```GO
{{<icon bomb>}}
```

## Add Classes

You can add classes to your

```GO
{{ partial "icon" (slice "bomb class1 class2 ...")}}
```