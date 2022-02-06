export default function ModalContent({ store }) {
  const { name, description, url } = store;
  return (
    <section>
      <h1>{name}</h1>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </section>
  );
}
