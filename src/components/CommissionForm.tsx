import { useState } from "react";
import { hover, unhover } from "../hover.ts";

export default function CommissionForm() {
  let [selectedIndex, setSelectedIndex] = useState(1);

  function next() {
    setSelectedIndex(selectedIndex + 1);
    const sections = document.getElementsByClassName("commission-form-section");
    sections.forEach((s) => {});
  }

  return (
    <div className="tenor-sans" id="commission-form-container">
      <div id="form-section-1" className="commission-form-section active">
        <div className="commission-form-field">
          <label>name</label>
          <input />
        </div>
        <div className="commission-form-field">
          <label>email address</label>
          <input />
        </div>
      </div>
      <div id="form-section-2" className="commission-form-section">
        <div className="commission-form-field">
          <label>what is the purpose of your commission?</label>
          <input />
        </div>
        <div className="commission-form-field">
          <label>project timeline</label>
          <input />
        </div>
      </div>
      <div id="form-section-3" className="commission-form-section">
        <div className="commission-form-field">
          <label>any additional information?</label>
          <input />
        </div>
      </div>
      <div id="commission-form-buttons">
        <button
          className="tenor-sans banner-btn button"
          onClick={() => setSelectedIndex(selectedIndex - 1)}
          onMouseEnter={(e) => hover("back")}
          onMouseLeave={(e) => unhover("back")}
        >
          <div className="button">
            <span className="btn-text" id="back-link-head">
              back
            </span>
            <span className="btn-text" id="back-link-tail">
              back
            </span>
          </div>
        </button>
        <button
          className="tenor-sans banner-btn button"
          onClick={() => setSelectedIndex(selectedIndex + 1)}
          onMouseEnter={(e) => hover("next")}
          onMouseLeave={(e) => unhover("next")}
        >
          <div className="button">
            <span className="btn-text" id="next-link-head">
              next
            </span>
            <span className="btn-text" id="next-link-tail">
              next
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
