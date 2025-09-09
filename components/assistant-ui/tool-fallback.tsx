import { makeAssistantToolUI } from "@assistant-ui/react";

// Define the type of args/outputs if needed
type MyToolArgs = {
  someInput: string;
};

type MyToolOutput = {
  result: string;
};

// ✅ Corrected custom tool UI
export const ToolFallback = makeAssistantToolUI<MyToolArgs, MyToolOutput>({
  toolName: "your_tool_name_here", // must match the tool name from your backend/tool call
  render: ({ message, status }) => {
    return (
      <div className="p-4 border rounded-md shadow-sm">
        <p className="text-sm text-muted-foreground">Tool called: {message.toolName}</p>
        {status === "loading" && <p className="text-yellow-500">Running...</p>}
        {status === "success" && <p className="text-green-600">Done!</p>}
        {status === "error" && <p className="text-red-600">Error running tool.</p>}
      </div>
    );
  },
});