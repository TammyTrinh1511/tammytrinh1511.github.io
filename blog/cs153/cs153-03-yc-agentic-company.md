*Speakers: Garry Tan (President and CEO) and Diana Hu (General Partner) of Y Combinator. Topic: how AI-native tools and agentic systems are reshaping what it means to build and run a startup, from writing code to running an entire company.*

---

## Speaker Backgrounds

**Garry Tan**
- Stanford Class of 2003; product manager at Palantir and Microsoft before becoming a founder.
- Co-founded Posterous (YC W08), a blogging platform that sold to Twitter for ~$20M in 2011.
- Founded Initialized Capital; returned to Y Combinator as President & CEO.
- Creator of **Gstack** (~87,000 GitHub stars) and **Gbrain** (~13,000 stars), open-source agentic tooling projects built almost entirely with AI coding agents.
- Self-describes as a non-coder who, starting in December 2025, wrote approximately one million lines of code using Claude Code and related tools.

**Diana Hu**
- General Partner at Y Combinator.
- Focuses on the operational patterns emerging across the YC portfolio, particularly around AI-native company building and the closed-loop organizational model.

---

## Lecture Context: Capital as Infrastructure

The course instructor opened by drawing a deliberate parallel between **compute bottlenecks** (Lecture 01) and **capital bottlenecks**. The key historical analogy:

- During the Industrial Revolution, electricity became a stable resource only after **standards** (AC/DC) were established and **institutions** (utility companies, the grid) enforced them.
- In the venture capital world, pre-2013 Silicon Valley was in a "pre-standardization" era, fragmented deal structures, inconsistent terms, high friction for founders.
- **YC's SAFE (Simple Agreement for Future Equity)** was a two-page legal document that standardized seed-stage funding. It became the "AC/DC standard" of venture capital, a seemingly modest document that turned out to be a pivotal inflection point for the entire ecosystem.
- The SAFE reduced friction in capital allocation just as AWS/GCP had reduced the marginal cost of software innovation. Together, they unleashed the SaaS era.

The instructor's thesis: **systems design is not just an engineering discipline, it applies to any domain** (capital, energy, policy) where you want to accelerate progress by unblocking bottlenecks.

---

## Part 1: The Software Factory (Garry Tan)

### The 1000x Productivity Claim

Garry opened with Steve Yegge's observation that engineers using AI coding agents are **10x to 100x more productive** than those using cursor-and-chat workflows, and that Anthropic engineers are roughly **1000x as productive** as Googlers were in 2005. Garry tested this himself:

- He rebuilt Posterous (his 2008 startup, originally built by 10 people over 2 years with $4M in capital) in roughly **5 days** using a $200/month Claude Code Max subscription.
- By 2026, a six-person team can hit $10M in annual revenue using these tools.
- He personally generated ~1M lines of code and accumulated over 100,000 GitHub stars on his open-source projects, despite not coding at all before December 2025.

### Addressing Common Objections

Garry systematically addressed skeptics:

| Objection | Response |
|-----------|----------|
| "It's just AI slop / boilerplate" | Yes, LLMs are verbose by default. That is precisely what a well-designed software factory prevents. You fight slop with test coverage and evals. |
| "Hallucinations make it unreliable" | Hallucinations are the failure mode you engineer controls around, not a reason to abandon the approach. |
| "LOC is a garbage metric" | LOC alone is gameable. But the true metric is: **does it work for you, does it work for your customers, are people paying?** Nothing in the tools incentivizes writing more code; if anything, the goal is dense, concise code. |
| "Demo code != production code" | The path to production is 80 to 90% test coverage, which is exactly what the `plan-eng-review` skill exists for (~20 invocations/day). |

### Gstack: From Co-Pilot to Software Factory

Gstack represents Garry's evolution in thinking about AI coding:

- **2025 (pre-Opus 4.5):** AI as a **co-pilot**, helping you write code faster.
- **2026:** AI as a **software factory**, you define personas, skills, and quality gates; the system produces software autonomously with human oversight.

Core insight: you can extract **specific personas** from the latent space of LLMs and make them reliably useful. Examples:

- **`/office-hours`**: distilled from 3 to 4 months of YC partner transcripts across thousands of conversations, then compressed by 90%. Asks the same questions YC partners ask: What is the problem? Who is the customer? How do you know? What are we building?
- **`/plan-ceo-review`**: asks "What is the 10x version of this? What is the platonic ideal?" Forces product thinking: what is the perfect manifestation, and is the current build on a straight-line roadmap toward it?

### "Boil the Ocean"

One of Garry's most provocative claims: the old corporate instinct to scope down ("let's not boil the ocean") is now **wrong**.

> "You sitting in front of one of these terminals can do the work of about 500 to 1,000 people. If that's true, then all of the expectations we currently have in society around what a founder can do are a thousand X wrong."

He noted that even the models themselves haven't internalized this, Claude Code will estimate "about 3 weeks" for a task that it then completes in an hour. The model weights encode outdated human productivity assumptions.

### Skills, Resolvers, and Agentic Primitives

Garry introduced a vocabulary of primitives he discovered while building with Open Claw and Hermes Agent:

**Skill = A Runbook**
- A markdown file that describes a multi-step procedure.
- Sounds trivial ("just markdown files"), but with LLMs, these runbooks can execute real work, including calling code.
- Example: event planning at YC, put in bios of 8 dinner guests and have the agent generate seating arrangements. Works for 8 people. Breaks for 800 or 6,000 (model can't handle it in pure latent space). Solution: combine latent-space reasoning with deterministic code.

**The Code-vs-Markdown Boundary**
Every time an agentic system breaks, Garry found it was because of a boundary violation:
- Deterministic work (time zones, date calculations) was being left to the latent space (which hallucinates "it's 3 AM" when it's afternoon).
- Latent-space work (semantic matching, creative judgment) was being forced into rigid code.

Concrete fix: He wrote `context-now.mjs` in TypeScript with tests to handle time/date, so the agent doesn't rely on the LLM for factual temporal information.

**Resolver = An Org Chart for Agent Knowledge**
- Problem: Your `claude.md` instruction file balloons to 40,000 tokens.
- Solution: A resolver acts as a routing layer. Instead of stuffing all instructions into context, you create a master directory. The agent loads the specific instruction file only when it encounters the relevant task (e.g., "when writing to the changelog, load `changelog.md`").

**Skillify = Going Up One Level of Abstraction**
The process of turning a one-off successful agent interaction into a repeatable, tested skill:

1. Do the task once with the agent; get the output right.
2. Tell the agent to "skillify", it generates the skill markdown and supporting code.
3. But writing the skill and code is only **2 of 10 steps**. The remaining 8 are all about reliability:
   - Write unit tests for the code
   - Write LLM evals for the skill file
   - Write integration tests
   - Add a resolver trigger in `agents.md`
   - Test the resolver trigger
   - Run an LLM-as-judge eval (is the trigger broad enough to fire when needed?)
   - Run `check-resolvable` (DRY principle, avoid duplicate skills)
   - End-to-end smoke test
   - Define the schema (where does this live in memory/repo?)

This maps directly to organizational roles (see below).

### Gbrain: A Three-Layer Memory System

Built on top of Karpathy's knowledge wiki concept, Gbrain extends it with:

1. **Grep-based search** (the original wiki approach, started falling over at scale)
2. **Vector search** with ARR fusion and backlinks
3. **Knowledge graph** (graph database layer)

Planned addition: an **epistemology system** to track the provenance and confidence level of knowledge, distinguishing hunches from beliefs from established world knowledge, and tracking how individual convictions evolve into validated truths over time.

Garry's philosophical motivation: he wants to track the arc of founders, someone has a hunch no one else believes, they spend years proving it correct, and Gbrain should be able to spot and document that trajectory.

Next milestone: **fully dynamic ontology** (borrowed from Palantir's vocabulary) so the schema can adapt to any user, researcher, journalist, politician, founder, rather than being hardcoded for Garry's use case.

### Cross-Modal Eval (Upcoming)

Garry previewed an unreleased capability:
- Have frontier models (Opus, GPT-5.5, DeepSeek-V4) independently evaluate inputs and outputs.
- Aggregate ratings and feed them back to the original sub-agent with improvement instructions.
- Iterate to produce results 10x better than the first attempt.

YC founders are already using a version of this pattern: "Claude Code is my ADHD CEO. Codex is my nearly non-verbal 200 IQ CTO. I need both of them doing cross-modal analysis, and then it ships with zero bugs."

---

## Part 2: The Agentic Company (Diana Hu)

### Open Loop vs. Closed Loop Organizations

Diana's central framework borrows from control systems theory:

**Pre-AI companies operate as open-loop systems:**
- Information lives in people's heads, side conversations, DMs, Slack threads, unwritten meeting notes, "vibes."
- Decisions are lossy. Error accumulates. The system drifts off the rails over time.
- No tight feedback mechanism to correct course.

**AI-native companies operate as closed-loop systems:**
- Analogous to a PID controller: tight feedback loops keep error within bounds.
- An agent (Hermes, Open Claw, or custom) is embedded in **all decision-making**.
- The agent has **read access to every artifact the company produces**: codebase (GitHub), communications (Discord/Slack), meeting recordings, customer interactions.
- The agent can then suggest next actions, surface bugs, prioritize work.
- Result: YC's own engineering team cut sprint time in half and produced 10x the output.

### The Revenue Impact

Diana shared portfolio data:
- AI-native companies are achieving **$1 to 2M revenue per employee**.
- Public company benchmark (e.g., Salesforce): revenue per employee is under six figures.
- This represents at least a **10x improvement** over traditional companies.

### The Flat Organization: Three Roles

Referencing Jack Dorsey's writing on agent organizations, Diana described the emerging org structure:

1. **Individual Contributor (IC) / Builder:** Everyone ships. Even non-technical people (salespeople, operations) now build their own tools and automation. The cost of shipping code is going to zero.

2. **DRI (Directly Responsible Individual):** Borrowed from Apple's management philosophy. Every outcome traces to a single owner who orchestrates ICs to hit goals. Often the founder. Example: "Increase revenue 3x by end of week", the DRI coordinates sales calls, engineering sprints, and everything in between.

3. **AI Founder:** The person living at the edge of tooling innovation. Must constantly try new tools because the landscape changes weekly. If you're still operating at "co-pilot level from last year", Diana's blunt assessment: "not going to make it."

### Agentic Primitives Map to Organizational Roles

| Agentic Primitive | Organizational Analogue |
|-------------------|------------------------|
| Skill | Employee with a specific capability |
| Resolver | Org chart / routing rules |
| Memory (Gbrain) | Internal processes / institutional knowledge |
| Check-resolvable | Audit and compliance |
| Trigger eval | Performance reviews |

This mapping reveals why so much of organizational overhead exists: human systems are messy, and the majority of effort goes into making them reliably work, exactly like agentic systems.

### Taste as the Durable Moat

Diana argued that while the cost of shipping code is going to zero, **taste**, the ability to discern what is good or bad, is not automatable and will remain the critical differentiator.

This manifests practically as **evals**:
- Generic public benchmarks (MMLU, etc.) do not tell you whether your product works or whether users are happy.
- The real judge is: Do users want it? Do they pay for it?
- Evals must be domain-specific and custom-built for each product.

Questions to ask of every agent output:
- Did it follow the instructions?
- Was the answer correct?
- Did it preserve customer trust?
- Did it hit the business goals?
- Did it comply with domain-specific rules?

### Building the Eval Loop

Three-step process:

1. **Capture traces:** Record all agent interactions and outputs. The method is context-dependent (video app vs. speech app vs. B2B SaaS).
2. **Convert failure cases into evals:** When something fails, detect it, label it (human in the loop), and turn it into a regression test.
3. **Replay constantly:** Feed evals back into the system to self-heal, improve prompts automatically, and prevent regression.

---

## Part 3: The Startup Opportunity

### Unprecedented Growth in the YC Portfolio

Diana shared striking data:
- Companies are going from **zero to eight figures in revenue within one year**, growth that previously took 4 to 5 years and hundreds of millions in capital.
- Historically, only the **top 1% of YC companies** achieved 10% week-over-week growth (the metric PG set). In the Airbnb batch, perhaps only Airbnb and one other company hit it.
- Now, **on average**, YC companies are 3x-ing within 3 months. "In the history of YC, this has never happened before."

### The Wedge Strategy: Go Undercover

The winning pattern for AI startups:

1. **Pick a painful workflow** in a specific industry.
2. **Become a forward-deployed engineer**, shadow the customer, take a job, learn every detail of the domain. You don't need prior domain expertise. (Scale AI and Happy Robot founders did not come from finance or logistics backgrounds.)
3. **Automate the repetitive labor** by building agents that handle the messy, phone-and-email, spreadsheet-based workflows.
4. **Deploy a full solution**, not a demo.

### Case Studies

| Company | Domain | Approach | Result |
|---------|--------|----------|--------|
| **Salient** | Voice agents for loan services | Built agents for bank loan servicing workflows | Closed top US banks; eight-figure revenue within a year |
| **Happy Robot** | Freight logistics | Embedded with freight forwarders; automated coordination with truckers | 10x revenue in one year; closed Series B |
| **Reductem** | Document processing | Better document processing improves all downstream agents (RAG, memory, etc.) | Rapidly growing as foundational infrastructure |

### The White Space

Citing Anthropic's own deployment data: software engineering already has ~50% penetration of AI tools. But massive white space remains in:
- Back office operations
- Finance
- Data management
- Academics
- Cybersecurity
- Customer service

Diana's claim: "There is room for hundreds and hundreds of AI unicorns" in these under-penetrated domains.

Garry: "We're at the first pitch of the first inning."

---

## Q&A Highlights

The lecture was densely packed and ran short on Q&A time. The main audience interaction was a call to action rather than traditional Q&A:

**Garry's exhortation:**
> "This lecture is totally useless if you don't go and open your own Hermes agent and open Claude and load up your own Gbrain and actually use the tools. There are 40 skills you can test out. Make your own. Do stuff, then skillify your own stuff, then release it open source. We're getting there together."

> "Not only are we meta-prompting the machines themselves, we need to meta-prompt one another to be better and to fuse with the machines in a new and more profound way every single day."

---

## Key Actionable Takeaways

1. **Start building now.** The cost of creating software is effectively zero. Open Claude Code or equivalent and start shipping. Garry rebuilt an entire startup in 5 days.

2. **Adopt the skillify workflow.** When you do something successfully with an agent, formalize it: write the skill, write the code, write unit tests, write evals, add resolver triggers, test everything. 80% of the work is testing and compliance.

3. **Build a memory system.** Whether you use Gbrain or roll your own, your agent needs persistent, structured memory, not just a growing context file. Use resolvers to keep context lean.

4. **Operate as a closed-loop system.** Give your agents read access to all company artifacts. Use feedback loops to self-heal and improve.

5. **Invest in domain-specific evals, not generic benchmarks.** The ultimate test is whether users want your product and will pay for it. Build your eval pipeline around that.

6. **Go undercover in an industry.** The biggest opportunities are in domains with low AI penetration. Embed yourself, learn the painful workflows, then automate them.

7. **Use cross-modal evaluation.** Have multiple frontier models evaluate each other's outputs to catch errors and iteratively improve quality.

8. **Embrace "boiling the ocean."** Old scoping instincts are calibrated to human productivity. With AI agents, you can tackle problems 1000x larger than you think.

---

## My Analysis & Extensions

### The SAFE Analogy Is More Profound Than It Appears

The instructor's framing of YC's SAFE as a "standard" analogous to AC/DC in the electrical grid is not just a rhetorical flourish. It points to a pattern that recurs across every infrastructure transition: progress is bottlenecked not by the core technology but by the coordination mechanisms around it. Today, we see similar standardization needs in AI, for compute allocation (the instructor's "SAFC" concept), for agent interoperability protocols, for eval frameworks, and for data sharing agreements. The teams that create these standards will have outsized influence, just as YC did with the SAFE.

### The Skillify Pattern Is Essentially DevOps for Agents

What Garry describes as "skillify" is remarkably parallel to the DevOps/SRE revolution of the 2010s: the recognition that writing code is a small fraction of the work, and that reliability engineering (testing, monitoring, alerting, runbooks) is where the real effort lies. The difference is that in the agentic world, these reliability systems must also handle non-deterministic behavior, LLM outputs that vary run-to-run. This makes evals and LLM-as-judge systems the new monitoring stack, and "check-resolvable" the new lint.

### The Closed-Loop Organization Has Profound Privacy Implications

Diana's vision of agents with "read access to every single artifact the company produces", including meetings, DMs, and Slack, raises significant questions about employee privacy, data governance, and the power dynamics within organizations. The efficiency gains are real, but the social contract implications are enormous. Startups may adopt this readily because of small teams and founder culture; scaling it to larger organizations will require thoughtful policies around what agents can observe, who can query the agent's memory, and how data retention is handled.

### The "Taste" Argument Needs More Precision

The claim that "taste" is the durable moat is widely repeated but under-specified. In practice, "taste" decomposes into several distinct capabilities: (1) the ability to identify which problems are worth solving, (2) the ability to evaluate output quality against unstated user expectations, (3) the ability to make tradeoffs when constraints conflict, and (4) aesthetic judgment about form, style, and experience design. Not all of these are equally resistant to automation. Capabilities (1) and (2) are already partially automatable through eval pipelines and user analytics. Capabilities (3) and (4) are harder and may indeed remain human advantages for longer, but this will evolve as models improve at nuanced reasoning and preference modeling.

### The Revenue-Per-Employee Metric Deserves Scrutiny

The $1 to 2M revenue per employee figure is striking but needs context. Early-stage, fast-growing companies often have high revenue-per-employee because they haven't yet hired support, compliance, legal, and operational staff. The real test is whether this ratio sustains as companies scale past 50 to 100 employees and face the full complexity of operating a business. That said, even if the ratio compresses 3 to 5x, it would still represent a massive shift from historical norms.

### Connection to Other CS 153 Lectures

- **Lecture 01 (Compute Bottleneck):** Garry's work exemplifies what happens when compute bottlenecks are partially removed, builders can create at unprecedented speed, but new bottlenecks emerge (memory management, eval quality, organizational design).
- **Lecture 04 (Scott Nolan / Energy):** The capital bottleneck YC addresses is upstream of Nolan's energy bottleneck. If startups cannot get funded, they cannot build the energy infrastructure AI needs. The SAFE enabled a generation of founders; similar standardization may be needed for energy project finance.
- **Jensen / NVIDIA lecture:** Garry's observation that "the models themselves have not caught up" to the new productivity reality connects to the hardware-software co-evolution theme, as models get better, they will more accurately estimate task complexity, further compressing cycle times.

### Areas for Further Exploration

1. **Agent-to-agent coordination protocols:** Garry's cross-modal eval (Opus + GPT-5.5 + DeepSeek-V4) hints at a future where agents negotiate, evaluate, and collaborate. What standards and protocols will govern multi-agent systems at scale?

2. **The epistemology system in Gbrain:** Tracking beliefs, hunches, and knowledge provenance is essentially building a personal scientific method. How does this connect to institutional knowledge management? Could a "Gbrain for organizations" replace traditional wikis, Confluence, Notion?

3. **Regulatory implications of the agentic company:** If a six-person company generates eight-figure revenue using agents that autonomously interact with customers, who is liable for agent errors? How do existing regulations (GDPR, financial compliance, healthcare HIPAA) apply?

4. **The dynamic ontology problem:** Garry's goal of supporting arbitrary schemas for different user types (researcher vs. journalist vs. politician) is essentially the knowledge representation problem from classical AI, now revisited with LLMs. This is worth watching closely, success here could unlock a new category of personal knowledge tools.

5. **Second-order effects on venture capital:** If the cost of building software is near-zero and small teams can hit $10M ARR in a year, what happens to traditional VC models that assume companies need large rounds to scale? Does the SAFE itself need an update for the agentic era?
