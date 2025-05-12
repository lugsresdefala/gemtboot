import { useState } from "react";
import { cn } from "@/lib/utils";
import { TopicType, TopicPill } from "@/types";

interface TopicPillsProps {
  onTopicSelect: (topic: TopicType) => void;
}

export default function TopicPills({ onTopicSelect }: TopicPillsProps) {
  const [activeTopic, setActiveTopic] = useState<TopicType>("faq");
  
  const topics: TopicPill[] = [
    { id: "faq", label: "FAQ", icon: "fas fa-question-circle" },
    { id: "fluxos", label: "Fluxos", icon: "fas fa-route" },
    { id: "criterios", label: "Critérios", icon: "fas fa-clipboard-list" },
    { id: "especialistas", label: "Especialistas", icon: "fas fa-user-md" },
    { id: "unidades", label: "Unidades", icon: "fas fa-hospital" }
  ];
  
  const handleTopicClick = (topic: TopicType) => {
    setActiveTopic(topic);
    onTopicSelect(topic);
  };
  
  return (
    <div className="p-4 bg-neutral-lightest border-b border-neutral-light overflow-x-auto whitespace-nowrap">
      <div className="flex space-x-2">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={cn(
              "px-4 py-2 text-sm rounded-full shadow-sm transition-colors",
              activeTopic === topic.id
                ? "bg-primary text-white hover:bg-primary-dark"
                : "bg-white text-neutral-dark hover:bg-neutral-lightest"
            )}
            onClick={() => handleTopicClick(topic.id)}
          >
            <i className={`${topic.icon} mr-1`}></i> {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
}
