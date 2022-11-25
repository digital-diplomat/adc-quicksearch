// A better-spaced version of the script in the site so you know what's going on.

var csRec = document.getElementById("ctl00_responsiveBody_txtCsReceiver"); // Prompt for first 3 digits.
csRec.value = window.prompt("CS Receiver?");
if (csRec.value == "") {  // If you press "Cancel" or enter nothing...
  alert("Cancelled.");
  return;                 // The script will stop.
}
var csAcct = document.getElementById("ctl00_responsiveBody_txtCsAccount"); // Prompt for last 4 digits.
csAcct.value = window.prompt("CS Acct #?");
if (csAcct.value == "") {
  alert("Cancelled.");
  return;
}
if (confirm("Check termed?")) { // If you want to search for terminated accounts as well, press OK; otherwise hit Cancel.
  document.getElementById("ctl00_responsiveBody_chkIncludeTerminated").click(); // Select "Show Termed accts" w/out dropdown.
}
document.getElementById("ctl00_responsiveBody_btnSearch").click(); // Hit Search
