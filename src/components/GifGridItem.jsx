
export const GifGridItem = ({title, url, id}) => {
    return (
        <div className="card">
            <img src={url} alt={title} key={id} />
            <p>{title}</p>
        </div>
    )
}