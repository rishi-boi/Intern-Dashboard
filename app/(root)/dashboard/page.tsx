import TotalDonation from "@/components/Dashboard/TotalDonation";
import Rewards from "@/components/Dashboard/Rewards";
import DonationTrendChart from "@/components/Dashboard/DonationTrendChart";
import LeaderBoard from "@/components/Dashboard/LeaderBoard";

const Page = () => {
  return (
    <div className="my-4 dashboard grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TotalDonation />
      <Rewards />
      <DonationTrendChart />
      <LeaderBoard />
    </div>
  );
};

export default Page;
