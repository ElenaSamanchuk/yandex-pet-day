# UX/UI Kit — Yandex Pet Day

Техническая спецификация для Figma и HTML-прототипа.

---

## 1. Палитра (Figma Variables)

| Token | Hex | Применение |
|-------|-----|------------|
| brand | `#8533FF` | Primary CTA, ссылки, timeline dots, focus |
| brandHover | `#7030E0` | Hover primary |
| brandSoft | `#E8E0FF` | Pills, badges, selected radio bg |
| brandOnSoft | `#6525D1` | Текст на lavender (WCAG AA) |
| yandex | `#FC3F1D` | **Только** слово «Яндекс» |
| bg / surface | `#FFFFFF` | Hero, спикеры, форма, FAQ card |
| surface2 | `#F3F3F3` | Вы сможете, программа, FAQ section |
| border | `#E5E5E5` | Карточки, inputs, dividers |
| ink | `#000000` | Заголовки |
| inkMuted | `#858585` | Body, meta |

---

## 2. Типографика

**Целевой:** Yandex Sans Text  
**В Figma и коде:** **Onest** (fallback — см. обоснование ниже)

### Почему Onest = ближайший аналог YS Text

Yandex Sans Text — корпоративный UI-grotesk Яндекса. В Figma plugin YS Text недоступен, поэтому используется **Onest**:

1. **Назначение** — интерфейсы и body-текст на русском (как YS Text в Gravity UI)
2. **Геометрия** — нейтральный grotesk, не marketing/display
3. **Кириллица** — оптимизирована для RU, визуально близка к YS Text
4. **Weights** — 400 Regular, 500 Medium, 600 SemiBold, 700 Bold (совпадают с ramp YS Text)
5. **Единый источник** — Onest и в Figma, и в HTML (`index.html`) → нет расхождения макет ↔ прототип

**Отклонённые альтернативы:** Inter (слабее кириллица), Manrope (мягче/шире), Golos Text (editorial).

**Text Styles в Figma:** Display/H1, H2, H3, Body 14/16, Caption — все на Onest.

| Token | Size | Line | Weight (Onest) | Use |
|-------|------|------|--------|-----|
| display-hero | 28 → 32 | 36 → 40 | Bold | H1 hero |
| h2-section | 32 | 40 | Bold | Заголовки секций |
| h3-card | 16 | 22 | Semibold | Карточки, FAQ question |
| body | 14 | 20 | Regular | Карточки, FAQ answer |
| body-lg | 14 → 16 | 20 → 24 | Regular | Intro секций (md+) |
| caption | 12 | 16 | Regular / Medium | Meta, pills, footer |

---

## 3. Layout & Containers

| Token | px | Use |
|-------|-----|-----|
| viewport-desktop | 1440 | Artboard / Play frame |
| **container-desktop** | **1200** | **Container / 1200 — max content width** |
| gutter-desktop | 120 | `(1440 − 1200) / 2` — отступ секции или center align |
| viewport-mobile | 360 | Mobile frame |
| container-mobile | 320 | Container / 320 |
| gutter-mobile | 20 | `(360 − 320) / 2` |

**Структура слоёв (desktop):**
```
1440 · Frame
  Header
    Container / 1200
  Section / …
    Container / 1200
      …content
```

Контент **никогда** не растягивается на полные 1440 — только viewport. Это совпадает с HTML: `max-w-[1440px]` + `px-[120px]` → **1200 px** рабочей области.

---

## 4. Spacing (сетка 8 px)

| Token | px | Use |
|-------|-----|-----|
| page-x-sm | 20 | 360 px horizontal |
| page-x-md | 40 | tablet |
| page-x-lg | 120 | 1440 px gutter |
| section-y-sm | 48–64 | mobile vertical (pt/pb asymmetric) |
| section-y-md | 80 | tablet/desktop |
| section-y-lg | 96 | 1440 |
| gap-cards | 16 → 20 | между карточками |
| gap-stack | 8–32 | внутри блоков |

---

## 5. Radius

| Element | px |
|---------|-----|
| Button, Input, Radio | 12 |
| Card, Modal | 16 |
| Pill, Badge | 8 |
| FAQ icon circle | 14 (28×28) |

---

## 6. Components (Figma)

### Button / Primary
- Fill brand, text white, h min 44, px 24, radius 12
- States: Default, Hover (brandHover)

### Button / Secondary
- Stroke border, fill white, h 44

### Button / Header
- Secondary compact: 14 semibold, h 44, px 16

### Input
- h 44–50, px 16, stroke border, radius 12, text 14

### Card
- Fill white, stroke border, radius 16, p 20–24

### Pill
- Fill brandSoft, text brandOnSoft, 12 semibold, px 10 py 4

### FAQ Item
- Variants: **Closed** (+), **Open** (−)
- Layout: grid `1fr + 28px icon`, items-center
- Question 16 semibold, answer 14 regular

### Radio Format
- Two tiles, selected: border brand + bg brandSoft
- Mobile h 44 (= hint row)

### Modal
- Overlay rgba(0,0,0,0.6), card max 480, fields from TZ

### Toast
- Success: «Регистрация отправлена», check on brandSoft

### Badge (hero meta)
- 12 medium, px 8–12 py 6, radius 8

---

## 7. Breakpoints

| Name | Width | Layout |
|------|-------|--------|
| mobile | 360 | 1 col, burger |
| tablet | 768 | 2 col benefits |
| desktop | 1440 | full grid |

---

## 8. Prototype checklist

- [ ] FAQ accordion
- [ ] Offline / Online → hint text swap
- [ ] Online → hide pet checkbox frame
- [ ] «Остались вопросы» → Modal
- [ ] Register submit → Toast
- [ ] Burger → Mobile menu (360)
- [ ] Hover: nav link, card, primary (1440)

---

## 9. Layer naming (Figma)

```
1440 · Play ▶ — Offline
  Header
    Container / 1200
  Section / Register
    Container / 1200
  Section / FAQ
    Container / 1200
360 · Play ▶ — Offline
  Header
    Container / 320
  Main
    Container / 320
📦 Components
  Layout / Container · 1200
  Layout / Container · 320
  Button / Primary
  ...
UX/UI Kit
  06 · Layout & Containers
```
