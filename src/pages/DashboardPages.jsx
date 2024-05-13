import React, { Component } from 'react';
import { connect } from 'react-redux';
import Balance from '../components/Dashboard/Balance';
import Expense from '../components/Dashboard/Expense';
import TransactionsList from '../components/Dashboard/TransactionsList';
import AddTransactions from '../components/Dashboard/AddTransactions';
import { addTransaction, deleteTransaction, editTransaction } from '../redux/actions';
import Income from '../components/Dashboard/Income';
import { toast } from 'react-toastify';

export class Main extends Component {
  state = {
    showAddForm: false,
  };

  toggleAddForm = () => {
    this.setState({ showAddForm: !this.state.showAddForm });
  };

  handleAddTransaction = (transaction) => {
    this.props.addTransaction(transaction);
    this.setState({ showAddForm: false });
    toast.success('Transaction added successfully');
  };

  handleEditTransaction = (transaction) => {
    this.props.editTransaction(transaction);
    toast.success('Transaction updated successfully');
  };

  handleDeleteTransaction = (id) => {
    this.props.deleteTransaction(id);
    toast.error('Transaction deleted successfully');
  };

  render() {
    const { transactions } = this.props;
    const { showAddForm } = this.state;

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex lg:flex-col lg:gap-4 lg:max-w-[1200px] lg:mx-auto">
          <div className="lg:flex lg:gap-2 mx-auto">
            <div className="flex-grow">
              <Balance transactions={transactions} />
            </div>
            <div className="flex-grow">
              <Income transactions={transactions} />
            </div>
            <div className="flex-grow">
              <Expense transactions={transactions} />
            </div>
          </div>
          <div>
            <div>
              {showAddForm ? (
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 lg:mt-0 lg:mr-2" onClick={this.toggleAddForm}>
                  Cancel
                </button>
              ) : (
                <button className="bg-color-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 lg:mt-0 lg:mr-2" onClick={this.toggleAddForm}>
                  Add Transaction
                </button>
              )}
              {showAddForm && <AddTransactions addTransaction={this.handleAddTransaction} id={transactions[0] ? transactions[0].id + 1 : 1} />}
            </div>
          </div>
          {!showAddForm && <TransactionsList transactions={transactions} deleteTransaction={this.handleDeleteTransaction} editTransaction={this.handleEditTransaction} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  editTransaction: (transaction) => dispatch(editTransaction(transaction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
