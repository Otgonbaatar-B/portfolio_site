// import { NextRequest, NextResponse } from "next/server";
// import dbConnect from "../../../lib/dbConnect";
// import Message from "../../../models/Message";

// export async function GET() {
//   try {
//     await dbConnect();
//     const messages = await Message.find({}).sort({ timestamp: 1 });
//     return NextResponse.json(messages);
//   } catch (error) {
//     console.error("Messages API Error:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

import express from "express";
import Message from "../../../models/Message.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find({}).sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Messages API Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
