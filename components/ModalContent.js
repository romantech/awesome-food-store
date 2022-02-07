import Image from 'next/image';
import { HomeOutlined } from '@ant-design/icons';

export default function ModalContent({ store }) {
  const { name, description, url, image } = store;
  console.log(description.split('\n\n'));
  return (
    <section className="p-8 flex h-full w-full justify-evenly gap-10">
      <div className="relative h-full w-[45%] bg-black">
        <Image
          className="object-cover max-h-28"
          src={image}
          alt="food-background"
          layout="fill"
        />
      </div>
      <div className="w-[50%] h-full overflow-auto">
        <div className="w-[100px] border-4 border-t mb-3 border-black" />
        <h1 className="text-5xl uppercase h-[20%] m-0">{name}</h1>
        <div className="flex flex-col text-lg h-[77%] justify-between">
          <p className="whitespace-pre-line">{description}</p>
          {url && (
            <div className="border-t pt-2">
              <HomeOutlined style={{ position: 'relative', top: '-4px' }} />
              <a className="ml-2" href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
