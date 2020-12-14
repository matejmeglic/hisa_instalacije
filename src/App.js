import React, { useState } from "react";
import "./App.css";

const tipi = [
  {
    label: "Vtičnice",
    value: "vticnice",
    deps: "elektrika",
  },
  {
    label: "Stikala",
    value: "stikala",
    deps: "napisi",
  },
  {
    label: "Napisi",
    value: "napisi",
    deps: "",
  },
  {
    label: "Internet",
    value: "lan",
    deps: "",
  },
  {
    label: "Svetila",
    value: "luci",
    deps: "",
  },
  {
    label: "LED",
    value: "led",
    deps: "",
  },
  {
    label: "Streha",
    value: "streha",
    deps: "nadstresek",
  },
  {
    label: "Nadstrešek",
    value: "nadstresek",
    deps: "",
  },
  {
    label: "Meteo",
    value: "meteo",
    deps: "",
  },
  {
    label: "Kamere",
    value: "kamere",
    deps: "",
  },
  {
    label: "Cevi",
    value: "cevi",
    deps: "elektrika",
  },
  {
    label: "Elektrika zunaj",
    value: "elektrika",
    deps: "",
  },
  {
    label: "Voda zunaj",
    value: "voda",
    deps: "",
  },
];

const floors = [
  {
    label: "Pritličje",
    value: "prit",
  },
  {
    label: "Nadstropje",
    value: "nad",
  },
];
export default function App() {
  const [activeFloor, setFloor] = useState(floors[0].value);
  const [activeTypes, setTypes] = useState([]);
  const [activeChecked, setChecked] = useState([]);

  return (
    <div className="appWrap">
      <nav>
        {floors.map(({ value, label }) => {
          return (
            <button
              key={value}
              className={value === activeFloor ? "active" : ""}
              onClick={() => {
                setFloor(value);
                // this resets all checkboxes
                //setTypes([])
              }}
            >
              {label}
            </button>
          );
        })}

        <span className="cbTypes">
          {tipi.map(({ value, label, deps }) => {
            return (
              <label key={value}>
                <input
                  type="checkbox"
                  checked={activeChecked.includes(value)}
                  onChange={() => {
                    setChecked(
                      // preveri checkboxe
                      activeChecked.includes(value)
                        ? activeChecked.filter((t) => t !== value)
                        : [...activeChecked, value, deps].filter(
                            (t) => t !== ""
                          )
                    );
                    setTypes(
                      // izpis value+deps
                      activeChecked.includes(value)
                        ? activeTypes.filter((t) => t !== value)
                        : [deps, ...activeTypes, value].filter((t) => t !== "")
                    );
                  }}
                />
                {label}
              </label>
            );
          })}
        </span>
      </nav>

      <main>
        <div className="blueprint">
          <img
            className="background"
            alt="background"
            src={`/static/img/tloris_${activeFloor}.jpg`}
          />
          <div className="imgOverlays">
            {activeTypes.map((val) => (
              <img
                alt="overlay"
                src={`/static/img/${activeFloor}_${val}.png`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
