type Props = {
  title: String,
  description: String
}

function Card({ title, description }: Props) {
  return (
    <div>
      <div className="border-l-primary border-l-4 border-solid py-1 px-3">
        <h4 className="text-2xl md:text-3xl">{title}</h4>
      </div>
      <div className="px-3 my-2">
        <p className="py-3">{description}</p>
        <a href="#" className="bg-primary text-white rounded-lg text-sm px-2 py-1">Read more</a>
      </div>
    </div>
  )
}

export default Card