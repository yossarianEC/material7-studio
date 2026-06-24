# Commercial Shotlist System

## Parent system

Commercial Shotlists is a Vector product.

It belongs to the Vector Campaign Systems product line.

Vector is the parent ecosystem. Commercial Shotlists is not the parent system.

## Purpose

The Commercial Shotlist System creates structured commercial recording guides for clients and internal production.

It should help Material 7 produce:

- commercial copy matrices
- recording guides
- client-facing shotlists
- internal production notes
- campaign-ready speaking blocks

## Core source/output rule

Final generated HTML is output, not source of truth.

Source of truth lives in:

- `data/vector/products/commercial-shotlists/`
- `templates/vector/products/commercial-shotlists/`
- `assets/vector/products/commercial-shotlists/`
- `scripts/vector/products/commercial-shotlists/`
- `docs/vector/products/commercial-shotlists/`

Generated output lives in:

- `output/vector/products/commercial-shotlists/`

Generated output should not be manually edited unless it is an emergency.

## Commercial matrix doctrine

A practical commercial variation is:

one apertura
+
one beneficio
+
one CTA
=
one commercial variation

A shotlist may store several aperturas, beneficios, and CTAs, but the useful production unit is one selected combination.

## Required shotlist sections

Each commercial shotlist should support:

- metadata
- recording instructions
- aperturas
- beneficios
- CTAs
- optional visual notes
- optional audio notes
- optional internal production notes
- optional client-facing notes

## Naming convention

Use lowercase kebab-case.

Preferred file naming format:

`client-campaign-topic-yyyy-mm-dd`

Example:

`detail-sport-ppf-interior-2026-06-23`

Avoid long filename monsters.

## Build order

1. Product spec
2. Data schema
3. First structured data file
4. HTML template
5. Manual renderer
6. Generated HTML output
7. QA checklist
8. Automation only after the manual pipeline works
