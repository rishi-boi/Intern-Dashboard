import { columns, LeaderboardEntry } from "@/components/Leaderboard/columns";
import { DataTable } from "@/components/Leaderboard/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import Image from "next/image";
import React from "react";

async function getData(): Promise<LeaderboardEntry[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      rank: 1,
      name: "John Doe",
      referalcode: "REF123",
      donation: 10000,
    },
    {
      id: "728ed530",
      rank: 2,
      name: "Riya Sharma",
      referalcode: "RIYA2025",
      donation: 9500,
    },
    {
      id: "728ed531",
      rank: 3,
      name: "Aryan Desai",
      referalcode: "ARYAN2025",
      donation: 9100,
    },
    {
      id: "728ed532",
      rank: 4,
      name: "Meera Jain",
      referalcode: "MEERA2025",
      donation: 8800,
    },
    {
      id: "728ed533",
      rank: 5,
      name: "Kunal Singh",
      referalcode: "KUNAL2025",
      donation: 8600,
    },
    {
      id: "728ed534",
      rank: 6,
      name: "Sana Patel",
      referalcode: "SANA2025",
      donation: 8300,
    },
    {
      id: "728ed535",
      rank: 7,
      name: "Devanshi Mehta",
      referalcode: "DEVANSHI2025",
      donation: 8100,
    },
    {
      id: "728ed536",
      rank: 8,
      name: "Harsh Verma",
      referalcode: "HARSH2025",
      donation: 7900,
    },
    {
      id: "728ed537",
      rank: 9,
      name: "Tanya Joshi",
      referalcode: "TANYA2025",
      donation: 7650,
    },
    {
      id: "728ed538",
      rank: 10,
      name: "Nikhil Rao",
      referalcode: "NIKHIL2025",
      donation: 7400,
    },
    {
      id: "728ed539",
      rank: 11,
      name: "Shruti Nair",
      referalcode: "SHRUTI2025",
      donation: 7150,
    },
    {
      id: "728ed53a",
      rank: 12,
      name: "Abhay Gupta",
      referalcode: "ABHAY2025",
      donation: 6900,
    },
    {
      id: "728ed53b",
      rank: 13,
      name: "Pooja Kulkarni",
      referalcode: "POOJA2025",
      donation: 6700,
    },
    {
      id: "728ed53c",
      rank: 14,
      name: "Rohan Das",
      referalcode: "ROHAN2025",
      donation: 6500,
    },
    {
      id: "728ed53d",
      rank: 15,
      name: "Kritika Shah",
      referalcode: "KRITIKA2025",
      donation: 6200,
    },
    {
      id: "728ed53e",
      rank: 16,
      name: "Manav Thakur",
      referalcode: "MANAV2025",
      donation: 5900,
    },
    {
      id: "728ed53f",
      rank: 17,
      name: "Neha Bansal",
      referalcode: "NEHA2025",
      donation: 5600,
    },
    {
      id: "728ed540",
      rank: 18,
      name: "Arjun Sethi",
      referalcode: "ARJUN2025",
      donation: 5300,
    },
    {
      id: "728ed541",
      rank: 19,
      name: "Isha Khan",
      referalcode: "ISHA2025",
      donation: 5100,
    },
    {
      id: "728ed542",
      rank: 20,
      name: "Varun Reddy",
      referalcode: "VARUN2025",
      donation: 4800,
    },
    {
      id: "728ed543",
      rank: 21,
      name: "Zoya Sheikh",
      referalcode: "ZOYA2025",
      donation: 4600,
    },
    {
      id: "728ed544",
      rank: 22,
      name: "Rahul Kapoor",
      referalcode: "RAHUL2025",
      donation: 4350,
    },
    {
      id: "728ed545",
      rank: 23,
      name: "Ananya Sen",
      referalcode: "ANANYA2025",
      donation: 4200,
    },
    {
      id: "728ed546",
      rank: 24,
      name: "Vikram Yadav",
      referalcode: "VIKRAM2025",
      donation: 4050,
    },
    {
      id: "728ed547",
      rank: 25,
      name: "Diya Shah",
      referalcode: "DIYA2025",
      donation: 3900,
    },
  ];
}

// <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 via-transparent to-transparent rounded-lg"></div>
const page = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto my-4 px-4">
      {/* Top 3 Leaderboard Cards - Clean Design */}
      <div className="mb-8 flex items-end justify-center gap-4 max-w-4xl mx-auto">
        {[data[1], data[0], data[2]].map((user, index) => {
          const isWinner = user.rank === 1;

          // Simple color schemes for each rank
          const rankStyles = {
            1: {
              cardBg: "bg-gradient-to-b from-yellow-50 to-white",
              border: "border-yellow-300",
              podiumBg: "bg-yellow-400",
              textColor: "text-yellow-700",
              height: 120,
            },
            2: {
              cardBg: "bg-gradient-to-b from-gray-50 to-white",
              border: "border-gray-300",
              podiumBg: "bg-gray-400",
              textColor: "text-gray-700",
              height: 90,
            },
            3: {
              cardBg: "bg-gradient-to-b from-orange-50 to-white",
              border: "border-orange-300",
              podiumBg: "bg-orange-400",
              textColor: "text-orange-700",
              height: 70,
            },
          };

          const styles = rankStyles[user.rank as keyof typeof rankStyles];

          return (
            <div
              key={index}
              className="flex flex-col items-center w-full max-w-xs"
            >
              {/* Winner Crown - Simple */}
              {isWinner && (
                <div className="mb-2">
                  <span className="text-2xl">👑</span>
                </div>
              )}

              {/* User Info Card */}
              <div
                className={cn(
                  "relative mb-3 p-4 rounded-lg border-2 shadow-md w-full",
                  "hover:shadow-lg transition-shadow duration-300 bg-gray-900/70",
                  // styles.cardBg,
                  styles.border,
                  isWinner && "scale-105"
                )}
              >
                <div className="flex flex-col items-center space-y-3">
                  {/* Profile Image with Simple Rank Badge */}
                  <div className="relative">
                    <Image
                      src={"/assets/logo.jpg"}
                      width={isWinner ? 60 : 50}
                      height={isWinner ? 60 : 50}
                      alt="logo"
                      className="rounded-full border-2 border-gray-200"
                    />

                    {/* Simple Rank Badge */}
                    <div
                      className={cn(
                        "absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center",
                        "text-white font-bold text-sm shadow-md",
                        styles.podiumBg
                      )}
                    >
                      {user.rank}
                    </div>
                  </div>

                  {/* User Details */}
                  <div className="text-center space-y-1 w-full">
                    <h2
                      className={cn(
                        "font-semibold truncate",
                        isWinner ? "text-lg" : "text-base"
                      )}
                    >
                      {user.name}
                    </h2>

                    <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                        {user.referalcode}
                      </span>
                      <Copy
                        size={12}
                        className="cursor-pointer hover:text-gray-700"
                      />
                    </div>

                    <div
                      className={cn(
                        "font-bold",
                        isWinner ? "text-xl" : "text-lg",
                        styles.textColor
                      )}
                    >
                      ₹{user.donation.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Podium Base */}
              <div
                style={{
                  height: `${styles.height}px`,
                  width: "100%",
                }}
                className={cn(
                  "rounded-t-lg shadow-md relative overflow-hidden",
                  styles.podiumBg
                )}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/20"></div>

                {/* Rank number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/30 font-bold text-4xl">
                    {user.rank}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <DataTable columns={columns} data={data.slice(3)} />
    </div>
  );
};

export default page;
