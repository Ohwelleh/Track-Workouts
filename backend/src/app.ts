import "dotenv/config"
import express, { NextFunction, Request, Response } from "express"
import workoutRoutes from "./routes/workouts"
import createHttpError, { isHttpError } from "http-errors"

const app = express()

// Setting up express to accept JSON body.
app.use(express.json())


app.use("/api/workouts", workoutRoutes)

// Accessing an endpoint that does not exist.
app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found."))
})

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error)
    let errorMessage = "An unknown error occurred"

    // Defaut status code if error is not from http-error library
    let statusCode = 500
    
    if(isHttpError(error)){
        statusCode = error.status
        errorMessage = error.message
    }
    res.status(statusCode).json({ error: errorMessage })
})

export default app;