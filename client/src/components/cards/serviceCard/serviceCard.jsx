import React, { useEffect } from "react";
import Style from "./serviceCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../../redux/actions";
import Loading from "../../elements/loading/loading";


export default function CardService() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, []);
  const services = useSelector((state) => state.services);
  const isLoading = useSelector((state) => state.isLoading);
  
  return (
    <div id={Style.cont}>
      {isLoading ? <Loading /> : services.map((service) => (
        <div key={service.id} id={Style.container}>
          <div className={Style["product-details"]}>
            <div className={Style["title-stars"]}>
              <h1>{service.name_service}</h1>

              <span className={[Style["hint-star"], Style.star].join(" ")}>
                <i
                  className={[Style.fa, Style["fa-star"]].join(" ")}
                  aria-hidden="true"
                ></i>
                <i
                  className={[Style.fa, Style["fa-star"]].join(" ")}
                  aria-hidden="true"
                ></i>
                <i
                  className={[Style.fa, Style["fa-star"]].join(" ")}
                  aria-hidden="true"
                ></i>
                <i
                  className={[Style.fa, Style["fa-star-half-o"]].join(" ")}
                  aria-hidden="true"
                  ></i>
                <i
                  className={[Style.fa, Style["fa-star-o"]].join(" ")}
                  aria-hidden="true"
                  ></i>
              </span>
            </div>
            <p className={Style.information}>{service.description}</p>
            

            <div className={Style.control}>
           {console.log(service.name_service.replace(/\s+/g, "-"))}

            <a href={ `https://calendly.com/beautify_pg/${service.name_service.replace(/\s+/g, "-")}`} target="_blank"><button>Agenda tu cita</button></a>
            </div>
          </div>

          <div className={Style["product-image"]}>
            <img src={service.image[0]} alt="Omar Dsoky" />
          </div>
        </div>
  ))
}
    </div >
  );
}
