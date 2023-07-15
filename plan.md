### Plan ###


## HTML ##

html:5 template
source css, javascript, jquery

header - 'Salary Calculator'
heading - 'Add Employee'
footer - 'Total Monthly'

create form with 5 input boxes  // what's correct syntax?  

create 'Submit' button

table heading - 'Employees'

table with 6 columns

## jQuery ##

labels displayed *inside* input boxes
  greyed out and removed on click? // probably, but not quite sure

submit button --> .on 'click'
  - collects form input
    - where is it? selector
    - where is it going? append new row to table // #id or .class?
      - inside appended row create 'Delete' button
    - call function(s)
      - store totalSalary
      - add incoming input to totalSalary
      - total Salary / 12
      - displayed in footer

'Delete' button --> .on 'click'
  - remove corresponding row (including itself)



  