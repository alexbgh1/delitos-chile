// React
import { useEffect, useState } from "react";
// Components
import { Header, Footer, Form, Graph } from "./components";
// Data
import Parameters from "/parameters.json";

import { setTimeZone } from "./utils";

function App() {
  const [parameters, setParameters] = useState(Parameters);
  console.log(parameters);
  const [submitObject, setSubmitObject] = useState({
    startDate: new Date(`${Parameters.years[0]}/${Parameters.months[0]}`),
    endDate: new Date(`${Parameters.years.slice(-1)}/${Parameters.months.slice(-1)}`),
    group_crime: Parameters.groups[Object.keys(Parameters.groups)[0]][0],
    crime: Parameters.groups[Object.keys(Parameters.groups)[0]][0],
  });

  const [data, setData] = useState([]);
  const [data_values, setDataValues] = useState({
    fecha: [],
    cantidad: [],
  });

  // const fetchData = async () => {
  //   const response = await fetch(
  //     `./data/${parameters.folder_to_save}/${submitObject.group_crime}.json`
  //   );
  //   const data = await response.json();
  //   setData(data);
  //   return data;
  // };

  // using fetch on useEffect
  useEffect(() => {
    const fetchData = async () => {
      // Validation just in case, destructuring
      const { startDate, endDate, group_crime, crime } = submitObject;
      // If startDate > endDate, set endDate to startDate

      // url to fetch: https://alexbgh1.github.io/delitos-chile-data/data/{group_crime}.json

      try {
        const response = await fetch(`https://alexbgh1.github.io/delitos-chile-data/data/${group_crime}.json`);
        const data = await response.json();
        const filteredData = data.filter(
          (item) => setTimeZone(new Date(item.fecha)) >= startDate && setTimeZone(new Date(item.fecha)) <= endDate
        );

        setData(filteredData);
        setDataValues({
          fecha: filteredData.map(
            (item) =>
              setTimeZone(new Date(item.fecha)).getFullYear() + "-" + (setTimeZone(new Date(item.fecha)).getMonth() + 1)
          ),
          cantidad: filteredData.map((item) => item[crime]),
        });
      } catch (error) {
        console.log("Error on fetch data");
        console.log(error);
      }
    };
    // We cant use data.filter here because it's not updated yet, so instead we filter it in the fetchData function
    fetchData();
  }, [submitObject]);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="lg:flex mb-auto h-auto flex-grow bg-[url('./assets/bg-main.jpg')] bg-cover bg-no-repeat saturate-[0.95]">
        <div className="grid items-center grid-cols-1 gap-5 lg:grid-cols-3 mx-8 my-16 md:mx-16">
          <Form
            parameters={parameters}
            submitObject={submitObject}
            setSubmitObject={setSubmitObject}
            data={data}
            setData={setData}
            setDataValues={setDataValues}
          />
          <Graph data={data} data_values={data_values} submitObject={submitObject} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
