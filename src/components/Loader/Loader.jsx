import css from './Loader.module.css';

export default function Loader({ overlay = false }) {
  const card = (
    <div className={css.card}>
      <div className={css.spinner} />
      <p className={css.title}>Loading tracks...</p>
      <p className={css.description}>
        Please wait while we fetch the best
        <br />
        travel trucks for you
      </p>
    </div>
  );

  if (overlay) {
    return <div className={css.overlay}>{card}</div>;
  }

  return <div className={css.inlineWrapper}>{card}</div>;
}
