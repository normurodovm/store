import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Hero } from "../pages/home/hero";
import { Search } from "../components/search";
import { useState } from "react";
import { Modal } from "../components/modal";
import { Banner } from "../pages/home/banner";
import Slider from "react-slick";
import { HeaderIcon1 } from "../icons/header-icon1";
import { HeaderIcon2 } from "../icons/header-icon2";
import { HeaderIcon3 } from "../icons/header-icon3";

export const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="container">
      <header>
        <Header />
      </header>
        <div className="flex justify-between items-center py-[17px]">
          <Hero />
          <button onClick={openModal} className="py-[9px] px-[45px] text-center bg-yellow-400 rounded-md">Каталог</button>
          <Search />
          <div className="flex gap-8">
            <button>
            <HeaderIcon1/>
            </button>
            <button>
            <HeaderIcon2/>
            </button>
            <button>
            <HeaderIcon3/>
            </button>
          </div>
        </div>
        </div>
      <main>
        <Outlet />
      </main>



      <Modal isOpen={isModalOpen} onClose={closeModal}>

      </Modal>
    </div>
  );
};
