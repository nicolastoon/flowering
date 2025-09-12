export default function Header() {
  return (
    <div className="page-header">
      <span onClick={() => window.open("/flowering/")} className="button" id="home-btn">paper petals</span>
      <span onClick={() => window.open("/flowering/gallery/")} className='tenor-sans button' id="gallery-btn">gallery</span>
      <span onClick={() => window.open("/flowering/commission/")} className='tenor-sans button' id="commission-btn">commission</span>
    </div>
  );
}
