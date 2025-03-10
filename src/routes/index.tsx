import { createFileRoute } from '@tanstack/react-router';
//@ts-expect-error
import homebanner from './homebanner.png';
import { Button } from '../components/button';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative">
      <img src={homebanner} alt="Banner" className="w-full h-auto" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent via-20% to-black opacity-20"></div>

      <div className="absolute top-[75%] right-[20%] ">
        <Button>
          <b className="text-white text-lg">GET THIS OFFER</b>
        </Button>
      </div>
    </div>
  );
}
