import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { register, handleSubmit } = useForm();

  const handleSignIn = (data) => {
    console.log(data);
  };

  return (
    <main className={styles.container}>
      <h3>Realize o login</h3>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <div className="form-group">
          <input
            {...register("email")}
            name="email"
            placeholder="E-mail"
            type="text"
            className="form-control"
          />
          <input
            {...register("password")}
            name="password"
            placeholder="Senha"
            type="password"
            className="form-control mt-1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            {...register("remember")}
            name="remember"
            type="checkbox"
            className="form-check-input"
            id="checkMe"
          />
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
