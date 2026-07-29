import { useState } from "react";
import { chatKnowledge } from "../data/content";

function botReply(q) {
  const s = q.toLowerCase();
  if (s.includes("skill")) return chatKnowledge.skills;
  if (s.includes("experience") || s.includes("work") || s.includes("job")) return chatKnowledge.experience;
  if (s.includes("project")) return chatKnowledge.projects;
  if (s.includes("educat") || s.includes("degree") || s.includes("college") || s.includes("university"))
    return chatKnowledge.education;
  if (s.includes("research") || s.includes("patent") || s.includes("publicat") || s.includes("ieee"))
    return chatKnowledge.research;
  if (s.includes("contact") || s.includes("email") || s.includes("phone") || s.includes("reach"))
    return chatKnowledge.contact;
  if (s.includes("locat") || s.includes("relocat") || s.includes("where")) return chatKnowledge.location;
  if (s.includes("resume") || s.includes("cv")) return chatKnowledge.resume;
  return "I can answer questions about Rehan's skills, experience, projects, education, research or contact info — try one of those!";
}

const CHIPS = ["skills", "experience", "contact"];

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { who: "bot", text: "Hi! Ask me about Rehan's skills, experience, projects, education or how to reach him." },
  ]);
  const [input, setInput] = useState("");

  function send(text) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { who: "user", text: q }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { who: "bot", text: botReply(q) }]);
    }, 300);
  }

  return (
    <>
      <div id="chat-toggle" onClick={() => setOpen((v) => !v)}>
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      {open && (
        <div id="chat-panel">
          <div className="chat-head">
            <b>Ask about Rehan</b>Quick answers from his résumé
          </div>
          <div className="chat-body">
            {messages.map((m, i) => (
              <div className={`chat-msg ${m.who}`} key={i}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="chat-suggestions">
            {CHIPS.map((c) => (
              <span className="chip" key={c} onClick={() => send(c)}>
                {c === "skills" ? "Skills?" : c === "experience" ? "Experience?" : "Contact?"}
              </span>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
            />
            <button onClick={() => send(input)}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

// NOTE: this is a lightweight, rule-based keyword matcher against local
// content only — not a live LLM. To wire up a real AI assistant, POST the
// user's question plus data/content.js to your own backend endpoint that
// calls the Anthropic API (never call it directly from the browser, since
// that would expose your API key). See README.md.
