import { Schema, model, models } from "mongoose";

const RewardSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  unlockedAt: Number,
  icon: String,
  color: String,
});

const Reward = models.Reward || model("Reward", RewardSchema);

export default Reward;
