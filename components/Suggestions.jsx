import Suggetion from "./Suggestion";

export default function Suggestions() {
  return (
    <section className="flex flex-col justify-between min-w-full text-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
        <path
          fill="rgb(252 165 165)"
          fillOpacity="1"
          d="M0,224L1440,192L1440,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-red-300 py-1">
        <h2>
          Here Are Some Of Our <br />
          <span className="text-green-700 active">Quizzes</span>
        </h2>
      </div>
      <div className="bg-red-300 flex flex-wrap justify-center gap-14 text-center py-24">
        <Suggetion
          title="Title 1"
          tag="Description 1"
          img="https://picsum.photos/400"
        />
        <Suggetion
          title="Title 2"
          tag="Description 2"
          img="https://picsum.photos/400"
        />
        <Suggetion
          title="Title 3"
          tag="Description 3"
          img="https://picsum.photos/400"
        />
      </div>
      <div className="bg-red-300 flex justify-center gap-32">
        <div className="flex flex-col justify-center">
          <h2 className="text-violet-700">Test 1</h2>
          <p>Subtitle 1</p>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-yellow-700">Test 2</h2>
          <p>Subtitle 2</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
        <path
          fill="rgb(252 165 165)"
          fillOpacity="1"
          d="M0,192L1440,96L1440,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}
