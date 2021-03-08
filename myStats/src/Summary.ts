import { WinAnalyzer } from './analyzers/WinAnalyzer';
import { MatchData } from './MatchData';
import { ConsoleReport } from './reportTargets/ConsoleReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static prepForConsole(teamName: string): Summary {
    return new Summary(new WinAnalyzer(teamName), new ConsoleReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]) {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
