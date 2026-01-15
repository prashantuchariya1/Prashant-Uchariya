function AboutPage() {
return(
    <div id="about" className=" flex flex-col gap-8 scroll-mt-20 mx-auto px-6 my-10 max-w-5xl font-normal text-base  ">
        


        <div>

        <p className="pb-2 text-2xl md:text-3xl text-center font-[500] tracking-wider capitalize ">About</p>
        <div className="shrink-0 bg-border h-[1px] w-full"></div>
        </div>
        
        <div>

        <p className="text-md font-normal text-muted-foreground mb-3 break-words hyphens-auto">Prashant Uchariya is a Software Engineer, Researcher, and dedicated problem solver with a passion for turning real-world challenges into intelligent, scalable solutions. His expertise spans full-stack development, system architecture and AI/ML, supported by multiple projects and research publications.

        </p>
        <p className="text-md font-normal text-muted-foreground mb-3 break-words hyphens-auto">Prashant has also worked with microstrip patch antenna for 5G and sub-6 GHz combining ML and antenna design. He thrives in collaborative environments, enjoys mentoring, and is always exploring better, smarter ways to build impactful technology.</p>
        </div>
        
    
    </div>
);
}

export default AboutPage;