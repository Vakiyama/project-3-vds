import type { DrivingExperience } from '../routes/register';

type Package = {
  type: DrivingExperience;
  title: string;
  items: string[];
  description: string;
  price: number;
  salePrice?: number;
};

export function Package(props: { package: Package }) {
  return (
    <div className="flex flex-col rounded shadow w-[400px]">
      <div className="bg-primary text-white items-center flex justify-center px-24 py-2 rounded-t">
        <p className="text-center w-fit">{props.package.title}</p>
      </div>
      <div className="bg-[#FFF8EC] px-4 py-6">
        <div className="flex flex-col gap-4">
          {props.package.items.map((item) => (
            <p className="font-normal text-lg">{item}</p>
          ))}
        </div>
        <p className="text-center text-4xl py-8">
          <b>${props.package.price}</b>
        </p>
        <p className="text-base font-normal">{props.package.description}</p>
      </div>
    </div>
  );
}
