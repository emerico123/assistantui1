import { MyAssistant } from "@/components/MyAssistant";
import { ToolFallback } from "@/components/assistant-ui/tool-fallback";
import { Thread } from "@/components/assistant-ui/thread";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { runtime } from "./api/[..._path]/route";

export default function Home() {
  return (
    <main className="h-dvh">
      <MyAssistant />
    </main>
  );
}
 