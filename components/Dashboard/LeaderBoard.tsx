import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowRight, Medal, TableProperties } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { leaderboard } from "@/constants";

const LeaderBoard = ({ className }: { className?: string }) => {
  return (
    <Card className={`relative ${className}`}>
      <div className="cardbadge">
        <TableProperties size={20} />
      </div>
      <CardHeader>
        <CardTitle className="text-gray-400">Top Fundraisers</CardTitle>
        <CardDescription>top 10 fund raisers</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Table>
          <TableCaption className="text-right">
            <Link
              href="/leaderboard"
              className="flex gap-2 items-center justify-end hover:underline underline-offset-4 transition-all"
            >
              See full leaderboard <ArrowRight size={18} />
            </Link>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Referal Code</TableHead>
              <TableHead className="text-right">Donation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboard.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  {user.id == 1 ? (
                    <Medal className="text-yellow-600" size={18} />
                  ) : (
                    <span className="mx-1">{user.id}</span>
                  )}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.referralCode}</TableCell>
                <TableCell className="text-right">
                  ₹{user.donations.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default LeaderBoard;
