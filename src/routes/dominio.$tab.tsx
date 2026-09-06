import { createFileRoute } from "@tanstack/react-router";
import { CasesTab } from "@/components/domain/cases-tab";
import { ConnectionsTab } from "@/components/domain/connections-tab";
import { CounterfactualsTab } from "@/components/domain/counterfactuals-tab";
import { FragileTab } from "@/components/domain/fragile-tab";
import { ReviewsTab } from "@/components/domain/reviews-tab";
import { TodayTab } from "@/components/domain/today-tab";
import { TrailsTab } from "@/components/domain/trails-tab";

export const Route = createFileRoute("/dominio/$tab")({
  component: DomainTabRoute,
});

function DomainTabRoute() {
  const { tab } = Route.useParams();
  switch (tab) {
    case "hoje":
      return <TodayTab />;
    case "revisar":
      return <ReviewsTab />;
    case "frageis":
      return <FragileTab />;
    case "contrafactuais":
      return <CounterfactualsTab />;
    case "casos":
      return <CasesTab />;
    case "conexoes":
      return <ConnectionsTab />;
    case "trilhas":
      return <TrailsTab />;
    default:
      return <TodayTab />;
  }
}
