import React from 'react';

function FormComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-6 text-gray-700">
          Спасибо за ответы!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Мы закрепим за вашим номером подарок. Оставьте номер телефона для
          уточнения деталей вашей заявки и мы перезвоним в ближайшее время!
        </p>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Введите Ваше имя"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Введите Ваш телефон"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacyPolicy"
              required
              className="mr-2 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="privacyPolicy" className="text-sm text-gray-600">
              Я согласен с{" "}
              <a
                href="#"
                className="text-blue-500 underline hover:text-blue-700"
              >
                политикой конфиденциальности
              </a>{" "}
              и пользовательским соглашением
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
