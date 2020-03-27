# Аналог Instagram на React

<p align="center">
  
  <img src="https://www.pngkey.com/png/detail/1-13336_instagram-png-file-instagram-old-logo-png.png" width="250" alt="Логотип instagram">
  
  <br/>
  <br/>
  
  <span>
    Маленькое приложение состоящее из двух страниц: ленты новостей и главной.
  </span>
  
</p>

Все изображения в проекте ссылаются на реальные фотографии реальных пользователей. Поэтому может быть такое, что фотография перестанет отображаться правильно, если кто то решит удалить у себя.

## Быстрый старт

#### `json-server --watch src/posts.json`

Запускает json-server. Откройте [http://localhost:3100](http://localhost:3100) чтобы увидеть наш `posts.json`.

#### `npm start`

Запускает приложение в режиме разработки.

Откройте [http://localhost:3000](http://localhost:3000), чтобы посмотреть его в браузере.

Страница будет перезагружена, если вы внесете изменения.
Вы также увидите все ошибки в консоли.

![Главная страница](https://raw.githubusercontent.com/chrisryana/instagram_react/3535752f3c753b0eea14325dba3280dc3860a2b7/index.png)

![Лента новостей](https://raw.githubusercontent.com/chrisryana/instagram_react/3535752f3c753b0eea14325dba3280dc3860a2b7/feeds.png)

## JSON-Server

По умолчанию posts.json загружается на `localhost:3100`. Чтобы изменить порт нужно:

1. В файле `json-server.json` изменить `port` на нужный

![json-server.json](https://raw.githubusercontent.com/chrisryana/instagram_react/da86b511d36b25e93b50861ee1176df23ba9ab5f/jsonConfig.png)

2. В файле `src/services/instaservice.js` изменить переменную `this._apiBase` в соответствии с `port` в `json-server.json`

![instaservice.js](https://raw.githubusercontent.com/chrisryana/instagram_react/da86b511d36b25e93b50861ee1176df23ba9ab5f/service.png)

## Структура проекта

```
├── src/                       # Исходники
│   ├── components/            # Компоненты
│   │   ├── ErrorMessage.jsx   # Сообщение об ошибке
│   │   ├── Feed.jsx           # Карточка поста
│   │   ├── Header.jsx         # Шапка сайта
│   │   ├── Pallete.jsx        # Набор карточек на главной странице пользователя
│   │   ├── Posts.jsx          # Лента новостей
│   │   ├── Profile.jsx        # Главная страница
│   │   ├── Spinner.jsx        # Спиннер
│   │   ├── User.jsx           # Пользователь
│   │   └── Users.jsx          # Блок пользователей в ленте новостей
│   ├── services/              # Сервисы
│   │   └── instaservice.js    # Сервис для работы с API
│   ├── App.jsx                # Код приложения
│   ├── error.png              # Изображение ошибки
│   ├── index.css              # Стили
│   ├── index.js               # Корневой файл проекта
│   ├── logo.svg               # Логотип проекта
│   ├── posts.json             # Посты пользователей для ленты
│   └── spinner.gif            # Спиннер для загрузки
├── .gitignore                 # Список исключённых файлов из Git
├── README.md                  # Документация проекта
├── json-server.json           # Конфиг файл для json-server
└── package.json               # Список модулей и прочей информации
```

Данный проект собран с помощью [Create React App](https://github.com/facebook/create-react-app).



