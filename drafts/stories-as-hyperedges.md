# Stories as Hyperedges — How Narrative Binds the Pandemonium Cube

> *Draft for follow-up blog post to "The Shadow Map"*

---

## The Problem with Pairwise Edges

The Shadow Map post describes six graph layers connected by posts — edges that tunnel through the die connecting nodes across faces. But not all connections are pairwise.

"A and B are cousins" is an edge. Store it on the People face, done.

"A and B stole their next door neighbor's pie because they were hungry" is not an edge. It touches two people nodes (the cousins), a settlement node (the neighbor's house), a lore node (hunger, poverty, famine), maybe a faction edge. Decomposing it into pairwise edges — A↔B cousins, A↔pie stole, B↔pie stole, pie↔C owned — loses the *unity* of the event. You can't reconstruct that it was one act from the individual edges.

That's a **story**. And stories are the third connection type in the engine, alongside attributes and edges.

---

## Three Kinds of Connections

**Attributes** — properties on nodes. Occupation, skills, physical description. Don't cross faces.

**Edges** — pairwise connections between two nodes, potentially across faces. Carry history as metadata (the *when* and *why* of the connection). "The innkeeper is a Merchants faction member." Simple. Decomposable.

**Stories** — hyperedges binding multiple nodes across multiple faces into a single irreducible narrative unit. "The cousins stole the neighbor's pie because they were hungry." These are nexus points. They can't be decomposed without losing meaning.

---

## Stories as Narrative Gravity

Here's why this matters for the engine: stories are the **highest-value generation targets**.

When the WFC engine looks for the lowest-entropy cell to collapse next, a node that's already part of a story hyperedge is *more constrained* than a node with only pairwise edges. More connections, more obligations, more narrative weight. The engine naturally prioritizes story-rich nodes.

Which means stories beget stories. Once a hyperedge exists, every node it touches becomes lower-entropy → collapses earlier in the next pass → attracts more hyperedges. The rich get richer narratively. Settlements develop natural narrative gravity around their most story-dense regions.

The tavern where three storylines intersect becomes the most important building in town — not because anyone decided it should be, but because the constraint graph made it the lowest-entropy location. Players feel drawn to it because it *is* the most interconnected place. The engine and narrative instinct converge.

---

## What Generates Stories?

In artisanal mode: the collaborative games do. BF&B's face cards create a story every time — "this rival opposes this building's purpose for this faction reason" is a hyperedge across people, settlement, and faction faces in a single card draw. Microscope Chronicle events are stories by definition. Street Magic vignettes are stories.

In automatic mode: the engine needs rules for when to generate a story vs. a simple edge. 

Possible heuristic: when a new node would have 3+ pairwise edges to nodes that are *already* pairwise-connected to each other, collapse those edges into a story hyperedge instead. The triangle becomes a nexus. This prevents the graph from becoming a hairball of independent edges and naturally creates narrative structure.

---

## Stories and the GUMSHOE Guarantee

The guaranteed investigative lead isn't just "a path exists from player skill to quest node." It's "a *story* exists that connects them." The bard doesn't just find a social lead — they find a person in a place with a problem that connects to the main quest through lore.

The engine should prefer generating leads as story hyperedges rather than simple edges. "The herbalist at the apothecary knows about the garden because her grandmother planted it during the Drought" is a story connecting people, settlement, quest, and lore. "The herbalist knows about the garden" is just an edge. Same information, vastly different narrative richness.

---

## Implementation Questions

- How does the engine store hyperedges efficiently? Adjacency lists work for pairwise edges but not naturally for hyperedges.
- What's the maximum arity of a story? Can a story touch all six faces?
- How do stories interact with regeneration? If one node in a story is pinned and another needs to change, does the whole story regenerate?
- Can stories merge? If two separate stories share 2+ nodes, should they become one?

---

## Next

TBD — this connects to the constraint graph formalization and the actual data structures for the app.

---

*Draft started: 2026-02-23*
