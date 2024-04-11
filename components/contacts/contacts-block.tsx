import { Icons } from '../icons';

const Contacts = () => {
  return (
    <div className="space-y-3">
      <a
        href="https://matryoshka-studio.ru"
        className="flex gap-2 items-start"
        target="_blank"
      >
        {/* <Icons.globe className="stroke-accent/30 dark:stroke-white mt-1 shrink-0" /> */}
        <p className="text-xl font-medium tracking-tight">
          matryoshka-studio.ru
        </p>
      </a>
      <a
        href="mailto:hello@matryoshka-studio.ru"
        className="flex gap-2 items-start"
        target="_blank"
      >
        {/* <Icons.mail className="stroke-accent/30 dark:stroke-white mt-1 shrink-0" /> */}
        <p className="text-xl font-medium tracking-tight">
          hello@matryoshka-studio.ru
        </p>
      </a>

      <div className="flex gap-2 items-start">
        <div className="">
          <p className="text-xl font-medium tracking-tight">
            Москва, ​Волгоградский проспект, 32, к31, оф. 314
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-start">
        <div className="">
          <p className="text-xl font-medium tracking-tight">
            Республика Мордовия, г. Саранск ул. Советская 75, оф. 501
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        {/* <Icons.phone className="stroke-accent/30 dark:stroke-white mt-1 shrink-0" /> */}
        <div className="">
          <a href="tel:+79170054944" className="flex gap-2 items-center">
            <p className="text-xl font-medium tracking-tight">
              + 7 (917) 005-49-44
            </p>
          </a>
          <a href="tel:+79875704514" className="flex gap-2 items-center">
            <p className="text-xl font-medium tracking-tight">
              + 7 (987) 570-45-14
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
