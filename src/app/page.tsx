import React, { Suspense } from "react";
import { HomePage } from "@/_components/HomePage";
import { LoadingPlaceholder } from "@/_common/LoadingPlaceholder";

export default function AppPage() {
  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <HomePage />
    </Suspense>
  );
}