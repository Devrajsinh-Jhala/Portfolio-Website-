// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { HomeInfo } from "../../typings";

const query = groq`
*[_type == "home"]{
    ...
  }
`;

type Data = {
  homeInfo: HomeInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const homeInfo: HomeInfo = await sanityClient.fetch(query);
  res.status(200).json({ homeInfo });
}
