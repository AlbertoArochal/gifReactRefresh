
export const GifGridItem = ({title, url, id}) => {
    return (
        <>
            <img src={url} alt={title} key={id} />
        </>
    )
}