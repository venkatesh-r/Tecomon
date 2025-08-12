import { Request, Response } from "express";
import { getWidgets } from "../controllers/widgetController";
import { Widget } from "../config/database";
import { getWeather } from "../services/getWeather";
