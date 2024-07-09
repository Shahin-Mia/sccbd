type Props = {}

const SliderCard = (props: Props) => {
    return (
        <div className="max-w-96 bg-white rounded-lg shadow p-3 mx-2">
            <div>
                <img src="/images/Study-in-Australia-1.jpg" alt="" className="rounded-lg" />
            </div>
            <div>
                <h3 className="text-primary text-2xl font-bold mt-1 mb-3">Study in Australia</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas nihil molestiae facilis explicabo accusamus? Aspernatur deleniti blanditiis, molestiae totam praesentium ipsum iste numquam tenetur cupiditate, consequuntur repellendus deserunt tempore!</p>
                <div className="flex justify-center">
                    <a href="#" className="text-xs bg-primary text-white px-4 py-1 inline-block rounded-full mt-2 text-center">See More</a>
                </div>
            </div>
        </div>
    )
}

export default SliderCard