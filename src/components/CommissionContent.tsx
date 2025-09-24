import CommissionForm from "./CommissionForm";

export default function CommissionContent() {
  return (
    <div className="banner-content" id="commission-container">
      <div id="commission-text">
        <span className="banner-title tenor-sans">
          in need of a bespoke bouquet?
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="50"
          viewBox="0 0 90 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          className="lucide lucide-minus-icon lucide-minus"
        >
          <path d="M0 12h90" />
        </svg>
        <span className="tenor-sans">
          to get started, we ask that you provide some initial information about
          your desired commission to help us determine whether we are the right
          fit for you.
        </span>
        <span className="tenor-sans">
          we will review the details and be in touch to discuss next steps
          shortly.
        </span>
      </div>
      <CommissionForm />
    </div>
  );
}
