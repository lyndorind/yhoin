# Git REST Service (git-rest-lab2)

Навчальний REST API-сервіс на базі Node.js та фреймворку Express.js.

## Вимоги до середовища
- Node.js версії 18.x або 20.x (рекомендовано LTS)
- npm версії 9.x або вище
- Git для клонування репозиторію

## Встановлення
1. Клонуйте репозиторій та перейдіть у каталог проєкту:

    git clone https://github.com/lyndorind/yhoin.git
    cd yhoin

2. Встановіть необхідні залежності:

    npm install

## Запуск та приклади використання
Запустіть локальний HTTP-сервер (за замовчуванням на порту 3000):

    node server.js

### Доступні ендпоінти
- Перевірка роботи сервісу:

    curl http://localhost:3000/status

- Отримання списку елементів:

    curl http://localhost:3000/items

- Додавання нового елемента:

    curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name":"New Item"}'
