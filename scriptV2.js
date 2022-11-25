function() {
    var fullCS = prompt("CS#? Add \".T\" or use \"REC.ACCT T\" for termed accts."); // Get CS# + termed status
    try {
        var csArray = fullCS.split(/\.|\s/); // Split into individual values
    } catch (typeError) { // If cancelled or no input
        alert("Cancelled."); // End script
        return;
    }
    document.getElementById("ctl00_responsiveBody_txtCsReceiver").value = csArray[0]; // Set receiver val
    document.getElementById("ctl00_responsiveBody_txtCsAccount").value = csArray[1]; // Set Acct# val
    document.getElementById("ctl00_responsiveBody_chkIncludeTerminated").checked = (csArray.length = 3 && /t|T/.test(csArray[2])); // If "T" modifier added, check termed box
    document.getElementById("ctl00_responsiveBody_btnSearch").click(); // Click "Search"
}();