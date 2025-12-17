"use client";

import React from "react";
import useLenis from "../hooks/use-lennis";
import { ReactNode } from "react";

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  useLenis();

  return <>{children}</>;
}
