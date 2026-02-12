import { useEffect, useState } from "react";
import "./AboutMe.css";
import Navigation from "./Navigation";

interface AboutContent {
  title_about?: string;
  texts?: string[];
  title_toolkit?: string;
}

interface AboutImages {
  portrait?: string;
  python?: string;
  java?: string;
  angular?: string;
  sqlite?: string;
  mysql?: string;
  github?: string;
  gitlab?: string;
}

const AboutMe = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "EN");
  const [content, setContent] = useState<AboutContent>({});
  const [images, setImages] = useState<AboutImages>({});

  useEffect(() => {
    fetch("/texts.json")
      .then((res) => res.json())
      .then((json) => {
        setContent(json.languages?.[language]?.about || {});
        setImages(json.images?.about || {});
      })
      .catch((err) => console.error("Error loading About data:", err));
  }, [language]);

  return (
    <>
        <Navigation />
        <div className="main">
          <div className="about_box">
            <div className="portrait box">
              <img src={images.portrait} alt="Portrait" />
            </div>

            <div className="content">
              <h2>{content.title_about} 👩‍💻</h2>

              <div className="content_box box">
                {content.texts?.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="toolkit_box">
            <h2>{content.title_toolkit} 💻</h2>

            <div className="item_box box">
              {[
                { src: images.python, label: "Python" },
                { src: images.java, label: "Java" },
                { src: images.angular, label: "Angular" },
                { src: images.sqlite, label: "SQLite" },
                { src: images.mysql, label: "MySQL" },
                { src: images.github, label: "Github" },
                { src: images.gitlab, label: "Gitlab" },
              ].map((item, index) => (
                <div className="item" key={index}>
                  <p className="hidden">{item.label}</p>
                  <img src={item.src} alt={item.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default AboutMe;
