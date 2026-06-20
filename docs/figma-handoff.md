# Figma — чеклист сдачи Yandex Pet Day

**Файл:** https://www.figma.com/design/3xau5j9A2ixWs7YnfHCvXi/Untitled

**HTML-прототип:** `npm run dev` → http://localhost:5178/

---

## Как смотреть интерактив в Figma

### Mobile (360 px)
1. Открой страницу **`360 / Mobile`**
2. Выбери фрейм **`360 · Play ▶ — Offline`**
3. Нажми **Play (▶)** в правом верхнем углу

### Desktop (1440 px)
1. Открой страницу **`1440 / Desktop`**
2. Выбери фрейм **`1440 · Play ▶ — Offline`**
3. Нажми **Play (▶)**

### Что можно кликать

| Действие | Результат |
|----------|-----------|
| **Офлайн / Онлайн** | Смена формы (hint + pet checkbox) |
| **Зарегистрироваться** | Toast «Регистрация отправлена» (overlay) |
| **Остались вопросы** | Modal (overlay) |
| **Закрыть** (modal) | Назад |
| **Отправить** (modal) | Toast |
| **≡ Burger** (360 only) | Меню → ✕ назад |
| **FAQ −** (360) | Toggle open/closed |
| Tap toast | Закрыть overlay |

Статичные pixel-perfect макеты: **`360 — Visual (static capture)`** и **`1440 — Visual (static capture)`**

---

## Dev · States — для разработчика

Страница **`👨‍💻 Dev · States`** — каждое UI-состояние **отдельным фреймом**:

| Фрейм | Описание |
|-------|----------|
| `State / Form · Offline` | hint «Количество мест…» + checkbox pet |
| `State / Form · Online` | hint «Пришлем ссылку…», без pet |
| `State / FAQ · Open` | Первый пункт раскрыт |
| `State / FAQ · Closed` | Аккордеон закрыт |
| `State / Modal · Open` | Popup «Остались вопросы» |
| `State / Toast · Success` | Success регистрации |
| `State / Menu · Open` | Burger-меню (360) |

Компоненты: **`📦 Components`** → Component Library + `Layout / Container · 1200` / `· 320`

### Layout (контейнеры)

| Viewport | Container | Gutter |
|----------|-----------|--------|
| 1440 | **1200** | 120 px |
| 360 | 320 | 20 px |

Play-фреймы и static capture используют явные **`Container / 1200`** (desktop) и **`Container / 320`** (mobile) с auto-layout.

---

## Структура файла

| Страница | Содержание |
|----------|------------|
| `1440 / Desktop` | Play ▶ interactive + Visual static |
| `360 / Mobile` | Play ▶ interactive + Visual static |
| `👨‍💻 Dev · States` | Изолированные состояния для handoff |
| `UX/UI Kit` | Токены, типографика Onest |
| `📦 Components` | Component Library |
| `📝 Notes` | Ход мысли |

---

## Сдача

- [x] Интерактив Play на 360 и 1440
- [x] Dev · States — отдельные окна формы/FAQ/modal/toast/menu
- [x] Onest (= YS Text fallback)
- [ ] Share: Anyone with link → can view
