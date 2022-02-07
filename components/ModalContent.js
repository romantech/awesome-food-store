import Image from 'next/image';
import { ClockCircleOutlined, HomeOutlined } from '@ant-design/icons';

export default function ModalContent({ store }) {
  const { name, description, url, image } = store;
  const splitDesc = description.split(/(\n)/g);
  const category = splitDesc.shift().trim();
  const lastOrder = splitDesc.pop().trim();
  const iconStyle = { position: 'relative', top: '-4px' };

  return (
    <div className="p-8 flex h-full w-full justify-evenly gap-10">
      <section className="relative h-full w-[45%] bg-gray-200">
        <Image
          className="object-cover max-h-28"
          src={image}
          alt="food-background"
          layout="fill"
        />
      </section>
      <section className="w-[50%] h-full overflow-auto pr-4">
        <header className="h-[20%] mb-4">
          <span className="font-medium inline-block pb-1 mb-4 border-b-4 border-black">
            {category}
          </span>
          <h1 className="text-5xl uppercase">{name}</h1>
        </header>
        <article className="flex flex-col text-lg h-[77%] justify-between">
          <section className="whitespace-pre-line">{splitDesc}</section>
          <section>
            <div className="border-t border-b pt-2 pb-2 text-base">
              <ClockCircleOutlined style={iconStyle} />
              <span className="ml-2">{lastOrder}</span>
            </div>
            {url && (
              <div className="border-b pt-2 pb-2 text-base">
                <HomeOutlined style={iconStyle} />
                <a className="ml-2" href={url} target="_blank" rel="noreferrer">
                  {url}
                </a>
              </div>
            )}
          </section>
        </article>
      </section>
    </div>
  );
}
