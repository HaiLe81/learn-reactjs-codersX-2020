import React, { useState } from "react";
import "./SearchBox.css";

export default function SearchBox() {
  const [state, setState] = useState({ isFocused: false });
  const [value, setValue] = useState({ content: "" });

  return (
    <div className="input">
      <input
        className={`${value.content.length > 10 ? "newBoder" : ""}`}
        value={value.content}
        onChange={e => setValue({ content: e.target.value })}
        onBlur={() => setState({ isFocused: false })}
        onFocus={() => setState({ isFocused: true })}
        placeholder="Type something to search..."
      />
      {!state.isFocused && (
        <div className="search">
          <img
            alt="not found"
            src="https://image.flaticon.com/icons/svg/2899/2899418.svg"
          />
        </div>
      )}
    </div>
  );
}
