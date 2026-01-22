const { useState, useRef } = React;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============================================================================
// HEADER COMPONENT
// ============================================================================

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        Washington and Lee University Teaching and Learning Center
                    </div>
                    <nav>
                        <a href="#framework" onClick={(e) => { e.preventDefault(); scrollToSection('framework'); }}>
                            The Framework
                        </a>
                        <a href="#examples" onClick={(e) => { e.preventDefault(); scrollToSection('examples'); }}>
                            Examples
                        </a>
                        <a href="#designer" onClick={(e) => { e.preventDefault(); scrollToSection('designer'); }}>
                            Design Your Assignment
                        </a>
                        <a href="#resources" onClick={(e) => { e.preventDefault(); scrollToSection('resources'); }}>
                            Resources
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

// ============================================================================
// HERO SECTION
// ============================================================================

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <h1>Teaching with AI Boundaries: A Framework for Meaningful Learning</h1>
                <p className="subheadline">
                    Discover how to design assignments that protect authentic student thinking while
                    leveraging AI where it genuinely enhances learning.
                </p>
                <p>
                    This framework, developed by Professor Jeffrey Schatten at Washington and Lee University,
                    shows how to structure assignments with intentional AI boundaries. The pattern works across
                    disciplines because it honors what makes human thinking irreplaceable—direct observation,
                    creative discovery, primary engagement—while using AI strategically to deepen analysis and
                    strengthen communication.
                </p>
            </div>
        </section>
    );
}

// ============================================================================
// THREE-STAGE PATTERN SECTION
// ============================================================================

function ThreeStagePattern() {
    return (
        <section id="framework">
            <div className="container">
                <h2>The Three-Stage Pattern</h2>

                <div className="pattern-cards">
                    <div className="pattern-card">
                        <div className="badge">🚫</div>
                        <h3>Stage 1: Primary Experience</h3>
                        <p>
                            Students engage directly with source material through observation, reading, fieldwork,
                            or making. AI cannot reconstruct, embellish, or generate this foundational work.
                        </p>
                        <div className="why-matters">
                            <strong>Why it matters:</strong> Authentic perception and direct engagement build the
                            raw material for analysis. Without this, students have nothing genuine to interpret.
                        </div>
                    </div>

                    <div className="pattern-card">
                        <div className="badge">🤝</div>
                        <h3>Stage 2: Conceptual Interpretation</h3>
                        <p>
                            Students develop analysis using disciplinary frameworks, with AI testing interpretations,
                            surfacing blind spots, and refining arguments they've already formed.
                        </p>
                        <div className="why-matters">
                            <strong>Why it matters:</strong> AI helps students think more rigorously about their
                            primary work, but can't replace the interpretive judgment that comes from wrestling
                            with ideas.
                        </div>
                    </div>

                    <div className="pattern-card">
                        <div className="badge">🛠️</div>
                        <h3>Stage 3: Application & Communication</h3>
                        <p>
                            Students apply insights to future scenarios or create visual syntheses, using AI as
                            a design partner or communication tool.
                        </p>
                        <div className="why-matters">
                            <strong>Why it matters:</strong> Students demonstrate understanding through practical
                            application, with AI supporting implementation rather than replacing insight.
                        </div>
                    </div>
                </div>

                <div className="button-group">
                    <button onClick={() => scrollToSection('examples')}>
                        Explore Examples Across Disciplines
                    </button>
                    <button className="secondary" onClick={() => scrollToSection('designer')}>
                        Design Your Own Assignment
                    </button>
                </div>
            </div>
        </section>
    );
}

// ============================================================================
// ACCORDION COMPONENT
// ============================================================================

function Accordion({ title, badge, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="accordion-title">
                    <div className="stage-badge">{badge}</div>
                    <h3>{title}</h3>
                </div>
                <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
}

// ============================================================================
// PEDAGOGY PANEL COMPONENT
// ============================================================================

function PedagogyPanel({ children }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="accordion-panel panel-pedagogy">
            <button className="pedagogy-toggle" onClick={() => setIsVisible(!isVisible)}>
                <span>{isVisible ? '▼' : '▶'}</span>
                <span>Pedagogical Reasoning</span>
            </button>
            <div className={`pedagogy-content ${isVisible ? 'visible' : ''}`}>
                {children}
            </div>
        </div>
    );
}

// ============================================================================
// BUSINESS CASE STUDY COMPONENT
// ============================================================================

function BusinessCaseStudy() {
    return (
        <div>
            <div className="assignment-overview">
                <div className="assignment-meta">
                    <div className="assignment-meta-item">
                        <div className="assignment-meta-label">Course</div>
                        <div className="assignment-meta-value">Managing Uncertainty (Business Administration)</div>
                    </div>
                    <div className="assignment-meta-item">
                        <div className="assignment-meta-label">Level</div>
                        <div className="assignment-meta-value">Undergraduate, 200-level</div>
                    </div>
                </div>

                <div className="overview-section">
                    <h4>What students create</h4>
                    <p>
                        An organizational analysis paper examining how a student organization functions under uncertainty,
                        anchored in one personally observed high-stakes moment and interpreted using concepts from Morgan
                        Housel's <em>Same As Ever</em>.
                    </p>

                    <h4>Why this assignment matters</h4>
                    <p>
                        Students learn to distinguish between human behavior they can observe and theories they impose.
                        By starting from authentic observation before interpretation, they develop the foundational skill
                        of evidence-based reasoning—seeing what's actually there before explaining it.
                    </p>
                </div>
            </div>

            <Accordion title="Grounded Human Observation" badge="Stage 1" defaultOpen={true}>
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>What Students Learn</h4>
                        <ul>
                            <li>How to watch closely without jumping to conclusions</li>
                            <li>The difference between description and interpretation</li>
                            <li>How to notice patterns in real organizational behavior</li>
                        </ul>

                        <h4>AI Permissions: None. Zero. Not Happening.</h4>
                        <p>
                            This stage is about developing your own observational instincts. AI can't watch the world
                            for you, and you can't build analytical skills on someone else's observations. You need
                            this unfiltered foundation for everything that comes next.
                        </p>

                        <h4>The Assignment</h4>
                        <p>
                            Pick an organization you can actually observe. Not one you read about—one you can watch
                            in action. Could be your workplace, a sports team, a student organization, a family business,
                            even your friend group planning something complicated.
                        </p>
                        <p>
                            Now watch. How do people actually work together? Who talks to whom? Where do decisions get
                            made? What happens when there's conflict or confusion? Write 500-750 words describing exactly
                            what you see. No analysis yet—that's Stage 2. Right now, just capture the reality in front
                            of you.
                        </p>

                        <h4>What Students Have Analyzed</h4>
                        <ul>
                            <li>A golfer breaking down their own swing mechanics and practice habits</li>
                            <li>Communication patterns between doctors and patients in a physical therapy clinic</li>
                            <li>How a private equity team makes investment decisions under pressure</li>
                            <li>The way students really plan their schedules (versus how they think they do it)</li>
                        </ul>
                    </div>

                    <PedagogyPanel>
                        <h4>Why no AI here?</h4>
                        <p>
                            Students need unmediated access to their own observations before introducing any analytical
                            framework. If students use AI to "help reconstruct" events or "enhance" descriptions, they
                            lose the authenticity of what they actually noticed in the moment. The goal is to preserve
                            their unique vantage point as someone who was present.
                        </p>

                        <h4>What would break?</h4>
                        <p>
                            If students could use AI in this stage, they'd unconsciously shift from describing what
                            happened to describing what "should" have happened according to organizational theory. AI
                            would smooth over the messy, contradictory, or surprising details that make the observation
                            valuable. Students would lose the raw material that makes their interpretation genuinely
                            grounded.
                        </p>

                        <h4>What surprises emerged?</h4>
                        <p>
                            Students often resist this constraint initially, wanting to "write better" with AI's help.
                            But they consistently report that forcing themselves to rely on memory and perception makes
                            them notice different things—small behavioral details, who had actual vs. formal authority,
                            what went unsaid. The constraint creates more observational richness, not less.
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            In business and organizational analysis, the ability to observe workplace dynamics without
                            immediately jumping to explanation is foundational. Executives and consultants must learn
                            to see what's actually happening in an organization before imposing frameworks. This mirrors
                            ethnographic research methods where observation precedes interpretation.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <Accordion title="Organizational Interpretation Using Housel" badge="Stage 2">
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>What Students Learn</h4>
                        <ul>
                            <li>How theoretical frameworks reveal hidden patterns in your observations</li>
                            <li>How to use AI as a thinking partner (not a shortcut)</li>
                            <li>How to test ideas against evidence you've already gathered</li>
                            <li>When to trust AI and when to push back</li>
                        </ul>

                        <h4>AI Permissions: Welcome to Co-Intelligence</h4>
                        <p>
                            Now AI enters as a collaborator. Use it to explore Morgan Housel's ideas about organizations,
                            human behavior, and decision-making. Ask it to help connect theory to your specific observations.
                            Test interpretations. Play devil's advocate.
                        </p>
                        <p><strong>But here's the deal:</strong></p>
                        <ul>
                            <li>Document every conversation with AI in your Co-Intelligence Appendix</li>
                            <li>Show your prompts and explain how AI's responses shaped your thinking</li>
                            <li>Push back when AI misses something you saw in your observations</li>
                        </ul>

                        <h4>The Assignment</h4>
                        <p>
                            Go back to what you observed in Stage 1. Now apply Morgan Housel's framework—his ideas about
                            why people make the decisions they do, how organizations actually work versus how we think
                            they work, and why smart people do seemingly irrational things.
                        </p>
                        <p>
                            Use AI as your research assistant and thought partner. Ask it: "How would Housel explain this
                            pattern I noticed?" or "What am I missing in my interpretation?" Treat it like a really
                            well-read colleague who helps you think, not one who thinks for you.
                        </p>
                        <p>
                            Write 750-1000 words connecting Housel's concepts to your observations. Ground every theoretical
                            point in specific details you witnessed. Include your Co-Intelligence Appendix showing how you
                            worked with AI.
                        </p>
                    </div>

                    <PedagogyPanel>
                        <h4>Why allow AI as co-intelligence here?</h4>
                        <p>
                            Students have now formed their own interpretation based on what they observed. AI can help them
                            think more rigorously about that interpretation—proposing alternative explanations, checking
                            logical consistency, surfacing factors they might be missing. This is when AI functions as a
                            critical thinking partner, pushing students to defend or refine claims they've already made.
                        </p>

                        <h4>What's the boundary?</h4>
                        <p>
                            The crucial distinction is that students must have formed an interpretation before engaging AI.
                            They can't paste their Stage 1 observations into Claude and ask "analyze this using <em>Same As
                            Ever</em>." That outsources the interpretive work. Instead, students develop their analysis first,
                            then use AI to stress-test it: "I think this reveals short-term thinking, but what if I'm wrong?
                            What alternative explanations might fit?"
                        </p>

                        <h4>What would break?</h4>
                        <p>
                            If students skip forming their own interpretation and go straight to AI, they get generic
                            organizational analysis that could apply to any situation. The insight that comes from their
                            specific observation gets lost. AI is good at pattern-matching to theory, but it can't know
                            what was meaningful about what they witnessed unless they've already done that interpretive work.
                        </p>

                        <h4>Student outcomes</h4>
                        <p>
                            Students report that AI helps them see gaps in their logic or consider factors they hadn't
                            weighted properly. The best uses are when students have AI argue against their interpretation—"convince
                            me I'm wrong about this being about risk aversion"—which forces them to either strengthen their
                            case or recognize they need to revise their thinking.
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            In business analysis, having your reasoning challenged is normal—by colleagues, clients, or data
                            that doesn't fit your model. Learning to use AI as a "smart skeptic" prepares students for
                            real-world analytical work where interpretations must withstand scrutiny.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <Accordion title="Looking Forward Under Uncertainty" badge="Stage 3">
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>What Students Learn</h4>
                        <ul>
                            <li>How to synthesize observation and theory into forward-looking insights</li>
                            <li>How organizations might evolve (or fail to evolve)</li>
                            <li>How to communicate complex analysis visually</li>
                            <li>How AI image generation works as a thinking tool, not just decoration</li>
                        </ul>

                        <h4>AI Permissions: Full Partnership Mode</h4>
                        <p>
                            Keep using AI as your analytical partner, but now add visual thinking. Use Google Gemini to
                            create an infographic that captures your insights—not as an afterthought, but as another way
                            to work through your ideas.
                        </p>
                        <p><strong>What you'll submit:</strong></p>
                        <ul>
                            <li>Keep building your Co-Intelligence Appendix with all text-based AI work</li>
                            <li>Create one Gemini-generated infographic (the image itself becomes part of your argument)</li>
                            <li>Include the exact prompt you used to generate it</li>
                            <li>Explain why the visual matters—what does it reveal that words can't?</li>
                        </ul>

                        <h4>The Assignment</h4>
                        <p>
                            You've observed an organization closely (Stage 1) and analyzed it through Housel's lens
                            (Stage 2). Now look ahead: What challenges is this organization likely to face? What opportunities
                            might they miss? How could they navigate uncertainty more effectively?
                        </p>
                        <p>
                            Write 500-750 words exploring future scenarios. Then use Google Gemini to create a visual that
                            synthesizes your analysis—something that shows the organization's current patterns, the tensions
                            you identified, and the possible futures you see.
                        </p>
                        <p>Your complete submission:</p>
                        <ul>
                            <li>Your forward-looking analysis (500-750 words)</li>
                            <li>Your Gemini-generated infographic</li>
                            <li>The prompt you used to create it</li>
                            <li>A brief explanation (200 words): Why this visual? What does it capture that your written
                                analysis can't?</li>
                            <li>Your complete Co-Intelligence Appendix covering all AI use in Stages 2 and 3</li>
                        </ul>
                    </div>

                    <PedagogyPanel>
                        <h4>Why this stage matters</h4>
                        <p>
                            Students must demonstrate that their analysis has practical implications. It's not enough to
                            explain what happened—they need to show how understanding organizational dynamics leads to
                            better design choices. This is where interpretation becomes actionable.
                        </p>

                        <h4>AI's role</h4>
                        <p>
                            Students can use AI similarly to Stage 2—testing whether their recommendations actually address
                            the dynamics they identified, considering implementation challenges, or refining the practical
                            details of their proposals.
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            Business students must learn that understanding organizations isn't an academic exercise—it
                            should inform how you design systems, processes, and incentives. This stage ensures analysis
                            leads to application.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <div className="full-assignment-button">
                <button className="secondary">View Full Student-Facing Assignment</button>
            </div>
        </div>
    );
}

// ============================================================================
// LITERATURE CASE STUDY COMPONENT
// ============================================================================

function LiteratureCaseStudy() {
    return (
        <div>
            <div className="assignment-overview">
                <div className="assignment-meta">
                    <div className="assignment-meta-item">
                        <div className="assignment-meta-label">Course</div>
                        <div className="assignment-meta-value">Introduction to Literary Analysis or American Literature Survey</div>
                    </div>
                    <div className="assignment-meta-item">
                        <div className="assignment-meta-label">Level</div>
                        <div className="assignment-meta-value">Undergraduate, 200-level</div>
                    </div>
                </div>

                <div className="overview-section">
                    <h4>What students create</h4>
                    <p>
                        A literary analysis paper anchored in documented reading experience, connecting personal textual
                        encounter to theoretical interpretation and contemporary resonance.
                    </p>

                    <h4>Why this assignment matters</h4>
                    <p>
                        Students learn to distinguish between their authentic response to a text and critical frameworks
                        imposed afterward. By documenting their actual reading experience before encountering secondary
                        criticism, they develop the foundational skill of close reading—noticing what's on the page before
                        explaining what it means.
                    </p>
                </div>
            </div>

            <Accordion title="Documented Reading Experience" badge="Stage 1" defaultOpen={true}>
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>What to Document</h4>
                        <p>
                            Select a complete literary text (novel, play, long-form essay, poetry collection) and maintain
                            a reading journal documenting your authentic encounter with it.
                        </p>
                        <ul>
                            <li><strong>Specific passages</strong> that stopped you, confused you, delighted you, or shifted your
                                understanding (with page numbers and brief quotes)</li>
                            <li><strong>Your immediate reactions</strong> in the moment of reading—questions that arose, predictions
                                you made, emotions you felt</li>
                            <li><strong>Pattern recognition</strong> across the text—recurring images, structural choices, stylistic
                                shifts you noticed as you read</li>
                            <li><strong>One pivotal moment</strong> in your reading where your understanding of the text fundamentally
                                changed</li>
                        </ul>

                        <h4>AI Permissions: None</h4>
                        <p>
                            This must capture your unmediated response as a reader before encountering secondary criticism or
                            analysis. AI tools may not be used to generate, reconstruct, summarize, or analyze your reading
                            experience. The journal entries must reflect what you actually noticed while reading, not what AI
                            suggests you should have noticed.
                        </p>

                        <p><strong>Deliverable:</strong> 3-5 pages of reading journal entries tracking your experience through the
                        text, culminating in documentation of the pivotal interpretive moment</p>
                    </div>

                    <PedagogyPanel>
                        <h4>Why no AI here?</h4>
                        <p>
                            The reading journal captures something irreplaceable: the student's actual cognitive and emotional
                            journey through a text. This includes confusion, misinterpretation, evolving understanding—the messy
                            reality of meaning-making that happens when a real reader encounters language on the page. AI can't
                            reconstruct this because it never experienced the reading.
                        </p>

                        <h4>What would break?</h4>
                        <p>
                            If students use AI to "improve" their journal entries or "identify important passages," they lose
                            the authenticity of discovery. AI would direct them toward conventional interpretations or canonical
                            "important moments," erasing the unique patterns they noticed organically. The goal is to preserve
                            their genuine encounter with the text.
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            Literary scholars and critics must develop the capacity for sustained, attentive reading before
                            applying theory. The practice of close reading—noticing diction, syntax, imagery, form—precedes
                            interpretation. This mirrors how professional literary criticism works: primary textual engagement
                            before secondary scholarship.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <Accordion title="Theoretical Interpretation" badge="Stage 2">
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>The Assignment</h4>
                        <p>
                            Develop a literary argument by applying one critical framework or theoretical lens to interpret your
                            documented reading experience. You must explain what your pivotal moment reveals about how the text
                            creates meaning—through narrative structure, symbolic patterns, historical context, linguistic choices,
                            genre conventions, or reader positioning.
                        </p>
                        <p>
                            Select the critical approach that best illuminates your reading experience rather than surveying
                            multiple frameworks superficially. Strong interpretation moves beyond description to explain why the
                            text makes the literary choices it does and what effects those choices produce.
                        </p>

                        <h4>AI Permissions: Co-Intelligence Partner</h4>
                        <p><strong>Productive AI uses:</strong></p>
                        <ul>
                            <li>Stress-testing interpretive claims by asking AI to propose alternative readings of the same textual
                                evidence</li>
                            <li>Surfacing contextual information you might be missing (historical period, literary movements,
                                biographical context)</li>
                            <li>Checking whether your argument actually explains the textual patterns you documented or just
                                restates them</li>
                            <li>Clarifying and sharpening claims once you've formed your interpretation</li>
                        </ul>

                        <p><strong>Unproductive AI uses</strong> (do not do these):</p>
                        <ul>
                            <li>Asking AI to generate the interpretation from your journal entries</li>
                            <li>Using AI to identify themes or patterns without your own textual analysis</li>
                            <li>Having AI select which critical framework applies to your text</li>
                            <li>Asking AI to explain symbolism or meaning without reference to your specific reading experience</li>
                        </ul>

                        <p><strong>Deliverable:</strong> 4-5 pages of analytical writing connecting your documented reading
                        experience to a theoretical interpretation of how the text functions</p>
                    </div>

                    <PedagogyPanel>
                        <h4>Why allow AI as co-intelligence here?</h4>
                        <p>
                            Students have now formed an interpretation grounded in their actual reading experience. AI can help
                            them test that interpretation against alternative readings, fill in contextual knowledge gaps, or refine
                            the precision of their claims. This is particularly valuable in literary studies where multiple valid
                            interpretations exist—AI can propose alternatives that push students to defend or revise their thinking.
                        </p>

                        <h4>What's the boundary?</h4>
                        <p>
                            Students must have developed their interpretive framework based on close reading before engaging AI.
                            They can't input passages from the text and ask "what does this symbolize?" That bypasses the interpretive
                            work. Instead, students propose an interpretation first, then use AI to challenge it.
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            Literary interpretation requires defending readings against competing explanations. Learning to anticipate
                            counterarguments and strengthen claims with precise textual evidence is central to literary scholarship.
                            AI as critical interlocutor prepares students for academic discourse.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <Accordion title="Contemporary Resonance" badge="Stage 3">
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>The Assignment</h4>
                        <p>
                            Connect your literary analysis to contemporary cultural conversations. The goal is to show how your close
                            reading and theoretical interpretation illuminate current debates, social questions, or artistic practices—demonstrating
                            that literary study has stakes beyond the classroom.
                        </p>
                        <p>
                            This is not about finding "modern parallels" or forced relevance. Instead, ask: What does this text help
                            us understand about how language, narrative, or representation works in contexts that matter now? How does
                            your specific reading offer insight into contemporary questions about power, identity, communication, or
                            meaning-making?
                        </p>
                        <p>
                            Your contemporary connection must emerge from your Stage 2 interpretation—not replace it.
                        </p>

                        <h4>AI Permissions: Co-Intelligence Partner</h4>
                        <p><strong>AI may be used to:</strong></p>
                        <ul>
                            <li>Identify contemporary cultural moments or debates where your literary insights apply</li>
                            <li>Test whether your connection is substantive or superficial</li>
                            <li>Surface recent scholarship linking this text to current issues</li>
                            <li>Refine how you articulate the connection for readers unfamiliar with literary theory</li>
                        </ul>

                        <p><strong>Deliverable:</strong> 2-3 pages connecting your literary analysis to contemporary cultural
                        relevance, demonstrating why your reading matters beyond the text itself</p>
                    </div>

                    <PedagogyPanel>
                        <h4>Why this stage matters</h4>
                        <p>
                            Students must demonstrate that literary analysis isn't an isolated academic exercise—it's a way of
                            understanding how meaning, power, and representation function everywhere. This stage asks: What can your
                            careful reading of this specific text teach us about the world we live in now?
                        </p>

                        <h4>Student outcomes</h4>
                        <p>
                            Students report this is where their literary analysis starts to feel urgent rather than archival. The best
                            outcomes show genuine insight: "I noticed how this text uses ambiguity to resist easy interpretation, and
                            now I see that same strategy in contemporary political rhetoric—here's why it matters that we understand
                            how that works."
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            Literary scholars don't study old texts because they're old—they study them because close attention to how
                            language works reveals patterns that operate everywhere. This stage ensures students understand why literary
                            analysis is a form of cultural literacy, not historical curiosity.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <div className="full-assignment-button">
                <button className="secondary">View Full Student-Facing Assignment</button>
            </div>
        </div>
    );
}

// ============================================================================
// ENVIRONMENTAL SCIENCE CASE STUDY COMPONENT
// ============================================================================

function EnvironmentalScienceCaseStudy() {
    return (
        <div>
            <div className="assignment-overview">
                <div className="assignment-meta">
                    <div className="assignment-meta-item">
                        <div className="assignment-meta-label">Course</div>
                        <div className="assignment-meta-value">Environmental Science or Ecology Field Course</div>
                    </div>
                    <div className="assignment-meta-item">
                        <div className="assignment-meta-label">Level</div>
                        <div className="assignment-meta-value">Undergraduate, 200-300 level</div>
                    </div>
                </div>

                <div className="overview-section">
                    <h4>What students create</h4>
                    <p>
                        An ecological field study documenting observed ecosystem dynamics, analyzing those observations
                        through ecological theory, and proposing evidence-based management interventions.
                    </p>

                    <h4>Why this assignment matters</h4>
                    <p>
                        Students learn to distinguish between what they directly observe in nature and the ecological
                        principles they use to explain it. By starting with documented field observations before applying
                        theory, they develop the foundational scientific skill of evidence-based reasoning—seeing what's
                        actually there before interpreting it.
                    </p>
                </div>
            </div>

            <Accordion title="Field Documentation and Data Collection" badge="Stage 1" defaultOpen={true}>
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>The Assignment</h4>
                        <p>
                            Select a local ecosystem you can visit repeatedly (forest plot, stream, wetland, urban green
                            space, shoreline, or campus habitat). Conduct 4-6 field observation sessions across at least
                            two weeks, visiting at different times of day when possible.
                        </p>

                        <h4>What to document</h4>
                        <ul>
                            <li><strong>Species inventory:</strong> What organisms are present? (Plants, animals, fungi,
                                evidence of species you don't see directly)</li>
                            <li><strong>Interactions observed:</strong> Pollination, predation, competition, mutualism—any
                                interaction between organisms you personally witness</li>
                            <li><strong>Abiotic conditions:</strong> Weather, water flow, soil moisture, light conditions,
                                temperature, signs of disturbance</li>
                            <li><strong>Spatial patterns:</strong> Where do different species occur? What patterns do you
                                notice in distribution?</li>
                            <li><strong>Changes over time:</strong> What changes between your visits? Seasonal shifts,
                                weather impacts, new species appearing</li>
                            <li><strong>Photographic evidence:</strong> Document site conditions, species, and interactions
                                (photos must be your own)</li>
                        </ul>

                        <h4>AI Permissions: None</h4>
                        <p>
                            This must be your own direct observation. AI tools may not be used to:
                        </p>
                        <ul>
                            <li>Identify species from photos (use field guides or expert consultation instead)</li>
                            <li>Infer interactions you didn't witness ("probably" or "likely" scenarios)</li>
                            <li>Reconstruct missing data between visits</li>
                            <li>Suggest what "should" be present based on habitat type</li>
                        </ul>

                        <p><strong>Deliverable:</strong> Field journal with dated entries, species lists, interaction
                        observations, photographs, and documented abiotic conditions (4-5 pages plus photos)</p>
                    </div>

                    <PedagogyPanel>
                        <h4>Why no AI here?</h4>
                        <p>
                            Ecological field skills require students to observe natural systems without preconceptions about
                            what "should" be there. If students use AI to identify species from photos or suggest likely
                            interactions, they lose the authentic struggle of observation—learning to distinguish a white oak
                            from a red oak, recognizing bird calls, noticing which insects visit which flowers. These
                            observational skills are foundational to ecological practice.
                        </p>

                        <h4>What would break?</h4>
                        <p>
                            If students use AI-powered species identification apps or ask AI "what organisms are likely in
                            this habitat," they get correct answers without developing observational competence. They also miss
                            surprises—the unexpected species, the interaction that doesn't fit typical patterns—which often
                            become the most interesting material for analysis.
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            Ecologists must develop natural history knowledge through direct experience with organisms and
                            habitats. Reading about ecosystems is not the same as spending hours watching them function. This
                            mirrors how ecological research actually works—sustained observation in real systems before analysis
                            and interpretation.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <Accordion title="Ecological Analysis and Interpretation" badge="Stage 2">
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>The Assignment</h4>
                        <p>
                            Use ecological principles to explain the patterns and interactions you documented. Your analysis
                            should move from "what I observed" to "why the ecosystem functions this way."
                        </p>
                        <p>
                            Apply concepts such as: trophic relationships and energy flow, succession and disturbance ecology,
                            niche partitioning and resource competition, keystone species and ecological interactions, ecosystem
                            services and nutrient cycling, impacts of abiotic conditions on community structure.
                        </p>
                        <p>
                            Strong analysis explains causal mechanisms, not just labels. Ground every ecological principle in
                            specific observations from your field data.
                        </p>

                        <h4>AI Permissions: Co-Intelligence Partner</h4>
                        <p><strong>AI may be used to:</strong></p>
                        <ul>
                            <li>Stress-test your explanations by proposing alternative ecological mechanisms</li>
                            <li>Fill knowledge gaps about species ecology, life history, or habitat requirements</li>
                            <li>Check whether your causal reasoning actually explains the patterns you observed</li>
                            <li>Identify ecological concepts you might be underweighting</li>
                            <li>Find relevant research on similar ecosystems or species</li>
                        </ul>

                        <p><strong>Unproductive AI uses</strong> (do not do these):</p>
                        <ul>
                            <li>Asking AI to analyze your field notes and generate ecological interpretation</li>
                            <li>Having AI identify which ecological concepts apply without your own reasoning</li>
                            <li>Using AI to suggest interactions or patterns you didn't document</li>
                        </ul>

                        <p><strong>Deliverable:</strong> 4-5 pages of ecological analysis connecting your field observations
                        to ecological theory, with specific evidence from your documented data supporting each claim</p>
                    </div>

                    <PedagogyPanel>
                        <h4>Why allow AI as co-intelligence here?</h4>
                        <p>
                            Students have now documented real ecosystem patterns through direct observation. AI can help them
                            think more rigorously about the ecological processes explaining those patterns—proposing alternative
                            mechanisms, surfacing species biology they might not know, or identifying research on similar systems.
                        </p>

                        <h4>What's the boundary?</h4>
                        <p>
                            Students must form their own ecological interpretation based on their field data before engaging AI.
                            They can't input their field notes and ask "explain this ecosystem's ecology." That bypasses the
                            interpretive work.
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            Ecological research involves proposing mechanisms, testing alternative hypotheses, and evaluating
                            evidence. Learning to use AI as a "skeptical ecologist" who questions your interpretations prepares
                            students for scientific discourse where explanations must withstand scrutiny from peer reviewers and
                            colleagues.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <Accordion title="Management Recommendations" badge="Stage 3">
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>The Assignment</h4>
                        <p>
                            Develop evidence-based recommendations for ecosystem management, restoration, or conservation based
                            on your ecological understanding from Stages 1 and 2.
                        </p>
                        <p>
                            Your recommendations should: address realistic management goals, account for practical constraints
                            (budget, maintenance, public access, property ownership, regulatory requirements), recognize
                            ecological complexity and uncertainty, and propose monitoring to evaluate whether interventions
                            achieve intended outcomes.
                        </p>
                        <p>
                            This is not about "fixing nature" but working with ecological processes. Strong recommendations
                            leverage existing ecosystem functions rather than fighting them.
                        </p>

                        <h4>AI Permissions: Co-Intelligence Partner</h4>
                        <p><strong>AI may be used to:</strong></p>
                        <ul>
                            <li>Identify management strategies used in similar ecosystems</li>
                            <li>Evaluate feasibility and costs of proposed interventions</li>
                            <li>Surface unintended consequences you might not have considered</li>
                            <li>Refine implementation details and monitoring protocols</li>
                        </ul>

                        <p><strong>Deliverable:</strong> 2-3 pages of site-specific management recommendations with ecological
                        justification, practical implementation details, and proposed monitoring approaches</p>
                    </div>

                    <PedagogyPanel>
                        <h4>Why this stage matters</h4>
                        <p>
                            Students must demonstrate that ecological understanding leads to informed action. It's not enough to
                            explain ecosystem function—they need to show how that understanding guides management decisions. This
                            is where observation and analysis become applied ecology.
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            Applied ecologists and conservation practitioners must translate ecological knowledge into actionable
                            management strategies. Learning to develop site-specific, evidence-based recommendations prepares
                            students for careers where ecological understanding must inform real-world decisions about land use,
                            restoration, and conservation.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <div className="full-assignment-button">
                <button className="secondary">View Full Student-Facing Assignment</button>
            </div>
        </div>
    );
}

// ============================================================================
// STUDIO ART CASE STUDY COMPONENT
// ============================================================================

function StudioArtCaseStudy() {
    return (
        <div>
            <div className="assignment-overview">
                <div className="assignment-meta">
                    <div className="assignment-meta-item">
                        <div className="assignment-meta-label">Course</div>
                        <div className="assignment-meta-value">Studio Art: Drawing, Painting, Printmaking, or 2D Foundations</div>
                    </div>
                    <div className="assignment-meta-item">
                        <div className="assignment-meta-label">Level</div>
                        <div className="assignment-meta-value">Undergraduate, 200-300 level</div>
                    </div>
                </div>

                <div className="overview-section">
                    <h4>What students create</h4>
                    <p>
                        An original artwork developed through sustained studio practice, accompanied by critical analysis
                        using art historical frameworks and an artist statement communicating intent to public audiences.
                    </p>

                    <h4>Why this assignment matters</h4>
                    <p>
                        Students learn to distinguish between the embodied thinking that happens through making and the
                        conceptual frameworks used to contextualize that work. By creating art before analyzing it through
                        theory, they develop authentic artistic practice—discovering ideas through process rather than
                        illustrating predetermined concepts.
                    </p>
                </div>
            </div>

            <Accordion title="Studio Practice and Process Documentation" badge="Stage 1" defaultOpen={true}>
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>The Assignment</h4>
                        <p>
                            Create an original artwork using the medium and techniques we've been exploring in class. Your
                            work should emerge from sustained studio practice—not a single sitting, but multiple work sessions
                            where you observe, respond, revise, and discover through making.
                        </p>

                        <h4>Document your studio process</h4>
                        <ul>
                            <li><strong>Initial explorations:</strong> Sketches, tests, experiments with materials or approaches
                                (photograph these)</li>
                            <li><strong>Key decisions:</strong> What formal choices did you make and why? Color, composition,
                                mark-making, scale, materials</li>
                            <li><strong>Technical challenges:</strong> Where did the medium resist or surprise you? How did you
                                respond?</li>
                            <li><strong>Revisions and pivots:</strong> What changed as the work developed? What didn't work and
                                why?</li>
                            <li><strong>The moment it became clear:</strong> When did you know what the work needed to be? What
                                shifted?</li>
                        </ul>

                        <h4>AI Permissions: None</h4>
                        <p>
                            This must document your actual studio thinking—not a cleaned-up narrative written afterward. AI
                            tools may not be used to:
                        </p>
                        <ul>
                            <li>Generate images or visual elements that become part of your artwork</li>
                            <li>"Improve" or "enhance" your drawings, paintings, or designs</li>
                            <li>Suggest compositions, color palettes, or formal solutions</li>
                            <li>Reconstruct or invent studio process you didn't actually experience</li>
                            <li>Create preliminary sketches or studies</li>
                        </ul>

                        <p><strong>Why these constraints?</strong> Art-making is a form of embodied research. Ideas emerge
                        through the physical act of drawing, mixing color, layering marks—not through description or intention.
                        AI can't do this thinking for you because it doesn't have hands, doesn't feel material resistance,
                        doesn't discover through making.</p>

                        <p><strong>Deliverable:</strong> One completed original artwork, process documentation (10-15 images
                        showing development), studio journal entries (2-3 pages) capturing your thinking throughout</p>
                    </div>

                    <PedagogyPanel>
                        <h4>Why no AI here?</h4>
                        <p>
                            Studio practice is where artistic thinking happens—through material exploration, technical
                            problem-solving, and the iterative process of making, observing, and revising. This cannot be
                            outsourced to AI because the knowledge being built is embodied and material. A painter learns about
                            color relationships by mixing and observing paint, not by asking AI for color theory. The constraint
                            protects the authenticity of studio learning.
                        </p>

                        <h4>What would break?</h4>
                        <p>
                            If students use AI to generate preliminary images, suggest compositions, or "enhance" their work,
                            they bypass the creative problem-solving that is the point of studio education. Art students aren't
                            learning to make objects that look good—they're learning to think through materials, discovering
                            ideas that only emerge through sustained engagement with a medium.
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            Professional artists develop a studio practice—a disciplined, iterative process of making and
                            reflecting. Art school teaches this practice, not just technical skills. Students must learn that
                            artistic ideas come through sustained engagement with materials, not inspiration or ideation divorced
                            from making.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <Accordion title="Critical Contextualization Using Art Theory" badge="Stage 2">
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>The Assignment</h4>
                        <p>
                            Analyze your completed work using art historical and critical frameworks. The goal is to situate
                            your piece within larger conversations about how visual art creates meaning, references traditions,
                            or engages contemporary questions.
                        </p>
                        <p>
                            Your analysis might explore: formal strategies and their effects, relationship to art historical
                            precedents or movements, how the work engages with contemporary artistic conversations, theoretical
                            frameworks that illuminate what the work does.
                        </p>
                        <p>
                            Strong analysis explains how your artistic choices function, not just what they are. Ground your
                            analysis in the specific work you made.
                        </p>

                        <h4>AI Permissions: Co-Intelligence Partner</h4>
                        <p><strong>AI may be used to:</strong></p>
                        <ul>
                            <li>Explore art historical context and identify relevant precedents</li>
                            <li>Test whether your formal analysis actually explains how the work functions</li>
                            <li>Surface theoretical frameworks that might illuminate aspects of your work</li>
                            <li>Find contemporary artists working with similar strategies or concerns</li>
                            <li>Refine the precision of your critical language</li>
                        </ul>

                        <p><strong>Unproductive AI uses</strong> (do not do these):</p>
                        <ul>
                            <li>Asking AI to analyze your artwork from an image</li>
                            <li>Having AI select which theoretical frameworks apply</li>
                            <li>Using AI to generate interpretations without your own close looking</li>
                            <li>Asking AI to explain your artistic intent (you made it—you know your intent)</li>
                        </ul>

                        <p><strong>Deliverable:</strong> 3-4 pages of critical analysis connecting your artwork to art
                        historical context and theoretical frameworks, grounded in specific formal analysis of what you made</p>
                    </div>

                    <PedagogyPanel>
                        <h4>Why allow AI as co-intelligence here?</h4>
                        <p>
                            Students have now created original work through studio practice. AI can help them research art
                            historical context, explore theoretical frameworks, and refine their critical language—supporting
                            the intellectual work of contextualizing their practice without replacing the artistic judgment that
                            comes from making the work themselves.
                        </p>

                        <h4>What's the boundary?</h4>
                        <p>
                            Students must form their own analysis through close observation of their work before engaging AI.
                            They can't upload an image and ask "analyze this artwork." That bypasses the critical looking.
                            Instead, students develop an interpretation based on what they made and why, then use AI to deepen
                            context.
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            Artists must be able to contextualize their practice—understanding how their work relates to art
                            history and contemporary discourse. Gallery talks, artist statements, and grant applications all
                            require this ability. Learning to research context and articulate formal strategies is essential
                            professional skill.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <Accordion title="Artist Statement and Public Communication" badge="Stage 3">
                <div className="accordion-panels">
                    <div className="accordion-panel panel-student">
                        <h4>The Assignment</h4>
                        <p>
                            Write an artist statement communicating your work to public audiences—gallery visitors, grant
                            reviewers, or exhibition organizers who need to understand your practice and intent.
                        </p>
                        <p>
                            Strong artist statements: explain your artistic concerns and conceptual interests, describe your
                            process and approach to materials, contextualize the work without over-explaining it, use clear
                            language accessible to educated non-specialists, avoid clichés and vague claims.
                        </p>
                        <p>
                            Artist statements are a distinct genre with specific conventions. They're not academic analysis
                            (Stage 2) but professional communication that helps audiences engage with your work thoughtfully.
                        </p>

                        <h4>AI Permissions: Communication Tool</h4>
                        <p><strong>AI may be used to:</strong></p>
                        <ul>
                            <li>Refine clarity and concision (artist statements should be 250-350 words)</li>
                            <li>Test whether your statement is accessible to non-specialist readers</li>
                            <li>Identify jargon or unclear phrasing</li>
                            <li>Explore different ways to articulate the same ideas</li>
                            <li>Generate multiple phrasings of key concepts for you to choose among</li>
                        </ul>

                        <p>
                            The core content—your artistic intent, your process, your concerns—must be your own. AI helps with
                            expression and clarity, not with determining what you have to say about your work.
                        </p>

                        <p><strong>Deliverable:</strong> Artist statement (250-350 words) suitable for exhibition or portfolio
                        submission</p>
                    </div>

                    <PedagogyPanel>
                        <h4>Why allow AI as communication tool here?</h4>
                        <p>
                            Artist statements are professional documents where clarity and concision matter. Many artists struggle
                            with this genre—visual thinkers articulating in words, balancing accessibility with intellectual
                            substance. AI can help refine language and test clarity without replacing the core content, which
                            comes from the student's studio practice and critical analysis.
                        </p>

                        <h4>Why this is different from Stage 1</h4>
                        <p>
                            Stage 1 protected the making—the embodied, material thinking that can't be outsourced. Stage 3 is
                            about professional communication, where the thinking is done and AI serves as an editing partner. The
                            artwork exists. The analysis is complete. Now AI helps communicate that work effectively to audiences.
                        </p>

                        <h4>Disciplinary connection</h4>
                        <p>
                            Professional artists must write statements for exhibitions, grants, residency applications, and
                            portfolio reviews. Learning to articulate practice clearly is essential, and many successful artists
                            work with editors or writing consultants. AI functions similarly—as a communication partner, not an
                            artistic collaborator.
                        </p>
                    </PedagogyPanel>
                </div>
            </Accordion>

            <div className="full-assignment-button">
                <button className="secondary">View Full Student-Facing Assignment</button>
            </div>
        </div>
    );
}

// ============================================================================
// CASE STUDIES SECTION (with tabs)
// ============================================================================

function CaseStudies() {
    const [activeTab, setActiveTab] = useState('business');

    return (
        <section id="examples">
            <div className="container-wide">
                <h2>See the Framework in Action</h2>
                <p>
                    Explore how faculty across disciplines apply staged AI boundaries to maintain rigor while
                    embracing generative tools.
                </p>

                <div className="tabs">
                    <button
                        className={'tab ' + (activeTab === 'business' ? 'active' : '')}
                        onClick={() => setActiveTab('business')}
                    >
                        Business
                    </button>
                    <button
                        className={'tab ' + (activeTab === 'literature' ? 'active' : '')}
                        onClick={() => setActiveTab('literature')}
                    >
                        Literature
                    </button>
                    <button
                        className={'tab ' + (activeTab === 'environmental' ? 'active' : '')}
                        onClick={() => setActiveTab('environmental')}
                    >
                        Environmental Science
                    </button>
                    <button
                        className={'tab ' + (activeTab === 'art' ? 'active' : '')}
                        onClick={() => setActiveTab('art')}
                    >
                        Studio Art
                    </button>
                </div>

                {activeTab === 'business' && <BusinessCaseStudy />}
                {activeTab === 'literature' && <LiteratureCaseStudy />}
                {activeTab === 'environmental' && <EnvironmentalScienceCaseStudy />}
                {activeTab === 'art' && <StudioArtCaseStudy />}
            </div>
        </section>
    );
}

// ============================================================================
// RESOURCE LIBRARY SECTION
// ============================================================================

function ResourceLibrary() {
    const [expanded, setExpanded] = useState(null);

    const resources = [
        {
            id: 'talking',
            icon: '💬',
            title: 'Talking to Students About AI Boundaries',
            preview: 'Sample syllabus language, first-day framing, and responses to common student questions about AI rules.',
            content: 'Resource content will be added by user.'
        },
        {
            id: 'workarounds',
            icon: '🔍',
            title: 'Common Student Workarounds',
            preview: 'What faculty have seen students try to bypass AI constraints, and how to redirect productively.',
            content: 'Resource content will be added by user.'
        },
        {
            id: 'adapting',
            icon: '🎯',
            title: 'Adapting to Different Assignment Types',
            preview: 'Quick guides for applying staged AI boundaries to labs, problem sets, presentations, and creative projects.',
            content: 'Resource content will be added by user.'
        },
        {
            id: 'assessment',
            icon: '✓',
            title: 'Assessment Rubrics for AI Co-Intelligence',
            preview: 'How to evaluate whether students used AI productively versus unproductively in analytical work.',
            content: 'Resource content will be added by user.'
        }
    ];

    return (
        <section id="resources">
            <div className="container">
                <h2>Teaching Resources</h2>
                <p>Practical guides for implementing staged AI assignments</p>

                <div className="resource-grid">
                    {resources.map(resource => (
                        <div key={resource.id} className="resource-card" onClick={() => setExpanded(expanded === resource.id ? null : resource.id)}>
                            <span className="resource-icon">{resource.icon}</span>
                            <h3>{resource.title}</h3>
                            <p className="resource-preview">{resource.preview}</p>
                            <button className="secondary">
                                {expanded === resource.id ? 'Close' : 'Read More'}
                            </button>
                            <div className={'resource-content ' + (expanded === resource.id ? 'visible' : '')}>
                                <p>{resource.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================================================
// FOOTER
// ============================================================================

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-text">
                        © 2025 Washington and Le University Teaching and Learning Center
                    </div>
                    <div className="footer-links">
                        <a href="#about">About This Project</a>
                        <a href="#privacy">Privacy</a>
                        <a href="#accessibility">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <ThreeStagePattern />
            <CaseStudies />
            <ResourceLibrary />
            <Footer />
        </div>
    );
}

// ============================================================================
// RENDER APP
// ============================================================================

ReactDOM.render(<App />, document.getElementById('root'));
