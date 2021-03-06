# whatsapp-richtext-formatter
Converts whatsapp formatted strings to richtext field tags and vice-versa

## Example

#### Whatsapp text:
 `Hey *First Name*!
Thanks for your purchase from *business name* *product link* Hope you are enjoying "product name", and our service. :heart::smiley:
Please rate your experience based on your recent purchase:
Select the button that best describes your time with us.
Buttons:
• BAD
• GOOD
• EXCELLENT`;

###### will be converted to
```Hey <strong>*First Name*</strong>!<br/>Thanks for your purchase from <strong>*business name*</strong> <strong>*product link*</strong> Hope you are enjoying "product name", and our service. :heart::smiley:<br/>Please rate your experience based on your recent purchase:<br/>Select the button that best describes your time with us.<br/>Buttons:<br/>• BAD<br/>• GOOD<br/>• EXCELLENT```


#### Rich Text:
`Hey <strong>First Name</strong>!<br/>Thanks for your purchase from <strong>business name</strong> <strong>product link</strong> Hope you are enjoying "product name", and our service. :heart::smiley:<br/>Please rate your experience based on your recent purchase:<br/>Select the button that best describes your time with us.<br/>Buttons:<br/>• BAD<br/>• GOOD<br/>• EXCELLENT`

###### will be converted to

`Hey *First Name*!Thanks for your purchase from *business name* *product link* Hope you are enjoying "product name", and our service. :heart::smiley:Please rate your experience based on your recent purchase:Select the button that best describes your time with us.Buttons:• BAD• GOOD• EXCELLENT`
