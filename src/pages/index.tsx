import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const index: NextPage = () => {
  const { data } = trpc.example.useQuery();
  const { data: db } = trpc.withPrisma.useQuery();
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">
          {data ? data.msg : "loading..."}
        </h1>
        <h1 className="text-2xl font-semibold">{db ? db.count : "loading..."}</h1>
      </div>
    </div>
  );
};

export default index;
