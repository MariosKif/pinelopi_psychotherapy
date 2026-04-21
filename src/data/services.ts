/**
 * ═══════════════════════════════════════════════════
 * SERVICES PAGE CONTENT
 * ═══════════════════════════════════════════════════
 */

import type { Lang } from '../i18n/utils';

const servicesI18n = {
  el: {
    meta: {
      title: 'Υπηρεσίες — Πηνελόπη Καρολίδη',
      description:
        'Ατομική ψυχοθεραπεία, ομαδική θεραπεία, θεραπεία ζεύγους, θεραπεία οικογένειας και συμβουλευτική γονέων. Δια ζώσης και online συνεδρίες στην Αθήνα.',
    },

    hero: {
      heading: 'Υπηρεσίες',
      subheading:
        'Παρέχονται υπηρεσίες ατομικής ψυχοθεραπείας και συμβουλευτικής, ομαδικής ψυχοθεραπείας, θεραπείας ζευγαριών, θεραπείας οικογένειας και συμβουλευτικής γονέων.',
    },

    labels: {
      whoItsFor: 'Σε ποιον απευθύνεται',
      whatToExpect: 'Τι να περιμένετε',
    },

    items: [
      {
        id: 'individual',
        title: 'Ατομική Ψυχοθεραπεία',
        whoItsFor:
          'Ενήλικες που αντιμετωπίζουν συντροφικά και οικογενειακά προβλήματα, δυσκολίες με τα παιδιά τους, διαταραχές στη διάθεση, αγχώδεις διαταραχές (εμμονές, κρίσεις πανικού), ψυχοσωματικά συμπτώματα ή διαταραχές πρόσληψης τροφής.',
        whatToExpect:
          'Η ατομική ψυχοθεραπεία στοχεύει στο να προσφέρει νέους τρόπους θέασης και αντιμετώπισης δυσκολιών. Πρόκειται για έναν ενεργό διάλογο με στόχο τη διεύρυνση της οπτικής σας, ώστε να έχετε πρόσβαση σε νέες αφηγήσεις για τον εαυτό σας και να κάνετε τις κατάλληλες μετακινήσεις σε λογικό και συναισθηματικό επίπεδο.',
        duration: 'Εβδομαδιαίες συνεδρίες · Δευτέρα–Παρασκευή',
      },
      {
        id: 'group',
        title: 'Ομαδική Θεραπεία',
        whoItsFor:
          'Ενήλικες που επιθυμούν να εξερευνήσουν τα μοτίβα που αναπαράγουν στις σχέσεις τους μέσα σε ένα ασφαλές ομαδικό πλαίσιο. Προϋπόθεση η έναρξη ατομικής θεραπείας πρώτα.',
        whatToExpect:
          'Η ομάδα γίνεται ένας «μικρόκοσμος» της κοινωνικής ζωής, όπου τα μοτίβα που έχουμε στις σχέσεις εμφανίζονται, αναλύονται και διορθώνονται σε πραγματικό χρόνο. Τα θέματα δεν είναι προκαθορισμένα αλλά ανακύπτουν από τις ανάγκες των μελών.',
        duration: 'Συνεδρίες 2 ωρών · Εβδομαδιαία · 4–9 μέλη',
      },
      {
        id: 'couples',
        title: 'Θεραπεία Ζεύγους',
        whoItsFor:
          'Συντροφικά ζευγάρια που επιθυμούν να επιλύσουν προβλήματα, να διαχειριστούν συγκρούσεις, να βρουν πιο λειτουργικούς τρόπους επικοινωνίας και να φροντίσουν τη σχέση τους.',
        whatToExpect:
          'Ο θεραπευτής συνεργάζεται και με τους δύο για την αναγνώριση δυσλειτουργικών μοτίβων και την ενίσχυση της σχέσης. Η αναπαράσταση που έχει ο κάθε σύντροφος για τη σχέση μέσα από την εμπειρία της πατρικής του οικογένειας διερευνάται ως βασικός παράγοντας.',
        duration: 'Συνεδρίες 60–90 λεπτών · Εβδομαδιαία',
      },
      {
        id: 'family',
        title: 'Θεραπεία Οικογένειας',
        whoItsFor:
          'Οικογένειες που αντιμετωπίζουν δυσκολίες στην επικοινωνία, συγκρούσεις, κρίσεις ή αλλαγές που επηρεάζουν τη δυναμική του οικογενειακού συστήματος.',
        whatToExpect:
          'Μέσα από τη συστημική προσέγγιση, εξετάζουμε πώς λειτουργεί η οικογένεια ως σύνολο, αναγνωρίζοντας μοτίβα αλληλεπίδρασης και βρίσκοντας νέους, πιο λειτουργικούς τρόπους σχέσης μεταξύ των μελών.',
        duration: 'Συνεδρίες 60–90 λεπτών · Εβδομαδιαία ή δεκαπενθήμερη',
      },
      {
        id: 'parenting',
        title: 'Συμβουλευτική Γονέων',
        whoItsFor:
          'Γονείς που αντιμετωπίζουν δυσκολίες και απαιτήσεις του μεγαλώματος — θέματα ορίων και συμπεριφοράς, μαθησιακά θέματα, θέματα υγείας και ανάπτυξης των παιδιών.',
        whatToExpect:
          'Ο ειδικός βοηθά τους γονείς να βελτιώσουν ή να αποκτήσουν νέες δεξιότητες στον ρόλο τους και να έχουν την κατάλληλη καθοδήγηση στη διαπαιδαγώγηση των παιδιών τους.',
        duration: 'Κατόπιν συνεννόησης',
      },
    ],

    onlineSessions: {
      heading: 'Online Συμβουλευτική',
      text: 'Παρέχεται η δυνατότητα διαδικτυακών συναντήσεων μέσω βιντεοκλήσης. Ενδείκνυται όταν ο εξυπηρετούμενος αδυνατεί να έρθει στη δια ζώσης συνάντηση λόγω απόστασης ή υπάρχουν θέματα υγείας. Στην online συμβουλευτική τηρείται ο κώδικας δεοντολογίας και το απόρρητο του πελάτη.',
      note: 'Δεν συνίσταται η online συμβουλευτική όταν το άτομο βιώνει σοβαρή κρίση ή πάσχει από πιο βαριά ψυχική διαταραχή.',
    },

    bookCta: 'Κλείστε συνεδρία',
  },

  en: {
    meta: {
      title: 'Services — Penelope Karolidi',
      description:
        'Individual psychotherapy, group therapy, couples therapy, family therapy, and parent counselling. In-person and online sessions in Athens.',
    },

    hero: {
      heading: 'Services',
      subheading:
        'I offer individual psychotherapy and counselling, group psychotherapy, couples therapy, family therapy, and parent counselling.',
    },

    labels: {
      whoItsFor: 'Who it\'s for',
      whatToExpect: 'What to expect',
    },

    items: [
      {
        id: 'individual',
        title: 'Individual Psychotherapy',
        whoItsFor:
          'Adults facing relationship and family problems, difficulties with their children, mood disorders, anxiety disorders (obsessions, panic attacks), psychosomatic symptoms, or eating disorders.',
        whatToExpect:
          'Individual psychotherapy aims to offer new ways of seeing and addressing difficulties. It is an active dialogue aimed at broadening your perspective, so you can access new narratives about yourself and make meaningful shifts at both a cognitive and emotional level.',
        duration: 'Weekly sessions · Monday–Friday',
      },
      {
        id: 'group',
        title: 'Group Therapy',
        whoItsFor:
          'Adults who wish to explore the patterns they reproduce in their relationships within a safe group setting. Starting individual therapy first is a prerequisite.',
        whatToExpect:
          'The group becomes a "microcosm" of social life, where relationship patterns emerge, are analysed, and corrected in real time. Topics are not predetermined but arise from the needs of the members.',
        duration: '2-hour sessions · Weekly · 4–9 members',
      },
      {
        id: 'couples',
        title: 'Couples Therapy',
        whoItsFor:
          'Partners who wish to resolve problems, manage conflicts, find more functional ways of communicating, and nurture their relationship.',
        whatToExpect:
          'The therapist works with both partners to identify dysfunctional patterns and strengthen the relationship. Each partner\'s representation of relationships through their family-of-origin experience is explored as a key factor.',
        duration: '60–90 minute sessions · Weekly',
      },
      {
        id: 'family',
        title: 'Family Therapy',
        whoItsFor:
          'Families facing communication difficulties, conflicts, crises, or changes that affect the dynamics of the family system.',
        whatToExpect:
          'Through the systemic approach, we examine how the family functions as a whole, identifying interaction patterns and finding new, more functional ways for members to relate to each other.',
        duration: '60–90 minute sessions · Weekly or fortnightly',
      },
      {
        id: 'parenting',
        title: 'Parent Counselling',
        whoItsFor:
          'Parents facing the challenges of raising children — issues of boundaries and behaviour, learning difficulties, and health and development concerns.',
        whatToExpect:
          'The specialist helps parents improve or acquire new skills in their role and receive appropriate guidance in raising their children.',
        duration: 'By arrangement',
      },
    ],

    onlineSessions: {
      heading: 'Online Counselling',
      text: 'Online sessions are available via video call. This is recommended when you are unable to attend in person due to distance or health reasons. The same code of ethics and client confidentiality apply to online counselling.',
      note: 'Online counselling is not recommended when the individual is experiencing a serious crisis or has a more severe mental health condition.',
    },

    bookCta: 'Book a session',
  },
};

export function getServices(lang: Lang) {
  return servicesI18n[lang];
}
