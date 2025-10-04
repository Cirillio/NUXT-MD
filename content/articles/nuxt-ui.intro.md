---
article_id: 2
title: "Осваиваем Nuxt UI: Компоненты прямо в Markdown"
description: "Демонстрация базовых компонентов Nuxt UI и их использование в MDC."
date: 2025-10-04
category: "nuxt-ui"
tags: ["nuxt", "ui", "tailwind", "mdc"]
author:
  {
    id: 13,
    name: "Kuvaffov",
    avatar: "https://cdn.qwenlm.ai/output/011a5f67-6721-4c97-8b68-c4a7850d9731/t2i/9f89afe9-08a5-46a6-a726-f1653d926c91/1759563842.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMDExYTVmNjctNjcyMS00Yzk3LThiNjgtYzRhNzg1MGQ5NzMxIiwicmVzb3VyY2VfaWQiOiIxNzU5NTYzODQyIiwicmVzb3VyY2VfY2hhdF9pZCI6ImU0ZjE4MGVjLTExOWUtNDI4NC1hZmE2LTI2NDY0NGEwMDRjOSJ9.c1oV5fIsmnBtV65Riv1Sq6fXjQFJkjFRc6HAg6B6gT0",
  }
image: "https://cdn.qwenlm.ai/output/011a5f67-6721-4c97-8b68-c4a7850d9731/t2i/eda68cf1-8b0d-4896-a415-8c5a6e1f0797/1759557022.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMDExYTVmNjctNjcyMS00Yzk3LThiNjgtYzRhNzg1MGQ5NzMxIiwicmVzb3VyY2VfaWQiOiIxNzU5NTU3MDIyIiwicmVzb3VyY2VfY2hhdF9pZCI6IjFiNTA2YTZiLTZlYmQtNDA2OC05NTU0LTE2OWE1MzUxNGNkZCJ9.iyhZIKKz3QqqBddpOtgi2I1VQCNWYr-Qi4ppMV2oqsI"
draft: false
featured: true
---

# Магия Nuxt UI и Markdown

Nuxt UI позволяет использовать готовые компоненты не только в `.vue` файлах, но и прямо в контенте Markdown. Это достигается благодаря поддержке **MDC (Markdown Components)** в Nuxt Content.

## 1. Карточки (UCard)

Карточки идеально подходят для выделения ключевых разделов или превью информации.

::u-card
#title
Конфигурация
#description
Карточка с тенью и скругленными углами
::

## 2. Кнопки и Действия (UButton)

Мы можем добавить призыв к действию (CTA) прямо в текст статьи.

::u-button{to="https://ui.nuxt.com" target="\_blank" icon="i-heroicons-arrow-top-right-on-square"}
Перейти к документации Nuxt UI
::

## 3. Блоки Кода (Code Group)

MDC также позволяет объединять несколько примеров кода с переключателем. Это встроенная функция Nuxt Content, которая прекрасно сочетается со стилями Nuxt UI.

::code-group

```typescript [Typescript]
// Пример запроса к API
async function fetchData() {
  const { data } = await useFetch("/api/data");
  return data;
}
```
