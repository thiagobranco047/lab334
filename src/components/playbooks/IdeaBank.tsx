import type { ContentIdea } from "@/data/playbooks";

type IdeaBankProps = {
  ideas: ContentIdea[];
};

export default function IdeaBank({ ideas }: IdeaBankProps) {
  return (
    <ol className="m-0 list-none space-y-2 p-0">
      {ideas.map((idea, index) => (
        <li
          key={idea.title}
          className="flex items-start gap-4 rounded-lg border border-dashed border-presentation-line px-4 py-3"
        >
          <span className="shrink-0 font-display text-sm font-light tabular-nums text-presentation-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-body text-sm font-light leading-relaxed text-presentation-fg">
            {idea.title}
          </span>
        </li>
      ))}
    </ol>
  );
}
