# Peredelano Landing

## Под капотом:

-   NextJS
-   PostCSS (с плагинами для нестинга, custom-media, custom-units)
-   CVA для более удобной стилизации (что-то типа classnames или clsx но круче)

### Что можно вносить в проект, чего избегать

**Никакого CSS-in-JS**. Особенно Runtime CSS-in-JS (аля styled-components). Сильно раздувает бандл JS и CSS доходит в самый последний момент, тогда как он нужен в самом начале, чтобы браузер уже что-то рендерил. Еще и может сломаться в рантайме и пизда стилям. Zero Runtime CSS-in-JS - ток если найдешь с поддержкой PostCSS. Проект предполагает наличие custom-units.

**Никаких lodash, moment, Antd и Material UI**. Поставь расширение [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) (если у тебя VS Code, иначе поищи что-то похожее для своей IDE). Смотри на размер библиотек. Если оно оранжевое или красное - лучше не вносить в проект.

Если есть альтернатива в виде более легкой библиотеки - лучше ею воспользоваться, если конечно эту библиотеку поддерживают и проект не мертворожденный.

**Можно внести плагины PostCSS для OKLCH**. Что это такое и зачем: [OKLCH в CSS: по­че­му мы ушли от RGB и HSL](https://web-standards.ru/articles/oklch-in-css-why-quit-rgb-hsl/)

**Никакого Effector**. Приготовить его нормально - сложно. Рекомендаций для структуризации разработчики этой либы внятных особо не дают. Чем больше будет разрастаться проект, тем сложнее станет поддерживать Effector.

**Другие стейт менеджеры**. В целом тут уже на вкус и цвет. Redux и Mobx имхо морально устарели, но это вполне рабочие лошадки и имеет право на жизнь. Из чего-то современного и простого я бы советовал [Nano Stores](https://github.com/nanostores/nanostores) или [Zustand](https://github.com/pmndrs/zustand).

**Никакого Tailwind**. Мы все таки не криптостартаперы.

## Развертывание проекта

Перед тем как начать, установи следующие плагины в свой VS Code (или другую IDE, в которой работаешь):

-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
-   [PostCSS](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Также рекомендую поставить [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

Увы, плагин Stylelint в VS Code работает ебано, и нельзя сделать удобно "Fix all auto-fixable problems" через выпадашку в месте ошибки. Чтобы это сделать, нужно нажать `Command + P` или `Ctrl + P` вписать "> Stylelint: Fix all auto-fixable Problems".

Либо можно настроить так, чтобы при каждом сохранении файла CSS выполнялась эта команда. Для этого найди в настройках пункт "Code Actions on Save" и в конфиге пропиши следующий код:

```json
"editor.codeActionsOnSave": {
	"source.fixAll.stylelint": true
}
```

Затем установи свежий `pnpm`.

### Перед тем как начать, установи зависимости

```shell
cd ./peredelano-landing
pnpm i --frozen-lockfile
```

### Запуск проекта в Dev Mode

```shell
pnpm dev
```

### Сборка проекта

```shell
pnpm build
```

### Запуск проекта в Production Mode (только после сборки проекта)

```shell
pnpm start
```

## Docker

Можно протестить максимально близко к боевым условиям

```shell
docker build -t peredelano-landing-image .
docker run --name peredelano-landing -p 3000:3000 -d peredelano-landing-image
```

## Каталоги

-   **public** - разные ассеты, вроде картинок
-   **src** - основной каталог с исходным кодом
    -   **app** - каталог со страницами
        -   **page.tsx** - главная страница
        -   **layout.tsx** - лейаут всего приложения
        -   _\_components_ - компоненты главной страницы
        -   _\_hooks_ - хуки главной страницы
        -   _\_something_ - что-то главной страницы, т.е. любой каталог для локальных файлов страницы делать с префиксом `_`
        -   _startups_ - каталог страницы стартапов
            -   _page.tsx_ - страница стартапов
            -   _\_components_ - компоненты страницы стартапов
            -   ...
        -   ...
    -   _layout_ - этого каталога нет, но сюда пихаем шапку и футер
    -   **components** - общие компоненты дизайн системы. Пока что в нашем случае это кнопки и ссылки (может еще что-то но вроде нет)
    -   _hooks_ - каталога нет, глобальные хуки
    -   _utils_ - каталога нет, глобальные функции-хэлперы
    -   _store_ - каталога нет, стор приложения
    -   **styles** - глобальные стили
    -   **types** - глобальные типы

Пока каталоги такие, но возможно добавятся еще какие-то глобальные каталоги. Главное в глобальных каталогах размещать только то, что может быть переиспользовано.

В глобальных каталогах структуру лучше делать как в папке **components** сделано сейчас. А именно папки/файлы с какими-то компонентами, утилитами, хуками и прочим, и корневой index файл, через который экспортятся все эти компоненты. Так удобнее импортировать через множественные импорты.

## Workflow

Все задачки на доске в гитхабе: https://github.com/orgs/openworld-community/projects/9

Берешь задачку, ассайнишь себя, создаешь из задачки issue (правой клавишей мыши по задаче, будет выпадащее меню).

Делаешь `git checkout -b ...` от ветки `main` (не забудь перед этим сделать `git pull`). Название ветки делаешь таким: `LND-*`, где `*` - это номер issue. Например issue у тебя под номером 9, ветку называешь `LND-9`.

Делаешь тасочку, комитишь, пушишь. Делаешь пулл реквест. Называешь его `[LND-*] Краткое описание таски`. В описании
можешь написать что сделал (пока опционально), и обязательно напиши `Closes #*`, где `*` - это номер issue. Например
номер issue - 9, тогда пиши `Closes #9`.

Будет круто если кто-то проревьюит тебя. Просто тегни в чате всех фронтов. Если задача кого-то блокает (тебя или кого-то еще), то просто проверь что все работает и мержи.

## Примечания

Проект собран на последней версии NextJS с новым каталогом `./app`. Там многое изменилось, поэтому рекомендую почитать доку начиная от сюда перед тем как начинать кодить: https://nextjs.org/docs/app/building-your-application/routing
