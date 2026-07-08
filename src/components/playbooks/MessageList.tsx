import type { KeyMessage } from "@/data/playbooks";

type MessageListProps = {
  messages: KeyMessage[];
  accentColor?: string;
};

export default function MessageList({ messages, accentColor }: MessageListProps) {
  return (
    <ul className="m-0 list-none space-y-3 p-0">
      {messages.map((message) => (
        <li
          key={message.text}
          className="flex items-start gap-3 rounded-lg border border-presentation-line bg-presentation-surface/40 px-4 py-3"
        >
          <span
            className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: accentColor ?? "#4A525A" }}
            aria-hidden="true"
          />
          <span className="font-display text-base font-light leading-relaxed tracking-lab text-presentation-fg">
            {message.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
