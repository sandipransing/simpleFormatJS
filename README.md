simpleFormatJS
==============

> Returns text transformed into HTML using simple formatting rules. Two or more consecutive newlines`(\n\n)` are considered as a paragraph and wrapped in `<p>` tags. One newline `(\n)` is considered as a linebreak and a `<br />` tag is appended.

### Options

* `:wrapper_tag` - String representing the wrapper tag, defaults to `p`

### HTML Options
1. `:id` - Element ID
2. `:class` - class name of container tag
3. `:height`, `:width`, `:title`, etc. html properties

## Examples
```javascript
$(".note").simpleFormat()
```
```javascript
my_text = "Here is some basic text...\n...with a line break."

$.simpleFormat(my_text)
// => "<p>Here is some basic text...<br />...with a line break.</p>"
```
#### Change wrapper tag to `div`, defaults to `p`
```javascript
$.simpleFormat(my_text, {}, wrapper_tag: "div")
// => "<div>Here is some basic text...<br />...with a line break.</div>"
```
#### Shows `\n\n` gets splitted into seperate paragraph
```javascript
more_text = "We want to put a paragraph...\n\n...right there."

$.simpleFormat(more_text)
// => "<p>We want to put a paragraph...</p><p>...right there.</p>"
```
#### Adding html properties to wrapper tag
```javascript
$.simpleFormat("Look ma! A class!", class: 'description')
// => "<p class='description'>Look ma! A class!</p>"
```
```javascript
$.simpleFormat("Look ma! A class!", class: 'description', id: 'edit')
// => "<p id='edit' class='description'>Look ma! A class!</p>"
```
    
#### Shows adding both `html_options` and `options` properties
```javascript
$(".note").simpleFormat({id: 'mynote', title='something'}, wrapper_tag: "span")
```
