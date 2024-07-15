import { FunctionComponent } from "react";
import { GoArrowDownLeft } from "react-icons/go";

export type BuyOrdersType = {
  className?: string;
  orderIcons?: string;
  buyOrders?: string;
  signUp?: string;
};

const BuyOrders: FunctionComponent<BuyOrdersType> = ({ className = "" }) => {
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
        <div className="flex flex-row items-center justify-start gap-3">
          <div className="size-10 rounded-3xl bg-neutral-black-1 overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <GoArrowDownLeft className="size-5 relative " />
          </div>
          <b className="flex-1 relative tracking-tight text-lg ">Buy Orders</b>
        </div>
        <button className="cursor-pointer py-1.5 px-6 bg-lympha-primary uppercase shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] rounded-full transition-all duration-300 ease-in-out flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkcyan-100">
          <b className="relative text-sm tracking-tight text-neutral-white text-left min-w-24">
            New Buy Order
          </b>
        </button>
      </div>

      <div className="self-stretch flex flex-row items-end justify-between pt-4 px-2 box-border max-w-full gap-5 text-sm ">
        <div className="w-full flex flex-col py-1.5 gap-5">
          <div className="flex-1 grid grid-cols-4 items-center justify-between gap-8 min-w-[75px]">
            <b className="tracking-tight leading-5">Price</b>
            <b className="tracking-tight leading-5 text-center">Quantity</b>
            <b className="tracking-tight leading-5 text-right">Total</b>
            <div className=" relative tracking-[-0.02em] leading-[20px] shrink-0"></div>
          </div>

          <div className="flex flex-col gap-y-3">
            {orderData.map((order, index) => (
              <div
                key={index}
                className="flex-1 grid grid-cols-4 items-center gap-8 font-normal text-left"
              >
                <div className="text-left tracking-tight leading-5">
                  {order.price}
                </div>
                <div className="tracking-tight leading-5 text-center">
                  {order.quantity}
                </div>

                <div className="tracking-tight leading-5 text-right ">
                  {order.total}
                </div>
                <div className="flex items-center justify-end">
                  <button className="cursor-pointer w-max px-5 py-1.5 bg-neutral-white rounded-2xl flex flex-row items-center justify-end border border-neutral-black-2 hover:bg-lympha-disabled hover:box-border hover:border hover:border-transparent">
                    <b className="relative text-xs  text-lympha-primary">Buy</b>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOrders;
