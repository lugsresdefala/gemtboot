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
    <div className="py-2 px-4 bg-gray-50 border-b border-gray-200 overflow-x-auto whitespace-nowrap">
      <div className="flex space-x-2 max-w-4xl mx-auto">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={cn(
              "px-3 py-1.5 text-xs font-medium transition-colors flex items-center",
              activeTopic === topic.id
                ? "bg-[#2C5282] text-white"
                : "bg-white text-gray-700 border border-gray-200"
            )}
            onClick={() => handleTopicClick(topic.id)}
          >
            {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
}
