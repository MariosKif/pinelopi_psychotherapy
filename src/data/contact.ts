/**
 * ═══════════════════════════════════════════════════
 * CONTACT PAGE CONTENT
 * ═══════════════════════════════════════════════════
 */

import type { Lang } from '../i18n/utils';

const contactI18n = {
  el: {
    meta: {
      title: 'Επικοινωνία — Anemi Therapy Studio',
      description:
        'Επικοινωνήστε με το Anemi Therapy Studio. Κλείστε ραντεβού ή κάντε μια ερώτηση. Στο Κολωνάκι, Αθήνα — διαθέσιμες και online συνεδρίες.',
    },

    hero: {
      heading: 'Επικοινωνία',
      subheading:
        'Το πρώτο βήμα μπορεί να φαίνεται το πιο δύσκολο. Δεν υπάρχει πίεση και καμία υποχρέωση — απλά ένας εύκολος τρόπος να επικοινωνήσετε όταν είστε έτοιμοι.',
    },

    form: {
      nameLabel: 'Το όνομά σας',
      namePlaceholder: 'Ονοματεπώνυμο',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'Τηλέφωνο (προαιρετικό)',
      phonePlaceholder: '+30 ...',
      timesLabel: 'Προτιμώμενες ώρες συνεδρίας (προαιρετικό)',
      timesPlaceholder: 'π.χ. Πρωινά καθημερινών, Τρίτη / Πέμπτη απόγευμα',
      messageLabel: 'Το μήνυμά σας',
      messagePlaceholder:
        'Μη διστάσετε να μοιραστείτε λίγα λόγια για αυτό που σας απασχολεί, ή απλά πείτε μου ότι θέλετε να κανονίσουμε μια εισαγωγική κλήση.',
      consentLabel:
        'Συναινώ στη χρήση των στοιχείων μου για να απαντηθεί αυτό το αίτημα. Τα δεδομένα σας αντιμετωπίζονται ως εμπιστευτικά και δεν κοινοποιούνται σε τρίτους.',
      submitLabel: 'Αποστολή μηνύματος',
      submittingLabel: 'Αποστολή…',
      successHeading: 'Το μήνυμα εστάλη',
      successMessage:
        'Ευχαριστώ που επικοινωνήσατε. Θα σας απαντήσω εντός 24 ωρών. Αν το θέμα σας είναι επείγον, καλέστε απευθείας το γραφείο.',
      errorMessage:
        'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά, ή επικοινωνήστε απευθείας μέσω email ή τηλεφώνου.',
    },

    reassurance:
      'Το μήνυμά σας είναι εμπιστευτικό. Συνήθως απαντώ εντός μίας εργάσιμης ημέρας.',

    sidebar: {
      officeDetails: 'Στοιχεία γραφείου',
      emailLabel: 'Email',
      phoneLabel: 'Τηλέφωνο',
      addressLabel: 'Διεύθυνση',
      hoursLabel: 'Ωράριο',
    },

    crisisNotice: {
      heading: 'Σε περίπτωση έκτακτης ανάγκης',
      text: 'Αυτό το γραφείο δεν παρέχει υπηρεσίες έκτακτης ανάγκης ή κρίσης. Αν εσείς ή κάποιος που γνωρίζετε βρίσκεται σε άμεσο κίνδυνο ή αντιμετωπίζει κρίση ψυχικής υγείας, επικοινωνήστε:',
    },
  },

  en: {
    meta: {
      title: 'Contact — Anemi Therapy Studio',
      description:
        'Get in touch with Anemi Therapy Studio. Request an appointment or ask a question. Located in Kolonaki, Athens — online sessions also available.',
    },

    hero: {
      heading: 'Get in touch',
      subheading:
        'Taking the first step can feel like the hardest part. There\'s no pressure and no obligation — just a simple way to reach out when you\'re ready.',
    },

    form: {
      nameLabel: 'Your name',
      namePlaceholder: 'Full name',
      emailLabel: 'Email address',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'Phone number (optional)',
      phonePlaceholder: '+30 ...',
      timesLabel: 'Preferred session times (optional)',
      timesPlaceholder: 'e.g. Weekday mornings, Tuesday / Thursday afternoons',
      messageLabel: 'Your message',
      messagePlaceholder:
        'Feel free to share a little about what\'s on your mind, or simply let me know you\'d like to arrange an introductory call.',
      consentLabel:
        'I consent to my information being used to respond to this enquiry. Your data is treated as confidential and will not be shared with third parties.',
      submitLabel: 'Send message',
      submittingLabel: 'Sending…',
      successHeading: 'Message sent',
      successMessage:
        'Thank you for reaching out. I\'ll get back to you within 24 hours. If your matter is urgent, please call the office directly.',
      errorMessage:
        'Something went wrong. Please try again, or contact me directly by email or phone.',
    },

    reassurance:
      'Your message is confidential. I typically respond within one working day.',

    sidebar: {
      officeDetails: 'Office details',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      addressLabel: 'Address',
      hoursLabel: 'Hours',
    },

    crisisNotice: {
      heading: 'In case of emergency',
      text: 'This practice does not provide emergency or crisis services. If you or someone you know is in immediate danger or experiencing a mental health crisis, please contact:',
    },
  },
};

export function getContact(lang: Lang) {
  return contactI18n[lang];
}
