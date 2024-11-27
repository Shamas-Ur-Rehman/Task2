import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



const ProductAd = () => {

    const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 6, seconds: 2 });

    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          let { hours, minutes, seconds } = prev;
  
          if (seconds > 0) {
            seconds--;
          } else if (minutes > 0) {
            seconds = 59;
            minutes--;
          } else if (hours > 0) {
            seconds = 59;
            minutes = 59;
            hours--;
          } else {
            clearInterval(interval);
          }
  
          return { hours, minutes, seconds };
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const formatTime = (time) => (time < 10 ? `0${time}` : time);


    const reviews = [
        {
          image: 'https://images.priceoye.pk/all-call-shine-12-pro-pakistan-priceoye-ob2md.jpg',
          text: 'Жарка без масла - это просто чудо! Блюда получаются не только вкусными, но и полезными.',
          name: 'Катя, 26 лет',
        },
        {
          image: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1723608038421/0d6e13c2c3cb0cc5df0da7e0b2f756be.png',
          text: 'Невероятно хорошее качество за доступную цену! Благодарю продавца за отличный товар и отличное обслуживание.',
          name: 'Лиза, 56 лет',
        },
        {
          image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/296178163/GX/GL/SD/186724856/vivo-mobile-phone.jpg',
          text: 'Два отсека аэрогриля позволяют экономить время, готовя два блюда одновременно. Удобно и эффективно!',
          name: 'Дарья, 36 лет',
        },
      ];
  return (
    <>
    <div className="bg-gray-900 text-white  py-8 px-4 sm:px-8 lg:px-16">
      {/* Top Banner */}
      <div className="text-center text-white py-4 top-0 mb-4 ">
        <h1 className="text-5xl font-bold">Рассрочка без первого взноса</h1>
      </div>
      <div className="bg-white rounded-lg">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center md:pb-[100px] lg:ml-[100px] lg:text-left px-4 lg:px-8">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Аэрогриль 10 в 1 в <br /> рассрочку от 22 рублей
            </h3>
            <ul className="list-none space-y-2 mb-4 text-black">
              <li className="flex items-center">
                <span className="mr-2 text-black">✔️</span> Вкусные и здоровые блюда без масла
              </li>
              <li className="flex items-center">
                <span className="text-black mr-2">✔️</span> Экономит время на готовке в 4 раза
              </li>
              <li className="flex items-center">
                <span className="text-black mr-2">✔️</span> Готовит одновременно 2 разных блюда!
              </li>
              <li className="flex items-center">
                <span className="text-black mr-2">✔️</span> Разнообразит пищу более 10.000 блюд
              </li>
            </ul>
            <p className="mb-4 font-semibold text-black">
              Узнайте график платежей,<br /> жмите по кнопке 👇
            </p>
            <Link to="/refrigerator-Options" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Узнать цену
            </Link>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center pb-5 pt-5">
            <img
              src="https://profit.pakistantoday.com.pk/wp-content/uploads/2023/07/pp-696x389.jpg"
              alt="Product"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>


    <div className="bg-white text-black py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="https://i.pinimg.com/736x/0e/1f/07/0e1f07a4e7fffca547ab923424adb694.jpg"
            alt="Air Fryer"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            РАСЧИТАЙТЕ ПЛАТЕЖИ ПО КНОПКЕ НИЖЕ
          </h2>
          <h3 className="text-2xl font-bold text-red-600 mb-4">ЗА ОДНУ МИНУТУ</h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
            <span className="bg-yellow-300 text-red-600 font-bold py-1 px-4 rounded">
              Без справок о доходах
            </span>
            <span className="bg-yellow-300 text-red-600 font-bold py-1 px-4 rounded">
              Без первого взноса
            </span>
            <span className="bg-yellow-300 text-red-600 font-bold py-1 px-4 rounded">
              Без поручителей
            </span>
          </div>
          <h3 className="text-xl font-bold mb-4">ОДОБРЯЕМ ВСЕМ!</h3>
          <Link to="/refrigerator-Options" className="bg-red-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-red-700 transition">
            Узнать цену
          </Link>
        </div>
         {/* Timer Section */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-800 font-bold mb-2">
          Успейте до конца акции:
        </p>
        <div className="flex justify-center space-x-4 text-2xl font-bold text-black">
          <div className="flex flex-col items-center">
            <span>{formatTime(timeLeft.hours)}</span>
            <span className="text-gray-500 text-sm">Часов</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{formatTime(timeLeft.minutes)}</span>
            <span className="text-gray-500 text-sm">Минут</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{formatTime(timeLeft.seconds)}</span>
            <span className="text-gray-500 text-sm">Секунд</span>
          </div>
        </div>
      </div>
    </div>
      </div>




      <div className="bg-gray-900 text-white py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Отзывы</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg p-4 max-w-sm w-full"
          >
            <img
              src={review.image}
              alt={`Review ${index + 1}`}
              className="rounded-md mb-4"
            />
            <p className="text-sm mb-4">{review.text}</p>
            <p className="text-sm font-bold">{review.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
      <Link to="/refrigerator-Options" className="bg-red-500 text-white py-4 px-10 rounded-lg hover:bg-red-600">
          Узнать цену
        </Link>
      </div>
    </div>
    {/* <div className='bg-black text-white h-[120px]'>
<p className='text-center'>ООО Кай <br/>
Адрес: РБ, 220035, Г. МИНСК, УЛ. ТИМИРЯЗЕВА 65А УНП: 193699391<br />
 <span >Политика конфиденциальности</span></p>
    </div> */}
     {/* Footer Section */}
     <footer className="bg-gray-100 text-center py-6 pb-[80px] mt-12">
        <p className="text-sm md:text-base">
        Время работы: пн-вс 09:00 - 21:00
        </p>
        <p className="text-sm md:text-base mt-2">
        ООО "Цитруском" УНП 193699866<br />
        220046, г. Минск, а/я 46
        </p>
        <p className="text-sm md:text-base mt-2 font-semibold">
        Акция действует на всей территории Беларуси
        </p>
        <p className="text-sm md:text-base mt-2">Phone: +375 (29) 330-44-93</p>
        <p className="text-sm md:text-base mt-1">E-mail: citrustele@mail.ru</p>
        
        <div className="mt-4">
          {[
            { text: "Политика конфиденциальности", href: "https://holodilnik.wbc.necitrus.of.by/documents/politics.html" },
            { text: "Пользовательское соглашение", href: "https://holodilnik.wbc.necitrus.of.by/documents/agreement.html" },
            { text: "Договор возврата товара и денежных средств", href: "https://holodilnik.wbc.necitrus.of.by/documents/dogovor_vozvrata.html" },
            { text: "Договор доставки", href: "https://holodilnik.wbc.necitrus.of.by/documents/dostavka.html" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-blue-600 hover:underline mx-2 text-sm md:text-base"
            >
              {link.text}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
};

export default ProductAd;
