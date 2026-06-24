# Commercial Shotlist Intake Map

## Purpose

This document defines how a future form, spreadsheet, CRM, or internal intake tool should collect information for the Commercial Shotlist System.

The goal is to turn operator/client input into valid shotlist JSON.

The intake should not create final HTML directly.

The intake should create structured data that matches the Commercial Shotlist schema.

## Pipeline

```text
intake form
→ structured answers
→ commercial shotlist JSON
→ renderer
→ generated HTML output
→ QA
→ publish/share
```

## Required intake fields

Map each intake field to the JSON field.

| Intake field           | JSON field               | Required | Notes                                                              |
| ---------------------- | ------------------------ | -------- | ------------------------------------------------------------------ |
| Shotlist ID            | `id`                     | Yes      | Lowercase kebab-case. Example: `client-campaign-topic-yyyy-mm-dd`. |
| Client name            | `client`                 | Yes      | Business or client name.                                           |
| Project name           | `project`                | Yes      | Short campaign/project title.                                      |
| Date                   | `date`                   | Yes      | Format: `YYYY-MM-DD`.                                              |
| Audience label         | `audience.label`         | Yes      | Example: `Hombres`, `General audience`, `Residentes`.              |
| Audience age range     | `audience.age_range`     | No       | Example: `25–65`.                                                  |
| Summary                | `summary`                | No       | Short description of the shotlist.                                 |
| Recording instructions | `recording_instructions` | Yes      | Default may be used if not customized.                             |

## Copy block intake fields

The intake should support at least 3 options for each copy block.

### Aperturas

| Intake field     | JSON path            | Required |
| ---------------- | -------------------- | -------- |
| Apertura 1 label | `aperturas[0].label` | No       |
| Apertura 1 text  | `aperturas[0].text`  | Yes      |
| Apertura 2 label | `aperturas[1].label` | No       |
| Apertura 2 text  | `aperturas[1].text`  | No       |
| Apertura 3 label | `aperturas[2].label` | No       |
| Apertura 3 text  | `aperturas[2].text`  | No       |

### Beneficios

| Intake field      | JSON path             | Required |
| ----------------- | --------------------- | -------- |
| Beneficio 1 label | `beneficios[0].label` | No       |
| Beneficio 1 text  | `beneficios[0].text`  | Yes      |
| Beneficio 2 label | `beneficios[1].label` | No       |
| Beneficio 2 text  | `beneficios[1].text`  | No       |
| Beneficio 3 label | `beneficios[2].label` | No       |
| Beneficio 3 text  | `beneficios[2].text`  | No       |

### CTAs

| Intake field | JSON path       | Required |
| ------------ | --------------- | -------- |
| CTA 1 label  | `ctas[0].label` | No       |
| CTA 1 text   | `ctas[0].text`  | Yes      |
| CTA 2 label  | `ctas[1].label` | No       |
| CTA 2 text   | `ctas[1].text`  | No       |
| CTA 3 label  | `ctas[2].label` | No       |
| CTA 3 text   | `ctas[2].text`  | No       |

## Optional notes fields

| Intake field   | JSON field       | Notes                                                |
| -------------- | ---------------- | ---------------------------------------------------- |
| Visual notes   | `visual_notes`   | Array of strings. Useful for filming direction.      |
| Audio notes    | `audio_notes`    | Array of strings. Useful for recording instructions. |
| Internal notes | `internal_notes` | Array of strings. Not necessarily client-facing.     |
| Client notes   | `client_notes`   | Client-facing extra notes.                           |

## Default values

If no custom recording instructions are provided, use:

```text
Hable despacio y con pausas. Deje un segundo de silencio antes y después de cada frase para facilitar los cortes en edición.
```

If a label is missing, the future builder may generate a neutral label.

Examples:

* Apertura
* Beneficio
* CTA

## ID generation rule

A future form may generate the shotlist ID using:

```text
client-name + campaign-topic + yyyy-mm-dd
```

Then normalize it:

* lowercase
* remove accents
* replace spaces with hyphens
* remove punctuation
* avoid duplicated hyphens
* trim leading/trailing hyphens

Example:

```text
Detail Sport + PPF Interior + 2026-06-23
→ detail-sport-ppf-interior-2026-06-23
```

## Form design doctrine

The intake should be fast and operator-friendly.

It should avoid asking unnecessary questions.

It should collect enough information to produce a useful first shotlist draft.

It should allow the operator to improve the copy after intake.

The form is not the strategist.

The form collects raw material.

The operator, AI assistant, or copy process improves the final copy.

## Do-not rules

* Do not let the intake generate random HTML.
* Do not store final output as the source of truth.
* Do not allow missing required fields.
* Do not publish without QA.
* Do not create long filename monsters.
* Do not mix client notes and internal notes accidentally.
* Do not expose internal notes in client-facing output unless intentionally rendered.
