import { cn } from '@/lib/utils';
import Image from 'next/image';

export enum BGPortfolio {
  light,
  dark,
}

interface PortfolioElementProps extends React.HtmlHTMLAttributes<HTMLElement> {
  name: string | null;
  description: string | null;
  image: string | null;
  link: string | null;
}

const PortfolioElement: React.FC<PortfolioElementProps> = ({
  name,
  description,
  image,
  link,
  className,
  ...props
}) => (
  <a
    href={link || ''}
    target="_blank"
    className={cn(
      'relative overflow-hidden h-full isolate rounded-[35px] md:rounded-[70px]  aspect-[1/1] ',
      className
    )}
    {...props}
  >
    <Image
      width={1000}
      height={1000}
      src={image || ''}
      alt={`${name}_screen`}
      className="absolute transition duration-1000 hover:scale-110   w-full h-full object-cover"
    />
    <div
      className={cn(
        'relative w-full h-full z-10 text-center p-2 sm:p-4 lg:p-8 xl:p-12 pointer-events-none'
      )}
    >
      <h3 className=" font-semibold tracking-tight text-xl lg:text-3xl mix-blend-difference">
        {name}
      </h3>
      <h3 className="text-sm mt-1 md:mt-3 sm:text-base ">{description}</h3>
    </div>
  </a>
);

export default PortfolioElement;
