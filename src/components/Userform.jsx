import { React, useState } from "react";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = styled.form`
    background-color: #fff;
    box-shadow: 0px 0px 3px 2px #000;
    margin-top: 0px;
    margin: 10px 14px ;
    padding: 10px;
   
`
const Entername = styled.input`
   background-color: #fff;
   width: 65%;
   height: 26px;
   margin-left: 20px;
   margin-right: 30px;
   margin-top: 0px;
   margin-bottom: 0px;
   border: 2px ridge;
   border-radius: 5px;
`
const Dob = styled.input`
   background-color: #fff;
   width: 35%;
   height: 26px;
   margin-left: 12px;
   margin-right: 25px;
   margin-top: 0px;
   margin-bottom: 0px;
   border: 2px ridge;
   border-radius: 5px
 
 `
const Sex = styled.select`
 background-color: #fff;
 width: 20%;
 height: 26px;
 margin-left: 10px;
 margin-right: 10px;
 margin-top: 0px;
 margin-bottom: 0px;
 border: 2px ridge;
 border-radius: 5px
 `
const Mobile = styled.input`
 background-color: #fff;
 width: 50%;
 height: 26px;
 margin-left: 25px;
 margin-right: 50px;
 border: 2px ridge;
 border-radius: 5px

`
const Idtype = styled.select`
background-color: #fff;
width: 22%;
height: 26px;
margin-left: 3%;
margin-right: 0px;
border: 2px ridge;
border-radius: 5px

`
const Govtid = styled.input`
background-color: #fff;
width: 43%;
height: 26px;
margin-left: 7px;
margin-right: 25px;
border: 2px ridge;
border-radius: 5px

`
const Gaurdianlebel = styled.select`
background-color: #fff;
width: 20%;
height: 26px;
margin-left: 5px;
margin-right: 7px;
border: 2px ridge;
border-radius: 5px

`
const Gaurdianname = styled.input`
background-color: #fff;
width: 34%;
height: 26px;
margin-right: 20px;
border: 2px ridge;
border-radius: 5px

`
const Email = styled.input`
background-color: #fff;
width: 25%;
height: 26px;
margin-right: 22px;
margin-left: 2%;
border: 2px ridge;
border-radius: 5px

`

const Emergencycontact = styled.input`
background-color: #fff;
width: 25%;
height: 26px;
margin-left: 10px;
margin-right: 10px;
border: 2px ridge;
border-radius: 5px
`
const Adress = styled.input`
background-color: #fff;
width: 63%;
height: 26px;
margin-right: 25px;
margin-left:  25px;
border: 2px ridge;
border-radius: 5px
`
const State = styled.select`
background-color: #fff;
width: 30%;
height: 26px;
margin-right: 10px;
margin-left:  25px;
border: 2px ridge;
border-radius: 5px
`
const City = styled.select`
background-color: #fff;
width: 35%;
height: 26px;
margin-left:  25px;
margin-right: 25px;
border: 2px ridge;
border-radius: 5px
`

const Country = styled.select`
background-color: #fff;
width: 45%;
height: 26px;
margin-right: 155px;
margin-left:  15px;
margin-top:10px;
border: 2px ridge;
border-radius: 5px
`
const Pincode = styled.input`
background-color: #fff;
width: 23%;
height: 26px;
margin-right: 25px;
margin-left:  15px;
margin-top:10px;
border: 2px ridge;
border-radius: 5px
`
const Occupation = styled.input`
background-color: #fff;
width: 15%;
height: 26px;
margin-right: 25px;
margin-left:  18px;
border: 2px ridge;
border-radius: 5px
`
const Religion = styled.select`
background-color: #fff;
width: 13%;
height: 26px;
margin-left:  15px;
margin-right: 25px;
border: 2px ridge;
border-radius: 5px
`
const Meritalstatus = styled.select`
background-color: #fff;
width: 13%;
height: 26px;
margin-left:  20px;
margin-right: 25px;
border: 2px ridge;
border-radius: 5px
`
const Bloodgroup = styled.select`
background-color: #fff;
width: 6%;
height: 26px;
margin-left:  20px;
margin-right: 25px;
margin-top:20px;
border: 2px ridge;
border-radius: 5px
`
const Nationality = styled.select`
background-color: #fff;
width: 18%;
height: 26px;
margin-right: 25px;
margin-left:  20px;
margin-top:20px;
border: 2px ridge;
border-radius: 5px
`
const Labelright = styled.label`
margin-left: 12px; 
font-size: 18px;
text-shadow: 1px 0px 1px #000;

`
const Label = styled.label`

font-size: 18px;
text-shadow: 1px 0px 1px #000;
`
const Emergencynumber = styled.label`

font-size: 18px;
text-shadow: 1px 0px 1px #000;
`
const Lebelidissu = styled.label`

`
const Paragraph = styled.p`
text-decoration: underline;
margin-left: 12px; 
`
const Cancellbutton = styled.button`
background-color: #fff;
color: red;
height: 60px;
width: 120px;
border-radius: 5px;
margin-left: 35%;
border: 1px solid red;
padding: 8px 12px;
`
const Submitbutton = styled.button`
height: 60px;
width: 120px;
background-color: #fff;
color: green;
border: 1px solid green;
border-radius: 5px;
margin-left: 10%;
//  float: right;
 //margin-right: 40px;

// @media (max-width: 1200px) {
    
// height: 60px;
// width: 120px;
// background-color: #fff;
// color: green;
// border: 1px solid green;
// border-radius: 5px;
// float: right;
// margin-right: 40px;

// }

`
const Sup = styled.sup`
color: red;
`
const Age = styled.div`
font-size: 18px;
text-shadow: 1px 0px 1px #000;
margin-top: 0px;
`
const Emergencyvalidation = styled.div`
display: flex;
flex-direction: row;
`
const Number = styled.div`
margin-left: 38%;
margin-top: 0px;
font-size: 18px;
text-shadow: 1px 0px 1px #000;
`
const Option = styled.option`
color: lightgrey;
`
const Div = styled.div`
display: grid;
grid-template-columns: 45% 50%;
`



const Userform = () => {
    const navigate = useNavigate();

    const [isValid, setIsValid] = useState(false);
    const [isValida, setIsValida] = useState(false);
    const [whenshowError, setWhenshowError] = useState(true)
    const [aadhar, setAadhar] = useState('')
    const [emergency, setEmergency] = useState('')
    const [emergencyWhenshowError, setEmergencyWhenshowError] = useState(true)
    const [user, setUser] = useState({
        name: "",
        dob: "",
        sex: "",
        mobile: "",
        idtype: "",
        govtid: "",
        gaurdianlebel: "",
        gaurdianname: "",
        email: "",
        emergencycontact: "",
        address: "",
        state: "",
        city: "",
        country: "",
        pincode: "",
        occupation: "",
        religion: "",
        meritalstatus: "",
        bloodgroup: "",
        nationality: ""
    });

    const { name, dob, sex, mobile, idtype, govtid, gaurdianlebel, gaurdianname,
        email, emergencycontact, address, state, city, country, pincode, occupation,
        religion, meritalstatus, bloodgroup, nationality } = user;
    const onInputChange = e => {

        setUser({ ...user, [e.target.name]: e.target.value });


    };
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:4000/users", user);
        navigate("/user")
    };

    // console.log(isValid)
    const mobilevalidation = () => {
        const isValidMobileNumber = (mobileNumber) => {
            const regex = /^[6-9]\d{9}$/;
            return regex.test(mobileNumber);
        }

        if (isValidMobileNumber(user.mobile)) {
            setIsValid(true);
            setWhenshowError(true)
        } else {
            setIsValid(false);
            setWhenshowError(false)
        }
    }
    const emergencyvalidation = () => {
        const ValidMobileNumber = (mobileNumber) => {
            const regex = /^[6-9]\d{9}$/;
            return regex.test(mobileNumber);
        }

        if (ValidMobileNumber(user.emergencycontact)) {
            setEmergency(true);
            setEmergencyWhenshowError(true)
        } else {
            setEmergency(false);
            setEmergencyWhenshowError(false)
        }
    }

    console.log(aadhar)
    const selectid = () => {
        console.log(user.govtid)
        if (user.idtype === "Aadhar") {
            setIsValida(/^\d{12}$/.test(user.govtid));
            setAadhar("Please enter aadhar number")
        } else if (user.idtype === "PAN") {

            setIsValida(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(user.govtid));
            setAadhar("Please enter valid Pan Number")

        }

    }

    return (
        <>

            <Form onSubmit={e => onSubmit(e)}>
                <Paragraph><b>Personal Details</b></Paragraph>
                <Div>
                    <div>
                        <Labelright>Name <Sup>*</Sup></Labelright>
                        <Entername type="text" placeholder="Enter Name"
                            name="name" value={name} onChange={e => onInputChange(e)} required />
                    </div>
                    <div>
                        <Label>Date of Birth or </Label>
                        < Dob type="text" placeholder="DD/MM/YYYY or Age in Year"
                            name="dob" value={dob} onChange={e => onInputChange(e)} required />
                        <Label>Sex <Sup>*</Sup></Label>
                        <Sex name="sex" value={sex} onChange={e => onInputChange(e)} required >
                            <Option name="" value="" disabled selected hidden > Enter Sex</Option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Sex>
                        <Age>Age <Sup>*</Sup> </Age>
                    </div>
                    <div>
                        <Labelright>Mobile</Labelright>
                        <Mobile type="text" placeholder="Enter Mobile" onKeyUp={() => mobilevalidation()}
                            name="mobile" value={mobile} onChange={e => onInputChange(e)} />
                        {/* {!isValid && <span style={{ color: "red" }}>Invalid mobile number</span>} */}

                    </div>

                    <div>
                        <Label>Govt Issued ID</Label>
                        <Idtype name="idtype" value={idtype} onChange={e => { onInputChange(e) }}>
                            <option name="" value="" disabled selected hidden> ID Type</option>
                            <option value="Aadhar">Adhar-Card</option>
                            <option value="PAN">Pan-Card</option>
                        </Idtype>
                        <Govtid type="text" placeholder="Eneter Govt ID" onKeyUp={() => selectid()}
                            name="govtid" value={govtid} onChange={e => {
                                onInputChange(e)
                            }} />

                    </div>
                    <div>   {isValid ? (
                        <span style={{ color: "green", marginLeft: "18%" }}>VALID MOBILE NUMBER</span>
                    ) : (
                        <span style={{ color: "red", marginLeft: "18%" }}>{whenshowError ? "" : "Invalid mobile Number"} </span>
                    )}</div>
                    <div>                 {isValida ? (
                        <span style={{ color: "green", marginLeft: "55%" }}>VALID-ID  </span>
                    ) : (
                        <span style={{ color: "red", marginLeft: "45%" }}>{aadhar ? aadhar : ""} </span>
                    )}</div>
                </Div>
                <Paragraph><b>Contact Details</b></Paragraph>
                <Div>
                    <div>
                        <Labelright>Gaurdial Details</Labelright>
                        <Gaurdianlebel name="gaurdianlebel" value={gaurdianlebel} onChange={e => onInputChange(e)}>
                            <option value="" disabled selected hidden >Enter Label</option>
                            <option value="Father">Father</option>
                            <option value="mather">Mother</option>
                            <option value="Brother">Brohher</option>
                        </Gaurdianlebel>
                        <Gaurdianname type="text" placeholder="Enter Gaudian Name"
                            name="gaurdianname" value={gaurdianname} onChange={e => onInputChange(e)} />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Email type=" email" placeholder="Enter Email"
                            name="email" value={email} onChange={e => onInputChange(e)} />
                        <Emergencynumber>Emergency Contact</Emergencynumber>
                        <Emergencycontact type="text" placeholder="Enter Emergency No." onKeyUp={() => emergencyvalidation()}
                            name="emergencycontact" value={emergencycontact} onChange={e => onInputChange(e)} />
                        <Emergencyvalidation ><Number>Number</Number>
                            {emergency ? (
                                <span style={{ color: "green", marginLeft: "13%" }}>VALID MOBILE NUMBER</span>
                            ) : (
                                <span style={{ color: "red", marginLeft: "13%" }}>{emergencyWhenshowError ? "" : "Invalid mobile Number"} </span>
                            )}
                        </Emergencyvalidation>

                    </div>

                </Div>
                <Paragraph><b>Address Details</b></Paragraph>
                <Div>
                    <div>
                        <Labelright>Adress</Labelright>
                        <Adress type=" text" placeholder="Enter adress"
                            name="address" value={address} onChange={e => onInputChange(e)} />
                    </div>
                    <div>
                        <Label>State</Label>
                        <State name="state" value={state} onChange={e => onInputChange(e)}>
                            <option name="" value="" disabled selected hidden>Enter State</option>
                            <option value="Andhra-Pradesh">Andhra Pradesh</option>
                            <option value="Andhra-Pradesh">Arunachal Pradesh</option>
                            <option value="Andhra-Pradesh"> Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Uttar-pradesh">Uttar Pradesh</option>
                        </State>
                        <Label>City</Label>
                        <City name="city" value={city} onChange={e => onInputChange(e)}>
                            <option value="" disabled selected hidden>Enter City/Town/Village</option>
                            <option value="agra">Agra</option>
                            <option value="delhi">Delhi</option>
                            <option value="lucknow">Lucknow</option>
                            <option value="kanpur">Kanpur</option>
                        </City>
                    </div>
                    <div>
                        <Labelright>Country</Labelright>
                        <Country name="country" value={country} onChange={e => onInputChange(e)}>
                            <option name="" value="" disabled selected hidden>Enter Country</option>
                            <option value="Austria">Austria</option>
                            <option value="India">India</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="Nepal">Nepal</option>
                        </Country>
                    </div>
                    <div>
                        <Label>Pincode</Label>
                        <Pincode type=" text" placeholder="Enetr Pincode"
                            name="pincode" value={pincode} onChange={e => onInputChange(e)} />
                    </div>
                </Div>
                <Paragraph><b>Other Details</b></Paragraph>
                <Labelright>Occupation</Labelright>
                <Occupation type=" text" placeholder="Enetr Occupation"
                    name="occupation" value={occupation} onChange={e => onInputChange(e)} />
                <Label>Religion</Label>
                <Religion name="religion" value={religion} onChange={e => onInputChange(e)}>
                    <option name="" value="" disabled selected hidden>Enter Religion</option>
                    <option value="Agra">Agra</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lukhnow" >Lucknow</option>
                    <option value="Kanpur" >Kanpur</option>
                </Religion>
                <Label>Marital Status</Label>
                <Meritalstatus name="meritalstatus" value={meritalstatus} onChange={e => onInputChange(e)}>
                    <option value="" disabled selected hidden>Enter Marital Status</option>
                    <option value="unMarris" >UnMarried</option>
                    <option value="Married" >Married</option>
                </Meritalstatus>
                <Label>Blood Group</Label>
                <Bloodgroup name="bloodgroup" value={bloodgroup} onChange={e => onInputChange(e)}>
                    <option value="" disabled selected hidden>Group</option>
                    <option value="A" >A</option>
                    <option value="A+" >A+</option>
                    <option value="B" >B</option>
                    <option value="B+" >B+</option>
                </Bloodgroup>
                <br />
                <Labelright>Nationality</Labelright>
                <Nationality name="nationality" value={nationality} onChange={e => onInputChange(e)}>
                    <option value="" disabled selected hidden>Enter Nationality</option>
                    <option value="Austria" >Austria</option>
                    <option value="India" >India</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="Nepal">Nepal</option>
                </Nationality>
                <Div>
                    <div></div>
                    <div>
                        <Cancellbutton >CANCEL </Cancellbutton>
                        <Submitbutton >SUBMIT</Submitbutton>
                    </div>
                </Div>
            </Form>
        </>
    )
}
export default Userform;