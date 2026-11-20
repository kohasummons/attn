/**
 * The guides library lives in AttentionHQ (app.attentionfactory.io/guides).
 * The playbooks page lists those guides and every card opens the guide there.
 *
 * `fetchLiveGuides` reads the public feed so new guides show up on their own.
 * If the feed is unreachable, the page falls back to GUIDES_SNAPSHOT below,
 * which was copied from AttentionHQ on 2026-11-20.
 */

export const GUIDES_APP_URL = "https://app.attentionfactory.io/guides";
const GUIDES_FEED_URL = "https://app.attentionfactory.io/api/guides/public";

export type LiveGuide = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
};

export function guideUrl(slug: string) {
  return `${GUIDES_APP_URL}/${encodeURIComponent(slug)}`;
}

function isLiveGuide(value: unknown): value is LiveGuide {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.slug === "string" &&
    v.slug.length > 0 &&
    typeof v.title === "string" &&
    typeof v.publishedAt === "string"
  );
}

export async function fetchLiveGuides(): Promise<LiveGuide[]> {
  try {
    const res = await fetch(GUIDES_FEED_URL, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return GUIDES_SNAPSHOT;
    const data: unknown = await res.json();
    const list = (data as { guides?: unknown })?.guides;
    if (!Array.isArray(list)) return GUIDES_SNAPSHOT;
    const guides = list.filter(isLiveGuide).map((g) => ({
      slug: g.slug,
      title: g.title,
      summary: typeof g.summary === "string" ? g.summary : "",
      publishedAt: g.publishedAt,
    }));
    return guides.length > 0 ? guides : GUIDES_SNAPSHOT;
  } catch {
    return GUIDES_SNAPSHOT;
  }
}

/** Tool filters, matched against each guide's title and summary. */
export const GUIDE_TOOL_FILTERS = [
  { id: "claude", label: "Claude", pattern: /\bclaude\b/i },
  { id: "chatgpt", label: "ChatGPT", pattern: /\bchatgpt\b/i },
  { id: "gemini", label: "Gemini", pattern: /\b(gemini|google|nano banana)\b/i },
  { id: "github", label: "GitHub", pattern: /\bgithub\b/i },
  { id: "canva", label: "Canva", pattern: /\bcanva\b/i },
  { id: "higgsfield", label: "Higgsfield", pattern: /\bhiggsfield\b/i },
] as const;

export function guideTools(guide: LiveGuide): string[] {
  const text = `${guide.title} ${guide.summary}`;
  return GUIDE_TOOL_FILTERS.filter((t) => t.pattern.test(text)).map(
    (t) => t.label,
  );
}

export const GUIDES_SNAPSHOT: LiveGuide[] = [
  { slug: "find-the-right-ai-skill-for-your-next-project", title: "Find the right AI skill for your next project", summary: "Use Vercel’s Find Skills to discover, compare and install a useful workflow for your coding assistant.", publishedAt: "2026-11-18T16:58:55.309Z" },
  { slug: "erase-your-personal-data-off-the-internet-with-claude", title: "Erase your data from the internet with Claude", summary: "Use Nick Newsom's free remove-your-data skill in Claude Code to find your listings on people-search sites, file the opt-outs, and check again every week, plus what to do if you live outside the US.", publishedAt: "2026-11-18T15:39:46.663Z" },
  { slug: "claude-website-kit-stop-building-ai-looking-websites", title: "Claude Website Kit: stop building AI-looking websites", summary: "One file you paste into Claude Code that sets up 5 free design tools and bans the AI-slop look, plus 15 more tools worth saving.", publishedAt: "2026-11-17T17:48:35.325Z" },
  { slug: "audit-your-app-with-cloudflare-s-security-skill", title: "Audit your app with Cloudflare’s security skill", summary: "Install Cloudflare’s security-audit skill, run a review of your code, and turn verified findings into a fix list.", publishedAt: "2026-11-15T17:01:30.083Z" },
  { slug: "build-your-first-app-interface-with-astryx-and-ai", title: "Build your first app interface with Astryx and AI", summary: "Use Meta’s Astryx design system with an AI coding assistant to build and customise a client dashboard.", publishedAt: "2026-11-14T16:43:28.150Z" },
  { slug: "5-free-github-repos-to-build-real-agents-and-automations", title: "5 free GitHub repos to build real agents and automations", summary: "Five free GitHub repos that make finished videos, tell you what people are saying online, turn your documents into podcasts, take your meeting notes and apply to jobs for you. Simple steps for each one, no coding needed.", publishedAt: "2026-11-14T10:06:14.667Z" },
  { slug: "claude-fable-5-2-just-built-all-of-this", title: "15 Real Use Cases of Fable 5.2", summary: "Fifteen real games, films, sites, lighting studies and textures built with Claude Fable 5.2, with stills, links and credits, plus a starter prompt so you can begin your own.", publishedAt: "2026-11-12T12:02:16.361Z" },
  { slug: "5-claude-skills-for-videos-writing-and-design", title: "5 Claude Skills for Videos, Writing and Design", summary: "Install 5 free Claude skills to make animations, edit talking-head videos, clean up AI writing, get marketing help and design better websites.", publishedAt: "2026-11-11T17:46:13.237Z" },
  { slug: "how-to-connect-higgsfield-to-claude-and-create-your-first-ai-video", title: "How to Connect Higgsfield to Claude and Create Your First AI Video with Fable 5.2", summary: "Follow the screenshots to connect Higgsfield to Claude, then copy the prompts to make and refine your first AI video.", publishedAt: "2026-11-11T09:41:49.162Z" },
  { slug: "build-your-own-ai-agency-with-agency-agents", title: "Build Your Own AI Agency with Agency Agents", summary: "Install specialist AI agent roles and coordinate a practical design, development and marketing workflow.", publishedAt: "2026-11-10T16:35:56.228Z" },
  { slug: "claude-job-search", title: "Claude job search", summary: "Set up the free AI Job Search project in Claude Code, find roles worth your time, tailor your CV and cover letter, and practise for the interview.", publishedAt: "2026-11-10T07:54:00.569Z" },
  { slug: "how-to-set-up-claude-the-right-way", title: "How to set up Claude in one weekend", summary: "See what Claude can do for you, then set it up in 10 steps: the app, the right mode, your profile, connectors, a skill, a plugin, a scheduled task and a team project.", publishedAt: "2026-11-09T17:21:26.842Z" },
  { slug: "50-ways-to-find-startup-ideas", title: "50 Ways to Find Startup Ideas", summary: "50 practical ways to spot startup ideas in reviews, communities, AI chats and everyday work, plus a prompt to rank what you find.", publishedAt: "2026-11-09T09:21:52.262Z" },
  { slug: "make-ai-generated-websites-look-better-with-hallmark", title: "Make AI-Generated Websites Look Better with Hallmark", summary: "Install Hallmark, design websites with useful constraints.", publishedAt: "2026-11-08T17:07:56.783Z" },
  { slug: "5-github-repos-you-should-save-this-week-week-3", title: "5 GitHub repos you should save this week (week 3)", summary: "Five free GitHub repos for making videos, cleaning up AI writing, recording tutorials, voice typing and designing websites, with simple setup steps.", publishedAt: "2026-11-07T17:46:55.451Z" },
  { slug: "find-potential-customers-with-scrapegraphai", title: "Find Potential Customers with ScrapeGraphAI", summary: "Use ScrapeGraphAI to collect public business listings, export a CSV and verify potential customers before outreach.", publishedAt: "2026-11-07T15:25:06.342Z" },
  { slug: "everything-you-can-make-with-chatgpt-images-2-6", title: "Everything you can make with ChatGPT Images 2.6", summary: "Make looping GIFs, animated mascots, product loops and sketch-to-character animations in ChatGPT, with a prompt for each.", publishedAt: "2026-11-05T23:47:35.688Z" },
  { slug: "40-claude-commands-to-edit-better-videos", title: "40 Claude Commands to Edit Better Videos", summary: "Install the Claude video-effects skill and use these 40 commands to add captions, movement, transitions and visual effects to your videos.", publishedAt: "2026-11-05T18:33:58.061Z" },
  { slug: "how-to-analyse-stocks-with-ai-using-claude", title: "How to analyse stocks with AI using Claude", summary: "Install Day Trader Skill for Claude Code.", publishedAt: "2026-11-05T17:56:13.262Z" },
  { slug: "3-ways-to-create-ai-content-and-make-money-without-filming", title: "3 ways to create AI content and make money without filming", summary: "Make animated explainers, short drama series and AI avatar videos with the exact tools, steps and prompts, without ever filming yourself.", publishedAt: "2026-11-04T15:14:43.830Z" },
  { slug: "find-potential-customers-with-harvey-ai", title: "Find potential customers with Harvey AI", summary: "Set up Harvey sales agent, find prospects on autopilot.", publishedAt: "2026-11-04T15:09:41.549Z" },
  { slug: "how-to-remove-claude-s-text-watermark", title: "How to remove Claude's text watermark", summary: "Can you Prompt your way around the claude watermark system?", publishedAt: "2026-11-04T12:36:49.622Z" },
  { slug: "turn-ai-design-slop-into-pro-designs-with-chatgpt", title: "Turn AI design slop into pro designs with ChatGPT", summary: "Three ways to make ChatGPT designs look professional: one follow-up prompt, design prompts from an ex-Warner and Spotify designer, and a Pinterest design direction you turn into your own prompt.", publishedAt: "2026-11-03T18:59:27.272Z" },
  { slug: "5-claude-connectors-that-make-you-unbeatable", title: "5 Claude connectors that make you unstoppable", summary: "Connect PostHog, TranscriptX, Firecrawl, Perplexity and Composio to Claude, with a prompt to try on each one.", publishedAt: "2026-11-03T00:43:27.715Z" },
  { slug: "how-to-use-prompt-motion-copy-any-claude-motion-graphic", title: "How to use Prompt Motion: copy any Claude motion graphic", summary: "Find a motion graphic you like on Prompt Motion, copy the exact prompt behind it, make it yours, and turn it into an MP4 with Claude.", publishedAt: "2026-11-02T17:39:46.261Z" },
  { slug: "5-design-skills-that-make-claude-code-build-better-ui", title: "This 5 Skills teach Claude Code to build better UI", summary: "5 free design skills that make Claude Code & Codex build beautiful websites and apps.", publishedAt: "2026-11-01T19:33:29.616Z" },
  { slug: "swap-yourself-into-any-video-scene-with-chatgpt", title: "Swap yourself into any video scene with ChatGPT", summary: "Recreate any viral clip with you in it, using one ChatGPT prompt and Higgsfield Genjutsu.", publishedAt: "2026-11-01T17:53:12.168Z" },
  { slug: "5-github-repos-you-should-save-this-week-week-2", title: "5 GitHub repos you should save this week (week 2)", summary: "Five free GitHub repos for social posts, voice, browser tasks, project planning and slides, with what each one does and a simple way to start.", publishedAt: "2026-10-31T17:21:23.509Z" },
  { slug: "30-ai-terms-every-beginner-should-know-with-real-examples", title: "30 AI Terms Every Beginner Should Know (With Real Examples)", summary: "A beginner-friendly AI glossary", publishedAt: "2026-10-30T18:05:35.558Z" },
  { slug: "5-things-to-build-inside-claude-this-weekend", title: "5 things to build inside Claude this weekend", summary: "Copy and paste prompts and setup steps for 5 Claude builds: a morning dashboard, a second brain, a video editor, an AI team and a mentor council.", publishedAt: "2026-10-30T15:04:05.618Z" },
  { slug: "how-to-generate-designs-for-free-in-canva-with-ai", title: "How to Generate Designs for Free with Canva Craft AI", summary: "", publishedAt: "2026-10-29T19:48:16.736Z" },
  { slug: "build-your-own-board-of-ai-mentors", title: "Build your own board of AI mentors", summary: "Get a free skill that turns people you look up to into AI mentors who debate your question and agree on one decision, set up in Claude or ChatGPT.", publishedAt: "2026-10-28T08:37:41.585Z" },
  { slug: "black-october-5-steps-to-secure-your-accounts", title: "Black October: 5 Steps to Secure Your AI Accounts", summary: "Five steps to protect your passwords, email, apps and phone after October's wave of AI-linked hacks, plus a free prompt that audits your whole digital life.", publishedAt: "2026-10-28T05:16:04.099Z" },
  { slug: "how-to-turn-one-product-photo-into-3-ads-with-nano-banana", title: "How to Create Product Ads from 1 Image With Nano Banana", summary: "", publishedAt: "2026-10-26T20:12:19.954Z" },
  { slug: "8-paid-alternatives-to-google-s-free-ai-tools", title: "8 Paid Alternatives to Google's Free AI Tools", summary: "", publishedAt: "2026-10-22T19:00:50.579Z" },
  { slug: "10-one-line-prompts-to-talk-to-ai-better", title: "10 one-line prompts to talk to AI better", summary: "Ten short prompts that get better answers from ChatGPT and Claude, plus a free file you upload once so the AI asks you the right questions instead of guessing.", publishedAt: "2026-10-22T18:46:21.190Z" },
  { slug: "google-skills-for-claude-code-a-simple-starter-guide", title: "How to Set Up Google Skills in Claude Code", summary: "What Google skills do, which ones to choose, and how to start using them—with official links and a copyable prompt.", publishedAt: "2026-10-21T19:53:17.559Z" },
  { slug: "5-free-github-repos-for-claude-motion-graphics", title: "5 Free GitHub Repos for Claude Motion Graphics", summary: "Five free GitHub projects that help Claude make animations, motion graphics and videos, with what each one does, how to set it up and a prompt to try.", publishedAt: "2026-10-21T19:52:07.276Z" },
  { slug: "edit-your-videos-with-claude-and-remotion", title: "Edit your videos with Claude and Remotion", summary: "Turn a raw talking-head video into a finished, captioned video with Claude and Remotion, with a prompt for every step and a Skill you can reuse.", publishedAt: "2026-10-21T08:12:53.079Z" },
  { slug: "4-free-github-tools-to-make-better-looking-websites-with-ai", title: "How to Build Creative Websites Using GitHub and AI", summary: "A beginner-friendly guide to four creative GitHub projects, including examples, repository links, and copyable prompts for using them with AI coding assistants.", publishedAt: "2026-10-20T18:58:16.732Z" },
  { slug: "7-ai-tools-every-creator-should-run-in-chatgpt", title: "7 AI tools every creator should run in ChatGPT", summary: "Connect Metricool, TranscriptX, Remotion, Respond.io, vidIQ, Higgsfield and HeyGen to ChatGPT, with the setup steps and a prompt to try for each one.", publishedAt: "2026-10-20T11:10:43.351Z" },
  { slug: "ai-ugc-video-guide", title: "How to Create AI UGC Videos", summary: "Make a short product advert in Google Flow, with reference images, three shot prompts and a simple editing plan.", publishedAt: "2026-10-20T03:23:40.325Z" },
  { slug: "build-4-ai-systems-in-one-weekend", title: "Build 4 AI systems in one weekend", summary: "Set up an AI second brain, an always-on agent, an executive assistant and a marketing and content agent, with a weekend plan and a prompt for each one.", publishedAt: "2026-10-19T17:49:17.603Z" },
  { slug: "if-i-had-no-money-these-are-the-ai-tools-i-d-use", title: "If I Had No Money, These Are the Free AI Tools I'd Use", summary: "Nine Google AI tools, their homepages, what they do and direct access links.", publishedAt: "2026-10-17T15:49:34.835Z" },
  { slug: "10-practical-ways-to-use-gemini-4-argon-for-your-job-or-business", title: "10 Practical Ways to Use Gemini 4 Argon for Your Job or Business", summary: "Ten concrete projects for teachers, retailers, creatives, consultants and entrepreneurs, each with a copyable starter prompt, required materials, and practical ways to use the result.", publishedAt: "2026-10-17T09:54:06.280Z" },
  { slug: "build-your-own-ai-agents-with-astra-5-practical-setup-guides", title: "How to Build AI Agents with ChatGPT Astra 6", summary: "Five useful Astra agent workflows with step-by-step setup and individually copyable AttentionHQ prompts for jobs, business reporting, competitor research, website QA, and browser tasks.", publishedAt: "2026-10-14T19:21:21.900Z" },
  { slug: "build-your-first-game-with-ai-in-7-steps", title: "Build your First Game with AI in 7 steps", summary: "Nigerian games are taking over the internet, and none of them came from a game studio.", publishedAt: "2026-10-14T13:55:48.016Z" },
  { slug: "ai-agents-comparison", title: "The AI Agents Comparison Guide", summary: "", publishedAt: "2026-10-08T11:26:55.377Z" },
  { slug: "how-to-help-your-business-show-up-in-ai-search", title: "How to Help Your Business Show Up in AI Search", summary: "", publishedAt: "2026-10-03T21:06:49.411Z" },
  { slug: "ai-income-streams", title: "5 AI Income Streams: The Beginner's Playbook", summary: "", publishedAt: "2026-10-01T20:50:41.519Z" },
  { slug: "creating-brand-visuals", title: "Build a Brand with AI: Creating Brand Visuals", summary: "", publishedAt: "2026-09-30T21:25:23.037Z" },
  { slug: "the-ai-agent-safety-guide", title: "How to give AI agents access without giving them too much", summary: "", publishedAt: "2026-09-29T20:16:32.032Z" },
  { slug: "how-to-create-and-run-local-ai-models", title: "How to Create and Run Local AI Models", summary: "Learn how to run AI on your own computer, choose a model that fits your hardware, and create a custom local assistant", publishedAt: "2026-09-26T18:37:37.190Z" },
  { slug: "5-github-repos-to-make-your-ai-website-look-better", title: "5 GitHub Repos to make your AI Website look better", summary: "", publishedAt: "2026-09-23T20:21:26.938Z" },
  { slug: "how-to-connect-your-social-media-accounts-to-claude", title: "How to Connect Your Social Media Accounts to Claude", summary: "Learn how to connect Claude to your social media accounts", publishedAt: "2026-09-23T18:29:20.174Z" },
  { slug: "27viral-image-prompts", title: "27 Viral Image Prompts for ChatGPT", summary: "Create amazing images for your brand using this cheat codes", publishedAt: "2026-09-21T09:01:55.640Z" },
  { slug: "the-ai-business-workflow", title: "The AI Business Workflow", summary: "Build simple business tools with AI. Turn them into demos. Turn demos into clients.", publishedAt: "2026-09-20T05:48:21.552Z" },
  { slug: "the-chatgpt-image-2-5-money-making-guide", title: "The ChatGPT Image 2.5 Money-Making Guide", summary: "Learn how to turn ChatGPT Image 2.5 into a profitable design skill.", publishedAt: "2026-09-17T18:35:52.724Z" },
  { slug: "claude-plugins-connectors-skills-a-beginner-s-guide", title: "Claude Plugins, Connectors & Skills: A Beginner’s Guide", summary: "Learn what Plugins, Connectors and Skills do and when to use each one.", publishedAt: "2026-09-16T22:00:17.751Z" },
  { slug: "the-3-levels-of-ai", title: "The 3 Levels of AI", summary: "Learn where you are on your AI journey, what to learn next, and how to go from using AI to building with it.", publishedAt: "2026-09-15T19:14:04.864Z" },
];
