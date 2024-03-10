import { Request, Response } from "express"

export function authenticate (req: Request, res: Response) {
  console.log(req.body)
  return res.redirect("/admin")
}