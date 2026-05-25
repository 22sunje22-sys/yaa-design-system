import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';
import '../src/styles/global.css';

// YAA — тёмная зелёно-чёрная тема по умолчанию. Светлый фон оставлен
// только чтобы проверять контраст компонентов на белом.
const preview: Preview = {
  parameters: {
    layout: 'centered',
    options: {
      storySort: {
        order: ['Основа', 'Действия', 'Формы', 'Данные', 'Обратная связь', '*'],
      },
    },
    backgrounds: {
      default: 'yaa',
      values: [
        { name: 'yaa', value: '#040706' },
        { name: 'graph', value: '#050a08' },
        { name: 'light', value: '#f5f5f7' },
      ],
    },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
  },
};

export default preview;
