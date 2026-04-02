import React, { useState } from "react";
import logo from "./assets/logo.png";
import tel from "./assets/tel.png";
import pochta from "./assets/pochta.png";
import tg from "./assets/tg.png";
import bg from "./assets/bg.jpg";

import products from "./products";

import logoa from "./assets/logoa.png";

import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";
import logo7 from "./assets/logo7.png";
import logo8 from "./assets/logo8.png";
import logo9 from "./assets/logo9.png";
import logo10 from "./assets/logo10.png";
import logo11 from "./assets/logo11.png";
import logo12 from "./assets/logo12.png";
import logo13 from "./assets/logo13.png";
import logo14 from "./assets/logo14.png";
import logo15 from "./assets/logo15.png";
import logo16 from "./assets/logo16.png";
import logo17 from "./assets/logo17.png";
import logo18 from "./assets/logo18.png";
import logo19 from "./assets/logo19.png";
import logo20 from "./assets/logo20.png";
import logo21 from "./assets/logo21.png";
import logo22 from "./assets/logo22.png";
import logo23 from "./assets/logo23.png";


function App() {
  const [openCatalog, setOpenCatalog] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [language, setLanguage] = useState("uz");
  const [selectedImage, setSelectedImage] = useState(null);

  const logos = [
  logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11,
  logo12, logo13, logo14, logo15, logo16,
  logo17, logo18, logo19, logo20, logo21,
  logo22, logo23
];

  const translations = {
    uz: {
      title: "AKROM-USTA TEMIRCHI",
      searchBtn: "Ixtiyoriy raqam bo‘yicha qidirish",
      Aboutus: "Korxona haqida",
      mchj: "MChJ «AKROM-USTA-TEMIRCHI» Korxonaga 2021 yilda asos solingan.",
      n: "Asosiy faoliyatimiz:",
      nas: "Qishloq xojaligi Qurilish, Maxsus yuk tashish texnikalari uchun ehtiyot qisimlar, butlovchi vositalar hamda tamirlash uchun kerakli bolgan vositalarni yetkazib berish bilan shugullanadi.",
      ko: "Korxona faoliyatida eksport va import amaliyotlari, ulgurchi savdo, chakana savdo va yuqorida takidlangan ehtiyot qisimlarini Ozbekiston Respublikasining barcha hududlarida yetkazib berish xizmatlarini ham oz ichiga oladi.0",
      biz: "Biz taklif etamiz",
      qish: "Qishloq xojalik texnikalari: Claas, Case ih, New holland, Sampo, Fendt, Massey ferguson, Valtra, John deere.",
      qur: "Qurilish texnikasi: Caterpillar, Komatsu ltd, John deere, XCMG group, Jany heavy industry, The volvo, Hitachi, The liebherr, Doosan group, Zoomlion heavy industry.",
      yuk: "Yuk tashuv avtomobillari: MAN, Volvo, Mercedes Benz, DAF, Iveco, Scania, ISUZU, Hyundai, Daewoo.",
      max: "Maxsus texnikalar: Liebherr, XCMG, Manitowoc, Zoomlion, Tadano, Sany.",
      avt: "Avtobuslar: MAN, ISUZU, Golden dragon, Yutong.",
      mij: "Bizning mijozlarimiz",
      bar: " Barcha xaridorlar va buyurtmachilar bilan individual muloqot qilamiz. Ularning talablariga va buyurtmalarini oz vaqtida korib chiqgan holda oz takliflarimizni beramiz. Faoliyatimizda barcha turdagi korxonalar, yakka tartibdagi tadbirkorlar hamda jismoniy shaxslarga ham ozlariga qulay bolgan tolov turlarida xizmat korsatiladi.",

      xiz: "Bizning xizmatlarimiz",

      l: "Rivojlanish strategiyasi:",
      riv: " Jahonning ilgʻor ishlab chiqaruvchilari va mahsulot yetkazib beruvchi kompaniyalar bilan toʻgʻridan toʻgʻri ishlash. Tovarlarni zamonaviy logistika vositalaridan foydalangan holda yetkazib berish. Barcha xalqaro koʻrgazmalarda ishtirok etgan holda yangi hamkorlar va taminotchilarni safini kengaytirish.",

      pro: "Professional qismlarni tanlash",
      qay: "Qaysi detal kerakligini aniq bilmasangiz? Bizning ekspertlar jamoamiz yordam berishga tayyor! Qismlar mosligini va sifatini hisobga olgan holda maslahat beramiz. Vaqtingizni tejang va xatolardan saqlaning.",

      ato: "Avtoparklar uchun ulgurji yetkazib berish",
      bir: "Biz yirik mijozlar ehtiyojlarini tushunamiz va avtoparklar hamda transport kompaniyalari uchun maxsus shartlar taklif etamiz. Ul​gurji narxlar, moslashuvchan chegirmalar va ustuvor jo‘natish sizning biznesingiz samaradorligini oshiradi.",
      but: "Barchasini ko'rish",
      close: "Yopish",
      placeholder: "Detal raqamini kiriting...",
      notFound: "Mahsulot topilmadi",
      address: "Manzil",
      phone: "Telefon",
      contact: "Aloqa",
    },
    ru: {
      title: "AKROM-USTA TEMIRCHI",
      searchBtn: "Поиск по произвольному номеру",
      Aboutus: "О компании",
      mchj: "ООО «AKROM-USTA-TEMIRCHI» было основано в 2021 году.",
      n: "Наша основная деятельность:",
      nas: " Мы занимаемся поставкой запасных частей, комплектующих и оборудования для сельскохозяйственной, строительной и специальной грузовой техники.",
      ko: "Деятельность компании включает экспортно-импортные операции, оптовую и розничную торговлю, а также доставку вышеуказанных запасных частей по всей территории Республики Узбекистан.",
      biz: "Мы предлагаем",
      qish: "Сельскохозяйственная техника: Claas, Case IH, New Holland, Sampo, Fendt, Massey Ferguson, Valtra, John Deere.",
      qur: "Строительная техника: Caterpillar, Komatsu Ltd, John Deere, XCMG Group, Sany Heavy Industry, Volvo, Hitachi, Liebherr, Doosan Group, Zoomlion Heavy Industry.",
      yuk: "Грузовые автомобили: MAN, Volvo, Mercedes-Benz, DAF, Iveco, Scania, ISUZU, Hyundai, Daewoo.",
      max: "Специальная техника: Liebherr, XCMG, Manitowoc, Zoomlion, Tadano, Sany.",
      avt: "Автобусы: MAN, ISUZU, Golden Dragon, Yutong.",
      mij: "Наши клиенты",
      bar: "Мы индивидуально подходим к каждому клиенту и заказчику. Учитывая их требования и своевременно обрабатывая заказы, мы предлагаем оптимальные решения. Мы обслуживаем предприятия всех видов, индивидуальных предпринимателей и физических лиц, предлагая удобные формы оплаты.",
      xiz: "Наши услуги",

      l: "Стратегия развития:",
      riv: "Прямое сотрудничество с ведущими мировыми производителями и поставщиками. Доставка товаров с использованием современных логистических решений. Расширение круга новых партнеров и поставщиков за счет участия во всех международных выставках.",
      pro: "Профессиональный подбор запчастей",
      qay: "Не уверены, какая деталь вам нужна? Наша команда экспертов готова помочь! Мы проконсультируем вас, исходя из совместимости и качества деталей. Экономьте время и избегайте ошибок.",
      ato: "Оптовые поставки для автостоянок",
      bir: "Biz yirik mijozlar ehtiyojlarini tushunamiz va avtoparklar hamda transport kompaniyalari uchun maxsus shartlar taklif etamiz. Ul​gurji narxlar, moslashuvchan chegirmalar va ustuvor jo‘natish sizning biznesingiz samaradorligini oshiradi.",
      but: "Посмотреть все",
      close: "Закрыть", 
      placeholder: "Введите номер детали...",
      notFound: "Товар не найден",
      address: "Адрес",
      phone: "Телефон",
      contact: "Контакты",
    },
    en: {
      title: "AKROM-USTA TEMIRCHI",
      searchBtn: "Search by part number",
      Aboutus: "About the Company",
      mchj: "LLC “AKROM-USTA-TEMIRCHI” was established in 2021.",
      n: "Our main activity:",
      nas: "We specialize in supplying spare parts, components, and equipment for agricultural, construction, and specialized transport machinery.",
      ko: "The company’s activities include export and import operations, wholesale and retail trade, as well as delivery of the above-mentioned spare parts across all regions of the Republic of Uzbekistan.",
      biz: "We offer",
      qish: "Agricultural machinery: Claas, Case IH, New Holland, Sampo, Fendt, Massey Ferguson, Valtra, John Deere.",
      qur: "Construction machinery: Caterpillar, Komatsu Ltd, John Deere, XCMG Group, Sany Heavy Industry, Volvo, Hitachi, Liebherr, Doosan Group, Zoomlion Heavy Industry.",
      yuk: "Trucks: MAN, Volvo, Mercedes-Benz, DAF, Iveco, Scania, ISUZU, Hyundai, Daewoo.",
      max: "Special machinery: Liebherr, XCMG, Manitowoc, Zoomlion, Tadano, Sany.",
      avt: "Buses: MAN, ISUZU, Golden Dragon, Yutong.",
      mij: "Our Clients",
      bar: "We provide an individual approach to every customer and client. Taking into account their requirements and processing orders promptly, we offer optimal solutions. We serve all types of businesses, individual entrepreneurs, and private clients, offering convenient payment options.",
      xiz: "Our services",
      l: "Development strategy:",
      riv: "Working directly with leading global manufacturers and suppliers. Delivering goods using modern logistics solutions. Expanding partnerships by participating in international exhibitions.",
      pro: "Professional parts selection",
      qay: "Not sure which part you need? Our team of experts is ready to help! We will advise you based on compatibility and quality. Save time and avoid mistakes.",
      ato: "Wholesale supply for fleets",
      bir: "We understand the needs of large clients and offer special conditions for fleets and transport companies. Wholesale prices, flexible discounts, and priority delivery will improve your business efficiency.",
      but: "See all",
      close: "Close",
      placeholder: "Enter part number...",
      notFound: "Product not found",
      address: "Address",
      phone: "Phone",
      contact: "Contat",
    },
  };

  const t = translations[language];

  const filteredProducts = products.filter((product) =>
    product.code.toLowerCase().includes(searchValue.toLowerCase()),
  );
const [showAllLogos, setShowAllLogos] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <div
  className="min-h-screen bg-no-repeat bg-cover bg-center relative"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10">
    {/* HAMMA CONTENT SHU ICHIDA */}
      {/* LANG */}
      <div className="flex justify-end gap-2 p-4">
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

      <div className="py-10 px-4 sm:px-6 md:px-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10">
          {t.title}
        </h1>

        {/* BUTTON */}
        <div className="flex justify-center pb-[30px] ">
          <button
            onClick={() => setOpenCatalog(!openCatalog)}
            className="bg-red-600 text-white px-6 py-3 rounded-xl"
          >
            {t.searchBtn}
          </button>
        </div>

        {openCatalog && (
          <div className="flex flex-col items-center gap-8">
            {/* SEARCH */}
            <div className="bg-red-600 p-4 sm:p-6 rounded-xl w-full sm:w-[400px]">
              <input
                type="text"
                placeholder={t.placeholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full px-4 py-2 rounded"
              />
            </div>

            {/* PRODUCTS */}
            {searchValue && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow p-4 w-full max-w-[420px] mx-auto transition hover:shadow-xl"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* MAIN IMAGE */}
                        <div className="w-full sm:w-[240px] h-[250px] sm:h-[320px] bg-gray-100 flex items-center justify-center rounded">
                          <img
                            src={product.images?.[0]}
                            alt=""
                            onClick={() =>
                              setSelectedImage(product.images?.[0])
                            }
                            className="max-w-full max-h-full object-contain cursor-pointer"
                          />
                        </div>

                        {/* SMALL IMAGES */}
                        <div className="flex sm:flex-col gap-2 overflow-x-auto">
                          {product.images?.slice(1).map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt=""
                              onClick={() => setSelectedImage(img)}
                              className="w-[80px] h-[80px] object-cover rounded cursor-pointer"
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
                  <p className="text-white w-[10000px] pl-[620px] flex text-lg">{t.notFound}</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-center gap-6">
        {/* ABOUT BUTTON */}

        <div className="pb-[20px]">
          <button
            onClick={() => setOpenAbout(!openAbout)}
            className="bg-red-600  text-white px-6 py-3 rounded-xl"
          >
            {t.Aboutus}
          </button>
        </div>

        {/* SERVICES BUTTON */}
        <div>
          <button
            onClick={() => setOpenServices(!openServices)}
            className="bg-red-600 text-white px-6 py-3 rounded-xl"
          >
            {t.xiz}
          </button>
        </div>
      </div>

      {/* About Content */}
      {openAbout && (
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg text-gray-800 mb-10 transition-all">
          <div className="w-[300px] h-[300px]  mx-auto">
            <img src={logoa} alt="" className="w-full h-full object-contain" />
          </div>
          <p>{t.mchj}</p>
          <h3 className="font-semibold">{t.asos}</h3>
          <p>
            <span className="font-bold mr-2">{t.n}</span>
            {t.nas}
          </p>

          <p className="mb-3">{t.ko}</p>

          <h3 className="font-semibold mt-4">{t.biz}</h3>
          <p className="mb-2">{t.qish}</p>
          <p className="mb-2">{t.qur}</p>
          <p className="mb-2">{t.yuk}</p>
          <p className="mb-2">{t.max}</p>
          <p className="mb-2">{t.avt}</p>

          <h3 className="font-semibold font-bold text-black mt-4">{t.mij}</h3>
          <p>{t.bar}</p>

          {/* Image at the bottom */}
        </div>
      )}

      {/* Services Content */}
      {openServices && (
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg text-gray-800 mb-10 transition-all">
          <div className="w-[300px] h-[300px]  mx-auto">
            <img src={logoa} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-wrap pb-[30px] gap-1">
            <p className="font-bold">{t.l}</p>
            <p>{t.riv}</p>
          </div>

          <div className="pb-[30px]">
            <p className="font-bold">{t.pro}</p>
            <p>{t.qay}</p>
          </div>
          <div>
            <p className="font-bold">{t.ato}</p>
            <p>{t.bir}</p>
          </div>
        </div>
      )}

      {/* MODAL IMAGE */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-[90%] max-h-[90%] object-contain rounded"
          />
        </div>
      )}
<div className="pl-[200px] pt-[50px] pr-[200px]">
<div className="bg-white py-10 rounded-[20px] pl">
  
  {/* LOGO GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
    {(showAllLogos ? logos : logos.slice(0, 8)).map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt=""
        className="w-[160px] h-[120px] object-contain"
      />
    ))}
  </div>

  {/* BUTTON */}
  <div className="flex justify-center mt-8">
   <button
  onClick={() => setShowAllLogos(!showAllLogos)}
  className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
>
  {showAllLogos ? t.close : t.but}
</button>
  </div>

</div>
   </div>    
      {/* FOOTER */}
      <div className="mt-[400px]">
        <footer className="bg-gray-800     text-white py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
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
              <div className="flex gap-2 mt-2">
                <img src={tg} className="w-5" alt="" />
                <p>@Atkham74</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    
      </div>
</div>
  );
}

export default App;