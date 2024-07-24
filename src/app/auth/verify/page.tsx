import VerifyComponent from "@/components/auth/VerifyComponent";
import LoadingPage from "@/components/common/LoadingPage";
import React, { Suspense } from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <VerifyComponent />
    </Suspense>
  );
};

export default page;
