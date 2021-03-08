"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinAnalyzer_1 = require("./analyzers/WinAnalyzer");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prepForConsole = function (teamName) {
        return new Summary(new WinAnalyzer_1.WinAnalyzer(teamName), new ConsoleReport_1.ConsoleReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
