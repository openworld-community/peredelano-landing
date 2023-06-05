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

### Перед тем как начать, установи зависимости и Husky

```shell
cd ./peredelano-landing
pnpm i --frozen-lockfile
pnpm prepare
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

## Примечания

Проект собран на последней версии NextJS с новым каталогом `./app`. Там многое изменилось, поэтому рекомендую почитать доку начиная от сюда перед тем как начинать кодить: https://nextjs.org/docs/app/building-your-application/routing
