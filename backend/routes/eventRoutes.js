const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Get all events
router.get("/showall", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new event
router.post("/add", async (req, res) => {
  const { title, date, location, description, image } = req.body;
  const newEvent = new Event({ title, date, location, description, image });
  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an event// Delete an event
router.delete("/delete/:id", async (req, res) => {
  try {
    // Find the event by ID
    const event = await Event.findById(req.params.id);

    // If event not found, return 404
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Optional: Check permissions
    // if (req.user.id !== event.userRef) {
    //   return res.status(401).json({ message: "You can only delete your own events!" });
    // }

    // Delete the event
    await Event.findByIdAndDelete(req.params.id);

    // Send success response
    res.status(200).json({ message: "Event has been deleted" });
  } catch (err) {
    console.error(err);
    // Send error response
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
