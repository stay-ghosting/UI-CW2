import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Banner from "../assets/banner_elvis.png";
import Footer from "../components/Footer";

import icon_gamepad from "../assets/icon_game_pad.png";
import icon_gutar from "../assets/icon_guitar.png";
import icon_hotDog from "../assets/icon_hot-dog.png";
import icon_womanDancing from "../assets/icon_woman-dancing.png";
import Card from "../components/Card";

import { EventListSummary } from "../types/EventListData";

function Home() {
  const [eventLists, setEventLists] = useState<EventListSummary[]>([]);
  const officialListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedEventLists = Object.keys(localStorage)
      .map((key) => {
        try {
          const eventList = JSON.parse(
            localStorage.getItem(key) || "{}"
          ) as EventListSummary;
          return {
            id: eventList.id || key,
            title: eventList.title || "Untitled Event List",
            image: eventList.image || "",
            createdBy: eventList.createdBy || "Unknown",
          };
        } catch (error) {
          console.error(
            `Error parsing event list from localStorage with key ${key}:`,
            error
          );
          return null;
        }
      })
      .filter((eventList): eventList is EventListSummary => eventList !== null);

    setEventLists(storedEventLists);
  }, []);

  const firstTwoEventLists = eventLists.slice(0, 2);

  const scrollToOfficialList = () => {
    if (officialListRef.current) {
      officialListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative h-[37rem] bg-blue-500 flex items-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src={Banner}
            alt="Background Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 w-[60%] px-6 py-12 md:px-12 md:py-24">
          <h1 className="text-4xl md:text-[4.5rem] mb-8 font-title">
            Craft Your Next Memory
          </h1>

          <div className="flex justify-center gap-4">
            <button
              onClick={scrollToOfficialList}
              className="bg-transparent border-2 border-primary-500 w-60 text-primary-500 py-3 px-6 rounded-[0.2rem] hover:bg-primary-500 hover:text-white transition"
            >
              Featured
            </button>
            <a
              href="/dashboard"
              className="bg-primary-500 text-white py-3 w-60 rounded-[0.2rem] hover:bg-primary-600 transition"
            >
              Plan Events
            </a>
          </div>
        </div>
      </section>
      <section className="w-[55rem] m-auto mt-20" ref={officialListRef}>
        <h3 className="text-2xl font-[500]">Official List</h3>
        <div className="flex flex-row justify-between px-10 mb-40">
          {[
            [icon_gamepad, "Gaming", "/event-list/events_company_list1"], 
            [icon_gutar, "Music", "/event-list/events_company_list4"],
            [icon_hotDog, "Food & Drink", "/event-list/events_company_list3"],
            [icon_womanDancing, "Dance", "/event-list/events_company_list2"],
          ].map(([icon, title, link]) => (
            <div
              key={title}
              className="p-5 space-y-3 hover:text-blue-500"
            >
              <a href={link} className="flex flex-col justify-center items-center">
                <img src={icon} alt={title + " icon"} className="w-16" />
                <p>{title}</p>
              </a>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-[500] mb-5">Featured This Week</h3>
        <div className="flex flex-row justify-between px-6">
          {firstTwoEventLists.map((eventList) => (
            <Card
              className=""
              key={eventList.id}
              image={eventList.image}
              title={eventList.title}
              author={eventList.createdBy}
              hyperlink={`/event-list/${eventList.id}`}
            />
          ))}
        </div>
      </section>
      <div className="mt-20 flex flex-col items-center">
        <p>Create your own plan and share it with friends</p>
        <a
          href="/dashboard"
          className="bg-primary-500 text-white py-3 w-60 rounded-[0.2rem] hover:bg-primary-600 transition text-center mt-8"
        >
          Plan Events
        </a>
      </div>
      <div className="h-[20rem]"></div>
      <Footer />
    </>
  );
}

export default Home;
