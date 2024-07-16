import { useState, useId } from "react";
import Modal from "react-modal";

export default function NewExpenseModal({ setExpenses }) {
  // sets the root id as the id of the whole document
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const value = 1; // index for value of items in formData

    // destructure arrays out of formData object so we can check them
    const [title, amount, description, categories] = formData;

    const newExpense = {
      title: title[value],
      description: description[value] ? description[value] : "",
      amount: parseInt(amount[value]),
      categories: categories[value].toLowerCase().split(",").trim(), // split categories by ", " so that users can save multiple tags
    };

    setExpenses([...expenses, newExpense]);
    closeModal();
  }

  const descriptionId = useId();

  return (
    <>
      <button onClick={openModal} id="add-expense-button">
        Add Expense
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Expense"
        className="animate-top">
        <button className="modal-close" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-content">
          <form id="expense-form" className="modal-content" onSubmit={handleSubmit}>
            <label htmlFor="titleInput">Expense Title:</label>
            <br />
            <input name="titleInput" type="text" required />
            <br />

            <label htmlFor="amountInput">Amount:</label>
            <br />
            <input name="amountInput" type="number" required />
            <br />

            <label htmlFor={descriptionId}>Description:</label>
            <br />
            <textarea id={descriptionId} name="descriptionInput" rows={4} cols={40} />
            <br />

            <label htmlFor="categoryInput">Categories:</label>
            <br />
            <input name="categoryInput" type="text" />
            <br />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </Modal>
    </>
  );
}
