import { Cache } from 'swr';

// Ajouter un type pour le state SWR
type SWRState = {
  data: unknown;
  error: unknown;
  isValidating: boolean;
};

export const swrConfig = {

  revalidateOnFocus: false, // Ne pas revalider lors du focus de la fenêtre

  revalidateOnReconnect: true, // Revalider lors de la reconnexion

  refreshInterval: 0, // Pas de revalidation automatique

  shouldRetryOnError: false, // Ne pas réessayer en cas d'erreur

};



// Fonction utilitaire pour le cache local

export const localStorageProvider = () => {

  if (typeof window === 'undefined') return new Map<string, SWRState>();

  

  const map = new Map<string, SWRState>(

    JSON.parse(localStorage.getItem('app-cache') || '[]')

  );



  window.addEventListener('beforeunload', () => {

    localStorage.setItem('app-cache', JSON.stringify(Array.from(map.entries())));

  });



  return map as Cache<SWRState>;

}; 


