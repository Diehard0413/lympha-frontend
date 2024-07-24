"use client";

import { useSession } from "next-auth/react";
import LoadingPage from "./loading/page";
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
