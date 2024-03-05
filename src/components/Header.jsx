const Header = () => {
  return (
    <header className="h-16 bg-indigo-800 text-indigo-50">
      <div className="flex flex-col justify-center h-full mx-8">
        <p className="text-center text-xl font-bold my-2 cursor-default">
          Delitos en Chile [2005 - 2023] -{" "}
          <a
            href="
            http://cead.spd.gov.cl/estadisticas-delictuales/"
            target={"_blank"}
            className="unselectable"
          >
            <span className="underline hover:text-indigo-200">cead spd</span>
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
