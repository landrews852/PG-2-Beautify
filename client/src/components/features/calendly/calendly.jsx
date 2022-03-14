import React, { useRef, useState } from "react";
import { CalendlyEventListener, InlineWidget } from "react-calendly";
// import "./styles.css";

export default function App() {
  const [isDoneScheduling, setDoneScheduling] = useState(false);
  const [isTimeSelected, setTimeSelected] = useState(false);

  const prefill = {
    name: "Name",
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
      <InlineWidget
          url={"https://calendly.com/beautify_pg"}
          // pageSettings={pageSettings.current}
          // prefill={prefill.current}
          pageSettings={pageSettings}
          prefill={prefill}
          styles={getCalendlyHeightToEnsureNoCrop()}
      />
    </CalendlyEventListener>
  );
}
