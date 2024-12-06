
import { Announcement } from "../models/announcementSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

// Create a new announcement
export const createAnnouncement = async (req, res, next) => {
  const { announcement } = req.body;

  try {
    if (!announcement) {
      return handleValidationError(
        "Please fill out the form with an announcement.",
        400
      );
    }

    await Announcement.create({ announcement });

    res.status(200).json({
      success: true,
      message: "Announcement created successfully!",
    });
  } catch (err) {
    next(err); // Pass error to the global error handler
  }
};

// Get all announcements
export const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find(); // Fetch all announcements
    res.status(200).json({
      success: true,
      announcements,
    });
  } catch (err) {
    next(err); // Pass error to the global error handler
  }
};
