import "dotenv/config"
import express, { NextFunction, Request, Response } from "express"
import workoutRoutes from "./routes/workouts"

const app = express()

// Setting up express to accept JSON body.
app.use(express.json())


app.use("/api/workouts", workoutRoutes)

// Accessing an endpoint that does not exist.
app.use((req, res, next) => {
    next(Error("Endpoint not found."))
})

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error)
    let errorMessage = "An unknown error occurred, In the App.use()"
    if(error instanceof Error) errorMessage = error.message
    res.status(500).json({ error: errorMessage })
})

export default app;