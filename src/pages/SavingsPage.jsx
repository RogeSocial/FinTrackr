function Savings() {
    return(
        <div className="dashboard-container">
            <h1>Savings</h1>

            {/* Savings goals */}
            <section className="dashboard-section">
                <h2>Saving Goals</h2>
                <button className="add-goal-btn">Add new goal</button>
                <div className="goal-container">
                    <div className="goal-card">
                        <h3>Vacation Fund</h3>
                        <p>Goal amount: 1000 SEK</p>
                        <p>Current amount: 500 SEK</p>
                        <p>Progress: 50%</p>
                        <button className="edit-goal-btn">Edit</button>
                        <button className="delete-goal-btn">Delete</button>
                    </div>
                    <div className="goal-card">
                        <h3>Emergency Fund</h3>
                        <p>Goal amount: 500 SEK</p>
                        <p>Current amount: 200 SEK</p>
                        <p>Progress: 40%</p>
                        <button className="edit-goal-btn">Edit</button>
                        <button className="delete-goal-btn">Delete</button>
                    </div>
                </div>
            </section>

            {/* Savings Contribution */}
            <section className="dashboard-section">
                <h2>Savings Contribution</h2>
                <button className="add-contribution-btn">Add new contribution</button>
                <div className="contribution-container">
                    <div className="contribution-card">
                        <h3>Vacation Fund</h3>
                        <p>Amount: 200 SEK</p>
                        <p>Date: 2021-09-01</p>
                        <button className="edit-contribution-btn">Edit</button>
                        <button className="delete-contribution-btn">Delete</button>
                    </div>
                    <div className="contribution-card">
                        <h3>Emergency Fund</h3>
                        <p>Amount: 100 SEK</p>
                        <p>Date: 2021-09-01</p>
                        <button className="edit-contribution-btn">Edit</button>
                        <button className="delete-contribution-btn">Delete</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Savings;