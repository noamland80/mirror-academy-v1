/**
 * THE DISCLOSURE LEDGER, IN WORDS A CLIENT WOULD RECOGNISE
 *
 * The case engine tracks what a client has disclosed and what she is still
 * holding as flag names: `identity_fear`, `spouse_comment`, `guard_lowered`.
 * Those are correct for the engine and wrong for a person. Worse, they are
 * English, so a Spanish practitioner reading "identity fear, spouse comment"
 * in the middle of a Spanish debrief is reading through a hole in the product.
 *
 * The Academy shell has always translated them (app.js, LEDGER_WORD). When the
 * public sample started showing the same ledger it showed the raw flags, in
 * English, on a Spanish page — so the map moved here, where anything that
 * serves a ledger entry can reach it, rather than being copied a second time.
 *
 * `test/verify-public-sample.js` asserts the shell's copy still agrees with
 * this one, so the two cannot drift apart without a failing test.
 */
const T = (en, es) => ({ en, es });

const LEDGER_WORD = {
  avoided_holiday:           T("the holiday she did not go on", "las vacaciones a las que no fue"),
  budget_ceiling:            T("her budget ceiling", "su techo de presupuesto"),
  changed_circumstances:     T("what changed at home", "lo que ha cambiado en su casa"),
  competitor_quotes:         T("the other quotes", "los otros presupuestos"),
  considering_leaving:       T("that she is thinking of leaving", "que se está planteando irse"),
  disagreement_permitted:    T("that she is allowed to disagree", "que puede no estar de acuerdo"),
  discount_test:             T("the discount test", "la prueba del descuento"),
  emotional_cost:            T("what it has cost her", "lo que le ha costado"),
  guard_lowered:             T("her guard, lowered", "la guardia, bajada"),
  hidden_motivation:         T("her real reason for coming", "su motivo real para venir"),
  hospital_promise:          T("the promise she made in hospital", "la promesa que se hizo en el hospital"),
  identity_fear:             T("her fear of not looking like herself", "su miedo a no parecerse a sí misma"),
  life_change:               T("the change in her life", "el cambio en su vida"),
  no_decision_yet:           T("that she has decided nothing", "que todavía no ha decidido nada"),
  not_told_him:              T("that she never told him", "que nunca se lo contó"),
  own_view:                  T("her own opinion", "su propia opinión"),
  partner_comment:           T("what her partner said", "lo que dijo su pareja"),
  permission_fear:           T("her fear of not being allowed this", "su miedo a no tener derecho a esto"),
  previous_spend:            T("what she already spent", "lo que ya se gastó"),
  prior_experience_detail:   T("the detail of the earlier treatment", "el detalle del tratamiento anterior"),
  saved_fund:                T("the money she saved for this", "el dinero que ahorró para esto"),
  self_blame:                T("that she blames herself", "que se culpa a sí misma"),
  self_permission:           T("whether she is allowed to want it", "si tiene derecho a quererlo"),
  shame_at_wanting_it:       T("her shame at still wanting it", "su vergüenza por seguir queriéndolo"),
  spouse_comment:            T("what her husband said", "lo que dijo su marido"),
  surgical_expectation:      T("the result she is picturing", "el resultado que se imagina"),
  trust_injury:              T("where her trust was injured", "dónde se dañó su confianza"),
  unspoken_disappointment:   T("the disappointment she never mentioned", "la decepción que nunca mencionó")
};

/**
 * The human phrase for a flag, as a bilingual pair for `send()` to resolve.
 * An unmapped flag degrades to its own name with the underscores removed,
 * which is ugly but never blank — and `verify-public-sample.js` fails if a
 * flag the sample can actually produce is missing from the map.
 */
function ledgerWord(key) {
  const k = String(key || '');
  if (LEDGER_WORD[k]) return LEDGER_WORD[k];
  const plain = k.replace(/_/g, ' ');
  return T(plain, plain);
}

/** Whether a flag has a human phrase at all. Used by the tests. */
const hasLedgerWord = k => Object.prototype.hasOwnProperty.call(LEDGER_WORD, String(k || ''));

module.exports = { LEDGER_WORD, ledgerWord, hasLedgerWord };
