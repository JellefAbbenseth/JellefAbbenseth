import { useEffect, useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "EN");
  const [texts, setTexts] = useState<any>({});
  const [images, setImages] = useState<any>({});

  useEffect(() => {
    fetch("/texts.json")
      .then(res => res.json())
      .then(json => {
        setTexts(json.languages?.[language]?.index || {});
        setImages(json.images?.flags || {});
      });
  }, [language]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="nav">
      <div className="nav_list">
        <ul>
          <li className="linked"><a href="/">Home</a></li>
          <li className="linked shown"><a href="/about">{texts.about}</a></li>
          <li className="linked shown"><a href="/projects">{texts.projects}</a></li>
        </ul>
      </div>

      <div className="languages">
        <p className="hidden">{language}</p>

        <a className="shown" onClick={() => changeLanguage("EN")}>
          <img src={images.eng} alt="English" />
        </a>

        <a className="shown" onClick={() => changeLanguage("DE")}>
          <img src={images.ger} alt="German" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
