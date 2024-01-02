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
});

const Creations =
  mongoose.models.Creation || mongoose.model("Creation", creationSchema);

export default Creations;
