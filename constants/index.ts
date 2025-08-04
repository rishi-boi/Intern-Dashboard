import { icons } from "lucide-react";

export const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Our Story",
    urL: "/our-story",
  },
  {
    name: "Our Certificate",
    url: "/our-certificate",
  },
  {
    name: "Donate",
    url: "/donate",
  },
];

export const sideBarLinks = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: icons.LayoutDashboard,
  },
  {
    name: "Leaderboard",
    url: "/leaderboard",
    icon: icons.Trophy,
  },
];

export const leaderboard = [
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

export const rewards = [
  {
    id: 1,
    title: "Bronze Badge",
    description: "Congrats🎉! for raising ₹1000",
    unlocked: true,
    icon: icons.Medal,
    color: "text-yellow-600",
  },
  {
    id: 2,
    title: "Silver Badge",
    description: "Congrats🎉! for raising ₹5000",
    unlocked: false,
    icon: icons.Medal,
    color: "text-gray-400",
  },
  {
    id: 3,
    title: "Early Bird Reward",
    description: "For being an early supporter",
    unlocked: true,
    icon: icons.Gift,
    color: "text-pink-500",
  },
  {
    id: 4,
    title: "Top 10 Leaderboard",
    description: "For being in the top 10 fundraisers",
    unlocked: false,
    icon: icons.Trophy,
    color: "text-orange-400",
  },
];

export const donationData = [
  { date: "Jul 28", amount: 500 },
  { date: "Jul 29", amount: 800 },
  { date: "Jul 30", amount: 900 },
  { date: "Jul 31", amount: 1200 },
  { date: "Aug 01", amount: 2000 },
  { date: "Aug 02", amount: 2500 },
  { date: "Aug 03", amount: 3000 },
];
export const chartConfig = {
  amount: {
    color: "var(--color-desktop)",
    label: "Amount",
  },
};
