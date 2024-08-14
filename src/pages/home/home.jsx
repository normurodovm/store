import { Header } from "../../components/header";
import { Search } from "../../components/search";
import SimpleSlider from "../../components/slider";
import { Add } from "./adds";
import { Banner } from "./banner";
import { Catalog } from "./catalog";
import { Hero } from "./hero";
import {Phones} from "./phones"
import { PhonesCard } from "./phones-card";

export const Home = () => {
    return<>
    <Banner/>
    <div className="pt-8">
    <Catalog/>
    </div>
    <div className="pt-8 container mb-6">
    <h2 className="font-semibold text-[24px]">
        Смартфоны и планшеты  
    </h2>
    <div className="p-8">
    <Phones/>
    </div>
    </div>
    <div className="bg-green-300">
        <div className="container">
        <h1 className="mb-[24px] mt-[16px] font-semibold text-[24px]">Акции</h1>
        </div>
    <Add/>
    </div>
    </>
}