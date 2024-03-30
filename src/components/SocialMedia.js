import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div class="social-container">
      <a href="https://www.facebook.com/linnareissut/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/linnareissut"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}