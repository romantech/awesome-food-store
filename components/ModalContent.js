import Image from 'next/image';

export default function ModalContent({ store }) {
  const { name, description, url, image } = store;
  console.log(url);
  return (
    <section className="p-8 flex h-full w-full justify-evenly gap-4">
      <div className="relative h-full w-5/12 bg-black">
        <Image
          className="object-cover max-h-28"
          src={image}
          alt="food-background"
          layout="fill"
        />
      </div>
      <div className="w-6/12 h-full overflow-auto">
        <div className="w-[100px] border-4 border-t mb-3 border-black" />
        <h1 className="text-5xl uppercase h-[20%] m-0">{name}</h1>
        <div className="flex flex-col text-lg h-[77%] justify-between">
          <p className="whitespace-pre-line">{description}</p>
          {url && (
            <a
              className="border-t pt-2"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {url}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
