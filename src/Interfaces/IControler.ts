import { Request, Response } from "express";

export interface IControler{
    hanlde(req: Request, res: Response):Promise<void>
}