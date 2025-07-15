import React from 'react';
import { useTranslation } from "react-i18next";

import "../styles/VideoPlayer.scss";

function VideoPlayer() {
  const { t } = useTranslation();

  return (
    <div className="video-container">
        <div className="video-wrapper">
            <iframe src="https://www.youtube.com/embed/T2uPLKQQYzs?si=N8cMo-pqMJZfqBnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>{t("youtube_author")}
            <a className="video-link" href='https://www.youtube.com/@Moscizwysokosci'> Mości z wysokości</a>
        </p>
    </div>
  );
}

export default VideoPlayer;
