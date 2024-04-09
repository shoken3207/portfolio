import { createClient } from "microcms-js-sdk";

if (!process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY,
});

export const getWorks = async () => {
  const works = await client.getList({ endpoint: "works" });
  return works;
};

export const getWork = async (contentId: string) => {
  console.log("work2: ", contentId);
  const work = await client.getListDetail({ endpoint: "works", contentId });
  return work;
};
