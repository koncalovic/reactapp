import React from 'react';
import { FaClock, FaMoneyBillAlt, FaTicketAlt } from 'react-icons/fa';
import { calcTime, convertMoney } from '../../helpers';
import './MovieInfoBar.css';

const MovieInfoBar = (props) => {
  return (
    <div className="rmdb-movieinfobar">
      <div className="rmdb-movieinfobar-content">
        <div className="rmdb-movieinfobar-content-col">
          <FaClock className="fa-time" size="2em" />
          <span className="rmdb-movieinfobar-info">Running time: {calcTime(props.time)}</span>
        </div>
        <div className="rmdb-movieinfobar-content-col">
          <FaMoneyBillAlt className="fa-budget" size="2em" />
          <span className="rmdb-movieinfobar-info">Budget: {convertMoney(props.budget)}</span>
        </div>
        <div className="rmdb-movieinfobar-content-col">
          <FaTicketAlt className="fa-revenue" size="2em" />
          <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieInfoBar;