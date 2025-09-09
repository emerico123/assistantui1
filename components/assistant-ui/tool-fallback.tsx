import { makeAssistantToolUI } from "@assistant-ui/react";

export const ToolFallback = makeAssistantToolUI({
  toolName: "get_weather",
  render: ({ args, result, status }) => {
    if (status.type === "requires_action")
      return <p>Getting weather for {args.location}...</p>;
    if (status.type === "running") return <p>Loading...</p>;
    if (status.type === "incomplete" && status.reason === "error")
      return <p>Error getting weather.</p>;
    if (status.type === "complete")
      return <p>The weather is {result.weather}.</p>;
    return null;
  },
});