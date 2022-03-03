import React, { useEffect, useState } from "react";
import { CalendlyEventListener, InlineWidget } from "react-calendly";
// import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../../redux/actions";
import Loading from "../../elements/loading/loading";


export default function App() {
  const [isDoneScheduling, setDoneScheduling] = useState(false);
  const [isTimeSelected, setTimeSelected] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, []);
  const services = useSelector((state) => state.services);
  const isLoading = useSelector((state) => state.isLoading);

  const prefill = {
    name: "Test Name",
    email: "Email@gmail.com"
  };

  const pageSettings = {
    primaryColor: "417658",
    textColor: "251e35",
    backgroundColor: "f7f5f4",
    hideLandingPageDetails: true,
    hideEventTypeDetails: true
  };

  // const prefill = useRef({
  //   name: "Test Name",
  //   email: "Email@gmail.com"
  // });

  // const pageSettings = useRef({
  //   primaryColor: "417658",
  //   textColor: "251e35",
  //   backgroundColor: "f7f5f4",
  //   hideLandingPageDetails: true,
  //   hideEventTypeDetails: true
  // });

  function getCalendlyHeightToEnsureNoCrop() {
    if (!isTimeSelected) return { height: 885 };
    if (isDoneScheduling) return { height: 450 };
    return { height: 1060 };
  }

  function handleDateAndTimeSelected() {
    setTimeSelected(true);
  }

  function handleEventScheduled() {
    setDoneScheduling(true);
  }

  return (
    <CalendlyEventListener
      onDateAndTimeSelected={handleDateAndTimeSelected}
      onEventScheduled={handleEventScheduled}
      >
        {isLoading ? <Loading /> : services.map((service) => (
          <InlineWidget
          url={`https://calendly.com/beautify_pg/${service.name_service.replace(/\s+/g, "-")}`}
          // pageSettings={pageSettings.current}
          // prefill={prefill.current}
          pageSettings={pageSettings}
          prefill={prefill}
          styles={getCalendlyHeightToEnsureNoCrop()}
          />))}
    </CalendlyEventListener>
  );
        
        
        }
        

