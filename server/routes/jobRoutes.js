const express = require("express");

const router = express.Router();

const Job = require("../models/Job");

router.post("/", async (req, res) => {

  try {

    const job = new Job(req.body);

    await job.save();

    res.json({
      message: "Job Added Successfully"
    });

  }

  catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

router.get("/", async (req, res) => {

  try {

    const jobs = await Job.find();

    res.json(jobs);

  }

  catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

router.get("/:id", async (req, res) => {

  try {

    const job = await Job.findById(
      req.params.id
    );

    res.json(job);

  }

  catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

module.exports = router;