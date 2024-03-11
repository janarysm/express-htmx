import jwt from "jsonwebtoken";
import { Request, Response } from "express"

export function authenticate(req: Request, res: Response) {
  const { username, password } = req.body
  if (username === process.env.USER_NAME && password === process.env.USER_PASSWORD) {
    const token = jwt.sign({ id: 7, role: "captain" }, "YOUR_SECRET_KEY");

    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .redirect("/admin")
  }
  return res.sendStatus(401);
}
