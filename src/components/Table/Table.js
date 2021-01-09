import React from "react";
import "./Table.css";

const Table = ({ profiles }) => {
  // CreditCardNumber: "4335484786639577";
  // CreditCardType: "VISA";
  // DomainName: "lLHBvRf.com";
  // Email: "jTcPkRF@WtwFiig.ru";
  // FirstName: "Destany";
  // Gender: "Male";
  // LastLogin: "1985-11-15 19:49:13";
  // LastName: "Schimmel";
  // Latitude: -69.86103;
  // Longitude: -173.23515;
  // MacAddress: "78:9e:83:77:c9:e9";
  // PaymentMethod: "money order";
  // PhoneNumber: "351-062-8974";
  // URL: "http://www.eLLmNhN.ru/";
  // UserName: "NITESrS";
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered result-table">
        <thead>
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
          {profiles.map((profile) => {
            return (
              <tr key={profile.CreditCardNumber}>
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
