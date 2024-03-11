import { Request, Response } from "express";

export function admin(req: Request, res: Response) {
    const token = req.cookies.access_token;
    if (!token) {
        return res.redirect("login");
    }

    return res.render("admin", { layout: "main" })
}