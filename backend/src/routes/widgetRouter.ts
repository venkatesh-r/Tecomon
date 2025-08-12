import express from "express";
import {
  getWidgets,
  postWidgets,
  deleteWidget,
} from "../controllers/widgetController";

const widgetRouter = express.Router();

widgetRouter.get("/widgets", getWidgets);

widgetRouter.post("/widgets", postWidgets);

widgetRouter.delete("/widgets/:id", deleteWidget);

export default widgetRouter;
