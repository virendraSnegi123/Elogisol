import React, { Component } from 'react';
// import { AiFillAmazonSquare } from "react-icons/ai";
/* <FontAwesomeIcon icon="fa-regular fa-gear" /> */ 
// import { FontAwesomeIcon } from "react-icons/fa";
// import { ProgressBar } from 'react-bootstrap';
// import { Bar, Doughnut } from 'react-chartjs-2';
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
export class Dashboard extends Component {
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      visitSaleData: {},
      visitSaleOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              display: false,
              min: 0,
              stepSize: 20,
              max: 80
            },
            gridLines: {
              drawBorder: false,
              color: 'rgba(235,237,242,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            }
          }],
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'rgba(0,0,0,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            },
            ticks: {
              padding: 20,
              fontColor: "#9c9fa6",
              autoSkip: true,
            },
            categoryPercentage: 0.5,
            barPercentage: 0.5
          }]
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          }
        }
      },
      trafficData: {},
      trafficOptions: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: false,
      },
      todos: [
        {
          id: 1,
          task: 'Pick up kids from school',
          isCompleted: false
        },
        {
          id: 2,
          task: 'Prepare for presentation',
          isCompleted: true
        },
        {
          id: 3,
          task: 'Print Statements',
          isCompleted: false
        },
        {
          id: 4,
          task: 'Create invoice',
          isCompleted: false
        },
        {
          id: 5,
          task: 'Call John',
          isCompleted: true
        },
        {
          id: 6,
          task: 'Meeting with Alisa',
          isCompleted: false
        }
      ],
      inputValue: '',
    }
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  statusChangedHandler(event, id) {

    //const todoIndex = this.state.todos.findIndex( t => t.id === id );
    const todo = { ...this.state.todos[id] };
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
      todos: todos
    })
  }

  addTodo(event) {
    event.preventDefault();

    const todos = [...this.state.todos];
    todos.unshift({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: this.state.inputValue,
      isCompleted: false

    })

    this.setState({
      todos: todos,
      inputValue: ''
    })
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos: todos
    })
  }

  inputChangeHandler(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  render() {
    return (
      <div className='dashboard row'>
        <nav class="dashboardnav navbar navbar-light ">
          <h3 className="page-title">
            <span className="page-title-icon ">
            </span></h3>
        </nav>

        <div class="HomaPage col-md-12">
          {/* <div class="card welcome-top"> */}
          <div class="col-md-12">
            <div class="logo-section text-center mt-5">
              <img src={require("../../assets/images/COMPANYLOGO.png")} alt="logo" />
            </div>
            <h3 class="text-center">Welcome To eLOGiPay </h3>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
// const ListItem = (props) => {

//   return (
//     <li className={(props.isCompleted ? 'completed' : null)}>
//       <div className="form-check">
//         <label htmlFor="" className="form-check-label">
//           <input className="checkbox" type="checkbox"
//             checked={props.isCompleted}
//             onChange={props.changed}
//           /> {props.children} <i className="input-helper"></i>
//         </label>
//       </div>
//       <i className="remove mdi mdi-close-circle-outline" onClick={props.remove}></i>
//     </li>
//   )
// };
export default Dashboard;