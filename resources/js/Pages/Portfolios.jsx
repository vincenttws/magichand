import Sidebar from '../Components/Sidebar';
import PortfolioEntries from '@/Components/PortfolioEntries';

function Portfolios({ stocks }) {

    

    return (
        <div>
            <div className="flex h-screen">
                <Sidebar className="drop-shadow-2xl" />
                <div className="m-10 w-9/12">
                    <div className="flex justify-between mb-[50px]">
                        <p className="font-black text-3xl">Manage Portfolios</p>
                        <a href="/add"><button className="border-0 rounded text-white bg-blue-600 w-[50px] h-9">Add</button></a>
                    </div>
                    <ul>
                        {
                            stocks.map(stock => (
                                <li>
                                    <PortfolioEntries {...stock} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default Portfolios;