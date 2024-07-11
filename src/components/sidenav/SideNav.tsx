import React from 'react'
import { Button } from '@mui/material';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const SideNav = () => {
    return ( <section>
    {/* top of the nav - grid*/}
    <div>
        <img src="" alt="" />
        {/* blank search bar */}
        {/* button to open and close the nav bar */}
    </div>
    {/* dashboard button */}
    <Button startIcon={<SpaceDashboardIcon />}>Dashboard</Button>
    <h6>Team Management</h6>
    <ul>
        <li><PeopleAltIcon /> &nbsp; Employee</li>
        <li>Onboarding</li>
        <li>Leave</li>
        <li>Time tracking</li>
        <li>Rewards</li>
        <li>Costs</li>
        <li>Compensation</li>
        <li>Requests</li>
        <li>Feedback</li>
    </ul>
    <hr />
    <h6>Finances</h6>
    <ul>
        <li>Payroll</li>
        <li>Invoices</li>
        <li>Billing</li>
    </ul>
    </section> );
}
 
export default SideNav;