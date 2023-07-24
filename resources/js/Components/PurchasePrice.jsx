function PurchasePrice({ buy_price, buy_quantity, onPriceChange, onQuantityChange }) {
    return (
        <div className="flex justify-between mb-3">
            <input type="number" value={buy_price ? buy_price : ""} onChange={onPriceChange} name="buy_price[]" placeholder="Price" className="rounded-lg w-[150px]"></input>
            <input type="number" value={buy_quantity ? buy_quantity : ""} onChange={onQuantityChange} name="buy_quantity[]" placeholder="Quantity" className="rounded-lg w-[150px]"></input>
        </div>
    );
}

export default PurchasePrice;