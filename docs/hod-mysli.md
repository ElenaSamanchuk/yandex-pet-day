# Ход мысли — Yandex Pet Day

Документ для сдачи вместе с макетами Figma (1440 + 360 px) и HTML-прототипом.

**Figma:** https://www.figma.com/design/3xau5j9A2ixWs7YnfHCvXi/Untitled  
**UX/UI Kit:** страница `UX/UI Kit` + `docs/ux-ui-kit.md`  
**Prototype:** `360 / Mobile` и `1440 / Desktop` → Play ▶ · Dev states: `👨‍💻 Dev · States` · HTML: `npm run dev`

---

## Что анализировала перед работой

Перед тем как рисовать, я опиралась на три источника — это важно для оценки «хода мысли»:

### 1. Задание Яндекс Крауд (ТЗ)

- Какие блоки обязательны и в каком порядке
- Какие тексты нельзя менять (дословно из PDF)
- Что должно быть интерактивным: FAQ, переключатель офлайн/онлайн с подсказкой, чекбокс питомца только для офлайна, modal «Остались вопросы», success после регистрации
- Без логотипа Яндекса — sub-brand **PD** + слово «Яндекс» оранжевым в тексте

### 2. Продукты и паттерны Яндекса (Gravity UI, event-лендинги)

- Сетка **8 px**, radius **12 / 16 px**
- Один главный акcent на экран (primary CTA только в hero)
- Чередование белого `#FFFFFF` и серого `#F3F3F3`
- Карточки с border, без лишнего декора
- Event-лендинги Яндекс Рекламы — equal cards, timeline для программы

### 3. Актуальные UX/UI-паттерны 2025–2026

- **Mobile-first 360 px** — touch targets от 44 px, burger-меню
- **Progressive disclosure** — FAQ-аккордеон, подсказки формы по контексту
- **Sticky sidebar** на desktop для программы (адрес + карта)
- Toast вместо alert для success-state

---

## Концепция: почему так выглядит

**Yandex Pet Day** — конференция про digital-продукты для зообизнеса. Визуально это **pet-tech** (мокап приложения, фиолетовый Alice), а не «милые зверюшки ради милоты».

| Решение | Почему |
|---------|--------|
| **Фиолетовый `#8533FF`** | Alice purple — продуктовый акcent Яндекса; хорошо читается на белом и сером; ассоциируется с tech, не с детским зоомагазином |
| **Оранжевый `#FC3F1D` только для «Яндекс»** | Фирменный цвет Яндекса без конкуренции с primary CTA |
| **4 равные карточки, не bento** | В ТЗ 4 равнозначных пункта; bento рассматривала — отклонила: equal cards проще сканировать, ближе к Gravity event pages |
| **Timeline для программы** | Фокус на расписании; точки `#8533FF` вместо декоративных иконок |
| **Toast success** | Не блокирует UI, как alert; паттерн Gravity / современных форм |

**Шрифты:** целевой — **Yandex Sans Text**. В Figma и коде — **Onest** (см. раздел ниже).

---

## Типографика — почему Onest вместо YS Text

По ТЗ и гайдам Яндекса целевой шрифт — **Yandex Sans Text**: нейтральный UI-grotesk с акцентом на читаемость кириллицы в интерфейсах и длинных текстах.

**YS Text недоступен** в Figma через plugin API (корпоративный шрифт). Поэтому в макете подключён **Onest** — максимально близкий доступный аналог:

| Критерий | YS Text | Onest |
|----------|---------|-------|
| Назначение | UI + body в продуктах Яндекса | UI + body, оптимизация под RU |
| Характер | Нейтральный grotesk | Нейтральный grotesk |
| Кириллица | Отличная | Отличная |
| Weights | 400, 500, 600, 700 | 400, 500, 600, 700 (+ 800) |
| Использование | Figma (целевой) | Figma + HTML-прототип |

**Почему не другие:**
- **Inter** — универсален, но кириллица визуально слабее и дальше от YS Text
- **Manrope** — мягче и шире, больше «marketing sans», меньше «product UI»
- **Golos Text** — хорош для текста, но ближе к editorial, не к compact UI

**Принцип:** один шрифт в Figma и в коде (Onest) — макет и прототип совпадают. В продакшене при доступе к корпоративному web-font — **Yandex Sans Text**.

В Figma созданы **Text Styles** на Onest (Display, H2, H3, Body, Caption) — страница `UX/UI Kit`.

---

## UX/UI Kit — что внутри

| Слой | Где смотреть |
|------|--------------|
| Цвета (Variables) | Figma → `UX/UI Kit` → 01 · Color tokens |
| Типографика | Figma → `UX/UI Kit` → 02 · Typography |
| Spacing 8 px | Figma → `UX/UI Kit` → 03 · Spacing |
| Компоненты | Figma → `📦 Components` → Component Library |
| Состояния UI | Figma → `👨‍💻 Dev · States` (отдельные фреймы) |

**Компоненты:** Button (Primary/Secondary/Header, Default/Hover) · Input · Card · Pill · Badge · Radio (Offline/Online) · Checkbox Pet · FAQ (Closed/Open) · Modal · Toast

---

## По блокам — решения

### Шапка
Навигация = заголовки секций из ТЗ. Desktop: outline CTA «Участвовать» (primary только в hero). Mobile: burger + полноэкранное меню.

### Hero
H1 и описание дословно. Meta-плашки в одну строку на 360 px. Mockup pet-tech app + бейдж «Яндекс Реклама».

### Вы сможете
4 равные белые карточки на `#F3F3F3`. Pills «Офлайн/Онлайн» = тот же компонент, что темы спикеров.

### Спикеры
3 карточки, фото, pill-тема. «Яндекс» у Андрея — оранжевым.

### Программа
Desktop: sticky sidebar + timeline. Mobile: timeline → карта (без sidebar).

### Форма регистрации
- **Офлайн:** hint «Количество мест ограничено» + checkbox «Приду с питомцем»
- **Онлайн:** hint «Пришлем ссылку…» + checkbox скрыт
- Success → **toast** «Регистрация отправлена»

### FAQ
Аккордеон, первый пункт открыт. Grid `текст | иконка +/−` — иконка не наезжает на длинные вопросы на 360 px. Кнопка «Остались вопросы» → modal.

### Footer
© Yandex Pet Day, 2026 · Политика

---

## Prototype — как смотреть

### Figma Play (▶) — полный интерактив

**Mobile:** `360 / Mobile` → **`360 · Play ▶ — Offline`** → Play  
**Desktop:** `1440 / Desktop` → **`1440 · Play ▶ — Offline`** → Play

- **Офлайн / Онлайн** → смена формы (hint + pet)
- **Зарегистрироваться** → toast overlay
- **Остались вопросы** → modal overlay
- **Burger ≡** (360) → menu
- **FAQ −** (360) → toggle open/closed

Pixel-perfect статика: `360 — Visual (static capture)`, `1440 — Visual (static capture)`

### Dev · States — handoff для разработчика

Страница **`👨‍💻 Dev · States`**: Form Offline/Online, FAQ Open/Closed, Modal, Toast, Menu — **каждое состояние отдельным фреймом** с подписью.

### HTML (полный интерактив с анимацией)
```bash
npm run dev
```
→ http://localhost:5178/

Проверить:
- [ ] FAQ — открыть/закрыть пункты (+/− без overlap)
- [ ] Офлайн / Онлайн — смена hint, скрытие pet
- [ ] «Остались вопросы» → modal
- [ ] Submit → toast success
- [ ] Burger → menu (360 px)

---

## Figma — структура файла

| Страница | Содержание |
|----------|------------|
| `1440 / Desktop` | Play ▶ interactive + Visual static |
| `360 / Mobile` | Play ▶ interactive + Visual static |
| `👨‍💻 Dev · States` | Изолированные UI-состояния для разработчика |
| `UX/UI Kit` | Токены, типографика, spacing |
| `📦 Components` | Component Library |
| `📝 Notes` | Этот текст в Figma |

---

## Ответы ревьюеру

| Вопрос | Ответ |
|--------|-------|
| Анализировали Яндекс? | Да: Gravity UI, event-лендинги, Alice purple, паттерны форм |
| Почему не bento? | 4 равных пункта ТЗ; equal cards scannable |
| Почему Onest в Figma? | YS Text недоступен в plugin; Onest — ближайший UI-grotesk с кириллицей, тот же в HTML |
| Где prototype? | Figma Play на Mobile/Desktop + `👨‍💻 Dev · States` + HTML dev server |
