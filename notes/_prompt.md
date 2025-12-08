# Processing Prompts for The Western Horizon

Use these prompts when starting a new chat to process a source system PDF.

---

## Standard Processing Prompt

```
I'm working on The Western Horizon, a West Marches campaign framework that synthesizes multiple collaborative worldbuilding games.

**Context:**
- Repository: https://github.com/cdhagmann/western_horizon
- Live site: https://cdhagmann.com/the_western_horizon/
- Design decisions chat: [LINK TO ORIGINAL CHAT]
- Project overview: See attached OVERVIEW.md

**Task:**
Analyze the attached [SYSTEM NAME] PDF and:

1. Create `notes/[system-name].md` using the template in `notes/_template.md`
2. Extract core mechanics, key procedures, and essential tables
3. Note how this system integrates with The Western Horizon framework
4. Identify which `_includes/` sections this system should inform

**Relevant sections to potentially update:**
- [List specific _includes/ files, e.g., `_includes/02-settlements.html`]

**Attached files:**
- OVERVIEW.md (project context)
- notes/_template.md (notes template)
- [SYSTEM].pdf (source to process)
- [Relevant _includes/ file(s) to update]
```

---

## Quick Processing Prompt (When Context is Established)

```
Continuing The Western Horizon project.

Process [SYSTEM NAME] PDF:
1. → notes/[system-name].md (use template)
2. → Update [specific _includes/ file(s)]

Focus on: [specific mechanics or sections if known]
```

---

## Section Update Prompt (No New PDF)

```
Update The Western Horizon based on existing notes.

Using notes/[system-name].md, fill in the placeholder content in:
- _includes/[section].html

Specifically the sections:
- #[section-id]
- #[section-id]

Keep the existing HTML structure, replace placeholder divs with actual content.
```

---

## Multi-System Integration Prompt

```
I have notes for multiple systems. Help me write integration content.

**Available notes:**
- notes/[system-1].md
- notes/[system-2].md

**Task:**
Write the [SECTION NAME] section that synthesizes these systems, explaining:
- When to use each system
- How they hand off to each other
- Unified procedure that draws from both

**Target file:** _includes/[section].html, section #[id]
```

---

## Example: Processing Ex Novo

```
I'm working on The Western Horizon, a West Marches campaign framework.

**Context:**
- Repository: https://github.com/cdhagmann/western_horizon
- Live site: https://cdhagmann.com/the_western_horizon/
- Design chat: [LINK]

**Task:**
Analyze Ex Novo PDF and:
1. Create notes/ex-novo.md using notes/_template.md
2. Extract founding procedures, faction mechanics, development events
3. Update _includes/02-settlements.html sections:
   - #settlement-creation
   - #settlement-founding
   - #settlement-districts
   - #settlement-factions

**Attached:**
- OVERVIEW.md
- notes/_template.md
- Ex Novo.pdf
- _includes/02-settlements.html
```

---

## Notes

- Always attach OVERVIEW.md for context on design decisions
- Include the specific `_includes/` file(s) you want updated
- One PDF per session keeps context manageable
- Update OVERVIEW.md status table after each system is processed
- Commit notes files to repo for future reference
