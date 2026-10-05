# Query Builder

Build Thymer search queries in plain English or with colour-coded chips — and learn the query language as you go. Opens right on Search, Upcoming and every other query field.

Plugins are made with 🤍 for the Thymer community. Free to use, fork, and hack on for <a href="LICENSE" target="_blank" rel="noopener noreferrer">non-commercial use</a>.

Plug-ins take effort, hours, and credits to build. If you find them helpful for you and your workflows, a star ⭐ on the repo, a <a href="https://buymeacoffee.com/akaready" target="_blank" rel="noopener noreferrer">coffee</a> ☕, and a link back to <a href="https://akaready.com" target="_blank" rel="noopener noreferrer">@akaready</a> 🔗 all go a long way. Optional of course, but always appreciated.

Enjoy! 🙏

<p align="left">
  <a href="https://buymeacoffee.com/akaready" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="40" alt="Buy me a coffee">
  </a>
</p>


&nbsp;

## 📦 Install

**Recommended:** Use the <a href="https://github.com/ahpatel/thymer-plugins-manager" target="_blank" rel="noopener noreferrer">Thymer Plugins Manager</a> and install via <a href="https://github.com/akaready/thymer-query-builder" target="_blank" rel="noopener noreferrer">this repo's URL</a>. You'll get notifications when new versions ship.

**Manual:** copy <a href="plugin.js" target="_blank" rel="noopener noreferrer"><code>plugin.js</code></a> and <a href="plugin.json" target="_blank" rel="noopener noreferrer"><code>plugin.json</code></a> from this repo into Thymer's plugin editor.


&nbsp;

## ⌨️ Use

Click into a query field — the Search panel, the journal's **Upcoming**, any field Thymer parses as a query — and a small **Build** pill appears on it. Click it, **Tab** to it and press **Enter**, or press **⌥Q**. ⌥Q works in any text field too, and anywhere else it opens the builder on its own, with **Copy** in place of **Use**.

### Describe it

Type what you want in plain English:

- *overdue tasks in projects this weekend*
- *my notes edited since monday*
- *active projects*
- *tasks without a due date*

Each word lights up in the colour of the filter it became. Typos get corrected, and your own collection, field, tag and people names are understood. Anything left over becomes a text search.

**Did you mean?** Some sentences can mean more than one thing. In a workspace with a Tasks collection, *tasks for active projects* could mean:

- task lines written inside active projects,
- records in your Tasks collection whose **Project** is an active project, or
- the active projects themselves.

The builder lists each reading with its match count, best first, and you click the one you meant. For the "linked" reading, it looks up the matching projects and writes the query for you. If its first guess finds nothing but another reading does, it switches on its own.

### Or build it

Click **+** for every filter, grouped **Tasks · Content · Where · When · People**, with a match count beside each option. Picking a field takes two steps: first the field, then one of its values. Amounts like *edited in the last 7 days* have a stepper, and **Shift** steps by 10.

Each filter becomes a chip. Click a chip to change it, use **×** to remove it, and click its icon to flip between **Show** and **Hide** (Hide adds `NOT`). Suggestions under the chips follow what you've built. Pick a task filter and you're offered more task filters; pick a collection and you're offered its fields.

### Read it

The query sits at the bottom, colour-matched to the chips and fully editable. Above it, one plain sentence says what it finds. Hover a chip and its part of the query lights up.

### Use it — ⌘↵

**⌘↵** (Ctrl+Enter) writes the query into the field you came from. **Copy** puts it on the clipboard.

### Matches and Guide

The drawer behind the builder has two tabs:

- **Matches** lists what the query finds right now. Click an item to open it.
- **Guide** walks through the syntax in the same order as the **+** menu and ends with examples you can load in one click. Loading an example over your own query can be undone (**⌘Z**).

### Size

The builder opens at the width of the field you came from. To resize the builder or the drawer, drag its right edge; double-click the edge to reset it. Your widths are remembered per workspace. On a narrow window the builder and drawer shrink so both still fit.

Settings: command palette → **Plugin: Query Builder**. The only setting is the shortcut.


&nbsp;

## 🔒 Fully local

The builder needs no API key and makes no network calls. Parsing is done by the plugin, and counts and matches come from Thymer's own search on your device.


&nbsp;

## 🚫 What a plugin can't do

Thymer doesn't give plugins a list of its query fields, so the plugin recognises them by their markup. If a field doesn't show the pill, **⌥Q** still opens the builder, and **Copy** gets the query into the field. Collection search boxes don't accept queries, so they deliberately get no pill.


&nbsp;

## 📊 Anonymous Usage Counter

This plugin pings a <a href="https://www.goatcounter.com/" target="_blank" rel="noopener noreferrer">privacy-respecting counter</a> on first install and once per day of active use. It exists so I can see which plugins are worth continuing to invest in — both "did anyone install it" and "is anyone still using it after a week." Combined with the coffee donations, this is what tells me whether to keep building. It tracks the plugin slug only, no other telemetry or user data, and you can see exactly what I see on the <a href="https://thymer-plugins.goatcounter.com" target="_blank" rel="noopener noreferrer">public dashboard</a>.

**Opt out:** Do Not Track, or `localStorage.setItem('tps-telemetry-opt-out','1')` in the console.
