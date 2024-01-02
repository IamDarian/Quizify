export default function Suggetion(props) {
  return (
    <>
      <a className="cursor-pointer">
        <div className="card card-compact bg-base-100 shadow-xl overflow-hidden w-[300px]">
          <div className="img_hover self-center h-52 w-full overflow-hidden">
            <img src={props.img} alt="quiz preview" />
          </div>
          <div className="card-body">
            <div className="card-body items-start h-32">
              <p>{props.tag}</p>
              <h3 className="font-semibold text-xl">{props.title}</h3>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
