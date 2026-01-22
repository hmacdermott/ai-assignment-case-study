// ============================================================================
// ASSIGNMENT DESIGNER WIZARD COMPONENT
// ============================================================================

function AssignmentDesigner() {
    const [currentStep, setCurrentStep] = useState(1);
    const [showOutput, setShowOutput] = useState(false);
    const [outputFormat, setOutputFormat] = useState('plaintext');
    const outputRef = useRef(null);

    // Form state
    const [formData, setFormData] = useState({
        discipline: '',
        question: '',
        deliverable: '',
        duration: '',

        stage1Description: '',
        stage1Prohibitions: '',
        stage1Why: '',
        stage1Deliverable: '',

        stage2Frameworks: '',
        stage2Argument: '',
        stage2ProductiveUses: [],
        stage2UnproductiveUses: '',
        stage2Deliverable: '',

        stage3Type: '',
        stage3Description: '',
        stage3AIRole: '',
        stage3Deliverable: '',

        includeAppendix: 'yes',
        appendixPrompt: 'At the end of your document, include 2-3 sentences addressing: Where did AI add value beyond what you could have done on your own, and where did it fail to grasp the nuance or complexity of your work?',
        includeVisual: '',
        visualDescription: ''
    });

    const updateField = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleProductiveUse = (use) => {
        setFormData(prev => ({
            ...prev,
            stage2ProductiveUses: prev.stage2ProductiveUses.includes(use)
                ? prev.stage2ProductiveUses.filter(u => u !== use)
                : [...prev.stage2ProductiveUses, use]
        }));
    };

    const validateStep = (step) => {
        switch (step) {
            case 1:
                return formData.discipline && formData.question && formData.deliverable && formData.duration;
            case 2:
                return formData.stage1Description && formData.stage1Prohibitions && formData.stage1Why && formData.stage1Deliverable;
            case 3:
                return formData.stage2Frameworks && formData.stage2Argument && formData.stage2ProductiveUses.length > 0 && formData.stage2UnproductiveUses && formData.stage2Deliverable;
            case 4:
                return formData.stage3Type && formData.stage3Description && formData.stage3AIRole && formData.stage3Deliverable;
            case 5:
                return true; // Optional fields
            default:
                return false;
        }
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 5));
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleGenerate = () => {
        setShowOutput(true);
        setTimeout(() => {
            outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    // Output generation functions
    const generatePlainText = () => {
        let output = `STAGED AI ASSIGNMENT\n${'='.repeat(60)}\n\n`;
        output += `Discipline: ${formData.discipline}\n`;
        output += `Duration: ${formData.duration}\n`;
        output += `Central Question: ${formData.question}\n`;
        output += `Final Deliverable: ${formData.deliverable}\n\n`;
        output += `${'='.repeat(60)}\n\n`;

        output += `STAGE 1: PRIMARY EXPERIENCE (No AI)\n${'-'.repeat(60)}\n\n`;
        output += `What Students Do:\n${formData.stage1Description}\n\n`;
        output += `AI Prohibitions:\n${formData.stage1Prohibitions}\n\n`;
        output += `Why No AI:\n${formData.stage1Why}\n\n`;
        output += `Deliverable: ${formData.stage1Deliverable}\n\n`;

        output += `${'='.repeat(60)}\n\n`;
        output += `STAGE 2: CONCEPTUAL INTERPRETATION (AI as Co-Intelligence)\n${'-'.repeat(60)}\n\n`;
        output += `Conceptual Frameworks:\n${formData.stage2Frameworks}\n\n`;
        output += `Argument Type:\n${formData.stage2Argument}\n\n`;
        output += `Productive AI Uses:\n`;
        formData.stage2ProductiveUses.forEach(use => {
            output += `  - ${use}\n`;
        });
        output += `\nUnproductive AI Uses (DO NOT do these):\n${formData.stage2UnproductiveUses}\n\n`;
        output += `Deliverable: ${formData.stage2Deliverable}\n\n`;

        output += `${'='.repeat(60)}\n\n`;
        output += `STAGE 3: APPLICATION & EXTENSION\n${'-'.repeat(60)}\n\n`;
        output += `Type: ${formData.stage3Type}\n\n`;
        output += `Description:\n${formData.stage3Description}\n\n`;
        output += `AI Role: ${formData.stage3AIRole}\n\n`;
        output += `Deliverable: ${formData.stage3Deliverable}\n\n`;

        if (formData.includeAppendix === 'yes') {
            output += `${'='.repeat(60)}\n\n`;
            output += `CO-INTELLIGENCE APPENDIX (Required)\n${'-'.repeat(60)}\n\n`;
            output += `${formData.appendixPrompt}\n\n`;
        }

        if (formData.includeVisual && formData.visualDescription) {
            output += `${'='.repeat(60)}\n\n`;
            output += `VISUAL SYNTHESIS\n${'-'.repeat(60)}\n\n`;
            output += `${formData.visualDescription}\n\n`;
        }

        return output;
    };

    const generateMarkdown = () => {
        let output = `# Staged AI Assignment\n\n`;
        output += `**Discipline:** ${formData.discipline}  \n`;
        output += `**Duration:** ${formData.duration}  \n`;
        output += `**Central Question:** ${formData.question}  \n`;
        output += `**Final Deliverable:** ${formData.deliverable}\n\n`;
        output += `---\n\n`;

        output += `## Stage 1: Primary Experience 🚫 No AI\n\n`;
        output += `### What Students Do\n\n${formData.stage1Description}\n\n`;
        output += `### AI Prohibitions\n\n${formData.stage1Prohibitions}\n\n`;
        output += `### Why No AI\n\n${formData.stage1Why}\n\n`;
        output += `**Deliverable:** ${formData.stage1Deliverable}\n\n`;
        output += `---\n\n`;

        output += `## Stage 2: Conceptual Interpretation 🤝 AI as Co-Intelligence\n\n`;
        output += `### Conceptual Frameworks\n\n${formData.stage2Frameworks}\n\n`;
        output += `### Argument Type\n\n${formData.stage2Argument}\n\n`;
        output += `### Productive AI Uses\n\n`;
        formData.stage2ProductiveUses.forEach(use => {
            output += `- ${use}\n`;
        });
        output += `\n### Unproductive AI Uses (DO NOT do these)\n\n${formData.stage2UnproductiveUses}\n\n`;
        output += `**Deliverable:** ${formData.stage2Deliverable}\n\n`;
        output += `---\n\n`;

        output += `## Stage 3: Application & Extension\n\n`;
        output += `**Type:** ${formData.stage3Type}\n\n`;
        output += `### Description\n\n${formData.stage3Description}\n\n`;
        output += `### AI Role\n\n${formData.stage3AIRole}\n\n`;
        output += `**Deliverable:** ${formData.stage3Deliverable}\n\n`;

        if (formData.includeAppendix === 'yes') {
            output += `---\n\n`;
            output += `## Co-Intelligence Appendix (Required)\n\n`;
            output += `${formData.appendixPrompt}\n\n`;
        }

        if (formData.includeVisual && formData.visualDescription) {
            output += `---\n\n`;
            output += `## Visual Synthesis\n\n`;
            output += `${formData.visualDescription}\n\n`;
        }

        return output;
    };

    const generateHTML = () => {
        let output = `<!DOCTYPE html>\n<html lang="en">\n<head>\n`;
        output += `    <meta charset="UTF-8">\n`;
        output += `    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
        output += `    <title>Staged AI Assignment</title>\n`;
        output += `    <style>\n`;
        output += `        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; max-width: 900px; margin: 2rem auto; padding: 0 2rem; color: #1F2937; }\n`;
        output += `        h1 { color: #003366; border-bottom: 3px solid #003366; padding-bottom: 0.5rem; }\n`;
        output += `        h2 { color: #003366; margin-top: 2rem; border-bottom: 1px solid #E5E7EB; padding-bottom: 0.5rem; }\n`;
        output += `        h3 { color: #003366; margin-top: 1.5rem; }\n`;
        output += `        .meta { background: #F3F4F6; padding: 1rem; margin-bottom: 2rem; border-left: 4px solid #003366; }\n`;
        output += `        .meta p { margin: 0.5rem 0; }\n`;
        output += `        .stage { margin-bottom: 3rem; padding: 1.5rem; background: #FAFAFA; border-left: 4px solid #003366; }\n`;
        output += `        .badge { display: inline-block; background: #003366; color: white; padding: 0.25rem 0.75rem; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem; }\n`;
        output += `        ul { margin-left: 1.5rem; }\n`;
        output += `        li { margin-bottom: 0.5rem; }\n`;
        output += `        hr { border: none; border-top: 2px solid #E5E7EB; margin: 2rem 0; }\n`;
        output += `        strong { color: #003366; }\n`;
        output += `    </style>\n</head>\n<body>\n`;

        output += `    <h1>Staged AI Assignment</h1>\n\n`;
        output += `    <div class="meta">\n`;
        output += `        <p><strong>Discipline:</strong> ${formData.discipline}</p>\n`;
        output += `        <p><strong>Duration:</strong> ${formData.duration}</p>\n`;
        output += `        <p><strong>Central Question:</strong> ${formData.question}</p>\n`;
        output += `        <p><strong>Final Deliverable:</strong> ${formData.deliverable}</p>\n`;
        output += `    </div>\n\n`;

        output += `    <div class="stage">\n`;
        output += `        <span class="badge">🚫 Stage 1: No AI</span>\n`;
        output += `        <h2>Primary Experience</h2>\n\n`;
        output += `        <h3>What Students Do</h3>\n`;
        output += `        <p>${formData.stage1Description.replace(/\n/g, '</p><p>')}</p>\n\n`;
        output += `        <h3>AI Prohibitions</h3>\n`;
        output += `        <p>${formData.stage1Prohibitions.replace(/\n/g, '</p><p>')}</p>\n\n`;
        output += `        <h3>Why No AI</h3>\n`;
        output += `        <p>${formData.stage1Why.replace(/\n/g, '</p><p>')}</p>\n\n`;
        output += `        <p><strong>Deliverable:</strong> ${formData.stage1Deliverable}</p>\n`;
        output += `    </div>\n\n`;

        output += `    <div class="stage">\n`;
        output += `        <span class="badge">🤝 Stage 2: AI as Co-Intelligence</span>\n`;
        output += `        <h2>Conceptual Interpretation</h2>\n\n`;
        output += `        <h3>Conceptual Frameworks</h3>\n`;
        output += `        <p>${formData.stage2Frameworks.replace(/\n/g, '</p><p>')}</p>\n\n`;
        output += `        <h3>Argument Type</h3>\n`;
        output += `        <p>${formData.stage2Argument.replace(/\n/g, '</p><p>')}</p>\n\n`;
        output += `        <h3>Productive AI Uses</h3>\n        <ul>\n`;
        formData.stage2ProductiveUses.forEach(use => {
            output += `            <li>${use}</li>\n`;
        });
        output += `        </ul>\n\n`;
        output += `        <h3>Unproductive AI Uses (DO NOT do these)</h3>\n`;
        output += `        <p>${formData.stage2UnproductiveUses.replace(/\n/g, '</p><p>')}</p>\n\n`;
        output += `        <p><strong>Deliverable:</strong> ${formData.stage2Deliverable}</p>\n`;
        output += `    </div>\n\n`;

        output += `    <div class="stage">\n`;
        output += `        <span class="badge">🛠️ Stage 3</span>\n`;
        output += `        <h2>Application & Extension</h2>\n\n`;
        output += `        <p><strong>Type:</strong> ${formData.stage3Type}</p>\n\n`;
        output += `        <h3>Description</h3>\n`;
        output += `        <p>${formData.stage3Description.replace(/\n/g, '</p><p>')}</p>\n\n`;
        output += `        <h3>AI Role</h3>\n`;
        output += `        <p>${formData.stage3AIRole.replace(/\n/g, '</p><p>')}</p>\n\n`;
        output += `        <p><strong>Deliverable:</strong> ${formData.stage3Deliverable}</p>\n`;
        output += `    </div>\n\n`;

        if (formData.includeAppendix === 'yes') {
            output += `    <hr>\n\n`;
            output += `    <h2>Co-Intelligence Appendix (Required)</h2>\n`;
            output += `    <p>${formData.appendixPrompt}</p>\n\n`;
        }

        if (formData.includeVisual && formData.visualDescription) {
            output += `    <hr>\n\n`;
            output += `    <h2>Visual Synthesis</h2>\n`;
            output += `    <p>${formData.visualDescription.replace(/\n/g, '</p><p>')}</p>\n\n`;
        }

        output += `</body>\n</html>`;
        return output;
    };

    const getOutput = () => {
        switch (outputFormat) {
            case 'markdown':
                return generateMarkdown();
            case 'html':
                return generateHTML();
            default:
                return generatePlainText();
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(getOutput());
        alert('Copied to clipboard!');
    };

    const handleDownload = () => {
        const output = getOutput();
        const extensions = { plaintext: 'txt', markdown: 'md', html: 'html' };
        const extension = extensions[outputFormat];
        const filename = `staged-ai-assignment.${extension}`;

        const blob = new Blob([output], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    };

    const productiveUseOptions = [
        'Stress-testing interpretations by proposing alternative explanations',
        'Surfacing contextual information or knowledge gaps',
        'Checking logical consistency of arguments',
        'Refining clarity of claims',
        'Finding relevant research or precedents',
        'Identifying factors or variables underweighted'
    ];

    return (
        <section id="designer">
            <div className="container">
                <h2>Build Your Staged Assignment</h2>
                <p>
                    Create your own staged assignment with clearly defined AI permissions for each phase.
                    Define your assignment structure and generate student-facing instructions in your preferred format.
                </p>

                {/* Progress Indicator */}
                <div className="progress-indicator">
                    {[1, 2, 3, 4, 5].map(step => (
                        <div key={step} className={'progress-step ' + (step === currentStep ? 'active' : step < currentStep ? 'completed' : '')}>
                            <div className="progress-number">{step}</div>
                            <div className="progress-label">
                                {step === 1 && 'Foundation'}
                                {step === 2 && 'Stage 1'}
                                {step === 3 && 'Stage 2'}
                                {step === 4 && 'Stage 3'}
                                {step === 5 && 'Review'}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="form-section">
                    {currentStep === 1 && (
                        <div>
                            <div className="form-intro">
                                <h3>Step 1: Assignment Foundation</h3>
                                <p>Let's start with the essential context for your assignment.</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="discipline">What discipline or course is this for? *</label>
                                <input
                                    id="discipline"
                                    type="text"
                                    value={formData.discipline}
                                    onChange={(e) => updateField('discipline', e.target.value)}
                                    placeholder="e.g., Biology 201: Ecology, English 150: Composition"
                                />
                                <div className="help-text">Include both the discipline and course level</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="question">What's the central question, problem, or creative challenge? *</label>
                                <textarea
                                    id="question"
                                    value={formData.question}
                                    onChange={(e) => updateField('question', e.target.value)}
                                    placeholder="e.g., How do invasive species affect local ecosystems?"
                                />
                                <div className="help-text">Capture the core intellectual or creative work of the assignment</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="deliverable">What's the primary thing students will create? *</label>
                                <input
                                    id="deliverable"
                                    type="text"
                                    value={formData.deliverable}
                                    onChange={(e) => updateField('deliverable', e.target.value)}
                                    placeholder="e.g., Research paper, case study, creative work"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="duration">How many weeks do students have? *</label>
                                <select
                                    id="duration"
                                    value={formData.duration}
                                    onChange={(e) => updateField('duration', e.target.value)}
                                >
                                    <option value="">Select duration...</option>
                                    <option value="1 week">1 week</option>
                                    <option value="2 weeks">2 weeks</option>
                                    <option value="3-4 weeks">3-4 weeks</option>
                                    <option value="5-6 weeks">5-6 weeks</option>
                                    <option value="Full semester">Full semester</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div>
                            <div className="form-intro">
                                <h3>Step 2: Stage 1 - Primary Experience</h3>
                                <p>Define the authentic primary engagement that cannot use AI.</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="stage1Description">What will students do in Stage 1? *</label>
                                <textarea
                                    id="stage1Description"
                                    value={formData.stage1Description}
                                    onChange={(e) => updateField('stage1Description', e.target.value)}
                                    placeholder="e.g., Students will conduct 4-6 observation sessions at a local ecosystem site..."
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="stage1Prohibitions">What must come from the student's own experience? *</label>
                                <textarea
                                    id="stage1Prohibitions"
                                    value={formData.stage1Prohibitions}
                                    onChange={(e) => updateField('stage1Prohibitions', e.target.value)}
                                    placeholder="e.g., All field observations must be directly witnessed. AI cannot reconstruct missing data..."
                                />
                                <div className="help-text">Be specific about what AI might tempt students to do</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="stage1Why">Why is it important students can't use AI here? *</label>
                                <textarea
                                    id="stage1Why"
                                    value={formData.stage1Why}
                                    onChange={(e) => updateField('stage1Why', e.target.value)}
                                    placeholder="e.g., Authentic observation skills require distinguishing between what you saw versus what you assume..."
                                />
                                <div className="help-text">This becomes the pedagogical reasoning</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="stage1Deliverable">What will students deliver for Stage 1? *</label>
                                <input
                                    id="stage1Deliverable"
                                    type="text"
                                    value={formData.stage1Deliverable}
                                    onChange={(e) => updateField('stage1Deliverable', e.target.value)}
                                    placeholder="e.g., Field journal with dated entries and photos (3-4 pages)"
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div>
                            <div className="form-intro">
                                <h3>Step 3: Stage 2 - Conceptual Framework</h3>
                                <p>Define how students will interpret their primary work with AI support.</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="stage2Frameworks">What conceptual tools or frameworks will students use? *</label>
                                <textarea
                                    id="stage2Frameworks"
                                    value={formData.stage2Frameworks}
                                    onChange={(e) => updateField('stage2Frameworks', e.target.value)}
                                    placeholder="e.g., Students will apply ecological concepts like succession, trophic cascades..."
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="stage2Argument">What kind of argument or interpretation are students building? *</label>
                                <textarea
                                    id="stage2Argument"
                                    value={formData.stage2Argument}
                                    onChange={(e) => updateField('stage2Argument', e.target.value)}
                                    placeholder="e.g., Students must explain WHY the ecosystem behaves as it does..."
                                />
                            </div>

                            <div className="form-group">
                                <label>How can AI help students strengthen their analysis? *</label>
                                <div className="checkbox-group">
                                    {productiveUseOptions.map((use, index) => (
                                        <div key={index} className="checkbox-item">
                                            <input
                                                type="checkbox"
                                                id={`use-${index}`}
                                                checked={formData.stage2ProductiveUses.includes(use)}
                                                onChange={() => toggleProductiveUse(use)}
                                            />
                                            <label htmlFor={`use-${index}`}>{use}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="stage2UnproductiveUses">What should students NOT use AI for? *</label>
                                <textarea
                                    id="stage2UnproductiveUses"
                                    value={formData.stage2UnproductiveUses}
                                    onChange={(e) => updateField('stage2UnproductiveUses', e.target.value)}
                                    placeholder="e.g., Generating the analysis from their Stage 1 work, selecting which concepts apply..."
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="stage2Deliverable">What will students deliver for Stage 2? *</label>
                                <input
                                    id="stage2Deliverable"
                                    type="text"
                                    value={formData.stage2Deliverable}
                                    onChange={(e) => updateField('stage2Deliverable', e.target.value)}
                                    placeholder="e.g., 3-4 pages of analytical writing"
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div>
                            <div className="form-intro">
                                <h3>Step 4: Stage 3 - Application or Extension</h3>
                                <p>Define how students will apply or extend their insights.</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="stage3Type">What type of application or extension? *</label>
                                <select
                                    id="stage3Type"
                                    value={formData.stage3Type}
                                    onChange={(e) => updateField('stage3Type', e.target.value)}
                                >
                                    <option value="">Select type...</option>
                                    <option value="Future recommendations or design proposals">Future recommendations or design proposals</option>
                                    <option value="Contemporary connections or cultural relevance">Contemporary connections or cultural relevance</option>
                                    <option value="Teaching implications or public communication">Teaching implications or public communication</option>
                                    <option value="Creative extension or iteration">Creative extension or iteration</option>
                                    <option value="Implementation plan or prototype">Implementation plan or prototype</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="stage3Description">Describe what students will do in Stage 3 *</label>
                                <textarea
                                    id="stage3Description"
                                    value={formData.stage3Description}
                                    onChange={(e) => updateField('stage3Description', e.target.value)}
                                    placeholder="e.g., Students propose evidence-based interventions for enhancing ecosystem health..."
                                />
                            </div>

                            <div className="form-group">
                                <label>How will AI function in this stage? *</label>
                                <div className="radio-group">
                                    <div className="radio-item">
                                        <input
                                            type="radio"
                                            id="ai-cointel"
                                            name="aiRole"
                                            value="AI remains as co-intelligence"
                                            checked={formData.stage3AIRole === 'AI remains as co-intelligence'}
                                            onChange={(e) => updateField('stage3AIRole', e.target.value)}
                                        />
                                        <label htmlFor="ai-cointel">AI remains as co-intelligence (helping refine thinking)</label>
                                    </div>
                                    <div className="radio-item">
                                        <input
                                            type="radio"
                                            id="ai-tool"
                                            name="aiRole"
                                            value="AI becomes a required tool"
                                            checked={formData.stage3AIRole === 'AI becomes a required tool'}
                                            onChange={(e) => updateField('stage3AIRole', e.target.value)}
                                        />
                                        <label htmlFor="ai-tool">AI becomes a required tool (for visualization, design, or communication)</label>
                                    </div>
                                    <div className="radio-item">
                                        <input
                                            type="radio"
                                            id="ai-choice"
                                            name="aiRole"
                                            value="Students choose whether to use AI"
                                            checked={formData.stage3AIRole === 'Students choose whether to use AI'}
                                            onChange={(e) => updateField('stage3AIRole', e.target.value)}
                                        />
                                        <label htmlFor="ai-choice">Students choose whether to use AI</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="stage3Deliverable">What will students deliver for Stage 3? *</label>
                                <input
                                    id="stage3Deliverable"
                                    type="text"
                                    value={formData.stage3Deliverable}
                                    onChange={(e) => updateField('stage3Deliverable', e.target.value)}
                                    placeholder="e.g., 1-2 pages of management recommendations"
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div>
                            <div className="form-intro">
                                <h3>Step 5: Metacognitive Component & Visual Synthesis</h3>
                                <p>Optional elements to help students reflect on AI use and communicate their work.</p>
                            </div>

                            <div className="form-group">
                                <label>Will you include a Co-Intelligence Appendix?</label>
                                <div className="radio-group">
                                    <div className="radio-item">
                                        <input
                                            type="radio"
                                            id="appendix-yes"
                                            name="appendix"
                                            value="yes"
                                            checked={formData.includeAppendix === 'yes'}
                                            onChange={(e) => updateField('includeAppendix', e.target.value)}
                                        />
                                        <label htmlFor="appendix-yes">Yes, required (recommended)</label>
                                    </div>
                                    <div className="radio-item">
                                        <input
                                            type="radio"
                                            id="appendix-optional"
                                            name="appendix"
                                            value="optional"
                                            checked={formData.includeAppendix === 'optional'}
                                            onChange={(e) => updateField('includeAppendix', e.target.value)}
                                        />
                                        <label htmlFor="appendix-optional">Yes, optional</label>
                                    </div>
                                    <div className="radio-item">
                                        <input
                                            type="radio"
                                            id="appendix-no"
                                            name="appendix"
                                            value="no"
                                            checked={formData.includeAppendix === 'no'}
                                            onChange={(e) => updateField('includeAppendix', e.target.value)}
                                        />
                                        <label htmlFor="appendix-no">No</label>
                                    </div>
                                </div>
                            </div>

                            {formData.includeAppendix !== 'no' && (
                                <div className="form-group">
                                    <label htmlFor="appendixPrompt">Appendix prompt (you can edit this)</label>
                                    <textarea
                                        id="appendixPrompt"
                                        value={formData.appendixPrompt}
                                        onChange={(e) => updateField('appendixPrompt', e.target.value)}
                                    />
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="includeVisual">Will students create a visual synthesis?</label>
                                <select
                                    id="includeVisual"
                                    value={formData.includeVisual}
                                    onChange={(e) => updateField('includeVisual', e.target.value)}
                                >
                                    <option value="">Select...</option>
                                    <option value="yes-ai">Yes, using AI tools</option>
                                    <option value="yes-no-ai">Yes, without AI</option>
                                    <option value="no">No visual component</option>
                                </select>
                            </div>

                            {formData.includeVisual && formData.includeVisual !== 'no' && (
                                <div className="form-group">
                                    <label htmlFor="visualDescription">What should the visual communicate?</label>
                                    <textarea
                                        id="visualDescription"
                                        value={formData.visualDescription}
                                        onChange={(e) => updateField('visualDescription', e.target.value)}
                                        placeholder="e.g., An infographic showing the ecosystem's key relationships..."
                                    />
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="format">Output Format</label>
                                <select
                                    id="format"
                                    value={outputFormat}
                                    onChange={(e) => setOutputFormat(e.target.value)}
                                >
                                    <option value="plaintext">Plain Text</option>
                                    <option value="markdown">Markdown</option>
                                    <option value="html">HTML</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="form-navigation">
                        <div>
                            {currentStep > 1 && (
                                <button className="secondary" onClick={prevStep}>
                                    ← Previous
                                </button>
                            )}
                        </div>
                        <div>
                            {currentStep < 5 ? (
                                <button onClick={nextStep} disabled={!validateStep(currentStep)}>
                                    Next →
                                </button>
                            ) : (
                                <button onClick={handleGenerate}>
                                    Generate Assignment Instructions
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Output Section */}
                {showOutput && (
                    <div className="output-section" ref={outputRef}>
                        <h3>Your Generated Assignment</h3>

                        <div className="output-tabs">
                            <button
                                className={'output-tab ' + (outputFormat === 'plaintext' ? 'active' : '')}
                                onClick={() => setOutputFormat('plaintext')}
                            >
                                Plain Text
                            </button>
                            <button
                                className={'output-tab ' + (outputFormat === 'markdown' ? 'active' : '')}
                                onClick={() => setOutputFormat('markdown')}
                            >
                                Markdown
                            </button>
                            <button
                                className={'output-tab ' + (outputFormat === 'html' ? 'active' : '')}
                                onClick={() => setOutputFormat('html')}
                            >
                                HTML
                            </button>
                        </div>

                        <div className="output-content">
                            {getOutput()}
                        </div>

                        <div className="output-actions">
                            <button onClick={handleCopy}>
                                Copy to Clipboard
                            </button>
                            <button className="secondary" onClick={handleDownload}>
                                Download File
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
