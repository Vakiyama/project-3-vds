import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Calendar } from '@demark-pro/react-booking-calendar';
import '@demark-pro/react-booking-calendar/dist/react-booking-calendar.css';
import { Button } from '../components/button';
import { PackageItem, type Package } from '../components/package';

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

export const packages: Package[] = [
  {
    id: 1,
    type: 'learners',
    title: 'Basic 1',
    items: ['1 Hour Lesson', '1.5 Hour Lesson'],
    description:
      'Ideal for new drivers who need a refresher on basic vehicle control and confidence-building before taking on more advanced maneuvers.',
    price: 99,
  },
  {
    id: 2,
    type: 'learners',
    title: 'Basic 2',
    items: ['2 Hour Lesson', 'Road Test Prep Discussion'],
    description:
      'Designed for learners who want extended behind-the-wheel time to refine essential driving skills and gain familiarity with road test requirements.',
    price: 179,
  },
  {
    id: 3,
    type: 'learners',
    title: 'Intermediate 1',
    items: ['3 x 1 Hour Lessons', 'Mock Road Test'],
    description:
      'Perfect for learners aiming to practice fundamental maneuvers repeatedly, with a mock road test to gauge readiness.',
    price: 279,
  },
  {
    id: 4,
    type: 'learners',
    title: 'Intermediate 2',
    items: ['4 x 1 Hour Lessons', 'Defensive Driving Tips'],
    description:
      'A comprehensive package for learners looking to build confidence in traffic, master defensive driving habits, and prepare for road test scenarios.',
    price: 349,
  },
  {
    id: 5,
    type: 'learners',
    title: 'Extended Prep',
    items: ['6 x 1 Hour Lessons', 'Pre-Trip Checklist Training'],
    description:
      'Suitable for learners who want more extensive practice covering everything from basic vehicle control to pre-trip inspections and test day tips.',
    price: 499,
  },
  {
    id: 6,
    type: 'learners',
    title: 'Comprehensive',
    items: ['8 x 1 Hour Lessons', '1 Final Mock Road Test', 'Test Day Support'],
    description:
      'Our most thorough learners package, offering multiple lessons, a final mock test, and guidance on test day to ensure you’re fully prepared.',
    price: 649,
  },
  {
    id: 7,
    type: 'novice',
    title: 'Basic 1',
    items: ['1 Hour Lesson', 'Assessment Drive'],
    description:
      'Great for novice drivers with some experience who need a quick assessment and pointers on improving key areas before moving forward.',
    price: 99,
  },
  {
    id: 8,
    type: 'novice',
    title: 'Basic 2',
    items: ['2 Hour Lesson', 'Highway Driving Basics'],
    description:
      'For novice drivers seeking practice with highway merges, lane changes, and maintaining speed, all in a slightly longer session.',
    price: 179,
  },
  {
    id: 9,
    type: 'novice',
    title: 'Intermediate 1',
    items: ['3 x 1 Hour Lessons', 'Night Driving Tips'],
    description:
      'Focuses on polishing existing skills, learning night driving strategies, and building confidence for more advanced maneuvers.',
    price: 279,
  },
  {
    id: 10,
    type: 'novice',
    title: 'Intermediate 2',
    items: ['4 x 1 Hour Lessons', 'Parking & Maneuvering Focus'],
    description:
      'Dive deeper into trickier aspects like parallel parking, hill starts, and advanced intersection strategies with guided practice.',
    price: 349,
  },
  {
    id: 11,
    type: 'novice',
    title: 'Extended Prep',
    items: ['6 x 1 Hour Lessons', 'Mock Test & Feedback'],
    description:
      'A thorough package to refine driving habits, correct mistakes, and practice under test-like conditions to ensure readiness.',
    price: 499,
  },
  {
    id: 12,
    type: 'novice',
    title: 'Comprehensive',
    items: [
      '8 x 1 Hour Lessons',
      'Mock Road Test',
      'Test Day Preparation & Support',
    ],
    description:
      'Covers all aspects of driving for novices, including advanced maneuvers, defensive driving, and final test preparation for a confident pass.',
    price: 649,
  },
  {
    id: 13,
    type: 'full',
    title: 'Basic 1',
    items: ['1 Hour Lesson', 'Driver Assessment'],
    description:
      'Ideal for fully licensed drivers looking to brush up on key skills or adapt to new driving conditions (e.g., city vs. highway).',
    price: 99,
  },
  {
    id: 14,
    type: 'full',
    title: 'Basic 2',
    items: ['2 Hour Lesson', 'Defensive Driving Overview'],
    description:
      'Two-hour session for licensed drivers to reinforce defensive driving techniques and hazard perception on busy roads.',
    price: 179,
  },
  {
    id: 15,
    type: 'full',
    title: 'Intermediate 1',
    items: ['3 x 1 Hour Lessons', 'Eco-Driving Techniques'],
    description:
      'For experienced drivers wanting to refine habits, learn fuel-efficient driving, and reduce wear on the vehicle.',
    price: 279,
  },
  {
    id: 16,
    type: 'full',
    title: 'Intermediate 2',
    items: ['4 x 1 Hour Lessons', 'Advanced Maneuvering'],
    description:
      'Covers complex driving situations like multi-lane roundabouts, tight downtown parking, and advanced road strategies.',
    price: 349,
  },
  {
    id: 17,
    type: 'full',
    title: 'Extended Prep',
    items: ['6 x 1 Hour Lessons', 'Night & Adverse Weather Practice'],
    description:
      'Ideal for fully licensed drivers looking to gain confidence in challenging weather or night-time conditions with guided support.',
    price: 499,
  },
  {
    id: 18,
    type: 'full',
    title: 'Comprehensive',
    items: [
      '8 x 1 Hour Lessons',
      'Customized Focus Areas',
      'Professional Feedback & Reporting',
    ],
    description:
      'Our most complete package for experienced drivers seeking a thorough refresher or personalized guidance in specific driving environments.',
    price: 649,
  },
];

function RouteComponent() {
  const [selectedDates, setSelectedDates] = useState<any[]>([]);
  const [drivingExperience, setDrivingExperience] =
    useState<DrivingExperience | null>(null);
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(
    null
  );

  const filteredPackages = packages.filter(
    (item) => item.type === drivingExperience
  );

  return (
    <div>
      <hr className="border-gray-200" />
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 mt-8 pb-16">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Online Registration
          </h1>
          <div className="text-2xl mt-8 flex flex-col items-center w-full max-w-4xl">
            {drivingExperience === null && selectedPackageId === null && (
              <>
                <h2 className="mb-10 text-center text-gray-700">
                  Welcome! What type of lessons are you looking for?
                </h2>
                <div className="flex flex-col items-center gap-4 w-full max-w-md">
                  <Button
                    type="secondary"
                    className="w-full py-3 text-lg shadow-sm hover:shadow-md transition-all"
                    onClick={() => setDrivingExperience('learners')}
                  >
                    <p>I'm a new driver (L)</p>
                  </Button>
                  <Button
                    type="secondary"
                    className="w-full py-3 text-lg shadow-sm hover:shadow-md transition-all"
                    onClick={() => setDrivingExperience('novice')}
                  >
                    <p>I have my N</p>
                  </Button>
                  <Button
                    type="secondary"
                    className="w-full py-3 text-lg shadow-sm hover:shadow-md transition-all"
                    onClick={() => setDrivingExperience('full')}
                  >
                    <p>I have my full license</p>
                  </Button>
                </div>
              </>
            )}
            {drivingExperience !== null && selectedPackageId === null && (
              <div className="max-w-7xl mx-auto px-4 py-8 w-full">
                <div className="flex flex-row items-center mb-10 justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {drivingExperience === 'learners'
                      ? 'Learners (L)'
                      : drivingExperience === 'novice'
                        ? 'Novice (N)'
                        : 'Full (Class 5)'}
                  </h2>
                  <Button
                    onClick={() => setDrivingExperience(null)}
                    type="secondary"
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <p className="">Back</p>
                  </Button>
                </div>

                <div className="lg:grid lg:grid-cols-2 gap-10 flex flex-col items-center">
                  {filteredPackages.map((pkg) => (
                    <PackageItem
                      key={pkg.id}
                      package={pkg}
                      book={() => setSelectedPackageId(pkg.id)}
                    />
                  ))}
                </div>
              </div>
            )}
            {drivingExperience !== null && selectedPackageId !== null && (
              <div className="w-full">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center mb-2">
                    Selected Package
                  </h3>
                  <div className="flex flex-row justify-center">
                    <PackageItem
                      package={
                        packages.find((item) =>
                          item.id === selectedPackageId ? selectedPackageId : 1
                        )!
                      }
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
                  Please select a date for your first lesson.
                </h3>
                <div className="m-auto mb-12">
                  <Calendar
                    className="border-gray-300 w-full max-w-md border rounded-lg shadow-sm block m-auto bg-white"
                    selected={selectedDates}
                    reserved={reserved}
                    onChange={setSelectedDates}
                  />
                  <select className="block mb-10 mx-auto border border-gray-300 rounded-md px-4 py-3 w-full max-w-md mt-6 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none">
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Biweekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                  <div className="flex flex-col gap-3 items-center">
                    <Button
                      type="secondary"
                      className="justify-start text-base w-[420px]"
                    >
                      <>Morning (9am - 12pm)</>
                    </Button>
                    <Button
                      type="secondary"
                      className="justify-start text-base w-[420px]"
                    >
                      <>Afternoon (1pm - 4pm)</>
                    </Button>
                    <Button
                      type="secondary"
                      className="justify-start text-base w-[420px]"
                    >
                      <>Evening (5pm - 8pm)</>
                    </Button>
                  </div>
                </div>
                {/* Registration Form */}
                <div className="mt-8 max-w-4xl mx-auto w-full bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                    Please Complete Your Details
                  </h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      // Handle form submission here
                    }}
                    className="space-y-6"
                  >
                    {/* Row 1: Last Name, First Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                          placeholder="Last Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                          placeholder="First Name"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email, Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                          placeholder="Email Address"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone No
                        </label>
                        <input
                          type="text"
                          id="phone"
                          className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    {/* Row 3: Street */}
                    <div>
                      <label
                        htmlFor="street"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Street
                      </label>
                      <input
                        type="text"
                        id="street"
                        className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        placeholder="Street Address"
                      />
                    </div>

                    {/* Row 4: City, Post Code */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="postCode"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Post Code
                        </label>
                        <input
                          type="text"
                          id="postCode"
                          className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                          placeholder="Post Code"
                        />
                      </div>
                    </div>

                    {/* Row 5: License No, License Class, License Expiry */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label
                          htmlFor="licenseNo"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Driving License No (LDL#)
                        </label>
                        <input
                          type="text"
                          id="licenseNo"
                          className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                          placeholder="LDL#"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="licenseClass"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Driving License Class
                        </label>
                        <input
                          type="text"
                          id="licenseClass"
                          className="w-full border border-gray-300 rounded-md p-3 bg-gray-100 shadow-sm"
                          placeholder="e.g. Class 5"
                          value={'Learning'}
                          disabled
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="licenseExpiry"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          License Expiry
                        </label>
                        <input
                          type="date"
                          id="licenseExpiry"
                          className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 flex flex-row justify-center">
                      <Button
                        type="primary"
                        className="px-12 py-5 text-lg font-medium shadow-md hover:shadow-lg transition-all"
                      >
                        <p className="text-2xl">Finish Submission</p>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
