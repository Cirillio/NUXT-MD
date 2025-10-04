🚀 Markdown Блог на Nuxt 3
Современная, высокопроизводительная блог-платформа для публикации технического контента, созданная на базе Nuxt 3 с использованием статической генерации (SSG) и @nuxt/content.

✨ Ключевые особенности
⚡️ Высокая производительность (SSG): Статическая генерация страниц для максимальной скорости загрузки.

✍️ Контент в Markdown: Легкое управление статьями с помощью @nuxt/content.

🔍 Полнотекстовый поиск: Реализован на клиенте с помощью Fuse.js.

🎨 Стильный UI: Адаптивный дизайн, построенный на @nuxt/ui (Tailwind CSS) с поддержкой темной темы.

🔒 Типизация: Весь проект построен на TypeScript.

⚙️ SEO из коробки: Полная оптимизация для поисковых систем (Sitemap, Open Graph).

🛠️ Технологический Стек
Фреймворк: Nuxt 3 (Vue 3, Composition API)

Контент: @nuxt/content

UI/Стили: @nuxt/ui (Tailwind CSS)

Состояние: Pinia

Типизация: TypeScript

Поиск: Fuse.js

⚙️ Локальный запуск

1. Установка зависимостей
   Bash

# Клонируйте репозиторий

git clone https://github.com/ВАШ_ПРОФИЛЬ/markdown-blog-nuxt3.git
cd markdown-blog-nuxt3

# Установите зависимости

npm install 2. Запуск в режиме разработки
Для запуска проекта с "горячей" перезагрузкой и Nuxt DevTools:

Bash

npm run dev
Проект будет доступен по адресу: http://localhost:3000

3. Сборка для Production (SSG)
   Для создания статически сгенерированной версии (Production Build):

Bash

npm run generate
Результаты сборки будут находиться в папке .output/public. Эти файлы можно развернуть на любом хостинге статических сайтов (Vercel, Netlify, Cloudflare Pages).

📂 Структура Контента
Статьи хранятся в формате Markdown.

Расположение
Все статьи должны находиться в папке /content/blog/. Структура папок здесь определяет роутинг и категории.

Plaintext

content/
├── blog/
│   ├── nuxt/
│   │   ├── \_dir.yml
│   │   └── composables.md
│   └── getting-started.md
└── authors/
└── \_data.json
Frontmatter (Метаданные статьи)
Каждая статья должна начинаться с метаданных (YAML Frontmatter):

YAML

---

title: 'Заголовок статьи'
description: 'Краткое описание для SEO и превью'
date: 2024-01-15
category: 'nuxt'
tags: ['nuxt', 'vue', 'typescript']
author: 'john-doe' # Ссылка на ID в content/authors/\_data.json
image: '/images/article-cover.jpg'
draft: false
featured: true

---

🤝 Вклад
Приветствуются любые предложения и Pull Requests!
Для разработки новых функций, пожалуйста, следуйте официальному ТЗ проекта и используйте ветку main для мержа.
