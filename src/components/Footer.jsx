const Footer = () => {
  return (
    <div>
      <footer className="grid grid-cols-12 h-10 px-10 py-20 ">
        <nav className="col-span-4 flex flex-col items-center justify-center gap-5">
          <h6 className="footer-title font-bold">Services</h6>
          <div className=" flex flex-col items-center justify-center">
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
        </nav>
        <nav className="col-span-4 flex flex-col items-center justify-center gap-5">
          <h6 className="footer-title font-bold">Company</h6>
          <div className=" flex flex-col items-center justify-center">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        </nav>
        <nav className="col-span-4 flex flex-col items-center justify-center gap-5">
          <h6 className="footer-title font-bold">Legal</h6>
          <div className=" flex flex-col items-center justify-center">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
