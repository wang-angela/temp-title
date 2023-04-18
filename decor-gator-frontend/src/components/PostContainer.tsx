import './PostContainer.css'

type PostContainerProps = {
    id: any
    title: string
    furnitureType: string
    posterUsername: string
    price: string
    imageURL: string
    description: string
}

export default function PostContainer(props: PostContainerProps) {
    return (
        <div className = 'container'>  
            <div className='post-header'>
                <label className='title-label'>
                    {props.title}
                </label>
            </div>
            <div className='post-display'>
                <img className='post-image' src={props.imageURL} alt={props.title}></img>
            </div>
            <div className='post-footer'>
                <label className='price-label'>
                    {props.price}
                </label>
                <label className='category-label'>
                    {props.furnitureType}
                </label>
            </div>
        </div>
    )
}