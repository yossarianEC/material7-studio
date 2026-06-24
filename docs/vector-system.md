# Vector System

## Purpose

Vector is the modular publishing and product system for Material 7 Studio.

It is designed to support reusable client-facing and internal systems such as:

* interactive business tools
* strategy diagnostics
* campaign guides
* commercial shotlists
* landing page modules
* client portals
* lightweight software demos
* reusable templates
* generated client-facing outputs

Vector should be built as a modular system, not as one-off pages.

## Core principle

Vector separates source, template, logic, and output.

Final generated files are output, not the source of truth.

Source of truth should live in:

* `data/vector/`
* `templates/vector/`
* `assets/vector/`
* `scripts/vector/`
* `docs/vector/`

Generated public/client-facing files should live in:

* `output/vector/`

## Folder roles

`data/vector/`

Stores structured content and configuration for Vector modules.

`templates/vector/`

Stores reusable layouts, HTML templates, and module templates.

`assets/vector/`

Stores reusable CSS, JavaScript, images, icons, and shared media.

`scripts/vector/`

Stores build scripts, renderers, generators, and publishing utilities.

`docs/vector/`

Stores planning notes, SOPs, doctrine, module specs, and system documentation.

`output/vector/`

Stores generated public files. These files should not be manually edited unless it is an emergency.

## Module doctrine

Each Vector module should eventually have:

* a clear purpose
* a data model
* a template
* reusable assets
* a renderer or build path
* generated output
* documentation

A module should be small enough to understand, test, and rebuild independently.

## Naming convention

Use lowercase kebab-case.

Use clear, short names.

Good examples:

```text
commercial-shotlists
business-diagnostics
nano-tools
landing-modules
client-guides
```

Avoid long filename monsters.

Avoid mixing dates into system folders unless the file is campaign-specific output.

## Build order

The correct Vector build order is:

1. Vector doctrine
2. Vector folder structure
3. First module definition
4. Data model for that module
5. Template for that module
6. Renderer/build path for that module
7. Generated output
8. Automation only after the manual pipeline works

## Do-not rules

Do not manually edit generated output unless it is an emergency.

Do not mix legacy folders into the new structure.

Do not restore the old `Vector - Shotlist system` folder.

Do not restore the old `shotlists` folder.

Do not create workflows before the manual pipeline works.

Do not create package files unless a real script needs them.

Do not create campaign output before the module structure exists.

Do not build multiple modules at once.

## Current status

The repository is in clean scaffold mode.

The next step after this document is to define the first Vector module.
