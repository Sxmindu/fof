export const metadata = {
    alternates: {
        canonical: '/faq',
    },
    title: "FAQ",
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