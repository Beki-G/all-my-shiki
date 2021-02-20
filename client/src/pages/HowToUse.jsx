import React from "react";
import HowToShikiChangeLog from "../components/HowToShikiChangeLog/HowToShikiChangeLog";
import HowToWebChangeLog from "../components/HowToWebChangeLog/HowToWebChangeLog";
import Navbar from "../components/Navbar/Navbar";

const ChangeLog = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>

      <h1 className="text-center sm:tracking-wider text-3xl pt-8 font-semibold">
        How to Use the site
      </h1>

      <div className="w-4/5 mx-auto ">
        <h2 className="text-2xl font-semibold tracking-wide  mt-4">
          Changelog
        </h2>

        <section className="flex flex-wrap-reverse">
          <div className="lg:w-1/2 lg:pr-2 w-full">
            <h2 className="tracking-wide text-lg ">Github Changes</h2>
            <div className="h-32  overflow-x-auto p-4 bg-white rounded-md">
              <HowToWebChangeLog />
            </div>
          </div>
          <div className="lg:w-1/2 w-full text-lg">
            <h2 className="tracking-wide">Shikigami Data Changes</h2>
            <div className="bg-white h-32 overflow-x-auto p-4 rounded-md">
              <HowToShikiChangeLog />
            </div>
          </div>
        </section>

        <section className="pt-4">
          <div>
            <h2 className="bg-chestnut text-white text-lg rounded-md py-1 px-2 mt-4">
              Creating Shikigami profiles
            </h2>
            <p className="pt-2">
              To create shikigami profiles use the '+' next to the title on the Dashboard.
            </p>
          </div>
          <div>
            <h2 className="bg-chestnut text-white text-lg rounded-md py-1 px-2 mt-4">
              Making teams
            </h2>
            <p className="pt-2">
              To create teams use the '+' next to the title on the Dashboard. For each team you can choose the Onmyoji or event Shiki as the host. Then you can use the dropdowns to assemble teams from your shikigami profiles.
            </p>
          </div>

          <div>
          <h2 className="bg-chestnut text-white text-lg rounded-md py-1 px-2 mt-4">
            Exploring teams/Shikigami
          </h2>
          <p className="pt-2">
              Using the expore Shikigami/teams pages you can explore by sorting through shikigami, users, and guilds. Toggle the filters to use the search bar for each column. 
            </p>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default ChangeLog;
