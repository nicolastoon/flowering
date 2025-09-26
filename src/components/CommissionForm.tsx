import { useState } from "react";
import { hover, unhover } from "../hover.ts";
import { Dot } from "lucide-react";

export default function CommissionForm() {
  function changeIndex(i: number) {
    const sections = document.getElementsByClassName("commission-form-section");
    Array.from(sections).forEach((s) => {
      s.className =
        s.id === `form-section-${i}`
          ? "commission-form-section active"
          : "commission-form-section";
    });
  }

  let [selectedIndex, setSelectedIndex] = useState(1);

  // function next() {
  //   setSelectedIndex(selectedIndex + 1);
  //   const sections = document.getElementsByClassName("commission-form-section");
  // }

  return (
    <div className="tenor-sans" id="commission-form-container">
      <div
        id="form-section-1"
        className={
          selectedIndex === 1
            ? "commission-form-section active"
            : "commission-form-section"
        }
      >
        <div className="commission-form-field">
          <label>name</label>
          <input className="tenor-sans" placeholder="your name"/>
        </div>
        <div className="commission-form-field">
          <label>email address</label>
          <input className="tenor-sans" placeholder="your email address"/>
        </div>
      </div>
      <div
        id="form-section-2"
        className={
          selectedIndex === 2
            ? "commission-form-section active"
            : "commission-form-section"
        }
      >
        <div className="commission-form-field">
          <label>what is the purpose of your commission?</label>
          <input className="tenor-sans" placeholder="a birthday, anniversary, holiday, etc." />
        </div>
        <div className="commission-form-field">
          <label>project timeline</label>
          <input className="tenor-sans" placeholder="2-4 weeks, before a certain date, etc."/>
        </div>
      </div>
      <div
        id="form-section-3"
        className={
          selectedIndex === 3
            ? "commission-form-section active"
            : "commission-form-section"
        }
      >
        <div className="commission-form-field">
          <label>any additional information?</label>
          <input className="tenor-sans" id="additional-info-input" placeholder="Hello! I would like to..."/>
        </div>
      </div>
      <div id="commission-form-buttons">
        <button
          className="tenor-sans banner-btn form-btn button"
          onClick={() => {
            if (selectedIndex > 1) {
              setSelectedIndex(selectedIndex - 1);
              changeIndex(selectedIndex);
            }
          }}
          onMouseEnter={() => hover("back")}
          onMouseLeave={() => unhover("back")}
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
        <div>
          <Dot className={selectedIndex === 1 ? "active" : ""} id="dot-1" />
          <Dot className={selectedIndex === 2 ? "active" : ""} id="dot-2" />
          <Dot className={selectedIndex === 3 ? "active" : ""} id="dot-3" />
        </div>
        <button
          className="tenor-sans banner-btn form-btn button"
          onClick={() => {
            if (selectedIndex < 3) {
              setSelectedIndex(selectedIndex + 1);
              changeIndex(selectedIndex);
            }
          }}
          onMouseEnter={() => hover("next")}
          onMouseLeave={() => unhover("next")}
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
