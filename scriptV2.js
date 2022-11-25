function() {
    var fullCS = prompt("CS#? Add \".T\" or use \"REC.ACCT T\" for termed accts.");
    try {
        var csArray = fullCS.split(/\.|\s/);
    } catch (typeError) {
        alert("Cancelled.");
        return;
    }
    var csRec = document.getElementById("ctl00_responsiveBody_txtCsReceiver");
    csRec.value = csArray[0];
    var csAcct = document.getElementById("ctl00_responsiveBody_txtCsAccount");
    csAcct.value = csArray[1];
    document.getElementById("ctl00_responsiveBody_chkIncludeTerminated").checked = (csArray.length = 3 && /t|T/.test(csArray[2]));
    document.getElementById("ctl00_responsiveBody_btnSearch").click();
}();
