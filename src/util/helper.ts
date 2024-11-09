import { SolanaDataProps } from "../components/trading-chart/TradingChart";

/**
 * Normalizes Solana data to fit within specified width and height for charting.
 *
 * @param {SolanaDataProps[]} data - Array of Solana data points with price properties.
 * @param {number} width - The width of the chart area.
 * @param {number} height - The height of the chart area.
 * @returns {Array<{ x: number, y: number }>} - An array of normalized points with x and y coordinates.
 */
export const normalizeData = (
  data: SolanaDataProps[],
  width: number,
  height: number,
) => {
  const prices = data.map((entry) => entry.price);

  const yAxisMin = 0;
  const yAxisMax = 200;

  return prices.map((point, index) => ({
    x: (index / (data.length - 1)) * width,
    y: height - ((point - yAxisMin) / (yAxisMax - yAxisMin)) * height,
  }));
};

export const solanaData = [
  { time: "2024-11-06T17:00:00Z", price: 188.61 },
  { time: "2024-11-06T18:00:00Z", price: 187.5 },
  { time: "2024-11-06T19:00:00Z", price: 186.75 },
  { time: "2024-11-06T20:00:00Z", price: 187.2 },
  { time: "2024-11-06T21:00:00Z", price: 188.0 },
  { time: "2024-11-06T22:00:00Z", price: 189.1 },
  { time: "2024-11-06T23:00:00Z", price: 190.0 },
  { time: "2024-11-07T00:00:00Z", price: 189.5 },
  { time: "2024-11-07T01:00:00Z", price: 188.8 },
  { time: "2024-11-07T02:00:00Z", price: 188.0 },
  { time: "2024-11-07T03:00:00Z", price: 187.5 },
  { time: "2024-11-07T04:00:00Z", price: 186.9 },
  { time: "2024-11-07T05:00:00Z", price: 187.2 },
  { time: "2024-11-07T06:00:00Z", price: 188.0 },
  { time: "2024-11-07T07:00:00Z", price: 188.5 },
  { time: "2024-11-07T08:00:00Z", price: 189.0 },
  { time: "2024-11-07T09:00:00Z", price: 188.7 },
  { time: "2024-11-07T10:00:00Z", price: 188.2 },
  { time: "2024-11-07T11:00:00Z", price: 187.8 },
  { time: "2024-11-07T12:00:00Z", price: 188.0 },
  { time: "2024-11-07T13:00:00Z", price: 188.5 },
  { time: "2024-11-07T14:00:00Z", price: 189.0 },
  { time: "2024-11-07T15:00:00Z", price: 189.5 },
  { time: "2024-11-07T16:00:00Z", price: 190.0 },
  { time: "2024-11-07T17:00:00Z", price: 190.5 },
];
