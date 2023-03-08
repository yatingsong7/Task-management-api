import { Request, Response } from "express";

export const router = (express: any) => {
  var eRouter = express.Router();

  eRouter.get("/", (req: Request, res: Response) => {
    res.send("Server starts on 3200 and DB starts on 3307");
  });

  return eRouter;
};
