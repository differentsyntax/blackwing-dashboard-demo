import AnimatedCard from "../../components/animated-card/AnimatedCard";
import AutoUpdateDataContainer from "../../components/auto-update-data-container/AutoUpdateDataContainer";
import TradingChart from "../../components/trading-chart/TradingChart";
import { solanaData } from "../../util/helper";

/**
 * Dashboard page that displays the main dashboard layout with various widgets.
 *
 * @component
 * @returns {JSX.Element} - The rendered Dashboard page.
 */
const DashboardPage = () => {
  return (
    <div className="grid gap-4 m-10 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 p-5">
      <TradingChart data={solanaData} />
      <AnimatedCard />
      <AutoUpdateDataContainer />
    </div>
  )
}

export default DashboardPage;
