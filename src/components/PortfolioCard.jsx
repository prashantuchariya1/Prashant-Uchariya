function PortfolioCard({ achievement }) {
  return (
    <div className=" text-card-foreground border-border/70 dark:border-border  hover:border-border dark:hover:border-primary/50  shadow-none cursor-pointer text-start p-3 h-[350px] w-full border-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md bg-card flex flex-col">
      
      {/* Image */}
      <img
        src={achievement.imageUrl}
        alt=""
        className="w-full h-[200px] object-cover rounded-t-md"
      />

      {/* Content */}
      <div className="flex flex-col flex-1 mt-2">
        
        {/* Heading – directly below image */}
        <p className="font-semibold tracking-tight text-md leading-tight line-clamp-2">
          {achievement.title}
        </p>

        {/* Description – pushed to bottom */}
        <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
          {achievement.description}
        </p>

      </div>
    </div>
  );
}

export default PortfolioCard;

