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
      className={`flex max-w-full flex-1 flex-col items-center justify-start gap-5 divide-y divide-neutral-black-1 rounded-3xl bg-neutral-white p-4 text-left text-neutral-black-4 ${className}`}
    >
      <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
        <div className="flex w-48 flex-row items-center justify-start gap-[16px]">
          <div className="box-border flex h-8 w-8 shrink-0 flex-row items-center justify-start overflow-hidden rounded-3xl bg-neutral-black-1 px-[11px] pb-[11.1px] pt-[11.2px]">
            <GoArrowDownLeft className="relative h-[9.7px] w-[9.7px] object-contain" />
          </div>
          <b className="relative flex-1 leading-[140%] tracking-[-0.02em]">
            Buy
          </b>
        </div>
        <button className="box-border flex w-[159px] cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded-13xl border-[2px] border-solid border-darkslategray bg-lympha-primary px-[22px] py-1.5 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] hover:box-border hover:border-[2px] hover:border-solid hover:border-teal hover:bg-darkcyan-100">
          <b className="font-body-large-bold relative inline-block min-w-[111px] text-left text-sm leading-[130%] tracking-[-0.02em] text-neutral-white">
            New Buy Order
          </b>
        </button>
      </div>

      <div className="box-border flex max-w-full flex-row items-end justify-between gap-5 self-stretch px-2 pt-4 text-sm">
        <div className="flex w-full flex-col gap-5 py-1.5">
          <div className="grid min-w-[75px] flex-1 grid-cols-4 items-center justify-between gap-8">
            <b className="relative self-stretch leading-5 tracking-[-0.02em]">
              Price
            </b>
            <b className="relative self-stretch leading-[20px] tracking-[-0.02em]">
              Quantity
            </b>
            <b className="relative self-stretch leading-[20px] tracking-[-0.02em]">
              Total
            </b>

            <div className="relative shrink-0 leading-[20px] tracking-[-0.02em]"></div>
          </div>

          <div className="flex flex-col gap-y-3">
            {orderData.map((order, index) => (
              <div
                key={index}
                className="justify-justify-between grid min-w-[75px] flex-1 grid-cols-4 items-center gap-8 text-left"
              >
                <div className="relative self-stretch leading-[20px] tracking-[-0.02em]">
                  75,890.91
                </div>
                <div className="relative self-stretch leading-[20px] tracking-[-0.02em]">
                  75,890.91
                </div>

                <div className="relative self-stretch leading-[20px] tracking-[-0.02em]">
                  75,890.91
                </div>
                <button className="flex cursor-pointer flex-row items-center justify-center self-stretch rounded-2xl border border-neutral-black-2 bg-neutral-white px-5 py-1 hover:box-border hover:border hover:border-transparent hover:bg-lympha-disabled">
                  <b className="text-3xs font-body-large-bold relative inline-block min-w-[18px] text-left leading-[130%] text-lympha-primary">
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
