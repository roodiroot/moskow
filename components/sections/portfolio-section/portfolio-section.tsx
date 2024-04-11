import Container from '@/components/container';
import PortfolioElement, { BGPortfolio } from './portfolio-element';
import { Projects } from '@prisma/client';

// const portfolioList: {
//   name: string;
//   description: string;
//   link: string;
//   image: string;
//   bg: BGPortfolio;
// }[] = [
//   {
//     name: 'ДомЭксперт',
//     description: 'Ремонт и отделка помещений в Москве и области.',
//     link: 'https://home-expert.su/',
//     image: '/images/portfolio/homeexpert.jpg',
//     bg: BGPortfolio.light,
//   },
//   {
//     name: 'Холод в Дом',
//     description: 'Продажа и установка промышленных систем охлаждения',
//     link: 'https://holod-vdom.ru/',
//     image: '/images/portfolio/holod.jpg',
//     bg: BGPortfolio.dark,
//   },
//   {
//     name: 'Astraway',
//     description: 'Крупный производитель экологичной, бытовой химии.',
//     link: 'https://astraway.ru/',
//     image: '/images/portfolio/astraway.jpg',
//     bg: BGPortfolio.light,
//   },
//   {
//     name: 'Kondish',
//     description: 'Проектирование и монтaж вентиляции в Москве.',
//     link: 'https://kondish.su/ventilation-systems',
//     image: '/images/portfolio/kondish.jpg',
//     bg: BGPortfolio.light,
//   },
// ];

interface PortfolioSectionProps extends React.HtmlHTMLAttributes<HTMLElement> {
  projectList: Projects[] | null;
}
const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projectList,
  className,
  ...props
}) => {
  return (
    <Container {...props} className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-8">
        {projectList &&
          projectList?.map((i) => (
            <PortfolioElement
              key={i.id}
              image={i.image}
              name={i.name}
              description={i.description}
              link={i.link}
            />
          ))}
      </div>
    </Container>
  );
};

export default PortfolioSection;
