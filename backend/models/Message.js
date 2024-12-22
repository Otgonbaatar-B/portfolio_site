// import mongoose, { Schema, Document } from "mongoose";

// interface IMessage extends Document {
//   role: "user" | "assistant";
//   content: string;
//   timestamp: Date;
// }

// const MessageSchema = new Schema({
//   role: { type: String, required: true, enum: ["user", "assistant"] },
//   content: { type: String, required: true },
//   timestamp: { type: Date, default: Date.now },
// });

// export default mongoose.models.Message ||
//   mongoose.model<IMessage>("Message", MessageSchema);
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    enum: ["user", "assistant"],
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Message", MessageSchema);
