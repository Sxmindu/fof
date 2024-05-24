export const metadata = {
    alternates: {
        canonical: '/contact',
    },
    title: "Contact us",
    openGraph: {
        url: 'https://fof.london/',
        images: [
            {
                url: 'https://fof.london/',
            }
        ]
    },
}

const layout = (props) => {

    const {children} = props;

    return (

        <>
            {children}
        </>
    )


}

export default layout;