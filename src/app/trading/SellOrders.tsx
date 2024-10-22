import { FunctionComponent } from "react";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";

interface Order {
  _id: string;
  email: string;
  type: string;
  price: number;
  amount: number;
}

type Props = {
  email: string | null | undefined;
  sellOrders: Order[];
  onReleaseOrder: (id: string) => void;
};

const SellOrders = (props: Props) => {

  return (
    <div
      className={`flex max-w-full flex-1 flex-col items-center justify-start gap-5 divide-y divide-neutral-black-1 rounded-3xl bg-neutral-white p-4 text-left text-neutral-black-4`}
    >
      <div className="mq450:flex-wrap flex flex-row items-center justify-between gap-[20px] self-stretch">
        <div className="flex flex-row items-center justify-start gap-3">
          <div className="flex size-10 shrink-0 flex-row items-center justify-center overflow-hidden rounded-3xl bg-neutral-black-1">
            <GoArrowUpRight className="relative size-5" />
          </div>
          <b className="relative flex-1 text-lg tracking-tight">Sell Orders</b>
        </div>
        {/* <button className="flex cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded-full bg-state-error px-6 py-1.5 uppercase shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16)] transition-all duration-300 ease-in-out hover:bg-darkcyan-100">
          <b className="relative min-w-24 text-left text-sm tracking-tight text-neutral-white">
            New Sell Order
          </b>
        </button> */}
      </div>

      <div className="box-border flex max-w-full flex-row items-end justify-between gap-5 self-stretch px-2 pt-4 text-sm">
        <div className="flex w-full flex-col gap-5 py-1.5">
          <div className="grid min-w-[75px] flex-1 grid-cols-4 items-center justify-between gap-8">
            <b className="leading-5 tracking-tight">Price</b>
            <b className="text-center leading-5 tracking-tight">Quantity</b>
            <b className="text-right leading-5 tracking-tight">Total</b>
            <div className="relative shrink-0 leading-[20px] tracking-[-0.02em]"></div>
          </div>

          <div className="min-h-[196px] flex flex-col gap-y-3">
            {props.sellOrders.map((order, index) => (
              <div
                key={index}
                className="grid flex-1 grid-cols-4 items-center gap-8 text-left font-normal"
              >
                <div className="text-left leading-5 tracking-tight">
                  {order.price}
                </div>
                <div className="text-center leading-5 tracking-tight">
                  {order.amount}
                </div>
                <div className="text-right leading-5 tracking-tight">
                  {order.price * order.amount}
                </div>
                <div className="flex items-center justify-end">
                  <button disabled={order.email == props.email} onClick={(e) => { props.onReleaseOrder(order._id); }} className="flex w-max cursor-pointer flex-row items-center justify-end rounded-2xl border border-neutral-black-2 bg-neutral-white px-5 py-1.5 hover:box-border hover:border hover:border-transparent hover:bg-lympha-disabled">
                    <b className="relative text-xs text-state-error">{order.email == props.email ? "---" : "Sell"}</b>
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

export default SellOrders;
