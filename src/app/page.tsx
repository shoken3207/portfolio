import Layout from "@/components/common/Layout";
import { getPortfolioInfo } from "@/libs/microcms";
import { portfolio } from "@/types/cms-types";

const page = async () => {
  const portfolio: portfolio = await getPortfolioInfo();
  return <Layout portfolio={portfolio} />;
};

export default page;
