// Helpers shared by the blog list and the post page

type Block = { _type?: string; style?: string; children?: { text?: string }[] };

// the plain text of a post's paragraphs, headings left out
function bodyText(body: unknown, { paragraphsOnly = false } = {}): string {
  if (!Array.isArray(body)) return "";
  return (body as Block[])
    .filter((b) => b._type === "block" && (!paragraphsOnly || !b.style || b.style === "normal"))
    .map((b) => (b.children ?? []).map((c) => c.text ?? "").join(""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export function readingTime(body: unknown): string {
  const words = bodyText(body).split(" ").filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

// the opening of the post, cut at a word near `length` characters
export function excerpt(body: unknown, length = 160): string {
  const text = bodyText(body, { paragraphsOnly: true });
  if (text.length <= length) return text;
  return text.slice(0, text.lastIndexOf(" ", length)).replace(/[,;:.\-–—\s]+$/, "") + "…";
}

export function formatDate(dateStr: string, month: "short" | "long" = "short") {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month,
    day: "numeric",
  });
}
