import React, { useState } from 'react'
import "./App.css";

const tipi = [
  {
    label: "Vticnice",
    value: "vticnice",
  },
  {
    label: "Stikala",
    value: "stikala",
  },
  {
    label: "Napisi",
    value: "napisi",
  },
  {
    label: "LAN",
    value: "lan",
  },
  {
    label: "Svetila",
    value: "luci",
  },
  {
    label: "Kanaleta",
    value: "kanaleta",
  },
];

const floors = [
  {
    label: "Pritlicje",
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
  return (
    <div className="appWrap">
      <nav>
        {floors.map(({ value, label }) => {
          return (
            <button
              className={value === activeFloor ? "active" : ""}
              onClick={() => {
                setFloor(value);
                // this resets all checkboxes
                setTypes([])
              }}
            >
              {label}
            </button>
          );
        })}
        <span className="cbTypes">
          {tipi.map(({ value, label }) => {
            return (
              <label>
                <input
                  type="checkbox"
                  checked={activeTypes.includes(value)}
                  onChange={() => {
                    setTypes(
                      activeTypes.includes(value)
                        ? activeTypes.filter((t) => t !== value)
                        : [...activeTypes, value]
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
          <img src={`/static/img/tloris_${activeFloor}.jpg`} />
          <div className="imgOverlays">
            {activeTypes.map(val => <img src={`/static/img/${activeFloor}_${val}.png`} />)}
          </div>
        </div>
      </main>
    </div>
  );
}
