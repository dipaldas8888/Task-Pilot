import React from "react";
import { StatCards } from "../components/StatCards";
import { AgentsTable } from "../components/AgentsTable";

export const Agents = () => {
  return (
    <div className=" p-3 space-y-4">
      <AgentsTable />
    </div>
  );
};
