import { BiSolidPencil } from 'react-icons/Bi';
import { MdDelete } from 'react-icons/Md';


function PortfolioEntries({ id, stock_name, stock_code, buy_info, updated_at }) {

    const formattedDate = new Date(updated_at).toLocaleDateString({}, {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"});
    const buyInfos = JSON.parse(buy_info);
    let price = 0, quantity = 0;
    const averagePrice = buyInfos.map((buyInfos) => {
        price += parseInt(buyInfos.buy_price);
        quantity += parseInt(buyInfos.buy_quantity);
        return price/quantity;
    });

    return (
        <div className="flex justify-between gap-5 h-[55px] border rounded-md items-center px-5 bg-zinc-100 shadow-[0_4px_3px_rgba(0,0,0,0.25)]">
            <div className="flex justify-between w-4/6">
                <div className="flex">
                    <p className="font-black">{stock_name}</p>
                    <p className="text-zinc-400 text-xs pl-1 pt-[4px]">{stock_code}</p>
                </div>
                <p>Average Price: ${averagePrice}</p>
                <p>Last Activity: {formattedDate}</p>
            </div>
            <div className="flex pt-1 text-2xl">
                <div className="px-4 text-zinc-500">
                    <a href={`/edit/${id}`}><BiSolidPencil /></a>
                </div>
                <div className="text-red-500">
                    <a href={`/delete/${id}`}><MdDelete /></a>
                </div>
            </div>
        </div>
    );
}

export default PortfolioEntries;