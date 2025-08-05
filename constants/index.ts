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

export const users = [
  {
    email: "riya.sharma01@gmail.com",
    password: "riyaSecure123",
    username: "RiyaS",
    firstName: "Riya",
    lastName: "Sharma",
    totalDonation: 8500,
  },
  {
    email: "aryan.desai99@gmail.com",
    password: "aryanPass99",
    username: "AryanD",
    firstName: "Aryan",
    lastName: "Desai",
    totalDonation: 7200,
  },
  {
    email: "meera.jain@gmail.com",
    password: "meeraStrong2025",
    username: "MeeraJ",
    firstName: "Meera",
    lastName: "Jain",
    totalDonation: 6900,
  },
  {
    email: "kunal.singh1998@gmail.com",
    password: "kunalSecure1",
    username: "KunalS",
    firstName: "Kunal",
    lastName: "Singh",
    totalDonation: 6100,
  },
  {
    email: "sana.patel123@gmail.com",
    password: "sanaSecret!",
    username: "SanaP",
    firstName: "Sana",
    lastName: "Patel",
    totalDonation: 5400,
  },
  {
    email: "rahul.verma@gmail.com",
    password: "rahul@2025",
    username: "RahulV",
    firstName: "Rahul",
    lastName: "Verma",
    totalDonation: 4800,
  },
  {
    email: "anita.kulkarni@gmail.com",
    password: "anitaSecure456",
    username: "AnitaK",
    firstName: "Anita",
    lastName: "Kulkarni",
    totalDonation: 4600,
  },
  {
    email: "vikas.yadav@gmail.com",
    password: "vikas2025@",
    username: "VikasY",
    firstName: "Vikas",
    lastName: "Yadav",
    totalDonation: 4500,
  },
  {
    email: "neha.das@gmail.com",
    password: "nehaLovesCode",
    username: "NehaD",
    firstName: "Neha",
    lastName: "Das",
    totalDonation: 4300,
  },
  {
    email: "omkar.rao@gmail.com",
    password: "omkarSecurePass",
    username: "OmkarR",
    firstName: "Omkar",
    lastName: "Rao",
    totalDonation: 4100,
  },
  {
    email: "priya.gupta@gmail.com",
    password: "priya@2025",
    username: "PriyaG",
    firstName: "Priya",
    lastName: "Gupta",
    totalDonation: 3900,
  },
  {
    email: "aditya.kumar@gmail.com",
    password: "adityaSecure!",
    username: "AdityaK",
    firstName: "Aditya",
    lastName: "Kumar",
    totalDonation: 3700,
  },
  {
    email: "shruti.mehra@gmail.com",
    password: "shruti2025",
    username: "ShrutiM",
    firstName: "Shruti",
    lastName: "Mehra",
    totalDonation: 3500,
  },
  {
    email: "nilesh.patil@gmail.com",
    password: "nileshSuperSecure",
    username: "NileshP",
    firstName: "Nilesh",
    lastName: "Patil",
    totalDonation: 3300,
  },
  {
    email: "tanya.bose@gmail.com",
    password: "tanya123456",
    username: "TanyaB",
    firstName: "Tanya",
    lastName: "Bose",
    totalDonation: 3200,
  },
  {
    email: "karan.agarwal@gmail.com",
    password: "karanTopDonor",
    username: "KaranA",
    firstName: "Karan",
    lastName: "Agarwal",
    totalDonation: 3100,
  },
  {
    email: "isha.rane@gmail.com",
    password: "ishaSecurePass",
    username: "IshaR",
    firstName: "Isha",
    lastName: "Rane",
    totalDonation: 2900,
  },
  {
    email: "deepak.shah@gmail.com",
    password: "deepak2025@",
    username: "DeepakS",
    firstName: "Deepak",
    lastName: "Shah",
    totalDonation: 2700,
  },
  {
    email: "divya.singhania@gmail.com",
    password: "divya1234",
    username: "DivyaS",
    firstName: "Divya",
    lastName: "Singhania",
    totalDonation: 2600,
  },
  {
    email: "mohit.khatri@gmail.com",
    password: "mohitSecure",
    username: "MohitK",
    firstName: "Mohit",
    lastName: "Khatri",
    totalDonation: 2500,
  },
];
