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
    <div className="py-3 px-4 bg-gray-50 border-b border-gray-200 overflow-x-auto whitespace-nowrap">
      <div className="flex space-x-3">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center",
              activeTopic === topic.id
                ? "bg-[#1976d2] text-white shadow-md hover:bg-[#1565c0]"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
            )}
            onClick={() => handleTopicClick(topic.id)}
          >
            <i className={`${topic.icon} mr-2`}></i> {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
}
