/**
 * ═══════════════════════════════════════════════════
 * FEES PAGE CONTENT
 * ═══════════════════════════════════════════════════
 */

import type { Lang } from '../i18n/utils';

const feesI18n = {
  el: {
    meta: {
      title: 'Κόστος — Anemi Therapy Studio',
      description:
        'Κόστος συνεδριών, πολιτική ακύρωσης και πληροφορίες πληρωμής για ψυχοθεραπεία στο Anemi Therapy Studio στην Αθήνα.',
    },

    hero: {
      heading: 'Κόστος & πρακτικές πληροφορίες',
      subheading:
        'Πιστεύω στη διαφάνεια σχετικά με το κόστος ώστε να μπορείτε να πάρετε μια ενημερωμένη απόφαση χωρίς εκπλήξεις.',
    },

    sessions: [
      {
        type: 'Ατομική συνεδρία',
        duration: 'Εβδομαδιαία',
        price: '—',
      },
      {
        type: 'Θεραπεία ζεύγους',
        duration: '60–90 λεπτά',
        price: '—',
      },
      {
        type: 'Θεραπεία οικογένειας',
        duration: '60–90 λεπτά',
        price: '—',
      },
      {
        type: 'Ομαδική θεραπεία',
        duration: '2 ώρες · Εβδομαδιαία',
        price: '—',
      },
      {
        type: 'Συμβουλευτική γονέων',
        duration: 'Κατόπιν συνεννόησης',
        price: '—',
      },
      {
        type: 'Αρχική τηλεφωνική συνομιλία',
        duration: '15 λεπτά',
        price: 'Δωρεάν',
      },
    ],

    notes: [
      {
        heading: 'Κλιμακωτό κόστος',
        text: 'Διατηρώ περιορισμένο αριθμό θέσεων μειωμένου κόστους για άτομα που αντιμετωπίζουν οικονομικές δυσκολίες. Αν το κόστος είναι εμπόδιο, αναφέρετέ το όταν επικοινωνήσετε.',
      },
      {
        heading: 'Αποδείξεις ασφάλισης',
        text: 'Μπορώ να παρέχω αποδείξεις που μπορείτε να υποβάλετε στον ιδιωτικό ασφαλιστή σας για πιθανή αποζημίωση. Ελέγξτε με τον ασφαλιστή σας για τη συγκεκριμένη κάλυψη.',
      },
      {
        heading: 'Πληρωμή',
        text: 'Η πληρωμή γίνεται κατά τη διάρκεια κάθε συνεδρίας. Δέχομαι τραπεζικό έμβασμα, μετρητά και κύριες πιστωτικές/χρεωστικές κάρτες.',
      },
    ],

    cancellation: {
      heading: 'Πολιτική ακύρωσης',
      paragraphs: [
        'Κατανοώ ότι η ζωή είναι απρόβλεπτη. Αν χρειαστεί να ακυρώσετε ή να αναπρογραμματίσετε, ενημερώστε με τουλάχιστον 24 ώρες νωρίτερα.',
        'Οι καθυστερημένες ακυρώσεις (λιγότερο από 24 ώρες) και οι χαμένες συνεδρίες χρεώνονται στο πλήρες κόστος. Αυτή η πολιτική βοηθά στη διαχείριση του προγράμματος και στη διαθεσιμότητα θέσεων.',
        'Σε γνήσιες περιπτώσεις έκτακτης ανάγκης, επικοινωνήστε μαζί μου και μπορούμε να συζητήσουμε κατά περίπτωση.',
      ],
    },

    appointmentCta: 'Κλείστε ραντεβού',
  },

  en: {
    meta: {
      title: 'Fees — Anemi Therapy Studio',
      description:
        'Session fees, cancellation policy, and payment information for psychotherapy at Anemi Therapy Studio in Athens.',
    },

    hero: {
      heading: 'Fees & practical information',
      subheading:
        'I believe in being transparent about costs so you can make an informed decision without any surprises.',
    },

    sessions: [
      {
        type: 'Individual session',
        duration: 'Weekly',
        price: '—',
      },
      {
        type: 'Couples therapy',
        duration: '60–90 minutes',
        price: '—',
      },
      {
        type: 'Family therapy',
        duration: '60–90 minutes',
        price: '—',
      },
      {
        type: 'Group therapy',
        duration: '2 hours · Weekly',
        price: '—',
      },
      {
        type: 'Parent counselling',
        duration: 'By arrangement',
        price: '—',
      },
      {
        type: 'Initial consultation call',
        duration: '15 minutes',
        price: 'Free',
      },
    ],

    notes: [
      {
        heading: 'Sliding scale',
        text: 'I reserve a limited number of reduced-fee places for individuals experiencing financial hardship. If cost is a barrier, please mention this when you get in touch.',
      },
      {
        heading: 'Insurance receipts',
        text: 'I can provide receipts that you may submit to your private insurance provider for potential reimbursement. Please check with your insurer about their specific coverage.',
      },
      {
        heading: 'Payment',
        text: 'Payment is due at the time of each session. I accept bank transfer, cash, and major credit/debit cards.',
      },
    ],

    cancellation: {
      heading: 'Cancellation policy',
      paragraphs: [
        'I understand that life is unpredictable. If you need to cancel or reschedule, please let me know at least 24 hours in advance.',
        'Late cancellations (less than 24 hours\' notice) and missed appointments will be charged at the full session fee. This policy helps manage scheduling and availability.',
        'In genuine emergencies, please get in touch and we can discuss on a case-by-case basis.',
      ],
    },

    appointmentCta: 'Request an appointment',
  },
};

export function getFees(lang: Lang) {
  return feesI18n[lang];
}
