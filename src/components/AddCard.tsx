interface CardProps {
    title: string;
    hyperlink: string;
    className?: string;
  }
  
  const AddCard: React.FC<CardProps> = ({
    title,
    hyperlink,
    className="",
  }) => {
    return (
      <a
        href={hyperlink}
        className={"flex flex-col min-w-[22rem]" + className}
      >
        <div className="h-[12rem] w-full bg-gray-400 rounded-lg flex items-center justify-center text-4xl">
          +
        </div>
        <div className="pt-4 pl-2">
          <p className="font-[500] text-2xl mb-1">{title}</p>
        </div>
      </a>
    );
  };
  
  export default AddCard;
  