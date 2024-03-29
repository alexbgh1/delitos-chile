// Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);
setDefaultLocale("es");

const Form = ({ parameters, submitObject, setSubmitObject }) => {
  const handleChange = (e) => {
    // Saving optgroup label value
    const group_crime = e.target.options[e.target.selectedIndex].parentNode.label;
    // Saving option value
    const crime = e.target.value;

    setSubmitObject({ ...submitObject, group_crime, crime });
  };

  return (
    <div className="w-auto p-2 bg-[#4c1d954D] rounded-xl lg:order-2 ">
      <form className="h-full bg-indigo-50 p-6 rounded-md">
        <fieldset className="flex flex-col lg:flex-row lg:justify-between gap-4">
          <legend className="text-xl font-bold text-gray-700 mb-4 cursor-default">Select a date range</legend>

          <section className="mt-2">
            {/* DATE - FROM */}
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 w-auto">
              From
            </label>

            <DatePicker
              // CSS
              id="startDate"
              name="startDate"
              className="w-full bg-violet-200 rounded-md px-4 py-1 text-gray-800 cursor-pointer outline-none"
              // Format
              dateFormat="MM/yyyy"
              // Date config & handlers
              selected={submitObject.startDate}
              onChange={(date) => setSubmitObject({ ...submitObject, startDate: date })}
              startDate={submitObject.startDate}
              endDate={submitObject.endDate}
              // Options
              selectsStart
              showMonthYearPicker
              minDate={new Date(parameters.years[0], parameters.months[0] - 1)} // 2005, 1
              maxDate={
                // 2023, 12
                submitObject.endDate
              }
            />
          </section>

          <section className="mt-2">
            {/* DATE - TO */}

            <label htmlFor="endDate" className="block text-sm font-medium text-gray-800">
              To
            </label>
            <DatePicker
              // CSS
              id="endDate"
              name="endDate"
              className="w-full bg-violet-200 rounded-md px-4 py-1 text-gray-700 cursor-pointer"
              // Format
              dateFormat="MM/yyyy"
              // Date config & handlers
              selected={submitObject.endDate}
              onChange={(date) => setSubmitObject({ ...submitObject, endDate: date })}
              startDate={submitObject.startDate}
              endDate={submitObject.endDate}
              // Options
              selectsEnd
              showMonthYearPicker
              minDate={submitObject.startDate}
              maxDate={new Date(parameters.years.slice(-1), parameters.months.slice(-1) - 1)}
            />
          </section>
        </fieldset>
        <fieldset className="mt-4">
          <legend className="text-xl font-bold text-gray-700 mb-4 cursor-default">Select a Crime</legend>
          <select
            name="crime"
            className="w-full outline-none bg-violet-200 rounded-md px-4 py-1 text-gray-700 cursor-pointer"
            onChange={handleChange}
          >
            {
              // Iterate over groups
              // Iterate over keys of groups
              Object.keys(parameters.groups).map((group) => {
                return (
                  <optgroup label={group} key={group}>
                    {
                      // Iterate over crimes
                      parameters.groups[group].map((crime) => {
                        return (
                          <option value={crime} key={crime} defaultValue={crime === submitObject.crime ? true : false}>
                            {crime}
                          </option>
                        );
                      })
                    }
                  </optgroup>
                );
              })
            }
          </select>
        </fieldset>
        {/* <input
          className="flex cursor-pointer bg-indigo-400 mx-auto text-white rounded-md mt-8 px-8 py-2"
          type="submit"
          value="Submit"
        /> */}
      </form>
    </div>
  );
};

export default Form;
