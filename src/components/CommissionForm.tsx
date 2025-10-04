import { useState } from "react";
import { hover, unhover } from "../hover.ts";
import { submitForm } from "../submit.ts";
import { Dot } from "lucide-react";

export default function CommissionForm() {
  let [selectedIndex, setSelectedIndex] = useState(1);
  const N_SECTIONS = 4;

  return (
    <form
      className="tenor-sans"
      id="commission-form"
      onSubmit={(e) => submitForm(e)}
    >
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
          <input
            className="tenor-sans form-input"
            id="name-input"
            placeholder="your name"
          />
        </div>
        <div className="commission-form-field">
          <label>email address</label>
          <input
            className="tenor-sans form-input"
            id="email-input"
            placeholder="your email address"
          />
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
          <input
            className="tenor-sans form-input"
            id="purpose-input"
            placeholder="e.g. a birthday, anniversary, holiday, etc."
          />
        </div>
        <div className="commission-form-field">
          <label>commission timeline</label>
          <input
            className="tenor-sans form-input"
            id="timeline-input"
            placeholder="e.g. before MM/DD, no strict timeline, etc."
          />
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
          <label>commission description</label>
          <textarea
            className="tenor-sans form-input form-textarea"
            id="description-input"
            placeholder="e.g. I would like a big bouquet of red roses, etc."
          />
        </div>
      </div>
      <div
        id="form-section-4"
        className={
          selectedIndex === 4
            ? "commission-form-section active"
            : "commission-form-section"
        }
      >
        <div className="commission-form-field">
          <label>any additional information?</label>
          <textarea
            className="tenor-sans form-input form-textarea"
            id="additional-info-input"
            placeholder="notes about your commission (no rush, you can reach out to us at a later time if something arises)"
          />
        </div>
      </div>
      <div
        id="form-section-1000"
        className={
          selectedIndex === 1000
            ? "commission-form-section active"
            : "commission-form-section"
        }
      >
        <div className="commission-form-field">
          <label id="status-msg"></label>
        </div>
      </div>
      <div id="commission-form-buttons">
        <button
          className="tenor-sans banner-btn form-btn"
          id="back-btn"
          type="button"
          style={{
            display: selectedIndex > 1 && selectedIndex <= N_SECTIONS ? "block" : "none",
          }}
          onClick={() => {
            if (selectedIndex > 1) {
              setSelectedIndex(selectedIndex - 1);
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
        <div style={{ display: selectedIndex === 1000 ? "none" : "block" }}>
          {Array.from({ length: N_SECTIONS }, (_, i) => (
            <Dot
              key={i + 1}
              className={selectedIndex === i + 1 ? "active" : ""}
              id={`dot-${i + 1}`}
            />
          ))}
        </div>
        <button
          className="tenor-sans banner-btn form-btn"
          id="next-btn"
          type="button"
          style={{ display: selectedIndex >= N_SECTIONS ? "none" : "block" }}
          onClick={() => {
            if (selectedIndex < N_SECTIONS) {
              setSelectedIndex(selectedIndex + 1);
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
        <button
          className="tenor-sans banner-btn form-btn"
          id="submit-btn"
          type="submit"
          style={{ display: selectedIndex === N_SECTIONS ? "block" : "none" }}
          onClick={() => {
            setSelectedIndex(1000);
          }}
          onMouseEnter={() => hover("submit")}
          onMouseLeave={() => unhover("submit")}
        >
          <div className="button">
            <span className="btn-text" id="submit-link-head">
              submit
            </span>
            <span className="btn-text" id="submit-link-tail">
              submit
            </span>
          </div>
        </button>
        <button
          className="tenor-sans banner-btn form-btn"
          id="resubmit-btn"
          type="button"
          style={{ display: selectedIndex === 1000 ? "block" : "none" }}
          onClick={() => {
            setSelectedIndex(1);
          }}
          onMouseEnter={() => hover("resubmit")}
          onMouseLeave={() => unhover("resubmit")}
        >
          <div className="button">
            <span className="btn-text" id="resubmit-link-head">
              resubmit form
            </span>
            <span className="btn-text" id="resubmit-link-tail">
              resubmit form
            </span>
          </div>
        </button>
      </div>
    </form>
  );
}
