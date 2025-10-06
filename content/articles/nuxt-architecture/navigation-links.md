---
slug: "links-and-navigation-in-blog"
title: "Оформление ссылок и навигации в блоге"
description: "Демонстрация кнопок для внутренних и внешних ссылок."
date: 2025-09-20
category: "ux"
tags: ["links", "button", "seo"]
image: "https://cdn.qwenlm.ai/output/011a5f67-6721-4c97-8b68-c4a7850d9731/t2i/4e853d78-8e61-4a30-a804-0d3314115826/1759557142.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMDExYTVmNjctNjcyMS00Yzk3LThiNjgtYzRhNzg1MGQ5NzMxIiwicmVzb3VyY2VfaWQiOiIxNzU5NTU3MTQyIiwicmVzb3VyY2VfY2hhdF9pZCI6IjFiNTA2YTZiLTZlYmQtNDA2OC05NTU0LTE2OWE1MzUxNGNkZCJ9.0UuseCAC7toETd-DB9Oy5j1H7xi_RjZsn5bkDHcJd3o"
draft: false
featured: false
---

# Внутренние и Внешние Ссылки

SEO-оптимизация требует, чтобы мы делали акцент на внутренних ссылках. Мы можем стилизовать их как кнопки, чтобы они были более заметны.

## 1. Внутренняя ссылка (UButton)

Используйте `to` для навигации внутри Nuxt-приложения.

::u-button{to="/articles/state-and-alerts" icon="i-heroicons-arrow-long-right" color="blue" variant="outline"}
Читать предыдущую статью о Pinia
::

## 2. Карточка для загрузки

Используйте карточку, чтобы выделить ссылку на скачивание или внешний ресурс.

::u-card
#header
Скачать ресурсы
#description
Для этого урока мы подготовили готовый репозиторий на GitHub.

::u-button{to="https://github.com/your-project-link" target="\_blank" icon="i-heroicons-link"}
Открыть репозиторий на GitHub
::
::
