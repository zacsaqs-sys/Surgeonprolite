export type SavedTopicImage = {
  id: string;
  topicId: string;
  createdAt: number;
  caption?: string;
  mime: string;
  blob: Blob;
};

const DB_NAME = "surgeonpro-db";
const DB_VERSION = 1;
const STORE = "topic_images";

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: "id" });
        store.createIndex("byTopic", "topicId", { unique: false });
      }
    };

    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function addTopicImage(args: {
  topicId: string;
  blob: Blob;
  mime: string;
  caption?: string;
}) {
  const db = await openDb();

  const item: SavedTopicImage = {
    id: crypto.randomUUID(),
    topicId: args.topicId,
    createdAt: Date.now(),
    caption: args.caption,
    mime: args.mime,
    blob: args.blob,
  };

  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).add(item);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });

  db.close();
}

export async function listTopicImages(topicId: string) {
  const db = await openDb();

  const items = await new Promise<SavedTopicImage[]>((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const index = tx.objectStore(STORE).index("byTopic");
    const req = index.getAll(topicId);

    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });

  db.close();
  return items;
}

export async function deleteTopicImage(id: string) {
  const db = await openDb();

  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });

  db.close();
}