/* Prettified version of a bookmarklet that probably doesn't work anymore.
 * Auto-fills fields to search a customer by CS number in Alarm.com, including
 * shorthand to search terminated accounts.
 *
 * - Written by Bryn Miller
 */
javascript:(function() {
    var currentText = ""; // Default prompt
    var csAcct = document.getElementById("ctl00_responsiveBody_txtCsAccount"); // Acct # (last 4)
    if (!csAcct) { // If search box not found, redirect to Customer Search page.
        window.location.href = "https://alarmadmin.alarm.com/Support/FindCustomer.aspx";
    }
    var csRec = document.getElementById("ctl00_responsiveBody_txtCsReceiver"); // Receiver # (first 3)
    var termCheck = document.getElementById("ctl00_responsiveBody_chkIncludeTerminated"); // Incl. Termed Checkbox
    
    if (csRec.value != csAcct.value) { // If a field has input already...
        currentText = csRec.value + csAcct.value; // ...use that as the prompt default.
    }
    if (termCheck.checked) { // Do the same with 'T' modifier.
        currentText += ".T";
    }
    var fullCS = prompt("CS#? Add \".T\" for termed accts.", currentText); // Prompt for CS
    try {
        var csArray = fullCS.split(/\./); // Split into individual values
    } catch (typeError) { // If cancelled or no input…
        return; // …end script
    }
    csRec.value = csArray[0] + "."; // Set receiver val, requires dot to search correctly.
    csAcct.value = csArray[1]; // Set Acct# val
    termCheck.checked = (csArray.length >= 3 && /t|T/.test(csArray[2])); // Check termed?
    document.getElementById("ctl00_responsiveBody_btnSearch").click(); // Click "Search"
}());
