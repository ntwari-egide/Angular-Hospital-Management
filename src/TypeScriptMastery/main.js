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
// CLASSES IN TYPESCRIPT
var LawFirm = /** @class */ (function () {
    function LawFirm() {
        var _this = this;
        this.getLocation = function () {
            console.log("District : " + _this.location);
        };
    }
    return LawFirm;
}());
//memory alocation
// let lawFirm: LawFirm = new LawFirm()
var lawFirm1 = new LawFirm();
lawFirm1.getLocation();
