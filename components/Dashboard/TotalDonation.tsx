import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ArrowRight, ArrowUp, Copy, Landmark } from "lucide-react";
import Link from "next/link";

const TotalDonation = ({ className }: { className?: string }) => {
  return (
    <Card className={`relative ${className}`}>
      <div className="cardbadge">
        <Landmark size={20} className="" />
      </div>
      <CardHeader>
        <CardTitle className="text-gray-400">Total Donation Raised</CardTitle>
        <CardAction></CardAction>
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold">₹</span>
        <NumberTicker
          value={12000}
          className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white"
        />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-green-400">
          <ArrowUp size={20} />
          <span>+500 today</span>
        </div>
        <Link
          href={"/"}
          className="flex items-center gap-2 text-sm text-gray-400 hover:underline underline-offset-4 transition-all"
        >
          see full history <ArrowRight size={14} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TotalDonation;
