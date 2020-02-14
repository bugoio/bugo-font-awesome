# Bugo Font Awesome

Add icons to your Hugo Templates and Content. The shortcode below here will display the Font Awesome bomb icon. https://fontawesome.com/icons/bomb?style=solid

## Installation

Before starting check the list below:

* Your Hugo project must use Hugo v0.58.3 or greater
* Your Hugo project must be in a git repository
* Your Hugo project must be a Hugo Module

### 1. If your project isn't a Hugo Module.

```BASH
hugo mod init
```

### 2. Get this module.

```BASH
hugo mod get github.com/bugoio/bugo-font-awesome
```
### 3. Add module to your project

Add the module to your Hugo config file (shown in YAML).

```YAML
module:
  imports:
  - disable: false
    ignoreConfig: false
    path: github.com/bugoio/bugo-font-awesome
```

### 4. Add the stylesheets

You can skip this if you're using a Bugo Theme. The theme already does this. Otherwise we need to add it. We'll use Hugo Pipes to process the SASS files. Add the code below to the ```<head``` tag. 

```GO
  <!-- Process SASS Files. https://github.com/bugoio/bugo-sass-utilities.  -->
  {{ $stylesheet := partial "utilities/bugo-ititstylesheets" . }}
  <link rel="stylesheet" href="{{ $stylesheet }}" media="screen" />
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
{{ partial "icon" (slice "bomb" "icon-small" "other-class" "...")}}
```

## SASS

Bugo Font Awesome uses Bugo SASS Utilities and modular scale. For mor information checkout https://github.com/bugoio/bugo-sass-utilities.

### Classes

Icons are have a default size and can be modifed by including the two classes below.
```CSS
.icon-small // small sized icon

.icon-large // large sized icon
```

### Variables

The sizes can be controlled using SASS varaibles

```
// The numbers are used by Bugo to display the icons relateive to the font size;
$bugo-icon-size: 2;
$bugo-icon-size-sm: 1;
$bugo-icon-size-lg: 4;
```
