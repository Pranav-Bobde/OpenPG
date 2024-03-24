import { env } from "@/env";
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const client = new OpenAIClient(
  env.AZURE_OPENAI_BASE_URL,
  new AzureKeyCredential(env.AZURE_OPENAI_API_KEY)
);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

// POST /chat
export async function POST(req: Request) {
  const { messages } = await req.json();

  // Ask Azure OpenAI for a streaming chat completion given the prompt
  const response = await client.streamChatCompletions(
    env.AZURE_OPENAI_MODEL,
    messages,
    {
      temperature: 0,
    }
  );

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
