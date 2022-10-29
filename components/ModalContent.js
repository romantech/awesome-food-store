import { ClockCircleOutlined, HomeOutlined } from '@ant-design/icons';
import FillLayoutImage from '@/components/FillLayoutImage';

export default function ModalContent({ store }) {
  const { name, description, url, image } = store;
  const splitDesc = description.split(/(\n)/g);
  const category = splitDesc.shift().trim();
  const lastOrder = splitDesc.pop().trim();
  const modifiedDesc = splitDesc.slice(3);

  return (
    <div className="flex h-full w-full flex-col gap-10 pb-5 ss:p-8 lg:flex-row">
      <FillLayoutImage
        classNames="h-[45%] lg:h-full w-full lg:w-[45%]"
        priority={true}
        src={image}
        alt={name}
      />
      <section
        style={{ WebkitOverflowScrolling: 'touch' }}
        className="h-full w-full overflow-y-auto overscroll-y-contain p-5 ss:p-0 ss:pr-4 lg:w-[50%]"
      >
        <header className="mb-6 font-heading lg:mb-4 lg:h-[19.5%]">
          <span className="mb-4 inline-block border-b-4 border-black pb-1 font-bold">
            {category}
          </span>
          <h1 className="text-2xl uppercase lg:text-3xl 2xl:text-5xl">
            {name}
          </h1>
        </header>
        <article className="flex h-[77%] flex-col justify-start text-base 2xl:text-lg">
          <section className="grow whitespace-pre-line">{modifiedDesc}</section>
          <section>
            <div className="flex items-center justify-start border-t border-b py-2">
              <ClockCircleOutlined />
              <span className="ml-2">{lastOrder}</span>
            </div>
            {url && (
              <div className="flex items-center justify-start border-b py-2">
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
