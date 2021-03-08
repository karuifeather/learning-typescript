import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Inheritance be like
// const reader = new MatchReader('football.csv');
// reader.read();

const matchReader = MatchReader.buildTheReader('football.csv');
const summary = Summary.prepForConsole('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
