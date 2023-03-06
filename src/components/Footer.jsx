import logoGithub from "../assets/logoGithub.png";

const Footer = () => {
  return (
    <footer className="h-16 bg-indigo-800 text-indigo-50">
      <div className="flex flex-col justify-center h-full mx-8">
        <p className="text-center text-sm">
          <a
            href="https://github.com/alexbgh1/delitos-chile"
            target={"_blank"}
            className="unselectable"
          >
            <img
              src={logoGithub}
              draggable="false"
              alt="Github logo"
              className="h-6 inline"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
