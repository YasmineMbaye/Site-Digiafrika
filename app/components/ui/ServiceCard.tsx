export default function Card({text}:{text:ServiceProps}) {
  return <div className="w-80 h-50 bg-blue-900 rounded-xl p-4 ">
    <div className="mb-7">{text.title}</div>
    <div className="">{text.description}</div>
  
  </div>;
}
