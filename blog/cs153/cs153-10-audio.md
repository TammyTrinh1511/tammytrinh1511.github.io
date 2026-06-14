*Speaker: Mati Staniszewski, Founder and CEO of ElevenLabs. Topic: frontier audio AI and the future of voice intelligence.*

---

## Speaker Background

- **Originally from Poland**, along with co-founder Piotr.
- **Professional background:** Both came from Google and Palantir. When founding ElevenLabs, they deliberately tried to undo the organizational patterns they'd experienced at those companies: they were "allergic to meetings" and "allergic to email-based communication."
- **Early company setup:** They initially ran the entire company on Discord, building custom bots for internal workflows. They eventually migrated to Slack.
- **How Anj found ElevenLabs:** A friend flagged a text-to-speech Discord bot that was "blowing up." Anj ignored it. A month later, another person urged him to check it out. He did, was impressed, and within 24 hours had Nat Friedman make an introduction. He came on as an angel investor.

---

## Key Themes

### 1. The Origin Story: Polish Movie Dubbing as Inspiration

The founding insight came from a peculiar cultural experience:

- **In Poland, foreign movies are dubbed by a single male narrator** who reads all characters (male, female, old, young) in a monotone voice. There are approximately five such narrators in the country.
- **The narrator is deliberately flat** so the audience can "interpret the emotions for themselves," a practice most Polish people find terrible.
- **The revelation:** When you learn English and can watch content in its original language, the experience is dramatically better. This gap made it obvious: the future should allow access to all content in any language with proper tonality and emotion.
- **This became the founding mission:** Fix AI dubbing so content could cross language barriers while preserving the original performance.

### 2. The Anatomy of the Dubbing Pipeline

Breaking down the AI dubbing problem reveals a cascaded system of three core models:

1. **Transcription (Speech-to-Text):** Understand what is being said, identify speakers, remove background noise.
2. **Translation (LLM):** Convert transcribed text to the target language with appropriate corrections and adaptations.
3. **Text-to-Speech (TTS):** Recast the translated text as audio, borrowing voice characteristics and emotional delivery from the original performance.

**The critical realization:** All three components needed to be good for the end product to work. In 2022, none were good enough individually, and the combined pipeline was far from production quality. This led to a strategic pivot.

### 3. The Strategic Focus Decision

Rather than trying to fix all three pipeline components simultaneously, ElevenLabs made a crucial narrowing decision:

- **Customer discovery insight:** While pitching AI dubbing, potential customers kept asking: "If you can do that, could you also just fix my voiceover recordings? Could you replace my voice from a script in my original language?"
- **The pivot:** Focus on text-to-speech first, the "most common denominator" across all audio problems, and specifically on English-language voice-over for creators.
- **What "fixing TTS" meant technically:**
  1. **Voice replication:** Previous approaches hardcoded voice parameters (gender, accent, age). ElevenLabs kept parameters abstracted and let the model learn what they are.
  2. **Contextual delivery:** Previous models couldn't read a happy sentence happily or deliver dialogue as dialogue. ElevenLabs leveraged the emerging LLM paradigm (predict next token based on previous context) to bring context-aware delivery to speech.

---

## Year-by-Year Evolution of Audio AI

| Year | Key Breakthrough | What Became Possible |
|---|---|---|
| **2022** | First TTS breakthrough: contextual delivery + voice replication | Text-to-speech that sounds human on short fragments |
| **2023** | Expansion to multilingual voice-over, voice marketplace | Users could recreate their own voice in high quality, use across languages, audiobook creation tools for authors |
| **2024** | Good transcription models + LLM translation + speech generation working together | AI localization/dubbing finally viable. Javier Milei's UN speech dubbed to English preserving his iconic delivery. Full Lex Fridman conversations dubbed (Milei, Zelenskyy, Modi) |
| **2025** | Real-time interactive capability | Voice agents: cascaded architecture of STT + LLM + TTS operating in tandem with turn-taking prediction |
| **2026** (predicted) | Cascaded-to-fused transition begins, latency optimization | Even more natural interactive experiences |

---

## The Cascaded vs. Fused Architecture Debate

This was the deepest technical discussion in the lecture and represents one of the central architectural questions in audio AI:

### Cascaded Architecture
- Three separate models (STT + LLM + TTS) working in sequence.
- **Advantages:**
  - Each component can be trained independently and optimized separately.
  - Best LLMs can be swapped in for the intelligence layer.
  - Full observability: you can inspect what happened at each step (transcription, reasoning, speech generation).
  - Guardrails and safeguards can be applied at each stage.
  - Reliability for enterprise use cases (authentication, tool calling, payment processing).
  - Different customers can use different LLMs depending on their use case.
- **Disadvantages:**
  - Higher latency (three sequential model calls).
  - Information loss at boundaries (emotional tone lost during transcription to text).
  - Requires explicit engineering to pass sentiment/emotion between stages.

### Fused Architecture
- A single model that takes speech in and generates speech out, bypassing text entirely.
- **Advantages:**
  - Much lower latency (around 300ms response time).
  - Emergent behavior: emotional understanding and response happen naturally.
  - No information loss at stage boundaries.
- **Disadvantages:**
  - Sacrifices reliability: tool calling, authentication flows, and guardrails are much harder to implement.
  - Debugging is opaque: can't inspect what happened at transcription vs. reasoning vs. generation.
  - Depends on open-source LLMs (which currently lag behind closed-source in intelligence).
  - Token fusion between text and audio spaces is "super hard, and most people cannot figure that step out."

### ElevenLabs' Position

**For enterprise/business use cases (the majority of ElevenLabs' revenue): Cascaded is the right approach for the next few years.** Reliability, tool calling, and observability are non-negotiable for booking airline tickets, processing payments, and authenticating users.

**For companion/consumer use cases where speed matters more than reliability: Fused will win.**

**The likely future is a hybrid:** Within a single interaction, the system might use a fused approach for informational exchanges (low-stakes, speed matters) and switch to cascaded when actions need to be executed (authentication, payment, database queries).

### The Emotionality Question

A key area of active research at ElevenLabs:

- **The problem:** Current voice agents don't understand if you're angry, stressed, or excited. ChatGPT Advanced Voice Mode transcribes the words but loses the emotional signal.
- **ElevenLabs' approach (cascaded):** Detect emotions during transcription, pass as a parameter to the LLM, generate emotionally appropriate responses, and control TTS delivery accordingly.
- **The bottleneck was data:** There wasn't enough labeled data indicating whether speech was happy, sad, or stressed. ElevenLabs invested heavily in creating this labeling infrastructure over the past year.
- **Recent breakthrough:** A new "expressive mode" release that detects emotions on the transcription side, uses them as LLM context, and generates emotionally matched responses.
- **Competition:** Sesame (founded by former Oculus CEO Brendan) is working on the same problem. Mati described it as "almost a race who will be first to pass that emotional voice Turing test."

---

## Business Model and Growth

### Revenue Trajectory
- **3 years ago:** Less than $1M to $2M ARR when Anj first invested.
- **2025 year-end:** $330M in revenue.
- **Most recent quarter:** Added over $100M in additional ARR.
- **Current run rate:** Over $430M ARR.
- **Growth achieved in roughly 36 months.**
- **Context:** Anthropic (mentioned for comparison) added $11 billion in ARR in their most recent reporting period.

### Team Structure
- **Around 450 people** across London (largest), New York, Warsaw, and San Francisco.
- **Extremely small teams:** Each team is fewer than 10 people with significant ownership and budget autonomy.
- **Decision philosophy:** "It's okay to be wrong. Speed and understanding the customer is much more important than process."

### Revenue Mix
- **More than 50% enterprise** (sales-led, forward-deployed engineering with large companies).
- **Around 50% PLG** (self-serve, product-led growth with creators and developers).

### Predictability Mechanics
- **Enterprise side:** Revenue predictability comes from deployment capacity. ElevenLabs has forward-deployed engineers who work alongside enterprise customers to integrate AI. The bottleneck is hiring people with high IQ, high EQ, who strive for excellence but stay humble. If you can predict headcount growth, you can predict revenue growth.
- **PLG side:** Less predictable. Depends on continued model innovation and the pace at which new use cases emerge.

### Pricing Philosophy

Mati offered a clear pricing framework:

> "Always think about the value you deliver to the customer and work backwards from there, never from the cost of how much it runs to do something."

- **Target:** Capture approximately 1/10 of the value you deliver.
- **The hard part** is not pricing mechanics but calculating the value and finding the right metric to represent it.
- **Never start from cost. Start from value.**

---

## Product Platform Vision

### The "Middle-to-Middle" Framework

ElevenLabs' philosophy on how AI tools should be used in creative workflows:

- **Not end-to-end:** You don't type a prompt and get a finished voiceover. That produces "AI slop."
- **Middle-to-middle:** The human provides the story/creative intent (the beginning). AI generates a draft narration (the middle work). The human then refines, adjusts direction, regenerates (another middle step). The final output carries human creative intent throughout.
- **The controllability breakthrough (6 months prior to lecture):** Until recently, you gave the model text and it decided how to narrate. Now, directors can say "redeliver this in a slightly more dramatic way while slowing down a little bit," the kind of direction a studio director would give a voice actor. This was the key unlock for studio adoption.

### On-Device Models

- ElevenLabs figured out how to bring models on-device (announced around the time of the lecture).
- **Approach:** Constrain to a given language, then deploy to any device.
- **Limitation:** On-device handles TTS narration only. Does not include transcription, interactivity, emotion transfer, or reliability features available in the cloud version.
- **Philosophy:** Fix quality first in the cloud. Only bring to device once quality is sufficient. "Instead of trying to go on device with lower quality, we want to deliver the best experience."

### Five-Year Vision

1. **Research:** Continue leading in all foundational audio research. Pass the voice Turing test in any conversation. Extend to visual avatar space (beyond just voice).
2. **Platform:** Become one of 3 to 5 platforms that serve as the conversational layer between any business and its audience. Analogous to how there are 3 to 4 clouds serving compute needs.
3. **Application:** The boundary between platform and application will blur. ElevenLabs aims to provide all modules for builders to create applications seamlessly.

---

## Safety, Security, and Ethics

### Voice Security
- **Built-in safety from the start:** Content tracing (trace generated content back to who generated it), abuse detection (detect fraud/scam attempts before generation completes), and moderation.
- **Public detection tools:** Working toward publicly available systems where anyone can submit an audio sample and determine if it's AI-generated.
- **Watermarking:** Important for both preventing misuse and enabling legitimate voice licensing (e.g., working with Sir Michael Caine, Matthew McConaughey).

### Voice Authentication Warning
- **Clear position:** Voice authentication in banking and other systems "is not the future and you should step away from this." Given how easily voices can be replicated, voice-based authentication is fundamentally insecure.

### Counter-Offensive Against Scammers
- ElevenLabs worked with a charity that used caller IP to detect likely scammers. When detected, the scammer was routed to a voice agent designed to waste their time. "Some of the most fun conversations happened from that."

### Voice Restoration
- **One of their proudest initiatives:** Working with people who have lost their voices (ALS, throat cancer) to synthesize their voice so they can communicate naturally again.
- **Scale:** Nearly 10,000 people served so far.

### Geopolitical Stance
- **Western-allied:** The company explicitly chooses to align with Western countries and their allies.
- **On China:** Acknowledges strong audio models coming from that region, especially for Chinese language use cases. Tries to stop distillation attacks. Recognizes that Chinese models may be better than ElevenLabs for Chinese-specific use cases. Focuses on outcompeting on quality and service for Western markets.
- **On IP norms:** Notes the stark difference between how Chinese labs and Western labs approach IP from Disney, Netflix, etc. Advocates for watermarking systems that all models (including Chinese ones) should follow.
- **On open source:** Hopes that Western open-source audio models remain at par or better than Chinese alternatives, because builders will always need access to weights for fine-tuning and fusion.

---

## The Ukraine Case Study

A detailed example of AI deployment in crisis governance:

- **Context:** When the war started, Ukraine needed to deliver government services (travel information, benefits for displaced persons, food assistance, education) to citizens who couldn't access normal administrative offices.
- **Solution:** The Diia citizen app, a centralized mobile app for accessing government services. ElevenLabs added voice capabilities so citizens could call a number and interact with information verbally, serving people without internet access or technical literacy.
- **Key organizational insight:** Each Ukrainian ministry had its own technical team empowered to innovate independently, bypassing red tape.
- **Mati's assessment:** This could be a model for the future of government services globally.

---

## Collaboration and Culture in the AI Ecosystem

### The Mati-Sesame Story

A case study in productive competitor collaboration:

1. Mati was an angel investor in ElevenLabs. Anj and former co-founder Ankit wanted to build a real-time voice companion product.
2. Instead of dismissing a potential competitor, Mati spent time breaking down his perspective on what Sesame's approach should be.
3. Result: Brendan (Sesame CEO, former Oculus CEO) angel-invested in ElevenLabs. Mati angel-invested in Sesame. The two teams share insights and collaborate despite being in the same space.
4. Sesame later open-sourced CSM (Conversational Speech Model), which was used by students in the prior year's class projects.

### The Host's Scaling Law

> "You can go further together. Especially in a new space like this, where often what seems like a competitive project, just because the VCs or the business ecosystem is trying to create some nice landscape slide with logos, these categories and labels are largely artificial constructs created by non-technical people to try to make progress legible to the world."

### Mati's Advice on Competition

> "It's very easy to get stuck in this loop of like other startups are your competition. Ultimately it does not matter for the mission you are solving. It's a long-term game. If you are to compete, you probably want it to be one of the hyperscalers or legacy companies. It also pulls you up a little bit."

---

## Key Bottlenecks for ElevenLabs

1. **Hiring:** Finding people with the right combination of intelligence, emotional maturity, excellence-driven, and humility.
2. **Architecture innovation:** Making cascaded systems truly interactive with emotional understanding.
3. **Personalization:** Every customer and every end-user has different preferences. Making interactions custom and personalized across all use cases.
4. **Compute:** More compute enables more experiments and more models. But Mati adds a nuance: "There is a version where maybe too much compute is also harmful, necessity is the mother of invention."
5. **Data labeling for emotion:** The lack of emotion-labeled speech data was a major bottleneck only recently addressed through heavy investment in labeling infrastructure.
6. **Economics of creative AI:** How much to charge for AI voiceover of a person who wouldn't otherwise go to a studio? The economics between AI-generated and human-performed creative work haven't been figured out yet.

---

## Q&A Highlights

- **Why studios are slow to adopt AI voice:** Until the controllability breakthrough (around 6 months ago), you couldn't direct the model like a director directs a voice actor. Now that you can, adoption is accelerating. But economic models for compensating voice talent whose performances train AI models remain unsolved.
- **On patents:** ElevenLabs decided against patenting their early work ($6,000 was too expensive at the time). In retrospect, innovation moves so fast that patents become obsolete. They fight patent troll attacks on a case-by-case basis rather than building a defensive portfolio.
- **On the "one-person frontier lab" concept:** Mati is enthusiastic. Tools like ElevenLabs are designed so that a single person has access to the same capabilities as the largest companies (with some concurrency limits and compliance differences).

---

## Key Metrics and Facts

| Metric | Value |
|---|---|
| Current ARR | > $430M |
| Revenue growth (36 months) | From ~$0 to $430M+ |
| Latest quarter ARR addition | > $100M |
| Team size | ~450 people |
| Team structure | Teams of < 10 people |
| Largest offices | London, New York, Warsaw, San Francisco |
| People helped with voice restoration | ~10,000 |
| First compute budget | Tens of thousands of dollars (NVIDIA Inception credits) |
| Patent cost they refused to pay | $6,000 |
| Enterprise revenue share | > 50% |
| Revenue split | ~50/50 enterprise vs. PLG |

---

## Actionable Takeaways

1. **Start from the customer problem, not the technology.** ElevenLabs' pivot from full AI dubbing to simple TTS was driven entirely by what customers actually asked for, not what was technically most impressive.

2. **The "most common denominator" strategy works.** When facing a complex multi-component problem, identify the single component that enables the most use cases and nail it first. TTS was the common denominator across dubbing, voiceover correction, audiobook creation, and script narration.

3. **Close the loop as tightly as possible.** Running a company on Discord, building a bot for user interaction, creating a voice marketplace, all designed to minimize the distance between the team and the people using the product.

4. **Value-based pricing, not cost-based.** Capture 1/10 of the value you deliver. The hard part is measuring value, not setting prices.

5. **Small autonomous teams scale better.** At $430M ARR with 450 people, ElevenLabs maintains teams of fewer than 10 with independent decision-making authority. Speed and customer understanding beat process.

6. **Collaborate with "competitors."** The Sesame relationship shows that sharing insights with teams working on adjacent problems creates value for everyone. The real competition is hyperscalers and incumbents, not other startups in your space.

7. **Fix quality before optimizing for deployment.** ElevenLabs delayed on-device models until cloud quality was sufficient. Rushing a low-quality on-device model would have been worse than waiting.

8. **Necessity drives invention.** Moderate compute constraints can be productive. Too much compute can lead to lazy approaches. The optimal amount of compute exists between scarcity and abundance.

9. **Gaming/community platforms are leading indicators.** What happens on Discord and in creator communities today predicts mainstream AI adoption 6 to 18 months later.

10. **Build safety into the model, not just around it.** Tracing, watermarking, and abuse detection baked into the model itself are more robust than external filters.

---

## My Analysis & Extensions

### The Cascaded vs. Fused Debate as a Broader Architectural Pattern

The cascaded vs. fused tension in audio AI mirrors a much broader pattern across all of AI systems design. In every domain, there is a tension between:
- **Modular, interpretable, reliable pipelines** (cascaded) where each component can be inspected, swapped, and validated independently.
- **End-to-end learned systems** (fused) that sacrifice interpretability for performance, latency, and emergent capabilities.

This same debate plays out in self-driving (modular perception-planning-control stacks vs. end-to-end learned driving), in robotics (cascaded perception-reasoning-action vs. vision-language-action models), and in code generation (retrieval + reasoning + generation vs. single-model solutions). Mati's insight that the answer is likely hybrid, fused for low-stakes interactions, cascaded for high-stakes actions, is probably the pattern that will dominate across all these domains for the next several years. The question is whether fused models will eventually become reliable enough to replace cascaded architectures entirely, or whether the interpretability and control advantages of cascading are permanent.

### The Emotional Voice Turing Test as a Milestone

Mati framed the race with Sesame to pass the "emotional voice Turing test" as one of the defining challenges in audio AI. This is worth tracking as a milestone because:
- It requires solving multiple sub-problems simultaneously (emotion detection, contextual reasoning, expressive synthesis).
- It's partially verifiable (humans can judge emotional appropriateness better than aesthetic quality of images).
- It has immediate commercial applications (customer support that detects frustration, companions that respond empathetically).
- It could be the inflection point that makes voice agents feel fundamentally different from chatbots, crossing from "tool" to "experience."

### The Forward-Deployed Engineering Model

ElevenLabs' use of forward-deployed engineers (a concept borrowed from Palantir, where Mati previously worked) is worth examining. In this model, engineers work directly alongside enterprise customers to integrate AI into their specific workflows. This approach:
- Creates deep customer context that feeds back into product development.
- Makes revenue predictable (if you can hire, you can deploy; if you can deploy, you can generate revenue).
- Builds switching costs (deeply integrated solutions are hard to replace).
- Risks becoming service-heavy rather than product-driven if not carefully managed.

The fact that Mati explicitly ties revenue predictability to deployment headcount growth suggests ElevenLabs views this as a core go-to-market advantage, not just a temporary necessity.

### ElevenLabs vs. BFL: Contrasting Approaches to Open Models

Comparing this lecture with Lecture 9 (Andreas Blattmann / BFL) reveals an interesting contrast in open-model strategy:
- **BFL** makes open weights a central part of their business model and product tiering (Schnell open, Dev open with commercial license, Pro behind API). Their thesis is that heterogeneous aesthetic preferences make open customization essential.
- **ElevenLabs** appears more cautious about open weights, focusing instead on platform accessibility (same capabilities for solo creators as for enterprises). They're concerned about distillation attacks and have explicit safety features baked into their models that wouldn't survive open-weight release.

This difference likely reflects the modality: image models have clear applications across cultures and preferences (making open weights valuable for customization), while voice models have more direct abuse vectors (deepfakes, fraud, impersonation) that make open weights riskier.

### The Poland-to-Global Pipeline

It's notable that both ElevenLabs and BFL are European companies (Poland/London and Germany, respectively) competing at the absolute frontier of AI. Both cite their European origin as a source of unique insight:
- BFL: Efficiency-first culture driven by German engineering values and compute constraints.
- ElevenLabs: The dubbing problem was visible from Poland in a way it wasn't from the US.

This challenges the Silicon Valley centrality narrative and suggests that frontier AI companies can emerge from anywhere that has: (a) strong technical talent, (b) unique problem visibility, and (c) willingness to compete globally.

### The Voice Authentication Prediction

Mati's clear statement that voice authentication "is not the future" deserves attention. Many financial institutions still use voice biometrics. If ElevenLabs' own models can replicate voices well enough to fool these systems, then the CEO of a leading voice AI company telling the world to stop using voice authentication carries significant weight. This is analogous to the cryptography community warning about quantum computing threats to current encryption: the people building the tools that will break existing systems are the most credible voices warning about the transition.

### Open Questions for Further Exploration

1. **When will fused models become reliable enough for enterprise?** Mati says "next few years" for cascaded dominance. What would change his mind? Probably: fused models achieving reliable tool calling and verifiable action execution.
2. **What happens to human voice actors?** The economics question Mati flagged is genuinely unsolved. AI voiceover of performances that "wouldn't have been created otherwise" is one model, but the boundary between augmentation and replacement is blurry.
3. **Can the emotional voice Turing test be formally defined?** Unlike text-based Turing tests, voice has additional dimensions (prosody, timing, breath, micro-pauses). What would a rigorous benchmark look like?
4. **How will the 3 to 5 conversational platform prediction play out?** Mati's analogy to cloud providers (3 to 4 winners) implies a winner-take-most dynamic. But voice/audio may be more fragmented than compute because of language, cultural, and regulatory differences.
5. **What does the Diia/Ukraine case study imply for AI in governance?** If crisis conditions can accelerate AI adoption in government services, what peacetime incentive structures could produce similar speed?

---

*Notes from Stanford CS 153, Lecture 10, speaker Mati Staniszewski.*
