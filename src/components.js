/* --- React Import ------ */
import React, { useContext } from "react";
/* --- Context Import ---- */
import { CounterContext } from "./Context";
/* --- Data Import ------- */
import wall from "./wall";
/* --- Muuri Import ------ Api for drag and drop https://paol-imi.github.io/muuri-react/ */
import { MuuriComponent } from "muuri-react";

/* Demo component -------------------------------------------------------------------------------------------------------------------------------------*/

export const Demo = ({ children }) => {
  return <section className="grid-demo">{children}</section>;
};

/*Left Drawer Component -------------------------------------------------------------------------------------------------------------------------------*/

export const LeftDrawer = () => {
  const { appState, toggleActive } = useContext(CounterContext);
  return (
    <div id="left-drawer">
      <ul className="left-drawer-display-list">
        {Object.keys(wall.displays).map((id) => (
          <li
            key={id}
            className={`box ${
              appState.activeDisplayId === id ? "active" : "inactive"
            }`}
            onClick={() => {
              toggleActive(id);
            }}
          >
            {id}
          </li>
        ))}
      </ul>
    </div>
  );
};

/* Center Drawer Component ----------------------------------------------------------------------------------------------------------------------------*/

export const CenterDrawer = () => {
  const { toggleActiveStyle, toggleActive } = useContext(CounterContext);

  return (
    <div className="center-drawer">
      <Demo>
        <MuuriComponent dragEnabled>
          {Object.keys(wall.displays).map((id) => (
            <div
              key={id}
              id="single-display"
              className={toggleActiveStyle(id)}
              onClick={() => {
                toggleActive(id);
              }}
            >
              {id}

              <img
                className="imagine"
                src={wall.displays[id].src}
                alt="display"
              ></img>
            </div>
          ))}
        </MuuriComponent>
      </Demo>
    </div>
  );
};
