const express = require("express");
const multer = require("multer");

const router = express.Router();

const Application = require(
  "../models/Application"
);

const storage = multer.diskStorage({

  destination: function(req, file, cb) {

    cb(null, "uploads/");

  },

  filename: function(req, file, cb) {

    cb(
      null,
      Date.now() + "-" + file.originalname
    );

  }

});

const upload = multer({
  storage
});

router.post(
  "/apply",
  upload.single("resume"),
  async (req, res) => {

    try {

      const {
        name,
        email,
        skills,
        jobId
      } = req.body;

      const application = new Application({

        name,

        email,

        skills,

        jobId,

        resume: req.file.path

      });

      await application.save();

      res.json({
        message:
          "Application Submitted Successfully"
      });

    }

    catch (error) {

      res.status(500).json({
        error: error.message
      });

    }

  }
);

module.exports = router;