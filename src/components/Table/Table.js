import React from "react";
import "./Table.css";

const Table = ({ profiles, profilesPerPage, currentPage }) => {
  // to get a limited amount of profiles per page ,a little bit of maths is done
  const startIndex = (currentPage - 1) * profilesPerPage;
  const selectedProfiles = profiles("Female").slice(
    startIndex,
    startIndex + profilesPerPage
  );

  return (
    <div className="table-responsive">
      <table className="table table-hover result-table">
        <thead className="table-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Credit Card Number</th>
            <th scope="col">Credit Card Type</th>
            <th scope="col">Gender</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          {selectedProfiles.map((profile, i) => {
            return (
              <tr key={profile.CreditCardNumber} className="table-row">
                <th scope="row">{profile.FirstName}</th>
                <td> {profile.LastName} </td>
                <td> {profile.Email} </td>
                <td> {profile.CreditCardNumber} </td>
                <td> {profile.CreditCardType} </td>
                <td> {profile.Gender} </td>
                <td> {profile.PaymentMethod} </td>
                <td> {profile.UserName} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
