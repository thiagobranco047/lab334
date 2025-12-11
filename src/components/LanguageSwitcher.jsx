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

  const EnglishFlag = () => {
    // Função para criar estrela de 5 pontas
    const Star = ({ cx, cy, size = 0.35 }) => {
      const points = [];
      const outerRadius = size;
      const innerRadius = size * 0.4;
      for (let i = 0; i < 10; i++) {
        const angle = (i * Math.PI) / 5 - Math.PI / 2;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
      }
      return <path d={points.join(' ') + ' Z'} fill="white"/>;
    };

    return (
      <FlagIcon locale="en">
        {/* 13 listras horizontais (7 vermelhas, 6 brancas) */}
        <rect width="24" height="18" fill="#B22234"/>
        <rect y="1.38" width="24" height="1.38" fill="white"/>
        <rect y="2.76" width="24" height="1.38" fill="#B22234"/>
        <rect y="4.15" width="24" height="1.38" fill="white"/>
        <rect y="5.53" width="24" height="1.38" fill="#B22234"/>
        <rect y="6.92" width="24" height="1.38" fill="white"/>
        <rect y="8.3" width="24" height="1.38" fill="#B22234"/>
        <rect y="9.69" width="24" height="1.38" fill="white"/>
        <rect y="11.07" width="24" height="1.38" fill="#B22234"/>
        <rect y="12.46" width="24" height="1.38" fill="white"/>
        <rect y="13.84" width="24" height="1.38" fill="#B22234"/>
        <rect y="15.23" width="24" height="1.38" fill="white"/>
        <rect y="16.61" width="24" height="1.38" fill="#B22234"/>
        {/* Campo azul */}
        <rect width="9.6" height="7.38" fill="#3C3B6E"/>
        Estrelas de 5 pontas (padrão simplificado: 3 linhas)
        <Star cx={1.92} cy={1.23} size={0.35}/>
        <Star cx={4.8} cy={1.23} size={0.35}/>
        <Star cx={7.68} cy={1.23} size={0.35}/>
        <Star cx={3.36} cy={2.46} size={0.35}/>
        <Star cx={6.24} cy={2.46} size={0.35}/>
        <Star cx={1.92} cy={3.69} size={0.35}/>
        <Star cx={4.8} cy={3.69} size={0.35}/>
        <Star cx={7.68} cy={3.69} size={0.35}/>
        <Star cx={3.36} cy={4.92} size={0.35}/>
        <Star cx={6.24} cy={4.92} size={0.35}/>
        <Star cx={1.92} cy={6.15} size={0.35}/>
        <Star cx={4.8} cy={6.15} size={0.35}/>
        <Star cx={7.68} cy={6.15} size={0.35}/>
      </FlagIcon>
    );
  };

  const BrazilianFlag = () => {
    // Função para criar estrela de 5 pontas
    const Star = ({ cx, cy, size = 0.5, rotation = 0 }) => {
      const points = [];
      const outerRadius = size;
      const innerRadius = size * 0.4;
      for (let i = 0; i < 10; i++) {
        const angle = (i * Math.PI) / 5 - Math.PI / 2 + rotation;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
      }
      return <path d={points.join(' ') + ' Z'} fill="white"/>;
    };

    return (
      <FlagIcon locale="pt-BR">
        {/* Fundo verde */}
        <rect width="24" height="18" fill="#009739"/>
        {/* Losango amarelo */}
        <path d="M12 2L22 9L12 16L2 9L12 2Z" fill="#FEDD00"/>
        {/* Círculo azul */}
        <circle cx="12" cy="9" r="4.5" fill="#012169"/>
        Faixa branca (curvada representando o equador)
        {/* <path d="M7.5 9C7.5 7.8 9.2 6.8 12 6.8C14.8 6.8 16.5 7.8 16.5 9C16.5 10.2 14.8 11.2 12 11.2C9.2 11.2 7.5 10.2 7.5 9Z" fill="white"/> */}
        {/* Estrelas principais (representação simplificada) */}
        {/* <Star cx={12} cy={7.2} size={0.5} rotation={0}/>
        <Star cx={10.2} cy={9.2} size={0.4} rotation={0.3}/>
        <Star cx={13.8} cy={9.2} size={0.4} rotation={-0.3}/>
        <Star cx={12} cy={10.8} size={0.4} rotation={0.6}/> */}
      </FlagIcon>
    );
  };

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
