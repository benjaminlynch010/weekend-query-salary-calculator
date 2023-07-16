### Plan ###

## HTML ##

- `html:5` template
- Source CSS, JavaScript, jQuery

- **Header:** 'Salary Calculator'
- **Heading:** 'Add Employee'
- **Footer:** 'Total Monthly'

- Create a form with 5 input boxes
- Create a 'Submit' button

- **Table Heading:** 'Employees'
- Create a table with 6 columns

## jQuery ##

- `<input>`: Element to receive text input, usually with a form control
- `<input placeholder="text here">` - Placeholder text in text boxes

- Labels displayed *inside* input boxes, greyed out and removed on click

- **Submit Button**: `.on('click')`
  - Collects form input
    - Selector: Where is the input located?
    - Append new row to table: Where is it going?
      - Inside the appended row, create a 'Delete' button
    - Call function(s)
      - Store `totalSalary`
      - Add incoming input to `totalSalary`
      - `totalSalary / 12`
      - Display in footer

- **'Delete' Button**: `.on('click')`
  - Remove corresponding row (including itself)

- Conditional (`if > $20000`) to add a separate class
  - Style with different background colors

  