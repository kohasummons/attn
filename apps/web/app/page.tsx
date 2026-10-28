import { HomePage } from "@/components/marketing/pages";
import { withCanonical } from "@/lib/site-metadata";

export const metadata = withCanonical("/", {
  title: "Attention Factory — AI agents, automation and training for businesses",
  description:
    "We build AI agents and automations for businesses and train teams to use them. For people who would rather leverage AI than talk about leveraging AI.",
});

export default HomePage;
