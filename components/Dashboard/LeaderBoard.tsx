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
  
const leaderboard = [
  { id: 1, name: "Riya Sharma", referralCode: "riya2025", donations: 8500 },
  { id: 2, name: "Aryan Desai", referralCode: "aryan2025", donations: 7200 },
  { id: 3, name: "Meera Jain", referralCode: "meera2025", donations: 6900 },
  { id: 4, name: "Kunal Singh", referralCode: "kunal2025", donations: 6100 },
  { id: 5, name: "Sana Patel", referralCode: "sana2025", donations: 5400 },
  { id: 6, name: "Riya Sharma", referralCode: "riya2025", donations: 8500 },
  { id: 7, name: "Aryan Desai", referralCode: "aryan2025", donations: 7200 },
  { id: 8, name: "Meera Jain", referralCode: "meera2025", donations: 6900 },
  { id: 9, name: "Kunal Singh", referralCode: "kunal2025", donations: 6100 },
  { id: 10, name: "Sana Patel", referralCode: "sana2025", donations: 5400 },
];

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
              href="/"
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
