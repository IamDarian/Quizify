import Suggetion from "./Suggestion";

export default function Suggestions() {
  return (
    <section className="flex flex-col justify-between min-w-full text-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill="#3498db"
          fillOpacity="1"
          d="M0,160L60,160C120,160,240,160,360,149.3C480,139,600,117,720,133.3C840,149,960,203,1080,224C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="background_blue py-1">
        <h2>
          Most Played
          <br />
          <span className="text-red-600 active">Quizzes</span>
        </h2>
      </div>
      <div className="background_blue flex flex-wrap justify-center gap-14 text-center py-16">
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
      <div className="background_blue flex justify-center gap-32">
        <div className="flex flex-col justify-center">
          <h2 className="text-violet-800">100+</h2>
          <p>Quizzes</p>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-yellow-400">FREE</h2>
          <p>To create and explore</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3498db"
          fillOpacity="1"
          d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,128C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}
