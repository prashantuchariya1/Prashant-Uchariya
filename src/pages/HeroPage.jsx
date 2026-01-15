import prashant from '../assets/prashant.jpg'
function HeroPage() {
  return (
    <div className=" mx-auto max-w-5xl px-6  my-6 block md:flex  md:flex-row md:justify-between ">
      <div className=" my-10 flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <p className=" bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold">
            Software & Machine Learning Engineer
          </p>
          <p className="text-xl font-normal text-muted-foreground">
            Prashant uchariya
          </p>
        </div>
        {/* <div className=" mx-auto w-[400px] h-[450px] block md:hidden">
          <img
            className="rounded-3xl w-full h-full object-cover "
            src={prashant}
            alt=""
          />
        </div> */}
        {/* Responsive Mobile Image Container */}
<div className="mx-auto w-full max-w-[320px] h-[380px] sm:max-w-[400px] sm:h-[450px] block md:hidden">
  <img
    className="rounded-3xl w-full h-full object-cover shadow-lg"
    src={prashant}
    alt="Prashant Uchariya"
  />
</div>

        <div className="flex justify-center md:justify-start items-center gap-2 ">
          <a
            href="mailto:prashantuchariya1@gmail.com"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-6 h-6 iconify iconify--lucide"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
              </g>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/prashantuchariya1/"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-6 h-6 iconify iconify--skill-icons"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60"></rect>
                <rect width="256" height="256" fill="#0A66C2" rx="60"></rect>
                <path
                  fill="#fff"
                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                ></path>
              </g>
            </svg>
          </a>
          <a
            href="https://github.com/prashantuchariya1"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-6 h-6 iconify iconify--lucide"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </g>
            </svg>
          </a>
          <a
            href="https://scholar.google.com/citations?user=i_ym7-oAAAAJ&hl=en"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-6 h-6 iconify iconify--simple-icons"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.242 13.769L0 9.5L12 0l12 9.5l-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269M12 10a7 7 0 1 0 0 14a7 7 0 0 0 0-14"
              ></path>
            </svg>
          </a>
          <a
            href="https://x.com/PrashantCoder"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-6 h-6 iconify iconify--pajamas"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
              ></path>
            </svg>
          </a>
          <a
            href=""
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-6 h-6 iconify iconify--lucide"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15l5-3l-5-3z"></path>
              </g>
            </svg>
          </a>
          <a
            href=""
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-6 h-6 iconify iconify--simple-icons"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.885 3.906a.62.62 0 0 0-.354.12c-.08.08-.161.196-.161.313c0 .2.236.474.673.923c1.822 1.754 2.738 3.903 2.732 6.494c-.007 2.867-.97 5.17-2.844 6.954c-.394.353-.556.63-.557.867c0 .116.08.237.16.353a.58.58 0 0 0 .353.162c.434 0 1.04-.512 1.833-1.509c1.542-1.89 2.24-3.978 2.279-6.824c.036-2.847-.857-4.777-2.603-6.77c-.63-.712-1.153-1.082-1.511-1.083m-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824c.791.997 1.398 1.51 1.832 1.509a.57.57 0 0 0 .352-.162c.08-.116.16-.237.16-.353c0-.237-.162-.514-.556-.866c-1.873-1.785-2.837-4.087-2.844-6.955c-.006-2.591.91-4.74 2.732-6.494c.437-.449.674-.722.673-.923c0-.117-.08-.233-.161-.313a.62.62 0 0 0-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386c-.281-.18-2.001-1.5.402-5.423c.466-.77 1.076-1.47 1.834-3.041c0 0 .67.946.32 2.998c-.523 3.101 2.271 2.214 2.314 2.257c.976 1.15-.808 3.17-.917 3.233c-.108.061 5.096-3.13 1.399-7.935c-.253.253-.582 1.442-1.267 1.266c-.684-.174 2.125-3.494-2.868-7.468M9.955 18.916q.036.024.038.024z"
              ></path>
            </svg>
          </a>
          <a
            href="https://leetcode.com/u/prashant245/"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-6 h-6 iconify iconify--simple-icons"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
              ></path>
            </svg>
          </a>
          <a
            href=""
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-6 h-6 iconify iconify--devicon"
              width="1em"
              height="1em"
              viewBox="0 0 128 128"
            >
              <path
                fill="#20beff"
                d="M100.402 127.243q-.19.752-1.502.752H82.168c-1.007 0-1.876-.438-2.632-1.317L51.91 91.531l-7.706 7.33v27.258q-.001 1.882-1.88 1.881h-12.97q-1.88 0-1.88-1.88V1.876Q27.473 0 29.354-.001h12.97c1.253 0 1.882.628 1.882 1.876v76.501l33.08-33.457q1.317-1.314 2.631-1.315h17.295c.75 0 1.25.315 1.504.937q.379 1.129-.19 1.693L63.561 80.062l36.465 45.3q.748.752.38 1.881"
              ></path>
            </svg>
          </a>
          {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-6 h-6 iconify iconify--academicons" width="0.88em" height="1em" viewBox="0 0 448 512" style="color: rgb(3, 198, 181);"><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm277.201 64c5.627 0 10.731.651 15.258 1.98c4.476 1.318 8.49 3.135 12.031 5.461c3.491 2.302 6.511 5.013 9.004 8.082a44 44 0 0 1 6.227 9.899c.626 1.125.449 2.02-.55 2.646l-13.9 5.715c-1.177.628-2.006.308-2.66-.933c-3.119-5.78-5.78-9.577-10.152-12.338c-4.425-2.75-8.518-4.055-15.258-4.055c-7.327 0-10.601 1.457-15.191 4.744c-4.553 3.223-7.89 7.276-9.86 13.451c-.395 1.114-.754 2.496-1.175 4.12c-.346 1.65-.627 3.67-.805 6.035c-.18 2.366-.347 5.295-.5 8.748c-.102 3.453-.152 7.646-.152 12.506c0 4.884.05 9.078.152 12.53c.153 3.44.32 6.37.5 8.735c.178 2.391.46 4.4.805 6.063c.421 1.598.78 2.977 1.175 4.103c1.97 6.15 4.783 9.514 8.926 12.213c4.092 2.737 8.798 4.707 16.125 4.707c6.51 0 12.469-1.855 16.356-4.682c3.85-2.825 7.046-6.559 8.478-11.662c.627-2.148 1.433-4.822 1.983-8.095c.498-3.274.5-6.738.5-11.52c0-.755-.424-1.14-1.127-1.14h-22.264c-1.253 0-1.867-.613-1.867-1.866v-12.761c0-1.267.614-1.881 1.867-1.881h40.857c1.28 0 1.881.614 1.881 1.88v10.907c0 5.78 0 11.14-.601 16.101c-.576 4.962-1.355 9.257-2.34 12.389c-3.12 9.81-8.07 16.793-15.653 21.996c-7.609 5.243-17.417 8.068-28.07 8.068c-10.946 0-20.165-2.516-27.683-7.517c-7.532-5.064-12.918-12.496-16.204-22.432a43 43 0 0 1-1.482-5.83c-.384-2.007-.73-4.348-1.037-7.047c-.32-2.723-.524-5.919-.65-9.691c-.129-3.746-.18-8.325-.18-13.568c0-5.27.052-9.782.18-13.541c.127-3.773.33-7.01.65-9.708c.306-2.685.653-5.037 1.037-7.044c.37-2.02.857-3.94 1.484-5.819c3.286-9.936 8.67-17.404 16.202-22.418C305.036 98.518 314.255 96 325.2 96m-151.674 77.813c43.569 0 76.803 19.858 76.803 62.646c0 29.028-22.916 58.083-53.861 65.32c18.733 33.249 41.252 62.662 58.08 80.973c9.898 10.703 23.646 20.268 37.392 20.268v9.912c-4.192 1.93-11.06 3.068-17.545 3.068c-22.16 0-39.718-8.773-51.2-22.545c-12.585-14.502-34.746-45.845-58.046-87.469c-12.25 0-20.268 0-29.437-.767v63.785c0 23.696 5.372 28.671 15.678 30.168l19.873 2.709v11.05c-9.553-.37-31.714-1.126-48.9-1.126c-17.968 0-35.923.756-46.23 1.127V401.88l14.503-2.71c9.974-1.891 15.652-6.47 15.652-30.167V218.506c0-23.708-5.678-28.261-15.652-30.18l-14.502-2.66V174.58c9.526.37 24.821.37 40.129.37c16.776 0 34.744-1.137 57.263-1.137m-6.867 17.185c-10.32 0-22.136 0-30.947.768v95.845c8.811.83 14.515 1.176 27.508 1.176c34.015 0 54.629-20.243 54.629-50.422c0-30.536-19.08-47.367-51.19-47.367"></path></svg> */}
        </div>
        <a className="" href="https://www.example.com" target="_blank" rel="noopener noreferrer">
<button className=" cursor-pointer w-fit self-center md:self-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Download Resume
</button>
</a>
      </div>
      {/* <img
        className="hidden md:block rounded-3xl w-full h-full object-cover"
        src={prashant}
        alt=""
      /> */}
      <div className="hidden md:flex md:items-center md:justify-end md:w-1/2">
  <div className="w-[320px] h-[380px] lg:w-[380px] lg:h-[440px] xl:w-[420px] xl:h-[480px]">
    <img
      src={prashant}
      alt="Prashant"
      className="w-full h-full rounded-3xl object-cover"
    />
  </div>
</div>

    </div>
  );
}

export default HeroPage;


