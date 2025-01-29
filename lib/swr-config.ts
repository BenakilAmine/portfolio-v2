import { Cache } from 'swr';

export const swrConfig = {
  revalidateOnFocus: false, // Ne pas revalider lors du focus de la fenêtre
  revalidateOnReconnect: true, // Revalider lors de la reconnexion
  refreshInterval: 0, // Pas de revalidation automatique
  shouldRetryOnError: false, // Ne pas réessayer en cas d'erreur
};

// Fonction utilitaire pour le cache local
export const localStorageProvider = () => {
  if (typeof window === 'undefined') return new Map();
  
  const map = new Map<string, any>(
    JSON.parse(localStorage.getItem('app-cache') || '[]')
  );

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('app-cache', appCache);
  });

  return map as Cache<any>;
}; 
