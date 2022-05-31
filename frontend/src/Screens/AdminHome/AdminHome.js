import React, { useState, useEffect } from 'react'
import MainScreen from '../../components/MainScreen'
import {Form, Card, Button} from "react-bootstrap";
import axios from 'axios';
import { Accordion, Badge} from "react-bootstrap";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import {useNavigate} from 'react-router-dom'
const AdminHome = () => {
  const history = useNavigate();
  
    const[orders, setOrders] = useState([])
    const[status, setStatus] = useState([])

    
    const Auth = JSON.parse(localStorage.getItem("isAuthenticated"));
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const isAdmin = userInfo.isAdmin
    console.log(isAdmin)
    useEffect(() => {
      if (Auth == false) {
        history('/login');
      }
      if (userInfo.isAdmin === false){
          history('/home')
      }
    }, []);
    
    const [cid, setCId] = useState(userInfo._id);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);




    const cancelHandler = async (id, orderstatus) => {

      if(orderstatus == 'Cancelled'){
        (window.confirm("The order is already cancelled, It cannot be updated now"))

      }
      else{
        const config = {
          headers: {
            "Content-type":"application/json"
          },
        }
        console.log(orderstatus)
        const {data} = await axios.post('/api/orders/updateorder', 
          {id, status},config)
          console.log(data)
          setSuccess("Order Status Updated Sucessfully");
          fetchData();

      
    }
    };

    const fetchData = async () => {
      const config = {
        headers: {
          "Content-type":"application/json",
        },
    };

    
    const {data} = await axios.post('/api/orders/getallorders', {cid},config)
    console.log(data)
    setOrders(data)
    
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <MainScreen title = 'Admin Home'>
        
        
        
        {success && (
                <ErrorMessage variant="success">
                  {success}
                </ErrorMessage>
              )}

        
        
          
        {

          
          orders.map(orders=>(
          
            <Accordion defaultActiveKey={["0"]}>
          <Accordion.Item eventkey="0">
              <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
              style={{
               color: "black",
               textDecoration: "none",
               flex: 1,
               cursor: "pointer",
               alignSelf: "center",
               fontSize: 18,}}
               >
                   <Accordion.Button as={Card.Text} variant="link">
                    Order No: {orders._id} From {orders.pickupcity} To {orders.deliverycity}
                  </Accordion.Button>
                 
                  </span>
              
              

            </Card.Header>
            <Accordion.Collapse>
            <Card.Body>
            <Card.Body>
                     <h4>
                       <Badge variant="Success">
                         Status - {orders.status}
                       </Badge>
                     </h4>
                     <blockquote className="blockquote mb-0">

                       <p>Pickup Address: {orders.pickupaddress} </p>
                       <p>Delivery Address: {orders.deliveryaddress }</p>
                       <p>Delivery Charges: {orders.cost}</p>
                       <footer className="blockquote-footer">
                         Booked on{" "}
                         <cite title="Source Title">
                           {orders.createdAt.substring(0, 10)}
                         </cite>
                         <div>
                         <Form.Select aria-label="Status"  value={status}  onChange={(e) => setStatus(e.target.value)}>
                        <option value="None">Select Delivery Status</option>
                        <option value="Picked Up"> Picked Up </option>
                        <option value="In Delivery Depot"> In Delivery Depot </option>
                        <option value="Out For Delivery"> Out For Delivery </option>
                        <option value="Delivered"> Delivered </option>
                        <option value="Cancelled"> Cancelled </option>

                        </Form.Select>
                                       
                        <Button variant = 'primary' className = 'mx-2' disabled = {orders.status == "Cancelled"}onClick={() => cancelHandler(orders._id,orders.status)}>Update</Button>
                        </div>
                       </footer>
                     </blockquote>
                   </Card.Body>
            </Card.Body>
            
            </Accordion.Collapse>
          </Card>
          </Accordion.Item>
          </Accordion>
          

            

          ))
              
        }
      
       
         

    
  </MainScreen>
  )
}

export default AdminHome
