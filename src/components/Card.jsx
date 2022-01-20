
const Card = ({item}) => {
    let badgeText
    if (item.openSpots === 0) {
        badgeText = 'sold out'
    } else if (item.location == "Online") {
        badgeText = 'online'
    }

    return (
        <div className="card">
            <div className="card--image-container">
                <img src={require(`../img/${item.coverImg}`) } alt="image" className="card--image" />
                {badgeText && <div className="card--badge">{badgeText}</div>}
            </div>
            <div className="card--stats">
                <i className="fas fa-star card--star"></i>
                <span className="card--rating">{item.stats.rating}</span>
                <span className='card--likes gray'>({item.stats.reviewCount})</span>
                <span className='card--country gray'>{item.country}</span>
            </div>
            <p className="card--title">{item.title}</p>
            <p className="card--price"><span className="bold">From ${item.price}</span>/person</p>
        </div>
    )
}

export default Card