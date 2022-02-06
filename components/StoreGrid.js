import Image from 'next/image';

/*
 * Next.js에서 제공하는 이미지 최적화 컴포넌트
 * 뷰포트에 들어왔을 때만 이미지 로드(Lazy Load)
 * 자동으로 가장 작은 사이즈의 이미지 생성
 * deviceSizes 프로퍼티로 기기 breakpoint 지정 가능
 * reference: https://heejinlee07.github.io/2020/11/23/201124_next_image/
 * static import 이미지 혹은 외부 이미지는 blurDataURL를 제공하면
 * placeholder="blur" 속성으로 로딩시 블러 효과 가능
 * */
export default function StoreGrid({ alt, src, callback }) {
  // 외부 이미지를 불러오려면 loader 속성을 사용하거나 next.config.js에 호스트 추가
  // reference: https://nextjs.org/docs/basic-features/image-optimization
  return (
    <div className="w-44 h-44 lg:w-56 lg:h-56 relative bg-gray-200">
      <Image
        className="rounded-md cursor-pointer"
        src={src}
        alt={alt}
        onClick={callback}
        layout="fill"
      />
    </div>
  );
}
