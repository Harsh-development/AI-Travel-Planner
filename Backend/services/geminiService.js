const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest"
});

const generateTrip = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);

    return result.response.text();

  } catch (error) {
    console.log("Gemini Error:", error.message);
    throw error;
  }
};

module.exports = generateTrip;