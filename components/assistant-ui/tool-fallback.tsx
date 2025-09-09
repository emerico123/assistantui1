import { makeAssistantToolUI } from "@assistant-ui/react";

export const ToolFallback = makeAssistantToolUI({
  toolName: "get_weather",
  render: ({ args, result, status }) => {

    const location = args.location as string;

    if(result)
    if (status.type === "running") return <p>Loading...</p>;
    if (status.type === "incomplete" && status.reason === "error")
      return <p>Error getting weather.</p>;
    if (status.type === "complete"  && result)
      return <p>{location} The weather is.</p>;
    return null;
  },
});