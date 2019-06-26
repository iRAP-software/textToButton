# textToButton
A simple jQuery plugin to convert text fields to button.
The simple idea behind this was to let the user type anything in the text field and as soon as the field went out of focus replacing it with a button with different text, maybe a little more meaningful.
I personally used it to display the name of a user whose email was typed in the text field.
## Usage
```
<input type="text" id="textField">
<script>
$('#textField').textToButton('Some Text');
</script>
```
This will simply convert the text field to button with the text 'Some Text' on it. The button is clickable and will be converted back to text field on click.
## Options
```
$('#some-text-field').textToButton(text, opts);
```
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | required | Text on button. This is a required field. |
| `opts` | object | optional | Other optional parameters. Below are all the attributes for the `opts` |
| `classNames` | string | text field's classes | Any class that needs to be added to the button. |
| `closeIcon` | bool | false | `true` to show a close icon on the button |
```
$('#some-text-field').textToButton('Some Text', {
	className: 'form-control text-left', // bootstrap class to make it look like input text field
	closeIcon: true
});
```