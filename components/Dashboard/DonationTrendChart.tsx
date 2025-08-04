"use client";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {ChartLine } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import { chartConfig, donationData } from "@/constants";



export default function DonationTrendChart({
  className,
}: {
  className?: string;
}) {
  const { isMobile } = useSidebar();
  return (
    <Card className={`relative ${className}`}>
      <div className="cardbadge">
        <ChartLine size={20} className="" />
      </div>
      <CardHeader>
        <CardTitle className="text-gray-400">Donation Trend Chart</CardTitle>
        <CardDescription>jul - aug 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={donationData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis dataKey={"amount"} hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="amount"
              type="natural"
              stroke="green"
              strokeWidth={1}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter
        className={cn(
          "flex-col items-start gap-2 text-sm",
          isMobile && "hidden"
        )}
      >
        <div className="flex gap-2 leading-none font-medium">
          Donations up by 5.2% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total donations in last 7 days
        </div>
      </CardFooter>
    </Card>
  );
}
