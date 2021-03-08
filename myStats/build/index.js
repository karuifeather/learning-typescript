"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Inheritance be like
// const reader = new MatchReader('football.csv');
// reader.read();
var matchReader = MatchReader_1.MatchReader.buildTheReader('football.csv');
var summary = Summary_1.Summary.prepForConsole('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
