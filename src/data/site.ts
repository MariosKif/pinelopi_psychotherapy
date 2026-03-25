/**
 * ═══════════════════════════════════════════════════
 * SITE-WIDE DATA — Edit practice details here
 * ═══════════════════════════════════════════════════
 */

import type { Lang } from '../i18n/utils';

/** Shared data that does NOT change per language */
export const siteShared = {
  contact: {
    email: 'hello@anemitherapy.gr',
    phone: '+30 210 000 0000',
    address: {
      street: 'Irodou Attikou 12',
      area: 'Kolonaki',
      city: 'Athens',
      postalCode: '106 74',
      country: 'Greece',
    },
    mapEmbedUrl: '',
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
    name: 'Anemi Therapy Studio',
    tagline: 'Ένας χώρος για ανάπτυξη, θεραπεία και διαύγεια',

    therapist: {
      name: 'Πηνελόπη Καρολίδη',
      credentials: 'Ψυχολόγος - Ψυχοθεραπεύτρια, MSc',
      title: 'Συστημική Ψυχοθεραπεία & Συμβουλευτική',
      yearsExperience: 5,
      photo: '/images/therapy-room-wide.jpg',
    },

    nav: [
      { label: 'Σχετικά', href: '/about' },
      { label: 'Υπηρεσίες', href: '/services' },
      { label: 'Προσέγγιση', href: '/approach' },
      { label: 'Κόστος', href: '/fees' },
      { label: 'Ερωτήσεις', href: '/faq' },
    ],

    contactLabel: 'Επικοινωνία',
    skipToContent: 'Μετάβαση στο κυρίως περιεχόμενο',

    hours: [
      { days: 'Δευτέρα – Παρασκευή', time: '9:00 – 20:00' },
      { days: 'Σάββατο', time: '10:00 – 15:00' },
      { days: 'Κυριακή', time: 'Κλειστά' },
    ],

    footer: {
      navHeading: 'Πλοήγηση',
      contactHeading: 'Επικοινωνία',
      hoursHeading: 'Ωράριο',
      disclaimer:
        'Αυτός ο ιστότοπος δεν παρέχει υπηρεσίες έκτακτης ανάγκης ή κρίσης. Αν βρίσκεστε σε άμεσο κίνδυνο ή αντιμετωπίζετε κρίση ψυχικής υγείας, επικοινωνήστε με τις τοπικές υπηρεσίες έκτακτης ανάγκης (112) ή μια γραμμή κρίσης.',
      privacy:
        'Η ιδιωτικότητά σας είναι σημαντική. Αυτός ο ιστότοπος δεν χρησιμοποιεί cookies παρακολούθησης. Οι πληροφορίες που μοιράζεστε μέσω της φόρμας επικοινωνίας αντιμετωπίζονται ως εμπιστευτικές.',
      copyright: `© ${new Date().getFullYear()} Anemi Therapy Studio. Με επιφύλαξη παντός δικαιώματος.`,
    },

    crisisResources: [
      { name: 'Ευρωπαϊκός Αριθμός Έκτακτης Ανάγκης', phone: '112' },
      { name: 'Γραμμή Πρόληψης Αυτοκτονίας (ΕΛ)', phone: '1018' },
      { name: 'Γραμμή Ψυχολογικής Υποστήριξης', detail: 'Καλέστε το 10306' },
    ],

    defaultDescription:
      'Anemi Therapy Studio — Χώρος συστημικής ψυχοθεραπείας και συμβουλευτικής στην Αθήνα. Ατομική, ομαδική, θεραπεία ζεύγους και οικογένειας. Πηνελόπη Καρολίδη, Ψυχολόγος-Ψυχοθεραπεύτρια.',
  },

  en: {
    name: 'Anemi Therapy Studio',
    tagline: 'A space for growth, healing, and clarity',

    therapist: {
      name: 'Penelope Karolidi',
      credentials: 'Psychologist - Psychotherapist, MSc',
      title: 'Systemic Psychotherapy & Counselling',
      yearsExperience: 5,
      photo: '/images/therapy-room-wide.jpg',
    },

    nav: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Approach', href: '/approach' },
      { label: 'Fees', href: '/fees' },
      { label: 'FAQ', href: '/faq' },
    ],

    contactLabel: 'Contact',
    skipToContent: 'Skip to main content',

    hours: [
      { days: 'Monday – Friday', time: '9:00 – 20:00' },
      { days: 'Saturday', time: '10:00 – 15:00' },
      { days: 'Sunday', time: 'Closed' },
    ],

    footer: {
      navHeading: 'Navigate',
      contactHeading: 'Contact',
      hoursHeading: 'Hours',
      disclaimer:
        'This website does not provide emergency or crisis services. If you are in immediate danger or experiencing a mental health crisis, please contact your local emergency services (112 in Europe) or a crisis helpline.',
      privacy:
        'Your privacy is important. This site does not use tracking cookies. Any information shared through the contact form is treated as confidential.',
      copyright: `© ${new Date().getFullYear()} Anemi Therapy Studio. All rights reserved.`,
    },

    crisisResources: [
      { name: 'European Emergency Number', phone: '112' },
      { name: 'Suicide Prevention Helpline (GR)', phone: '1018' },
      { name: 'Crisis Text Line', detail: 'Text HOME to 741741' },
    ],

    defaultDescription:
      'Anemi Therapy Studio — Systemic psychotherapy and counselling in Athens. Individual, group, couples, and family therapy. Penelope Karolidi, Psychologist-Psychotherapist.',
  },
};

export function getSite(lang: Lang) {
  return siteI18n[lang];
}
