import Image from 'next/image';
import { Metadata } from 'next';

import { Icons } from '@/components/icons';
import Wrapper from '@/components/wrapper';
import Contacts from '@/components/contacts/contacts-block';

export const metadata: Metadata = {
  title: 'Наши контакты',
  description:
    'Контактные данные веб студии. Вы всегда можете обратиться к нам по телефону или в соц сетях. Мы рады каждому клиенту.',
};

const ContactsPage = () => {
  return (
    <Wrapper className="mt-9">
      <div className="w-full max-w-2xl mx-auto lg:max-w-none">
        <div className="space-y-10">
          <h1 className="pt-3 max-w-2xl text-5xl sm:text-6xl 2xl:text-7xl tracking-tight font-semibold">
            Контакты.
          </h1>
          <div className="flex flex-col-reverse gap-y-12 lg:flex-row lg:gap-x-5">
            <div className="relative rounded-[36px] overflow-hidden">
              <Image
                src="/images/contacts.jpg"
                className=" w-full h-full object-cover lg:aspect-1 lg:max-w-[520px]"
                alt="contacts"
                width={500}
                height={500}
              />
            </div>
            <div className=" flex-1 flex flex-col gap-8 justify-between lg:min-w-[600px] lg:gap-y-20 lg:px-4  xl:px-10 lg:py-8">
              {/* <p className="text-lg">
                Станьте владельцем своего собственного космического сайта!
                Разверните ваш бизнес во вселенной интернета с нашим
                эксклюзивным предложением по созданию сайта прямо сейчас!
              </p> */}
              <Contacts />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactsPage;
