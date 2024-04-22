const router = require("express").Router();
const Feedback = require("../models/Feedback");

// Create new feedback
router.post("/add", async (req, res) => {
  try {
    const { name, bookName, rate, comment } = req.body;
    const newFeedback = new Feedback({
      name,
      bookName,
      rate,
      comment,
    });
    await newFeedback.save();
    res.status(201).json("Feedback Added");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating feedback" });
  }
});

// Get all feedbacks
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error retrieving feedbacks" });
  }
});

// Update a feedback by ID
router.put("/update/:id", async (req, res) => {
  const feedbackId = req.params.id;
  const { name, bookName, rate, comment } = req.body;

  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(feedbackId, {
      name,
      bookName,
      rate,
      comment,
    }, { new: true });
    if (updatedFeedback) {
      res.json({ status: "Feedback updated", feedback: updatedFeedback });
    } else {
      res.status(404).json({ error: "Feedback not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating feedback" });
  }
});

// Delete a feedback by ID
router.delete("/delete/:id", async (req, res) => {
  const feedbackId = req.params.id;
  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(feedbackId);
    if (deletedFeedback) {
      res.json({ status: "Feedback Deleted" });
    } else {
      res.status(404).json({ error: "Feedback not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting feedback" });
  }
});

// Get a feedback by ID
router.get("/get/:id", async (req, res) => {
  const feedbackId = req.params.id;
  try {
    const feedback = await Feedback.findById(feedbackId);
    if (feedback) {
      res.json({ status: "Feedback Found", feedback });
    } else {
      res.status(404).json({ error: "Feedback not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error retrieving feedback" });
  }
});

module.exports = router;
