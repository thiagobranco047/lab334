"use client";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

const Nav = () => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const { t, currentLocale } = useLanguage();

  function triggerPageTransition() {
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const getLocalizedPath = (path) => {
    if (currentLocale === 'pt-BR') {
      return path === '/' ? '/pt-BR' : `/pt-BR${path}`;
    }
    return path;
  };

  const handleNavigation = (path) => (e) => {
    const localizedPath = getLocalizedPath(path);
    if (localizedPath === pathname) {
      e.preventDefault();
      return;
    }

    router.push(localizedPath, {
      onTransitionReady: triggerPageTransition,
    });
  };

  return (
    <div className="nav">
      <div className="col">
        <div className="nav-logo">
          <Link onClick={handleNavigation("/")} href={getLocalizedPath("/")}>
            {t('nav.logo')}
          </Link>
        </div>
      </div>

      <div className="col">
        <div className="nav-items">
          <div className="nav-item">
            <Link onClick={handleNavigation("/work")} href={getLocalizedPath("/work")}>
              {t('nav.work')}
            </Link>
          </div>
          <div className="nav-item">
            <Link onClick={handleNavigation("/studio")} href={getLocalizedPath("/studio")}>
              {t('nav.studio')}
            </Link>
          </div>
          <div className="nav-item">
            <Link onClick={handleNavigation("/contact")} href={getLocalizedPath("/contact")}>
              {t('nav.contact')}
            </Link>
          </div>
        </div>
        <div className="nav-copy">
          <p>{t('nav.location')}</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
