/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { roboto_mono, racing_sans_one } from '../fonts';

type Props = {};

const Main = (props: Props) => {
  return (
    <>
      {/* main */}
      <div className="h-screen w-full overflow-hidden border font-mono">
        <div>find you dream job with mgmt</div>
        <p>
          ready to take the next step in your career? join mgmt today and revolutionize the way you manage your job
          applications
        </p>
        <button>sign up</button>
      </div>
      {/* about */}
      <div className="h-screen w-full overflow-hidden border">
        <div>welcome to mgmt</div>
        <p>
          MGMT is a user-friendly application designed to streamline your job application process. Whether you're
          actively job hunting or simply keeping track of potential opportunities, MGMT offers a robust set of features
          to help you stay organized.
        </p>
        <p>
          With MGMT, you can create, update, and delete job applications with ease. Track your progress, set reminders
          for follow-ups, and take notes to remember key details about each opportunity. Our intuitive interface ensures
          a seamless user experience, allowing you to focus on what matters most – landing your dream job.
        </p>
        <span>Sign up today and take control of your job search journey!</span>
      </div>
      {/* footer */}
      <div className="h-screen w-full overflow-hidden sm:flex sm:flex-col sm:justify-between">
        {/* content */}
        <div className="border flex items-center justify-between h-full">
          {/* paragraph */}
          <div className="border h-[272px] w-[820px]">
            <p className="text-[24px]">
              mgmt* An app to help users set and track their goals. Users can create new goals, set milestones, track
              progress, update goal details, and delete goals when achieved or no longer relevant.
            </p>
            <span>*short for “management”.</span>
          </div>
          {/* links */}
          <div className="flex h-[272px] w-full border">
            {/* left */}
            <div>
              <span>navigation</span>
              <ul>
                <li>about</li>
                <li>login</li>
                <li>register</li>
                <li>contact</li>
              </ul>
            </div>
            {/* right */}
            <div>
              <span>follow us</span>
              <ul>
                <li>github</li>
                <li>linkedin</li>
              </ul>
            </div>
          </div>
        </div>
        {/* mgmt title */}
        <div className="uppercase 2xl:text-[600px] font-rso 2xl:leading-[416px]">mgmt</div>
      </div>
    </>
  );
};

export default Main;
