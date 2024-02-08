import Replicate from "replicate";
import dotenv from "dotenv";

dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function getData(req, res) {
  try {
    console.log("inside get data");
   const prompt = req.body.prompt;
   console.log(prompt);
    
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          prompt: prompt,
        },
      }
    );

    // Send the output back to the client or do something with it
    console.log(output);
    return res.json({output})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
