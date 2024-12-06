
 import { Events } from "../models/eventsSchema.js";
 import { handleValidationError } from "../middlewares/errorHandler.js";

 export const createEvents = async (req, res, next) => {
   const { event, date } = req.body; // Receive both event name and date from the frontend

   try {
     if (!event || !date) {
       const error = new Error("Please provide both event name and date");
       error.statusCode = 400;
       return next(error);
     }

     // Create new event with both the event name and date
     await Events.create({ event, date });
     res.status(201).json({
       success: true,
       message: "Event is Created!",
     });
   } catch (err) {
     next(err);
   }
 };

 export const getAllEvents = async (req, res, next) => {
   try {
     const events = await Events.find(); // Fetch all events
     res.status(200).json({
       success: true,
       events, // Return all events
     });
   } catch (err) {
     next(err);
   }
 };
