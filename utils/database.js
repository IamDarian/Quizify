import mongoose from "mongoose";

let connected = false;

async function connectDatabase() {
  mongoose.set("strictQuery");

  if (connected) {
    console.log("The MongoDB database is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "creation",
      useNewUrlParser: true,
    });
    connected = true;
    console.log("The MongoDB database has connected successfully");
  } catch (err) {
    console.log(err);
  }
}

export { connectDatabase };
