function Footer() {
  return (
    <footer className="mt-6 border-t border-tw-cream pt-6">
      <h1 className="text-base md:text-xl text-tw-medium-brown">
        Total this month
      </h1>

      <section className="flex items-center justify-between">
        <h2 className="font-bold text-3xl md:text-5xl text-tw-dark-brown">
          $478.33
        </h2>

        <div className="text-right">
          <h2 className="text-base md:text-xl font-bold text-tw-dark-brown">
            +2.4%
          </h2>
          <h4 className="text-base md:text-xl text-tw-medium-brown">
            from last month
          </h4>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
