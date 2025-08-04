"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type LeaderboardEntry = {
  id: string;
  rank: number;
  name: string;
  referalcode: string;
  donation: number;
};

export const columns: ColumnDef<LeaderboardEntry>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "referalcode",
    header: "Referral Code",
  },
  {
    accessorKey: "donation",
    header: () => <div className="text-right">Donation</div>,
    cell: ({ getValue }) => (
      <div className="text-right">₹{getValue<number>().toLocaleString()}</div>
    ),
  },
];
export const columnOrder = ["name", "referralCode", "donation"];
