export interface ExchangeRate {
  buy?: number;
  middle?: number;
  sell?: number;
  indicator: number;
  lastModified: string;
}

export interface FX {
  banknoteRate?: ExchangeRate;
  currency: string;
  exchangeRate?: ExchangeRate;
  denominations?: number[];
  flags?: string[];
  nameI18N?: string;
  precision: number;
}

export interface DataExchangeRateObject {
  baseCurrency: string;
  comparisonDate: string;
  fx: FX[];
  institute: number;
  lastUpdated: string;
}
