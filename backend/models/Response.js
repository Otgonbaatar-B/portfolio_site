// import mongoose, { Schema, Document } from "mongoose";

// interface IResponse extends Document {
//   question: string;
//   answer: string;
// }

// const ResponseSchema = new Schema({
//   question: { type: String, required: true },
//   answer: { type: String, required: true },
// });

// export default mongoose.models.Response ||
//   mongoose.model<IResponse>("Response", ResponseSchema);
import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  keywords: {
    type: [String],
    default: [],
  },
});

export default mongoose.model("Response", ResponseSchema);
