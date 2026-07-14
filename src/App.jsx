import React from 'react';

function App() {
  
  const myName = "Егор";

  
  const imageUrl = "https://picsum.photos/300/200"; 
  const imageAlt = "Красивый случайный пейзаж";

 
  const favoriteSite = {
    name: "Google",
    url: "https://www.google.com/"
  };

 
  const numberOne = 15;
  const numberTwo = 27;
  const sum = numberOne + numberTwo;

  
  const colors = ["Червоний", "Синій", "Зелений", "Жовтий"];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      {/* 2. Выводим имя в элементе h1 через фигурные скобки */}
      <h1>{myName}</h1>

      {/* 3. Добавляем элемент p с текстом приветствия */}
      <p>Ласкаво просимо до нашого сайту!</p>

      {/* 4. Выводим изображение, используя фигурные скобки для src и alt */}
      <div style={{ margin: '20px 0' }}>
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          style={{ borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
        />
      </div>

      {/* 6. Выводим ссылку, используя значения из объекта favoriteSite */}
      <p>
        Мій улюблений сайт: <a href={favoriteSite.url} target="_blank" rel="noreferrer">{favoriteSite.name}</a>
      </p>

      {/* 7. Выводим результат суммы двух чисел */}
      <p>
        Сума чисел {numberOne} та {numberTwo} дорівнює: <strong>{sum}</strong>
      </p>

      {/* 9. С помощью map выводим цвета в списке ul */}
      <h3>Список кольорів:</h3>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;