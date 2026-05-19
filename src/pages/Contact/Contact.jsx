import { useState } from "react";
import { infos } from "../../data/menu";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Votre nom est requis";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email invalide";
    if (form.message.trim().length < 10) e.message = "Message trop court (10 caractères min)";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSent(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div className="container">
          <span className="section-label">On est là</span>
          <h1 className={styles.heading}>Contactez-nous</h1>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>

          <div className={styles.formSide}>
            {sent ? (
              <div className={styles.successBox}>
                <span>✓</span>
                <h3>Message envoyé !</h3>
                <p>On vous répond dans les plus brefs délais.</p>
                <button
                  className="btn-ghost"
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name">Nom</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? styles.inputError : ""}
                  />
                  {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? styles.inputError : ""}
                  />
                  {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Votre message..."
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? styles.inputError : ""}
                  />
                  {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>
                <button type="submit" className="btn-primary">Envoyer le message</button>
              </form>
            )}
          </div>

          <div className={styles.infoSide}>
            <div className={styles.infoBox}>
              <h3>Infos pratiques</h3>
              <ul className={styles.infoList}>
                <li>
                  <strong>Adresse</strong>
                  <span>{infos.address}</span>
                </li>
                <li>
                  <strong>Téléphone</strong>
                  <a href={`tel:${infos.phone.replace(/\s/g, "")}`}>{infos.phone}</a>
                </li>
                <li>
                  <strong>Email</strong>
                  <a href={`mailto:${infos.email}`}>{infos.email}</a>
                </li>
              </ul>
            </div>
            <div className={styles.hoursBox}>
              <h3>Horaires</h3>
              <table className={styles.hoursTable}>
                <tbody>
                  {infos.hours.map((h) => (
                    <tr key={h.days}>
                      <td className={styles.day}>{h.days}</td>
                      <td>{h.midi}</td>
                      <td className={styles.evening}>{h.soir}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
