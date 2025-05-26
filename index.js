import {ChatGroq} from "@langchain/groq";
import {z} from "zod";
const joke=z.object({
      setup:z.string().describe("The setup of the Joke"),
      punchline:z.string().describe("The punchline of the Joke"),
      rating:z.string().describe("The unbiased rating of the Joke"),
})
const llm=new ChatGroq({
    apiKey:"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",
    model:"llama-3.3-70b-versatile",
    temperature:1.0,
})
const structuredLlm=llm.withStructuredOutput(joke);
const ans=await structuredLlm.invoke("Tell me a joke on Mumbai Indians");
console.log(ans);