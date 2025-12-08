# The Western Horizon — Project Overview

> **Repository:** https://github.com/cdhagmann/western_horizon
> **Live Site:** https://cdhagmann.com/the_western_horizon/
> **Design Chat:** [Link to original brainstorming conversation]

## What Is This?

The Western Horizon is a unified framework for running West Marches campaigns using collaborative worldbuilding games. Instead of pre-generating content, the world is built **reactively** when players declare intent. Once established, content "always existed" as common knowledge.

## Core Philosophy

1. **Reactive Generation:** Content is created when needed, not before
2. **Collaborative Authorship:** Players and DMs build the world together
3. **Canon Integration:** All generated content becomes shared knowledge
4. **System Synthesis:** Multiple worldbuilding games combined by scale

## Framework Structure

### Document Sections (`_includes/`)

| File | Section | Status | Primary Sources |
|------|---------|--------|-----------------|
| `00-overview.html` | Introduction, Philosophy, Systems Overview | Skeleton | — |
| `01-session-zero.html` | Palette, Guild Charter, Starting Era | Skeleton | Microscope, Kingdom, Ex Novo |
| `02-settlements.html` | Founding, Districts, Factions, Buildings, NPCs | Skeleton | Ex Novo, BF&B, Street Magic |
| `03-wilderness.html` | Terrain, Discoveries, Dangers, Travel | Skeleton | Perilous Wilds, Hexmancer |
| `04-dungeons.html` | Rumors, Mapping, Denizens, Treasures | Skeleton | Ex Umbra, RISE |
| `05-quest-prep.html` | Intent, Generation, Hooks | Skeleton | — |
| `06-sessions.html` | Running Sessions, Recording, Post-Session | Skeleton | — |
| `07-wiki.html` | Wiki Structure, Templates, Claude Integration | Skeleton | — |
| `08-appendices.html` | Oracle Tables, Solo Procedures, Quick Ref, Sources | Skeleton | All |

### Scale → System Mapping

| Scale | Primary Systems | Output |
|-------|-----------------|--------|
| **History** | Microscope, Chronicle | Eras, events, defining moments |
| **Settlement** | Ex Novo, Kingdom | Districts, factions, development |
| **Building** | Beak Feather & Bone, Street Magic | Locations, NPCs, relationships |
| **Wilderness** | Perilous Wilds, Hexmancer | Terrain, discoveries, dangers |
| **Dungeon** | Ex Umbra, RISE | Layouts, threats, treasures |

## Source Systems to Process

| System | Author | Status | Notes File |
|--------|--------|--------|------------|
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

1. **Tier System:** Settlements scale with character level (1-4: Village, 5-10: Town, 11-16: City, 17+: Capital)

2. **Generation Timing:** Not reactive *during* play—reactive to player *intent* but done in prep before sessions

3. **Workflow:**
   - Player posts intent in Discord
   - DM (possibly with player) does prep using generation systems
   - Canon updated before session
   - Session runs with established content
   - Post-session: discoveries logged to wiki

4. **The Guild:** Adventurers' Guild serves as the framing device—bulletin board, branches at different tiers, shared knowledge base

5. **Wiki Integration:** Obsidian recommended, with Claude integration for processing session recordings and maintaining canon

## Tech Stack

- **Site:** Jekyll on GitHub Pages
- **Wiki:** Obsidian (recommendation)
- **Recording:** Craig bot (Discord) or local recording
- **Transcription:** Whisper or Otter AI
- **Processing:** Claude Projects

---

*This document provides context for future work sessions. Upload alongside the relevant PDF when processing a new source system.*
