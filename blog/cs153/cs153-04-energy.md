*Speaker: Scott Nolan, CEO and Founder of General Matter. Topic: Energy bottlenecks, nuclear power, and the uranium enrichment constraint on AI scaling.*

---

## Speaker Background

**Scott Nolan**
- Education: Mechanical engineering undergraduate and aerospace engineering master's (Cornell); MBA from Stanford (elected into engineering courses as electives, including CS).
- Career: Intern and then engineer at **SpaceX** (joined when the company was about 35 people; worked on propulsion systems, structural and thermal analysis on the Falcon 1 engine program).
- After SpaceX, spent **over a decade at Founders Fund** (Peter Thiel's VC firm) focused exclusively on hard-tech and engineering-driven investments, including energy. Invested in Crusoe, SpaceX, Pantalassa, and other energy/infrastructure companies.
- Founded **General Matter** in January 2024, a uranium enrichment company based in LA (HQ) with manufacturing facilities in Paducah, Kentucky.
- In January 2026 (24 months after founding), General Matter was awarded a **$900 million DOE contract** for uranium enrichment, a 100-person startup receiving nearly a billion-dollar government contract.

---

## Lecture Context: The AI Factory Systems View

The course instructor opened by situating energy within the broader "AI factory" mental model used throughout CS 153:

- At the center of the factory: the intelligence pipeline (data, compute, algorithms, pre-training, mid-training, post-training, deployment to agents).
- Previous lectures covered the intelligence pipeline itself (11 Labs/audio, Black Forest Labs/image, Luma/video) and compute (NVIDIA/Jensen).
- But the factory has dependencies beyond the pipeline. One of the most critical: **energy and electricity** to power the data centers that provide compute.
- The instructor's Miyazaki-inspired schematic deliberately showed the electricity portion of the factory **much larger** than the data center portion, reflecting urgency: even with a data center ready, if you cannot get power to it, it is useless.

**Key framing:** After ChatGPT's release (late 2022), there was a compute crunch. A few months later, there was also an energy crunch. The instructor and others in industry realized that if AI demand continued to grow, the energy supply chain would become the binding constraint.

Then Claude 4.6 came out in December 2025. Students were coding over winter break. Adults came back to work and started using it. Enterprise demand exploded, a "Groundhog Day moment" repeating the ChatGPT demand shock but now at enterprise scale. Energy is once again the bottleneck.

---

## Part 1: Energy Is the Bottleneck to AI

### The Case from Industry Leaders

Scott opened by presenting testimony and statements from four major figures, all converging on the same conclusion:

| Person | Context | Key Quote/Claim |
|--------|---------|-----------------|
| **Sam Altman** (OpenAI) | Senate testimony (under oath) | "Everything is going to converge to the cost of energy, to the cost of electricity. Chips are going to get cheaper, models are going to get cheaper, but energy is fundamentally what you consume when you're running these models." |
| **Jensen Huang** (NVIDIA) | Joe Rogan podcast | Even though Jensen's business incentive would be to highlight chips as the bottleneck, he admitted energy is the real constraint. |
| **Elon Musk** (Tesla/SpaceX/xAI) | Public statements | Of all the bottlenecks he could highlight, he consistently points to energy. SpaceX's plans for in-orbit data centers are partly a response. |
| **Financial Times** | Mainstream media | Even non-technical media now recognizes that what is upstream of data centers and compute is **power**, and the question of where it will come from. |

Balaji Srinivasan's framework was also cited: all costs should ultimately be denominated in joules, because energy is the fundamental input to everything.

### The Demand vs. Supply Gap

Scott presented data showing the scale of the mismatch:

**Demand trajectory:**
- AI data center power demand is growing super-linearly.
- Projections suggest reaching approximately **1 terawatt** of demand within a decade.

**Supply reality:**
- Over the past 20+ years, the United States has added almost no new electricity generation capacity.
- The US grid has been essentially flat for longer than most people in the room have been alive.
- To meet projected demand, the US needs to move from a near-complete standstill on grid expansion to a **nearly vertical** growth curve.
- For reference, even matching China's slope of power capacity buildout would be insufficient: the US needs to go steeper.

This is not an incremental challenge. It requires fundamentally different activities than anything the country has done in recent memory.

---

## Part 2: The Evolution of Energy Solutions

### Phase 1: Stranded Energy (2010s to Early 2020s)

**Definition:** Stranded energy = supply without nearby demand. Examples:
- Hydroelectric dams in rural regions with no population to consume the power.
- Isolated geothermal sources.
- Wind farms in West Texas with insufficient transmission capacity.
- Oil wells flaring (burning) methane directly into the atmosphere because there was no economic use for the gas.

**What happened:**
- The first wave of companies went to these stranded sources and built **Bitcoin mining operations**.
- Bitcoin mining was a good fit for stranded energy because it required minimal connectivity (even satellite like Iridium was sufficient) and could be deployed anywhere.
- **Crusoe** is the canonical example: started by capturing stranded methane from oil wells in North Dakota, running it through turbines to generate power, and mining Bitcoin. This simultaneously generated revenue and **reduced emissions** (converting methane flaring into useful electricity). Their value proposition: "Even if you discount the value of mining Bitcoin to zero, we're still creating value by reducing emissions."
- Crusoe then evolved: from stranded oil wells to stranded wind in West Texas, from Bitcoin mining to enterprise cloud deployments, and eventually to the **Stargate project** (large-scale AI data center infrastructure).

**Why this phase is ending:**
- Most attractive stranded energy resources have been claimed.
- The capacity needed for AI far exceeds what stranded sources can provide.
- The question has shifted from "How do we use existing unused power?" to **"How do we create massive net-new power production?"**

### The Bitcoin-to-AI Pipeline

The instructor paused to make an important meta-point about **technological lineage**:

- Bitcoin mining was a "dress rehearsal" for AI infrastructure. Many of the innovations in power sourcing, data center design, and remote deployment developed during the crypto era directly translated to AI infrastructure.
- There is an unfortunate tendency to dismiss companies or technologies because of their association with crypto, "throwing the baby out with the bathwater."
- Example: SBF funded Anthropic through FTX. The crypto connection does not invalidate the underlying AI progress.
- The concept of a "pivot" carries unnecessary stigma. In reality, pivots are just updates in a continuous feedback loop. Crusoe "pivoted" from Bitcoin to AI, but what actually happened was that they built a **primitive** (utilization of stranded electricity) and then found increasingly valuable applications for it.

**Key principle:** If a company is building a **fundamental primitive** (a basic building block), the specific application at any given moment matters less than the capability being developed.

### Phase 2: Natural Gas Turbines (Current)

With stranded energy largely claimed, the current phase is dominated by natural gas-powered data centers:

- Data centers require **high uptime** (24/7 availability).
- Solar and wind alone cannot provide this without massive battery storage, which at grid scale is currently too expensive.
- Natural gas turbines offer reliable base-load power.

**But turbines are hitting supply constraints:**
- Lead times for industrial turbines have stretched to **multiple years**.
- Turbine manufacturers are not ramping production fast enough.
- Grid interconnect equipment (power electronics) is also backordered by years.

Scott's assessment: **the next couple of years will be the hardest**, the industry needs to keep scaling while waiting for nuclear to come online.

### Phase 3: Nuclear Energy (5 to 10 Year Horizon)

Scott presented the case for nuclear as the long-term solution:

**Base-Load Capability:**
- Nuclear provides continuous, reliable power, unlike solar and wind which are intermittent.
- This is critical for data centers that need 99.99%+ uptime.

**Safety Record:**
- When factoring in every plant ever built, nuclear is **essentially tied with wind for safest energy source**.
- Three Mile Island: no direct measurable deaths from the accident (per all analysis).
- Fukushima: approximately one fatality from the nuclear incident itself; thousands died from the tsunami that caused it.
- Nuclear accidents are famous partly because nuclear physics is hard for the public to understand, creating outsized fear relative to actual risk.

**Carbon Emissions:**
- Nuclear has the **lowest carbon emissions of any energy source**, lower than solar, wind, hydro, and all fossil fuels (when accounting for full lifecycle).

**Empirical Comparison, Germany vs. France:**
- Germany shut down its nuclear reactors, planning to replace them with renewables.
- Empirically, nuclear was replaced not by renewables but by **coal, natural gas, and fossil fuels**.
- Air quality maps show France (high nuclear percentage) as clean/blue and Germany as polluted/red.
- Diana called this "a real-life, present-day example of what not to do."

**Public Perception Shift:**
- Polls show public opinion on nuclear has crossed from majority negative to **majority positive** in recent years, driven by recognition that nuclear is the only option for clean, scalable base-load power.

---

## Part 3: The Uranium Enrichment Bottleneck

### The Five-Step Nuclear Fuel Supply Chain

Scott walked through the supply chain for nuclear fuel, which he compared to the AI pipeline (pre-training, mid-training, post-training):

| Step | Process | Description |
|------|---------|-------------|
| 1. **Mining** | Extract uranium ore (U3O8) | Kazakhstan (40% of world production), Canada, Australia lead. |
| 2. **Conversion** | U3O8 to UF6 gas | Chemical process to create the gaseous form needed for enrichment. |
| 3. **Enrichment** | Separate U-235 from U-238 in UF6 gas | Refining/separation process to increase concentration of fissile U-235. **This is the bottleneck.** |
| 4. **Deconversion** | UF6 gas back to solid (UO2) | Chemical process to create solid fuel material. |
| 5. **Fabrication** | Form solid into fuel pellets/rods | Shaped into whatever geometry the reactor design requires. |

### Why the US Lost Enrichment Capability

**Historical peak:**
- In the 1980s, the US controlled approximately **86% of worldwide enrichment capacity**.
- Enrichment was performed at DOE sites (former Manhattan Project and Cold War facilities), government-run.

**The decline:**
1. **Fall of the Berlin Wall (1989):** Free trade opened with Russia and Europe.
2. **Megatons to Megawatts program:** US took Russian nuclear warheads, down-blended them, and used them as reactor fuel. This created a large fuel supply without domestic enrichment.
3. **Cost uncompetitiveness:** US enrichment technology (gaseous diffusion) was expensive relative to European centrifuge technology and cheap Russian supply.
4. **Shutdown:** Domestic enrichment facilities were gradually closed. The last one (Paducah, Kentucky) shut down in **2013**.
5. **Result:** The US now has **less than 0.1% market share** in enrichment and relies entirely on European firms and Russia (even post-sanctions) for nuclear fuel.

### Why This Matters for AI

Scott traced the bottleneck chain:

```
Uranium Enrichment (bottleneck)
    then Nuclear Fuel Production
        then Nuclear Energy
            then Electricity for Data Centers
                then Compute
                    then AI Scaling
```

On a 5 to 10 year time frame, **uranium enrichment is arguably the bottleneck to AI scaling**.

Additionally, enrichment is the **largest cost component** in advanced nuclear fuel, making it critical not just for supply but for the economics of the entire nuclear energy value chain.

### General Matter's Approach

**Strategy:** Bring enrichment back to the US with a new, highly scalable, cost-competitive method. Analogous to SpaceX's approach to launch:

- SpaceX identified a fundamental primitive (dollars per kilogram to orbit) and drove down cost relentlessly.
- General Matter identifies enrichment cost (SWU, Separative Work Unit) as the fundamental primitive and aims to win on cost.

**Timeline and Execution:**
- Fall 2023: Team assembly, handpicked from national labs, nuclear industry companies, Tesla, and SpaceX. Specifically sought "SpaceX DNA" people who knew how to break into capital-intensive, incumbent-dominated, stagnant industries.
- January 2024: Company officially formed.
- First months: "Legitimately 100-hour weeks, living and sleeping at headquarters."
- Found a site at the south end of the Paducah, Kentucky DOE facility, 100 acres of undeveloped land at the same site where the US last did commercial enrichment.
- August 2025: Groundbreaking of Kentucky facility.
- January 2026: $900 million DOE contract awarded.

**Key detail about the facility:** General Matter's enrichment process involves **no nuclear reactions** (material is kept spread out to prevent critical mass) and **no chemical reactions** (it is purely a separation process working with UF6 gas).

**Scale:**
- Currently about 100 employees.
- Expected to grow to about 500 in LA and similar or more in Kentucky (about 1,000 total) over the next few years.
- Scott invoked SpaceX's early estimate of never exceeding 200 employees (actual: about 20,000) as a lesson that these things scale far more than anticipated.

### Bipartisan Government Support

A notable theme: nuclear energy and enrichment have received **consistent bipartisan support**:

- Biden administration (2022 to 2023): Funded HALEU (advanced reactor fuel) programs and LEU (conventional reactor fuel) programs.
- Current administration: Continued and expanded support for energy production.
- The DOE contract groundbreaking photo included "people from the full range of the political spectrum."
- Within DOE's nuclear energy department, career staff have been working on this for decades, not because nuclear was growing (it has not since the 1990s), but because they believe in it.

Scott's message: do not let day-to-day political noise or memes about science funding discourage work on fundamental infrastructure. The support is real and bipartisan.

---

## Part 4: Alternative Energy Approaches

### Space-Based Power (SpaceX)

- SpaceX is exploring **sun-synchronous data center satellites in orbit**, essentially putting compute in space where solar power is continuous.
- Scott's assessment: "Really only one company can do this" due to the launch capacity required.
- Blue Origin started before SpaceX but has drastically less launch volume. However, Blue Origin now has the advantage of using AI to accelerate engineering, a tool SpaceX did not have during its buildout.
- The instructor's take: the space race for energy/compute may be a topic for next year's CS 153.

### Ocean-Based Power

- Scott invested in **Pantalassa**, a company doing distributed energy production in the ocean.
- Mentioned briefly as another vector but not the primary focus.

### The Ground Game Dominates

Scott's bottom line: aside from SpaceX's unique orbital approach, **every other company will fight the energy battle on land**. This means the key question is: who can scale power production on land? And for base-load, clean, safe power on land, the answer converges to nuclear.

---

## Q&A Highlights

### On SpaceX's Early Days and Engineering Culture

Scott described his experience as an intern and early engineer at SpaceX (about 35 people):

- Worked on propulsion systems (structural/thermal analysis).
- Built test stands and primitive engine prototypes (heat-sink-based engines, not even full nozzles, "Can we get combustion to work?").
- Culture was "relatively scrappy", optimize for **schedule and cost** with a hard line on **safety**. "We don't need the fanciest test stand ever. It just has to work."
- Falcon 1 history:
  - Flight 1: Fire in engine bay caused by a cracked aluminum nut on a fuel line fitting. Rocket lost.
  - Flight 2: Reached near-orbit. Second stage deployed but experienced fuel sloshing (insufficient baffles) and failed.
  - Eventually succeeded, proving the fundamental approach.

### On Leaving SpaceX (A Lesson in Staying)

Scott left SpaceX when the company was about 100 people, feeling the "rocket works, engines work, maybe it won't be as exciting." He went to Stanford for business school, thinking he needed business experience (like Elon, who combined engineering with business acumen).

His retrospective assessment: **"It was the wrong decision."**

- People who stayed got to work on the coolest projects of the past decade.
- 100 people is not "too big", it is where the hardest and most valuable scaling challenges begin (going from product-market fit to operationalizing and executing).
- He made the same miscalculation about Palantir and Square at various points: "Maybe 50 or 60 people is too big." He was off by two orders of magnitude on what headcount would become.
- Lesson: **things can scale much more than you think, and they often need to.**

### On Kazakhstan and Global Uranium Supply

- Kazakhstan produces about 40% of worldwide uranium (mining step).
- Different countries should focus on what they are uniquely positioned to do: Kazakhstan/Canada/Australia on mining; the US on enrichment and fuel fabrication.
- General Matter's long-term vision: provide enrichment services to US allies at extremely low cost, which would have the secondary benefit of **reducing nuclear proliferation risk** (fewer countries needing to develop their own enrichment capability).

### On DOE Contract Timelines

- The DOE contract originally extended through 2034. General Matter's internal timeline is much faster.
- Goal: online before end of the decade, scaling rapidly from there.
- Reactor deployment timeline: first criticality (demos) in 2026 to 2027; real scaling in 2028 to 2029; hockey-stick growth in early 2030s to 2035.
- Gigawatt-scale reactors take 5 to 10 years to build; SMRs will come first in the tens (not hundreds) in the next few years.

### Audience Poll

The instructor conducted an informal poll: "How many people feel like they'd be interested in a job working on uranium enrichment?"

Response: approximately 95% of hands went up.

---

## Key Actionable Takeaways

1. **Follow the bottleneck chain.** The "five whys" analysis, AI needs compute, compute needs data centers, data centers need electricity, electricity needs nuclear, nuclear needs enrichment, is a masterclass in systems thinking. Apply this framework to identify where the real constraints are in any domain.

2. **Build on primitives, not applications.** Companies that build fundamental building blocks (stranded energy utilization, launch capacity per kilogram, enrichment cost per SWU) can adapt to changing applications. The application may pivot; the primitive endures.

3. **Go deep, not wide, on problem identification.** Scott spent a full year (2023) understanding the enrichment problem before starting the company. The depth of understanding is what enabled a 100-person startup to win a $900M government contract in 24 months.

4. **Ignore surface-level narratives.** Nuclear's safety record is better than almost every other energy source, but public perception lagged for decades. Bitcoin mining was a "dress rehearsal" for AI infrastructure, but crypto stigma caused people to dismiss the underlying innovations. Always go to the data.

5. **Assemble teams with the right DNA.** General Matter specifically recruited from SpaceX and Tesla, people with experience breaking into "capital-intensive, incumbent-dominated, stagnant industries." The operational playbook transfers even when the domain changes.

6. **Time horizons matter enormously.** The next 2 to 3 years will be the hardest for AI energy (turbine shortages, grid interconnect backlogs). Nuclear starts meaningfully contributing in the 5 to 10 year frame. Plan accordingly.

7. **Bipartisan problems get bipartisan support.** Energy security and infrastructure are issues where political alignment is possible. This can unlock government resources (DOE contracts, congressional funding) that purely commercial ventures cannot access.

---

## My Analysis & Extensions

### The Bottleneck Chain Is Even Longer Than Presented

Scott's analysis stops at enrichment, but the chain extends further. Enrichment requires specialized centrifuge manufacturing, which requires precision machining, which requires skilled labor, which requires training pipelines. It also requires regulatory approval (NRC licensing), which requires a functioning regulatory apparatus with enough qualified reviewers. Each link in the chain can become the binding constraint at different times. The real lesson is not that enrichment is the bottleneck, but that **physical-world supply chains are deeply nested**, and the bottleneck migrates as you solve each layer.

### The SpaceX Analogy Is Both Inspiring and Cautionary

General Matter explicitly models itself on SpaceX, clean-sheet design, recruit from the incumbent industry plus fast-moving tech companies, optimize for schedule and cost with hard line on safety. This is a powerful playbook, but it is worth noting what makes it possible: SpaceX succeeded partly because launch was ultimately a physics problem with clear success criteria (payload reaches orbit or it does not). Nuclear enrichment has similar technical clarity (separation factor, SWU cost), but it also has regulatory, political, and public perception dimensions that rockets did not face to the same degree. General Matter's bipartisan support is encouraging, but a single nuclear incident anywhere in the world could shift public opinion rapidly and create regulatory headwinds that have no parallel in the launch industry.

### The "Stranded Energy to AI" Pipeline Reveals a Pattern

The progression from stranded energy to Bitcoin mining to AI data centers follows a pattern worth generalizing: **low-value applications pioneer infrastructure that high-value applications later exploit**. Bitcoin mining was economically marginal but served as a forcing function to develop skills, supply chains, and operational knowledge for deploying power in remote locations. When AI demand arrived with much higher willingness to pay, the infrastructure and expertise were already partially in place. This pattern recurs throughout technology history (military applications pioneering technologies that later go commercial; gaming pushing GPU development that later enabled deep learning).

### The Nuclear Renaissance Depends on Social License as Much as Technology

Scott presented compelling data on nuclear safety and emissions, and he noted that public opinion has shifted positive. But the deeper challenge is what political scientists call "social license to operate." Even with majority public support nationally, local opposition to specific sites can delay or block projects. General Matter chose Paducah, Kentucky, a community with existing nuclear industry history and DOE infrastructure, precisely because social license was already established there. This site selection strategy (going to communities that already have nuclear DNA rather than trying to convince new communities) may be as important as the enrichment technology itself.

### The 5 to 10 Year Gap Is the Critical Planning Horizon

There is a dangerous gap between current energy solutions (stranded power and natural gas turbines, both constrained) and the nuclear buildout (5 to 10 years away from meaningful scale). During this gap, AI scaling could genuinely stall. This creates several strategic implications:

1. **Efficiency gains in AI models and inference** (distillation, quantization, mixture of experts) become critically important as a demand-side response to supply constraints.
2. **Data center location strategy** becomes primarily an energy access strategy, companies will build where power is available, not where engineers want to live.
3. **Geopolitical competition** intensifies because countries with existing nuclear capacity (France, China, Russia) have a structural advantage in the medium term.

### Connection to Other CS 153 Lectures

- **Lecture 01 (Compute Bottleneck):** Scott's lecture reveals that the compute bottleneck discussed in Lecture 01 is actually a **nested bottleneck**, compute is constrained by energy, which is constrained by nuclear, which is constrained by enrichment. The instructor's framework of "pre-standardization eras" applies here too: the energy industry is in a pre-standardization era for AI-scale power delivery.
- **Lecture 03 (Garry Tan / YC):** Garry talked about how a single person can now do the work of 1,000 using AI tools. But all of that productivity is downstream of electricity. The YC startups achieving 10x growth metrics are implicitly dependent on the energy infrastructure that Scott is building. If energy constraints bite, those growth curves flatten.
- **Jensen / NVIDIA lecture:** Jensen's admission that energy (not chips) is the bottleneck is remarkable coming from the CEO of the company that makes the chips. It suggests NVIDIA's own internal planning assumes chip supply will outpace power supply, they can manufacture more GPUs than the grid can power.

### Areas for Further Exploration

1. **Modular reactor economics at scale.** SMR companies (NuScale, Kairos, X-energy, etc.) claim factory-built reactors will dramatically reduce costs. But no SMR has yet achieved serial production. What are the realistic cost curves, and when do SMRs become competitive with natural gas on an LCOE basis?

2. **The geopolitics of enrichment.** If General Matter succeeds in making US enrichment cost-competitive, it could reshape global nuclear fuel markets. Russia currently provides enrichment services to dozens of countries. Displacing Russia from this market has enormous geopolitical implications, both positive (reduced dependence on an adversary) and complex (trade relationships, proliferation dynamics).

3. **AI-accelerated nuclear engineering.** The instructor's aside about Blue Origin using AI to accelerate engineering raises a question: can AI tools meaningfully accelerate the design, licensing, and construction of nuclear facilities? If so, the 5 to 10 year timeline for nuclear scaling could compress significantly.

4. **Demand-side responses.** If energy is truly the bottleneck, what happens to model training strategies? Do labs shift more aggressively toward inference-time compute (which may be more energy-efficient per unit of capability) versus ever-larger pre-training runs? Does energy constraint drive architectural innovation?

5. **In-orbit power and compute.** SpaceX's concept of sun-synchronous data center satellites is provocative. What are the actual physics and economics? How much compute can you run in orbit, and what are the latency implications for different workloads (training vs. inference)?

6. **The jobs question.** General Matter expects to create about 1,000 jobs across California and Kentucky. Multiply this across all the infrastructure companies needed to support AI scaling (data centers, power generation, grid equipment, cooling systems, fiber optics), and the number of new physical-world jobs created by AI could be enormous, a direct counter to the narrative that AI only destroys jobs.

---

*Notes from Stanford CS 153, Lecture 4, speaker Scott Nolan.*
