"use client";
import { useLanguage } from '@/hooks/useLanguage';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { currentLocale, changeLanguage } = useLanguage();

  const FlagIcon = ({ locale, children }) => (
    <svg
      width="20"
      height="15"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.flagIcon}
    >
      {children}
    </svg>
  );

  const EnglishFlag = () => (
    <FlagIcon locale="en">
      <rect width="24" height="18" fill="#012169"/>
      <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="3"/>
      <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="2"/>
      <path d="M12 0V18M0 9H24" stroke="white" strokeWidth="5"/>
      <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="3"/>
    </FlagIcon>
  );

  const BrazilianFlag = () => (
    <FlagIcon locale="pt-BR">
      <rect width="24" height="18" fill="#009C3B"/>
      <path d="M12 9L24 0H0L12 9Z" fill="#FFDF00"/>
      <circle cx="12" cy="9" r="3" fill="#002776"/>
      <path d="M12 6L13.5 8.5L12 11L10.5 8.5L12 6Z" fill="white"/>
    </FlagIcon>
  );

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.flagButton} ${currentLocale === 'en' ? styles.active : ''}`}
        onClick={() => changeLanguage('en')}
        title="English"
        aria-label="Switch to English"
      >
        <EnglishFlag />
      </button>
      <button
        className={`${styles.flagButton} ${currentLocale === 'pt-BR' ? styles.active : ''}`}
        onClick={() => changeLanguage('pt-BR')}
        title="Português Brasileiro"
        aria-label="Mudar para Português Brasileiro"
      >
        <BrazilianFlag />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
