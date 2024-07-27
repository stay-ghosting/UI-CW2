interface CardProps {
  image: string;
  title: string;
  author: string;
  hyperlink: string;
  className: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  author,
  hyperlink,
  className,
}) => {
  return (
    <a
      href={hyperlink}
      className={"flex flex-col min-w-[22rem]" + className}
    >
      <img src={image} alt={title + " image"} className="rounded-lg h-[12rem] object-cover" />
      <div className="pt-4 pl-2">
        <p className="font-[500] text-2xl mb-1">{title}</p>
        <p className="text-gray-800">{"Created By " + author}</p>
      </div>
    </a>
  );
};

export default Card;
