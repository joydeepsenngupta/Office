import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import { MDBInput } from "mdbreact";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption,  MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBBtn} from "mdbreact"; 
import {MDBCollapseHeader} from "mdbreact";
class Hitachivantara extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }
 
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
 
  render() {
    return (
      <div className="hitachivantara" style={{width:'33%'}}>
        <p className="hitachivantara-intro">
        <MDBInput label="error type" type="error type" outline size="sm"/>
        <MDBInput label="Serial NUmber" type="Serial NUmber" outline size="sm"/>
        <div class="form-group">
    <label for="exampleFormControlSelect1">Prority</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <label for="exampleFormControlSelect1">Vendor</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>IBM</option>
      <option>Trinity</option>
      <option>ESS</option>
      <option>HP</option>
      <option>VTM</option>
    </select>
  </div>
  <MDBInput label="Vndor ticket" type="Vndor ticket" outline size="sm"/>
        {/* <MDBSelect>
          <MDBSelectInput selected="Choose your option" />
          <MDBSelectOptions>
            <MDBSelectOption disabled>Choose your option</MDBSelectOption>
            <MDBSelectOption value="1">Option 1</MDBSelectOption>
            <MDBSelectOption value="2">Option 2</MDBSelectOption>
            <MDBSelectOption value="3">Option 3</MDBSelectOption>
            <MDBSelectOption value="4">Option 4</MDBSelectOption>
            <MDBSelectOption value="5">Option 5</MDBSelectOption>
          </MDBSelectOptions>
        </MDBSelect> */}
          <button onClick={ () => this.handleClick() }>Check 1st Steps</button>
        </p>
        <ToggleDisplay show={this.state.show}>
        Click on one of the IPs for the array.
        </ToggleDisplay>
 
        <ToggleDisplay if={this.state.show} tag="section">
          And Click on "Simple Trace" near the bottom of the left side bar.
        </ToggleDisplay>
        <p className="hitachivantara-intro">
          <button onClick={ () => this.handleClick() }>Check 2ndt Steps</button>
        </p>
        <ToggleDisplay if={this.state.show} tag="selection">
        Click on "OK" on the popup.
        </ToggleDisplay>
        <MDBContainer>
      <MDBContainer className="mt-5">
        <MDBCard className="mt-3">
          <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
            Collapsible Group Item #1
            <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </MDBCollapseHeader>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
              ahlh
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <MDBCollapseHeader onClick={this.toggleCollapse("collapse2")}>
            Collapsible Group Item #2
            <i className={ collapseID==="collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </MDBCollapseHeader>
          <MDBCollapse id="collapse2" isOpen={collapseID}>
            <MDBCardBody>
              abcdhhhheee
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <MDBCollapseHeader onClick={this.toggleCollapse("collapse3")}>
            Collapsible Group Item #3
            <i className={ collapseID==="collapse3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </MDBCollapseHeader>
          <MDBCollapse id="collapse3" isOpen={collapseID}>
            <MDBCardBody>
              knila
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
      </div>
    );
  }
}
export default Hitachivantara;