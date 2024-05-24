export const metadata = {
    alternates: {
        canonical: '/photography-services',
    },
    title: "Photography Services",
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