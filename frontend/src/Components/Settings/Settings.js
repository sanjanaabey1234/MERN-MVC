import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./settings.css";
import { ThemeContext, LanguageContext } from "../context/Contexts";
import { useTranslation } from "react-i18next";
import Nav from "../Nav/Nav";

function Settings() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={`settings-page ${theme}`}>
      <Nav></Nav>
      <header className="settings-header">
        <h1>{t("settings.title")}</h1>
      </header>
      <section className="settings-content">
        <div className="settings-section">
          <h2>{t("settings.theme")}</h2>
          <select value={theme} onChange={handleThemeChange}>
            <option value="light">{t("settings.light")}</option>
            <option value="dark">{t("settings.dark")}</option>
          </select>
        </div>
        <div className="settings-section">
          <h2>{t("settings.language")}</h2>
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">{t("settings.english")}</option>
            <option value="es">{t("settings.spanish")}</option>
            {/* Add more languages as needed */}
          </select>
        </div>
      </section>
      <footer className="settings-footer">
        <Link to="/" className="home-link">
          {t("settings.backHome")}
        </Link>
      </footer>
    </div>
  );
}

export default Settings;
