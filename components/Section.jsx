import { ScrollArea } from "./ui/scroll-area";

const Section = ({ title, description, items, renderItem }) => {
  return (
    <div className="flex flex-col gap-8 text-center xl:text-left">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((item, index) => renderItem(item, index))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Section;
