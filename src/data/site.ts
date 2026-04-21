/**
 * ═══════════════════════════════════════════════════
 * SITE-WIDE DATA — Edit practice details here
 * ═══════════════════════════════════════════════════
 */

import type { Lang } from '../i18n/utils';

/** Shared data that does NOT change per language */
export const siteShared = {
  contact: {
    email: 'pen.karolide@gmail.com',
    phone: '+30 698 195 0396',
    address: {
      street: 'Σαμψούντος 42',
      area: 'Νίκαια',
      city: 'Πειραιάς',
      postalCode: '184 53',
      country: 'Greece',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.5!2d23.6412!3d37.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bb8e1c5b1a1f%3A0x0!2zU2FtcHNvdW50b3MgNDIsIE5pa2FpYSAxODQgNTM!5e0!3m2!1sel!2sgr!4v1',
  },

  social: {
    instagram: '',
    linkedin: '',
  },

  meta: {
    siteUrl: 'https://anemitherapy.gr',
    ogImage: '/images/therapy-room-wide.jpg',
  },
} as const;

/** Translatable site data */
const siteI18n = {
  el: {
    name: 'Πηνελόπη Καρολίδη',
    tagline: 'Ένας χώρος για ανάπτυξη, θεραπεία και διαύγεια',

    therapist: {
      name: 'Πηνελόπη Καρολίδη',
      credentials: 'Ψυχολόγος - Ψυχοθεραπεύτρια, MSc',
      title: 'Συστημική Ψυχοθεραπεία & Συμβουλευτική',
      yearsExperience: 5,
      photo: '/images/therapy-room-wide.jpg',
    },

    nav: [
      { label: 'Αρχική', href: '/' },
      { label: 'Σχετικά', href: '/about' },
      { label: 'Υπηρεσίες', href: '/services' },
      { label: 'Προσέγγιση', href: '/approach' },
      { label: 'Ερωτήσεις', href: '/faq' },
    ],

    contactLabel: 'Επικοινωνία',
    skipToContent: 'Μετάβαση στο κυρίως περιεχόμενο',

    hours: [
      { days: 'Δευτέρα – Παρασκευή', time: 'Κατόπιν συνεννόησης' },
    ],

    footer: {
      navHeading: 'Πλοήγηση',
      contactHeading: 'Επικοινωνία',
      hoursHeading: 'Ωράριο',
      disclaimer:
        'Αυτός ο ιστότοπος δεν παρέχει υπηρεσίες έκτακτης ανάγκης ή κρίσης. Αν βρίσκεστε σε άμεσο κίνδυνο ή αντιμετωπίζετε κρίση ψυχικής υγείας, επικοινωνήστε με τις τοπικές υπηρεσίες έκτακτης ανάγκης (112) ή μια γραμμή κρίσης.',
      privacy:
        'Η ιδιωτικότητά σας είναι σημαντική. Αυτός ο ιστότοπος δεν χρησιμοποιεί cookies παρακολούθησης. Οι πληροφορίες που μοιράζεστε μέσω της φόρμας επικοινωνίας αντιμετωπίζονται ως εμπιστευτικές.',
      copyright: `© ${new Date().getFullYear()} Πηνελόπη Καρολίδη. Με επιφύλαξη παντός δικαιώματος.`,
    },

    crisisResources: [
      { name: 'Ευρωπαϊκός Αριθμός Έκτακτης Ανάγκης', phone: '112' },
      { name: 'Γραμμή Πρόληψης Αυτοκτονίας (ΕΛ)', phone: '1018' },
      { name: 'Γραμμή Ψυχολογικής Υποστήριξης', detail: 'Καλέστε το 10306' },
    ],

    defaultDescription:
      'Πηνελόπη Καρολίδη, Ψυχολόγος-Ψυχοθεραπεύτρια — Συστημική ψυχοθεραπεία και συμβουλευτική στην Αθήνα. Ατομική, ομαδική, θεραπεία ζεύγους και οικογένειας.',
  },

  en: {
    name: 'Penelope Karolidi',
    tagline: 'A space for growth, healing, and clarity',

    therapist: {
      name: 'Penelope Karolidi',
      credentials: 'Psychologist - Psychotherapist, MSc',
      title: 'Systemic Psychotherapy & Counselling',
      yearsExperience: 5,
      photo: '/images/therapy-room-wide.jpg',
    },

    nav: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Approach', href: '/approach' },
      { label: 'FAQ', href: '/faq' },
    ],

    contactLabel: 'Contact',
    skipToContent: 'Skip to main content',

    hours: [
      { days: 'Monday – Friday', time: 'Upon arrangement' },
    ],

    footer: {
      navHeading: 'Navigate',
      contactHeading: 'Contact',
      hoursHeading: 'Hours',
      disclaimer:
        'This website does not provide emergency or crisis services. If you are in immediate danger or experiencing a mental health crisis, please contact your local emergency services (112 in Europe) or a crisis helpline.',
      privacy:
        'Your privacy is important. This site does not use tracking cookies. Any information shared through the contact form is treated as confidential.',
      copyright: `© ${new Date().getFullYear()} Penelope Karolidi. All rights reserved.`,
    },

    crisisResources: [
      { name: 'European Emergency Number', phone: '112' },
      { name: 'Suicide Prevention Helpline (GR)', phone: '1018' },
      { name: 'Crisis Text Line', detail: 'Text HOME to 741741' },
    ],

    defaultDescription:
      'Penelope Karolidi, Psychologist-Psychotherapist — Systemic psychotherapy and counselling in Athens. Individual, group, couples, and family therapy.',
  },
};

export function getSite(lang: Lang) {
  return siteI18n[lang];
}
