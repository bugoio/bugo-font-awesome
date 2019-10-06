# Bugo Font Awesome

The code included here will display the Font Awesome bomb icon.
https://fontawesome.com/icons/bomb?style=solid

## Icons in templates

Add Fontawesome icons to your templates using a partial. Just call the partial using the path "icons/<icon-name>".

```
{{ partial "icons/bomb" . }}
```

## Icons in content

Add Fontawesome icons to your conent using shortcodes. The shortcode below adds the Font Awesome bomb icon.

```
{{<icon bomb>}}
```


