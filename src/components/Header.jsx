function Header() {
  return (
    <header className="bg-tw-red flex items-center justify-between p-6 md:p-8 rounded-xl md:rounded-3xl mb-6">
      <section>
        <h1 className="text-tw-cream font-thin text-base md:text-xl">
          My balance
        </h1>
        <h2 className="text-tw-pale-orange font-bold text-2xl md:text-[2rem] md:mt-3">
          $921.48
        </h2>
      </section>

      <figure>
        <img src="/images/logo.svg" alt="logo" />
      </figure>
    </header>
  );
}

export default Header;
