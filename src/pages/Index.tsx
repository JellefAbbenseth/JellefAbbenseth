import { useState, useEffect } from "react";
import '../styles/base.css';
import './Index.css';

const Index = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "EN");
  const [content, setContent] = useState(null);
  const [links, setLinks] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
	fetch("/texts.json")
	  .then((response) => {
		if (!response.ok) {
		  throw new Error(`Failed to fetch data: ${response.status}`);
		}
		return response.json();
	  })
	  .then((json) => {
		setContent(json.languages[language]?.index || {});
		setLinks(json.links || {});
		setImages(json.images || {});
	  })
	  .catch((error) => {
		console.error("Error fetching data:", error);
	  });
  }, [language]);

  const changeLanguage = (lang) => {
	setLanguage(lang);
	localStorage.setItem("language", lang);
  };
  const englishFlag = String.fromCodePoint(0x1F1EC, 0x1F1E7);
	const germanFlag = String.fromCodePoint(0x1F1E9, 0x1F1EA);

  return (
	<div className="background_img">

	  <h1>{content?.title || "Titel..."}</h1>

	  <div className="languages">
		  <button onClick={() => changeLanguage("EN")}>{englishFlag}</button>
		  <button onClick={() => changeLanguage("DE")}>{germanFlag}</button>
	  </div>

	  <div className="nav">
		  <ul className="nav-links">
			{links?.internal?.map((link, index) => {
              const labelKey = link.text.toLowerCase();
              const label = content?.[labelKey] || link.text;
              return (
			  <li key={index}>
				<a href={link.url}>{label}</a>
			  </li>
			  );
			})}
		  </ul>

		  <p className="connect-heading">{content?.contact || "Contact:"}</p>

          <ul>
              {links?.external?.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img src={link.icon} alt={link.text} width="50" height="50" />
                  </a>
                </li>
              ))}
          </ul>
      </div>
    </div>
  );
};

export default Index;
