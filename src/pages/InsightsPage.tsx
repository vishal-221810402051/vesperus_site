import FeaturedReport from "../components/insights/FeaturedReport";
import FutureInsightsPlaceholder from "../components/insights/FutureInsightsPlaceholder";
import InsightBoundary from "../components/insights/InsightBoundary";
import InsightTopics from "../components/insights/InsightTopics";
import InsightsContactCta from "../components/insights/InsightsContactCta";
import InsightsHero from "../components/insights/InsightsHero";

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <FeaturedReport />
      <InsightTopics />
      <InsightBoundary />
      <FutureInsightsPlaceholder />
      <InsightsContactCta />
    </>
  );
}
