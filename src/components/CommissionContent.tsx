import Divider from "./Divider.tsx";
import CommissionForm from "./CommissionForm";

export default function CommissionContent() {
  return (
    <section id="commission-page">
      <div className="banner" id="commission-container">
        <div id="commission-text">
          <span className="banner-title tenor-sans">
            in need of a bespoke bouquet?
          </span>
          <Divider />
          <span className="tenor-sans">
            to get started, we ask that you provide some initial information
            about your desired commission to help us determine whether we are
            the right fit for you.
          </span>
          <span className="tenor-sans">
            we will review the details and be in touch to discuss next steps
            shortly.
          </span>
        </div>
        <CommissionForm />
      </div>

      <span className="page-title">commission</span>
    </section>
  );
}
