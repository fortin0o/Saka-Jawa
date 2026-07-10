"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  chatbotData,
  findAnswer,
  SURO_GREETING,
  SURO_FALLBACK,
  type ChatTopic,
  type ChatCategory,
} from "@/data/chatbot";

/* ─── Types ─────────────────────────────────────────────────────── */
interface Message {
  id: string;
  sender: "suro" | "user";
  text: string;
  timestamp: Date;
}

/* ─── Helpers ───────────────────────────────────────────────────── */
let msgCounter = 0;
function makeId() {
  return `msg-${Date.now()}-${++msgCounter}`;
}

/* ─── Component ─────────────────────────────────────────────────── */
export default function ChatBubble({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: makeId(),
      sender: "suro",
      text: SURO_GREETING,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  /* ─── Send a reply from Suro with fake typing delay ─── */
  const suroReply = useCallback((text: string) => {
    setIsTyping(true);
    const delay = Math.min(600 + text.length * 8, 2000);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: makeId(), sender: "suro", text, timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, delay);
  }, []);

  /* ─── Handle selecting a predefined topic ─── */
  const handleTopicClick = useCallback(
    (topic: ChatTopic) => {
      // Add user's question
      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          sender: "user",
          text: topic.label,
          timestamp: new Date(),
        },
      ]);
      setActiveCategory(null);
      suroReply(topic.answer);
    },
    [suroReply]
  );

  /* ─── Handle free-text input ─── */
  const handleSend = useCallback(() => {
    const q = input.trim();
    if (!q) return;

    setMessages((prev) => [
      ...prev,
      { id: makeId(), sender: "user", text: q, timestamp: new Date() },
    ]);
    setInput("");
    setActiveCategory(null);

    const match = findAnswer(q);
    suroReply(match ? match.answer : SURO_FALLBACK);
  }, [input, suroReply]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /* ─── Render ──────────────────────────────────────────────────── */
  return (
    <div
      className={`fixed bottom-15 right-4 sm:right-6 z-[99998] w-[min(92vw,400px)] transition-all duration-300 ${
        isOpen
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-8 pointer-events-none"
      }`}
    >
      <div className="flex flex-col h-[min(75vh,560px)] rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(78,11,17,0.25)] border border-[#4E0B11]/20">
        {/* ── Header ── */}
        <div className="bg-[#4E0B11] px-4 py-3 flex items-center gap-3 shrink-0">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#FFC832] flex items-center justify-center shrink-0">
            <Image
              src="/Assets/ChatbotProfil.webp"
              alt="Suro"
              fill
              sizes="55px"
              className="object-cover object-top scale-[1.05] translate-y-[2px]"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm leading-tight">Suro</p>
            <p className="text-[#FFC832] text-xs font-normal leading-relaxed">Pemandu Budaya Jawa</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup chat"
            className="text-white/70 hover:text-white transition-colors p-1"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>

        {/* ── Messages Area ── */}
        <div data-lenis-prevent className="flex-1 min-h-0 overflow-y-auto overscroll-contain touch-pan-y bg-[#FFF8E7] px-3 py-4 space-y-3 scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "suro" && (
                <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#FFC832] shrink-0 mr-2 mt-1">
                  <Image
                    src="/Assets/ChatbotProfil.webp"
                    alt=""
                    fill
                    sizes="38px"
                    className="object-cover object-top scale-[1.05] translate-y-[2px]"
                  />
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#4E0B11] text-white rounded-2xl rounded-br-md"
                    : "bg-white text-[#333] rounded-2xl rounded-bl-md shadow-sm border border-[#4E0B11]/10"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#FFC832] shrink-0 mr-2 mt-1">
                <Image
                  src="/Assets/ChatbotProfil.webp"
                  alt=""
                  fill
                  sizes="38px"
                  className="object-cover object-top scale-[1.05] translate-y-[2px]"
                />
              </div>
              <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-[#4E0B11]/10 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#4E0B11]/40 animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 rounded-full bg-[#4E0B11]/40 animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 rounded-full bg-[#4E0B11]/40 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* ── Quick Topics ── */}
        <div className="bg-white border-t border-[#4E0B11]/10 px-3 py-2 shrink-0">
          {/* Category Tabs */}
          <div data-lenis-prevent className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {chatbotData.map((cat: ChatCategory) => (
              <button
                key={cat.category}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === cat.category ? null : cat.category
                  )
                }
                className={`whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 shrink-0 ${
                  activeCategory === cat.category
                    ? "bg-[#4E0B11] text-white"
                    : "bg-[#FFF8E7] text-[#4E0B11] hover:bg-[#FFC832]/30"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Topic Buttons (expandable) */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeCategory ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <div className="flex flex-wrap gap-1.5">
              {chatbotData
                .find((c) => c.category === activeCategory)
                ?.topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicClick(topic)}
                    className="text-xs bg-[#FFC832]/20 text-[#4E0B11] font-medium px-3 py-1.5 rounded-full hover:bg-[#FFC832]/40 transition-colors text-left"
                  >
                    {topic.label}
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* ── Input Bar ── */}
        <div className="bg-white border-t border-[#4E0B11]/10 px-3 py-2.5 flex items-center gap-2 shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ketik pertanyaanmu..."
            className="flex-1 text-sm bg-[#FFF8E7] border border-[#4E0B11]/15 rounded-full px-4 py-2 outline-none focus:border-[#4E0B11]/40 focus:ring-2 focus:ring-[#FFC832]/30 transition-all placeholder:text-[#999] text-[#333]"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            aria-label="Kirim pesan"
            className="w-9 h-9 rounded-full bg-[#4E0B11] text-white flex items-center justify-center shrink-0 hover:bg-[#6B1520] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-90"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
