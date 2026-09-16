"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

import type { GuideEntry } from "../guides-data";
import { SectionsView } from "./SectionsView";

/**
 * Slug → full bespoke guide component. Each of these is a self-contained,
 * hand-built guide (its own layout + copy blocks + css) living under
 * components/guides/*. Entries not listed here fall back to SectionsView,
 * which renders the guide's `sections` in the site design system.
 */
const REGISTRY: Record<string, ComponentType> = {
  "five-ai-employees": dynamic(
    () => import("@/components/guides/five-ai-employees/FiveAiEmployeesGuide"),
  ),
  "how-to-set-up-claude": dynamic(
    () => import("@/components/guides/claude-setup/ClaudeSetupGuide"),
  ),
  "3-prompts-better-ai-results": dynamic(
    () =>
      import(
        "@/components/guides/three-prompts-better-results/ThreePromptsBetterGuide"
      ),
  ),
  "5-ai-tools-worth-your-money": dynamic(
    () => import("@/components/guides/five-ai-tools/FiveAiToolsGuide"),
  ),
  "ai-influencer-three-files": dynamic(
    () =>
      import(
        "@/components/guides/ai-influencer-three-files/AiInfluencerThreeFilesGuide"
      ),
  ),
  "humanize-setup": dynamic(
    () => import("@/components/guides/humanize-setup/HumanizeSetupGuide"),
  ),
  "edit-videos-with-claude": dynamic(
    () => import("@/components/guides/edit-videos-claude/EditVideosClaudeGuide"),
  ),
  "transcriptx-claude-setup": dynamic(
    () => import("@/components/guides/transcriptx-claude/TranscriptxClaudeGuide"),
  ),
  "100-chatgpt-secret-codes": dynamic(
    () =>
      import("@/components/guides/chatgpt-secret-codes/ChatGptSecretCodesGuide"),
  ),
  "vet-ai-skills": dynamic(
    () => import("@/components/guides/vet-ai-skills/VetAiSkillsGuide"),
  ),
  "chatgpt-upgrade-playbook": dynamic(
    () => import("@/components/guides/chatgpt-upgrade/ChatGptUpgradeGuide"),
  ),
  "fable-five-prompts": dynamic(
    () => import("@/components/guides/fable-five/FableFiveGuide"),
  ),
  "five-claude-connectors": dynamic(
    () => import("@/components/guides/claude-connectors/ClaudeConnectorsGuide"),
  ),
  "claude-goal-command": dynamic(
    () => import("@/components/guides/goal-command/GoalCommandGuide"),
  ),
  "six-claude-content-skills": dynamic(
    () => import("@/components/guides/claude-skills/ClaudeSkillsGuide"),
  ),
  "design-with-claude-canva": dynamic(
    () => import("@/components/guides/canva-claude/CanvaClaudeGuide"),
  ),
  "claude-tag-playbook": dynamic(
    () => import("@/components/guides/claude-tag/ClaudeTagGuide"),
  ),
  "connect-claude-to-socials": dynamic(
    () => import("@/components/guides/metricool-claude/MetricoolClaudeGuide"),
  ),
  "anime-storyboard-to-video": dynamic(
    () => import("@/components/guides/anime-storyboard/AnimeStoryboardGuide"),
  ),
  "ai-clone-method": dynamic(
    () => import("@/components/guides/ai-clone-method/AiCloneMethodGuide"),
  ),
  "build-your-ai-influencer": dynamic(
    () => import("@/components/guides/ai-influencer/AiInfluencerGuide"),
  ),
  "thirty-claude-codes": dynamic(
    () => import("@/components/guides/thirty-claude-codes/ThirtyClaudeCodesGuide"),
  ),
  "ai-certifications-weekend": dynamic(
    () => import("@/components/guides/ai-certifications/AiCertificationsGuide"),
  ),
  "heygen-video-translate": dynamic(
    () => import("@/components/guides/heygen-translate/HeyGenTranslateGuide"),
  ),
  "markitdown-mcp-claude-setup": dynamic(
    () => import("@/components/guides/markitdown-setup/MarkItDownSetupGuide"),
  ),
  "the-ai-job-map": dynamic(
    () => import("@/components/guides/ai-job-map/AiJobMapGuide"),
  ),
  "30-day-ai-roadmap": dynamic(
    () => import("@/components/guides/ai-roadmap/AiRoadmapGuide"),
  ),
  "3-prompts-stop-ai-lying": dynamic(
    () => import("@/components/guides/anti-lying-prompts/AntiLyingPromptsGuide"),
  ),
};

export function GuideDocument({ entry }: { entry: GuideEntry }) {
  const Bespoke = REGISTRY[entry.slug];

  if (Bespoke) {
    return (
      <div className="mx-auto w-full max-w-[880px] px-6 py-12 md:py-16">
        <Bespoke />
      </div>
    );
  }

  return <SectionsView entry={entry} />;
}
