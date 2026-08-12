"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import type { SponsorSearchUIMessage } from "@/lib/agents/sponsor-search-agent";

export function SponsorChat({
  onAddCompany,
}: {
  onAddCompany: (companyName: string, companyEmail: string | null, address: string | null) => void;
}) {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat<SponsorSearchUIMessage>({
    transport: new DefaultChatTransport({ api: "/api/vivvy-pie/chat" }),
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput("");
  }

  return (
    <div className="flex h-[520px] flex-col rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-4 py-3">
        <p className="text-sm font-medium text-slate-900">Find sponsors</p>
        <p className="mt-0.5 text-xs text-slate-500">
          Describe the kind of business and where — e.g. "sporting goods stores near Austin, TX".
        </p>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
        {messages.length === 0 && (
          <p className="text-sm text-slate-400">No messages yet — ask below to get started.</p>
        )}
        {messages.map((message) => (
          <div key={message.id} className={message.role === "user" ? "text-right" : "text-left"}>
            {message.parts.map((part, i) => {
              if (part.type === "text") {
                return (
                  <p
                    key={i}
                    className={
                      message.role === "user"
                        ? "inline-block rounded-lg bg-slate-900 px-3 py-2 text-sm text-white"
                        : "inline-block rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-800"
                    }
                  >
                    {part.text}
                  </p>
                );
              }

              if (part.type === "tool-searchCompanies") {
                if (part.state === "input-available" || part.state === "input-streaming") {
                  return (
                    <p key={i} className="text-xs text-slate-400">
                      Searching companies…
                    </p>
                  );
                }
                if (part.state === "output-available") {
                  const companies = part.output.companies;
                  if (companies.length === 0) {
                    return (
                      <p key={i} className="text-xs text-slate-400">
                        No matching companies found.
                      </p>
                    );
                  }
                  return (
                    <div key={i} className="space-y-2">
                      {companies.map((c, idx) => (
                        <div
                          key={idx}
                          className="flex items-start justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-left"
                        >
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-slate-900">{c.name}</p>
                            {c.category && <p className="truncate text-xs text-slate-500">{c.category}</p>}
                            {c.address && <p className="mt-1 text-xs text-slate-600">{c.address}</p>}
                            {c.email && (
                              <p className="mt-1 text-xs text-slate-500">
                                Contact: {c.contactName}
                                {c.contactTitle && ` (${c.contactTitle})`} · {c.email}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => onAddCompany(c.name, c.email, c.address)}
                            className="flex-shrink-0 rounded-md border border-slate-300 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
                          >
                            Add to my list
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              }

              return null;
            })}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 border-t border-slate-200 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={status !== "ready"}
          placeholder="Find companies to approach…"
          className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          disabled={status !== "ready"}
          className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
