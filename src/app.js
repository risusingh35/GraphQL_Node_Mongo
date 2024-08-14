
import express from "express";
export const StartApp = () => {
    const Port = process.env.PORT
    console.log('StartApp',);
    const app = express()
    app.listen(Port, () => {
        console.log(`Server running up at ${Port}`);
    })
}