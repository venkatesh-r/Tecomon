import mongoose, { model, Schema } from "mongoose";

interface IWidget {
  location: string;
  createdAt: string;
  updatedAt: string;
}

const widgetSchema = new Schema<IWidget>(
  {
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const widget = model<IWidget>("Widget", widgetSchema);

export default widget;
