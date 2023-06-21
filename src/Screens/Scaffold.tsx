import { ReactNode } from "react";

export const Scaffold = ({ children }: { children: ReactNode }) => {
  return <div className="scaffold">{children}</div>;
};
