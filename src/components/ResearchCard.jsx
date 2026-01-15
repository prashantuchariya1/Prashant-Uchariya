
function ResearchCard({paper}) {
    return(
        <div className="w-full sm:w-[450px] max-w-full min-h-[116px]
         flex items-start gap-3 box-border
         p-3 rounded-lg border-2 border-border
         bg-card cursor-pointer
         transition-all duration-200
         hover:scale-105 hover:shadow-md">
            <div className="flex">
                <img width="80"
  height="80"
  decoding="async"
  className="w-20 h-20 object-cover rounded-md shrink-0 self-center text-transparent" src={paper.imageUrl} alt="" />
                <div className="flex flex-col">
                    <p className="text-[14px] font-semibold mb-1 leading-[1.3] break-words">{paper.title}</p>
                    <p className="text-[12px] text-muted-foreground overflow-hidden line-clamp-2 leading-[1.4]">{paper.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ResearchCard;