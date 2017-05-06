import React, { Component } from "react";

const HELPERS = require("../utils/helpers");

// this component will allow a user to select a date to add a song for
// if the date is not already in the database, it will allow the user to add a song
// future enhancements: dynamically block dates on the calendar to only allow open dates to be selected

class DatePicker extends Component {

    constructor(props) {
        super(props);
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
            showOn: "button",
            buttonImage: "images/calendar.gif",
            buttonImageOnly: true,
            buttonText: "Select date"
        });
    }

    handleChange(e) {
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
                Date: <input type="text" id="datepicker" onSelect={this.handleChange}/>
            </div>
        );
    }
}

export default DatePicker;