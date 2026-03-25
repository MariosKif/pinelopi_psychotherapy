/**
 * ═══════════════════════════════════════════════════
 * HOME PAGE CONTENT — Edit all home-page copy here
 * ═══════════════════════════════════════════════════
 */

import type { Lang } from '../i18n/utils';

const homeI18n = {
  el: {
    hero: {
      headline: 'Ένας ήρεμος χώρος για να ξεκινήσετε',
      subheadline:
        '«Το παράδοξο είναι ότι, όταν αποδεχτώ τον εαυτό μου για αυτό που είμαι, τότε ακριβώς μπορώ να αλλάξω.» — Carl Rogers',
      cta: {
        primary: { label: 'Κλείστε ραντεβού', href: '/contact' },
        secondary: { label: 'Πώς λειτουργεί η θεραπεία', href: '/approach' },
      },
    },

    trustMarkers: [
      {
        label: 'Ψυχολόγος - Ψυχοθεραπεύτρια',
        detail: 'MSc Ψυχική Υγεία Παιδιού & Εφήβου',
      },
      {
        label: 'Συστημική Προσέγγιση',
        detail: 'Ειδίκευση στη Συστημική Ψυχοθεραπεία & Θεραπεία Οικογένειας',
      },
      {
        label: 'Διαταραχές Πρόσληψης Τροφής',
        detail: 'Εξειδικευμένη εκπαίδευση στο Αιγινήτειο Νοσοκομείο',
      },
      {
        label: 'Εμπιστοσύνη & ασφάλεια',
        detail: 'Διαθέσιμες δια ζώσης και online συνεδρίες',
      },
    ],

    servicesOverview: {
      heading: 'Πώς μπορώ να βοηθήσω',
      subheading:
        'Κάθε άνθρωπος έχει τη δική του πορεία. Προσφέρω υποστήριξη σε ενήλικες, ζευγάρια και οικογένειες, πάντα προσαρμοσμένη στις ανάγκες σας.',
      services: [
        {
          title: 'Ατομική Ψυχοθεραπεία',
          description:
            'Νέοι τρόποι θέασης και αντιμετώπισης δυσκολιών μέσα από έναν ενεργό διάλογο με στόχο τη διεύρυνση της οπτικής σας.',
          href: '/services#individual',
        },
        {
          title: 'Ομαδική Θεραπεία',
          description:
            'Ένας «μικρόκοσμος» κοινωνικής ζωής όπου τα μοτίβα σχέσεων εμφανίζονται, αναλύονται και διορθώνονται σε πραγματικό χρόνο.',
          href: '/services#group',
        },
        {
          title: 'Θεραπεία Ζεύγους',
          description:
            'Αναγνώριση δυσλειτουργικών μοτίβων, βελτίωση επικοινωνίας και ενίσχυση της συντροφικής σχέσης.',
          href: '/services#couples',
        },
        {
          title: 'Θεραπεία Οικογένειας',
          description:
            'Κατανόηση της οικογενειακής δυναμικής και εύρεση νέων, πιο λειτουργικών τρόπων σχέσης μεταξύ των μελών.',
          href: '/services#family',
        },
        {
          title: 'Συμβουλευτική Γονέων',
          description:
            'Καθοδήγηση και νέες δεξιότητες για γονείς που αντιμετωπίζουν τις προκλήσεις του μεγαλώματος.',
          href: '/services#parenting',
        },
      ],
    },

    howItWorks: {
      heading: 'Πώς λειτουργούν οι συνεδρίες',
      subheading:
        'Η έναρξη θεραπείας μπορεί να φαίνεται ένα μεγάλο βήμα. Δείτε τι να περιμένετε.',
      steps: [
        {
          number: '01',
          title: 'Επικοινωνήστε',
          description:
            'Στείλτε μήνυμα μέσω της φόρμας επικοινωνίας ή καλέστε. Θα σας απαντήσω εντός 24 ωρών για να κανονίσουμε μια σύντομη εισαγωγική κλήση — δωρεάν και χωρίς υποχρέωση.',
        },
        {
          number: '02',
          title: 'Πρώτη συνεδρία',
          description:
            'Θα συναντηθούμε για να εξερευνήσουμε τι σας φέρνει στη θεραπεία, τι ελπίζετε και αν ταιριάζουμε μεταξύ μας.',
        },
        {
          number: '03',
          title: 'Συνεχής υποστήριξη',
          description:
            'Οι συνεδρίες γίνονται συνήθως εβδομαδιαία. Μαζί, θα αναπτύξουμε έναν ρυθμό που λειτουργεί για εσάς — προσαρμόζοντας την προσέγγισή μας καθώς εξελίσσεστε.',
        },
      ],
    },

    therapistIntro: {
      heading: 'Λίγα λόγια για μένα',
      text: 'Είμαι ψυχολόγος-ψυχοθεραπεύτρια με ειδίκευση στη Συστημική Ψυχοθεραπεία και Θεραπεία Οικογένειας. Αποφοίτησα από το Πάντειο Πανεπιστήμιο και ολοκλήρωσα μεταπτυχιακό στην Ψυχική Υγεία Παιδιού και Εφήβου. Εργάζομαι με ενήλικες, ζευγάρια και οικογένειες, συνδυάζοντας τη συστημική θεραπεία με στοιχεία γνωσιακής-συμπεριφορικής θεραπείας και θεραπείας μέσω τεχνών. Στόχος μας είναι η ουσιαστική στήριξη μέσα από πρόληψη, θεραπεία και ψυχοκοινωνική ενδυνάμωση.',
      cta: { label: 'Διαβάστε περισσότερα για μένα', href: '/about' },
    },

    faqTeaser: {
      heading: 'Συχνές ερωτήσεις',
      subheading:
        'Η έναρξη θεραπείας εγείρει πολλές ερωτήσεις. Εδώ είναι μερικές που ακούω συχνά.',
      cta: { label: 'Δείτε όλες τις ερωτήσεις', href: '/faq' },
      featuredIndices: [0, 1, 6],
    },

    contactCta: {
      heading: 'Είστε έτοιμοι να κάνετε το πρώτο βήμα;',
      text: 'Δεν υπάρχει πίεση και καμία υποχρέωση. Αν αναρωτιέστε αν η θεραπεία θα μπορούσε να βοηθήσει, θα χαρώ να κάνουμε πρώτα μια σύντομη συζήτηση.',
      cta: { label: 'Επικοινωνήστε', href: '/contact' },
    },
  },

  en: {
    hero: {
      headline: 'A calm space to begin',
      subheadline:
        'Therapy isn\'t about being broken. It\'s about having a safe, confidential place to understand yourself more deeply — and to move forward with greater clarity and ease.',
      cta: {
        primary: { label: 'Request an appointment', href: '/contact' },
        secondary: { label: 'How therapy works here', href: '/approach' },
      },
    },

    trustMarkers: [
      {
        label: 'Psychologist - Psychotherapist',
        detail: 'MSc Child & Adolescent Mental Health',
      },
      {
        label: 'Systemic Approach',
        detail: 'Specialised in Systemic Psychotherapy & Family Therapy',
      },
      {
        label: 'Eating Disorders',
        detail: 'Specialised training at Aeginitio Hospital',
      },
      {
        label: 'Confidential & secure',
        detail: 'In-person and online sessions available',
      },
    ],

    servicesOverview: {
      heading: 'How I can help',
      subheading:
        'Every person\'s journey is different. I offer support to adults, couples, and families, always tailored to your needs.',
      services: [
        {
          title: 'Individual Psychotherapy',
          description:
            'New ways of seeing and addressing difficulties through an active dialogue aimed at broadening your perspective.',
          href: '/services#individual',
        },
        {
          title: 'Group Therapy',
          description:
            'A "microcosm" of social life where relationship patterns emerge, are analysed, and corrected in real time.',
          href: '/services#group',
        },
        {
          title: 'Couples Therapy',
          description:
            'Identifying dysfunctional patterns, improving communication, and strengthening your relationship.',
          href: '/services#couples',
        },
        {
          title: 'Family Therapy',
          description:
            'Understanding family dynamics and finding new, more functional ways for members to relate to each other.',
          href: '/services#family',
        },
        {
          title: 'Parent Counselling',
          description:
            'Guidance and new skills for parents facing the challenges of raising children.',
          href: '/services#parenting',
        },
      ],
    },

    howItWorks: {
      heading: 'How sessions work',
      subheading:
        'Starting therapy can feel like a big step. Here\'s what to expect.',
      steps: [
        {
          number: '01',
          title: 'Reach out',
          description:
            'Send a message through the contact form or call. I\'ll get back to you within 24 hours to arrange a brief introductory call — free and with no obligation.',
        },
        {
          number: '02',
          title: 'First session',
          description:
            'We\'ll meet to explore what brings you to therapy, what you\'re hoping for, and whether we feel like a good fit for each other.',
        },
        {
          number: '03',
          title: 'Ongoing support',
          description:
            'Sessions are typically weekly. Together, we\'ll develop a rhythm that works for you — adjusting our approach as you grow and your needs evolve.',
        },
      ],
    },

    therapistIntro: {
      heading: 'A little about me',
      text: 'I am a psychologist-psychotherapist specialising in Systemic Psychotherapy and Family Therapy. I graduated from Panteion University and completed my MSc in Child and Adolescent Mental Health. I work with adults, couples, and families, combining systemic therapy with elements of CBT and arts-based therapy. My goal is meaningful support through prevention, therapy, and psychosocial empowerment.',
      cta: { label: 'Read more about me', href: '/about' },
    },

    faqTeaser: {
      heading: 'Common questions',
      subheading:
        'Starting therapy raises many questions. Here are a few I hear often.',
      cta: { label: 'See all questions', href: '/faq' },
      featuredIndices: [0, 1, 6],
    },

    contactCta: {
      heading: 'Ready to take the first step?',
      text: 'There\'s no pressure and no obligation. If you\'re curious about whether therapy could help, I\'m happy to have a brief conversation first.',
      cta: { label: 'Get in touch', href: '/contact' },
    },
  },
};

export function getHome(lang: Lang) {
  return homeI18n[lang];
}
