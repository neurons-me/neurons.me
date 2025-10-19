import { GUI } from "all.this";
const {  FullChatBot } = GUI;

export default function BotExamplePage() {
  return (
    <FullChatBot
      title="SupportBot Example"
      initialMessages={[{ role: 'bot', text: "Hi! I'm your Support Bot. How can I help today?" }]}
      placeholder="Type your message…"
      heightOffset={0}
    />
  );
}
