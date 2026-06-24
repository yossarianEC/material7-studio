# Commercial Shotlist Authoring Guide

## Purpose

This guide explains how to create a new commercial shotlist data file.

The data file is the source of truth.

The generated HTML is output.

## Workflow

1. Copy the starter JSON file.
2. Rename it using kebab-case.
3. Fill in metadata.
4. Fill in aperturas.
5. Fill in beneficios.
6. Fill in CTAs.
7. Add optional notes if needed.
8. Run the renderer.
9. Open the generated HTML.
10. QA the output before publishing or sending.

## File naming

Use:

`client-campaign-topic-yyyy-mm-dd`

Example:

`detail-sport-ppf-interior-2026-06-23`

The JSON filename and its `id` value should match. Add `.json` only to the filename.

## Source path

New shotlist data files live here:

`data/vector/products/commercial-shotlists/`

Start by copying `_starter-commercial-shotlist.json`. Keep the starter unchanged so it remains reusable.

## Output path

Generated HTML files are written here:

`output/vector/products/commercial-shotlists/`

## Render command

From the repository root:

```bash
node scripts/vector/products/commercial-shotlists/render-commercial-shotlist.js file-id-here
```

Example:

```bash
node scripts/vector/products/commercial-shotlists/render-commercial-shotlist.js example-commercial-shotlist
```

Pass the file id without the `.json` extension.

## Copy doctrine

A usable commercial variation is:

one apertura
+
one beneficio
+
one CTA

The data file may contain multiple options for each section, but the production unit is one selected combination.

## Required fields

Every shotlist must include:

* `id` — the lowercase kebab-case identifier; it should match the filename without `.json`.
* `client` — the client or brand name shown in the generated guide.
* `project` — the campaign, service, or commercial project name.
* `date` — the shotlist date in `YYYY-MM-DD` format.
* `audience.label` — a short, useful description of the intended audience.
* `recording_instructions` — practical direction for the person recording the copy.
* `aperturas` — one or more opening copy blocks; each block needs an `id` and `text`.
* `beneficios` — one or more benefit copy blocks; each block needs an `id` and `text`.
* `ctas` — one or more call-to-action copy blocks; each block needs an `id` and `text`.

Keep copy-block ids short and sequential, such as `apertura-01`, `beneficio-01`, and `cta-01`. Labels and notes are optional within a copy block.

## Optional fields

Use these fields only when they add useful context:

* `summary` — a short overview of the campaign or shotlist.
* `visual_notes` — framing, action, wardrobe, location, or other visual guidance.
* `audio_notes` — music, sound, microphone, pacing, or pronunciation guidance.
* `internal_notes` — production information intended only for the Material 7 team.
* `client_notes` — instructions or context safe to show in the client-facing guide.

Optional note fields are arrays of strings. Leave an array empty when the section is not needed; the renderer will omit it from the generated page.

## Do-not rules

* Do not manually edit generated HTML unless it is an emergency.
* Do not place real client campaigns in example files.
* Do not use long filename monsters.
* Do not restore old legacy folders.
* Do not add fields that are not in the schema without updating the schema first.
* Do not publish output with unresolved placeholders.
