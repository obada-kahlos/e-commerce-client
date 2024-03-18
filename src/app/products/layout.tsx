import React from "react";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}
