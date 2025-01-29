"use client";

import React, { useState } from "react";
import { ProjectCard } from "./sub/ProjectCard";
import { projectImages } from "@/constants/images";

interface ProjectDetails {
  technologies?: string[];
  features?: string[];
  demoLink?: string;
  githubLink?: string;
  longDescription?: string;
  references?: {
    name: string;
    title: string;
    contact: string;
  }[];
}

interface Project {
  src: string;
  title: string;
  description: string;
  details?: ProjectDetails;
}

const projectsData = [
  {
    src: projectImages.spaceWebsite.src,
    title: "Portfolio Next.js avec Animations 3D",
    description: "Portfolio moderne avec effets 3D, animations fluides et fond d'étoiles interactif",
    details: {
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
        "React Three Fiber",
        "Framer Motion"
      ],
      features: [
        "Fond d'étoiles 3D interactif au défilement",
        "Animations et transitions fluides",
        "Design adaptatif et moderne",
        "Modèles 3D personnalisés",
        "Performance optimisée",
        "Interface utilisateur intuitive",
        "Section projets interactive",
        "Affichage dynamique des compétences"
      ],
      longDescription: "Portfolio moderne développé avec Next.js et Three.js, mettant en avant une expérience utilisateur unique avec un fond d'étoiles 3D interactif. Le site utilise des technologies de pointe pour créer des animations fluides et un design immersif. L'interface est optimisée pour les performances tout en maintenant des effets visuels sophistiqués."
    }
  },
  {
    src: projectImages.cardImage.src,
    title: "Cartes de Sites Web Interactives",
    description: "Collection de composants interactifs et animés pour sites web modernes",
    details: {
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Animations fluides et interactives",
        "Design adaptatif",
        "Thème clair/sombre",
        "Performance optimisée"
      ],
      longDescription: "Une collection de composants web modernes développés avec Next.js, mettant en avant des animations fluides et une expérience utilisateur optimale."
    }
  },
  {
    src: projectImages.streamfizz.src,
    title: "Streamfizz - Plateforme SaaS de SVOD",
    description: "Plateforme d'hébergement vidéo SaaS architecturée en microservices, avec lecteur vidéo personnalisable.",
    details: {
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "GraphQL",
        "Apollo Client",
        "WebSockets",
        "MongoDB",
        "ORM",
        "Microservices"
      ],
      features: [
        "Lecteur vidéo personnalisable avec Next.js",
        "Back-office d'administration",
        "API GraphQL optimisée",
        "Système de statistiques en temps réel",
        "Serveur d'encodage vidéo",
        "Gestion de charge élevée",
        "Modules d'interactivité temps réel",
        "Intégration WebSockets",
        "Architecture microservices",
        "Base de données MongoDB optimisée"
      ],
      longDescription: `Pendant près de 4 ans chez Webcastor, j'ai contribué au développement de Streamzz, une plateforme SaaS d'hébergement vidéo sophistiquée. 
      
      En tant que développeur Full Stack, j'ai participé à l'amélioration continue de la plateforme, en mettant l'accent sur sa robustesse et sa capacité à gérer la charge. Le projet comprenait plusieurs composants majeurs :
      • Back-office d'administration
      • Backend GraphQL optimisé
      • Player vidéo personnalisable
      • Serveur de statistiques en temps réel
      • Serveur d'encodage vidéo
  
      J'ai notamment :
      • Développé des composants React optimisés et maintenables
      • Conçu et implémenté des lecteurs vidéo personnalisés pour des clients spécifiques
      • Architecturé des solutions back-end avec GraphQL et MongoDB
      • Créé des modules d'interactivité utilisant WebSockets et Apollo Client
      • Participé à l'évolution de l'API pour répondre aux nouveaux besoins
  
      Cette expérience m'a permis d'évoluer d'un rôle de développeur junior à celui d'architecte technique, capable de gérer des projets complexes de manière autonome.`,
      references: [
        {
          name: "Geoffrey Signorato",
          title: "Lead développeur @WebCastor",
          contact: "geoffrey@webcastor.fr"
        },
        {
          name: "Léopold Assogba",
          title: "Lead Developer Full Stack @Hoortrade",
          contact: "leopoldassogba21@gmail.com"
        }
      ]
    }
  },
  {
        src: projectImages.lesentier.src,
        title: "Le Sentier - Librairie en Ligne",
        description: "Plateforme e-commerce moderne de vente de livres développée avec Next.js 14, offrant une expérience utilisateur intuitive et performante avec un back-office d'administration complet.",
        details: {
          technologies: [
            "Next.js 14.2",
            "React 18",
            "TypeScript 5",
            "Prisma ORM 5.14",
            "Redux Toolkit",
            "NextAuth.js 4",
            "TailwindCSS 3.4",
            "Radix UI",
            "React Hook Form",
            "React Email",
            "Chart.js",
            "Uploadthing",
            "React Quill",
            "ESLint"
          ],
          features: [
            "Authentification multi-providers avec NextAuth.js",
            "Back-office d'administration avec tableaux dynamiques",
            "Gestion de contenu avec éditeur WYSIWYG",
            "Système de mailing avec React Email",
            "Upload de fichiers sécurisé avec Uploadthing",
            "Gestion d'état globale avec Redux Toolkit",
            "Tableaux de bord avec graphiques Chart.js",
            "Interface utilisateur avec composants Radix UI",
            "Formulaires avancés avec React Hook Form",
            "Système de thèmes clair/sombre"
          ],
          longDescription: "Le Sentier est une plateforme e-commerce moderne spécialisée dans la vente de livres, développée avec les dernières versions des technologies web.\n\nEn tant que développeur principal, j'ai conçu et implémenté :\n• Une architecture moderne basée sur Next.js 14 avec App Router\n• Un système d'authentification multi-providers avec NextAuth.js\n• Un back-office complet avec tableaux dynamiques et graphiques\n• Un système de gestion de contenu avec éditeur WYSIWYG\n• Un système de mailing transactionnel avec React Email\n\nLe projet intègre plusieurs fonctionnalités avancées :\n• Gestion d'état globale avec Redux Toolkit\n• Upload de fichiers sécurisé\n• Tableaux de bord analytiques\n• Système de thèmes personnalisables\n• Formulaires dynamiques et validés\n\nCette réalisation met en avant l'utilisation des meilleures pratiques de développement et l'intégration de technologies modernes pour créer une expérience utilisateur optimale."
        }
      }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center py-20 relative z-[10]"
        id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Mes Projets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Overlay au niveau de la page */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative bg-[#0E0E1F] border border-[#2A0E61] p-8 rounded-xl max-w-[80%] w-full mx-4 max-h-[90vh] overflow-y-auto animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
            
            {selectedProject.details?.longDescription && (
              <div className="text-gray-300 mb-6 whitespace-pre-line leading-relaxed">
                {selectedProject.details.longDescription}
              </div>
            )}

            {selectedProject.details?.technologies && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-900/50 border border-purple-500 text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedProject.details?.features && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Fonctionnalités</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {selectedProject.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {selectedProject.details?.demoLink && (
                <a
                  href={selectedProject.details.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
                >
                  Voir la démo
                </a>
              )}
              {selectedProject.details?.githubLink && (
                <a
                  href={selectedProject.details.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all"
                >
                  Voir le code
                </a>
              )}
            </div>

            {selectedProject.details?.references && (
              <div className="mt-8 pt-6 border-t border-purple-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Références</h3>
                <div className="space-y-4">
                  {selectedProject.details.references.map((ref, index) => (
                    <div key={index} className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                      <p className="text-white font-medium">{ref.name}</p>
                      <p className="text-gray-400 text-sm">{ref.title}</p>
                      <p className="text-purple-400 text-sm mt-1">{ref.contact}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;