import { Router, Request, Response } from "express";
import StatusController from "../controllers/StatusGetController";
import container from '../dependency-injection';

export const register = (router: Router) => {
    const controller: StatusController = container.get('Room.controllers.StatusGetController');
    router.get("/room/status", (req: Request, res: Response) => controller.run(req, res));
}