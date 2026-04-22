---
name: dogfood-social-game
description: Systematically evaluate a social game's fun factor, mechanics, UI/UX, and engagement potential through code inspection and critical feedback.
---

# Dogfooding Social Games: Critical Evaluation Skill

## Goal
Provide brutally honest feedback on game fun factor, polish, and replayability by examining mechanics, visuals, and social context.

## Process

### 1. **Understand the Core Mechanic**
- [ ] Read main game loop files (hooks, state management)
- [ ] Identify win conditions and scoring
- [ ] Map game states (start → playing → win/end)
- [ ] Note: Is the core loop addictive or tedious?

### 2. **Inspect UI/UX & Visual Polish**
- [ ] Review component structure (how feedback is shown)
- [ ] Check for animations, sound, haptics (celebration moments)
- [ ] Evaluate color scheme, typography, spacing
- [ ] Look for: Is progression visible? Do wins feel satisfying?

### 3. **Analyze Social Context**
- [ ] Understand intended use case (e.g., networking, party, casual play)
- [ ] Check: Does it work solo? Does it require other people?
- [ ] Question pool quality: Are prompts conversation starters or generic?
- [ ] Note: Does the app guide social interaction or leave it to chance?

### 4. **Test Replayability**
- [ ] How many unique games can be generated?
- [ ] Is there progression, achievements, or leaderboards?
- [ ] Can users customize content (questions, themes)?
- [ ] Note: Hooks for long-term engagement?

### 5. **Score on Key Dimensions**
Rate each 1-10:
- **Engagement**: Core loop addictiveness, pacing, feedback
- **Social Value**: Utility for intended context, conversation facilitation
- **Polish**: Animations, sounds, visual hierarchy, micro-interactions
- **Replayability**: Content variety, progression systems, customization
- **Overall Fun**: Synthesis of above

### 6. **Categorize Findings**
Document as:
- **What Works** (the wins keeping players engaged)
- **Pain Points** (what kills the fun)
- **Low-Hanging Fruit** (quick wins to boost score)
- **Strategic Improvements** (major features for depth)

### 7. **Generate Recommendations**
Prioritize by:
1. **Impact**: How much will this improve fun?
2. **Effort**: How long to implement?
3. **Context**: Is this for solo or social play?

## Quality Checklist
- [ ] Examined actual code, not just assumptions
- [ ] Tested core mechanic mentally or in-browser
- [ ] Considered intended use case, not generic gaming
- [ ] Scored fairly but critically (no padding scores)
- [ ] Provided specific, actionable recommendations
- [ ] Noted what makes this unique vs. generic game templates
