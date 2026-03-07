import React, { useState } from "react";
import logo from "../src/assets/logo.png";
import tel from "../src/assets/tel.png";
import pochta from "../src/assets/pochta.png";
import tg from "../src/assets/tg.png";
import bg from "../src/assets/bg.jpg";

import bir from "../src/assets/bir.jpg";
import ik from "../src/assets/ik.jpg";
import uch from "../src/assets/uch.jpg";
import tor from "../src/assets/tor.jpg";

import besh from "../src/assets/besh.jpg";
import olti from "../src/assets/olti.jpg";
import yeti from "../src/assets/yeti.jpg";

import sakiz from "../src/assets/sakiz.jpg";
import toqiz from "../src/assets/toqiz.jpg";
import on from "../src/assets/on.jpg";
import onbir from "../src/assets/onbir.jpg";

import oniki from "../src/assets/oniki.jpg";
import onuch from "../src/assets/onuch.jpg";
import ontor from "../src/assets/ontor.jpg";

import onbesh from "../src/assets/onbesh.jpg";
import bob from "../src/assets/bob.jpg";
import yooy from "../src/assets/yooy.jpg";

import onsakiz from "../src/assets/onsakiz.jpg";
import ontoqiz from "../src/assets/ontoqiz.jpg";
import yig from "../src/assets/yig.jpg";
import yigbir from "../src/assets/yigbir.jpg";

import yigiki from "../src/assets/yigiki.jpg";
import yiguch from "../src/assets/yiguch.jpg";
import yigtor from "../src/assets/yigtor.jpg";

import yigbesh from "../src/assets/yigbesh.jpg";
import yigolti from "../src/assets/yigolti.jpg";
import yigyeti from "../src/assets/yigyeti.jpg";
import yigsakiz from "../src/assets/yigsakiz.jpg";

import yigtoqiz from "../src/assets/yigtoqiz.jpg";
import otiz from "../src/assets/otiz.jpg";

import otizbir from "../src/assets/otizbir.jpg";
import otiziki from "../src/assets/otiziki.jpg";
import otizuch from "../src/assets/otizuch.jpg";

import otiztor from "../src/assets/otiztor.jpg";
import otizbesh from "../src/assets/otizbesh.jpg";
import otizolti from "../src/assets/otizolti.jpg";

import otizyeti from "../src/assets/otizyeti.jpg";
import otizsakiz from "../src/assets/otizsakiz.jpg";
import otiztoqiz from "../src/assets/otiztoqiz.jpg";
import sor from "../src/assets/sor.jpg";
import sorbir from "../src/assets/sorbir.jpg";
import soriki from "../src/assets/soriki.jpg";

import soruch from "../src/assets/soruch.jpg";
import sortor from "../src/assets/sortor.jpg";
import sorbesh from "../src/assets/sorbesh.jpg";
import sorsakiz from "../src/assets/sorsakiz.jpg";

import sorolti from "../src/assets/sorolti.jpg";
import soryeti from "../src/assets/soryeti.jpg";
import sortoqiz from "../src/assets/sortoqiz.jpg";

import eli from "../src/assets/eli.jpg";
import elibir from "../src/assets/elibir.jpg";
import eliiki from "../src/assets/eliiki.jpg";

import eliuch from "../src/assets/eliuch.jpg";
import elitor from "../src/assets/elitor.jpg";
import elibesh from "../src/assets/elibesh.jpg";
import eliolti from "../src/assets/eliolti.jpg";

import dom from "../src/assets/dom.jpg";
import dombir from "../src/assets/dombir.jpg";
import domiki from "../src/assets/domiki.jpg";
import domuch from "../src/assets/domuch.jpg";

import eliyeti from "../src/assets/eliyeti.jpg";
import elisakiz from "../src/assets/elisakiz.jpg";


import elitoqiz from "../src/assets/elitoqiz.jpg";
import yet from "../src/assets/yet.jpg";
import yetbir from "../src/assets/yetbir.jpg";
import tuta from "../src/assets/tuta.jpg";


import yetiki from "../src/assets/yetiki.jpg";
import a from "../src/assets/a.jpg";

import p from "../src/assets/p.jpg";
import ph from "../src/assets/ph.jpg";
import pho from "../src/assets/pho.jpg";
import phot from "../src/assets/phot.jpg";

import yetuch from "../src/assets/yetuch.jpg";
import yettor from "../src/assets/yettor.jpg";
import yetbesh from "../src/assets/yetbesh.jpg";
import yetolti from "../src/assets/yetolti.jpg";

import yetyeti from "../src/assets/yetyeti.jpg";
import yetsakiz from "../src/assets/yetsakiz.jpg";
import yettoqiz from "../src/assets/yettoqiz.jpg";
import sak from "../src/assets/sak.jpg";

import sakbir from "../src/assets/sakbir.jpg";
import sakiki from "../src/assets/sakiki.jpg";
import sakuch from "../src/assets/sakuch.jpg";
import saktor from "../src/assets/saktor.jpg";

import sakbesh from "../src/assets/sakbesh.jpg";
import sakolti from "../src/assets/sakolti.jpg";
import sakyeti from "../src/assets/sakyeti.jpg";
import saksakiz from "../src/assets/saksakiz.jpg";

import saktoqiz from "../src/assets/saktoqiz.jpg";
import toq from "../src/assets/toq.jpg";
import toqbir from "../src/assets/toqbir.jpg";
import toqiki from "../src/assets/toqiki.jpg";

import toquch from "../src/assets/toquch.jpg";
import toqtor from "../src/assets/toqtor.jpg";
import toqbesh from "../src/assets/toqbesh.jpg";
import toqolti from "../src/assets/toqolti.jpg";

import toqyeti from "../src/assets/toqyeti.jpg";
import toqsakiz from "../src/assets/toqsakiz.jpg";
import toqtoqiz from "../src/assets/toqtoqiz.jpg";
import yuz from "../src/assets/yuz.jpg";

import yuzbir from "../src/assets/yuzbir.jpg";
import yuziki from "../src/assets/yuziki.jpg";

import yuzuch from "../src/assets/yuzuch.jpg";
import yuztor from "../src/assets/yuztor.jpg";
import yuzbesh from "../src/assets/yuzbesh.jpg";

import yuzolti from "../src/assets/yuzolti.jpg";
import yuzyeti from "../src/assets/yuzyeti.jpg";
import yuzsakiz from "../src/assets/yuzsakiz.jpg";
import yuztoqiz from "../src/assets/yuztoqiz.jpg";

import yuzon from "../src/assets/yuzon.jpg";
import yuzonbir from "../src/assets/yuzonbir.jpg";
import yuzoniki from "../src/assets/yuzoniki.jpg";
import yuzonuch from "../src/assets/yuzonuch.jpg";

import yuzontor from "../src/assets/yuzontor.jpg";
import yuzonbesh from "../src/assets/yuzonbesh.jpg";
import yuzonolti from "../src/assets/yuzonolti.jpg";
import yuzonyeti from "../src/assets/yuzonyeti.jpg";

import q from "../src/assets/q.jpg";
import w from "../src/assets/w.jpg";

import yuzonsakiz from "../src/assets/yuzonsakiz.jpg";
import yuzontoqiz from "../src/assets/yuzontoqiz.jpg";
import yuzyigbir from "../src/assets/yuzyigbir.jpg";

import yuzyiguch from "../src/assets/yuzyiguch.jpg";
import yuzyigtor from "../src/assets/yuzyigtor.jpg";
import yuzyigbesh from "../src/assets/yuzyigbesh.jpg";

import yuzyigolti from "../src/assets/yuzyigolti.jpg";
import yuzyigyeti from "../src/assets/yuzyigyeti.jpg";


import yuzyigsakiz from "../src/assets/yuzyigsakiz.jpg";
import yuzyigtoqiz from "../src/assets/yuzyigtoqiz.jpg";

import yuzotiz from "../src/assets/yuzotiz.jpg";
import yuzotizbir from "../src/assets/yuzotizbir.jpg";
import yuzotiziki from "../src/assets/yuzotiziki.jpg";

import yuzotizuch from "../src/assets/yuzotizuch.jpg";
import yuzotiztor from "../src/assets/yuzotiztor.jpg";
import yuzotizbesh from "../src/assets/yuzotizbesh.jpg";
import yuzotizolti from "../src/assets/yuzotizolti.jpg";


import bop from "../src/assets/bop.jpg";

import yuzotizsakiz from "../src/assets/yuzotizsakiz.jpg";
import yuzotiztoqiz from "../src/assets/yuzotiztoqiz.jpg";
import yuzsor from "../src/assets/yuzsor.jpg";
import yuzsorbir from "../src/assets/yuzsorbir.jpg";

import yuzsoriki from "../src/assets/yuzsoriki.jpg";
import yuzsoruch from "../src/assets/yuzsoruch.jpg";
import yuzsortor from "../src/assets/yuzsortor.jpg";
import yuzsorbesh from "../src/assets/yuzsorbesh.jpg";

import yuzsorolti from "../src/assets/yuzsorolti.jpg";
import yuzsoryeti from "../src/assets/yuzsoryeti.jpg";
import yuzsorsakiz from "../src/assets/yuzsorsakiz.jpg";
import yuzsortoqiz from "../src/assets/yuzsortoqiz.jpg";

import s from "../src/assets/s.jpg";
import x from "../src/assets/x.jpg";
import f from "../src/assets/f.jpg";

import yuzeli from "../src/assets/yuzeli.jpg";
import yuzelibir from "../src/assets/yuzelibir.jpg";
import yuzeliiki from "../src/assets/yuzeliiki.jpg";

import yuzeliuch from "../src/assets/yuzeliuch.jpg";
import yuzelitor from "../src/assets/yuzelitor.jpg";
import yuzelibesh from "../src/assets/yuzelibesh.jpg";

import yuzeliolti from "../src/assets/yuzeliolti.jpg";
import yuzeliyeti from "../src/assets/yuzeliyeti.jpg";
import yuzelisakiz from "../src/assets/yuzelisakiz.jpg";

import yuzelitoqiz from "../src/assets/yuzelitoqiz.jpg";
import yuzot from "../src/assets/yuzot.jpg";
import yuzotbir from "../src/assets/yuzotbir.jpg";
import yuzotiki from "../src/assets/yuzotiki.jpg";

import yuzotuch from "../src/assets/yuzotuch.jpg";
import yuzottor from "../src/assets/yuzottor.jpg";
import yuzotbesh from "../src/assets/yuzotbesh.jpg";
import yuzotolti from "../src/assets/yuzotolti.jpg";

import yuzotyeti from "../src/assets/yuzotyeti.jpg";
import yuzotsakiz from "../src/assets/yuzotsakiz.jpg";
import yuzottoqiz from "../src/assets/yuzottoqiz.jpg";
import yuzyet from "../src/assets/yuzyet.jpg";

import yuzyetbir from "../src/assets/yuzyetbir.jpg";
import yuzyetiki from "../src/assets/yuzyetiki.jpg";
import yuzyetuch from "../src/assets/yuzyetuch.jpg";
import yuzyettor from "../src/assets/yuzyettor.jpg";

import yuzyetbesh from "../src/assets/yuzyetbesh.jpg";
import yuzyetolti from "../src/assets/yuzyetolti.jpg";
import yuzyetyeti from "../src/assets/yuzyetyeti.jpg";
import yuzyetsakiz from "../src/assets/yuzyetsakiz.jpg";

import yuzyettoqiz from "../src/assets/yuzyettoqiz.jpg";
import yuzsak from "../src/assets/yuzsak.jpg";
import yuzsakbir from "../src/assets/yuzsakbir.jpg";
import yuzsakiki from "../src/assets/yuzsakiki.jpg";

import yuzsakuch from "../src/assets/yuzsakuch.jpg";
import yuzsaktor from "../src/assets/yuzsaktor.jpg";

import yuzsakbesh from "../src/assets/yuzsakbesh.jpg";
import yuzsakolti from "../src/assets/yuzsakolti.jpg";
import yuzsakyeti from "../src/assets/yuzsakyeti.jpg";
import yuzsaksakiz from "../src/assets/yuzsaksakiz.jpg";

import yuzsaktoqiz from "../src/assets/yuzsaktoqiz.jpg";
import yuztoq from "../src/assets/yuztoq.jpg";
import yuztoqbir from "../src/assets/yuztoqbir.jpg";
import yuztoqiki from "../src/assets/yuztoqiki.jpg";

import yuztoquch from "../src/assets/yuztoquch.jpg";
import yuztoqtor from "../src/assets/yuztoqtor.jpg";
import yuztoqbesh from "../src/assets/yuztoqbesh.jpg";
import yuztoqolti from "../src/assets/yuztoqolti.jpg";

import yuztoqyeti from "../src/assets/yuztoqyeti.jpg";
import yuztoqsakiz from "../src/assets/yuztoqsakiz.jpg";
import yuztoqtoqiz from "../src/assets/yuztoqtoqiz.jpg";
import ikiyuz from "../src/assets/ikiyuz.jpg";
import ikiyuzbir from "../src/assets/ikiyuzbir.jpg";
import ikiyuziki from "../src/assets/ikiyuziki.jpg";

import ikiyuzuch from "../src/assets/ikiyuzuch.jpg";
import ikiyuztor from "../src/assets/ikiyuztor.jpg";
import ikiyuzbesh from "../src/assets/ikiyuzbesh.jpg";
import ikiyuzolti from "../src/assets/ikiyuzolti.jpg";
import ikiyuzyeti from "../src/assets/ikiyuzsakiz.jpg";
import ikiyuztoqiz from "../src/assets/ikiyuziki.jpg";


const App = () => {
  const [openCatalog, setOpenCatalog] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [language, setLanguage] = useState("uz");

  const translations = {
    uz: {
      company: '"AKROM-USTA TEMIRCHI” MChJ',
      about: "Kompaniya haqida",
      services: "Xizmatlarimiz",
      catalog: "☰ Ehtiyot qismlar katalogi",
      searchTitle: "Part raqam bo‘yicha qidirish",
      placeholder: "Artikul raqamini kiriting...",
      notFound: "Mahsulot topilmadi",
      address: "Manzil",
      phone: "Telefon",
      contact: "Aloqa",
      rights: "Barcha huquqlar himoyalangan.",
    },
    ru: {
      company: '"AKROM-USTA TEMIRCHI” ООО',
      about: "О компании",
      services: "Наши услуги",
      catalog: "☰ Каталог запчастей",
      searchTitle: "Поиск по номеру детали",
      placeholder: "Введите номер артикула...",
      notFound: "Товар не найден",
      address: "Адрес",
      phone: "Телефон",
      contact: "Связь",
      rights: "Все права защищены.",
    },
    en: {
      company: '"AKROM-USTA TEMIRCHI” LLC',
      about: "About Company",
      services: "Our Services",
      catalog: "☰ Spare Parts Catalog",
      searchTitle: "Search by part number",
      placeholder: "Enter part number...",
      notFound: "Product not found",
      address: "Address",
      phone: "Phone",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  };

  // PRODUCTS
  const products = [
    {
      id: 1,
      code: "64.06103-0001",
      title: "Интеркулер",
      description:
        "Интеркулер (охладитель) в сборе с иннерфинами для MAN CLA. Оригинал - Индия",
      images: [bir, ik, uch, tor],
    },
    {
      id: 2,
      code: "64.43701-6001",
      title: "Передний амортизатор",
      description:
        "MAN CLA yuk mashinasi uchun oldi amortizator. Hindistonda ishlab chiqarilgan.",
      images: [besh, olti, yeti],
    },
    {
      id: 3,
      code: "64.04200-4001",
      title: "КОРОМЫСЛО ",
      description: " Индийский МАНга, оригинал Хиндистон ",
      images: [sakiz, toqiz, on, onbir],
    },
    {
      id: 4,
      code: "51.02410-6668",
      title: "Шатунный вкладыш ремонтный размер 0,25",
      description: "MAN CLA юк машинали моторига,  - MAN  Hindiston ",
      images: [oniki, onuch, ontor],
    },
    {
      id: 5,
      code: "64.08301-0062",
      title: "Хаво филтири қопқоғи.",
      description: "Хиндистонда ишлаб чиқарилган",
      images: [onbesh, bob, yooy],
    },
    {
      id: 6,
      code: "64.62640-6003",
      title: "Стеклоподъемник механ.",
      description: "передний левый Оригинал Индия",
      images: [onsakiz, ontoqiz, yig, yigbir],
    },
    {
      id: 7,
      code: "64.06201-0002",
      title: "Диффузор радиатора",
      description: "Хиндистонда ишлаб чиқарилган MAN / Neoplan original",
      images: [yigiki, yiguch, yigtor],
    },
    {
      id: 8,
      code: "64.02405-1001",
      title: "Шатун втулкаси",
      description: " оригинал Хиндистонда ишлаб чиқарилган",
      images: [yigbesh, yigolti, yigyeti, yigsakiz],
    },
    {
      id: 9,
      code: "64.06601-0302",
      title: "Лопасть вентилятора.",
      description: "Хиндистонда ишлаб чиқарилган MAN / Neoplan original",
      images: [yigtoqiz, otiz],
    },
    {
      id: 10,
      code: "64.04101-0001",
      title: "ВПУСКНОЙ КЛАПАН",
      description: "Индийский МАНга, оригинал Хиндистон",
      images: [otizbir, otiziki, otizuch],
    },
    {
      id: 11,
      code: "64.05503-0104",
      title: "Головка масляного фильтра",
      description: "MAN CLA юк машинали моторига, Оригинал",
      images: [otiztor, otizbesh, otizolti],
    },
    {
      id: 12,
      code: "64.06102-6001",
      title: "Бачок охлаждающей жидкости для грузовиков ",
      description: "Хиндистонда ишлаб чиқарилган",
      images: [otizyeti, otizsakiz, otiztoqiz, sorbir],
    },
    {
      id: 13,
      code: "64.04902.0001",
      title: "Сальник клапана двигателя",
      description: "Хиндистонда ишлаб чикарилган, Холати - янги",
      images: [soriki, soruch, sortor],
    },
    {
      id: 14,
      code: "82.32420-0012",
      title: "КОЛЬЦО СИНХРОНИЗАТОРА КПП",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [sorbesh, sorolti, soryeti, sorsakiz],
    },
    {
      id: 15,
      code: "81.32402-0111 - 81.32402-0102",
      title: "ПОДВИЖНАЯ МУФТА КПП",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [sortoqiz, eli, elibir, eliiki],
    },
    {
      id: 16,
      code: "81.32402-0166",
      title: "ПОДВИЖНАЯ МУФТА КПП",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [eliuch, elitor, elibesh, eliolti],
    },
    {
      id: 17,
      code: "81.32402-0111",
      title: "ПОДВИЖНАЯ МУФТА КПП",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [dom, dombir, domiki, domuch],
    },
    {
      id: 18,
      code: "1332656300",
      title: "Кольцо синхронизатора КПП",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [eliyeti, elisakiz, elitoqiz, tuta],
    },
    {
      id: 19,
      code: "0731.201.765",
      title: "Цилиндрический штифт",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [a, yet, yetbir, yetiki ],
    },
    {
      id: 20,
      code: "81.32425-0196",
      title: "КОНУС СИНХРОНИЗАТОРА КПП",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [p, ph, pho, phot ],
    },
    {
      id: 21,
      code: "1346.307.020",
      title: "Фиксирующий штифт",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yetuch, yettor, yetbesh, yetolti ],
    },
    {
      id: 22,
      code: "0730.260.753",
      title: "Передняя втулка В СБОРЕ",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yetyeti, yetsakiz, yettoqiz, sak ],
    },
    {
      id: 23,
      code: "0501.209.188",
      title: "Шариковый подшипник",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [sakbir, sakiki, sakuch, saktor ],
    },
    {
      id: 24,
      code: "0501.318.597",
      title: "СТОПИР ",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [sakbesh, sakolti, sakyeti, saksakiz ],
    },
    {
      id: 25,
      code: "0501.209.188",
      title: "Шариковый подшипник",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [saktoqiz, toq, toqbir, toqiki ],
    },
    {
      id: 26,
      code: "0501.209.212",
      title: "СТОПИР ",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [toquch, toqtor, toqbesh, toqolti ],
    },
    {
      id: 27,
      code: "0730.260.330",
      title: "Латунная втулка ",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [toqyeti, toqsakiz, toqtoqiz, yuz ],
    },
    {
      id: 28,
      code: "1324.307.116",
      title: "Стопорная деталь",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzbir, yuziki],
    },
    {
      id: 29,
      code: "0501.314.501",
      title: "Стопорный штифт",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzuch, yuztor, yuzbesh],
    },
    {
      id: 30,
      code: "324.307.194",
      title: "Пластина стопорная включения передач",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzolti, yuzyeti, yuzsakiz, yuztoqiz],
    },
    {
      id: 31,
      code: "51.05102-0085",
      title: "Масляный насос",
      description: "Туркияда ишлаб чиқарилган",
      images: [yuzon, yuzonbir, yuzoniki, yuzonuch],
    },
    {
      id: 32,
      code: "64.43722-0001",
      title: "Втулка кронштейна рессора",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzontor, yuzonbesh, yuzonolti, yuzonyeti],
    },
    {
      id: 33,
      code: "64.94099-0002",
      title: "Палец переднего рессора",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzonsakiz, yuzontoqiz, yuzyigbir,bop],
    },
    {
      id: 34,
      code: "64.94099-0003",
      title: "Палец переднего рессора задняя часть",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [ yuzyigtor,  yuzyigbesh,q,w],
    },
    {
      id: 35,
      code: "64.96601-0017",
      title: "Прокладка для маслоохладителя",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzyigsakiz, yuzyigtoqiz ],
    },
    {
      id: 36,
      code: "64.05901-0001",
      title: "Прокладка головки масляного фильтра",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [x, s, f],
    },
    {
      id: 37,
      code: "324.307.194",
      title: "Пластина стопорная включения передач",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzotiz, yuzotizbir, yuzotiziki],
    },
    {
      id: 38,
      code: "324.307.194",
      title: "Пластина стопорная включения передач",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzotizuch, yuzotiztor, yuzotizbesh, yuzotizolti],
    },
    {
      id: 39,
      code: "64.50610-6003",
      title: "РЫЧАГ ТОРМОЗА ЗАДНИЕ (Трещотка)",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzotizsakiz, yuzotiztoqiz, yuzsor, yuzsorbir],
    },
    {
      id: 40,
      code: "64.50610-6009",
      title: "Тормозной рычаг задний левый (Трещетка)",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzsoriki, yuzsoruch, yuzsortor, yuzsorbesh],
    },
    {
      id: 41,
      code: "64.50610-6008",
      title: "Тормозной рычаг задний правий (Трещетка)",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzsorolti, yuzsoryeti, yuzsorsakiz, yuzsortoqiz],
    },
    {
      id: 42,
      code: "51.01802-5470",
      title: "Трубка сапуна",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzeli, yuzelibir, yuzeliiki],
    },
    {
      id: 43,
      code: "51.01802-0335",
      title: "Трубка сапуна",
      description: "Хиндистонда ишлаб чикарилган",
      images: [  yuzeliuch, yuzelitor, yuzelibesh],
    },
    {
      id: 44,
      code: "64.32103-4006",
      title: "Механизм переключения передач для КПП",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [ yuzeliolti, yuzeliyeti, yuzelisakiz ],
    },
    {
      id: 45,
      code: "64.01201-0001",
      title: "Гильза цилиндра для дизельного двигателя ",
      description: "Хиндистонда ишлаб чикарилган",
      images: [ yuzelitoqiz, yuzot, yuzotbir, yuzotiki],
    },
    {
      id: 46,
      code: "64.01114-0001",
      title: "ПУСКОВАЯ ШАЙБА ВЕРХНЯЯ НИЖНЯЯ",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzotuch, yuzottor, yuzotbesh, yuzotolti],
    },
    {
      id: 47,
      code: "64.93410-0001",
      title: "Радиальный шарикоподшипник",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzotyeti, yuzotsakiz, yuzottoqiz, yuzyet],
    },
    {
      id: 48,
      code: "64.96502-6002",
      title: "Радиальное уплотнение вала",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzyetbir, yuzyetiki, yuzyetuch, yuzyettor],
    },
    {
      id: 49,
      code: "64.96101-0006",
      title: "Маслосъёмное кольцо (внутреннее)",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzyetbesh, yuzyetolti, yuzyetyeti, yuzyetsakiz],
    },
    {
      id: 50,
      code: "64.96101-0005",
      title: "Маслосъёмное кольцо (наружное)",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzyettoqiz, yuzsak, yuzsakbir, yuzsakiki],
    },
    {
      id: 51,
      code: "64.06101-6007",
      title: "Радиатор охлаждения",
      description: "Хиндистонда ишлаб чикарилган ",
      images: [yuzsakuch, yuzsaktor],
    },
    {
      id: 52,
      code: "64.05501-7227",
      title: "Масляный фильтр дизельного двигателя",
      description: "Оригинал Производства - Германия",
      images: [yuzsakbesh, yuzsakolti, yuzsakyeti, yuzsaksakiz],
    },
    {
      id: 53,
      code: "51.12503-0072",
      title: "Топливный фильтр дизельного двигателя",
      description: "Оригинал Производства - Австрия MAHLE",
      images: [yuzsaktoqiz, yuztoq, yuztoqbir, yuztoqiki],
    },
    {
      id: 54,
      code: "64.04301-0001",
      title: "ТОЛКАТЕЛЬ КЛАПАНА",
      description: "Германияда ишлаб чиқарилган",
      images: [yuztoquch, yuztoqtor, yuztoqbesh, yuztoqolti],
    },
    {
      id: 55,
      code: "51.26201-7236",
      title: "Стартер мотора для дизельного двигателя ",
      description: "Производства - Китай",
      images: [ yuztoqyeti, yuztoqsakiz, yuztoqtoqiz, ikiyuz, ikiyuzbir, ikiyuziki ],
    }
  ];

  // FILTER
  const filteredProducts = products.filter((product) =>
    product.code.toLowerCase().includes(searchValue.toLowerCase()),
  );
  const t = translations[language];
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      <div className="flex justify-end gap-4 mb-6">
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

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-center text-white mb-12">
            {t.company}
          </h1>

          {/* INFO CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mb-16"></div>

          {/* BUTTON */}
          <div className="flex gap-[50px] justify-center">
            <div className="text-black bg-white w-[160px] rounded-[10px] text-center h-[50px]">
              <p className="pt-[10px]">{t.about}</p>
            </div>

            <div className="flex justify-center mb-8">
              <button
                onClick={() => setOpenCatalog(!openCatalog)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl shadow-lg transition"
              >
                {t.catalog}
              </button>
            </div>

            <div className="text-black bg-white w-[160px] rounded-[10px] text-center h-[50px]">
              <p className="pt-[10px]">{t.services}</p>
            </div>
          </div>

          {/* SEARCH BLOCK */}
          {openCatalog && (
            <div className="flex flex-col items-center gap-8">
              <div className="bg-red-600 p-6 rounded-2xl shadow-xl w-[500px]">
                <div className="flex items-center gap-[50px] pb-[30px] ">
                  <div>
                    <p className="text-white">{t.searchTitle}</p>
                  </div>
                  <div className="  rounded-[10px] bg-slate-50">
                    <p className="text-gray-600 pt-[7px] pb-[7px] pl-[7px] pr-[7px]  ">
                      Part number
                    </p>
                  </div>
                </div>
                <div className="flex bg-white rounded-xl overflow-hidden">
                  <input
                    type="text"
                    placeholder={t.placeholder}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="flex-1 px-4 py-2 outline-none"
                  />
                  <button className="bg-red-700 px-4 text-white">🔍</button>
                </div>
              </div>

              {/* RESULTS */}
              {searchValue.trim() !== "" && (
                <div className="flex flex-wrap gap-10 justify-center">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-xl p-5 w-[430px]"
                      >
                        <div className="flex gap-5">
                          <img
                            className="w-[240px] h-[360px] object-cover rounded-xl"
                            src={product.images[0]}
                            alt=""
                          />

                          <div className="flex flex-col gap-4">
                            {product.images.slice(1).map((img, index) => (
                              <img
                                key={index}
                                className="w-[110px] h-[110px] object-cover rounded-xl"
                                src={img}
                                alt=""
                              />
                            ))}
                          </div>
                        </div>

                        

                        <div className="mt-4 border-t pt-3">
                          <p className="text-gray-700 text-sm">
                            {product.title}
                          </p>
                          <p className="font-bold text-lg text-black">
                            {product.code}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-white text-lg font-semibold">
                      {t.notFound}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="">
        <footer className="bg-blue-800 flex gap-[290px]  items-center h-[320px] ">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-10">
              {/* ADDRESS */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img className="w-8 h-8" src={logo} alt="logo" />
                  <p className="font-semibold text-lg">{t.address}</p>
                </div>
                <p className="text-sm text-blue-100 leading-6">
                  Тошкент шахри, Сергели тумани,
                  <br />
                  ТХАЙ кўчаси 55 уй.
                </p>
              </div>

              {/* PHONE */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img className="w-6 h-6" src={tel} alt="tel" />
                  <p className="font-semibold text-lg">{t.phone}</p>
                </div>
                <div className="text-sm text-blue-100 space-y-2">
                  <p>+998 (90) 176-21-54</p>
                  <p>+998 (90) 188-99-59</p>
                </div>
              </div>

              {/* CONTACT */}
              <div>
                <div className="font-semibold text-lg mb-4">{t.contact}</div>

                <div className="flex flex-col gap-3 text-sm text-blue-100">
                  <div className="flex items-center gap-3">
                    <img className="w-5 h-5" src={pochta} alt="email" />
                    <p>komoluzbek@yahoo.com</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <img className="w-5 h-5" src={tg} alt="telegram" />
                    <p>@komol82</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <img className="w-5 h-5" src={tg} alt="telegram" />
                    <p>@Atkham74</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom line */}
            <div className="border-t border-blue-600 mt-10 pt-6 text-center text-sm text-blue-200">
              © {new Date().getFullYear()} AKROM-USTA TEMIRCHI. {t.rights}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
