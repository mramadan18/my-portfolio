import { IService } from "@/type";

const ServiceCard: React.FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="grid grid-cols-[auto_1fr] place-items-center p-2 space-x-4">
      <Icon className="text-green w-12 h-12" />

      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
