function Card(title, subTitle, description, img) {
    return (
        <div>
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
            <p>{description}</p>
            <img src={img}/>
            <button>Adopt</button>
        </div>
    )
}

export default Card