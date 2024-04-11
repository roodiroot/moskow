import { cn } from '@/lib/utils';

export const Icons = {
  vector: (props: React.SVGAttributes<SVGSVGElement>) => (
    <svg width="541" height="903" viewBox="0 0 541 903" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H1V264.355C1 333.738 1 368.429 19.6449 388.559C25.9637 395.381 33.5784 400.875 42.0443 404.722C67.0245 416.072 99.9477 405.137 165.794 383.268L250.206 355.232C316.052 333.363 348.975 322.428 373.956 333.778C382.422 337.625 390.036 343.119 396.355 349.941C415 370.071 415 404.762 415 474.145V777.7C415 829.527 415 855.441 428.047 873.699C432.533 879.975 438.025 885.467 444.301 889.953C462.559 903 488.473 903 540.3 903H319C357.66 903 389 871.66 389 833V432.059C389 384.011 341.702 350.247 296.26 365.855L194.5 400.809L47.2598 451.384C18.9858 461.096 0 487.692 0 517.587V0Z"
        // fill='#F8F8F8'
      />
    </svg>
  ),
  star: (props: React.SVGAttributes<SVGSVGElement>) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M6.82026 1.40852C7.10597 0.45959 8.44963 0.45959 8.73534 1.40852L9.78925 4.90891C9.91646 5.33142 10.3056 5.62061 10.7468 5.62061H14.31C15.2602 5.62061 15.6748 6.82127 14.927 7.40756L11.9165 9.76801C11.5924 10.0221 11.4573 10.4489 11.576 10.8433L12.6945 14.5582C12.976 15.4931 11.8883 16.2359 11.1199 15.6334L8.39482 13.4968C8.03252 13.2127 7.52309 13.2127 7.16079 13.4968L4.43567 15.6334C3.66734 16.2359 2.57963 15.4931 2.86111 14.5582L3.97962 10.8433C4.09835 10.4489 3.96318 10.0221 3.6391 9.76801L0.628554 7.40756C-0.1192 6.82127 0.29538 5.62061 1.24557 5.62061H4.80881C5.25005 5.62061 5.63914 5.33141 5.76635 4.90891L6.82026 1.40852Z"
        fill="#F9C14E"
      />
    </svg>
  ),
  ex: (props: React.SVGAttributes<SVGSVGElement>) => (
    <svg width="81" height="81" viewBox="0 0 81 81" fill="none" {...props}>
      <line
        x1="19.0917"
        y1="59.3969"
        x2="59.3968"
        y2="19.0918"
        strokeWidth="2"
      />
      <line
        x1="60.1044"
        y1="60.8111"
        x2="19.7993"
        y2="20.506"
        strokeWidth="2"
      />
    </svg>
  ),
  building: (props: React.SVGAttributes<SVGSVGElement>) => (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" {...props}>
      <path
        d="M1 17H3M3 17H11M3 17V4.2002C3 3.08009 3 2.51962 3.21799 2.0918C3.40973 1.71547 3.71547 1.40973 4.0918 1.21799C4.51962 1 5.08009 1 6.2002 1H7.8002C8.9203 1 9.48006 1 9.90788 1.21799C10.2842 1.40973 10.5905 1.71547 10.7822 2.0918C11 2.5192 11 3.07899 11 4.19691V7.24609M11 17H19M11 17V7.24609M19 17H21M19 17V11.3682C19 10.843 19 10.5799 18.937 10.335C18.8812 10.1178 18.7889 9.91184 18.6647 9.72518C18.5245 9.51456 18.3295 9.33881 17.9387 8.9877L15.6387 6.92139C14.8827 6.2422 14.5045 5.90275 14.0771 5.77393C13.7007 5.66045 13.299 5.66045 12.9226 5.77393C12.4953 5.90273 12.1173 6.24235 11.3614 6.92139L11 7.24609"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  globe: (props: React.SVGAttributes<SVGSVGElement>) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M1 10H6M1 10C1 14.9706 5.02944 19 10 19M1 10C1 5.02944 5.02944 1 10 1M6 10H14M6 10C6 14.9706 7.79086 19 10 19M6 10C6 5.02944 7.79086 1 10 1M14 10H19M14 10C14 5.02944 12.2091 1 10 1M14 10C14 14.9706 12.2091 19 10 19M19 10C19 5.02944 14.9706 1 10 1M19 10C19 14.9706 14.9706 19 10 19"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mail: (props: React.SVGAttributes<SVGSVGElement>) => (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" {...props}>
      <path
        d="M2 2L8.10764 6.61227L8.10967 6.61396C8.78785 7.11128 9.12714 7.3601 9.49876 7.45621C9.82723 7.54117 10.1725 7.54117 10.501 7.45621C10.8729 7.36001 11.2132 7.11047 11.8926 6.61227C11.8926 6.61227 15.8101 3.60594 18 2M1 11.8002V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V11.8036C19 12.9215 19 13.4805 18.7822 13.9079C18.5905 14.2842 18.2837 14.5905 17.9074 14.7822C17.48 15 16.921 15 15.8031 15H4.19691C3.07899 15 2.5192 15 2.0918 14.7822C1.71547 14.5905 1.40973 14.2842 1.21799 13.9079C1 13.4801 1 12.9203 1 11.8002Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  phone: (props: React.SVGAttributes<SVGSVGElement>) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M7.50246 2.25722C7.19873 1.4979 6.46332 1 5.64551 1H2.89474C1.8483 1 1 1.8481 1 2.89453C1 11.7892 8.21078 19 17.1055 19C18.1519 19 19 18.1516 19 17.1052L19.0005 14.354C19.0005 13.5361 18.5027 12.8009 17.7434 12.4971L15.1069 11.4429C14.4249 11.1701 13.6483 11.2929 13.0839 11.7632L12.4035 12.3307C11.6089 12.9929 10.4396 12.9402 9.7082 12.2088L7.79222 10.2911C7.06079 9.55962 7.00673 8.39134 7.66895 7.59668L8.23633 6.9163C8.70661 6.35195 8.83049 5.57516 8.55766 4.89309L7.50246 2.25722Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  logo: (props: React.SVGAttributes<SVGSVGElement>) => (
    <svg width="746" height="167" viewBox="0 0 746 167" fill="none" {...props}>
      <path d="M161.78 1.18H175.35L207.092 75.402L238.716 1.18H252.286V88.382H243.554V10.738L210.75 88.382H203.198L170.512 10.738V88.382H161.78V1.18Z" />
      <path d="M262.664 56.286C262.664 51.4087 263.529 46.9247 265.26 42.834C266.99 38.6647 269.35 35.0853 272.34 32.096C275.408 29.028 279.026 26.6287 283.196 24.898C287.365 23.1673 291.849 22.302 296.648 22.302C302.312 22.302 307.15 23.3247 311.162 25.37C315.174 27.4153 318.832 30.7193 322.136 35.282V23.836H330.868V88.382H322.136V77.054C320.405 79.3353 318.635 81.302 316.826 82.954C315.095 84.606 313.246 85.9433 311.28 86.966C309.313 87.9887 307.189 88.736 304.908 89.208C302.626 89.68 300.109 89.916 297.356 89.916C292.4 89.916 287.798 89.09 283.55 87.438C279.302 85.7073 275.604 83.3473 272.458 80.358C269.39 77.3687 266.99 73.8287 265.26 69.738C263.529 65.5687 262.664 61.0847 262.664 56.286ZM271.514 55.932C271.514 59.5507 272.182 62.9333 273.52 66.08C274.857 69.2267 276.666 71.98 278.948 74.34C281.308 76.7 284.061 78.5487 287.208 79.886C290.354 81.2233 293.698 81.892 297.238 81.892C300.778 81.892 304.042 81.2233 307.032 79.886C310.1 78.5487 312.735 76.7393 314.938 74.458C317.219 72.098 318.989 69.3447 320.248 66.198C321.506 62.9727 322.136 59.5507 322.136 55.932C322.136 52.2347 321.467 48.852 320.13 45.784C318.871 42.6373 317.101 39.9233 314.82 37.642C312.538 35.3607 309.824 33.5907 306.678 32.332C303.61 30.9947 300.227 30.326 296.53 30.326C293.068 30.326 289.804 30.9947 286.736 32.332C283.746 33.6693 281.111 35.518 278.83 37.878C276.548 40.1593 274.739 42.8733 273.402 46.02C272.143 49.088 271.514 52.392 271.514 55.932Z" />
      <path d="M353.125 31.742H336.133V23.836H378.613V31.742H361.857V88.382H353.125V31.742Z" />
      <path d="M383.898 23.836H392.63V34.928C395.383 30.7587 398.884 27.612 403.132 25.488C407.458 23.364 412.414 22.302 418 22.302C422.798 22.302 427.243 23.1673 431.334 24.898C435.503 26.6287 439.122 29.028 442.19 32.096C445.258 35.0853 447.657 38.6647 449.388 42.834C451.118 46.9247 451.984 51.3693 451.984 56.168C451.984 60.888 451.118 65.3327 449.388 69.502C447.657 73.5927 445.258 77.172 442.19 80.24C439.122 83.2293 435.503 85.5893 431.334 87.32C427.164 89.0507 422.641 89.916 417.764 89.916C412.336 89.916 407.498 88.854 403.25 86.73C399.002 84.606 395.462 81.4593 392.63 77.29V111.038H383.898V23.836ZM417.646 81.892C421.264 81.892 424.608 81.2627 427.676 80.004C430.822 78.6667 433.536 76.8573 435.818 74.576C438.099 72.2947 439.869 69.62 441.128 66.552C442.465 63.4053 443.134 60.0227 443.134 56.404C443.134 52.628 442.465 49.1273 441.128 45.902C439.869 42.6767 438.099 39.9233 435.818 37.642C433.536 35.3607 430.822 33.5907 427.676 32.332C424.529 30.9947 421.068 30.326 417.292 30.326C413.752 30.326 410.448 30.9947 407.38 32.332C404.312 33.6693 401.637 35.518 399.356 37.878C397.074 40.1593 395.265 42.8733 393.928 46.02C392.669 49.1667 392.04 52.5493 392.04 56.168C392.04 59.7867 392.669 63.1693 393.928 66.316C395.265 69.4627 397.074 72.1767 399.356 74.458C401.716 76.7393 404.43 78.5487 407.498 79.886C410.644 81.2233 414.027 81.892 417.646 81.892Z" />
      <path d="M479.199 0H487.931V14.868H479.199V0ZM496.545 0H505.277V14.868H496.545V0ZM523.803 67.142C522.623 70.5247 520.971 73.632 518.847 76.464C516.802 79.2173 514.403 81.6167 511.649 83.662C508.896 85.6287 505.867 87.1627 502.563 88.264C499.338 89.3653 495.955 89.916 492.415 89.916C487.617 89.916 483.133 89.0507 478.963 87.32C474.873 85.5107 471.293 83.072 468.225 80.004C465.157 76.936 462.719 73.3567 460.909 69.266C459.179 65.0967 458.313 60.6127 458.313 55.814C458.313 51.094 459.179 46.728 460.909 42.716C462.64 38.6253 465 35.0853 467.989 32.096C471.057 29.028 474.597 26.6287 478.609 24.898C482.7 23.1673 487.066 22.302 491.707 22.302C496.349 22.302 500.715 23.2067 504.805 25.016C508.975 26.7467 512.593 29.1067 515.661 32.096C518.808 35.0853 521.286 38.586 523.095 42.598C524.905 46.61 525.809 50.858 525.809 55.342C525.809 55.9713 525.77 56.6007 525.691 57.23C525.613 57.7807 525.495 58.3707 525.337 59H467.045C467.203 62.1467 467.989 65.136 469.405 67.968C470.821 70.7213 472.631 73.16 474.833 75.284C477.115 77.3293 479.75 78.942 482.739 80.122C485.729 81.302 488.875 81.892 492.179 81.892C494.618 81.892 496.978 81.538 499.259 80.83C501.619 80.122 503.783 79.1387 505.749 77.88C507.716 76.5427 509.447 74.9693 510.941 73.16C512.515 71.3507 513.773 69.3447 514.717 67.142H523.803ZM516.723 51.094C515.229 44.6433 512.239 39.5693 507.755 35.872C503.35 32.1747 498.001 30.326 491.707 30.326C488.639 30.326 485.729 30.8373 482.975 31.86C480.301 32.804 477.901 34.22 475.777 36.108C473.653 37.9173 471.844 40.12 470.349 42.716C468.933 45.2333 467.911 48.026 467.281 51.094H516.723Z" />
      <path d="M533.997 23.836H542.729V80.476H569.515V23.836H578.247V80.476H605.033V23.836H613.765V88.382H533.997V23.836Z" />
      <path d="M625.065 23.836H633.797V52.628L663.297 23.836H674.625L642.411 55.106L674.625 88.382H663.179L633.797 57.938V88.382H625.065V23.836Z" />
      <path d="M676.664 56.286C676.664 51.4087 677.529 46.9247 679.26 42.834C680.991 38.6647 683.351 35.0853 686.34 32.096C689.408 29.028 693.027 26.6287 697.196 24.898C701.365 23.1673 705.849 22.302 710.648 22.302C716.312 22.302 721.15 23.3247 725.162 25.37C729.174 27.4153 732.832 30.7193 736.136 35.282V23.836H744.868V88.382H736.136V77.054C734.405 79.3353 732.635 81.302 730.826 82.954C729.095 84.606 727.247 85.9433 725.28 86.966C723.313 87.9887 721.189 88.736 718.908 89.208C716.627 89.68 714.109 89.916 711.356 89.916C706.4 89.916 701.798 89.09 697.55 87.438C693.302 85.7073 689.605 83.3473 686.458 80.358C683.39 77.3687 680.991 73.8287 679.26 69.738C677.529 65.5687 676.664 61.0847 676.664 56.286ZM685.514 55.932C685.514 59.5507 686.183 62.9333 687.52 66.08C688.857 69.2267 690.667 71.98 692.948 74.34C695.308 76.7 698.061 78.5487 701.208 79.886C704.355 81.2233 707.698 81.892 711.238 81.892C714.778 81.892 718.043 81.2233 721.032 79.886C724.1 78.5487 726.735 76.7393 728.938 74.458C731.219 72.098 732.989 69.3447 734.248 66.198C735.507 62.9727 736.136 59.5507 736.136 55.932C736.136 52.2347 735.467 48.852 734.13 45.784C732.871 42.6373 731.101 39.9233 728.82 37.642C726.539 35.3607 723.825 33.5907 720.678 32.332C717.61 30.9947 714.227 30.326 710.53 30.326C707.069 30.326 703.804 30.9947 700.736 32.332C697.747 33.6693 695.111 35.518 692.83 37.878C690.549 40.1593 688.739 42.8733 687.402 46.02C686.143 49.088 685.514 52.392 685.514 55.932Z" />
      <path d="M189.363 148.269C187.655 151.418 185.645 153.752 183.332 155.273C181.02 156.759 178.262 157.502 175.06 157.502C172.819 157.502 170.72 157.113 168.763 156.335C166.841 155.556 165.169 154.478 163.746 153.098C162.323 151.718 161.202 150.109 160.384 148.269C159.565 146.395 159.156 144.378 159.156 142.22C159.156 140.098 159.548 138.117 160.33 136.278C161.149 134.438 162.269 132.846 163.693 131.502C165.116 130.122 166.77 129.044 168.656 128.265C170.577 127.487 172.623 127.098 174.793 127.098C176.466 127.098 178.049 127.328 179.543 127.788C181.038 128.212 182.407 128.831 183.653 129.645C184.898 130.459 186.001 131.467 186.962 132.669C187.958 133.837 188.741 135.146 189.31 136.596H184.88C183.742 134.686 182.301 133.235 180.557 132.245C178.849 131.219 176.91 130.706 174.74 130.706C173.103 130.706 171.573 131.007 170.15 131.608C168.763 132.21 167.553 133.041 166.521 134.102C165.489 135.128 164.671 136.348 164.066 137.763C163.461 139.178 163.159 140.699 163.159 142.327C163.159 143.954 163.461 145.475 164.066 146.89C164.671 148.269 165.507 149.49 166.575 150.551C167.642 151.577 168.887 152.39 170.31 152.992C171.734 153.593 173.263 153.894 174.9 153.894C176.999 153.894 178.796 153.469 180.29 152.62C181.82 151.736 183.35 150.286 184.88 148.269H189.363Z" />
      <path d="M198.194 131.343H190.509V127.788H209.721V131.343H202.143V156.812H198.194V131.343Z" />
      <path d="M220.544 155.857L209.23 127.788H213.553L222.786 150.922L232.659 127.788H236.875L220.01 167H215.794L220.544 155.857Z" />
      <path d="M232.187 153.257H235.976L246.916 127.788H251.399L262.34 153.257H266.129V163.498H263.407L261.967 156.812H236.349L234.908 163.498H232.187V153.257ZM258.177 153.257L249.158 132.245L240.139 153.257H258.177Z" />
      <path d="M268.794 127.788H272.743V151.241L290.515 127.788H294.464V156.812H290.515V133.359L272.743 156.812H268.794V127.788Z" />
      <path d="M315.888 131.343H309.11C304.413 131.343 302.065 133.041 302.065 136.437C302.065 139.833 304.413 141.531 309.11 141.531H315.888V131.343ZM305.161 144.767C302.955 144.272 301.211 143.282 299.93 141.796C298.685 140.31 298.062 138.524 298.062 136.437C298.062 135.163 298.311 133.996 298.81 132.935C299.308 131.873 299.984 130.971 300.838 130.229C301.727 129.45 302.777 128.849 303.986 128.424C305.232 128 306.601 127.788 308.096 127.788H319.837V156.812H315.888V145.086H309.43L301.211 156.812H296.728L305.161 144.767Z" />
      <path d="M338.155 127.788H349.843C353.009 127.788 355.482 128.46 357.261 129.804C359.04 131.148 359.929 133.023 359.929 135.429C359.929 136.596 359.556 137.728 358.809 138.824C358.061 139.921 357.119 140.717 355.98 141.212C359.609 142.556 361.424 144.873 361.424 148.163C361.424 149.437 361.157 150.604 360.623 151.665C360.089 152.691 359.342 153.593 358.382 154.371C357.421 155.15 356.282 155.751 354.966 156.176C353.65 156.6 352.209 156.812 350.643 156.812H338.155V127.788ZM349.202 139.78C351.444 139.78 353.151 139.408 354.326 138.665C355.535 137.887 356.14 136.808 356.14 135.429C356.14 132.705 353.827 131.343 349.202 131.343H342.104V139.78H349.202ZM349.629 153.257C352.155 153.257 354.077 152.833 355.393 151.984C356.745 151.099 357.421 149.826 357.421 148.163C357.421 144.944 354.824 143.335 349.629 143.335H342.104V153.257H349.629Z" />
      <path d="M393.614 147.261C393.08 148.782 392.333 150.18 391.372 151.453C390.447 152.691 389.362 153.77 388.117 154.69C386.871 155.574 385.502 156.264 384.007 156.759C382.548 157.254 381.019 157.502 379.417 157.502C377.247 157.502 375.219 157.113 373.333 156.335C371.483 155.521 369.864 154.424 368.477 153.045C367.089 151.665 365.986 150.056 365.168 148.216C364.385 146.341 363.994 144.325 363.994 142.167C363.994 140.045 364.385 138.082 365.168 136.278C365.951 134.438 367.018 132.846 368.37 131.502C369.758 130.122 371.359 129.044 373.173 128.265C375.023 127.487 376.998 127.098 379.097 127.098C381.196 127.098 383.171 127.505 385.021 128.318C386.907 129.097 388.544 130.158 389.931 131.502C391.354 132.846 392.475 134.42 393.293 136.224C394.112 138.029 394.521 139.939 394.521 141.955C394.521 142.238 394.503 142.521 394.468 142.804C394.432 143.052 394.379 143.317 394.307 143.6H367.943C368.014 145.015 368.37 146.359 369.01 147.633C369.651 148.871 370.469 149.967 371.465 150.922C372.497 151.842 373.689 152.567 375.041 153.098C376.393 153.629 377.816 153.894 379.311 153.894C380.414 153.894 381.481 153.735 382.513 153.416C383.58 153.098 384.559 152.656 385.448 152.09C386.338 151.488 387.12 150.781 387.796 149.967C388.508 149.154 389.077 148.252 389.504 147.261H393.614ZM390.411 140.045C389.735 137.144 388.383 134.863 386.355 133.2C384.363 131.537 381.944 130.706 379.097 130.706C377.71 130.706 376.393 130.936 375.148 131.396C373.938 131.82 372.853 132.457 371.892 133.306C370.932 134.12 370.113 135.11 369.437 136.278C368.797 137.41 368.334 138.665 368.05 140.045H390.411Z" />
      <path d="M401.053 134.686C402.049 132.316 403.668 130.459 405.909 129.114C408.151 127.77 410.784 127.098 413.808 127.098C415.836 127.098 417.722 127.487 419.465 128.265C421.209 129.044 422.738 130.122 424.055 131.502C425.371 132.882 426.403 134.491 427.15 136.331C427.898 138.17 428.271 140.151 428.271 142.273C428.271 144.431 427.88 146.448 427.097 148.322C426.314 150.197 425.229 151.807 423.841 153.151C422.489 154.495 420.871 155.556 418.985 156.335C417.099 157.113 415.053 157.502 412.847 157.502C407.831 157.502 404.006 155.999 401.373 152.992C398.776 149.985 397.477 145.563 397.477 139.727V138.135C397.477 131.024 398.793 125.683 401.426 122.11C404.095 118.537 408.222 116.521 413.808 116.061L426.243 115V118.608L414.128 119.722C405.518 120.501 401.106 125.471 400.893 134.633L401.053 134.686ZM412.741 153.894C414.377 153.894 415.889 153.593 417.277 152.992C418.7 152.39 419.928 151.577 420.959 150.551C421.991 149.49 422.792 148.252 423.361 146.837C423.966 145.386 424.268 143.83 424.268 142.167C424.268 140.54 423.966 139.037 423.361 137.657C422.792 136.242 421.991 135.022 420.959 133.996C419.963 132.97 418.754 132.174 417.33 131.608C415.943 131.007 414.431 130.706 412.794 130.706C411.193 130.706 409.699 131.007 408.311 131.608C406.923 132.174 405.714 132.97 404.682 133.996C403.686 135.022 402.885 136.242 402.28 137.657C401.711 139.037 401.426 140.54 401.426 142.167C401.426 143.865 401.711 145.439 402.28 146.89C402.85 148.305 403.632 149.543 404.629 150.604C405.66 151.63 406.852 152.444 408.204 153.045C409.592 153.611 411.104 153.894 412.741 153.894Z" />
      <path d="M445.473 127.788H449.422V132.776C450.667 130.901 452.251 129.486 454.172 128.531C456.129 127.576 458.37 127.098 460.896 127.098C463.067 127.098 465.077 127.487 466.927 128.265C468.813 129.044 470.449 130.122 471.837 131.502C473.225 132.846 474.31 134.456 475.093 136.331C475.875 138.17 476.267 140.169 476.267 142.327C476.267 144.449 475.875 146.448 475.093 148.322C474.31 150.162 473.225 151.771 471.837 153.151C470.449 154.495 468.813 155.556 466.927 156.335C465.041 157.113 462.996 157.502 460.79 157.502C458.335 157.502 456.146 157.024 454.225 156.069C452.304 155.114 450.703 153.699 449.422 151.824V167H445.473V127.788ZM460.736 153.894C462.373 153.894 463.885 153.611 465.273 153.045C466.696 152.444 467.923 151.63 468.955 150.604C469.987 149.578 470.787 148.376 471.357 146.996C471.962 145.581 472.264 144.06 472.264 142.433C472.264 140.735 471.962 139.161 471.357 137.71C470.787 136.26 469.987 135.022 468.955 133.996C467.923 132.97 466.696 132.174 465.273 131.608C463.849 131.007 462.284 130.706 460.576 130.706C458.975 130.706 457.481 131.007 456.093 131.608C454.705 132.21 453.496 133.041 452.464 134.102C451.432 135.128 450.614 136.348 450.009 137.763C449.44 139.178 449.155 140.699 449.155 142.327C449.155 143.954 449.44 145.475 450.009 146.89C450.614 148.305 451.432 149.525 452.464 150.551C453.531 151.577 454.759 152.39 456.146 152.992C457.57 153.593 459.1 153.894 460.736 153.894Z" />
      <path d="M479.129 142.38C479.129 140.186 479.521 138.17 480.303 136.331C481.086 134.456 482.154 132.846 483.506 131.502C484.893 130.122 486.53 129.044 488.416 128.265C490.301 127.487 492.329 127.098 494.5 127.098C497.061 127.098 499.25 127.558 501.064 128.478C502.879 129.397 504.533 130.883 506.027 132.935V127.788H509.977V156.812H506.027V151.718C505.245 152.744 504.444 153.629 503.626 154.371C502.843 155.114 502.007 155.716 501.117 156.176C500.228 156.635 499.267 156.971 498.236 157.184C497.204 157.396 496.065 157.502 494.82 157.502C492.578 157.502 490.497 157.131 488.576 156.388C486.654 155.61 484.982 154.548 483.559 153.204C482.171 151.86 481.086 150.268 480.303 148.429C479.521 146.554 479.129 144.537 479.129 142.38ZM483.132 142.22C483.132 143.848 483.434 145.369 484.039 146.784C484.644 148.199 485.463 149.437 486.494 150.498C487.562 151.559 488.807 152.39 490.23 152.992C491.653 153.593 493.165 153.894 494.767 153.894C496.368 153.894 497.844 153.593 499.196 152.992C500.584 152.39 501.776 151.577 502.772 150.551C503.804 149.49 504.604 148.252 505.174 146.837C505.743 145.386 506.027 143.848 506.027 142.22C506.027 140.558 505.725 139.037 505.12 137.657C504.551 136.242 503.75 135.022 502.719 133.996C501.687 132.97 500.459 132.174 499.036 131.608C497.648 131.007 496.119 130.706 494.446 130.706C492.881 130.706 491.404 131.007 490.017 131.608C488.665 132.21 487.473 133.041 486.441 134.102C485.409 135.128 484.591 136.348 483.986 137.763C483.417 139.143 483.132 140.629 483.132 142.22Z" />
      <path d="M517.641 148.429C517.713 149.207 517.926 149.932 518.282 150.604C518.638 151.276 519.118 151.86 519.723 152.355C520.328 152.85 521.039 153.239 521.858 153.522C522.676 153.77 523.548 153.894 524.473 153.894C525.433 153.894 526.323 153.752 527.141 153.469C527.995 153.186 528.742 152.797 529.383 152.302C530.023 151.807 530.521 151.223 530.877 150.551C531.233 149.879 531.411 149.171 531.411 148.429C531.411 146.731 530.592 145.422 528.956 144.502C527.319 143.582 525.06 143.122 522.178 143.122V139.886C524.668 139.886 526.572 139.479 527.888 138.665C529.205 137.852 529.863 136.667 529.863 135.11C529.863 134.509 529.721 133.943 529.436 133.412C529.151 132.882 528.76 132.422 528.262 132.033C527.764 131.644 527.177 131.343 526.501 131.131C525.86 130.883 525.167 130.759 524.419 130.759C522.961 130.759 521.733 131.166 520.737 131.98C519.741 132.793 519.189 133.837 519.082 135.11H515.08C515.151 133.978 515.436 132.917 515.934 131.927C516.432 130.936 517.09 130.087 517.908 129.38C518.762 128.672 519.741 128.124 520.844 127.735C521.982 127.31 523.192 127.098 524.473 127.098C525.789 127.098 527.017 127.31 528.155 127.735C529.294 128.124 530.29 128.69 531.144 129.433C531.998 130.14 532.656 130.989 533.119 131.98C533.617 132.935 533.866 133.978 533.866 135.11C533.866 136.561 533.492 137.799 532.745 138.824C532.033 139.815 531.002 140.558 529.65 141.053V141.212C531.535 141.743 532.958 142.627 533.919 143.865C534.915 145.068 535.413 146.589 535.413 148.429C535.413 149.702 535.129 150.887 534.56 151.984C533.99 153.08 533.207 154.035 532.211 154.849C531.251 155.663 530.112 156.317 528.796 156.812C527.479 157.272 526.056 157.502 524.526 157.502C523.032 157.502 521.626 157.272 520.31 156.812C519.029 156.352 517.891 155.716 516.894 154.902C515.934 154.088 515.169 153.133 514.599 152.037C514.03 150.905 513.71 149.702 513.639 148.429H517.641Z" />
      <path d="M539.121 127.788H543.07V132.776C544.315 130.901 545.899 129.486 547.82 128.531C549.777 127.576 552.018 127.098 554.545 127.098C556.715 127.098 558.725 127.487 560.575 128.265C562.461 129.044 564.098 130.122 565.485 131.502C566.873 132.846 567.958 134.456 568.741 136.331C569.524 138.17 569.915 140.169 569.915 142.327C569.915 144.449 569.524 146.448 568.741 148.322C567.958 150.162 566.873 151.771 565.485 153.151C564.098 154.495 562.461 155.556 560.575 156.335C558.69 157.113 556.644 157.502 554.438 157.502C551.983 157.502 549.795 157.024 547.873 156.069C545.952 155.114 544.351 153.699 543.07 151.824V167H539.121V127.788ZM554.384 153.894C556.021 153.894 557.533 153.611 558.921 153.045C560.344 152.444 561.572 151.63 562.603 150.604C563.635 149.578 564.436 148.376 565.005 146.996C565.61 145.581 565.912 144.06 565.912 142.433C565.912 140.735 565.61 139.161 565.005 137.71C564.436 136.26 563.635 135.022 562.603 133.996C561.572 132.97 560.344 132.174 558.921 131.608C557.498 131.007 555.932 130.706 554.224 130.706C552.623 130.706 551.129 131.007 549.741 131.608C548.354 132.21 547.144 133.041 546.112 134.102C545.08 135.128 544.262 136.348 543.657 137.763C543.088 139.178 542.803 140.699 542.803 142.327C542.803 143.954 543.088 145.475 543.657 146.89C544.262 148.305 545.08 149.525 546.112 150.551C547.18 151.577 548.407 152.39 549.795 152.992C551.218 153.593 552.748 153.894 554.384 153.894Z" />
      <path d="M572.778 142.38C572.778 140.186 573.169 138.17 573.952 136.331C574.735 134.456 575.802 132.846 577.154 131.502C578.542 130.122 580.178 129.044 582.064 128.265C583.95 127.487 585.978 127.098 588.148 127.098C590.71 127.098 592.898 127.558 594.712 128.478C596.527 129.397 598.181 130.883 599.676 132.935V127.788H603.625V156.812H599.676V151.718C598.893 152.744 598.092 153.629 597.274 154.371C596.491 155.114 595.655 155.716 594.766 156.176C593.876 156.635 592.916 156.971 591.884 157.184C590.852 157.396 589.713 157.502 588.468 157.502C586.227 157.502 584.145 157.131 582.224 156.388C580.303 155.61 578.63 154.548 577.207 153.204C575.82 151.86 574.735 150.268 573.952 148.429C573.169 146.554 572.778 144.537 572.778 142.38ZM576.78 142.22C576.78 143.848 577.083 145.369 577.688 146.784C578.292 148.199 579.111 149.437 580.143 150.498C581.21 151.559 582.455 152.39 583.878 152.992C585.302 153.593 586.814 153.894 588.415 153.894C590.016 153.894 591.492 153.593 592.844 152.992C594.232 152.39 595.424 151.577 596.42 150.551C597.452 149.49 598.253 148.252 598.822 146.837C599.391 145.386 599.676 143.848 599.676 142.22C599.676 140.558 599.373 139.037 598.768 137.657C598.199 136.242 597.399 135.022 596.367 133.996C595.335 132.97 594.108 132.174 592.684 131.608C591.297 131.007 589.767 130.706 588.095 130.706C586.529 130.706 585.053 131.007 583.665 131.608C582.313 132.21 581.121 133.041 580.089 134.102C579.057 135.128 578.239 136.348 577.634 137.763C577.065 139.143 576.78 140.629 576.78 142.22Z" />
      <path d="M611.557 134.686C612.553 132.316 614.172 130.459 616.413 129.114C618.655 127.77 621.288 127.098 624.312 127.098C626.34 127.098 628.226 127.487 629.969 128.265C631.712 129.044 633.242 130.122 634.559 131.502C635.875 132.882 636.907 134.491 637.654 136.331C638.401 138.17 638.775 140.151 638.775 142.273C638.775 144.431 638.384 146.448 637.601 148.322C636.818 150.197 635.733 151.807 634.345 153.151C632.993 154.495 631.374 155.556 629.489 156.335C627.603 157.113 625.557 157.502 623.351 157.502C618.335 157.502 614.51 155.999 611.877 152.992C609.28 149.985 607.981 145.563 607.981 139.727V138.135C607.981 131.024 609.297 125.683 611.93 122.11C614.599 118.537 618.726 116.521 624.312 116.061L636.747 115V118.608L624.632 119.722C616.022 120.501 611.61 125.471 611.397 134.633L611.557 134.686ZM623.244 153.894C624.881 153.894 626.393 153.593 627.781 152.992C629.204 152.39 630.432 151.577 631.463 150.551C632.495 149.49 633.296 148.252 633.865 146.837C634.47 145.386 634.772 143.83 634.772 142.167C634.772 140.54 634.47 139.037 633.865 137.657C633.296 136.242 632.495 135.022 631.463 133.996C630.467 132.97 629.257 132.174 627.834 131.608C626.447 131.007 624.934 130.706 623.298 130.706C621.697 130.706 620.202 131.007 618.815 131.608C617.427 132.174 616.218 132.97 615.186 133.996C614.19 135.022 613.389 136.242 612.784 137.657C612.215 139.037 611.93 140.54 611.93 142.167C611.93 143.865 612.215 145.439 612.784 146.89C613.353 148.305 614.136 149.543 615.132 150.604C616.164 151.63 617.356 152.444 618.708 153.045C620.096 153.611 621.608 153.894 623.244 153.894Z" />
      <path d="M641.655 142.327C641.655 140.133 642.029 138.099 642.776 136.224C643.559 134.35 644.644 132.74 646.031 131.396C647.419 130.052 649.056 129.008 650.941 128.265C652.827 127.487 654.891 127.098 657.132 127.098C659.267 127.098 661.242 127.487 663.056 128.265C664.906 129.044 666.49 130.122 667.806 131.502C669.158 132.846 670.208 134.456 670.955 136.331C671.738 138.17 672.129 140.186 672.129 142.38C672.129 144.537 671.755 146.554 671.008 148.429C670.261 150.268 669.229 151.86 667.913 153.204C666.596 154.548 665.013 155.61 663.163 156.388C661.348 157.131 659.374 157.502 657.239 157.502C654.997 157.502 652.916 157.131 650.995 156.388C649.109 155.61 647.472 154.548 646.085 153.204C644.697 151.824 643.612 150.215 642.829 148.376C642.047 146.501 641.655 144.484 641.655 142.327ZM657.132 153.894C658.733 153.894 660.21 153.611 661.562 153.045C662.914 152.479 664.07 151.701 665.031 150.71C665.991 149.684 666.739 148.464 667.272 147.049C667.842 145.634 668.126 144.095 668.126 142.433C668.126 140.735 667.842 139.161 667.272 137.71C666.739 136.26 665.956 135.022 664.924 133.996C663.928 132.97 662.736 132.174 661.348 131.608C659.996 131.007 658.484 130.706 656.812 130.706C655.211 130.706 653.717 131.007 652.329 131.608C650.977 132.174 649.803 132.988 648.807 134.049C647.846 135.075 647.081 136.313 646.512 137.763C645.942 139.178 645.658 140.717 645.658 142.38C645.658 144.042 645.942 145.581 646.512 146.996C647.081 148.376 647.882 149.578 648.913 150.604C649.945 151.63 651.155 152.444 652.542 153.045C653.966 153.611 655.496 153.894 657.132 153.894Z" />
      <path d="M681.11 131.343H673.424V127.788H692.637V131.343H685.059V156.812H681.11V131.343Z" />
      <path d="M695.028 127.788H698.977V140.735L712.319 127.788H717.443L702.873 141.849L717.443 156.812H712.266L698.977 143.122V156.812H695.028V127.788Z" />
      <path d="M719.486 127.788H723.435V151.241L741.207 127.788H745.156V156.812H741.207V133.359L723.435 156.812H719.486V127.788Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.8795 51.5711C81.1399 46.3885 83.0252 40.2575 83.0252 33.6873C83.0252 15.1885 68.0799 0.172201 49.5781 0C31.0763 0.172362 16.131 15.2033 16.131 33.72C16.131 40.2966 18.0163 46.4335 21.2767 51.6212C3.00946 76.7318 -0.485383 98.3234 0.0506647 105.98C0.0506647 119.918 6.04946 131.675 11.7411 142.829C15.9114 151.002 19.9167 158.852 21.2767 167H49.5781V166.838H77.8795C79.2395 158.698 83.2449 150.856 87.4152 142.691C93.1068 131.547 99.1056 119.802 99.1056 105.877C99.6416 98.2279 96.1468 76.6574 77.8795 51.5711ZM71.1922 158.328C73.3166 151.545 76.5771 145.165 79.5284 139.389C79.6244 139.201 79.7201 139.014 79.8153 138.827C85.6353 127.432 90.576 117.453 90.576 105.877C90.576 105.679 90.5829 105.481 90.5968 105.284C90.9648 100.032 88.3286 80.399 70.9787 56.5726C68.9316 53.7613 68.8035 49.9907 70.655 47.0475C73.0877 43.1806 74.4957 38.6109 74.4957 33.6873C74.4957 19.8883 63.3683 8.68099 49.5782 8.51005C35.7957 8.68107 24.6606 19.8954 24.6606 33.72C24.6606 38.6518 26.0696 43.2285 28.5032 47.1007C30.352 50.0423 30.224 53.8095 28.1798 56.6194C10.8292 80.4701 8.1911 100.125 8.55951 105.387C8.57332 105.585 8.58023 105.782 8.58023 105.98C8.58023 117.572 13.5228 127.563 19.3425 138.969C19.4375 139.155 19.533 139.342 19.6288 139.53C22.581 145.313 25.8419 151.701 27.9659 158.49H47.9131C48.4516 158.384 49.0083 158.328 49.5781 158.328H71.1922Z"
      />
    </svg>
  ),
  burger: ({ open }: { open: boolean }) => (
    <div className="relative w-5 h-5">
      <span
        className={cn(
          'absolute transition-all duration-75 top-1/2 left-0  h-[2px] bg-white after:transition-all after:duration-300 after:absolute after:top-2 after:left-0 after:w-5 after:h-[2px] after:bg-white before:absolute before:transition-all before:duration-300 before:-top-2 before:left-0 before:w-5 before:h-[2px] before:bg-white',
          open
            ? 'w-0 after:rotate-45 after:-translate-y-2 before:-rotate-45 before:translate-y-2'
            : 'w-5 after:rotate-0 after:translate-y-0 before:-rotate-0 before:translate-y-0'
        )}
      ></span>
    </div>
  ),
};
