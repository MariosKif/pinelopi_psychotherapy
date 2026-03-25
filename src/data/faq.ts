/**
 * ═══════════════════════════════════════════════════
 * FAQ CONTENT — Edit questions and answers here
 * ═══════════════════════════════════════════════════
 */

import type { Lang } from '../i18n/utils';

const faqI18n = {
  el: {
    meta: {
      title: 'Συχνές Ερωτήσεις — Anemi Therapy Studio',
      description:
        'Συχνές ερωτήσεις για την ψυχοθεραπεία στο Anemi Therapy Studio: τι να περιμένετε, εμπιστευτικότητα, κόστος και άλλα.',
    },

    hero: {
      heading: 'Συχνές ερωτήσεις',
      subheading:
        'Είναι φυσικό να έχετε ερωτήσεις πριν ξεκινήσετε θεραπεία. Εδώ είναι μερικές που ακούω πιο συχνά.',
    },

    items: [
      {
        question: 'Πώς θα ξέρω αν η θεραπεία είναι κατάλληλη για μένα;',
        answer:
          'Αν κάνετε αυτή την ερώτηση, αυτό είναι συχνά σημάδι ότι κάποιο μέρος σας είναι έτοιμο. Η θεραπεία μπορεί να βοηθήσει αν νιώθετε κολλημένοι, υπερφορτωμένοι, αγχωμένοι, λυπημένοι ή απλά περίεργοι να κατανοήσετε καλύτερα τον εαυτό σας. Δεν χρειάζεται να βρίσκεστε σε κρίση — πολλοί άνθρωποι έρχονται στη θεραπεία ως επένδυση στην ευημερία τους.',
      },
      {
        question: 'Τι γίνεται στην πρώτη συνεδρία;',
        answer:
          'Η πρώτη συνεδρία είναι μια ευκαιρία να γνωριστούμε και να αρχίσουμε να κατανοούμε τι σας φέρνει στη θεραπεία. Θα κάνω κάποιες ερωτήσεις για την τρέχουσα κατάστασή σας και θα έχετε την ευκαιρία να ρωτήσετε ό,τι θέλετε. Δεν υπάρχει πίεση να μοιραστείτε περισσότερα από ό,τι νιώθετε άνετα.',
      },
      {
        question: 'Πόσο διαρκεί η θεραπεία;',
        answer:
          'Αυτό ποικίλλει σημαντικά ανάλογα με τους στόχους σας και το τι δουλεύετε. Μερικοί άνθρωποι βρίσκουν σημαντική ανακούφιση σε 8-12 συνεδρίες· άλλοι προτιμούν μακροχρόνια δουλειά. Θα το συζητήσουμε ανοιχτά και θα προσαρμοζόμαστε καθώς προχωράμε.',
      },
      {
        question: 'Προσφέρετε online συνεδρίες;',
        answer:
          'Ναι. Προσφέρω ασφαλείς βιντεοσυνεδρίες που ακολουθούν την ίδια δομή και ποιότητα με τις δια ζώσης. Πολλοί πελάτες βρίσκουν την online θεραπεία εξίσου αποτελεσματική, με το πρόσθετο πλεονέκτημα να παρακολουθούν από το σπίτι. Χρησιμοποιώ κρυπτογραφημένη πλατφόρμα συμβατή με τον GDPR.',
      },
      {
        question: 'Είναι εμπιστευτικό αυτό που μοιράζομαι;',
        answer:
          'Απολύτως. Η εμπιστευτικότητα είναι ακρογωνιαίος λίθος της θεραπείας. Όλα όσα μοιράζεστε αντιμετωπίζονται ως αυστηρά ιδιωτικά. Υπάρχουν πολύ σπάνιες, νομικά καθορισμένες εξαιρέσεις — κυρίως όταν υπάρχει σοβαρός και άμεσος κίνδυνος βλάβης. Αυτές εξηγούνται ξεκάθαρα στην αρχή.',
      },
      {
        question: 'Τι γίνεται αν έχω έκτακτη ανάγκη μεταξύ συνεδριών;',
        answer:
          'Η ψυχοθεραπεία δεν είναι υπηρεσία έκτακτης ανάγκης. Αν βρίσκεστε σε άμεσο κίνδυνο, επικοινωνήστε με τις υπηρεσίες έκτακτης ανάγκης (112) ή μια γραμμή κρίσης. Μεταξύ συνεδριών, μπορείτε να με βρείτε μέσω email για μη επείγοντα θέματα και θα απαντήσω εντός μίας εργάσιμης ημέρας.',
      },
      {
        question: 'Πώς κλείνω ραντεβού;',
        answer:
          'Μπορείτε να επικοινωνήσετε μέσω της φόρμας επικοινωνίας, email ή τηλεφώνου. Συνήθως απαντώ εντός 24 ωρών.',
      },
      {
        question: 'Τι γίνεται αν αγχώνομαι για την έναρξη;',
        answer:
          'Αυτό είναι απόλυτα φυσιολογικό — και πολύ συνηθισμένο. Οι περισσότεροι άνθρωποι νιώθουν τουλάχιστον λίγο άγχος πριν την πρώτη τους συνεδρία. Δεν χρειάζεται να έχετε τα πάντα ξεκαθαρισμένα. Μέρος της δουλειάς μου είναι να σας βοηθήσω να νιώσετε άνετα.',
      },
      {
        question: 'Πώς πρέπει να προετοιμαστώ για την πρώτη συνεδρία;',
        answer:
          'Δεν χρειάζεται ειδική προετοιμασία. Μερικοί βρίσκουν χρήσιμο να σημειώσουν λίγα πράγματα που τους απασχολούν, αλλά είναι εξίσου εντάξει να έρθετε όπως είστε. Το πιο σημαντικό είναι να έρθετε με ανοιχτό μυαλό.',
      },
    ],

    stillHaveQuestions: {
      heading: 'Έχετε ακόμα ερωτήσεις;',
      text: 'Μη διστάσετε να επικοινωνήσετε. Θα χαρώ να απαντήσω σε οτιδήποτε δεν καλύφθηκε εδώ.',
      cta: 'Κάντε μια ερώτηση',
    },
  },

  en: {
    meta: {
      title: 'FAQ — Anemi Therapy Studio',
      description:
        'Frequently asked questions about psychotherapy at Anemi Therapy Studio: what to expect, confidentiality, fees, and more.',
    },

    hero: {
      heading: 'Frequently asked questions',
      subheading:
        'It\'s natural to have questions before starting therapy. Here are some I\'m asked most often.',
    },

    items: [
      {
        question: 'How do I know if therapy is right for me?',
        answer:
          'If you\'re asking this question, that\'s often a sign that some part of you is ready. Therapy can help if you\'re feeling stuck, overwhelmed, anxious, sad, or simply curious about understanding yourself better. You don\'t need to be in crisis to benefit — many people come to therapy as an investment in their wellbeing, not just as a response to difficulty.',
      },
      {
        question: 'What happens in the first session?',
        answer:
          'The first session is an opportunity for us to meet and begin to understand what\'s bringing you to therapy. I\'ll ask some questions about your current situation and what you\'re hoping for, and you\'ll have a chance to ask anything you\'d like about how I work. There\'s no pressure to share more than feels comfortable. By the end, we\'ll have a sense of whether we\'re a good fit.',
      },
      {
        question: 'How long does therapy take?',
        answer:
          'This varies greatly depending on your goals and what you\'re working through. Some people find significant relief in 8–12 sessions; others prefer longer-term work over months or years. We\'ll discuss this openly and adjust as we go. There\'s no minimum commitment.',
      },
      {
        question: 'Do you offer online sessions?',
        answer:
          'Yes. I offer secure video sessions that follow the same structure and quality as in-person appointments. Many clients find online therapy just as effective, with the added convenience of attending from home or wherever feels comfortable. I use an encrypted, GDPR-compliant platform.',
      },
      {
        question: 'Is what I share confidential?',
        answer:
          'Absolutely. Confidentiality is a cornerstone of therapy. Everything you share is treated as strictly private and will not be disclosed to anyone without your explicit consent. There are very rare, legally defined exceptions — primarily when there is a serious and imminent risk of harm. These are explained clearly at the beginning of our work together.',
      },
      {
        question: 'What if I have an emergency or crisis between sessions?',
        answer:
          'Psychotherapy is not an emergency or crisis service. If you are in immediate danger or experiencing a mental health emergency, please contact your local emergency services (112) or a crisis helpline. Between sessions, you can reach me via email for non-urgent matters, and I\'ll respond within one working day.',
      },
      {
        question: 'How do I schedule an appointment?',
        answer:
          'You can reach me through the contact form on this website, by email, or by phone. I typically respond within 24 hours.',
      },
      {
        question: 'What if I\'m nervous about starting?',
        answer:
          'That\'s completely normal — and very common. Most people feel at least a little anxious before their first session. You don\'t need to have everything figured out or know exactly what to say. Part of my job is to help you feel at ease. We\'ll go at your pace, and there\'s never any pressure.',
      },
      {
        question: 'How should I prepare for my first session?',
        answer:
          'There\'s no special preparation needed. Some people find it helpful to jot down a few notes about what\'s on their mind, but it\'s equally fine to come as you are. The most important thing is to arrive with an open mind — even just a small willingness to explore.',
      },
    ],

    stillHaveQuestions: {
      heading: 'Still have questions?',
      text: 'Don\'t hesitate to reach out. I\'m happy to answer anything that wasn\'t covered here.',
      cta: 'Ask a question',
    },
  },
};

export function getFaq(lang: Lang) {
  return faqI18n[lang];
}
