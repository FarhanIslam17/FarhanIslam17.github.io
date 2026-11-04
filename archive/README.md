# Portfolio archive

Rollback points for this portfolio site. Nothing here is deleted history: every
accepted version is preserved both as a git tag on the commit that deployed it
and, for versions that were never publicly deployed, as a source snapshot under
`archive/sources/`.

## Deployed builds (git tags)

Each tag marks the commit whose files were live on GitHub Pages. To roll back the
live site, check out the tag and redeploy (or revert `main` to that commit).

| Tag    | Date (EST)           | Contents |
|--------|-------------------------|----------|
| iter11 | 12:14 AM                | Connected map, travel camera, glow, adaptive performance |
| i12.5  | 6:15 AM                 | Pin overlap motion-suppression fix, updated fonts and resume PDF |
| i13b   | 6:57 AM                 | Width-adaptive mobile hero framing (accepted) |
| i14b   | 7:25 AM                 | Mobile hero eyebrow phrase-lock (accepted) |
| i16    | 8:16 AM                 | Combined i14b + i15 mobile text scrim (accepted; live until i18e) |
| i18e   | 3:09 PM                 | Responsive breakpoint delta (1050/1051), five projects (reviewed) |
| i19    | Nov 1, 4:40 PM          | Refined environment and typography: dark lab background, GT America + KMR Melange Grotesk kit fonts, decorative wiring, pin declutter, integrated scrollbar (reviewed) |
| i20    | Nov 1, 6:08 PM          | Project label association fix: labels anchored to block front-bottom geometry, centered, accent connectors; declutter no longer moves project labels |
| i21    | Nov 1, 7:40 PM          | Project labels centered under their visible blocks via canvas CSS box screen mapping; rollback baseline for i22 |
| i22    | Nov 2, 12:50 AM         | Board pins navigate via existing jump() instead of opening the .detail modal (modal removed); rectangular grid floor restored from i18e on the muted i21 base; story scrollbar line and desktop hero eyebrow orphan fixed; RESUME pin copy matches navigation (reviewed) |
| i49    | Nov 2, 3:20 AM          | Live publish of the QA-passed 3D PCB portfolio to root: runtime-corrected main.js + main.css, root PDF promoted from /portfolio-preview/, assets/ promoted, OG metadata, GoatCounter visitor counter. Recovered source snapshot (hosted draft + counter fix reapplied) |
| i50    | Nov 3, 7:18 PM           | Removal of static per-project floating labels (i1-i5) throughout hero/contact/projects; six main nav pins unchanged; mobile Projects numbered tap chips preserved as functional controls; CSS byte-identical to i49 (reviewed, independent QA pass) |
| i51    | Nov 3, 7:55 PM           | Hero hover identification: hovering a project block in the hero view shows its name label and accent glow (ray-picking and glow ungated to hero view); leave hides it; click still routes to Projects with selection. No static labels restored; six main nav pins, wiring, section controls, case links, mobile behavior unchanged; CSS byte-identical to i50 (reviewed, independent QA pass) |
| i23    | Nov 2, 2:25 AM          | Responsive label repair (reviewed, independent QA pass): mobile hero render-gate fix, clamp-into-band culling, landscape-short mode with compact story column, aspect-aware camera, iterative pin declutter, anchor-tracking 3x2 hero label grid with dashed leaders to real 3D anchors, 44px tap targets with :active feedback, landscape-short vignette lift (bottom-row label contrast 9.9-11.2:1 measured), hero copy "Expected graduation: 2029" |

## Source snapshots (archive/sources/)

Editable source for each iteration, including versions that were never deployed
publicly:

- `i12.5`, `i13b`, `i15`, `i16` - accepted checkpoints (i15's scrim folded into i16)
- `i13` - rejected mobile hero experiment, superseded by i13b, kept for reference
- `i17m` - published preview baseline immediately before i18e (main rollback point)
- `i18-draft1..3` - same-day intermediate responsive candidates, superseded by i18e
- `i18e` - previous live version
- `i19` - reviewed refined-environment experiment, superseded by i19b
- `i19b-draft1`, `i19b-draft2` - same-day pin-declutter candidates, superseded by i19b
- `i19b` - pin-declutter build, superseded by i20
- `i20` - previous live version
- `i21` - previous live version, rollback point for i22
- `i22` - previous live version, rollback point for i23
- `i23` - pre-publish QA-passed version, rollback point for i49
- `i49` - previous live version, rollback point for i50
- `i50` - previous live version, rollback point for i51
- `i51` - current live version (hero hover identification)

Content hashes (sha256, first 12 chars) so snapshots can be told apart:

| Version    | App.tsx      | content.ts   | style.css    |
|------------|--------------|--------------|--------------|
| i12.5      | 71c066d5d14b | 11cbf01e7ff8 | 3b9c3a8215b7 |
| i13        | a8af99e12c8d | 11cbf01e7ff8 | 3b9c3a8215b7 |
| i13b       | 6a35bee0c00d | 11cbf01e7ff8 | 3b9c3a8215b7 |
| i15        | 6a35bee0c00d | 11cbf01e7ff8 | e72f3800cb0b |
| i16        | 1108b66744e0 | 11cbf01e7ff8 | e72f3800cb0b |
| i17m       | 0c60143d8f12 | 349900d8f410 | 8f1b026d53ee |
| i18-draft1 | 9d67c912bbac | 9074d884b724 | 68d649407adf |
| i18-draft2 | 2eb3215032f0 | 9074d884b724 | 68d649407adf |
| i18-draft3 | 2eb3215032f0 | 9074d884b724 | eabdda63c3ca |
| i18e       | b5a480dba940 | e92129837750 | c4b03b5c9a01 |
| i19        | 777d5ac90b74 | ac71f7c96c91 | 989ab2a3074e |
| i19b-draft1 | c375a9f3ee21 | ac71f7c96c91 | 989ab2a3074e |
| i19b-draft2 | c640f885a44f | ac71f7c96c91 | 989ab2a3074e |
| i19b       | deae658f91a2 | ac71f7c96c91 | 989ab2a3074e |
| i20        | 7fc3e8c4c799 | ac71f7c96c91 | 989ab2a3074e |
| i21        | b95378ddeacd | ac71f7c96c91 | 989ab2a3074e |
| i22        | b7c6d0707e76 | ac71f7c96c91 | 867388f3cf8c |
| i23        | d6de9069b1cf | ab9b9b936933 | f12ff0221325 |
| i49        | cd27e906576d | 15bd3bd3b41f | a87f2f18c795 |
| i50        | 156e6574400f | 15bd3bd3b41f | a87f2f18c795 |
| i51        | ee5431681a15 | 15bd3bd3b41f | a87f2f18c795 |
