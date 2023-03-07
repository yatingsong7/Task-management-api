import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

//Instrantiate express app
const app: Express = express();

//Get environment variables
dotenv.config();

// define server port
const port = process.env.PORT;

// Create a default route
app.get("/", (req: Request, res: Response) => {
  res.send("Server starts on 3200");
});

// Start listening to the requests on the default port
app.listen(port, () => {
  console.log("Server is on Port 3200");
});
