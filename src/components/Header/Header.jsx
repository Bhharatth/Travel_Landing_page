import {
  faLocation,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { format } from "date-fns";
import "./Header.css";
import Featured from "../Featured/Featured";

const Header = () => {
  const [initialDates, setInitialDates] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [selectoptions, setSelectOptions]= useState(false);
 
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="headerContainer" >
      <NavBar />
      <div className="header">
        <div className="headerDetails">

          <div className="headerSearchItem">
            <span className="headerSearchText">From</span>
            <input
              className="headerSearchInput"
              placeholder="Thiruvananthapuram[trv]"
            />
          </div>
          <div className="headerSearchItem">
            <span className="headerSearchText">To</span>
            <input
              className="headerSearchInput"
              placeholder="country, city, or airport"
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="headerSearchText">Location</span>
            <input
              className="headerSearchInput"
              placeholder="Choose destination"
            />
          </div>
          
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faUser} />
            <input className="headerSearchInput" placeholder="1 Adult" onClick={()=>setSelectOptions(!selectoptions)}/>
          { selectoptions && (<div className="options">
                <div className="optionItem">
                    <span>Adult</span>
                    <div className="optionCounter">
                        <div className="buttonsContainer">
                        <button className="optionCounterButton" disabled={options.adult <=1} onClick={()=> handleOption("adult", "d")}>-</button>
                        <span className="OptionCountNumber">{options.adult}</span>
                        <button className="optionCounterButton" onClick={()=> handleOption("adult", "i")}>+</button>
                        </div>
        
                    </div>
                </div>

                <div className="optionItem">
                    <span>Children</span>
                    <div className="optionCounter">
                        <div className="buttonsContainer">
                        <button className="optionCounterButton" disabled={options.adult <=1} onClick={()=> handleOption("children", "d")}>-</button>
                        <span className="OptionCountNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={()=> handleOption("children", "i")}>+</button>
                        </div>
         
                    </div>
                </div>

                <div className="optionItem">
                    <span className="optionTitle">Cabin Class: </span>
                    <select>
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Bussiness class</option>
                        <option>First class</option>
                    </select>

                </div>
                <button className="optionsButton">APPLY</button>
            </div>)}
          </div>
          <div className="headerSearchDate">
            <span
              onClick={() => setInitialDates(!initialDates)}
              className="headerSearchDateText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {initialDates && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchButton">Search</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
