"use client";

import { useEffect, useState, FunctionComponent } from "react";
import { useSession } from "next-auth/react";

import { getUser } from "@/actions/project";

export type MyHoldingsType = {
  refresh: boolean;
  className?: string;
};

const MyHoldings: FunctionComponent<MyHoldingsType> = ({ refresh, className = "" }) => {

  const session = useSession();
  const user = session.data?.user;

  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    const fetchUser = async () => {
      if (user?.email) {
        const response = await getUser(user.email);
        const userData = response.data;
        console.log(userData);
        setUserData(userData);
      }
    }

    fetchUser();
  }, [user, refresh]);

  return (
    <div
      className={`flex w-full shrink-0 flex-col items-start justify-end gap-4 rounded-2xl bg-neutral-white p-6 text-left text-lg text-neutral-black-4 ${className} gap-y-5 divide-y divide-neutral-black-2`}
    >
      <b className="relative inline-block min-w-[96px] leading-[140%] tracking-[-0.02em]">
        My holdings
      </b>

      <div className="flex flex-row items-start justify-between gap-5 self-stretch py-10 text-2xl text-neutral-black-6">
        <div className="flex flex-col items-start justify-center gap-1">
          <b className="relative leading-8 tracking-tight">{userData.letAmount} LET</b>
          {/* <div className="text-neutral-black-3 relative text-sm leading-5 tracking-tight">
            (average buy price $45900)
          </div> */}
        </div>
        <div className="flex flex-col items-end justify-center gap-1 text-right">
          <b className="mq450:text-lgi mq450:leading-[27px] relative inline-block min-w-[84px] whitespace-nowrap leading-[34px] tracking-[-0.02em]">
            {userData.lctAmount} LCT
          </b>
          <div className="flex flex-col items-end justify-start text-base text-state-success">
            <div className="flex flex-row items-start justify-start">
              {/* <div className="relative inline-block min-w-[96px] leading-[140%] tracking-[-0.02em]">
                {`1D +$898 (2%)`}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHoldings;
