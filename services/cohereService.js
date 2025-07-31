const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  apiKey: process.env.CO_API_KEY,
});

// Example function to generate text
async function generateMatchSummary(resumeJSON, jobText) {
    const prompt = `
        Below is a resume in JSON format. Please parse it and compare it to the job description. List the strong matches and any missing qualifications. Keep response short.

        Resume JSON:
        ${JSON.stringify(resumeJSON, null, 2)}

        Job Description:
        ${jobText}
    `;


  const response = await cohere.generate({
    model: "command-r-plus",
    prompt,
    maxTokens: 300,
    temperature: 0.3,
  });

  return response.generations[0].text.trim();
}

module.exports = { generateMatchSummary };
