---
layout: post
title: "The Shadow Map: A Wave Function Collapse Engine for Living Settlements"
subtitle: "How quantum mechanics, graph theory, and children's fantasy novels converge on a generation engine for West Marches campaigns"
date: 2026-02-20
tags: [generation-engine, wave-function-collapse, design-philosophy, settlements]
---

> *"The whole thing moves around according to the needs of narrative… if we act like the kind of folk who would find a Fairy city whilst on various adventures involving tricksters, magical shoes, and hooliganism, it will come to us."*
> — A-Through-L, in Catherynne M. Valente's *The Girl Who Circumnavigated Fairyland in a Ship of Her Own Making*

---

## The Problem

The Western Horizon asks GMs to generate content responsively — when players declare where they're going and why, not months in advance. But "responsive" has a tension baked into it. If you generate a settlement the night before a session, you're reacting to *this* party's composition and *this* session's quest. What happens when a different party visits the same settlement next week?

You either pre-generate everything (defeating the purpose of responsive generation) or you generate piecemeal and hope nothing contradicts itself (fragile, stressful, and the source of most GM burnout in West Marches campaigns).

We need a system that generates *complete, coherent settlements* — but generates them *around* the specific party and quest that triggered the generation. And it needs to gracefully handle new information without invalidating what players have already experienced.

Wave Function Collapse gives us all of this.

---

## Wave Function Collapse, Briefly

If you've seen those satisfying procedural generation videos where a grid of possibilities resolves itself tile by tile into a coherent image, you've seen WFC. The algorithm is simple:

1. Every cell starts in **superposition** — it could be anything.
2. Find the cell with the **lowest entropy** (fewest remaining possibilities).
3. **Collapse** it — pick one possibility.
4. **Propagate** constraints to neighbors — some of *their* possibilities are now impossible.
5. Repeat until every cell is resolved.

The magic is in step 2. By always resolving the most constrained cell first, WFC guarantees that the most *interconnected* elements get defined first. Everything else fills in around them. The output is coherent because the algorithm prioritizes coherence at every step.

The thing is — if you've ever played Beak, Feather & Bone, or Microscope, or any collaborative worldbuilding game — you've already been doing WFC by hand. When BF&B asks you to draw a card and define a building, you're collapsing a cell. The card's suit constrains the building's temporal frame. The faction you chose constrains its purpose. The buildings already placed constrain what makes sense next. You're intuitively picking the most constrained, most interesting open question and resolving it.

WFC isn't a metaphor we're imposing on TTRPG generation. It's the unifying language for what these tools were already doing. The engine just automates it.

---

## The Bunk Bed Model

Here's where the architecture gets interesting.

A settlement in The Western Horizon isn't a flat grid of buildings. It's a **multi-layered graph** — and the layers matter. We borrow a concept from percolation theory called the bunk bed graph: multiple copies of a graph stacked on top of each other, connected by vertical edges called "posts."

A story, at its simplest, is **a person in a place with a problem**. That's also our architecture.

The graph has six layers — three primary, three secondary. Each primary layer has an **opposite** that gives it depth:

- A **Person** has **Allegiances** → People layer ↔ Faction layer
- A **Place** has **Context** → Settlement layer ↔ Geography layer
- A **Problem** has **Meaning** → Quest layer ↔ Lore layer

Without its opposite face, each layer is flat. A person without faction ties is just a name. A settlement without regional context is just a map. A quest without lore is just a fetch quest. The opposite layer is what makes each one *matter*.

Picture a die. Six faces, each one a graph. Posts don't just connect adjacent layers — they tunnel *through the die*, connecting any face to any other:

- **People** — NPCs, player characters, guild members
- **Factions** — political groups, power structures, allegiances
- **Settlement** — buildings, landmarks, districts
- **Geography** — hexes, terrain, regional features, routes
- **Quests** — active hooks, leads, McGuffin fragments, side quests
- **Lore** — rumors, secrets, legends, prophecies, discoverable knowledge

The innkeeper (people) posts into the tavern (settlement) and the Merchants faction (faction). A quest hook (quest) posts into the NPC who carries it (people) and the location where it's relevant (settlement). A legend about a buried temple (lore) posts into a wilderness hex (geography), the Clerics faction who sealed it (faction), and the quest to unseal it (quest).

History — the *temporal* dimension — isn't a layer. It's the **type and weight on every edge**. When the engine creates a post between the Miners faction and a building, it simultaneously generates the reason for that connection: "the Miners built this smelter thirty years ago when the copper vein was discovered." Microscope Chronicle and Ex Novo don't generate nodes — they generate *reasons for connections*. History is what makes edges meaningful instead of arbitrary.

The entire settlement is this six-faced die. WFC collapses it. Players traverse it. And the engine's core constraint axiom is simple: **every node must have at least one post to its opposite face.** Every person gets a faction edge. Every building gets a geography edge. Every quest gets a lore edge. That's minimum viable coherence — the thing that makes generated content feel like a story and not a spreadsheet.

### Why "Bunk Bed"?

The bunk bed conjecture (recently and famously disproven in 2024) said that you're always more likely to reach a destination by staying on your own layer than by jumping between layers. Turns out that's false — and the failure is exactly what makes our model interesting.

A rogue doesn't just see "the criminal parts of the same city." Their posts into the settlement might traverse a completely different path than a paladin's. The rogue's connection to the Thieves Guild (faction layer) might route through a seemingly innocent herbalist (people layer) who operates from a shop adjacent to the guild's safehouse (settlement layer), leading to a quest hook the paladin would never encounter — not because it's hidden, but because the paladin's graph traversal never passes through those nodes.

The city is the same graph. Different parties navigate it differently. Not because they see different cities, but because the paths between layers are asymmetric.

---

## Seeds, Not Hooks

In a traditional West Marches game, the GM posts hooks on a bulletin board and players pick one. In The Western Horizon, players bring goals. But in the WFC engine, something more specific happens.

Each session has a **focal player** and a **focal quest**. These aren't just context — they're **seed tiles**. They collapse first, before anything else, and everything in the settlement propagates from them.

The herbalist wants to find a legendary herb garden rumored to exist near Thornwall. That quest and that player are the seeds. The engine collapses them into the graph, then propagates:

- The herb garden collapses into the settlement layer (it exists, it has a location)
- The Farmers faction gains a post to the herb garden (they know about local plants)
- An NPC collapses in the people layer — someone who tends or guards or knows about the garden
- That NPC's faction affiliation constrains which other buildings and people are nearby
- The party's other members propagate their own constraints — the fighter's presence means a martial lead exists somewhere, the bard's social skills guarantee a social pathway

The settlement grows outward from the seeds, like a crystal forming around a nucleation point.

### The Party Isn't Fixed

West Marches parties are ad hoc. The herbalist's "usual" group might not be available, so they recruit whoever's free from the guild roster. This means the party composition is a *variable input* to the engine, not a fixed one.

Different party compositions produce different collapses of the same settlement. Not different settlements — different *realizations* of the same constraint graph. The buildings and factions are stable (those are structural constraints). But which NPCs carry which leads, which paths are navigable, which content is richest — that shifts based on who shows up.

### The Guild as Background Radiation

Every player character belongs to the Adventurers' Guild. The guild is a persistent node in the faction layer with weak posts into every player, every settlement (via guild halls, bulletin boards, contacts), and many quests.

Guild members who aren't in the current party still exert a weak bias on the collapse. The guild's rogue, sitting back in town, has a 0.1-weight post into Thornwall's Thieves faction. Not enough to guarantee thieves' content collapses, but enough to make it more likely. If that rogue visits Thornwall next session, the thieves' content that was biased into existence is already there. Canon. Consistent.

The weight model:

- **Focal player:** Weight 1.0 — seeds the collapse
- **Party members:** Weight 0.7 — strong constraint propagation
- **Guild members (absent):** Weight 0.1 — background bias toward future consistency

This solves the West Marches consistency problem without pre-generation. The guild's collective existence gently shapes every settlement, so different parties visiting the same location encounter a world that feels coherent rather than randomly re-rolled.

---

## The Shadow Horizon

Here's the core concept that makes this a game engine rather than a thought experiment.

We call the engine that collapses the die the **Pandemonium Engine** — named for Valente's city that rearranges itself according to the needs of narrative. And the Pandemonium Engine produces two outputs that mirror each other:

**The Western Horizon** is what players have observed. Pinned nodes. Hard canon. Immutable. The world as it has been experienced at the table.

**The Shadow Horizon** is everything else — the complete, coherent state the Pandemonium Engine has collapsed, but that no player has touched yet. Provisional canon. Fully real, but mutable.

When a settlement needs to exist — because a party declared they're going there — the Pandemonium Engine collapses the **entire** die. Every building, every NPC, every faction relationship, every quest hook, every lore secret. All of it. The result is the Shadow Horizon: a complete settlement that exists in full before the players arrive.

The players don't see the Shadow Horizon. They see what their posts make reachable. But the Shadow Horizon means:

- The GM never generates on the fly during a session
- There's no hidden roll anxiety — the world is fully real
- The apothecary in building 49 exists whether or not anyone visits it
- Canon is consistent because the entire settlement was resolved simultaneously

This is Pillar 4 — *Canon Integration* — in mechanical form. "It always existed. It just never came up."

### Observation Collapses the Waveform

The Shadow Horizon is provisional for any tile the players haven't interacted with. The moment a player enters a building, talks to an NPC, hears a rumor from a trusted source, or otherwise **observes** a node in the graph, that node is **pinned**. Canonical. Immutable. It can never be regenerated.

Unobserved nodes remain in superposition from the players' perspective. The Shadow Horizon has resolved them, but that resolution is soft — it can change if new constraints require it. This is the key distinction: **observed tiles are hard canon. Unobserved tiles are provisional canon.**

Why does this matter? Because players are going to do something the engine didn't predict.

---

## "I Know a Guy" / "I Know a Place"

Mid-session, the rogue says: *"I know a guy in the Miners' Guild. Old contact from before I joined the adventurers."*

In a traditional game, the GM either says yes or no. In our model, the player is **pinning a node**. They're declaring that a specific entity exists in the people layer, with specific posts (relationship to player, Miners faction affiliation). This is a player-initiated collapse.

The engine handles it:

1. **Check observed canon.** Does this pin contradict anything the players have already seen? If the party met the Miners' Guild leader last session and it's someone else, "I know the guy who runs the guild" fails. "I know a guy *in* the guild" doesn't.

2. **Find the lowest-entropy match.** The engine doesn't create a new NPC from nothing. It looks at every uncollapsed person-node with a Miners post and picks the one with the **fewest remaining possibilities** — the most constrained, most interconnected node that could satisfy the player's declaration.

This is why it feels narratively satisfying. The least-entropic node is always the most *interesting* one. It's the NPC who was already almost-real — the one sitting at the intersection of the Miners faction, the building next to the quest-relevant mine, and the structural dissenter role that faction cardinality demands. The system hands the player the NPC who matters most, not a random nobody.

"I know a place" works identically. The rogue's safehouse isn't random building 37. It's the building that was already most constrained toward being a covert location — isolated from faction buildings, adjacent to the docks, in the shadow between two competing territories. The graph picked it. The rogue just observed it into existence.

### The GM as Constraint Referee

The GM's role shifts. They're not deciding whether the fiction *allows* a player's declaration. They're checking whether observed canon *permits* it. Everything unobserved is permissive by default.

This is a philosophical shift worth naming: **if it hasn't been observed, it can be true.** The GM only says no when a pin contradicts hard canon. Otherwise, the answer is always some version of yes — the engine finds a place for it.

---

## Regeneration

Sometimes a player-initiated pin contradicts the Shadow Horizon. Not the Western Horizon — the *Shadow Horizon*. The innkeeper the Pandemonium Engine generated as a Strangers faction loyalist with no family ties turns out to be a player's uncle.

The Shadow Horizon regenerates.

Not from scratch. The pinned node (uncle innkeeper) is now a hard constraint — it crosses from the Shadow Horizon into the Western Horizon the moment it's declared. Every other observed node is also fixed. The Pandemonium Engine re-collapses only the unobserved tiles, propagating from the updated constraint set. The uncle relationship might flip the innkeeper's faction affiliation, which cascades into the faction power balance, which reshuffles some NPC allegiances in unpinned nodes. But building 22 — the bakery the party visited two sessions ago — doesn't change. It's pinned.

### Regeneration Modes

Not every pin triggers full regeneration. Most of the time, the Shadow Horizon can absorb new information:

**Absorb** — The new pin fits within the existing Shadow Horizon. No regeneration needed. The Pandemonium Engine just pins it and moves on. This is the fast path and should be the common case if the Shadow Horizon was well-generated. Example: "I know a guy in the Miners' Guild" and the shadow map already has an uncollapsed Miner NPC with low entropy. Pin and done.

**Local** — The new pin conflicts with a small cluster of unobserved tiles. Regenerate that neighborhood — the NPC's immediate posts, adjacent buildings, connected faction relationships. Medium computational cost, localized narrative impact. Example: "This innkeeper is my uncle" when the Shadow Horizon had the innkeeper as a loner. The innkeeper's immediate connections update, but the rest of the settlement is fine.

**Global** — The new pin contradicts something structural. Faction power balance, quest logic, settlement identity. Regenerate the entire Shadow Horizon for affected layers. Expensive, rare, but necessary when a player drops something that restructures the political landscape. Example: "My character is the rightful heir to this settlement" — that changes the faction layer fundamentally.

### Regeneration Gets Cheaper Over Time

Here's an elegant property of the system: settlements that have been played in more are *cheaper* to regenerate. More tiles are pinned through observation. Fewer tiles are available for regeneration. A metropolis visited by ten different parties might have 70% pinned nodes — regeneration only touches the remaining 30%.

Settlements solidify through play. They become more real, more canonical, more resistant to change — not because the GM decided to lock them down, but because the players' collective observations have pinned most of the graph. The world hardens into canon naturally.

---

## The GUMSHOE Guarantee

One of the most important constraints in the engine is borrowed from the GUMSHOE investigative RPG system: **if the party has the relevant capability, a lead must exist.**

In graph terms: the engine guarantees that at least one path exists from every party member's skill posts to at least one node in the quest layer. A social character guarantees a social lead collapses into the settlement. A combat-heavy party gets forensic or loot-based leads. No social character? No social lead — the city generates without it, and that's fine. The clue is always accessible through whatever approach the party actually has.

But — and this is the bunk bed insight — the guaranteed path might not be the obvious one. The bard's social lead might route through an herbalist who knows old songs, not a tavern full of gossips. The fighter's forensic lead might come from a blacksmith who recognizes the murder weapon's maker's mark, not a city guard. The engine guarantees connectivity, not predictability.

### Structural Dissenters

One specific constraint the engine enforces: every faction must contain at least one dissenter, even in a settlement that appears uniformly loyal. This is a cardinality constraint — a structural necessity that ensures conflict exists in every settlement regardless of how the power balance shakes out.

The dissenter is often the lowest-entropy NPC in a faction. They have the most posts — connected to their own faction, but also to the faction they sympathize with, to the players who might recruit them, to the quest hooks that exploit their divided loyalty. They're the most interesting person in town, and the engine surfaces them first.

---

## The Artisanal-to-Automatic Spectrum

Everything described above can run at any point on a spectrum:

**Full Artisanal** — Run Beak, Feather & Bone at the table. Play a session of Street Magic. Use Microscope Chronicle for history. Every tile is pinned by collaborative play. The Pandemonium Engine has nothing to do; the Shadow Horizon is fully hand-crafted.

**Hybrid** — Run BF&B to pin the key buildings and faction relationships (6-8 tiles). Let the engine collapse everything else around those fixed points. The artisanal work becomes high-confidence scaffolding that the algorithm respects and builds from.

**Full Automatic** — Input the party composition, the focal player's goal, and the active quest. The Pandemonium Engine collapses the entire settlement with no manual input. The GM reviews the Shadow Horizon, maybe pins a few things they like, and runs the session.

The output is structurally identical regardless of mode. The Pandemonium Engine doesn't care whether a tile was pinned by a BF&B card draw, a player's "I know a guy" declaration, or by entropy minimization. A pin is a pin. Collaborative games, player declarations, and algorithmic generation are all the same operation: collapsing a tile and propagating constraints.

Every table finds their spot on this spectrum. Groups that love worldbuilding games lean artisanal. GMs running six simultaneous West Marches parties lean automatic. Most tables land somewhere in the middle. The framework supports all of them.

---

## What This Means for The Western Horizon

The Pandemonium Engine isn't a replacement for the collaborative tools already in the framework. It's the **connective tissue** between them.

Microscope Chronicle generates history? Those historical events are pre-pinned tiles in the settlement and faction layers. BF&B defines buildings? Those are pinned settlement-layer nodes with faction posts. Street Magic creates NPCs? Pinned people-layer nodes with landmark affiliations. The Hunters variant from Claw Atlas creates a settlement threat? Pinned quest-layer node with faction and settlement posts.

The engine takes all of these inputs — from any source, in any combination — and collapses everything else into coherent existence around them. It's the thing that turns scattered worldbuilding outputs into a playable settlement.

And when a player says "I know a guy" or a backstory revelation contradicts the Shadow Horizon, the Pandemonium Engine regenerates gracefully. Nothing in the Western Horizon changes. Everything unobserved adapts. The world was always real. It just becomes *more* real every time someone looks at it.

---

## Next Steps

This is the design philosophy. The implementation lives in three places:

1. **The rules chapter** — procedures for GMs to run this manually (constraint checklists, pin tracking, regeneration guidelines)
2. **The app** — a digital tool that maintains the multi-layer graph, runs WFC collapse, tracks observations, and handles regeneration
3. **Future blog posts** — deep dives into specific layers (how faction cardinality works, how quest hooks propagate, how the guild bias model plays out over a campaign)

The constraint graph's node types, edge types, and adjacency rules are the next thing to formalize. What are the actual post definitions? How many faction connections can a building have? What cardinality constraints ensure interesting NPCs? That's where the design moves from philosophy to engineering.

But the core loop is clear: **Seed → Collapse → Observe → Pin → Regenerate → Repeat.** The Pandemonium Engine ensures the Shadow Horizon is always complete. Observation ensures the Western Horizon is always consistent. And the cycle between them ensures the world is always responsive to the players who are exploring it right now.
