import { useTranslation } from "react-i18next";
import "../styles/VideoPlayer.scss";

function VideoPlayer() {
  const { t } = useTranslation();

  return (
    <figure className="video">
      <div className="video__frame">
        <iframe
          src="https://www.youtube.com/embed/T2uPLKQQYzs?si=N8cMo-pqMJZfqBnc"
          title="Fuerteventura — Costa Calma"
          /* Lowercase `frameborder` / `allowfullscreen` were invalid JSX
             attributes and logged React warnings on every render. */
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <figcaption className="video__caption">
        {t("youtube_author")}{" "}
        <a
          className="video__link"
          href="https://www.youtube.com/@Moscizwysokosci"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mości z wysokości
        </a>
      </figcaption>
    </figure>
  );
}

export default VideoPlayer;
