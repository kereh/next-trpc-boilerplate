import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const index: NextPage = () => {
  const { data } = trpc.example.useQuery();
  return (
    <div className="grid place-items-center min-h-screen">
      <h1>{data ? data.msg : "loading"}</h1>
    </div>
  );
};

export default index;
