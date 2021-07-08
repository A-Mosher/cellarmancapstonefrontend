import './updateProducts.css';

function UpdateProducts(props) {
    const {
        product,
        onChange,
        handleSubmit,
        close
    } = props;

    return (
        <div className='updateProducts'>
            <form onSubmit={handleSubmit}>
                <label className="updateLabel">
                    Gravity:
                    <input type="text" name="gravity" value={product.gravity} onChange={onChange} />
                </label>
                <label className="updateLabel">
                    Temperature:
                    <input type="text" name="temperature" value={product.temperature} onChange={onChange} />
                </label>
                <label className="updateLabel">
                    pH:
                    <input type="text" name="pH" value={product.pH} onChange={onChange} />
                </label>
                <label className="updateLabel">
                    Notes:
                    <input type="text" name="notes" value={product.notes} onChange={onChange} />
                </label>
                <label className="updateLabel">
                    Additions:
                    <input type="text" name="additions" value={product.additions} onChange={onChange} />
                </label>
                <label className="updateLabel">
                    Fermentation status:
                    <input type="text" name="fermStatus" value={product.fermStatus} onChange={onChange} />
                </label>
                <label className="updateLabel">
                    Package status:
                    <input type="radio" name="packageStatus" value={product.packageStatus} onChange={onChange} checked/> Unpackaged
                    <input type="radio" name="packageStatus" value={product.packageStatus} onChange={onChange}/>Packaged
                </label>
                <input type="submit" value="Submit" />
                <button onClick={close}>Close</button>
            </form>
        </div>
    );
}

export default UpdateProducts;