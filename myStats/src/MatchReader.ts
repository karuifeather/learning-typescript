import { CsvFileReader } from './CsvFileReader';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';
import { dateSringToDate } from './utils';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static buildTheReader(filename: string): MatchReader {
    const csvFileReader = new CsvFileReader(filename);

    return new MatchReader(csvFileReader);
  }

  matches: MatchData[] = [];

  constructor(private reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(this.mapRow);
  }

  private mapRow(row: string[]): MatchData {
    return [
      dateSringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
