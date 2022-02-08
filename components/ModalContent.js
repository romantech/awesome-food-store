import { ClockCircleOutlined, HomeOutlined } from '@ant-design/icons';
import FillLayoutImage from '@/components/FillLayoutImage';

export default function ModalContent({ store }) {
  const { name, description, url, image } = store;
  const splitDesc = description.split(/(\n)/g);
  const category = splitDesc.shift().trim();
  const lastOrder = splitDesc.pop().trim();
  const modifiedDesc = splitDesc.slice(3);

  return (
    <div className="p-5 lg:p-8 flex flex-col lg:flex-row h-full w-full justify-evenly gap-10">
      <FillLayoutImage
        classNames="h-[30%] lg:h-full w-full lg:w-[45%]"
        priority={true}
        src={image}
        alt={name}
      />
      <section className="w-full lg:w-[50%] h-full overflow-auto pr-4">
        <header className="font-heading  mb-6 lg:mb-4 lg:h-[19.5%]">
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
            <div className="border-t border-b py-2 flex justify-start items-center">
              <ClockCircleOutlined />
              <span className="ml-2">{lastOrder}</span>
            </div>
            {url && (
              <div className="border-b py-2 flex justify-start items-center">
                <HomeOutlined />
                <a
                  className="ml-2 overflow-hidden text-ellipsis whitespace-nowrap"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
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
