import { HomeInfo } from "../typings";

export const fetchHomeInfo = async () => {
  const res = await fetch(
    `https://devraj-jhala.vercel.app/api/getHomeInfo`
  );

  const data = await res.json();
  const homeInfo: HomeInfo = data.homeInfo[0];

  return homeInfo;
};
