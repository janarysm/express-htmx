import { Request, Response } from "express";

export function admin(req: Request, res: Response) {
    return res.render("admin", {layout: "main"})    
}