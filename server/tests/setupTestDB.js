// server/tests/setupTestDB.js
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function setupTestDB() {
  try {
    console.log("🧪 Starting in-memory MongoDB server...");
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    console.log("🧩 Connecting to test database...");
    await mongoose.connect(uri);

    await mongoose.connection.dropDatabase();
    console.log("✅ Test database ready for use!");

    await mongoose.disconnect();
    await mongoServer.stop();
    console.log("🧹 In-memory MongoDB stopped after setup.");
  } catch (error) {
    console.error("❌ Error setting up test DB:", error);
    process.exit(1);
  }
}

setupTestDB();
