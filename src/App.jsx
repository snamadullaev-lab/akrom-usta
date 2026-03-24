import React, { useState } from "react";
import logo from "./assets/logo.png";
import tel from "./assets/tel.png";
import pochta from "./assets/pochta.png";
import tg from "./assets/tg.png";
import bg from "./assets/bg.jpg";

import products from "./products";

function App() {
  const [openCatalog, setOpenCatalog] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [language, setLanguage] = useState("uz");

  const translations = {
    uz: {
      title: "AKROM-USTA TEMIRCHI",
      searchBtn: "Ixtiyoriy raqam bo‘yicha qidirish",
      placeholder: "Detal raqamini kiriting...",
      notFound: "Mahsulot topilmadi",
      address: "Manzil",
      phone: "Telefon",
      contact: "Aloqa",
    },
    ru: {
      title: "AKROM-USTA TEMIRCHI",
      searchBtn: "Поиск по произвольному номеру",
      placeholder: "Введите номер детали...",
      notFound: "Товар не найден",
      address: "Адрес",
      phone: "Телефон",
      contact: "Контакты",
    },
    en: {
      title: "AKROM-USTA TEMIRCHI",
      searchBtn: "Search by part number",
      placeholder: "Enter part number...",
      notFound: "Product not found",
      address: "Address",
      phone: "Phone",
      contact: "Contact",
    },
  };

  const t = translations[language];

  const filteredProducts = products.filter((product) =>
    product.code.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Language buttons */}
      <div className="flex justify-end gap-4 p-4">
        <button
          onClick={() => setLanguage("uz")}
          className="bg-white px-3 py-1 rounded"
        >
          UZ
        </button>
        <button
          onClick={() => setLanguage("ru")}
          className="bg-white px-3 py-1 rounded"
        >
          RU
        </button>
        <button
          onClick={() => setLanguage("en")}
          className="bg-white px-3 py-1 rounded"
        >
          EN
        </button>
      </div>

      <div className="py-16 px-6">
        <h1 className="text-3xl font-bold text-center text-white mb-12">
          {t.title}
        </h1>

        <div className="flex justify-center mb-10">
          <button
            onClick={() => setOpenCatalog(!openCatalog)}
            className="bg-red-600 text-white px-8 py-3 rounded-xl"
          >
            {t.searchBtn}
          </button>
        </div>

        {openCatalog && (
          <div className="flex flex-col items-center gap-8">
            {/* Search */}
            <div className="bg-red-600 p-6 rounded-xl w-[400px]">
              <input
                type="text"
                placeholder={t.placeholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full px-4 py-2 rounded"
              />
            </div>

            {/* Products */}
            {searchValue && (
              <div className="flex flex-wrap gap-10 justify-center">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow p-5 w-[420px]"
                    >
                      <div className="flex gap-4">
                        <img
                          src={product.images?.[0]}
                          alt=""
                          className="w-[240px] h-[320px] object-cover rounded"
                        />

                        <div className="flex flex-col gap-3">
                          {product.images?.slice(1).map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt=""
                              className="w-[100px] h-[100px] object-cover rounded"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-4">
                        <p>{product.title}</p>
                        <p className="font-bold">{product.code}</p>
                        <p className="text-gray-600 text-sm">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-white text-lg">{t.notFound}</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

     <div className="pt-[200px]" >
      <footer className="bg-blue-800  mt-20 text-white py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} className="w-8" alt="" />
              <p>{t.address}</p>
            </div>

            <p className="text-sm mt-3">
              Тошкент шахри Сергели тумани <br />
              ТХАЙ кўчаси 55 уй
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <img src={tel} className="w-6" alt="" />
              <p>{t.phone}</p>
            </div>

            <p className="text-sm mt-3">
              +998 (90) 176-21-54 <br />
              +998 (90) 188-99-59
            </p>
          </div>

          <div>
            <p>{t.contact}</p>

            <div className="flex gap-2 mt-3">
              <img src={pochta} className="w-5" alt="" />
              <p>komoluzbek@yahoo.com</p>
            </div>

            <div className="flex gap-2 mt-2">
              <img src={tg} className="w-5" alt="" />
              <p>@komol82</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;