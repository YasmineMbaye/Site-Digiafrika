export default function PartenaireCard({ textcontent, soustitle, describtion}:{ textcontent:string, soustitle:string, describtion:string}) {
  return (
    <div className="bg-white mx-40 rounded-xl p-6">
      <div className="text-gray-600 mb-6">
        <em>
         {textcontent}
        </em>
      </div>
      <div>
        <div className="text-blue-900 font-bold ">
          {soustitle}
        </div>
        <div className="text-gray-600">{describtion}</div>
      </div>
    </div>
  );
}
