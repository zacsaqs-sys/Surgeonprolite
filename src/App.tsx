import { useMemo, useState } from "react";
import { TOPICS } from "./data/topics";
import type { Topic } from "./types/content";
import { TopicList } from "./components/TopicList";
import { TopicReader } from "./components/TopicReader";

export default function App() {
  const topics = useMemo(() => TOPICS, []);
  const [openTopic, setOpenTopic] = useState<Topic | null>(null);

  return openTopic ? (
    <TopicReader topic={openTopic} onBack={() => setOpenTopic(null)} />
  ) : (
    <TopicList topics={topics} onOpen={setOpenTopic} />
  );
}