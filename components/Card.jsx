import Image from "next/image";
import quote from "@/public/quote.svg";

export default function Card(props) {
  return (
    <div className="card card_hover bg-base-100 shadow-xl w-96 h-[300px]">
      <div className="card-body items-start">
        <Image src={quote} width={30} alt="quotation marks" />
        <p className="text-justify h-[100px] italic">{props.description}</p>
        <div className="flex items-center gap-5 mt-5">
          <div className="avatar w-14 h-14">
            <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={props.img} />
            </div>
          </div>
          <div className="flex flex-col px-5">
            <div>
              <p className="font-semibold font-sans text-lg tracking-wide">
                {props.name}
              </p>
            </div>
            <div>
              <p className="text-sm pt-1">{props.profession}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
