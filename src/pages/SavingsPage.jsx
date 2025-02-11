import { useState } from "react";
import "../styling/Savings.css";

function Savings() {

    const [contributions, setContributions] = useState([
        { id: 1, fund: "Vacation Fund", amount: 200 },
        { id: 2, fund: "Emergency Fund", amount: 100 },
        { id: 3, fund: "Retirement Fund", amount: 300 },
        { id: 4, fund: "Vacation Fund", amount: 150 }, // Äldre bidrag
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newFund, setNewFund] = useState("");
    const [newAmount, setNewAmount] = useState("");

    const savingGoals = ["Vacation Fund", "Emergency Fund", "Retirement Fund"];

    const handleAddContribution = () => {
        if (newFund && newAmount) {
            const newContribution = {
                id: contributions.length + 1,
                fund: newFund,
                amount: parseInt(newAmount),
            };

            setContributions([newContribution, ...contributions]); // Lägger till det nya bidraget i början
            setShowForm(false);
            setNewFund("");
            setNewAmount("");
        }
    };

  return (
    <div className="savings-container">
      <h1>Savings</h1>

      {/* Savings goals */}
      <section className="savings-section">
        <div className="savings-header">
          <h2>Saving Goals</h2>
          <button className="add-goal-btn">Add new goal</button>
        </div>
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
 <section className="savings-section">
                <div className="savings-header">
                    <h2>Saving Contributions</h2>
                    <button className="add-goal-btn" onClick={() => setShowForm(!showForm)}>
                        {showForm ? "Close" : "New contribution"}
                    </button>
                </div>
                
                {showForm && (
                    <div className="contribution-form">
                        <select value={newFund} onChange={(e) => setNewFund(e.target.value)}>
                            <option value="">Select saving goal</option>
                            {savingGoals.map((goal, index) => (
                                <option key={index} value={goal}>{goal}</option>
                            ))}
                        </select>
                        <input
                            type="number"
                            placeholder="Amount (SEK)"
                            value={newAmount}
                            onChange={(e) => setNewAmount(e.target.value)}
                        />
                        <button onClick={handleAddContribution}>Add</button>
                    </div>
                )}

                {/* Shows last 3 contributions */}
                <div className="contribution-container">
                    {contributions.slice(0, 3).map((contribution) => (
                        <div key={contribution.id} className="contribution-card">
                            <h3>{contribution.fund}</h3>
                            <p>{contribution.amount} SEK</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
  );
}

export default Savings;
