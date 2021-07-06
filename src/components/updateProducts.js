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
                <label>
                    Gravity:
                    <input type="text" name="gravity" value={product.gravity} onChange={onChange} />
                </label>
                <label>
                    Temperature:
                    <input type="text" name="temperature" value={product.temperature} onChange={onChange} />
                </label>
                <label>
                    pH:
                    <input type="text" name="pH" value={product.pH} onChange={onChange} />
                </label>
                <label>
                    Notes:
                    <input type="text" name="notes" value={product.notes} onChange={onChange} />
                </label>
                <label>
                    Additions:
                    <input type="text" name="additions" value={product.additions} onChange={onChange} />
                </label>
                <label>
                    Fermentation status:
                    <input type="text" name="fermStatus" value={product.fermStatus} onChange={onChange} />
                </label>
                
                <p>Package status: {product.packageStatus}</p>

                <input type="submit" value="Submit" />
                <button onClick={close}>Close</button>
            </form>
        </div>
    );
}

export default UpdateProducts;