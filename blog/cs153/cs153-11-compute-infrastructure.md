*Speaker: Anjney Midha, founder of AMP PBC, a founding investor in Anthropic, and co-instructor of CS 153. Format: the opening lecture, setting up the whole quarter. Topic: the frontier AI stack, context as competitive advantage, and why compute is not a commodity.*

---

## Speaker

Anjney Midha is the founder of AMP PBC. Most recently he was a General Partner at Andreessen Horowitz, where he led frontier AI investments and Oxygen, the firm's compute program. He sits on the boards of Mistral, Black Forest Labs, Sesame, LMArena, OpenRouter, Luma AI, and Periodic Labs; is a founding investor in Anthropic; and was an early angel in ElevenLabs, among many other leading AI teams. Earlier he was cofounder and CEO of Ubiquity6 (acquired by Discord) and a partner at Kleiner Perkins. He is a graduate of Stanford, where he remains a Visiting Scientist in the Applied Physics department and co-teaches CS 153, a systems-at-scale class.

---

## Course Overview and Philosophy

### What is CS 153?

CS 153 started four years ago as "Security at Scale", the missing systems class that Midha wished had existed during his undergrad. It began with 50 students and has grown to 500, with another 50 waitlisted and thousands following online. The course has evolved from a security-focused class into a comprehensive survey of the entire AI infrastructure stack, now called "Frontier Systems."

### The "AI Coachella" Framing

The course embraces the playful "AI Coachella" nickname that went viral on Twitter. The speakers are the "headliners," and Midha positions himself and Mike as the "opening acts." The course brings in leaders from every layer of the AI stack to give students a front-row seat to the industry's most consequential decisions.

### Core Goal: Preparedness, Not Internships

Midha is emphatic: the goal of the class is **preparedness for the real world**, not internship placement. He wants students to think like "full-stack thinkers", not just as engineers or computer scientists, but as people who understand capital markets, business models, geopolitics, and the human dimensions of technology.

### Life Advice and "Midha's Life Scaling Laws"

Before diving into technical content, Midha shares personal philosophy:

- **Take life seriously, but not so seriously that you forget what's important.** Don't forget how to have fun.
- **Simple heuristic for navigating life:** Have fun with people you enjoy hanging out with. He has found this empirically effective (a nod to the empirical, not predictive, nature of scaling laws).
- **The most important people in the class are the students themselves.** The relationships built at Stanford compound in unexpected ways, he met his wife and both co-founders at Stanford.
- **Invest in relationships.** Trust, friendship, love, and obsession are "assets that don't scale" within large organizations, they are your unique advantage.
- **Obsess over what you love.** In a world where big labs and companies spend billions, your asymmetric advantage is doing things that don't scale: your taste, your domain obsession, your personal context.

---

## The AI Infrastructure Stack: A Framework for the Quarter

Midha presents a layered stack that serves as the conceptual backbone for the entire course:

1. **Capital**, Flexible; money flows everywhere
2. **Land, Power, Shell**, Energy production, data center construction
3. **Chips**, Semiconductors placed inside data centers
4. **Cloud**, Software infrastructure that makes chips usable
5. **Models / Agents**, Trained via connecting chips together
6. **Applications**, Models deployed into products
7. **Solutions**, Applications deployed to end users
8. **Governance**, Safety, security, trust, regulatory frameworks

### The Great Transition

Every layer of this stack is undergoing a fundamental rethinking. For 10 to 15 years, the cloud/distributed systems world had a relatively stable stack. AI has disrupted this stability. Every leader at every layer is now asking: *How do we unblock the bottlenecks? How do we make this faster, safer, more secure?*

This creates extraordinary opportunity for students, because **times of uncertainty are when things change**, and people with a point of view get to redesign the systems that have been static for years.

---

## Key Theme 1: The Scaling Recipe and the Intelligence Manufacturing Pipeline

### From Craft to Industrial Process

Four years ago, creating a frontier model was a bespoke process, maybe once or twice a year. Today, it is an **industrial engineering process at scale**:

- **Base model training:** At least 2x/year on ~100,000 GB B300 equivalents
- **Mid-training (adding capabilities):** 2 to 4x/year with ~10% of training compute
- **Continuous post-training:** Supervised fine-tuning and reinforcement learning (RL)

### The RL Revolution

The most significant recent development: **reinforcement learning now consumes almost as much compute as the entire rest of the training pipeline combined.**

RL's core idea is simple, reward successful task completion, withhold reward for failure, repeat. It has been around for decades but started working at scale ~2 years ago, because LLMs provide sufficiently rich priors about the real world that RL systems learn much faster and continue scaling with more compute.

Key distinction from historical RL: in chess, Go, etc., RL would surpass human performance but then plateau. With LLM-initialized agents, progress appears to continue scaling without the same plateaus, at least within specific domains.

### The Business Flywheel

The recipe Midha helped develop (notably with Anthropic):

1. Raise money, buy compute
2. Augment with data, pretrain
3. Ship a state-of-the-art model
4. Deploy for inference
5. Two feedback loops emerge:
   - **Revenue loop:** Inference revenue funds the next round of compute
   - **Context feedback loop:** Observe where the model succeeds/fails, pipe that back through RL to improve capabilities

This is self-reinforcing: Anthropic's revenue growth correlates strongly with compute brought online (60 to 90 day lag between new compute and revenue jumps).

---

## Key Theme 2: Context as the Decisive Competitive Advantage

### The "Context Wars"

Midha's central thesis: **context**, the environment in which an agent operates and receives feedback, is the key differentiator in AI competition. Three questions to ask:

1. **Where will frontier progress continue most rapidly?** Wherever context can be reliably measured and verified.
2. **Who will capture value?** Teams with unique and defensible access to some context.
3. **Who will lose?** Teams locked out of context essential to improving models in a given domain.

### Verifiability is the Bottleneck

Progress is fastest in **easily verifiable domains**:

- **Code:** Unit tests pass or fail, highly verifiable. Coding agents are advancing rapidly.
- **Material science:** Physical experiments can verify predictions (e.g., Periodic Labs using RL from physical verification to discover new superconductors)
- **Games/Math:** Clear win/loss conditions

Progress is slowest in domains that are **hard to verify**:

- **Aesthetics, beauty, creative writing:** What is the verifiable construct for beauty or love?
- LLMs are notably bad at long-form creative writing, they produce cliched patterns (em-dashes, "game changer" phrasing, "It's not just X, it's Y" constructions). Midha shares that his company Amp has banned sending each other AI-generated documents.

### The WinSurf/OpenAI/Anthropic Example

A vivid illustration of context wars: When OpenAI announced its acquisition of WinSurf (a popular IDE), Anthropic immediately shut off model access to WinSurf users. This was unprecedented, API access doesn't usually get cut without warning, but it made perfect strategic sense. If your competitor acquires a platform that uses your model, they gain access to your context feedback loop. That's "context leakage."

This shattered the assumption that application companies could always rely on their model provider for intelligence.

### The Mistral / Sovereign AI Example

Guillaume Lample (co-creator of Llama) and Arthur Mensch (lead author on Chinchilla scaling laws) founded Mistral based on the insight that some contexts are too sensitive for cloud infrastructure:

- Consumer/developer workloads are fine on cloud servers
- "Sovereign context", government records, defense, national data, requires local deployment with locally controlled models and weights
- This is why President Macron appeared on stage with Jensen Huang and Arthur Mensch, declaring Mistral "the future of Europe"
- The Cloud Act (US policy allowing government access to data on US-run servers globally) makes this a real concern for non-US entities

This represents the first time in 15 years that the relentless consolidation of cloud infrastructure (driven by decreasing marginal costs at AWS, GCP, Azure) is being challenged.

### Opportunity for Students

Midha urges students to ask: *Where is there unique context that hasn't been available because you're not at scale, but where you can do something unique and get ahead?* Domains where only you can verify quality, because of your obsession, taste, cultural knowledge, or domain expertise, are the most valuable.

---

## Key Theme 3: Compute is Not a Commodity

### The Central Claim

Contrary to the prevailing industry assumption that chips are a commodity that depreciate and can be rented cheaply from cloud providers, Midha argues that **compute is not fungible and not behaving like a commodity**.

### Evidence: GPU Prices are Rising

Midha presents data from "the Amp Grid" (an internal infrastructure forecasting system):

- H100 GPU rental prices have been **rising** over the last 90 days despite being a 2+ year old chip
- Average H100 price per hour was $1.73 two years ago; it is significantly higher now
- A founder who raised ~$700M to $1B messaged Midha that morning saying "we're in a compute crunch, need H100s ASAP, price not a problem"

### Why Compute is Not Fungible

Two key properties that prevent compute from being a commodity:

1. **Not fungible:** Different chips from different companies (AMD vs. Nvidia) trade at different prices. Even chips from the same manufacturer are not interchangeable (H100 vs. GB200 vs. B300).
2. **Hard to forecast:** Training workloads are spiky (small-scale experiments, then hero training runs). Inference is cyclical (heavy during day, light at night). Unlike electricity, we have no stable mechanisms for forecasting compute consumption.

### Historical Infrastructure Parallels

Midha draws parallels to previous infrastructure cycles:

| Resource | Cycle Period | Pattern |
|----------|-------------|---------|
| Steel (1867 to 1895) | ~28 years | Hoarding then Panic of 1873 then Price collapse then Stabilization |
| Fiber optics (dot-com era) | ~3 years | Overbuild then Bust then Recovery |
| DRAM/Semiconductors | Violent cycles | Invention then Hoarding then Panic then Stabilization |
| Shipping (Baltic Dry Index) | Multiple cycles | Same boom-bust-stabilize pattern |
| Uranium (1970s nuclear boom) | ~6 years | Boom then Government intervention then Stabilization |

**The pattern:** New general purpose technology then infrastructure explosion then consolidation among 3 to 4 players then either industry self-regulation or government intervention then standards emerge then commodity stabilization.

**Average cycle times:**
- Digital infrastructure: ~2.8 years
- Physical infrastructure: ~6.3 years
- AI (hybrid atoms + bits): Unknown, likely somewhere in between

### What Makes a Commodity Fungible?

Midha outlines the textbook definition (referencing Econ 1A):

1. Common unit of measurement
2. Standard delivery interface
3. Interconnection and pooling
4. Metering, control, and settlement
5. Buyers can substitute one supplier's unit for another

**None of these conditions are met for compute today.** We are in the **pre-standardization era** of compute.

### The Path Forward: Standards + Institutions

History shows two requirements for turning a scarce, monopolized resource into an accessible commodity:

1. **Standards** (e.g., AC/DC for electricity, TCP/IP for networking), agreed-upon formats for production and consumption
2. **Institutions** to enforce those standards, because humans are inevitably misaligned at scale and need coordination

Midha's view: We need people and institutions to step in and say, "You have enough compute; those folks over there don't. Let's pool and figure out optimal allocation across society."

---

## The Big Picture: Four Bottlenecks on AI Progress

Midha frames the bottlenecks into four categories (though the lecture only covers the first two in depth):

1. **Context**, Verifiable environments for RL feedback loops; who controls what context
2. **Compute**, Scarcity, non-fungibility, lack of standards, cyclical infrastructure dynamics
3. **Capital**, The financial systems and investment patterns driving AI scaling (covered in later lectures)
4. **Culture**, The human, organizational, and societal dimensions (covered in later lectures)

---

## Assignments and Calls to Action

1. **Read the Chinchilla scaling laws paper** before Arthur Mensch (Mistral co-founder) speaks
2. **Research the Cloud Act** and understand its implications for sovereign AI
3. **Ponder two questions throughout the quarter:**
   - What will it take to ensure a peaceful transition on compute over the next couple of years?
   - What is your part in this?
4. **Prep for speakers:** Research them online, come prepared with questions, push them on hard problems
5. **Think of yourselves as active participants, not just students**, blog, tweet, write, share your views on what standards should emerge

---

## Notable Quotes

> "Dollar of compute in, dollar of hard assets, land, power, shell, which in the financial markets usually trade at three to four times revenue, being turned into a dollar of software revenue, which usually trades at 30 to 40 times revenue."

> "Anybody who told you chips are a commodity should probably get a phone call from you."

> "The most important people in this class aren't really Mike or me or the speakers. It's you guys."

> "Have fun with people you enjoy hanging out with. That's pretty much it."

> "We are in the pre-standardization of compute era."

> "AI scaling is a combination of massive physical resources, land, power, shell, chips, to produce this very digital thing called software revenue. Intelligence is bits. But the production is atoms. Those worlds don't like colliding."

---

## My Analysis & Extensions

### 1. The Context Moat Thesis is Underappreciated

Midha's framing of "context wars" is one of the most useful strategic lenses I have encountered for understanding AI competition. Most industry commentary focuses on model architecture, parameter counts, or benchmark scores. Midha reframes the competition as being about **who controls the feedback loops**, the environments in which models improve. This is deeply connected to the concept of "data flywheels" from the previous generation of ML companies (e.g., Google Search improving through usage data), but elevated to a more general principle. The WinSurf example is a striking illustration: in the context wars, even your API customers can become adversaries if they are acquired by a competitor. This has profound implications for how AI companies should think about partnerships, platform strategies, and vertical integration.

### 2. The Atoms-vs-Bits Tension is the Defining Challenge

Midha's observation that "intelligence is bits, but production is atoms" captures something fundamental about why AI infrastructure is so much harder than previous software infrastructure cycles. Cloud computing benefited from the fact that both inputs and outputs were digital, software renting software. AI requires marshaling physical resources (energy, land, cooling, chip fabrication) at unprecedented scale to produce digital outputs. This creates a mismatch between the speed at which software can iterate (days/weeks) and the speed at which physical infrastructure can be built (months/years). The 2.8-year digital cycle vs. 6.3-year physical cycle data point suggests AI infrastructure stabilization could take 4 to 5 years, putting us roughly at 2028 to 2029 for commodity-like compute availability.

### 3. The Verifiability Spectrum as a Research Roadmap

The claim that RL progress correlates with domain verifiability is a powerful heuristic for predicting where AI capabilities will advance fastest. This creates a natural research agenda: how do we make more domains verifiable? Some promising directions:

- **Formal verification tools** for domains beyond code (e.g., mathematical proofs, legal reasoning)
- **Simulation environments** that approximate real-world physics for robotics, materials science, and drug discovery
- **Human preference models** that attempt to formalize aesthetic and creative judgments (though Midha is skeptical these can fully capture taste)
- **Hybrid verification** combining automated checks with expert human judgment in a scalable feedback loop

The domains that remain hardest to verify, creative writing, aesthetics, interpersonal communication, ethical reasoning, may be precisely the domains where human expertise retains the most value longest.

### 4. Sovereign AI and the Fragmentation of the Cloud

The sovereign AI trend that Midha describes through the Mistral example has accelerated significantly. Countries including France, UAE, Saudi Arabia, Singapore, Japan, and India are all investing in domestic AI infrastructure and models. This fragmentation creates both opportunities (new markets for localized AI infrastructure) and risks (duplicated effort, reduced interoperability, potential for compute nationalism). The Cloud Act connection is underappreciated in technical circles, it is a legal framework that makes non-US entities rationally reluctant to depend on US cloud providers for sensitive workloads.

### 5. The Recursive Self-Improvement Debate

Midha offers a nuanced view on recursive self-improvement that differs from the typical AGI discourse. Rather than focusing on a single model achieving superintelligence, he thinks about recursive self-improvement at the **systems level**, an organization that has figured out how to keep improving its frontier capabilities through well-functioning flywheels. This is a more grounded and arguably more useful framing. It suggests that the path to transformative AI is less about a single breakthrough model and more about sustained organizational execution of the context-compute-capital feedback loops.

### 6. The Missing Piece: Power and Energy

While Midha mentions "land, power, shell" as the base of the stack, the lecture only briefly touches on energy constraints. Given that hyperscalers are collectively planning $1.2 trillion in capex, the energy requirements are staggering. This is addressed later in the course (Lecture 04 with Scott Nolan on AI Energy Bottlenecks), but it is worth noting that energy may be an even harder bottleneck than compute, you can manufacture more chips, but building new power generation capacity (especially nuclear or renewable at scale) takes 5 to 10+ years. The intersection of AI scaling and energy policy may be the most consequential infrastructure question of the next decade.

### 7. Implications for Students and Early-Career Researchers

Midha's advice to "find unique context" is strategically sound but requires careful interpretation. The best opportunities likely lie at the intersection of:
- A domain with increasing verifiability (through new tools, simulators, or measurement techniques)
- A context that large labs don't have access to (niche industries, specialized datasets, domain expertise)
- A feedback loop that can compound over time (not just a one-off model but a system that improves with use)

This suggests that the most valuable career moves for students may not be joining large labs (where context is already well-mined) but rather identifying underserved domains where they can establish unique context advantages and build sustainable frontier systems.

---

*Notes compiled from Stanford CS 153, Lecture 11, Spring 2025. Speaker: Anjney Midha.*
