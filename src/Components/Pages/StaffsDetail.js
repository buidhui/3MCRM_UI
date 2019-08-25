import React from "react";
import StaffDetail from "../staff/StaffDetail";
const StaffsDetail = ({ match }) => {
  return (
    <React.Fragment>
      <section className="section">
        <h1 className="section-header">
          <div>Thông tin chi tiết nhân viên</div>
        </h1>
        <StaffDetail id={match.params.id} />
      </section>
    </React.Fragment>
  );
};
export default StaffsDetail;
