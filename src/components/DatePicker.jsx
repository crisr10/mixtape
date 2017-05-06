import React, { Component } from "react";

const HELPERS = require("../utils/helpers");

// this component will allow a user to select a date to add a song for
// if the date is not already in the database, it will allow the user to add a song
// future enhancements: dynamically block dates on the calendar to only allow open dates to be selected

class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.disableDates = this.disableDates.bind(this);
        this.handleChange = this.handleChange.bind(this);


        this.state = {
            date: "",
            disabledDates: []
        };
    }

    componentWillMount() {
        HELPERS.getDates()
            .then(function(results) {
                this.setState({
                    disabledDates: results
                });
            })
    }

    componentDidMount() {
        $("#datepicker").datepicker({
            beforeShowDay: disableDates,
            showOn: "button",
            // buttonImage: "images/calendar.gif",
            // buttonImageOnly: true,
            buttonText: "Select date"
        });
    }

    disableDates(date) {

        let m = date.getMonth();
        let d = date.getDate();
        let y = date.getFullYear();

        // First convert the date in to the mm-dd-yyyy format
        // Take note that we will increment the month count by 1
        let currentdate = (m + 1) + '-' + d + '-' + y;

        // We will now check if the date belongs to disableddates array
        for (let i = 0; i < this.state.disabledDates.length; i++) {

            // Now check if the current date is in disabled dates array.
            if ($.inArray(currentdate, this.state.disabledDates) != -1) {
                return [false];
            }
        }
    }

    dateChange(e) {
        HELPERS.checkDate(e.target.value)
            .then(function(result) {
                if (result) {
                    alert("Date already picked");
                } else {
                    this.setState({
                        date: e.target.value
                    });
                }
            })
    }

    render() {
        return (
            <div>
                Date: <input type="text" id="datepicker" onSelect={this.dateChange}/>
            </div>
        );
    }
}

export default DatePicker;