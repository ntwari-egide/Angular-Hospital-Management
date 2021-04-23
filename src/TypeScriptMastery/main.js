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
//Type assertions
var message;
message = 'ntwari is ceo and co-founder of Yombi app';
var endWithApp = message.endsWith('app');
var endWithAppAlternativeWay = message.endsWith('app');
console.log("End with 1: ", endWithApp);
console.log("End with 2: ", endWithAppAlternativeWay);
// INLINE ANNOTATION
var drawFigure = function (point) {
    console.log("Line with x: ", point.x);
};
drawFigure({
    x: 2,
    y: 3
});
