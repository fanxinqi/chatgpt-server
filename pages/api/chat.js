import chatGPT from "../../modules/utils";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { input = "", context = [] } = { ...req.body, ...req.query };
    console.log(context);
    if (!input) {
      return res.status(400).json({ error: "No input provided" });
    }
    const result = await chatGPT(context, [{ role: "user", content: input }]);
    res.status(200).json(result);
  } else {
    // Handle any other HTTP method
    res.status(400).json({ error: "Only POST method is allowed" });
  }
}
