# YAA Design System

Визуальный язык booking-инструментов YAA — Vanga, SIMMY, Graph, Map. Тёмная зелёно-чёрная тема, неоновый зелёный акцент (`#1dff9e`), translucent-поверхности с blur.

Компоненты и токены извлечены из реального фронта и оформлены в Storybook.

## Запуск

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # статика в storybook-static/
```

## Структура

```
src/
├── styles/
│   ├── tokens.css      — все дизайн-токены (CSS-переменные --yaa-*)
│   └── global.css      — шрифты + база
├── foundations/        — stories с палитрой и типографикой
└── components/
    └── <Name>/
        ├── <Name>.tsx          — React-компонент
        ├── <Name>.module.css   — scoped-стили на токенах
        ├── <Name>.stories.tsx  — Storybook stories
        └── index.ts            — экспорт
```

## Компоненты

| Категория | Компоненты |
|---|---|
| Основа | Card · Палитра · Типографика |
| Действия | Button (primary / ghost) |
| Формы | TextInput · Select |
| Данные | Badge · Chip · SignalCell · DataBar |
| Обратная связь | Callout (warning / error) |

## Токены

Всё живёт в `src/styles/tokens.css` как CSS-переменные. Ключевые:

```css
--yaa-bg: #040706;        /* фон */
--yaa-green: #1dff9e;     /* сигнатурный */
--yaa-text: #f4fff8;      /* текст */
--yaa-muted: #7da590;     /* приглушённый */
--yaa-r-lg: 16px;         /* радиус карточек */
--yaa-font: "Space Grotesk", sans-serif;
```

## Принципы

- Тёмный фон всегда. База `#040706`.
- Зелёный `#1dff9e` — только акценты / primary / активные состояния, не заливка площадей.
- Поверхности полупрозрачные + `blur(8–12px)`.
- Текст на зелёных кнопках тёмный `#04140b`, не белый.
- Крупные числа/заголовки — градиентный clip-text.
- Интерфейс по-русски, технические термины (tier, power, signal) можно латиницей.

## Статус раскатки (2026-05)

| Проект | Тип | DS | Лого |
|---|---|---|---|
| yaa-events-dashboard (cerebro: хаб, Vanga, SIMMY, Граф, Карта) | Next.js | ✅ | ✅ favicon + HubNav |
| intickets-dashboard | Next.js + Tailwind | ✅ @theme-рецепт | ✅ шапка + favicon |
| yaa-fairytale-dashboard | Next.js + Tailwind | ✅ @theme-рецепт | ✅ шапка + favicon |
| yaa_kz_dasbhoard | static HTML | — | ✅ favicon |
| yaa-marketing-brief | static HTML | — | ✅ favicon |
| остальные YAA-фронты | разные | ⏳ задача Софьи (2 нед) | ⏳ |

Platinumlist / Chatpush репо — другой бренд, YAA-лого и DS на них не распространяются.

## Перевод дашбордов на YAA (Tailwind v4)

Аналитические дашборды (intickets, fairytale и будущие) — на Tailwind v4 со светлой
семантикой в разметке, но уже с `<html class="dark">` и `dark:`-вариантами. Чтобы
перекрасить их в язык YAA без переписывания сотен классов — используется готовый
`@theme`-ремап (`src/styles/yaa-dashboard.css`):

1. Дашборд рендерится в dark (`<html class="dark">`) и использует `dark:bg-gray-900`,
   `dark:text-gray-400`, `dark:text-indigo-400` и т.п. (наши next-дашборды так и сделаны).
2. В `globals.css` после `@import "tailwindcss"` вставить блок `@theme` из
   `yaa-dashboard.css` — он ремапит серую шкалу Tailwind → YAA тёмно-зелёную,
   индиго-акцент → неон-зелёный `#1dff9e`.
3. Тёмный фон `--background: #040706`, шрифт Space Grotesk.
4. Точечно: захардкоженный индиго `#6366f1` в чартах → `#1dff9e`; мульти-серия —
   из `--yaa-chart-1..8` (зелёный ведущий + бренд-акценты на тёмном).

Один CSS-блок переводит весь дашборд — разметку трогать почти не нужно. Применено в
intickets-dashboard и yaa-fairytale-dashboard.

## Бренд ya.agency

Родительский бренд агентства — «двигаем ивенты», «Не агентство. Партнёр по продажам билетов».
Фирстиль: чёрный фон + кислотный зелёный + жёлтый акцент.

```css
--yaa-brand-black: #000000;
--yaa-brand-green: #10ed92;
--yaa-yellow:      #fff600;  /* только редкие CTA-хайлайты */
```

Продуктовые инструменты используют чуть более «софт» зелёный `--yaa-green #1dff9e`. Жёлтый — не для интерфейса, только маркетинг/CTA.

## Как использовать (промпт для AI)

Чтобы сгенерировать новый экран в стиле YAA, дай модели такой контекст:

```
Сделай UI в стиле YAA Design System:
- Тёмный фон #040706, текст #f4fff8 / #7da590 (muted).
- Акцент — неоновый зелёный #1dff9e: primary-кнопки, активные состояния,
  градиентный clip-text на крупных числах (#1dff9e → #4dffd1).
- Карточки: rgba(13,28,21,.5) + border rgba(29,255,158,.1) + backdrop-filter blur(8px),
  радиус 16px. Инпуты/кнопки — радиус 12px, на focus зелёная рамка.
- Шрифт Space Grotesk (заголовки 700, body 400-500). Лейблы — UPPERCASE 11px,
  letter-spacing 1.5px, цвет #7da590.
- Текст на зелёных кнопках тёмный #04140b, не белый.
- Жёлтый #fff600 не использовать в интерфейсе (только маркетинг).
Компоненты бери из yaa-design-system: Button, TextInput, Select, Badge,
Chip, Card, Callout, SignalCell, DataBar.
```

## Деплой

Репо публичный, без GitHub Pages. Storybook смотреть локально (`npm run storybook`)
или собрать статику `npm run build-storybook` и закинуть на любой статик-хостинг (Vercel/Netlify).
