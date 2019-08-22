import React, { Component } from "react";
import { DayPilotCalendar } from "daypilot-pro-react";

class Scheduler extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Đặt lịch hẹn</div>
          </h1>
        </section>
        <DayPilotCalendar
          viewType={"Week"}
          onTimeRangeSelected={args => {
            this.calendar.message(
              "Selected range: " +
                args.start.toString("hh:mm tt") +
                " - " +
                args.end.toString("hh:mm tt")
            );
          }}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
      </React.Fragment>
    );
  }
}
export default Scheduler;
