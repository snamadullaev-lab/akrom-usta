import { useState } from "react";
import logo from "./assets/logo.png";
import tel from "./assets/tel.png";
import pochta from "./assets/pochta.png";
import tg from "./assets/tg.png";
import bg from "./assets/bg.jpg";

import products from "./products";

import logoa from "../public/logoa.png";

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

import taj from "./assets/taj.png";
import mij from "./assets/mij.png";
import bren from "./assets/bren.png";
import tele from "./assets/tele.png";

import humo from "./assets/humo.png";
import uz from "./assets/uz.png";
import visa from "./assets/visa.png";

function App() {
  const [openCatalog, setOpenCatalog] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [language, setLanguage] = useState("uz");
  const [selectedImage, setSelectedImage] = useState(null);
  const [openAbout, setOpenAbout] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showAllLogos, setShowAllLogos] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const logos = [
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
  ];

  const translations = {
    uz: {
      title: "AKROM-USTA\nTEMIRCHI",
      searchBtn: "Ixtiyoriy raqam bo'yicha qidirish",
      mchj: "MChJ «AKROM-USTA-TEMIRCHI» Korxonaga 2021 yilda asos solingan.",
      n: "Asosiy faoliyatimiz:",
      nas: "Qishloq xojaligi Qurilish, Maxsus yuk tashish texnikalari uchun ehtiyot qisimlar, butlovchi vositalar hamda tamirlash uchun kerakli bolgan vositalarni yetkazib berish bilan shugullanadi.",
      ko: "Korxona faoliyatida eksport va import amaliyotlari, ulgurchi savdo, chakana savdo va yuqorida takidlangan ehtiyot qisimlarini Ozbekiston Respublikasining barcha hududlarida yetkazib berish xizmatlarini ham oz ichiga oladi.",
      biz: "Biz taklif etamiz",
      qish: "Qishloq xojalik texnikalari: Claas, Case ih, New holland, Sampo, Fendt, Massey ferguson, Valtra, John deere.",
      qur: "Qurilish texnikasi: Caterpillar, Komatsu ltd, John deere, XCMG group, Jany heavy industry, The volvo, Hitachi, The liebherr, Doosan group, Zoomlion heavy industry.",
      yuk: "Yuk tashuv avtomobillari: MAN, Volvo, Mercedes Benz, DAF, Iveco, Scania, ISUZU, Hyundai, Daewoo.",
      max: "Maxsus texnikalar: Liebherr, XCMG, Manitowoc, Zoomlion, Tadano, Sany.",
      avt: "Avtobuslar: MAN, ISUZU, Golden dragon, Yutong.",
      mijTitle: "Bizning mijozlarimiz",
      bar: "Barcha xaridorlar va buyurtmachilar bilan individual muloqot qilamiz. Ularning talablariga va buyurtmalarini oz vaqtida korib chiqgan holda oz takliflarimizni beramiz. Faoliyatimizda barcha turdagi korxonalar, yakka tartibdagi tadbirkorlar hamda jismoniy shaxslarga ham ozlariga qulay bolgan tolov turlarida xizmat korsatiladi.",
      xiz: "Bizning xizmatlarimiz",
      rivTitle: "Rivojlanish strategiyasi:",
      riv: "Jahonning ilgʻor ishlab chiqaruvchilari va mahsulot yetkazib beruvchi kompaniyalar bilan toʻgʻridan toʻgʻri ishlash. Tovarlarni zamonaviy logistika vositalaridan foydalangan holda yetkazib berish. Barcha xalqaro koʻrgazmalarda ishtirok etgan holda yangi hamkorlar va taminotchilarni safini kengaytirish.",
      pro: "Professional qismlarni tanlash",
      qay: "Qaysi detal kerakligini aniq bilmasangiz? Bizning ekspertlar jamoamiz yordam berishga tayyor! Qismlar mosligini va sifatini hisobga olgan holda maslahat beramiz. Vaqtingizni tejang va xatolardan saqlaning.",
      ato: "Avtoparklar uchun ulgurji yetkazib berish",
      bir: "Biz yirik mijozlar ehtiyojlarini tushunamiz va avtoparklar hamda transport kompaniyalari uchun maxsus shartlar taklif etamiz. Ulgurji narxlar, moslashuvchan chegirmalar va ustuvor jo'natish sizning biznesingiz samaradorligini oshiradi.",
      but: "Barchasini ko'rish",
      close: "Yopish",
      placeholder: "Detal raqamini kiriting...",
      notFound: "Mahsulot topilmadi",
      ishon: "ISHONCHLI TAMINOT, UZOQ MUDDATLI HAMKORLIK",
      d: "Yuk mashinalari uchun ehtiyot qismlar yetkazib beruvchi",
      k: "ishonchli hamkor. ISUZU, MAN, SCANIA va boshqa",
      l: "brendlar uchun sifatli zapchastlar.",
      taj: "TAJRIBA",
      address: "Manzil",
      bosh: "Bosh sahifa",
      kor: "Biz haqimizda",
      mijoz: "MIJOZ",
      bre: "BREND",
      xiz: "XIZMAT",
      bi: "Bizning xizmatlarimiz",
      phone: "Telefon",
      contact: "Aloqa",
    },
    ru: {
      title: "AKROM-USTA\nTEMIRCHI",
      searchBtn: "Поиск по произвольному номеру",
      mchj: "ООО «AKROM-USTA-TEMIRCHI» было основано в 2021 году.",
      n: "Наша основная деятельность:",
      nas: "Мы занимаемся поставкой запасных частей, комплектующих и оборудования для сельскохозяйственной, строительной и специальной грузовой техники.",
      ko: "Деятельность компании включает экспортно-импортные операции, оптовую и розничную торговлю, а также доставку вышеуказанных запасных частей по всей территории Республики Узбекистан.",
      biz: "Мы предлагаем",
      qish: "Сельскохозяйственная техника: Claas, Case IH, New Holland, Sampo, Fendt, Massey Ferguson, Valtra, John Deere.",
      qur: "Строительная техника: Caterpillar, Komatsu Ltd, John Deere, XCMG Group, Sany Heavy Industry, Volvo, Hitachi, Liebherr, Doosan Group, Zoomlion Heavy Industry.",
      yuk: "Грузовые автомобили: MAN, Volvo, Mercedes-Benz, DAF, Iveco, Scania, ISUZU, Hyundai, Daewoo.",
      max: "Специальная техника: Liebherr, XCMG, Manitowoc, Zoomlion, Tadano, Sany.",
      avt: "Автобусы: MAN, ISUZU, Golden Dragon, Yutong.",
      mijTitle: "Наши клиенты",
      bar: "Мы индивидуально подходим к каждому клиенту и заказчику. Учитывая их требования и своевременно обрабатывая заказы, мы предлагаем оптимальные решения. Мы обслуживаем предприятия всех видов, индивидуальных предпринимателей и физических лиц, предлагая удобные формы оплаты.",
      rivTitle: "Стратегия развития:",
      riv: "Прямое сотрудничество с ведущими мировыми производителями и поставщиками. Доставка товаров с использованием современных логистических решений. Расширение круга новых партнеров и поставщиков за счет участия во всех международных выставках.",
      pro: "Профессиональный подбор запчастей",
      qay: "Не уверены, какая деталь вам нужна? Наша команда экспертов готова помочь! Мы проконсультируем вас, исходя из совместимости и качества деталей. Экономьте время и избегайте ошибок.",
      ato: "Оптовые поставки для автостоянок",
      bir: "Мы понимаем потребности крупных клиентов и предлагаем специальные условия для автопарков и транспортных компаний. Оптовые цены, гибкие скидки и приоритетная отправка повысят эффективность вашего бизнеса.",
      but: "Посмотреть все",
      close: "Закрыть",
      placeholder: "Введите номер детали...",
      notFound: "Товар не найден",
      ishon: "Надежные поставки, долгосрочное партнерство",
      d: "Надежный партнер в поставке запасных частей для",
      k: "грузовых автомобилей. Качественные запасные",
      l: "части для ISUZU, MAN, SCANIA и других марок.",
      address: "Адрес",
      bosh: "Главная страница",
      taj: "ОПЫТ",
      mijoz: "КЛИЕНТ",
      bre: "БРЕНД",
      xiz: "УСЛУГА",
      kor: "О нас",
      bi: "Наши услуги",
      phone: "Телефон",
      contact: "Контакты",
    },
    en: {
      title: "AKROM-USTA\nTEMIRCHI",
      searchBtn: "Search by part number",
      mchj: "LLC AKROM-USTA-TEMIRCHI was established in 2021.",
      n: "Our main activity:",
      nas: "We specialize in supplying spare parts, components, and equipment for agricultural, construction, and specialized transport machinery.",
      ko: "The company's activities include export and import operations, wholesale and retail trade, as well as delivery of the above-mentioned spare parts across all regions of the Republic of Uzbekistan.",
      biz: "We offer",
      qish: "Agricultural machinery: Claas, Case IH, New Holland, Sampo, Fendt, Massey Ferguson, Valtra, John Deere.",
      qur: "Construction machinery: Caterpillar, Komatsu Ltd, John Deere, XCMG Group, Sany Heavy Industry, Volvo, Hitachi, Liebherr, Doosan Group, Zoomlion Heavy Industry.",
      yuk: "Trucks: MAN, Volvo, Mercedes-Benz, DAF, Iveco, Scania, ISUZU, Hyundai, Daewoo.",
      max: "Special machinery: Liebherr, XCMG, Manitowoc, Zoomlion, Tadano, Sany.",
      avt: "Buses: MAN, ISUZU, Golden Dragon, Yutong.",
      mijTitle: "Our Clients",
      bar: "We provide an individual approach to every customer and client. Taking into account their requirements and processing orders promptly, we offer optimal solutions. We serve all types of businesses, individual entrepreneurs, and private clients, offering convenient payment options.",
      rivTitle: "Development strategy:",
      riv: "Working directly with leading global manufacturers and suppliers. Delivering goods using modern logistics solutions. Expanding partnerships by participating in international exhibitions.",
      pro: "Professional parts selection",
      qay: "Not sure which part you need? Our team of experts is ready to help! We will advise you based on compatibility and quality. Save time and avoid mistakes.",
      ato: "Wholesale supply for fleets",
      bir: "We understand the needs of large clients and offer special conditions for fleets and transport companies. Wholesale prices, flexible discounts, and priority delivery will improve your business efficiency.",
      but: "See all",
      close: "Close",
      placeholder: "Enter part number...",
      notFound: "Product not found",
      ishon: "RELIABLE SUPPLY, LONG-TERM PARTNERSHIP",
      d: "A reliable partner in the supply of spare parts",
      k: "for trucks. Quality spare parts for ISUZU,",
      l: "MAN, SCANIA and other brands.",
      address: "Address",
      bosh: "Home page",
      taj: "EXPERIENCE",
      mijoz: "CLIENT",
      bre: "BREND",
      xiz: "SERVICE",
      kor: "About us",
      bi: "Our services",
      phone: "Phone",
      contact: "Contact",
    },
  };

  const t = translations[language];

  const filteredProducts = products.filter((product) =>
    product.code.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const goHome = () => {
    setOpenAbout(false);
    setOpenServices(false);
    setShowFooter(false);
    setOpenCatalog(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* NAVBAR */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-4">
          {/* LOGOS */}
          <div className="flex items-center gap-2  max-w-[70%]">
            <img src={logo4} className="h-8 object-contain flex-shrink-0" />
            <img src={logo5} className="h-8 object-contain flex-shrink-0" />
            <img src={logo6} className="h-8 object-contain flex-shrink-0" />
            <img src={logo8} className="h-8 object-contain flex-shrink-0" />
            <img src={logo9} className="h-8 object-contain flex-shrink-0" />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-white font-medium">
            <button onClick={goHome} className="hover:text-red-400 transition">
              {t.bosh}
            </button>

            <button
              onClick={() => {
                setOpenAbout(!openAbout);
                setOpenServices(false);
              }}
              className="hover:text-red-400 transition"
            >
              {t.kor}
            </button>

            <button
              onClick={() => {
                setOpenServices(!openServices);
                setOpenAbout(false);
              }}
              className="hover:text-red-400 transition"
            >
              {t.bi}
            </button>

            <button
              onClick={() => {
                setShowFooter(true);
                setOpenAbout(false);
                setOpenServices(false);
                setOpenCatalog(false);
              }}
              className="hover:text-red-400 transition"
            >
              {t.contact}
            </button>
          </div>

          {/* MOBILE BURGER */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden  text-white flex flex-col gap-4 px-6 py-6 z-30 relative">
            <button onClick={goHome}>{t.bosh}</button>

            <button
              onClick={() => {
                setOpenAbout(!openAbout);
                setOpenServices(false);
                setMenuOpen(false);
              }}
            >
              {t.kor}
            </button>

            <button
              onClick={() => {
                setOpenServices(!openServices);
                setOpenAbout(false);
                setMenuOpen(false);
              }}
            >
              {t.bi}
            </button>

            <button
              onClick={() => {
                setShowFooter(true);
                setOpenAbout(false);
                setOpenServices(false);
                setOpenCatalog(false);
                setMenuOpen(false);
              }}
            >
              {t.contact}
            </button>
          </div>
        )}
      </div>

      {/* LANGUAGE BUTTONS */}
      <div className="relative z-10 ">
        <div className="flex justify-end gap-2 mb-[100px]">
          {["uz", "ru", "en"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 rounded font-semibold transition ${
                language === lang
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* HERO SECTION */}
        {!(openAbout || openServices) && (
          <div className="flex flex-col pt-[70px] items-start pb-6 pl-6 sm:pl-10 md:pl-16 lg:pl-24">
            <div className="max-w-xl text-left">
              {/* Logo */}
              <img
                src={logoa}
                alt="logo"
                className="absolute top-[20px] left-[60px] w-[200px] sm:w-[260px] object-contain brightness-0 invert z-30"
              />

              {/* Tagline */}
              <h2
                className="text-white text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-2"
                style={{ fontFamily: "'Open Sans', sans-serif", opacity: 0.85 }}
              >
                <span className="inline-block w-[3px] h-[14px] bg-red-600 rounded flex-shrink-0"></span>
                {t.ishon}
              </h2>

              {/* Main Title */}
              <h1
                className="text-white font-bold uppercase mb-4"
                style={{
                  fontFamily: "'Oswald',  sans-serif",
                  fontSize: "clamp(40px, 7vw, 72px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.01em",
                  whiteSpace: "pre-line",
                }}
              >
                {t.title}
              </h1>

              {/* Description */}
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.82)", maxWidth: 420 }}
              >
                {t.d} <br />
                {t.k} <br />
                {t.l}
              </p>
            </div>
          </div>
        )}

        {/* SEARCH BUTTON */}
        <div className="flex flex-col pt-[20px] items-start pb-6 pl-6 sm:pl-10 md:pl-16 lg:pl-24">
          <button
            onClick={() => setOpenCatalog(!openCatalog)}
            className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
          >
            {t.searchBtn}
          </button>
        </div>

        {/* CATALOG / SEARCH */}
        {openCatalog && (
          <div className="flex flex-col items-center gap-8">
            <div className="w-full flex justify-center px-4">
              <div className="bg-red-600 p-4 sm:p-6 rounded-xl w-full max-w-[400px]">
                <input
                  type="text"
                  placeholder={t.placeholder}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full px-4 py-2 rounded"
                />
              </div>
            </div>

            {searchValue && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow p-4 w-full mx-auto transition hover:shadow-xl"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-[240px] h-[220px] sm:h-[280px] bg-gray-100 flex items-center justify-center rounded">
                          <img
                            src={product.images?.[0]}
                            alt=""
                            onClick={() =>
                              setSelectedImage(product.images?.[0])
                            }
                            className="max-w-full max-h-full object-contain cursor-pointer"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-2 overflow-x-auto sm:overflow-x-visible">
                          {product.images?.slice(1).map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt=""
                              onClick={() => setSelectedImage(img)}
                              className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-cover rounded cursor-pointer flex-shrink-0"
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
                  <div className="col-span-full flex justify-center">
                    <p className="text-white text-lg">{t.notFound}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* STATS ROW */}
      {/* STATS ROW */}
      {!(openAbout || openServices) && (
        <div className="flex flex-wrap ">
          <div className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <img src={taj} alt="" className="w-12 h-12 object-contain" />
            <div>
              <p className="text-2xl font-bold text-white">5+</p>
              <p className="text-white text-sm font-medium">{t.taj}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <img src={mij} alt="" className="w-12 h-12 object-contain" />
            <div>
              <p className="text-2xl font-bold text-white">1000+</p>
              <p className="text-white text-sm font-medium">{t.mijoz}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <img src={bren} alt="" className="w-12 h-12 object-contain" />
            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-white text-sm font-medium">{t.bre}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <img src={tele} alt="" className="w-12 h-12 object-contain" />
            <div>
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-white text-sm font-medium">{t.xiz}</p>
            </div>
          </div>
        </div>
      )}
      {/* ABOUT SECTION */}
      {openAbout && (
        <div className="max-w-4xl mx-auto backdrop-blur p-6 rounded-xl shadow-lg text-white mb-10 transition-all">
          <div className="w-[300px] h-[300px] mx-auto">
            <img src={logoa} alt="" className="w-full h-full object-contain" />
          </div>
          <p>{t.mchj}</p>
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
          <h3 className="font-bold mt-4">{t.mijTitle}</h3>
          <p>{t.bar}</p>
        </div>
      )}

      {/* SERVICES SECTION */}
      {openServices && (
        <div className="max-w-4xl mx-auto backdrop-blur p-6 rounded-xl shadow-lg text-white mb-10 transition-all">
          <div className="w-[300px] h-[300px] mx-auto">
            <img src={logoa} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-wrap pb-[30px] gap-1">
            <p className="font-bold">{t.rivTitle}</p>
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

      {/* IMAGE MODAL */}
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

      {/* LOGOS GRID (About / Services) */}
      {(openAbout || openServices) && (
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 pt-10">
          <div className="py-10 px-6 rounded-[20px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
              {(showAllLogos ? logos : logos.slice(0, 8)).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt=""
                  className="w-[120px] h-[90px] sm:w-[160px] sm:h-[120px] object-contain"
                />
              ))}
            </div>
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
      )}

      {/* FOOTER */}
      {showFooter && (
        <div className="mt-10">
          <footer className="bg-gray-800 text-white py-10">
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
                <div className="flex items-center gap-4 pt-[40px] pr-[20px]  p-2 rounded-xl shadow-sm w-max">
                  <img
                    src={humo}
                    alt="humo"
                    className="w-10 h-6 object-contain"
                  />
                  <img
                    src={uz}
                    alt="uzcard"
                    className="w-12 h-8 object-contain"
                  />
                  <img
                    src={visa}
                    alt="visa"
                    className="w-10 h-6 object-contain"
                  />
                </div>
              </div>
              <div>
                <p>{t.contact}</p>
                <div className="flex gap-2 mt-3">
                  <img src={pochta} className="w-5" alt="" />
                  <p>komoluzbek@yahoo.com</p>
                </div>
                <div className="flex gap-2 mt-2 items-center">
  <img src={tg} className="w-5" alt="" />

  <a
    href="https://t.me/komol82"
    target="_blank"
    className="hover:text-blue-500"
  >
    @komol82
  </a>
</div>

<div className="flex gap-2 mt-2 items-center">
  <img src={tg} className="w-5" alt="" />

  <a
    href="https://t.me/Atkham74"
    target="_blank"
    className="hover:text-blue-500"
  >
    @Atkham74
  </a>
</div>
                 <a href="https://t.me/manzapchast" className="flex mt-2 items-center gap-2" target="_blank">
                 
  <img src={tg} className="w-5"  alt="telegram" />
  Telegram kanal
</a> 
              </div>
             
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
