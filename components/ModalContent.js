import Image from 'next/image';
import { ClockCircleOutlined, HomeOutlined } from '@ant-design/icons';

export default function ModalContent({ store }) {
  const { name, description, url, image } = store;
  const splitDesc = description.split(/(\n)/g);
  const category = splitDesc.shift().trim();
  const lastOrder = splitDesc.pop().trim();
  const modifiedDesc = splitDesc.slice(3);
  const iconStyle = { position: 'relative', top: '-4px' };

  return (
    <div className="p-8 flex flex-col lg:flex-row h-full w-full justify-evenly gap-10">
      <section className="relative h-full w-full lg:w-[45%] bg-gray-200">
        <Image
          className="object-cover max-h-28"
          src={image}
          alt="food-background"
          layout="fill"
        />
      </section>
      <section className="w-full lg:w-[50%] h-full overflow-auto pr-4">
        <header className="mb-6 lg:mb-4 lg:h-[20%]">
          <span className="font-bold inline-block pb-1 mb-4 border-b-4 border-black">
            {category}
          </span>
          <h1 className="text-2xl lg:text-3xl 2xl:text-5xl uppercase">
            {name}
          </h1>
        </header>
        <article className="flex flex-col text-base 2xl:text-lg h-[77%] justify-start">
          <section className="whitespace-pre-line grow">{modifiedDesc}</section>
          <section>
            <div className="border-t border-b py-2">
              <ClockCircleOutlined style={iconStyle} />
              <span className="ml-2">{lastOrder}</span>
            </div>
            {url && (
              <div className="border-b py-2">
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
