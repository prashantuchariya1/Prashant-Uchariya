import ieee from '../assets/ieee.png'
import iiitm from '../assets/iiitm.jpg'
function Experience() {
  return (
    <div id="experience" className=" scroll-mt-20 mx-auto my-10 px-6 max-w-5xl">
      <p className="pb-2 text-2xl md:text-3xl text-center font-[500] tracking-wider capitalize  ">Experience</p>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full"
      ></div>

      <div className="flex mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          // CHANGE: Replaced 'text-4xl' with 'w-7 h-7 shrink-0'
          className="w-7 h-7 mt-1 hidden md:block shrink-0" 
          // CHANGE: Replaced '1em' with '24' to match others
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd" // Note: React uses camelCase for fill-rule
            d="M10.276 2.255c.083-.005.171-.005.285-.005h2.879c.113 0 .201 0 .285.005a2.75 2.75 0 0 1 2.385 1.72c.031.077.06.16.095.268l.003.01c.084.224.275.479.543.683q.045.034.09.064c2.153.003 3.278.042 4.052.673q.24.195.434.434C22 6.934 22 8.159 22 10.609c0 .622 0 .932-.15 1.175a1 1 0 0 1-.1.134c-.19.214-.487.303-1.082.482L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.668-1.4c-.595-.179-.893-.268-1.082-.482a1 1 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502q.195-.24.434-.434c.775-.63 1.899-.67 4.053-.673q.045-.03.09-.064c.267-.204.459-.46.542-.683c.038-.114.066-.2.098-.279a2.75 2.75 0 0 1 2.385-1.719m4.543 2.563q.035.093.08.182H9.101q.043-.09.08-.182v-.003l.005-.01l.005-.012l.005-.012l.003-.01l.002-.005l.004-.012l.004-.012l.002-.006l.003-.008l.002-.007l.002-.006c.039-.116.051-.153.063-.181a1.25 1.25 0 0 1 1.084-.782c.032-.002.072-.002.215-.002h2.838c.143 0 .183 0 .215.002c.482.03.904.334 1.085.782c.01.028.023.063.062.181l.002.006l.002.007l.003.008l.002.006l.004.012l.004.012l.002.005l.004.01l.004.012l.005.012l.004.01zM14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5m-5.99 2.87l-5.004-1.502c.03 3.114.212 5.983 1.312 6.96C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.1-.977 1.282-3.846 1.312-6.96l-5.005 1.501a2 2 0 0 1-1.246 1.65l-.7.28a5.5 5.5 0 0 1-4.086 0l-.7-.28a2 2 0 0 1-1.246-1.65"
            clipRule="evenodd" // React uses camelCase for clip-rule
          ></path>
        </svg>

        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={ieee} className='w-[30px] h-[30px] md:w-[36px] md:h-[36px] rounded-sm cursor-pointer' alt="" />
            <p className="pt-1.5 md:pt-0.5 text-md md:text-xl font-semibold text-primary capitalize hover:underline inline-flex gap-2 items-center justify-start ">
              IEEE-Student Branch
            </p>
          </div>
          <p className="text-md md:text-lg text-muted-foreground capitalize">
            Full Stack Developer - Internship
          </p>
          <p className="text-sm text-muted-foreground italic">
            Remote, India
          </p>
          <p className="mb-1 text-xs font-normal leading-none text-muted-foreground">
            15 May, 2025 - present
          </p>
     
          <ul className="text-md font-normal text-muted-foreground mb-3 break-words hyphens-auto space-y-2 list-disc list-inside">
  <li>Revamped and developed 5+ responsive UI pages, ensuring a seamless user experience across devices.</li>
  <li>Created APIs and designed database schemas for Users, Blogs, Events, and Announcements enabling efficient data management.</li>
  <li>Utilized MongoDB as the database and implemented JWT-based authentication to enhance application security.</li>

</ul>
        </div>
      </div>
      <div className="flex mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          // CHANGE: Replaced 'text-4xl' with 'w-7 h-7 shrink-0'
          className="w-7 h-7 mt-1 hidden md:block shrink-0" 
          // CHANGE: Replaced '1em' with '24' to match others
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd" // Note: React uses camelCase for fill-rule
            d="M10.276 2.255c.083-.005.171-.005.285-.005h2.879c.113 0 .201 0 .285.005a2.75 2.75 0 0 1 2.385 1.72c.031.077.06.16.095.268l.003.01c.084.224.275.479.543.683q.045.034.09.064c2.153.003 3.278.042 4.052.673q.24.195.434.434C22 6.934 22 8.159 22 10.609c0 .622 0 .932-.15 1.175a1 1 0 0 1-.1.134c-.19.214-.487.303-1.082.482L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.668-1.4c-.595-.179-.893-.268-1.082-.482a1 1 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502q.195-.24.434-.434c.775-.63 1.899-.67 4.053-.673q.045-.03.09-.064c.267-.204.459-.46.542-.683c.038-.114.066-.2.098-.279a2.75 2.75 0 0 1 2.385-1.719m4.543 2.563q.035.093.08.182H9.101q.043-.09.08-.182v-.003l.005-.01l.005-.012l.005-.012l.003-.01l.002-.005l.004-.012l.004-.012l.002-.006l.003-.008l.002-.007l.002-.006c.039-.116.051-.153.063-.181a1.25 1.25 0 0 1 1.084-.782c.032-.002.072-.002.215-.002h2.838c.143 0 .183 0 .215.002c.482.03.904.334 1.085.782c.01.028.023.063.062.181l.002.006l.002.007l.003.008l.002.006l.004.012l.004.012l.002.005l.004.01l.004.012l.005.012l.004.01zM14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5m-5.99 2.87l-5.004-1.502c.03 3.114.212 5.983 1.312 6.96C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.1-.977 1.282-3.846 1.312-6.96l-5.005 1.501a2 2 0 0 1-1.246 1.65l-.7.28a5.5 5.5 0 0 1-4.086 0l-.7-.28a2 2 0 0 1-1.246-1.65"
            clipRule="evenodd" // React uses camelCase for clip-rule
          ></path>
        </svg>

        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={iiitm} className='w-[30px] h-[30px] md:w-[36px] md:h-[36px] rounded-sm cursor-pointer' alt="" />
            <p className="pt-1.5 md:pt-0.5 text-md md:text-xl font-semibold text-primary capitalize hover:underline inline-flex gap-2 items-center justify-start ">
              ABV-IIITM
            </p>
          </div>
          <p className="text-md md:text-lg text-muted-foreground capitalize">
            Research - Internship
          </p>
          <p className="text-sm text-muted-foreground italic">
            Gwalior, India
          </p>
          <p className="mb-1 text-xs font-normal leading-none text-muted-foreground">
            15 May, 2025 - present
          </p>
          {/* <p className="text-md font-normal text-muted-foreground mb-3 break-words hyphens-auto">
            • Developed a full-stack URL shortening service with a React.js frontend and Node.js/Express backend to enable efficient link sharing and management.
            <br />• Implemented RESTful API endpoints to handle URL creation, retrieval, and validation with MySQL database integration for persistent storage.
            <br />• Designed and normalized MySQL database schema with unique constraints to ensure data integrity and prevent duplicate short URLs.
            <br />• Implemented a random base-62 encoding algorithm to generate 7-character short URLs, providing a namespace of ~3.5 trillion unique combinations (62^7).
            <br />• Designed collision resolution mechanism with retry logic (up to 3 attempts) to handle duplicate short URL generation in MySQL using unique key constraints.
            <br />• Implemented database-driven uniqueness validation leveraging MySQL's unique constraint enforcement to ensure data integrity at the storage layer.


          </p> */}
          <ul className="text-md font-normal text-muted-foreground mb-3 break-words hyphens-auto space-y-2 list-disc list-inside">
  <li>Built a full-stack URL shortening service using React.js and Node.js/Express for efficient link management.</li>
  <li>Developed RESTful APIs with MySQL integration for URL creation, retrieval, and validation.</li>
  <li>Designed a normalized MySQL schema with unique constraints to ensure data integrity.</li>
  <li>
    Implemented base-62 encoded 7-character short URLs (~62<sup>7</sup> combinations) with collision handling via retry logic and database-enforced uniqueness.
  </li>
</ul>

        </div>
      </div>
      <div className="flex mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          // CHANGE: Replaced 'text-4xl' with 'w-7 h-7 shrink-0'
          className="w-7 h-7 mt-1 hidden md:block shrink-0" 
          // CHANGE: Replaced '1em' with '24' to match others
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd" // Note: React uses camelCase for fill-rule
            d="M10.276 2.255c.083-.005.171-.005.285-.005h2.879c.113 0 .201 0 .285.005a2.75 2.75 0 0 1 2.385 1.72c.031.077.06.16.095.268l.003.01c.084.224.275.479.543.683q.045.034.09.064c2.153.003 3.278.042 4.052.673q.24.195.434.434C22 6.934 22 8.159 22 10.609c0 .622 0 .932-.15 1.175a1 1 0 0 1-.1.134c-.19.214-.487.303-1.082.482L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.668-1.4c-.595-.179-.893-.268-1.082-.482a1 1 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502q.195-.24.434-.434c.775-.63 1.899-.67 4.053-.673q.045-.03.09-.064c.267-.204.459-.46.542-.683c.038-.114.066-.2.098-.279a2.75 2.75 0 0 1 2.385-1.719m4.543 2.563q.035.093.08.182H9.101q.043-.09.08-.182v-.003l.005-.01l.005-.012l.005-.012l.003-.01l.002-.005l.004-.012l.004-.012l.002-.006l.003-.008l.002-.007l.002-.006c.039-.116.051-.153.063-.181a1.25 1.25 0 0 1 1.084-.782c.032-.002.072-.002.215-.002h2.838c.143 0 .183 0 .215.002c.482.03.904.334 1.085.782c.01.028.023.063.062.181l.002.006l.002.007l.003.008l.002.006l.004.012l.004.012l.002.005l.004.01l.004.012l.005.012l.004.01zM14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5m-5.99 2.87l-5.004-1.502c.03 3.114.212 5.983 1.312 6.96C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.1-.977 1.282-3.846 1.312-6.96l-5.005 1.501a2 2 0 0 1-1.246 1.65l-.7.28a5.5 5.5 0 0 1-4.086 0l-.7-.28a2 2 0 0 1-1.246-1.65"
            clipRule="evenodd" // React uses camelCase for clip-rule
          ></path>
        </svg>

        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={iiitm} className='w-[30px] h-[30px] md:w-[36px] md:h-[36px] rounded-sm cursor-pointer' alt="" />
            <p className="pt-1.5 md:pt-0.5 text-md md:text-xl font-semibold text-primary capitalize hover:underline inline-flex gap-2 items-center justify-start ">
              ABV-IIITM
            </p>
          </div>
          <p className="text-md md:text-lg text-muted-foreground capitalize">
            Research Assistant
          </p>
          <p className="text-sm text-muted-foreground italic">
            Gwalior, India
          </p>
          <p className="mb-1 text-xs font-normal leading-none text-muted-foreground">
            15 May, 2025 - present
          </p>
          {/* <p className="text-md font-normal text-muted-foreground mb-3 break-words hyphens-auto">
            • Designed and simulated a novel 3D coplanar waveguide (CPW)-fed four-port MIMO antenna achieving ultra-wideband operation across 2-20 GHz for 5G, WLAN, radar, and satellite applications.
            <br />• Utilized electromagnetic simulation tools to optimize antenna geometry and validate performance metrics for multi-input multi-output (MIMO) wireless communication systems.
            <br />• Achieved high port isolation without additional decoupling structures by implementing innovative cubic geometric arrangement of antenna elements, reducing design complexity and footprint.
            <br />• Conducted comprehensive performance analysis evaluating key diversity parameters including Envelope Correlation Coefficient (ECC), Diversity Gain (DG), Mean Effective Gain (MEG), and Total Active Reflection Coefficient (TARC) across the entire UWB spectrum.
            <br />• Published research findings in IEEE MAPCON 2023 conference proceedings, presenting design methodology and performance analysis to academic and industry professionals.
            <br />• Contributed to advancement of 5G mid-band and sub-6GHz antenna technology through innovative non-planar antenna architecture design.
          </p> */}
          <ul className="text-md font-normal text-muted-foreground mb-3 break-words hyphens-auto space-y-2 list-disc list-inside">
  <li>Designed and simulated a 3D CPW-fed four-port MIMO antenna achieving ultra-wideband operation (2–20 GHz) for 5G, WLAN, radar, and satellite applications.</li>
  <li>Optimized antenna geometry using electromagnetic simulations and achieved high port isolation without decoupling structures via a cubic arrangement.</li>
  <li>Evaluated key MIMO diversity metrics (ECC, DG, MEG, TARC) across the full UWB spectrum.</li>
  <li>Published and presented the work at IEEE MAPCON 2023, contributing to advances in sub-6 GHz and 5G mid-band antenna design.</li>
</ul>

        </div>
      </div>




    </div>
  );
}

export default Experience;
