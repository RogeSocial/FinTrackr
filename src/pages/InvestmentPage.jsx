import "../styling/Investments.css"

function Investments() {
    return (
        <div className="investments-container">
        <section className="investment-section">
            <h1>Investment</h1>
            <div className="invest-category">
                <div className="invest-card">
                    <h3>Stocks</h3>
                    <p>Current value: 5000 SEK</p>
                    <button className="edit-invest-btn">Edit</button>
                    <button className="delete-invest-btn">Delete</button>
                </div>
                <div className="invest-card">
                    <h3>Bonds</h3>
                    <p>Current value: 10000 SEK</p>
                    <button className="edit-invest-btn">Edit</button>
                    <button className="delete-invest-btn">Delete</button>
                </div>
                <div className="invest-card">
                    <h3>Properties</h3>
                    <p>Current value: 100000 SEK</p>
                    <button className="edit-invest-btn">Edit</button>
                    <button className="delete-invest-btn">Delete</button>
                </div>
            </div>
        </section>
        {/* Test */}
        <section className="recent-investments">
            <h2>Recent Investments</h2>
            <div className="recent-invest-container">
                <div className="recent-invest-card">
                    <h3>Stocks</h3>
                    <p>Amount: 100 SEK</p>
                    <p>Date: 2021-10-10</p>
                </div>
                <div className="recent-invest-card">
                    <h3>Bonds</h3>
                    <p>Amount: 1000 SEK</p>
                    <p>Date: 2021-10-10</p>
                </div>
                <div className="recent-invest-card">
                    <h3>Properties</h3>
                    <p>Amount: 10000 SEK</p>
                    <p>Date: 2021-10-10</p>
                </div>
            </div>
        </section>

        <section className="add-investment">
            <h2>Add Investment</h2>
            <div className="investment-form">
                <select>
                    <option value="">Select investment type</option>
                    <option value="Stocks">Stocks</option>
                    <option value="Bonds">Bonds</option>
                    <option value="Properties">Properties</option>
                </select>
                <input type="number" placeholder="Amount (SEK)" />
                <input type="date" />
                <button>Add</button>
            </div>
        </section>

        <section className="investment-calculator">
            <h2>Investment Calculator</h2>
            <div className="calculator-form">
                <input type="number" placeholder="Initial investment" />
                <input type="number" placeholder="Monthly contribution" />
                <input type="number" placeholder="Interest rate" />
                <input type="number" placeholder="Years" />
                <input type="number" placeholder="Future value" />
                <button>Calculate</button>
            </div>
        </section>    
        </div>
    );
}

export default Investments;