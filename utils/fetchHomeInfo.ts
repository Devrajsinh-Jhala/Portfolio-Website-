import { HomeInfo } from "../typings";

export const fetchHomeInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getHomeInfo`
  );

  const data = await res.json();
  const homeInfo: HomeInfo = data.homeInfo[0];

  return homeInfo;
};
