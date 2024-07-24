import ResetPassword from "@/components/auth/ResetPasswordComponent";
import LoadingPage from "@/components/common/LoadingPage";
import React, { Suspense } from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ResetPassword />
    </Suspense>
  );
};

export default page;
