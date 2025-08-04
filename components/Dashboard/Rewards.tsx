import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Gift, Lock, Medal, Trophy, Unlock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { cn } from "@/lib/utils";
const rewards = [
  {
    id: 1,
    title: "Bronze Badge",
    description: "Congrats🎉! for raising ₹1000",
    unlocked: true,
    icon: <Medal size={40} className="text-yellow-600" />,
  },
  {
    id: 2,
    title: "Silver Badge",
    description: "Congrats🎉! for raising ₹5000",
    unlocked: false,
    icon: <Medal size={40} className="text-gray-400" />,
  },
  {
    id: 3,
    title: "Early Bird Reward",
    description: "For being an early supporter",
    unlocked: true,
    icon: <Gift size={40} className="text-pink-500" />,
  },
  {
    id: 4,
    title: "Top 10 Leaderboard",
    description: "For being in the top 10 fundraisers",
    unlocked: false,
    icon: <Trophy size={40} className="text-orange-400" />,
  },
];

const Rewards = ({ className }: { className?: string }) => {
  return (
    <Card className={`relative ${className}`}>
      <div className="cardbadge">
        <Trophy size={20} />
      </div>
      <CardHeader>
        <CardTitle>
          <p className="text-gray-400">Rewards and Achievements</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="ml-1">
            {rewards.map((reward) => (
              <CarouselItem
                key={reward.id}
                className="pl-1 basis-1/2 md:basis-1/3"
              >
                <Card className="relative">
                  <div className="w-full h-full bg-transparent absolute top-0 left-0 rounded-xl"></div>
                  <div className="absolute top-0 right-0 m-3 text-gray-500">
                    {reward.unlocked ? (
                      <Unlock size={15} />
                    ) : (
                      <Lock size={15} />
                    )}
                  </div>
                  <CardContent
                    className={cn(
                      "flex flex-col items-center justify-center gap-4 p-4",
                      !reward.unlocked && "blur-xs"
                    )}
                  >
                    {reward.icon}
                    <p className="text-sm font-medium text-center line-clamp-1">
                      {reward.title}
                    </p>
                    <p className="text-xs text-gray-400 text-center">
                      {reward.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default Rewards;
