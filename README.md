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

## Деплой

GitHub Action (`.github/workflows/deploy.yml`) собирает Storybook и публикует на GitHub Pages при пуше в `main`.
