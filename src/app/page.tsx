"use client";

import LoadingPage from "@/components/common/LoadingPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter();
  if (session.data) {
    // redirect after a second to avoid flicker
    setTimeout(() => router.replace("/dashboard"), 500);
  }

  return <LoadingPage />;
}
