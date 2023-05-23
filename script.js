// script.js
fetch('data.txt')
  .then(response => response.text())
  .then(textData => {
    try {
      // Разбиваем текст на строки
      var lines = textData.split('\n');

      // Объект для хранения данных
      var jsonData = {};

      // Обработка каждой строки
      lines.forEach(line => {
        var parts = line.trim().split('=');
        if (parts.length === 2) {
          var key = parts[0].trim();
          var value = parts[1].trim();
          jsonData[key] = value;
        }
      });


      // Получаем ссылку на элемент вывода
      var outputElement = document.getElementById('output');

      // Преобразуем объект в JSON строку
      var jsonString = JSON.stringify(jsonData);

      // Выводим JSON данные в элемент
      outputElement.textContent = jsonString;
    } catch (error) {
      console.error('Ошибка парсинга JSON:', error);
    }
  })
  .catch(error => {
    console.error('Ошибка загрузки текстового документа:', error);
  });