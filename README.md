# test_task_testcafe
Тестовое задание на позицию QA инженера.
Тест необходимо реализовать используя https://devexpress.github.io/testcafe/ .
***
## Задание
Дано:
Пользователь открыл страницу https://petstore.swagger.io/#/
Когда:
Пользователь раскрывает раздел для отправки запроса POST /pet, нажимает на кнопку “Try it out”, вводит тестовые данные* и нажимает на кнопку Execute
Тогда:
В разделе Responses появляются разделы “Request URL” c содержимым “https://petstore.swagger.io/v2/pet” и “Server response”, где приведён ответ с кодом 200 и Response body содержащим элементы
***
## Запуск
1. `npm i` - установка необходимых зависимостей
2. `npm test` - запуск теста в chrome браузере
