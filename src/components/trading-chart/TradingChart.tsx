import React from 'react';
import { normalizeData } from './../../util/helper';

export type SolanaDataProps = {
    time: string;
    price: number;
}

type TradingChartProps = {
  data: SolanaDataProps[];
  width?: number;
  height?: number;
}

/**
 * TradingChart component for displaying a line chart of Solana prices over the last 24 hours.
 *
 * @param {Object} props - Component properties.
 * @param {Array<{ time: string, price: number }>} props.data - Array of data points containing timestamps and Solana prices.
 * @param {number} [props.width=800] - Optional width of the chart in pixels (default: 800).
 * @param {number} [props.height=425] - Optional height of the chart in pixels (default: 425).
 * @returns {JSX.Element} - The rendered TradingChart component, showing Solana price trends and a grid.
 */
const TradingChart: React.FC<TradingChartProps> = ({data, width = 800, height = 425}) => {

    const prices = data.map(entry => entry.price);
    const points = normalizeData(data, width, height);

    const yAxisMin = 0;
    const yAxisMax = 200;
    const priceRange = yAxisMax - yAxisMin;

    /**
     * Renders grid lines for the chart at regular intervals.
     * @returns {JSX.Element[]} - Array of SVG line elements for the grid.
     */
    const renderGridLines = () => {
        const lines = [];

        for (let x = 0; x <= width; x += 50) {
            lines.push(<line key={`v-${x}`} x1={x} y1={0} x2={x} y2={height} className="stroke-gray-800" strokeWidth="0.5" />);
        }

        for (let y = 0; y <= height; y += 50) {
            lines.push(<line key={`h-${y}`} x1={0} y1={y} x2={width} y2={y} className="stroke-gray-800" strokeWidth="0.5" />);
        }

        return lines;
    };

    /**
     * Renders the X-axis labels based on the timestamps in the data.
     * @returns {JSX.Element} - SVG group of line and text elements for the X-axis.
     */
    const renderXAxis = () => {
        const xLabels = [];
        const timeFormatter = new Intl.DateTimeFormat([], { hour: 'numeric', minute: 'numeric', hour12: true });

        for (let i = 0; i < data.length; i += Math.ceil(data.length / 8)) {
            const xPos = (i / (data.length - 1)) * width;
            const timeLabel = timeFormatter.format(new Date(data[i].time));

            xLabels.push(
                <text key={`x-label-${i}`} x={xPos} y={height + 20} textAnchor="middle" className="fill-slate-500 text-xs">
                    {timeLabel}
                </text>
            );
        }

        return (
            <>
                <line x1={0} y1={height} x2={width} y2={height} className="stroke-slate-500 w-1" />
                {xLabels}
            </>
        );
    };

    /**
     * Renders the Y-axis labels for price levels.
     * @returns {JSX.Element} - SVG group of line and text elements for the Y-axis.
     */
    const renderYAxis = () => {
        const yLabels = [];
        const numberOfLabels = 5;

        for (let i = 0; i <= numberOfLabels; i++) {
            const priceValue = yAxisMin + (i / numberOfLabels) * priceRange;
            const yPos = height - ((priceValue - yAxisMin) / priceRange) * height;

            yLabels.push(
                <text key={`y-label-${i}`} x={-10} y={yPos + 4} textAnchor="end" className="fill-slate-500 text-xs">
                    {priceValue == 0 ? '' : priceValue.toFixed(2)}
                </text>
            );
        }

        return (
            <>
                <line x1={0} y1={0} x2={0} y2={height} className="stroke-slate-500 w-1" />
                {yLabels}
            </>
        );
    };

    return (
        <svg width={width + 120} height={height + 20} viewBox={`0 0 ${width + 30} ${height + 40}`} className={`bg-zinc-900 border border-gray-800 rounded-lg shadow-lg xs:col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-3 p-6`}>
            {renderGridLines()}
            {renderXAxis()}
            {renderYAxis()}

            {points.map((point, index) => {
                if (index === 0) return null;

                const previousPoint = points[index - 1];
                const isRising = prices[index] > prices[index - 1];

                return (
                    <line
                        key={index}
                        x1={previousPoint.x}
                        y1={previousPoint.y}
                        x2={point.x}
                        y2={point.y}
                        className={`${isRising ? "stroke-green-600" : "stroke-red-600"} w-2`}
                    />
                );
            })}
        </svg>
    );
};

export default TradingChart;
