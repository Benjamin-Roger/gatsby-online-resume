const REPOSITORY = '';
const FIRST_NAME = 'Benjamin';
const LAST_NAME = 'Roger';
const GITHUB_USERNAME = 'Benjamin-Roger';
const TWITTER_USERNAME = 'BenjRoger';
const WHATSAPP_HANDLE = '33658351332';
const LINKEDIN_USERNAME = 'b-roger';
const OFFICIAL_WEBSITE = 'https://www.sapiowork.com'
const PHONE_NUMBER = '+33 6 58 35 13 32';
const ADDRESS = 'Paris, FRANCE';
const EMAIL = 'benjamin.roger@sapiowork.com';
const SITE_URL= 'https://resume.benjaminroger.com'
const FOOTER_URL = SITE_URL;
const GITHUB_REPO = 'https://github.com/Benjamin-Roger/Online_Resume'

const MENU = [
  { content: 'Contact', href: 'about' },
  { content: 'Expériences', href: 'experience' },
  { content: 'Éducation', href: 'education' },
  { content: 'Compétences', href: 'skills' },
  { content: 'Certifications', href: 'certifications' },
  { content: 'Missions et projets', href: 'portfolio' }
];

const BIO = `<p>Consultant SI et développeur, je suis spécialisé dans les projets Web. J'accompagne également des projets en tant que consultant MOA/AMOA.</p>
<p>Mes compétences techniques sont accompagnées d'une vraie expérience métier, issue de 8 ans dans le conseil. Je comprends l'enjeu de créer des solutions qui répondent à des besoins métier concrets, sans jargon technique !</p>
<ul>
  <li>Expérience multi-secteurs : assurance, sécurité sociale, maritime, gestion portuaire, agrobusiness.</li>
  <li>Missions de conseil : stratégie IT, audit IT, optimisation de processus métier.</li>
  <li>Technologies principales : React, Next.js, Node.js, Wordpress et Wagtail.</li>
  <li>A vécu et travaillé en : Côte d'Ivoire, Bénin, Chine, France, Vietnam.</li>
</ul>`;



const BUSINESS_SKILLS = [{
  name: "Français",
  percentage: "100"
},{
  name: "Anglais",
  percentage: "100"
},{
  name: "Business Analysis",
  percentage: "95"
},
{
  name: "Stratégie SI",
  percentage: "90"
},
{
  name: "Transformation Digitale",
  percentage: "90"
},
{
  name: "Gestion de projet",
  percentage: "80"
}, {
  name: "Gestion de budget",
  percentage: "80"
}, {
  name: "Gestion d'équipe",
  percentage: "80"
}];

const SECTOR_SKILLS = [{
  name: "Prévoyance Sociale",
  percentage: "75"
},
{
  name: "Assurance",
  percentage: "75"
},
{
  name: "Gestion portuaire | Transport maritime",
  percentage: "80"
}];


const TECHNICAL_SKILLS = [
  {
    name: 'Javascript',
    iconClass: 'fa-js-square',
    percentage: 80
  },
  {
    name: 'PHP', iconClass: ' fa-php',
    percentage: 80
  },
  {
    name: 'Python', iconClass: ' fa-python',
    percentage: 70
  },
  {
    name: 'React', iconClass: 'fa-react',
    percentage: 80
  },
  {
    name: 'SASS', iconClass: 'fa-sass',
    percentage: 95
  },
  {
    name: 'Wordpress', iconClass: 'fa-wordpress',
    percentage: 95
  }
];

const TOOLS_AND_FRAMEWORKS = {
  "Front-end": [
    "React", "Gatsby", "Next.js"
  ],
  "Back-end": [
    "Node/Express.js", "Laravel (en cours d'apprentissage)"
  ],
  "CMS": [
    "Wordpress",
    "Prismic"
  ],
  "Webserver": [
    "Apache"
  ]
};


const SKILLS = ['Prévoyance Sociale', 'Assurance', 'Banque', 'Portuaire', 'Maritime'];

const PORTFOLIO = {
  introParagraphs: [
    `Ma double carrière m'a permis de vivre à la fois du côté de la MOE que de l'AMOA. J'ai accompagné plusieurs projets institutionnels en tant que consultants en Europe et Afrique de l'Ouest.`,
    `Egalement, j'ai développé moi-même sites et applications Web en adéquation avec les besoins des mes clients.`,
  ],
  categories : [
    "Consulting",
    "Développement Web"
  ]
};

const CERTIFICATIONS = [
  {
    name: 'SCRUM PSM-1 - 2016',
    url: "https://www.scrum.org/certificates/144205"
  },
  {
    name: 'Certification Wordpress SkillValue - 2020',
    url: "https://skillvalue.com/fr/certificate/3B2wX3YtltfJ1rlmfYUGH0MnO9jMKbZb4QvsisaFf8uAcsXgsnZGxUw0hpdx"
  },
  {
    name: 'Certification React SkillValue - 2020',
    url: "https://skillvalue.com/fr/certificate/Nyk0KbypjAvBKvoGMotoCP05EEqfaOoIouf125M2tEbhE3tvrz1FqzlPYbZ3"
  },
  {
    name: 'Certification Next.js SkillValue - 2020',
    url: "https://skillvalue.com/fr/certificate/hRpAoCmxYocFi6JNfnBdGkdwPmASgLJNXCYUSjuLcIi3Nse7wn12scDGfRyF"
  },
  {
    name: 'Certification Node.js SkillValue - 2020',
    url: "https://skillvalue.com/fr/certificate/g92pFMpB6NRNi1Ujq0kJNS7AZ2Vmg5xzfcAk9S3wmUSG4Ee1kvp9lfIIl7Gr"
  },
  {
    name: 'Certification SEO SkillValue - 2020',
    url: "https://skillvalue.com/fr/certificate/j5aDHwybYe4bBd7eKlZYcXsvvj30BTI7QHsgdctxWL0sRXTx7HqN1CpjNMTG"
  },
  {
    name: 'Certification Advanced Google Analytics - 2020',
    url: "https://analytics.google.com/analytics/academy/certificate/Li1y06D6Q0e2GIRQKO6gZA"
  },
  
];

module.exports = {
  siteTitle: `${FIRST_NAME} ${LAST_NAME} | Consultant SI | Développeur Web`, // <title>
  manifestName: `${FIRST_NAME} ${LAST_NAME} | Online Resume`,
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#28407f',
  manifestThemeColor: '#28407f',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/favicon.png',
  pathPrefix: `/${REPOSITORY}`,
  menu: MENU,
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  fullName: `${FIRST_NAME} ${LAST_NAME}`,
  // bio
  bio: BIO,
  // skills
  skills: SKILLS,
  businessSkills: BUSINESS_SKILLS,
  sectorSkills: SECTOR_SKILLS,
  technicalSkills: TECHNICAL_SKILLS,
  // tools & frameworks
  toolsFrameworks: TOOLS_AND_FRAMEWORKS,
  // certifications
  certifications: CERTIFICATIONS,
  // portfolio
  portfolio: PORTFOLIO,
  // social
  socialLinks: [
    {
      icon: 'fa-github-alt',
      name: 'Github',
      url: `https://github.com/${GITHUB_USERNAME}`,
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: `https://twitter.com/${TWITTER_USERNAME}`,
    },
    {
      icon: 'fa-whatsapp',
      name: 'Whatsapp',
      url: `https://wa.me/${WHATSAPP_HANDLE}`,
    },
    {
      icon: 'fas fa-globe-europe',
      name: 'Website de freelance',
      url: `${OFFICIAL_WEBSITE}`,
    },
  ],
  email: EMAIL,
  phone: PHONE_NUMBER,
  address: ADDRESS,
  siteUrl : SITE_URL,
  footerUrl: FOOTER_URL,
  freelanceSite: {
    url: OFFICIAL_WEBSITE,
    title: "Visitez mon site de développeur freelance en cliquant ici !"
  },
  gitHubRepo: {
    url: GITHUB_REPO,
    title: "Voir le code de ce site sur Github"
  },
  credits: [
    `Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>`
  ]
};
