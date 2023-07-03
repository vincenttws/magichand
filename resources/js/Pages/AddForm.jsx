import '../../css/landing.css';

function AddForm() {
    return (
        <div className="container">
            <form action="/addEntries" method="post" className="m-10">
                <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').content} />
                <p className="font-bold text-3xl">Add Portfolio</p>
                <div className="flex flex-row justify-between my-10">
                    <div className="flex flex-col " style={{ width: "352px", height: "74px"  }}>
                        <label>Stock Name</label>
                        <input type="text" name="stock_name" className="rounded-lg border-slate-600"></input>
                    </div>
                    <div className="flex flex-col" style={{ width: "352px" }}>
                        <label>Stock Code</label>
                        <input type="text" name="stock_code" className="rounded-lg"></input>
                    </div>
                </div>
                <div className="flex flex-col max-w-xl">
                    <label>Purchase Details</label>
                    <div className="flex justify-between mb-3">
                        <input type="number" name="buy_price" placeholder="Price" className="rounded-lg"></input>
                        <input type="number" name="buy_quantity" placeholder="Quantity" className="rounded-lg"></input>
                        <input type="date" name="buy_date" placeholder="Date" className="rounded-lg"></input>
                    </div>
                    <button type="submit" className="border border-blue-500 rounded-lg text-blue-500 h-9">Add</button>
                </div>
                
                <div>
                    <button className="border-0 rounded text-white bg-blue-600 w-20 h-9">Create</button>
                </div>
            </form> 
        </div>
    );
}

export default AddForm;