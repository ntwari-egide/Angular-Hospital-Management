var lawfirmName;
var lawfirmAge;
var lawfirmNumberOfMembers;
var lawfirmValue;
var lawfirmMembers = ["Ntwari", "Egide", "Mugisha", "Jules"];
var lawfirmOthers = ["cow", 2020, "kayonza", false];
// Working with enums
var ActiveLawfirms;
(function (ActiveLawfirms) {
    ActiveLawfirms["Ishema"] = "2020-12-03";
    ActiveLawfirms["TrustChamber"] = "2021-02-20";
})(ActiveLawfirms || (ActiveLawfirms = {}));
;
var firstActiveLawfirm = ActiveLawfirms.Ishema;
