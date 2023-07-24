import Sidebar from '../Components/Sidebar';
import PurchasePrice from '@/Components/PurchasePrice';
import { useState } from 'react';

function AddForm({ id, stock }) {

    const newStock = {
        "stock_name" : "",
        "stock_code" : "",
        "buy_info" : "[{}]",
    }
    const sInfo = stock ? stock : newStock;
    // sInfo.buy_info = JSON.parse(sInfo.buy_info);
    // console.log(sInfo);
    
    const [stockInfo, setStockInfo] = useState(() => {
        return sInfo;
    });

    const onStockNameChange = (e) => {
        setStockInfo(stockInfo => ({
            ...stockInfo, 
            stock_name: e.target.value
        }))
    }

    const onStockCodeChange = (e) => {
        setStockInfo(stockInfo => ({
            ...stockInfo, 
            stock_code: e.target.value
        }))
    }

    const onStockPriceChange = (index, e) => {
        const buyInfo = JSON.parse(stockInfo.buy_info);
        buyInfo[index].buy_price = e.target.value;

        setStockInfo(stockInfo => ({
            ...stockInfo, 
            buy_info: JSON.stringify(buyInfo)
        }))
    }

    const onStockQuantityChange = (index, e) => {
        const buyInfo = JSON.parse(stockInfo.buy_info);
        buyInfo[index].buy_quantity = e.target.value;

        setStockInfo(stockInfo => ({
            ...stockInfo, 
            buy_info: JSON.stringify(buyInfo)
        }))
    }

    const handleAddPurchasePrice = () => {
        const addBuyInfo = JSON.parse(stockInfo.buy_info);
        addBuyInfo.push({});

        setStockInfo(stockInfo => ({
            ...stockInfo, 
            buy_info: JSON.stringify(addBuyInfo)
        }))
    }

    return (
        <div>
            <div className="flex h-screen">
                <Sidebar className="drop-shadow-2xl" />
                <form action={id ? `/update/${id}` : "/addEntries"} method="post" className="m-10 w-full">
                    <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').content} />
                    <div className="flex flex-col h-full">
                        <p className="font-bold text-3xl">Add Portfolio</p>
                        <div className="flex gap-20 my-10 w-4/5">
                            <div className="flex flex-col w-[352px] h-[74px]">
                                <label>Stock Name</label>
                                <input type="text" value={stockInfo.stock_name} onChange={onStockNameChange} name="stock_name" className="rounded-lg border-slate-600"></input>
                            </div>
                            <div className="flex flex-col w-[352px]">
                                <label>Stock Code</label>
                                <input type="text" value={stockInfo.stock_code} onChange={onStockCodeChange} name="stock_code" className="rounded-lg"></input>
                            </div>
                        </div>
                        <div className="flex flex-col w-[350px] h-full">
                            <label>Purchase Details</label>
                            {JSON.parse(stockInfo.buy_info).map((buyInfo, index) => (
                                <PurchasePrice {...buyInfo} onPriceChange={(e) => onStockPriceChange(index, e)} 
                                onQuantityChange={(e) => onStockQuantityChange(index, e)} />
                            ))}
                            <button type="button" onClick={handleAddPurchasePrice} className="border border-blue-500 rounded-lg text-blue-500 h-9">Add</button>
                        </div>
                        <div>
                            <button type="submit" className="border-0 rounded text-white bg-blue-600 w-20 h-9">{window.location.href.includes("/edit") ? "Update" : "Create"}</button>
                        </div>
                    </div>
                </form> 
            </div>
        </div>
    );
}

export default AddForm;