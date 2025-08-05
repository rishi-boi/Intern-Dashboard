import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Declare global type for mongoose cache
declare global {
  var mongoose: {
    conn: typeof import("mongoose") | null;
    promise: Promise<typeof import("mongoose")> | null;
  };
}

const cached = globalThis.mongoose || { conn: null, promise: null };

if (!globalThis.mongoose) {
  globalThis.mongoose = cached;
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "dashboard",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
