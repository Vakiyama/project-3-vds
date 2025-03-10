import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Calendar } from '@demark-pro/react-booking-calendar';
import '@demark-pro/react-booking-calendar/dist/react-booking-calendar.css';
import { Button } from '../components/button';
import { Package } from '../components/package';

export const Route = createFileRoute('/register')({
  component: RouteComponent,
});

const oneDay = 86400000;
const today = new Date().getTime() + oneDay;

const reserved = Array.from({ length: 3 }, (_, i) => {
  const daysCount = Math.floor(Math.random() * (7 - 4) + 3);
  const startDate = new Date(today + oneDay * 8 * i);

  return {
    startDate,
    endDate: new Date(startDate.getTime() + oneDay * daysCount),
  };
});

export type DrivingExperience = 'learners' | 'novice' | 'full';

function RouteComponent() {
  const [selectedDates, setSelectedDates] = useState<any[]>([]);
  const [drivingExperience, setDrivingExperience] =
    useState<DrivingExperience | null>(null);

  return (
    <div>
      <hr />
      <div className="mx-[100px] mt-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl bold opacity-90">Online Registration</h1>
          <div className="text-2xl mt-[100px] flex flex-col items-center">
            {drivingExperience === null && (
              <>
                <h2 className="mb-10">
                  Welcome! What type of lessons are you looking for?
                </h2>
                <div className="flex flex-col items-center gap-4">
                  <Button
                    type="secondary"
                    className="w-[400px]"
                    onClick={() => setDrivingExperience('learners')}
                  >
                    <p>I'm a new driver (L)</p>
                  </Button>
                  <Button
                    type="secondary"
                    className="w-[400px]"
                    onClick={() => setDrivingExperience('novice')}
                  >
                    <p>I have my N</p>
                  </Button>
                  <Button
                    type="secondary"
                    className="w-[400px]"
                    onClick={() => setDrivingExperience('full')}
                  >
                    <p>I have my full license</p>
                  </Button>
                </div>
              </>
            )}
            {drivingExperience === 'learners' && (
              <>
                <Package
                  package={{
                    type: 'learners',
                    items: ['1 Hour Lesson', '1.5 Hour Lesson'],
                    description:
                      'Great for students who have previous driving experience and require a tune up on the fundamentals of driving. Great for students that are unsure about how many lessons they need to prepare for the road test. Our highly qualified instructors will provide you with an assessment to help you make an informed decision on which package you may need! ',
                    price: 99,
                    title: 'Basic 1',
                  }}
                />
            <Calendar
              selected={selectedDates}
              reserved={reserved}
              onChange={setSelectedDates}
            />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
