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
    <div className="py-2 px-4 bg-white border-b border-slate-200 overflow-x-auto whitespace-nowrap">
      <div className="flex gap-2">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={cn(
              "px-3 py-1.5 text-xs font-medium rounded transition-colors flex items-center",
              activeTopic === topic.id
                ? "bg-[#0F766E] text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
            onClick={() => handleTopicClick(topic.id)}
          >
            <i className={`${topic.icon} mr-1.5`}></i> {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
}
