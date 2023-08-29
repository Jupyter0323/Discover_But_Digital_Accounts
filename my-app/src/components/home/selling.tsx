import { SellingData } from "@/assets/images/_images";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col mb-[55px] lg:px-[255px] md:px-50 px-50">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex flex-col ">
            <div className="flex flex-col lg:w-[510px] md:w-auto sm:w-auto min-w-max">
              <span className="text-[38px] font-[600]">Top Selling</span>
              <span className="text-[22px] font-[400] mt-[20px]">
                Check out OUR best selling accounts
              </span>
            </div>
          </div>
          <div>
            <button className="flex flex-row md:w-[180px] sm:w-fill-available min-w-[180px]  rounded-[10px] h-[40px] gap-[12px] px-5 py-0 items-center justify-center border-[#A259FF] border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.17053 12.4491C6.28055 12.7763 6.10451 13.1307 5.77734 13.2407C4.71792 13.597 4.15489 14.4863 3.85373 15.3907C3.73414 15.7498 3.66189 16.0955 3.61848 16.3814C3.90434 16.338 4.25006 16.2657 4.60917 16.1461C5.51355 15.845 6.4029 15.2819 6.75916 14.2225C6.86918 13.8954 7.2236 13.7193 7.55078 13.8293C7.87795 13.9394 8.05399 14.2938 7.94396 14.621C7.4096 16.21 6.08801 16.9712 5.00411 17.3321C4.45655 17.5144 3.94395 17.6045 3.5698 17.6493C3.38182 17.6719 3.22641 17.6833 3.116 17.6891C3.06074 17.6921 3.01658 17.6936 2.98505 17.6943C2.96928 17.6947 2.95666 17.6949 2.94737 17.6951L2.93596 17.6952L2.93217 17.6952L2.93077 17.6952L2.93019 17.6952C2.92993 17.6952 2.92969 17.6952 2.92969 17.0702C2.30469 17.0702 2.30469 17.0699 2.30469 17.0697L2.30469 17.0691L2.30469 17.0677L2.30471 17.0639L2.30481 17.0525C2.30493 17.0432 2.30514 17.0306 2.30553 17.0148C2.30631 16.9833 2.30782 16.9391 2.31072 16.8839C2.31653 16.7735 2.32797 16.618 2.35052 16.4301C2.3954 16.0559 2.48542 15.5433 2.66776 14.9958C3.0287 13.9119 3.78989 12.5903 5.37891 12.0559C5.70608 11.9459 6.0605 12.1219 6.17053 12.4491ZM2.92969 17.0702H2.30469C2.30469 17.4154 2.58451 17.6952 2.92969 17.6952V17.0702Z"
                  fill="#A259FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5462 3.454C15.8207 3.34937 14.035 3.30996 12.2075 5.13747L7.34476 10.0002L9.99994 12.6554L14.8627 7.79265C16.6902 5.96514 16.6508 4.17945 16.5462 3.454ZM16.7274 2.21721C15.7297 2.07276 13.5057 2.07151 11.3236 4.25359L6.01893 9.55827C5.90172 9.67548 5.83588 9.83446 5.83588 10.0002C5.83588 10.166 5.90172 10.3249 6.01893 10.4422L9.558 13.9812C9.80208 14.2253 10.1978 14.2253 10.4419 13.9812L15.7466 8.67653C17.9286 6.49445 17.9274 4.27046 17.7829 3.27276C17.7464 3.00574 17.6234 2.75797 17.4328 2.56734C17.2422 2.37671 16.9944 2.25376 16.7274 2.21721Z"
                  fill="#A259FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4219 8.49243C14.7671 8.49243 15.0469 8.77225 15.0469 9.11743V14.1643L15.0468 14.1732C15.0421 14.5015 14.9085 14.8147 14.6749 15.0452L12.1526 17.5753C11.9925 17.7352 11.792 17.8486 11.5724 17.9035C11.3529 17.9584 11.1225 17.9527 10.906 17.8869C10.6895 17.8212 10.4948 17.6978 10.3429 17.5301C10.1911 17.3625 10.0875 17.1569 10.0433 16.9351C10.0433 16.935 10.0434 16.9353 10.0433 16.9351L9.38719 13.6622C9.31934 13.3237 9.5387 12.9944 9.87714 12.9265C10.2156 12.8587 10.545 13.078 10.6128 13.4165L11.2692 16.6909L13.7969 14.1554V9.11743C13.7969 8.77225 14.0767 8.49243 14.4219 8.49243Z"
                  fill="#A259FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.82698 4.95307L5.83588 4.953H10.8828C11.2279 4.953 11.5078 5.23282 11.5078 5.578C11.5078 5.92318 11.2279 6.203 10.8828 6.203H5.84472L5.83967 6.20816L5.83964 6.20813L3.30933 8.73063L3.3103 8.73082L6.58373 9.38707C6.92218 9.45492 7.14154 9.78429 7.07369 10.1227C7.00584 10.4612 6.67647 10.6805 6.33803 10.6127L3.06556 9.95663C3.06537 9.95659 3.06518 9.95655 3.065 9.95652C2.84325 9.91232 2.63764 9.8088 2.47006 9.65699C2.30235 9.50504 2.17903 9.31042 2.11327 9.09387C2.04751 8.87733 2.04176 8.647 2.09665 8.42745C2.15154 8.2079 2.265 8.00737 2.42493 7.84725L2.42587 7.84631L2.42587 7.84632L4.95498 5.32502C5.18549 5.09139 5.49869 4.95774 5.82698 4.95307Z"
                  fill="#A259FF"
                />
              </svg>
              <span className="items-center text-[16px] font-[600] leading-3">
                Explore More
              </span>
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-35 justify-center items-center mt-[20px]">
          {SellingData.map((item, key) => (
            <div
              key={key}
              className="bg-[#3B3B3B] relative p-[10px] rounded-[20px] w-full h-full min-w-[250px] min-h-[250px] flex justify-center items-center"
            >
              <Image
                className="absolute top-20 left-30"
                src={item.number}
                alt={item.price}
              />
              <div className="flex flex-col  p-20 items-center gap-20">
                <Image
                  src={item.url}
                  alt={item.title}
                  width={120}
                  height={120}
                />
                <div className="flex flex-col justify-center items-center">
                  <span className="text-[22px] font-[600]">{item.title}</span>
                  <div className="flex flex-row gap-10">
                    <span className="text-[16px] font-[400] text-[#858584]">
                      From:
                    </span>
                    <span>{item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
