import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditableTableRow from "../components/EditableTableRow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { EventListData } from "../types/EventListData";

const EventList = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const [eventList, setEventList] = useState<EventListData>(() => {
    const storedEventList = id ? localStorage.getItem(id) : null;
    return storedEventList
      ? JSON.parse(storedEventList)
      : {
          id: id || Date.now().toString(),
          createdBy: "John Doe",
          title: "Untitled Event List",
          image: `https://picsum.photos/id/${getRandomInt(1, 85)}/400/300`,
          events: [
            {
              id: Date.now().toString(),
              title: "",
              date: "",
              time: "",
              category: "",
              favourite: false,
            },
          ],
        };
  });

  useEffect(() => {
    if (!id) {
      navigate(`/event-list/${eventList.id}`);
    }
  }, [id, eventList.id, navigate]);

  const addRow = () => {
    setEventList((prevEventList) => ({
      ...prevEventList,
      events: [
        ...prevEventList.events,
        {
          id: Date.now().toString(),
          title: "",
          date: "",
          time: "",
          category: "",
          favourite: false,
        },
      ],
    }));
  };

  const deleteRow = (eventId: string) => {
    setEventList((prevEventList) => ({
      ...prevEventList,
      events: prevEventList.events.filter((event) => event.id !== eventId),
    }));
  };

  const handleInputChange = (
    eventId: string,
    field: string,
    value: string | boolean
  ) => {
    setEventList((prevEventList) => ({
      ...prevEventList,
      events: prevEventList.events.map((event) =>
        event.id === eventId ? { ...event, [field]: value } : event
      ),
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const title = prompt(
      "Please enter a title for the event list (25 characters or less):",
      eventList.title
    );
    if (title === null) {
      return;
    }

    if (title.trim() === "") {
      alert("Title cannot be empty.");
      return;
    }
    if (title.length > 25) {
      alert("Title cannot be more than 25 characters.");
      return;
    }

    const updatedEventList = { ...eventList, title };

    for (const event of updatedEventList.events) {
      if (!event.title || !event.date || !event.time || !event.category) {
        alert("All fields must be filled out.");
        return;
      }
    }

    localStorage.setItem(updatedEventList.id, JSON.stringify(updatedEventList));
    console.log(JSON.stringify(updatedEventList));
    navigate("/dashboard");
  };

  const sortedEvents = [...eventList.events].sort((a, b) => {
    return (b.favourite === true ? 1 : 0) - (a.favourite === true ? 1 : 0);
  });

  return (
    <>
      <div className="flex flex-col min-h-[100vh] justify-between">
        <div>
          <Navbar />
          <div className="px-40 mt-20">
            <h3 className="text-2xl font-[500] pb-[1rem]">{eventList.title}</h3>
            <form onSubmit={handleSubmit}>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-[#A1A1A1] text-left">
                    <th className="w-[16rem] pl-6">
                      <p className="my-4">Event Title</p>
                    </th>
                    <th className="w-[16rem] pl-6">
                      <p>Date</p>
                    </th>
                    <th className="w-[16rem] pl-6">
                      <p>Time</p>
                    </th>
                    <th className="w-[16rem] pl-6">
                      <p>Category</p>
                    </th>
                    <th className="w-[8rem]">
                      <p>Favourite</p>
                    </th>
                    {eventList.createdBy != "John Doe" || (
                      <th className="w-[8rem]"></th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {sortedEvents.map((event) => (
                    <EditableTableRow
                      isEditable={eventList.createdBy == "John Doe"}
                      key={event.id}
                      row={event}
                      onInputChange={(field, value) =>
                        handleInputChange(event.id, field, value)
                      }
                      onDelete={() => deleteRow(event.id)}
                    />
                  ))}
                </tbody>
              </table>
              <div className="flex items-center flex-col">
                {eventList.createdBy != "John Doe" || (
                  <>
                    <button
                      className="text-primary-500 py-3 w-60 rounded-[0.2rem] hover:border-primary-600 transition text-center mt-8"
                      type="button"
                      onClick={addRow}
                    >
                      + Add Row
                    </button>
                    <button
                      className="bg-primary-500 text-white py-3 w-60 rounded-[0.2rem] mb-20 hover:bg-primary-600 transition text-center mt-8"
                      type="submit"
                    >
                      Create Event List
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EventList;
