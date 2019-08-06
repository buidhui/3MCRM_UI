import React from "react";
import StaffDetail from '../staff/StaffDetail'
const ChiTietNhanVien =  ({match}) => {
    return (
        <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Thông tin cơ bản </div>
          </h1>
          <StaffDetail id={match.params.id} />
        </section>
      </React.Fragment>
    );
  }
export default ChiTietNhanVien;
