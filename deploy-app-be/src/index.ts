import express, { Request, Response, NextFunction } from "express";
import cors from 'cors'
import { prisma } from "./utils/db";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    credentials: true,
    origin:'http://localhost:3000'
}))


app.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    res.send('hello world')
});
app.get("/user", async(req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.findFirst({
        where: {
            id: 2
        }
    })
    res.status(200).json({
        data: user
    })
});

app.listen(PORT, () => {
    console.log('server is running at PORT', PORT)
})
