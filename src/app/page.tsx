import Layout from "@/components/common/Layout";
import { getPortfolioInfo } from "@/libs/microcms";
import { portfolio } from "@/types/cms-portfolio-types";
import React from "react";

const page = async () => {
  const portfolio: portfolio = await getPortfolioInfo();
  console.log(portfolio);
  return <Layout portfolio={portfolio} />;
};

export default page;
