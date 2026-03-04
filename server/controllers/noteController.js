const noteService = require("../services/noteServices");

const createNote = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("Before service");
    const { topicContent, content } = req.body;
    console.log("noteService:", noteService);
    const result = await noteService.processNote({
      topicContent,
      content
    });
    console.log("After service");

    res.status(201).json(result);

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

module.exports = {
  createNote
};