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
    // hiding the components on smaller screens while I fix them and make them better responsive
    <div className="md:grid md:grid-cols-4 lg:grid-cols-4 lg:grid gap-4 m-10 mt-20 hidden p-5">
      <TradingChart data={solanaData} />
      <AnimatedCard />
      <AutoUpdateDataContainer />
    </div>
  );
};

export default DashboardPage;
