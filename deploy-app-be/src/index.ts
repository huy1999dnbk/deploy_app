import express, { Request, Response, NextFunction } from "express";
import cors from 'cors'
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    credentials: true,
    origin:'http://localhost:3000'
}))


app.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    res.send('hello world')
});
app.get("/name", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        name: 'Huy'
    })
});

app.listen(PORT, () => {
    console.log('server is running at PORT', PORT)
})
