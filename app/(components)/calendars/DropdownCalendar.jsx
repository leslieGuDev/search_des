import { formatDate } from "date-fns";
import { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SearchContext } from "../SearchingBar";

const DropdownCalendar = ({ title }) => {
  const today = new Date();
  const { info, setInfo } = useContext(SearchContext);
  const [time, setTime] = useState(null);
  const [showModal, setShowModel] = useState(false);
  const handleFocus = () => {
    setShowModel(true);
  };

  const handleChange = (time) => {
    let formatTime = formatDate(time, "PP");
    setTime(formatTime);
    setInfo({ ...info, start: formatTime });
    setShowModel(false);
  };

  return (
    <div>
      <input
        onFocus={handleFocus}
        className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={title}
        type='text'
        placeholder={title}
        defaultValue={time}
      />
      {showModal && (
        <Calendar
          onChange={(t) => handleChange(t)}
          value={time}
          defaultActiveStartDate={today}
          className='absolute shadow appearance-none border rounded bg-white py-2 px-3 w-80'
        />
      )}
    </div>
  );
};

export default DropdownCalendar;
