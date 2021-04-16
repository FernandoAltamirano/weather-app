import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/App.css";
import Footer from "./Footer";
import Modal from "./Modal";
import OtherDaysContainer from "./OtherDaysContainer";
import Principal from "./Principal";
import TodayHightlights from "./TodayHightlights";
import Grades from "./Grades";
const URL = "https://www.metaweather.com/api/location/search/";
function App() {
  const [data, setData] = useState(null);
  const [cities, setCities] = useState(null);
  const [show, setShow] = useState(false);
  const [grades, setGrades] = useState("c");
  const getData = async (city) => {
    try {
      const getResponse = await axios.get(`${URL}?query=${city}`);
      const query = getResponse.data[0];
      if (query) {
        const finalData = await axios.get(
          `https://www.metaweather.com/api/location/${query.woeid}`
        );
        setData(finalData.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const getCities = async (search) => {
    const getResponse = await axios.get(`${URL}?query=${search}`);
    setCities(getResponse.data);
  };

  const getCityData = async (city) => {
    getData(city);
  };
  useEffect(() => {
    getData("lima");
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const showModal = () => {
    setShow(!show);
  };
  const handleGrades = (grades) => {
    setGrades(grades);
  };
  return (
    <div className="App">
      <div className="left">
        <Modal
          getCities={getCities}
          cities={cities}
          getCityData={getCityData}
          show={show}
          showModal={showModal}
        />
        <Principal
          showModal={showModal}
          data={data?.consolidated_weather[0]}
          title={data?.title}
        />
      </div>
      <div className="right">
        <Grades handleGrades={handleGrades} />
        <OtherDaysContainer data={data?.consolidated_weather} grades={grades} />
        <TodayHightlights data={data?.consolidated_weather[0]} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
