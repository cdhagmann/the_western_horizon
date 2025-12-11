---
layout: default
title: "Implementation Summary"
---

# Implementation Plan: Player Expectations & Character Creation Section

## Overview
This document outlines how to integrate a new player-facing section into The Western Horizon that bridges the gap between reactive and proactive play expectations.

## The Problem Being Solved

**Current Gap:**
- Session Zero teaches collaborative worldbuilding
- Settlements section assumes players already understand their proactive role
- No explicit guidance on the mental shift from traditional → Western Horizon play
- Character Creation Form exists but isn't contextualized within goal-driven framework
- New players especially struggle with "what am I supposed to do?"

**What This Section Provides:**
1. Clear contrast between traditional reactive play and WH proactive play
2. Explicit expectations about player responsibilities
3. Step-by-step goal-driven character creation
4. Practical guidance on between-session and during-session behavior
5. Troubleshooting for common pitfalls

## Section Structure

### Proposed Title: "I-A. The Player's Compass"

### Subsections:
1. **What Makes This Different** (10 min read)
   - The Inversion: You Drive, We React
   - The Open Table: Show Up When You Want
   - The Living World: It Always Existed
   - Collaborative Creation: We Build Together

2. **Your Role as a Player** (5 min read)
   - Primary Responsibility: Bring Goals
   - Secondary Responsibilities
   - What's NOT Expected

3. **Creating Your Character** (15 min read)
   - Step 1: Generate Your Goals
   - Step 2: Design Your Character Backward
   - Step 3: Fill Out the Character Creation Form
   - Step 4: Connect Goals to the World
   - Complete Example (Marcus Ashford)

4. **Between Sessions: The Rhythm of Play** (7 min read)
   - The Planning Phase
   - The GM Prep Phase
   - The Wiki Reference Phase

5. **During Expeditions: What to Expect** (8 min read)
   - You Start Already Committed
   - Your Actions Drive the Scene
   - Failure Creates Opportunities
   - NPCs Have Goals Too
   - The World Reacts Between Sessions

6. **Common Pitfalls (And How to Avoid Them)** (5 min read)
   - "I Don't Know What My Character Wants"
   - "I'm Waiting for the Right Moment"
   - "I Don't Want to Step on the DM's Toes"
   - "The Other Players Are Doing All the Cool Stuff"

7. **Quick Reference & Next Steps** (3 min read)
   - Checklists
   - For Players New to Open Tables
   - Next Steps

**Total estimated reading time: ~50 minutes**
**Skimmable in: ~15 minutes**

## Integration Points

### Document Flow
```
Current:
Overview → Session Zero → Settlements

Proposed:
Overview → Session Zero → Player Guide → Settlements
```

### Navigation Updates Required

**1. Create new files:**
```
_includes/01a-player-guide.html
sections/player-guide.html
```

**2. Update existing files:**
```
_includes/nav.html - Add new section to navigation
index.html - Add to table of contents
sections/session-zero.html - Add forward reference
sections/settlements.html - Add backward reference
```

### Content Callbacks

**From Session Zero:**
- References collaborative worldbuilding games players just experienced
- Assumes factions and locations now exist
- Builds on Palette and tone established

**To Settlements:**
- "As players reach higher tiers..." (references growth)
- "Using goals established in the Player Guide..."
- Assumes players understand their proactive role

**To Quest Prep:**
- GM section can reference: "As covered in the Player Guide, players arrive with goals..."
- Validates that player goal declaration is the starting point

## Key Design Decisions

### 1. Tone & Voice
**Player-facing, not GM-facing:**
- Second person ("you") instead of third person
- Addresses common concerns directly
- Conversational but not condescending
- Assumes intelligence, provides clarity

**Examples:**
- ✓ "You need to arrive with answers to: 'What does my character want?'"
- ✗ "Players should have goals prepared before sessions"
- ✓ "This is liberating, not limiting"
- ✗ "The liberation of player agency creates..."

### 2. Visual Design Elements
Consistent with existing document style:

**Tables for comparisons:**
```
| Traditional | Western Horizon |
```

**Callout boxes:**
- Philosophy (purple) - Core principles
- Tip (blue) - Practical advice
- Warning (yellow) - Common mistakes
- Examples (green) - Concrete scenarios

**Checklists:**
- Goal quality checklist
- Before/during/after session responsibilities
- Quick reference guides

### 3. Concrete Examples
**Running character example:**
Marcus Ashford appears throughout the "Creating Your Character" section, showing:
- Goal formulation → Character design → Form completion → World integration

This gives players a template to follow.

### 4. Integration with Character Creation Form
**Current form is good, needs:**
- Context within goal-driven framework
- Examples of filled sections
- Explicit connection to three-goal structure
- Explanation of how form fields map to proactive play

**Recommendation:**
Keep form as separate document but heavily reference it, possibly create a filled example as supplementary material.

## Implementation Steps

### Phase 1: Draft Review (You are here)
- [ ] Review draft content
- [ ] Provide feedback on structure
- [ ] Answer questions below
- [ ] Approve concept or request revisions

### Phase 2: HTML Conversion
- [ ] Convert markdown to HTML with proper styling
- [ ] Add callout boxes with appropriate CSS classes
- [ ] Create navigation elements
- [ ] Add section numbers and internal links

### Phase 3: Integration
- [ ] Create new files in proper locations
- [ ] Update nav.html
- [ ] Update index.html
- [ ] Add forward/backward references
- [ ] Test all links

### Phase 4: Enhancement (Optional)
- [ ] Create "Quick Start" 2-page summary
- [ ] Develop filled Character Creation Form example
- [ ] Add more concrete examples from actual play
- [ ] Create printable player handout version

## Questions for Discussion

### Structural Questions

**1. Section Division**
Should this be:
- A) One large section "Player Guide" (current draft)
- B) Two sections "Player Expectations" + "Character Creation"
- C) Three sections adding "Between Sessions Guide"

**Recommendation:** Option A keeps it cohesive, but B might make navigation easier.

**2. Character Creation Form**
Should we:
- A) Keep existing .docx as separate download
- B) Convert form content directly into HTML guide
- C) Both - guide has content, form is fillable template

**Recommendation:** Option C - best of both worlds.

**3. Quick Start Guide**
Should we create a 2-page "Quick Start for Players" that summarizes:
- Core expectations
- Goal creation basics
- Between-session rhythm
- Common pitfalls

**Recommendation:** Yes - helps new players, serves as handout for Session Zero.

### Content Questions

**4. Tone Balance**
Current draft is conversational and direct. Should it be:
- More formal (matching academic tone)?
- More casual (friendlier)?
- Current level is appropriate?

**5. Example Density**
Current draft has one running example (Marcus Ashford). Should we:
- Add more diverse examples?
- Keep it focused on one clear example?
- Add "bad example vs. good example" pairs?

**6. Overlap with Session Zero**
Some concepts appear in both sections (collaborative creation, faction goals). Should we:
- Keep overlap for reinforcement?
- Remove overlap and just reference?
- Keep but clearly label as "review"?

**Recommendation:** Keep some overlap - players might skip around, repetition aids learning.

## Success Metrics

**How will we know this section works?**

**Immediate indicators:**
- New players arrive at first session with goals
- Character Creation Forms show goal-driven design
- Players post expedition intents without prompting
- Less "what should we do?" at session start

**Long-term indicators:**
- Players refresh goals without DM reminding them
- Players reference wiki before sessions
- Proactive actions in play (not waiting for DM prompts)
- Players help onboard new players to the style

**Failure indicators:**
- Players still waiting for hooks
- Empty expedition intent channel
- "We don't know what to do" persists
- Characters lack concrete goals

If we see failure indicators, this section needs revision.

## Next Steps After Approval

1. **Finalize content** based on your feedback
2. **Convert to HTML** with proper styling
3. **Create supplementary materials** (Quick Start, form example)
4. **Integrate into site** with all navigation updates
5. **Test** with new players
6. **Iterate** based on actual use

## Files Included in This Package

1. `player-expectations-draft.md` - Full draft content
2. `implementation-summary.md` - This document
3. (To be created) `player-guide.html` - Final HTML version
4. (To be created) `player-quick-start.md` - 2-page summary

---

**Ready to proceed? Provide feedback on:**
- Overall structure and approach
- Specific content concerns
- Answers to questions above
- Additional elements needed
