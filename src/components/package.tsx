import type { DrivingExperience } from '../routes/register';
import { Button } from './button';

export type Package = {
  id: number;
  type: DrivingExperience;
  title: string;
  items: string[];
  description: string;
  price: number;
  salePrice?: number;
};

export function PackageItem(props: {
  package: Package;
  book?: (id: number) => void;
}) {
  return (
    <div
      className={`flex flex-col rounded shadow ${props.book ? 'h-[500px]' : 'w-[400px]'} w-[400px] bg-[#FFF8EC] relative`}
    >
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
      {props.book && (
        <div className="flex flex-row justify-center absolute bottom-0 w-full pb-4">
          <Button
            className="w-1/3 py-3 mb-4 shadow"
            onClick={() => props.book!(props.package.id)}
          >
            <p>Book</p>
          </Button>
        </div>
      )}
    </div>
  );
}
