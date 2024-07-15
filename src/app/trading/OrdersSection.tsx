import { FunctionComponent } from "react";
import { GoArrowDownLeft } from "react-icons/go";

export type OrdersSectionType = {
  className?: string;
  orderIcons?: string;
  buyOrders?: string;
  signUp?: string;
};

const OrdersSection: FunctionComponent<OrdersSectionType> = ({
  className = "",
}) => {
  const orderData = [
    {
      id: "1",
      price: "75,890.91",
      quantity: "10",
      total: "75,890.91",
    },
    {
      id: "2",
      price: "75,890.93",
      quantity: "18",
      total: "75,890.91",
    },
    {
      id: "3",
      price: "75,890.97",
      quantity: "19",
      total: "75,890.91",
    },
    {
      id: "4",
      price: "75,891.23",
      quantity: "12",
      total: "75,890.91",
    },
  ];

  return (
    <div
      className={`flex-1 rounded-3xl bg-neutral-white flex flex-col items-center justify-start p-4  gap-5 max-w-full text-left  text-neutral-black-4 divide-y divide-neutral-black-1 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
        <div className="w-48 flex flex-row items-center justify-start gap-[16px]">
          <div className="h-8 w-8 rounded-3xl bg-neutral-black-1 overflow-hidden shrink-0 flex flex-row items-center justify-start pt-[11.2px] px-[11px] pb-[11.1px] box-border">
            <GoArrowDownLeft className="h-[9.7px] w-[9.7px] relative object-contain" />
          </div>
          <b className="flex-1 relative tracking-[-0.02em] leading-[140%]">
            Buy
          </b>
        </div>
        <button className="cursor-pointer py-1.5 px-[22px] bg-lympha-primary w-[159px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-13xl box-border flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-darkslategray hover:bg-darkcyan-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-teal">
          <b className="relative text-sm tracking-[-0.02em] leading-[130%] inline-block font-body-large-bold text-neutral-white text-left min-w-[111px]">
            New Buy Order
          </b>
        </button>
      </div>

      <div className="self-stretch flex flex-row items-end justify-between pt-4 px-2 box-border max-w-full gap-5 text-sm ">
        <div className="w-full flex flex-col py-1.5 gap-5">
          <div className="flex-1 grid grid-cols-4 items-center justify-between gap-8 min-w-[75px]">
            <b className="self-stretch relative tracking-[-0.02em] leading-5">
              Price
            </b>
            <b className="self-stretch relative tracking-[-0.02em] leading-[20px]">
              Quantity
            </b>
            <b className="self-stretch relative tracking-[-0.02em] leading-[20px]">
              Total
            </b>

            <div className=" relative tracking-[-0.02em] leading-[20px] shrink-0"></div>
          </div>

          <div className="flex flex-col gap-y-3">
            {orderData.map((order, index) => (
              <div
                key={index}
                className="flex-1 grid grid-cols-4 items-center justify-justify-between gap-8 min-w-[75px] text-left"
              >
                <div className="self-stretch relative tracking-[-0.02em] leading-[20px]">
                  75,890.91
                </div>
                <div className="self-stretch relative tracking-[-0.02em] leading-[20px]">
                  75,890.91
                </div>

                <div className="self-stretch relative tracking-[-0.02em] leading-[20px]">
                  75,890.91
                </div>
                <button className="cursor-pointer px-5 py-1 bg-neutral-white self-stretch rounded-2xl flex flex-row items-center justify-center border border-neutral-black-2 hover:bg-lympha-disabled hover:box-border hover:border hover:border-transparent">
                  <b className="relative text-3xs leading-[130%] inline-block font-body-large-bold text-lympha-primary text-left min-w-[18px]">
                    Buy
                  </b>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersSection;
