import React, { useState } from "react";

const TAB_LIST = [
  { key: "chat", label: "Chat" },
  { key: "code", label: "Code" },
  { key: "preview", label: "Preview" },
];

export const TabBar = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-2 px-4 h-12">
        {TAB_LIST.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === tab.key
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow"
                : "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === "chat" && <div>Chat interface content</div>}
        {activeTab === "code" && <div>Code editor content</div>}
        {activeTab === "preview" && <div>Preview window content</div>}
      </div>
    </div>
  );
};
