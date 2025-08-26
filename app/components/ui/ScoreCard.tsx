export function ScoreCard({ score }: { score: ScoreProps }) {
  return (
    <div className=" bg-white w-80 shadow-xl flex justify-center items-center rounded-xl  py-6">
      <div className="">
        <div className="text-4xl text-center mb-4 font-bold text-blue-900">
          {score.chiffre}
        </div>
        <div className="text-gray-600">{score.description}</div>
      </div>
    </div>
  );
}
