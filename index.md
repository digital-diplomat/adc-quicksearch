# You know, it's usually unwise to run random JavaScript code...  
## ...but you can trust me. We all get background checked. &#128513;

Click and drag this link to your bookmarks bar: <a href='javascript:(function(){var currentText="";var csAcct=document.getElementById("ctl00_responsiveBody_txtCsAccount");var csRec=document.getElementById("ctl00_responsiveBody_txtCsReceiver");var termCheck=document.getElementById("ctl00_responsiveBody_chkIncludeTerminated");if(csAcct.value!=""){currentText=csRec.value+"."+csAcct.value;}if(termCheck.checked){currentText+=".T"}var fullCS=prompt("CS#? Add \".T\" for termed accts.",currentText);try{var csArray=fullCS.split(/\./);}catch(typeError){alert("Cancelled.");return}csAcct.value=csArray[0];csRec.value=csArray[1];termCheck.checked=(csArray.length>=3&&/t|T/.test(csArray[2]));document.getElementById("ctl00_responsiveBody_btnSearch").click();}());'>ADC QuickSearch!</a>

**Now updated to Version 2.2!** You can now type the whole CS# into one prompt, and add `.T` to the end for termed accounts.

To use this bookmarklet, click on it while on the main (_new_) search page in the [ADC Partner Portal](https://alarmadmin.alarm.com/Support/FindCustomer.aspx). **The script will not work elsewhere.**

## Changelog

### 2.2

- Prompt field now autofills if there are already search terms in the Receiver and Account field.
  - `.T` will also be added if "Include Terminated" is already checked
- Re-added variables for legibility, much more necessary now that fields are referenced multiple times.

### 2.1

- Removed ~~unnecessary~~ variables to shorten program

### 2.0

- New single-prompt search! Entire CS# can be put into one field, with a `.T` modifier if you're looking for terminated accounts as well.

### 1.0

- Initial version, prompts for Receiver, Account, and then asks if termed accts should be searched as well.
