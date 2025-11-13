"use client";
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { translations } from '@/lib/translations';

export const useLanguage = () => {
  const [currentLocale, setCurrentLocale] = useState('en');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if there's a locale in the URL path
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments[0] === 'pt-BR') {
      setCurrentLocale('pt-BR');
    } else {
      setCurrentLocale('en');
    }
  }, [pathname]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLocale];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && value[fallbackKey]) {
            value = value[fallbackKey];
          } else {
            return key; // Return the key if translation not found
          }
        }
      }
    }
    
    return value || key;
  };

  const changeLanguage = (newLocale) => {
    setCurrentLocale(newLocale);
    
    // Update the URL to reflect the new locale
    const currentPath = pathname;
    const pathWithoutLocale = currentPath.replace(/^\/pt-BR/, '') || '/';
    
    if (newLocale === 'en') {
      router.push(pathWithoutLocale);
    } else {
      router.push(`/pt-BR${pathWithoutLocale}`);
    }
  };

  return {
    currentLocale,
    t,
    changeLanguage
  };
};
