import { Button, Input } from "@mantine/core";
import ChatBubble from "./components/ChatBubble";
import { IconSend } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { CreateMLCEngine } from "@mlc-ai/web-llm";

const initProgressCallback = (initProgress) => {
  console.log(initProgress);
};
const selectedModel = "Hermes-2-Pro-Mistral-7B-q4f16_1-MLC";

const engine = await CreateMLCEngine(
  selectedModel,
  { initProgressCallback: initProgressCallback } // engineConfig
);

const App = () => {
  const [prompt, setPrompt] = useState("");
  const containerChatRef = useRef<HTMLDivElement>(null);
  const [chat, setChat] = useState([
    { text: "hello user", who: false },
    { text: "hello bot", who: true },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPrompt("");
    console.log("loals");
    setChat([...chat, { text: prompt.trim(), who: true }]);
  };
  useEffect(() => {
    if (containerChatRef.current) {
      containerChatRef.current.scrollTop =
        containerChatRef.current?.scrollHeight;
    }
  }, [chat]);
  // Hermes-2-Pro-Mistral-7B-q4f16_1-MLC
  return (
    <div>
      <main
        ref={containerChatRef}
        className="p-3 scroll-smooth overflow-y-auto w-[95%] rounded-lg mx-auto h-[60vh] "
      >
        {chat.map(({ text, who }, index) => (
          <ChatBubble key={index} text={text} who={who} />
        ))}
      </main>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="mt-10"
      >
        <div className="flex justify-center  gap-2 items-center">
          <Input
            value={prompt}
            radius={"xl"}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-3/4"
          />
          <Button variant="light" radius={"md"} type="submit">
            <IconSend stroke={2} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default App;
