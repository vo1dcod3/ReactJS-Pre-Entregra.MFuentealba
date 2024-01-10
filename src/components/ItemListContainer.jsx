

const ItemListContainer = ({ greeting }) => {

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-info p-2" role="alert">
                        <h3 className="display-3">{greeting}</h3>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ItemListContainer