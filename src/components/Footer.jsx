const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 px-10 py-16">
        <nav className="md:col-span-4 flex flex-col items-center md:items-start justify-center gap-4">
          <h6 className="text-white font-bold text-base">Services</h6>
          <div className="flex flex-col items-center md:items-start gap-2 text-sm">
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Branding
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Design
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Marketing
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Advertisement
            </a>
          </div>
        </nav>

        <nav className="md:col-span-4 flex flex-col items-center md:items-start justify-center gap-4">
          <h6 className="text-white font-bold text-base">Company</h6>
          <div className="flex flex-col items-center md:items-start gap-2 text-sm">
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              About us
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Contact
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Jobs
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Press kit
            </a>
          </div>
        </nav>

        <nav className="md:col-span-4 flex flex-col items-center md:items-start justify-center gap-4">
          <h6 className="text-white font-bold text-base">Legal</h6>
          <div className="flex flex-col items-center md:items-start gap-2 text-sm">
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Terms of use
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Privacy policy
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Cookie policy
            </a>
          </div>
        </nav>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CareConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
