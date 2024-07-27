import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import AddCard from '../components/AddCard';
import { EventListData, EventListSummary } from '../types/EventListData';

const Dashbord = () => {
  const [johnDoeLists, setJohnDoeLists] = useState<EventListSummary[]>([]);
  const [otherLists, setOtherLists] = useState<EventListSummary[]>([]);

  useEffect(() => {
    const storedEventLists = Object.keys(localStorage).map((key) => {
      try {
        const eventList = JSON.parse(localStorage.getItem(key) || '{}') as EventListData;
        return {
          id: eventList.id || key,
          title: eventList.title || 'Untitled Event List',
          image: eventList.image || '',
          createdBy: eventList.createdBy || 'Unknown',
        };
      } catch (error) {
        console.error(`Error parsing event list from localStorage with key ${key}:`, error);
        return null;
      }
    }).filter(eventList => eventList !== null) as EventListSummary[];

    const johnDoeLists = storedEventLists.filter(list => list.createdBy === 'John Doe');
    const otherLists = storedEventLists.filter(list => list.createdBy !== 'John Doe');

    setJohnDoeLists(johnDoeLists);
    setOtherLists(otherLists);
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-36 mt-20 mb-20">
        <h3 className="mt-20 text-2xl font-[500] inline">My Events Lists</h3>
        <div className="flex flex-wrap gap-10 mt-8 mb-20 px-10">
          {johnDoeLists.map((eventList) => (
            <Card
              key={eventList.id}
              className=""
              image={eventList.image}
              title={eventList.title}
              author={eventList.createdBy}
              hyperlink={`/event-list/${eventList.id}`}
            />
          ))}
          <AddCard title="Create An Event List" hyperlink="/event-list" />
        </div>

        <h3 className="text-2xl font-[500] inline">Saved Events Lists</h3>
        <div className="flex flex-wrap gap-10 mt-8 mb-20 px-10">
          {otherLists.map((eventList) => (
            <Card
              key={eventList.id}
              className=""
              image={eventList.image}
              title={eventList.title}
              author={eventList.createdBy}
              hyperlink={`/event-list/${eventList.id}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashbord;
