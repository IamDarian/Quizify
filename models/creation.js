import mongoose from "mongoose";

const creationSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  tag: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  createdAt: {
    required: true,
    type: Date,
  },
});

const Creations =
  mongoose.models.Creation || mongoose.model("Creation", creationSchema);

export default Creations;
