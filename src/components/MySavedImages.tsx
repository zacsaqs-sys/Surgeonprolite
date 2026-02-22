import { useEffect, useRef, useState } from "react";
import { addTopicImage, deleteTopicImage, listTopicImages } from "../storage/topicImagesDb";

type UiImg = {
  id: string;
  topicId: string;
  createdAt: number;
  caption?: string;
  mime: string;
  blob: Blob;
  url: string; // object URL
};

export default function MySavedImages({ topicId }: { topicId: string }) {
  const [images, setImages] = useState<UiImg[]>([]);
  const [activeImage, setActiveImage] = useState<UiImg | null>(null);
  const [caption, setCaption] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function load() {
    const data = await listTopicImages(topicId);

    // cleanup old object URLs safely
    images.forEach((p) => URL.revokeObjectURL(p.url));

    setImages(
      data
        .slice()
        .sort((a, b) => b.createdAt - a.createdAt)
        .map((d) => ({
          ...d,
          url: URL.createObjectURL(d.blob),
        }))
    );
  }

  useEffect(() => {
    // load when topic changes
    load().catch(console.error);

    // cleanup URLs on unmount/topic change
    return () => {
      images.forEach((p) => URL.revokeObjectURL(p.url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId]);

  async function upload(file: File | null) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    await addTopicImage({
      topicId,
      blob: file,
      mime: file.type,
      caption: caption?.trim() ? caption.trim() : undefined,
    });

    setCaption("");
    if (inputRef.current) inputRef.current.value = "";
    await load();
  }

  async function remove(id: string) {
    await deleteTopicImage(id);
    await load();
  }

  // 🔥 Paste screenshot support (Ctrl+V / Cmd+V)
  useEffect(() => {
    const handlePaste = async (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (const item of items) {
        if (item.type.startsWith("image/")) {
          const file = item.getAsFile();
          if (!file) continue;

          await addTopicImage({
            topicId,
            blob: file,
            mime: file.type,
            caption: caption?.trim() ? caption.trim() : "Pasted image",
          });

          setCaption("");
          await load();
          break;
        }
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [topicId, caption]);

  // ✅ ESC closes fullscreen image
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div style={{ marginTop: 20, border: "1px solid rgba(0,0,0,0.12)", borderRadius: 16, padding: 14 }}>
      <div style={{ fontWeight: 900, fontSize: 16 }}>📌 My Study Images</div>
      <div style={{ fontSize: 12, opacity: 0.75, marginTop: 4 }}>
        Tip: Screenshot → click anywhere on the page → <strong>Ctrl+V</strong> to paste and save to this topic.
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12, alignItems: "center" }}>
        <input
          placeholder="Caption (optional). Used for upload OR paste."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          style={{
            flex: "1 1 320px",
            padding: "10px 12px",
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.2)",
          }}
        />

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={(e) => upload(e.target.files?.[0] ?? null)}
          style={{ flex: "0 0 auto" }}
        />
      </div>

      {images.length === 0 ? (
        <div style={{ marginTop: 12, fontSize: 13, opacity: 0.75 }}>
          No saved images yet. Upload or paste screenshots while studying.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 12,
            marginTop: 12,
          }}
        >
          {images.map((img) => (
            <div
              key={img.id}
              style={{
                border: "1px solid rgba(0,0,0,0.12)",
                borderRadius: 14,
                overflow: "hidden",
                background: "white",
              }}
            >
              <img
                src={img.url}
                alt={img.caption ?? "saved image"}
                onClick={() => setActiveImage(img)}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  cursor: "zoom-in",
                }}
              />

              <div style={{ padding: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 800 }}>{img.caption ?? "—"}</div>
                <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>
                  {new Date(img.createdAt).toLocaleString()}
                </div>

                <button
                  onClick={() => remove(img.id)}
                  style={{
                    marginTop: 10,
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: 12,
                    border: "1px solid rgba(0,0,0,0.2)",
                    background: "white",
                    cursor: "pointer",
                    fontWeight: 800,
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: 20,
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={activeImage.url}
              alt={activeImage.caption ?? "saved image"}
              style={{
                maxWidth: "95%",
                maxHeight: "95%",
                borderRadius: 12,
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}