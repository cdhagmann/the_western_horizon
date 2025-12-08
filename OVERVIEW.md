# The Western Horizon — Project Overview

> **Repository:** https://github.com/cdhagmann/western_horizon  
> **Live Site:** https://cdhagmann.com/the_western_horizon/  
> **Design Chat:** [Link to original brainstorming conversation]

## What Is This?

The Western Horizon is a **design philosophy** for running West Marches campaigns where players drive the story through their goals, the GM generates content responsively, and the world is built collaboratively.

Unlike traditional West Marches (where the GM pre-builds an entire world), WH generates content **when players declare where they're going and why**. Unlike traditional campaigns (where the GM plans storylines), WH lets **stories emerge from player goals colliding with faction goals**.

## Core Philosophy

### The Five Pillars

1. **Goal-Driven Play:** Players bring goals, not reactions to GM hooks; the GM creates obstacles to those goals
2. **Responsive Generation:** Content is created when needed (between sessions), not pre-generated
3. **Collaborative Authorship:** The GM is co-author and referee, not primary storyteller
4. **Canon Integration:** All generated content becomes shared knowledge ("it always existed")
5. **Scale & Scope:** Generation procedures for each scale (history → settlement → location → wilderness → dungeon)

### The Philosophy-First Architecture

**WH is the philosophy. Systems are solutions that align with it.**

The framework defines:
- **Problems** that need solving at each scale
- **What makes a good solution** (collaborative, responsive, creates factions with goals, etc.)
- **Proven examples** of systems that work (Ex Novo, Microscope, etc.)

Systems are **modular and replaceable**. Use what works for your table. The design language works whether you roll randomly or choose deliberately—what matters is content is generated *when players pursue goals*.

### Goals Over Hooks

Traditional West Marches uses a GM-authored bulletin board of hooks. The Western Horizon inverts this:

| Traditional (Reactive) | The Western Horizon (Proactive) |
|------------------------|----------------------------------|
| GM creates hooks | Players declare goals |
| Players choose from options | GM creates obstacles to goals |
| "Here's what's available" | "What do you want?" |
| Story comes to players | Players pursue story |
| GM plans adventures | Adventures emerge from goal collision |

**Why this works:** Players bring investment (their goals). Factions provide opposition (conflicting goals). The GM provides obstacles, not storylines. Story emerges from the collision.

### The Self-Contained Expedition Structure

WH sessions follow a different structure:

| Phase | What Happens | GM Role |
|-------|--------------|---------|
| **Planning (Between Sessions)** | Players declare: "We're going to [location] to [goal]" | Content reaction: Prep that location |
| **Expedition (During Session)** | Players execute their declared plan | Adjudication reaction: Rule on actions |
| **Resolution (After Session)** | Return, log discoveries, advance faction clocks | World simulation: Update state |

This eliminates the need for "stalling tactics" or "back-pocket encounters"—you're never surprised about *where* they're going, only *what they do* when they get there.

### The Bootstrapping Problem Solved

**Problem:** Responsive generation needs player intent, but how can players form intent without knowing what exists?

**Solution:** Players bring goals from character creation. Factions pursue their own goals between sessions, creating emergent pressure. The bulletin board becomes a window into faction activity, not the primary source of adventure.

## Framework Structure

### Document Sections (`_includes/`)

| File | Section | Status | Core Problems Addressed |
|------|---------|--------|------------------------|
| `00-overview.html` | Introduction, Philosophy, Proven Solutions | ✅ Complete | Why WH? How is it different? |
| `01-session-zero.html` | Palette, Guild Charter, Player Goals | Skeleton | Initial world establishment |
| `02-settlements.html` | Founding, Districts, Factions, Buildings | Skeleton | Living towns with goals |
| `03-wilderness.html` | Terrain, Discoveries, Dangers, Travel | Skeleton | Meaningful travel and exploration |
| `04-dungeons.html` | Rumors, Mapping, Denizens, Treasures | Skeleton | Dangerous sites with ecology |
| `05-quest-prep.html` | Goal Analysis, Obstacle Design, Faction Clocks | Skeleton | Between-session content generation |
| `06-sessions.html` | Running Sessions, Recording, Post-Session | Skeleton | Adjudication and simulation |
| `07-wiki.html` | Wiki Structure, Templates, Claude Integration | Skeleton | Canon maintenance and accessibility |
| `08-appendices.html` | Oracle Tables, Solo Procedures, Quick Ref, Sources | ✅ Complete | Reference materials |

### Problem Domains → Proven Solutions

| Problem Domain | What You Need | Proven Solutions |
|----------------|---------------|------------------|
| **Play Structure** | Goal frameworks, faction clocks, obstacle design | Proactive Roleplaying |
| **History & Culture** | Shared backstory, cultural touchstones | Microscope, Chronicle |
| **Living Settlements** | Towns with factions pursuing goals | Ex Novo, Kingdom |
| **Detailed Locations** | Specific places with NPCs and atmosphere | Beak Feather & Bone, Street Magic |
| **Wilderness Travel** | Terrain that matters, emergent complications | Perilous Wilds, Hexmancer |
| **Dangerous Sites** | Dungeons with internal logic and ecology | Ex Umbra, RISE |

## Source Systems

| System | Author | Status | Notes File |
|--------|--------|--------|------------|
| **Proactive Roleplaying** | Jonah & Tristan Fishel | ✅ Complete | `notes/proactive-roleplaying.md` |
| Microscope | Ben Robbins | ⬜ Pending | `notes/microscope.md` |
| Microscope Explorer | Ben Robbins | ⬜ Pending | `notes/microscope-explorer.md` |
| Kingdom | Ben Robbins | ⬜ Pending | `notes/kingdom.md` |
| Ex Novo | Shawn Tomkin | ⬜ Pending | `notes/ex-novo.md` |
| Ex Umbra | Shawn Tomkin | ⬜ Pending | `notes/ex-umbra.md` |
| Beak, Feather, & Bone | Tyler Crumrine | ⬜ Pending | `notes/beak-feather-bone.md` |
| The Perilous Wilds | Jason Lutes | ⬜ Pending | `notes/perilous-wilds.md` |
| DELVE / RISE | Anna Blackwell | ⬜ Pending | `notes/delve-rise.md` |
| Hexmancer | Traverse Fantasy | ⬜ Pending | `notes/hexmancer.md` |

## Key Design Decisions

1. **Goals First:** Each PC has 3 goals (short/medium/long-term), player-authored, with clear endpoints and consequences

2. **Factions as Opposition:** Factions get concrete goals and clocks; they pursue their goals between sessions

3. **Two Content Modes:**
   - **Hook Seeding:** Shallow pointers from faction activity ("there's a swamp northwest")
   - **Content Realization:** Deep generation when players pursue goals

4. **Tier System:** Settlements scale with character level (1-4: Village, 5-10: Town, 11-16: City, 17+: Capital)

5. **Generation Timing:** Not responsive *during* play—responsive to player *goals* but done in prep between sessions

6. **Two Types of "Reactive":**
   - **Content Reaction:** Asynchronous, between sessions (prep the declared location)
   - **Adjudication Reaction:** Synchronous, during session (rule on player actions)

7. **Workflow:**
   - Session Zero: Players create goals, factions created with goals
   - Between sessions: Faction clocks advance, players declare intent
   - GM generates obstacles to that goal
   - Session runs with generated content
   - Post-session: Discoveries logged, faction clocks advance

8. **The Guild & Bulletin Board:** 
   - Window into faction activity, not GM-authored hooks
   - Factions post jobs advancing their goals
   - Information marketplace for player goal pursuit
   - Fallback for players without clear direction

9. **Wiki Integration:** Obsidian recommended, with Claude integration for processing session recordings and maintaining canon

## What This Framework Provides

- **Philosophy:** The "why" behind goal-driven, responsive, collaborative play
- **Problem definitions:** Clear articulation of what needs solving at each scale
- **Solution criteria:** What makes a good generation procedure for WH
- **Proven systems:** Battle-tested procedures that align with WH principles
- **Workflows:** Player intent → content generation → session play → wiki documentation
- **Integration points:** How different scales hand off to each other
- **Templates:** For wiki pages, session prep, and quick reference

**It does not prescribe mandatory systems.** Think of this as **design principles** with proven examples, not a rigid playbook.

## Tech Stack

- **Site:** Jekyll on GitHub Pages
- **Wiki:** Obsidian (recommendation)
- **Recording:** Craig bot (Discord) or local recording
- **Transcription:** Whisper or Otter AI
- **Processing:** Claude Projects

## Key Resources

- **Proactive Roleplaying:** The Game Master's Handbook of Proactive Roleplaying (Fishel & Fishel, 2023)
- **West Marches:** [westmarches.games](https://www.westmarches.games/)
- **Blades in the Dark:** Clock mechanics for faction tracking

---

*This document provides context for future work sessions. Upload alongside the relevant PDF when processing a new source system.*
