import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h3>Realize o login</h3>
      <form>
        <div className="form-group">
          <input placeholder="E-mail" type="text" className="form-control" />
          <input
            placeholder="Senha"
            type="password"
            className="form-control mt-1"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="checkMe" />
          <label className="form-check-label" htmlFor="checkMe">
            Lembrar senha
          </label>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
        </div>
      </form>
    </main>
  );
}
