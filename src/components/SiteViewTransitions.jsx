"use client";

import { ViewTransitions } from "next-view-transitions";

export default function SiteViewTransitions({ children }) {
  return <ViewTransitions>{children}</ViewTransitions>;
}
