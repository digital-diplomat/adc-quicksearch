## This script is only useful (and will only work) for security professionals with access to Alarm.com's Partner Portal.  
### If you are not a security professional, you will probably have no idea what this is for. It's not for you. :P

Click and drag this link to your bookmarks bar: <a href='javascript:(function(){var currentText="";var csAcct=document.getElementById("ctl00_responsiveBody_txtCsAccount");if(!csAcct){if(confirm("This script will only work on the NEW Alarm.com customer search page.\nGo there now?")){window.location.href="https://alarmadmin.alarm.com/Support/FindCustomer.aspx"}return}var csRec=document.getElementById("ctl00_responsiveBody_txtCsReceiver");var termCheck=document.getElementById("ctl00_responsiveBody_chkIncludeTerminated");if(csRec.value!=csAcct.value){currentText=csRec.value+"."+csAcct.value;}if(termCheck.checked){currentText+=".T"}var fullCS=prompt("CS#? Add \".T\" for termed accts.",currentText);try{var csArray=fullCS.split(/\./);}catch(typeError){alert("Cancelled.");return}csRec.value=csArray[0];csAcct.value=csArray[1];termCheck.checked=(csArray.length>=3&&/t|T/.test(csArray[2]));document.getElementById("ctl00_responsiveBody_btnSearch").click();}());'>ADC QuickSearch!</a>

To use this bookmarklet, click on it while on the main (_new_) search page in the
[ADC Partner Portal](https://alarmadmin.alarm.com/Support/FindCustomer.aspx).
You can also use it to redirect to that webpage, meaning **this script can replace your Alarm.com bookmark entirely!**

### Changelog

#### 2.4.2

- Fixed bug that would cause default value not to populate if only the Receiver number is entered

#### 2.4.1

- Fixed bug that caused Receiver # to be placed in Acct # field and vice versa.

#### 2.4

- Script can now redirect you to Alarm.com if you're not already there! Can also Cancel to stay on current page.

#### 2.3

- Script will now alert you if it is being used somewhere other than the Alarm.com customer search page.

#### 2.2

- Prompt field now autofills if there are already search terms in the Receiver and Account field.
  - `.T` will also be added if "Include Terminated" is already checked
- Re-added variables for legibility, much more necessary now that fields are referenced multiple times.

#### 2.1

- Removed ~~unnecessary~~ variables to shorten program

#### 2.0

- New single-prompt search! Entire CS# can be put into one field, with a `.T` modifier if you're looking for terminated accounts as well.

#### 1.0

- Initial version, prompts for Receiver, Account, and then asks if termed accts should be searched as well.
