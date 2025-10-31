import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      maxlength: 100,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    color: {
      type: String,
      default: "#ffffff",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Note", noteSchema);
