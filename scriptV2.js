function() {
    var fullCS = prompt("CS#? Add \".T\" or use \"REC.ACCT T\" for termed accts."); // Get CS# + termed status
    try {
        var csArray = fullCS.split(/\.|\s/); // Split into individual values
    } catch (typeError) { // If cancelled or no input
        alert("Cancelled."); // End script
        return;
    }
    var csRec = document.getElementById("ctl00_responsiveBody_txtCsReceiver"); // Set receiver val
    csRec.value = csArray[0];
    var csAcct = document.getElementById("ctl00_responsiveBody_txtCsAccount"); // Set Acct# val
    csAcct.value = csArray[1];
    document.getElementById("ctl00_responsiveBody_chkIncludeTerminated").checked = (csArray.length = 3 && /t|T/.test(csArray[2])); // If "T" modifier added, check termed box
    document.getElementById("ctl00_responsiveBody_btnSearch").click(); // Click "Search"
}();
