import { makeAssistantToolUI } from "@assistant-ui/react";

export const ToolFallback = makeAssistantToolUI({
  toolName: "get_weather",
  render: ({ args, result, status }) => {
    return <p>Fallback.</p>;
  },
});