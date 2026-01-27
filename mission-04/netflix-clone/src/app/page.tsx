"use client";
import Header from "../pages/header/page";
import Main from "../pages/main/page";
import "./page.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header></Header>
        <Main></Main>
      </QueryClientProvider>
    </>
  );
}
