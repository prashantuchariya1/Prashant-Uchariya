import { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import PortfolioPopupCard from "../components/PortfolioPopupCard";
import {AchievementsData, ProjectsData, NotebookData, ArticlesData, YoutubeData, ResearchData} from "../data/portfolioData";
import ResearchCard from "../components/ResearchCard";

function Portfolio() {
  const [open, setOpen] = useState(false);
  const [popData, setPopData] = useState({});

  const toggleOpen = () =>{
    setOpen(prev => !prev);
  }

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed top-0 left-0 inset-0 bg-black/40 z-30 "
        >
          <PortfolioPopupCard data={popData} onToggle={toggleOpen}/>
        </div>
      )}
      <div  className=" mx-auto my-10 px-6 max-w-5xl">
        <p className="pb-2 text-2xl md:text-3xl text-center font-[500] tracking-wider capitalize ">
          Portfolio
        </p>
        <div
        data-orientation="horizontal"
        role="none"
        class="shrink-0 bg-border h-[1px] w-full"
      ></div>
        <p id="achievements" className="scroll-mt-20 uppercase font-[400] text-center tracking-widest my-6">Achievements</p>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {console.log("popData:", popData)}
          {console.log("open:", open)}
          {AchievementsData.map((item) => (
            <button
              className=""
              onClick={() => {
                setPopData(item);
                setOpen(true);
              }}
            >
              <PortfolioCard key={item.id} achievement={item} />
            </button>
          ))}
        </div>
        <p id="projects" className="scroll-mt-20 uppercase font-[400] text-center tracking-widest my-6">Projects</p>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {console.log("popData:", popData)}
          {console.log("open:", open)}
          {ProjectsData.map((item) => (
            <button
              className=""
              onClick={() => {
                setPopData(item);
                setOpen(true);
              }}
            >
              <PortfolioCard key={item.id} achievement={item} />
            </button>
          ))}
        </div>
        {/* <p id="notebook" className="scroll-mt-20 uppercase font-[400] text-center tracking-widest my-6">Notebooks & Datasets</p>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {console.log("popData:", popData)}
          {console.log("open:", open)}
          {NotebookData.map((item) => (
            <button
              className=""
              onClick={() => {
                setPopData(item);
                setOpen(true);
              }}
            >
              <PortfolioCard key={item.id} achievement={item} />
            </button>
          ))}
        </div> */}
        {/* <p id="articles" className=" scroll-mt-20 uppercase font-[400] text-center tracking-widest my-6">Articles</p>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {console.log("popData:", popData)}
          {console.log("open:", open)}
          {ArticlesData.map((item) => (
            <button
              className=""
              onClick={() => {
                setPopData(item);
                setOpen(true);
              }}
            >
              <PortfolioCard key={item.id} achievement={item} />
            </button>
          ))}
        </div> */}
        {/* <p id="youtube" className="scroll-mt-20 uppercase font-[400] text-center tracking-widest my-6">YouTube</p>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {console.log("popData:", popData)}
          {console.log("open:", open)}
          {YoutubeData.map((item) => (
            <button
              className=""
              onClick={() => {
                setPopData(item);
                setOpen(true);
              }}
            >
              <PortfolioCard key={item.id} achievement={item} />
            </button>
          ))}
        </div> */}
        

        
        <p id="researchpaper" className="scroll-mt-20 uppercase font-[400] text-center tracking-widest my-6">Research Paper</p>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 ">
          {console.log("popData:", popData)}
          {console.log("open:", open)}
          {ResearchData.map((item) => (
            <button
              className=""
              onClick={() => {
                setPopData(item);
                setOpen(true);
              }}
            >
              <ResearchCard key={item.id} paper={item} />
            </button>
          ))}
        </div>
        

        
      </div>
    </>
  );
}

export default Portfolio;
