// import { NextRequest, NextResponse } from "next/server";
// import dbConnect from "../../../lib/dbConnect";
// import Message from "../../../models/Message";
// import Response from "../../../models/Response";

// export async function POST(request: NextRequest) {
//   try {
//     await dbConnect();

//     const body = await request.json();
//     const { message } = body;

//     // Save user message
//     const userMessage = await Message.create({
//       role: "user",
//       content: message,
//     });

//     // Find matching response
//     const response = await Response.findOne({
//       $or: [
//         { question: { $regex: message, $options: "i" } },
//         { keywords: { $in: message.toLowerCase().split(" ") } },
//       ],
//     });

//     let responseContent =
//       response?.answer || "Уучлаарай, би энэ асуултад хариулж чадахгүй байна.";

//     // Save assistant response
//     const assistantMessage = await Message.create({
//       role: "assistant",
//       content: responseContent,
//     });

//     return NextResponse.json({
//       message: responseContent,
//       id: assistantMessage._id,
//     });
//   } catch (error) {
//     console.error("Chat API Error:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
import express from "express";
import Message from "../../../models/Message.js";
import Response from "../../../models/Response.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    // Save user message
    const userMessage = await Message.create({
      role: "user",
      content: message,
    });

    // Find matching response
    const response = await Response.findOne({
      $or: [
        { question: { $regex: message, $options: "i" } },
        { keywords: { $in: message.toLowerCase().split(" ") } },
      ],
    });

    let responseContent =
      response?.answer || "Уучлаарай, би энэ асуултад хариулж чадахгүй байна.";

    // Save assistant response
    const assistantMessage = await Message.create({
      role: "assistant",
      content: responseContent,
    });

    res.status(200).json({
      message: responseContent,
      id: assistantMessage._id,
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
