import NodeCache from "node-cache";
import { Request, Response } from "express";
import Widget from "../modules/widget";
import { getWeather } from "../services/getWeather";

const weatherCache = new NodeCache({ stdTTL: 300 });

export const getWidgets = async (req: Request, res: Response) => {
  try {
    const widgetList = await Widget.find({});
    const data = [];
    for (const widget of widgetList) {
      const weatherData = await getWeather(widget.location);
      data.push({ ...widget.toObject(), weather: weatherData });
    }
    res.json(data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
};

export const postWidgets = async (req: Request, res: Response) => {
  try {
    const { location } = req.body;
    if (!location) {
      res.status(404).json({ error: "Location is required" });
    }

    const trimmedLocation = location.trim().toLowerCase();
    let weatherData: any = weatherCache.get(trimmedLocation);

    if (weatherCache.has(trimmedLocation)) {
      weatherData = weatherCache.get(trimmedLocation);
      console.log("cached weather");
    } else {
      console.log("Weather from API");
      weatherData = await getWeather(trimmedLocation);

      if (!weatherData || !weatherData.main) {
        return res.status(404).json({ error: "Location not found" });
      }

      weatherCache.set(trimmedLocation, weatherData);
    }

    const widget = new Widget({
      location: trimmedLocation,
    });
    const widgetSaved = await widget.save();

    res.json({
      title: "Widget added sucessfully",
      widget: widgetSaved,
      weather: weatherData,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
};

export const deleteWidget = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedWidget = await Widget.findOneAndDelete({ _id: id });
    res.json({ message: deletedWidget });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
};
