"use strict";
exports.__esModule = true;
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
// let drawFigure = (point: {x: number,y: number}) => {
var drawFigure = function (point) {
    console.log("Line with x: ", point.x);
};
drawFigure({
    x: 2,
    y: 3
});
var lawfirm_1 = require("./lawfirm");
// let lawFirm: LawFirm = new LawFirm()
var lawFirm1 = new lawfirm_1.LawFirm("Trust Chamber", 23, "Kayonza");
var lawFirm2 = new lawfirm_1.LawFirm('Ishema');
// lawFirm1.location = 'kayonza'
// lawFirm1.name = 'Ishema'
// lawFirm1.numberOfMembers = 23
lawFirm1.getData();
lawFirm2.getData();
// We use _x : to avoid the commel case issues that arise
