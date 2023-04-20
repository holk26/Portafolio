import Layout from "../componenst/Layout";

const _error = ({statusCode}) => {
    return(
        <Layout>
            {
                statusCode ? (
                    <p className="text-center">Could not load your page: Status Code {statusCode}</p>
                ):(
                    <p className="text-center">Cound not get this page</p>
                )
            }
            
        </Layout>
    )
}

export default _error;