import React, { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown, FaRegUser } from "react-icons/fa";
import { IoIosListBox, IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import { PiCardsThree } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("uz");
  const { favorite } = useStore();
  const [darkMode, setDarkMode] = useState(() => {
    const saqlangan = localStorage.getItem("darkMode");
    return saqlangan ? saqlangan : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function changeLanguage() {
    if (language === "uz") {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    } else {
      i18n.changeLanguage("uz");
      setLanguage("uz");
    }
  }
  return (
    <div>
      <div className="bg-[#EFF2F5] flex dark:bg-dark">
        <div className="w-full">
          <button className="">
            <div className="flex bg-[#EFF2F5] dark:bg-dark justify- w-full py-1 px-[110px]">
              <CiLocationOn className="w-5 h-5 mt-[3px]" />
              <p className="underline ml-2 mb-1 font-[499] ">{t("tashkent")}</p>
              <p className="ml-5 font-[499]">{t("delivery points")}</p>
            </div>
          </button>
          <button className="dark:bg-dark bg-[]">
            <div className="flex gap-4 dark:bg-dark font-[500] ml-[195px]">
              <p className="text-[#7B54F5]">{t("become a seller")}</p>|
              <p className="text-[#7B54F5]">{t("open a delivery point")}</p>
              <p className="text-[#1E2026] dark:text-white">
                {t("question and answer")}
              </p>
              <p className="text-[#1E2026] dark:text-white">{t("my orders")}</p>
              <div className="flex">
                {/* <img
         src="https://cdn-icons-png.flaticon.com/512/5315/5315454.png"
         alt="" 
         className="w-5 h-5 flex mr-2"
         /> */}
                <button
                  className="text-black mr-5 dark:text-white flex ml-1"
                  onClick={changeLanguage}
                >
                  {language == "uz" ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5315/5315454.png"
                      alt=""
                      className="w-5 h-5 mr-1"
                    />
                  ) : (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/11654/11654475.png"
                      alt=""
                      className="w-5 h-5 mr-1"
                    />
                  )}
                  {language == "uz" ? "  O'zbek" : "Русский"}
                </button>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="flex mr-2 ml-[110px] gap-7">
          <Link to={"/"}>
            <button className="flex py-2 gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jybTGUSvxWxihbZMxwinqDCquA6PkMiC1Q&s"
                alt=""
                className="w-9 h-9 flex rounded-full"
              />
              <p className="text-[#7001FF] text-2xl font-semibold">
                uzum market
              </p>
            </button>
          </Link>
          <button>
            <div className="mb-12 py-[8px] px-[10px] gap-2 rounded-md bg-[#E4E5FF] flex justify-start items-center hover:bg-[#CECCFF] text-[#805ae8] text-lg text-center">
              <PiCardsThree
                size={25}
                className="flex mt-[3px]"
                color="#7F4DFF"
              />
              {t("catalog")}
            </div>
          </button>
        </div>
        <div className="flex border-solid border border-[#ddd] rounded-[5px] overflow-hidden w-[550px] h-[43px] mt-[7px]">
          <input
            type="text"
            placeholder="Mahsulotlar va turkumlar izlash"
            className="flex-1 border-none py-[7px] px-[10px]  outline-none"
          />
          <button className="bg-[#ECEFF2] border-none p-[10px] cursor-pointer flex">
            <span role="img" aria-label="search-icon">
              <GoSearch className="h-[20px] w-[60px]" color="black" />
            </span>
          </button>
        </div>
        <div className="ml-1">
          <Link className="flex items-center gap-2 text-lg" to={"/auth"}>
            <button className="mt-[7px] flex hover:bg-[#DDE0E5] py-[8px] px-2 gap-[6px] rounded-md">
              <FaRegUser className="h-5 mt-1" />
              <p className="">{t("login")}</p>
            </button>
          </Link>
        </div>
        <div className="ml-[6px]">
          <Link
            className="mt-[7px] flex hover:bg-[#DDE0E5] py-[10px] px-3 gap-[6px] rounded-md relative"
            to={"/favorite"}
          >
            <FiHeart className="h-6 " />
            {t("favorite")}
            <span className="absolute left-[115px] top-1 text-sm text-uzum">
              {favorite.length == 0 ? "" : favorite.length}
            </span>
          </Link>
        </div>
        <div className="ml-1">
          <Link
            className="mt-[7px] flex hover:bg-[#DDE0E5] py-[10px] px-2 gap-[6px] rounded-md"
            to={"/favourite"}
          >
            <BsCart3 className="h-6 " />
            <p className="">{t("basket")}</p>
          </Link>
          <div className="flex">
            <Link
              className="flex gap-2 text-lg items-center mt-[7px] hover:bg-[#DDE0E5] py-[10px] px-2 rounded-md"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <>
                  <BsSunFill className="size-5 flex" />
                  Light
                </>
              ) : (
                <>
                  <BsMoonFill className="size-5 flex" />
                  Dark
                </>
              )}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-4 dark:text-white">
        <div className="flex">
          <img
            src="https://static.uzum.uz/fast_categories/%20vyg.png"
            alt=""
            className="w-6 h-6 ml-[105px]"
          />
          <p className="font-medium ml-1 flex">{t("profit every day")}</p>
          <div className="flex gap-[26px] mt-[3px]">
            <button className="flex gap-[22px] ml-8  ">
              <p className="text-[#4d4f59] text-sm hover:underline hover:text-[#1E2026] dark:text-white flex">
                {t("electronics")}
              </p>
              <p className="text-[#4d4f59] text-sm hover:underline hover:text-[#1E2026] dark:text-white flex">
                {t("household appliances")}
              </p>
              <p className="text-[#4d4f59] text-sm hover:underline hover:text-[#1E2026] dark:text-white flex">
                {t("clothes")}
              </p>
              <p className="text-[#4d4f59] text-sm hover:underline hover:text-[#1E2026] dark:text-white flex">
                {t("shoes")}
              </p>
              <p className="text-[#4d4f59] text-sm hover:underline hover:text-[#1E2026] dark:text-white flex">
                {t("accessories")}
              </p>
              <p className="text-[#4d4f59] text-sm hover:underline hover:text-[#1E2026] dark:text-white flex">
                {t("beauty and care")}
              </p>
              <p className="text-[#4d4f59] text-sm hover:underline hover:text-[#1E2026] dark:text-white flex">
                {t("health")}
              </p>
              <p className="text-[#4d4f59] text-sm hover:underline hover:text-[#1E2026] dark:text-white flex">
                {t("household goods")}
              </p>
              <p className="text-[#4d4f59] text-sm hover:underline hover:text-[#1E2026] dark:text-white flex">
                {t("construction and maintenance")}
              </p>
              <p className="text-[#4d4f59] text-sm flex gap-1 hover:text-[#1E2026] dark:text-white">
                {t("more")}
                <SlArrowDown className="w-3 h-[10px] mt-[6px] white" />
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
