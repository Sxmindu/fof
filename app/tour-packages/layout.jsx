export const metadata = {
    alternates: {
        canonical: '/tour-packages',
    },
    title: "Tour Packages",
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