import { useState } from "react";
import { TOPICS } from "./data/topics";
import type { Topic } from "./types/content";
import { TopicList } from "./components/TopicList";
import { TopicReader } from "./components/TopicReader";

export default function App() {
  const [openTopic, setOpenTopic] = useState<Topic | null>(null);

  return openTopic ? (
    <TopicReader topic={openTopic} onBack={() => setOpenTopic(null)} />
  ) : (
    <TopicList topics={TOPICS} onOpen={setOpenTopic} />
  );
}