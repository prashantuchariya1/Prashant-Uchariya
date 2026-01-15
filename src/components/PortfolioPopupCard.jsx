function PortfolioPopupCard({ data, onToggle }) {
  if (!data) return null;

  return (
    <div
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                    z-50 w-full max-w-md p-7 bg-card text-card-foreground
                    border-2 border-border rounded-lg 
                    flex flex-col gap-4"
    >
      <div className="fixed top-1 right-3  transition-all duration-200 hover:scale-125  cursor-pointer" onClick={onToggle}>
        x
      </div>

      <p className="text-lg  font-semibold leading-none tracking-tight">{data.title}</p>

      <img
        src={data.imageUrl}
        alt={data.title}
        className="object-cover object-center rounded-md w-full h-[200px]"
      />

      <p className="text-md font-normal text-muted-foreground  break-words hyphens-auto">{data.descriptionLong}</p>

      <div className=" flex justify-end items-center">
        {data.buttonList?.map((item, index) => {
          const isLast = index === data.buttonList.length - 1;

          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                isLast
                  ? "inline-block mr-3 px-4 py-2 bg-primary text-primary-foreground rounded"
                  : "mr-3 underline text-foreground font-medium"
              }
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioPopupCard;
