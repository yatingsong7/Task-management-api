import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm";

//Instrantiate express app
const app: Express = express();

//Get environment variables
dotenv.config();

// Create Database Connection
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true, //Since it's a small project, it's ok to set it to true
  entities: [],
});

// define server port
const port = process.env.PORT;

// Create a default route
app.get("/", (req: Request, res: Response) => {
  res.send("Server starts on 3200 and DB starts on 3307");
});

// Once DB is connected, start listening to the requests on the default port
AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is on Port 3200");
    });
  })
  .catch((err) => {
    console.error("Error of initialization: ", err);
  });
