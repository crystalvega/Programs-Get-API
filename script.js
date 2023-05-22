// script.js
fetch('data.txt')
  .then(response => response.text())
  .then(textData => {
    try {
      // Разбор строк
      var jsonData = {};
      var lines = textData.split('\n');
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line !== '') {
          var parts = line.split('=');
          var key = parts[0].trim();
          var value = parts[1].trim();
          jsonData[key] = value;
        }
      }

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
