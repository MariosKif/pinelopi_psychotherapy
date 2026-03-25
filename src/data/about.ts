/**
 * ═══════════════════════════════════════════════════
 * ABOUT PAGE CONTENT
 * ═══════════════════════════════════════════════════
 */

import type { Lang } from '../i18n/utils';

const aboutI18n = {
  el: {
    meta: {
      title: 'Σχετικά — Anemi Therapy Studio',
      description:
        'Γνωρίστε την Πηνελόπη Καρολίδη, Ψυχολόγο-Ψυχοθεραπεύτρια στην Αθήνα. Συστημική ψυχοθεραπεία και συμβουλευτική για ενήλικες, ζευγάρια και οικογένειες.',
    },

    hero: {
      heading: 'Σχετικά με εμένα',
      subheading:
        'Στόχος μας είναι η ουσιαστική στήριξη ενηλίκων και οικογενειών μέσα από το πλαίσιο της πρόληψης, θεραπείας και ψυχοκοινωνικής ενδυνάμωσης.',
    },

    story: {
      heading: 'Η πορεία μου',
      paragraphs: [
        'Έχω γεννηθεί και μεγαλώσει στην Αθήνα. Ξεκίνησα τις σπουδές μου στο τμήμα Ψυχολογίας στο Πάντειο Πανεπιστήμιο Αθηνών όπου και αποφοίτησα το 2020. Συνέχισα με την ειδίκευσή μου στη Συστημική Ψυχοθεραπεία και Θεραπεία Οικογένειας στο Εργαστήριο Διερεύνησης Ανθρώπινων Σχέσεων (ΕΔΑΣ), αποκτώντας τη δυνατότητα να δουλεύω θεραπευτικά με μεμονωμένα άτομα, οικογένειες, ζευγάρια και να συντονίζω ψυχοθεραπευτικές ομάδες. Παράλληλα, ολοκλήρωσα το Μεταπτυχιακό Πρόγραμμα Σπουδών «Ψυχική Υγεία Παιδιού κι Εφήβου» στο Ευρωπαϊκό Πανεπιστήμιο Κύπρου και μελέτησα ερευνητικά τις οικογενειακές σχέσεις και τις επιρροές τους στο άτομο.',
        'Το 2019 εργάστηκα στον Ο.Κ.Α.Ν.Α στο Γενικό Νοσοκομείο Πειραιά ως σύμβουλος τοξικοεξαρτήσεων, δουλεύοντας ατομικά αλλά και με τις οικογένειες των ανθρώπων σε χρήση. Έχω ολοκληρώσει διετή εκπαίδευση στις Διαταραχές Πρόσληψης Τροφής στην Α\' Ψυχιατρική Κλινική του Αιγινητείου Νοσοκομείου, αναλαμβάνοντας περιστατικά στα εξωτερικά ιατρεία υπό την εποπτεία του κ. Φ. Γονιδάκη.',
        'Έχω παρακολουθήσει σειρά σεμιναρίων αποκτώντας εργαλεία από διάφορες «σχολές» ψυχοθεραπείας που προσαρμόζω στις ανάγκες κάθε ανθρώπου. Ασχολούμενη από μικρή με τον χώρο της τέχνης — μουσική, θέατρο, εικαστικά — βρίσκω πως μπορεί να είναι ένα χρήσιμο θεραπευτικό εργαλείο ως ένας πιο βιωματικός τρόπος να συνδιαλαγούμε.',
      ],
    },

    values: {
      heading: 'Τι καθοδηγεί τη δουλειά μου',
      items: [
        {
          title: 'Συστημική οπτική',
          description:
            'Κατανοώ τον κάθε άνθρωπο μέσα στο πλαίσιο των σχέσεών του — οικογενειακών, συντροφικών, κοινωνικών. Η αλλαγή σε ένα σημείο του συστήματος φέρνει αλλαγή παντού.',
        },
        {
          title: 'Γνήσια ζεστασιά',
          description:
            'Φέρνω τον αυθεντικό μου εαυτό σε κάθε συνεδρία. Η θεραπευτική σχέση έχει τόση σημασία όση και οι τεχνικές που χρησιμοποιούμε.',
        },
        {
          title: 'Ολοκληρωμένη προσέγγιση',
          description:
            'Συνδυάζω τη συστημική θεραπεία με στοιχεία γνωσιακής-συμπεριφορικής θεραπείας και θεραπείας μέσω τεχνών, προσαρμόζοντας πάντα στις ανάγκες του κάθε ανθρώπου.',
        },
        {
          title: 'Πρόληψη και ενδυνάμωση',
          description:
            'Δεν χρειάζεται να βρίσκεστε σε κρίση για να αναζητήσετε υποστήριξη. Η θεραπεία μπορεί να λειτουργήσει προληπτικά, ενδυναμώνοντας τον τρόπο που σχετίζεστε με τον εαυτό σας και τους γύρω σας.',
        },
      ],
    },

    whatItFeelsLike: {
      heading: 'Πώς είναι να δουλεύουμε μαζί',
      paragraphs: [
        'Οι συνεδρίες μας είναι ένας ενεργός διάλογος όπου ακούγονται ερωτήματα που μπορεί να μην έχετε σκεφτεί ή ακούσει ποτέ, με στόχο τη διεύρυνση της οπτικής σας. Δεν υπάρχει κριτική, βιασύνη ή πίεση.',
        'Στόχος είναι να έχετε πρόσβαση σε νέες, περισσότερες αφηγήσεις για τον εαυτό σας από αυτές που έχετε μάθει μεγαλώνοντας — αναλαμβάνοντας την ευθύνη να συνεχίσετε την «αυτοβιογραφία» σας ο ίδιος/η ίδια από εδώ και πέρα.',
        'Μέσα από αυτή την πορεία μπορείτε να καταλάβετε πώς δομήθηκε η σκέψη και το συναίσθημά σας και να κάνετε τις κατάλληλες μετακινήσεις σε λογικό και συναισθηματικό επίπεδο.',
      ],
    },

    ethics: {
      heading: 'Εμπιστευτικότητα & δεοντολογία',
      paragraphs: [
        'Όλα όσα μοιράζεστε στη θεραπεία αντιμετωπίζονται ως αυστηρά εμπιστευτικά. Τηρώ τον κώδικα δεοντολογίας και βέβαια το απόρρητο του πελάτη, τόσο στη δια ζώσης όσο και στην online συνεργασία.',
        'Υπάρχουν πολύ περιορισμένες εξαιρέσεις στην εμπιστευτικότητα — κυρίως όταν υπάρχει άμεσος κίνδυνος σοβαρής βλάβης. Αυτές εξηγούνται ξεκάθαρα στην αρχή της θεραπείας.',
        'Σε σοβαρότερες περιπτώσεις που χρήζουν φαρμακευτικής υποστήριξης, υπάρχει συνεργασία με ψυχίατρο ώστε να εξασφαλιστεί η πληρέστερη δυνατή φροντίδα.',
      ],
    },
  },

  en: {
    meta: {
      title: 'About — Anemi Therapy Studio',
      description:
        'Meet Penelope Karolidi, Psychologist-Psychotherapist in Athens. Systemic psychotherapy and counselling for adults, couples, and families.',
    },

    hero: {
      heading: 'About me',
      subheading:
        'My goal is meaningful support for adults and families through prevention, therapy, and psychosocial empowerment.',
    },

    story: {
      heading: 'My journey',
      paragraphs: [
        'Born and raised in Athens, I studied Psychology at Panteion University, graduating in 2020. I then specialised in Systemic Psychotherapy and Family Therapy at the Laboratory for the Study of Human Relations (EDAS), gaining the ability to work therapeutically with individuals, families, couples, and to facilitate psychotherapy groups. At the same time, I completed my MSc in "Child and Adolescent Mental Health" at the European University of Cyprus, researching family relationships and their influence on individuals across the lifespan.',
        'In 2019, I worked at OKANA at Piraeus General Hospital as a substance abuse counsellor, working individually and with families. I also completed a two-year training programme in Eating Disorders at the 1st Psychiatric Clinic of Aeginitio Hospital, managing cases in the outpatient clinic under the supervision of Dr. F. Gonidakis.',
        'I have attended numerous seminars, acquiring tools from various therapeutic schools that I adapt to each person\'s needs. Having been involved in the arts from a young age — music, theatre, visual arts — I find that art can be a valuable therapeutic tool, offering a more experiential way to communicate.',
      ],
    },

    values: {
      heading: 'What guides my work',
      items: [
        {
          title: 'Systemic perspective',
          description:
            'I understand each person within the context of their relationships — family, partnership, social. Change in one part of the system brings change everywhere.',
        },
        {
          title: 'Genuine warmth',
          description:
            'I bring my authentic self to every session. The therapeutic relationship matters as much as the techniques we use.',
        },
        {
          title: 'Integrative approach',
          description:
            'I combine systemic therapy with elements of cognitive-behavioural therapy and arts-based therapy, always adapting to each person\'s needs.',
        },
        {
          title: 'Prevention and empowerment',
          description:
            'You don\'t need to be in crisis to seek support. Therapy can work preventively, strengthening how you relate to yourself and those around you.',
        },
      ],
    },

    whatItFeelsLike: {
      heading: 'What it feels like to work together',
      paragraphs: [
        'Our sessions are an active dialogue where questions arise that you may have never considered — aimed at broadening your perspective. There is no judgement, no rush, and no pressure.',
        'The goal is for you to access new narratives about yourself beyond those you grew up with — taking responsibility for writing your own "autobiography" from here on.',
        'Through this process, you can understand how your thinking and emotions were shaped, and make meaningful shifts at both a cognitive and emotional level.',
      ],
    },

    ethics: {
      heading: 'Confidentiality & ethics',
      paragraphs: [
        'Everything shared in therapy is treated as strictly confidential. I adhere to the code of professional ethics and maintain client confidentiality, both in person and online.',
        'There are very limited exceptions to confidentiality — primarily when there is an immediate risk of serious harm. These are explained clearly at the start of therapy.',
        'In more serious cases that require medication, I collaborate with a psychiatrist to ensure the most comprehensive care possible.',
      ],
    },
  },
};

export function getAbout(lang: Lang) {
  return aboutI18n[lang];
}
